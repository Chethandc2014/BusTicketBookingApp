import { Routes } from "@angular/router";
import { LoginComponent } from "../login/components/login/login.component";
import { HomeComponent } from "../home/components/home/home.component";
import { RegistrationComponent } from "../registration/components/registration/registration.component";
import { BookingComponent } from "../booking/components/booking/booking.component";




export const APP_ROUTES:Routes=[
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'register',component:RegistrationComponent}
  ];