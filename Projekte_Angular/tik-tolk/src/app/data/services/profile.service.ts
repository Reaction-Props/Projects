import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../interfaces/profile.interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  http = inject(HttpClient)
  baseApiUri = 'https://icherniakov.ru/yt-course/'

  constructor() {
  }


  getTestAccout() {
    return this.http.get<Profile[]>(`${this.baseApiUri}account/test_accounts`)
  }
}
