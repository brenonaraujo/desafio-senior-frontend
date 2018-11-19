import { Component, OnInit, Pipe } from '@angular/core';
import { ItemsService } from 'src/app/shared/services/items.service';
import { Item } from 'src/app/shared/models/item.model';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  providers: [ItemsService, MessageService]
})
export class ListComponent implements OnInit {
  items: Item[];
  columns: any[];

  constructor(private itemsService: ItemsService, private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.itemsService.getItems()
      .then(res => {
        this.items = res;
      });

    this.columns = [
      { field: 'itemName', header: 'Nome' },
      { field: 'measurementUnity', header: 'Unidade de medida' },
      { field: 'quantity', header: 'Quantidade' },
      { field: 'price', header: 'Preco' },
      { field: 'perishable', header: 'Produto peressivel' },
      { field: 'validationDate', header: 'Validade' },
      { field: 'manufacturingDate', header: 'Fabricacao' },
      { field: 'actions', header: 'Acoes' }
    ];
  }

  editItem(item: Item) {
    this.router.navigate([`items/edit/${this.items.indexOf(item)}`]);
  }

  removeItem(item: Item) {
    this.messageService.add({
      key: 'removeConfirm',
      data: item, sticky: true,
      severity: 'warn',
      summary: 'Voce tem certeza?',
      detail: 'Confirme para DELETAR'
    });
  }

  onRemoveConfirm(item: Item) {
    this.messageService.clear('removeConfirm');
    this.itemsService.removeItem(this.items, item)
      .then(res => {
        this.items = res;
        this.messageService.add({
          key: 'remove-toast',
          severity: 'success',
          summary: 'Item Removido!',
          detail: `O item foi removido`
        });
      }).catch(err => {
        console.log(err);
        this.messageService.add({
          severity: 'danger',
          summary: 'Erro!',
          detail: `O item nao foi removido`
        });
      });
  }

  onRemoveReject() {
    this.messageService.clear('removeConfirm');
  }

}
