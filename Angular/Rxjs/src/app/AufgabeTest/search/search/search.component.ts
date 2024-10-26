import { Component } from '@angular/core';
import {debounceTime, distinctUntilChanged, Subject, switchMap} from "rxjs";
import {SearchService} from "../search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  private searchTerms = new Subject<string>();
  searchResults: string[] = [];

  constructor(private searchService: SearchService) {

    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.searchService.search(term))
    ).subscribe(results => {
      this.searchResults = results;
      console.log('Suchergebnisse:', results);
    });
  }


  onSearch(term: string): void {
    this.searchTerms.next(term);
  }
}
