//Library deopendencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

//Project dependencies
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/components/login/login.component'

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './routes/app.routes';
import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { RegistrationModule } from './registration/registration.module';
import { ComponentCreationService } from './shared/services/component-creation.service';
import { BookingModule } from './booking/booking.module';
import { UserDataService } from './shared/services/user-data.service';
import { HttpClientModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //App Modules
    LoginModule,
    RegistrationModule,
    HomeModule,
    BookingModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ComponentCreationService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
