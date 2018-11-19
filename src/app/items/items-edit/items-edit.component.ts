import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/shared/services/items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/shared/models/item.model';
import { MessageService } from 'primeng/api';
import { Quantity } from 'src/app/shared/models/quantity.model';

@Component({
  selector: 'app-items-edit',
  templateUrl: './items-edit.component.html',
  styleUrls: ['./items-edit.component.scss'],
  providers: [MessageService, ItemsService]
})
export class ItemsEditComponent implements OnInit {
  item = new Item();
  quantity = new Quantity('', false, '', {});

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.item = data[0];
      this.quantity.unity = this.item.measurementUnity;
      this.quantity.setPlaceholder(this.item.measurementUnity);
      this.quantity.availability = true;
    });
  }

  onValidItem(item) {
    this.route.paramMap.subscribe(res => {
      this.itemsService.updateItem(Number(res.get('index')), item)
        .then(result => {
          this.messageService.add({
            key: 'edit-toast',
            severity: 'success',
            summary: 'Item Editado',
            detail: `O item ${result.itemName} foi editado com sucesso!`
          });
          this.router.navigate(['items/list']);
        })
        .catch(err => {
          this.messageService.add({
            key: 'edit-toast',
            severity: 'danger',
            summary: 'Erro ao Editar',
            detail: `Erro: ${err}`
          });
        });
    });
  }

}
