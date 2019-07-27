import { Component } from '@angular/core';
import { CloudSearchApiService } from './cloud-search-api.service';
import { IResults } from './i-results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CloudProjectUI';
  model = '';
  results: IResults = { results: [] };

  constructor(private cloudSearchApiService: CloudSearchApiService) {}
  onSearchButtonClick() {
    this.cloudSearchApiService.search(this.model).subscribe(results => {
      this.results = results;
    });
  }
}
