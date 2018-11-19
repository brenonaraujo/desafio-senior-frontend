import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ItemsService } from 'src/app/shared/services/items.service';
import { Item } from 'src/app/shared/models/item.model';
import { Quantity } from 'src/app/shared/models/quantity.model';

@Component({
  selector: 'app-items-create',
  templateUrl: './items-create.component.html',
  styleUrls: ['./items-create.component.scss'],
  providers: [MessageService, ItemsService]
})
export class ItemsCreateComponent implements OnInit {
  item = new Item();
  quantity = new Quantity('', false, '', '');

  constructor(
    private messageService: MessageService,
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.item.quantity = 0;
  }

  onValidItem(item) {
    this.itemsService.saveItem(new Item(item))
      .then(res => {
        this.messageService.add({
          key: 'create-toast',
          severity: 'success',
          summary: 'Item Salvo',
          detail: `O item ${res.itemName} foi salvo com sucesso!`
        });
      }).catch(err => {
        this.messageService.add({
          key: 'create-toast',
          severity: 'danger',
          summary: 'Erro ao tentar salvar',
          detail: `ERROR: ${err}`
        });
      });
  }

}
