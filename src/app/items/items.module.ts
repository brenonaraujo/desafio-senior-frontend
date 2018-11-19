import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ItemsRoutingModule } from './items-routing.module';
import { FormComponent } from './items-form/items-form.component';
import { ListComponent } from './items-list/items-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputMaskModule } from 'primeng/inputmask';
import { NgxCurrencyModule } from 'ngx-currency';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { ItemsService } from '../shared/services/items.service';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MeasurementUnityPipe } from '../shared/pipes/measurementUnity.pipe';
import { ItemsEditComponent } from './items-edit/items-edit.component';
import { ItemsCreateComponent } from './items-create/items-create.component';
import { ItemsResolver } from './items.resolver';
import { MessageService } from 'primeng/api';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [FormComponent, ListComponent, MeasurementUnityPipe, ItemsEditComponent, ItemsCreateComponent ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    InputSwitchModule,
    CalendarModule,
    ReactiveFormsModule,
    MessageModule,
    InputTextModule,
    KeyFilterModule,
    InputMaskModule,
    NgxCurrencyModule,
    RadioButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    ItemsService,
    ItemsResolver,
    MessageService
  ]
})
export class ItemsModule { }
