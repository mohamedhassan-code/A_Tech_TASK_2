import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-reason-return',
  standalone: true,
  imports: [
    SkeletonModule,
    ReactiveFormsModule,
    TranslateModule,
    InputTextareaModule,
  ],
  templateUrl: './reason-return.component.html',
  styleUrl: './reason-return.component.scss',
})
export class ReasonReturnComponent {
  text = new FormControl('');
}
