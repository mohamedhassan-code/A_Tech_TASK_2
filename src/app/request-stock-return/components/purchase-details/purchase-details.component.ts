import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-purchase-details',
  standalone: true,
  imports: [TranslateModule, DropdownModule],
  templateUrl: './purchase-details.component.html',
  styleUrl: './purchase-details.component.scss',
})
export class PurchaseDetailsComponent {
  cities = [
    { name: 'Test1', code: 'NY' },
    { name: 'Test2', code: 'RM' },
    { name: 'Test3', code: 'LDN' },
    { name: 'Test4', code: 'IST' },
  ];
}
