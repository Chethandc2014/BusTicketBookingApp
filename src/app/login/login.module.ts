import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { LoginFooterComponent } from './components/login-footer/login-footer.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { AuthService } from '../shared/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FooterModule,
    HeaderModule
    
  ],
  declarations: [LoginComponent, LoginHeaderComponent, LoginFooterComponent],
  providers:[AuthService]
})
export class LoginModule { }
