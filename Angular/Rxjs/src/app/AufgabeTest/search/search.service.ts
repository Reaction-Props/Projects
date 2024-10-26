import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  // Simulierte Methode, die eine API-Suchanfrage emuliert
  search(query: string): Observable<string[]> {
    const results = [
      `Ergebnis für "${query}" - 1`,
      `Ergebnis für "${query}" - 2`,
      `Ergebnis für "${query}" - 3`
    ];
    return of(results).pipe(delay(500));  // Verzögerung von 500 ms, um API-Anfrage zu simulieren
  }
  constructor() { }
}
