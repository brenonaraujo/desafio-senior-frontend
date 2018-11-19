import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MeasurementUnity } from '../../shared/models/measurementUnity.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Quantity } from 'src/app/shared/models/quantity.model';
import { Item } from 'src/app/shared/models/item.model';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-form',
  templateUrl: './items-form.component.html',
  providers: [MessageService]
})
export class FormComponent implements OnInit {

  // Configuracoes do modulo de validacoes de moeda!
  public ngxCurrencyOptions = {
    prefix: 'R$ ',
    thousands: '.',
    decimal: ',',
    precision: 2,
    allowNegative: false,
    nullable: true
  };

  // Istancia da classe contendo as opcoes de unidade de medida
  units = new MeasurementUnity;

  // Objeto item.
  @Input() item: Item;
  @Input() quantityObject: Quantity;

  // Emmit um evento contendo um item Validado
  @Output() validItem = new EventEmitter<Item>();

  // Instancia da classe Quantity para validacoes e regras do campo quantidade recebe como parametro do componente os dados
  quantity: Quantity;

  // Data Limite para a data de fabricacao;
  maxDate = new Date();

  // Variavel para validar a exibicao do incone que informa se o produto esta vencido
  outOfDate = false;

  // Inicializacao do formulario
  itemForm: FormGroup;

  // Variavel para verificar a tentativa de envio do formulario
  private formSumitAttempt: boolean;

  /* ToDO: Verificar a necessidade de exportar em uma classe em /shared
   Custom regex para utilizar nos campos que permitam apenas caracteres alpha com space (primeNG nao possui essa opcao)
  */
  alphaWithSpace: RegExp = /^[A-Za-z\s]+$/;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.quantity = this.quantityObject;

    // Inicializacao do formulario e regras de validacao
    this.itemForm = this.formBuilder.group({
      itemName: new FormControl(
        this.item.itemName,
        Validators.compose([Validators.required, Validators.maxLength(50)])
      ),
      measurementUnity: new FormControl(
        this.item.measurementUnity,
        Validators.required
      ),
      quantity: new FormControl({
        value: this.item.quantity,
        disabled: (!this.item.quantity)
      }, Validators.pattern(/^\d+(\.\d{1,3})?$/)),
      price: [this.item.price, Validators.required],
      perishable: [this.item.perishable, Validators.required],
      validationDate: [{
        // verifica se ja existe um valor atribuido para validationDate caso tenha transforma em um date para o component p-calendar
        value: (!this.item.validationDate) ? undefined : new Date(this.item.validationDate),
        disabled: (!this.item.manufacturingDate)
      }],
      manufacturingDate: [{
        // Mesma vericacao do item anterior porem para a variavel manufacturingDate
        value: (!this.item.manufacturingDate) ? undefined : new Date(this.item.manufacturingDate),
        disabled: false
      }]
    });

    // Verifica a mudanca no measurementUnity Dropdown para setar as regras de acordo com a unidade selecionada
    this.itemForm.get('measurementUnity').valueChanges.subscribe(value => {
      console.log(value);
      const quantityForm = this.itemForm.get('quantity');
      this.quantity.unity = value;
      this.quantity.setPlaceholder(value);
      if (value !== '') {
        quantityForm.enable();
      } else {
        quantityForm.disable();
      }
    });

    // verifica se o campo da data de validade dever ser habilitado e validado;
    this.itemForm.get('perishable').valueChanges.subscribe(checked => {
      const validationDate = this.itemForm.get('validationDate');
      if (JSON.parse(checked)) {
        validationDate.enable();
        validationDate.setValidators(Validators.required);
        validationDate.updateValueAndValidity();
      } else {
        validationDate.setValue(null);
        validationDate.disable();
        validationDate.clearValidators();
      }
    });

    // Verifica a data de validade para informar se o produto esta vencido
    this.itemForm.get('validationDate').valueChanges.subscribe(date => {
      if (date !== null && (date < new Date())) {
        this.outOfDate = true;
      } else {
        this.outOfDate = false;
      }
    });

  }

  // Verifica se os campos estao validos ao tocar e ao tentar salvar
  isFieldValid(field: string) {
    return (
      (this.itemForm.get(field).enabled && !this.itemForm.get(field).valid && this.itemForm.get(field).touched) ||
      (this.itemForm.get(field).enabled && this.itemForm.get(field).untouched && this.formSumitAttempt)
    );
  }

  /*  Verifica se o campo data de validade e required
  (OBS: A ideia era criar uma forma generica de verificar se o campo e required com base no Validation.required porem nao foi possivel!
  */
  isRequired() {
    return { 'required': this.itemForm.get('validationDate').enabled };
  }

  // Verifica se o formalario passou em todas as validacoes e entao envia-o
  onSubmit() {
    this.formSumitAttempt = true;
    if (this.itemForm.valid) {
      this.validItem.emit(new Item(this.itemForm.value));
      this.itemForm.reset();
      this.formSumitAttempt = false;
    } else {
      this.messageService.add({
        key: 'form-toast', severity: 'info', summary: 'Formulario invalido', detail: 'Verifique os campos destacados'
      });
    }
  }

  onCancel() {
    this.router.navigate(['items/list']);
  }

}
