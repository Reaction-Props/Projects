import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  http = inject(HttpClient)
  baseApiUri = 'https://icherniakov.ru/yt-course/'
  constructor() { }


  getTestAccout() {
    return this.http.get(`${this.baseApiUri} 'https://icherniakov.ru/yt-course/account/test_accounts`)
  }
}
