import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormFieldConfig } from 'src/app/models/form-field.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() formFields: FormFieldConfig[] = [];
  @Input() actionName: string = 'Submit';

  @Output() onSubmitForm: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup = new FormGroup({});
  payLoad = ' ';

  constructor() { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  onSubmit() {
    this.onSubmitForm.emit(this.form.value);
  }

  // Private Methods

  private createFormGroup() {
    this.form = new FormGroup({});
    this.formFields
      .forEach(field => {
        this.form.addControl(field.title, new FormControl(field.value || ''));
      });
  }
}
