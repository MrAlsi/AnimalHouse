import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': '563492ad6f91700001000001157dec7a80e34179bbf969542a6f0343'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PexelPhotoService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
      //let URL = "https://api.pexels.com/v1/collections/progettotechweb-fhnfajo";
      let URL = "https://api.pexels.com/v1/collections/fhnfajo";
      return this.http.get<any>(URL, httpOptions)
      .pipe(catchError(this.handleError))
  }
  

  handleError(error: any) {
    return throwError(error.message || "Server error");
  }
}
