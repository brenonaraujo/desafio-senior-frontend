interface Unit {
    label: string;
    value: string;
}

export class MeasurementUnity {

    private measurementUnits: Unit[];

    constructor() {

        // Array com as unidades de medida
        this.measurementUnits = [
            { label: 'Selecione a unidade de medida', value: '' },
            { label: 'Litros', value: 'lt' },
            { label: 'Kilogramas', value: 'kg' },
            { label: 'Unidade', value: 'un' }
        ];
    }

    public getMeasurementUnits() {
        return this.measurementUnits;
    }

}
