// Classe do objeto quantity facilitando a manutencao do codigo
export class Quantity {
    unity: string;
    availability: boolean;
    placeholder: string;
    mask: string;

    constructor(unity: string, availability: boolean, placeholder: string, mask: string) {
        this.unity = unity;
        this.availability = availability;
        this.placeholder = placeholder;
        this.mask = mask;
    }

    // Altera o placeholder de acordo com a unidade de medidade selecionada e mask
    public setPlaceholder(unity: string) {
        switch (unity) {
            case 'lt': {
                this.placeholder = '1.000';
                this.mask = '0*.000';
                break;
            }
            case 'kg': {
                this.placeholder = '1.000';
                this.mask = '0*.000';
                break;
            }
            case 'un': {
                this.placeholder = '1';
                this.mask = '0*';
                break;
            }
        }
    }
}
