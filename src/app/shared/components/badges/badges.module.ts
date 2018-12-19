import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BadgesComponent],
  exports: [BadgesComponent]
})
export class BadgesModule {
}
