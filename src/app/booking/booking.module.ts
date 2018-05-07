import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './components/booking/booking.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[BookingComponent],
  declarations: [BookingComponent]
})
export class BookingModule { }
