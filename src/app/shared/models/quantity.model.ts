// Classe do objeto quantity facilitando a manutencao do codigo
export class Quantity {
    unity: string;
    availability: boolean;
    placeholder: string;
    mask: object;

    constructor(unity: string, availability: boolean, placeholder: string, mask: object) {
        this.unity = unity;
        this.availability = availability;
        this.placeholder = placeholder;
        this.mask = mask;
    }

    // Altera o placeholder de acordo com a unidade de medidade selecionada e as opcoes mask
    public setPlaceholder(unity: string) {
        switch (unity) {
            case 'lt': {
                this.placeholder = '1.000';
                this.mask = {
                    prefix: '',
                    thousands: ',',
                    decimal: '.',
                    precision: 3,
                    allowNegative: false,
                    nullable: true
                };
                break;
            }
            case 'kg': {
                this.placeholder = '1.000';
                this.mask = {
                    prefix: '',
                    thousands: ',',
                    decimal: '.',
                    precision: 3,
                    allowNegative: false,
                    nullable: true
                };
                break;
            }
            case 'un': {
                this.placeholder = '1';
                this.mask = {
                    prefix: '',
                    thousands: ',',
                    decimal: '.',
                    precision: 0,
                    allowNegative: false,
                    nullable: true
                };
                break;
            }
        }
    }
}
