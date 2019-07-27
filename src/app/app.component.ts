import { Component } from '@angular/core';
import { CloudSearchApiService } from './cloud-search-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CloudProjectUI';
  model = '';

  constructor(private cloudSearchApiService: CloudSearchApiService) {}
  onSearchButtonClick() {
    this.cloudSearchApiService.search(this.model).subscribe(results => {
      results.results.forEach(result => console.log(result));
    });
  }
}
