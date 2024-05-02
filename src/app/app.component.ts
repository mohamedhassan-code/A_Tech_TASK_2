import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DirectionService } from './core/services/direction.service';
import { Language } from './core/enums';
import { DialogService } from 'primeng/dynamicdialog';
import { RequestStockReturnComponent } from './request-stock-return/request-stock-return.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'newTask';
  currentLang: any;
  constructor(
    private dialogService: DialogService,
    private __translate: TranslateService,
    private __setDirection: DirectionService
  ) {
    this.currentLang = localStorage.getItem('lang') || Language.Arabic;
    this.__translate.use(this.currentLang);
    this.__setDirection.changeDocumentDirection(this.currentLang);
  }
  changeLang() {
    this.__translate.currentLang === Language.Arabic
      ? localStorage.setItem('lang', Language.English)
      : localStorage.setItem('lang', Language.Arabic);
    window.location.reload();
  }
  openDialog() {
    this.dialogService.open(RequestStockReturnComponent, {
      showHeader: false,
      styleClass: 'dialogDeal',
    });
  }
}
