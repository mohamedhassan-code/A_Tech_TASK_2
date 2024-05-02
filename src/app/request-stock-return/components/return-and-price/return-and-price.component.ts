import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-return-and-price',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    InputNumberModule,
  ],
  templateUrl: './return-and-price.component.html',
  styleUrl: './return-and-price.component.scss',
})
export class ReturnAndPriceComponent {
  value: number = 10;
  prefix: string = '';
  prefixCurrency: string = '';
  currency = new FormControl('44');
  constructor(private translateService: TranslateService) {
    this.prefix = this.translateService.instant('unit');
    this.prefixCurrency = this.translateService.instant('Egp');
  }
}
