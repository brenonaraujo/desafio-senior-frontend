export class Item {
    itemName: string;
    measurementUnity: string;
    quantity: number;
    price: number;
    perishable: boolean;
    validationDate: Date;
    manufacturingDate: Date;

    public constructor(init?: Partial<Item>) {
        Object.assign(this, init);
    }
}
