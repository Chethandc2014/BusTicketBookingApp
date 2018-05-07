import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SeatDetailsComponent } from './components/seat-details/seat-details.component';
import { SearchComponentManagerDirective } from './directives/search-component-manager.directive';
import { SearchResultDataService } from './services/search-result-data.service';
import { SearchCompViewRefService } from './services/search-comp-view-ref.service';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[SearchPanelComponent,SearchResultComponent],
  declarations: [SearchPanelComponent, SearchResultComponent, SeatDetailsComponent, SearchComponentManagerDirective, SearchFieldComponent],
  entryComponents:[SearchResultComponent,SeatDetailsComponent],
  providers:[SearchResultDataService,SearchCompViewRefService]
})
export class SearchModule { }
