import { NgModule } from "@angular/core";
import { MessageService } from "primeng/api";

import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  imports: [
    ToastModule,
    DropdownModule,
    TabViewModule
  ],
  exports: [
    ToastModule,
    DropdownModule,
    TabViewModule
  ],
  providers: [MessageService]
})

export class PrimeNgImportsModule {}