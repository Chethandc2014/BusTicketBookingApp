import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent],
  declarations: [HeaderComponent]
})
export class HeaderModule { }
