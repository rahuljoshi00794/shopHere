import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { UserHistoryComponent } from './components/user-history/user-history.component';


@NgModule({
  declarations: [UserHistoryComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
