
export interface Item {
    value: string;
    text: string;
}

export interface Field {
    label: string;
    key: string;
    isRequired: boolean;
    order: number;
    isReadonly: boolean;
    type: string;
    unit: string;
    items: Item[];
}

export interface RootObject {
    fields: Field[];
}

