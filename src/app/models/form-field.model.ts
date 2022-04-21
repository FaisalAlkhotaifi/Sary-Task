export interface FormFieldConfig {
    value?: any
    title: string;
    type: string;
    api?: string;
    multiple?: boolean;
}

export enum eFormFieldType {
    text,
    dropdown,
    date
}