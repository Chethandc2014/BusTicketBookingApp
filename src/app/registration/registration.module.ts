import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './components/address/address.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { RegistrationDataService } from './services/registration-data.service';


const REGIS_ROUTES: Routes = [
  {
    path: 'register', component: RegistrationComponent,
    children: [
      { path: 'basicinfo', component: BasicInfoComponent },
      { path: 'address', component: AddressComponent }
    ]
  }
]


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(REGIS_ROUTES),
    FooterModule,
    HeaderModule
  ],
  declarations: [RegistrationComponent, AddressComponent, BasicInfoComponent],
  providers:[RegistrationDataService]
})
export class RegistrationModule { }
