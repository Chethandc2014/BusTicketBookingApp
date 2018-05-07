import { Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { SearchPanelComponent } from "../../search/components/search-panel/search-panel.component";
import { BookingComponent } from "../../booking/components/booking/booking.component";






export const HOME_ROUTES: Routes = [
    {
        path: 'home', component: HomeComponent,
        children: [{ path: '', component: SearchPanelComponent },
                   { path: 'booking', component: BookingComponent }
                  ]
    },

];