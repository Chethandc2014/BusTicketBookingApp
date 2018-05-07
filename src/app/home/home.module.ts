import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SearchModule } from '../search/search.module';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './routes/home.routes';

@NgModule({
  imports: [
    CommonModule,
    SearchModule,
    RouterModule.forChild(HOME_ROUTES)
  ],
  declarations: [HomeComponent, HomeFooterComponent, HomeHeaderComponent, LogoutComponent],
})
export class HomeModule { }
