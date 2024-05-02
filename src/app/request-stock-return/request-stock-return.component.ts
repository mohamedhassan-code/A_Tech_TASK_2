import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DropdownFocusDirective } from '../core/directives/directive';
import {
  PurchaseDetailsComponent,
  ReasonReturnComponent,
  ReturnAndPriceComponent,
} from './components';
@Component({
  selector: 'app-request-stock-return',
  standalone: true,
  imports: [
    TranslateModule,
    PurchaseDetailsComponent,
    ReasonReturnComponent,
    ReturnAndPriceComponent,
  ],
  templateUrl: './request-stock-return.component.html',
  styleUrl: './request-stock-return.component.scss',
  providers: [DropdownFocusDirective],
})
export class RequestStockReturnComponent {
  constructor(public __dialogRef: DynamicDialogRef) {}
}
