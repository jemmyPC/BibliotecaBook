import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReturnStatement, identifierModuleUrl } from '@angular/compiler';
import { environment } from 'src/environments/environment';
import { Book } from '../MODELS/Book';
import { CurrencyPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})



export class ServiceBookService {

  constructor(private http: HttpClient) { }

  getBook() {
    return this.http.get(`${environment.BaseUrl}Book`);
  }




  getBookID(id: number) {

    const url = (`${environment.BaseUrl}Book/${id}`);
    return this.http.get<Book>(url);
  }



  postBook(book: Book) {
    const url = (`${environment.BaseUrl}Book`);
    return this.http.post<Book>(url, book);
  }

  updateBook(book: Book) {
    const url = (`${environment.BaseUrl}Book`);
    return this.http.put<Book>(url, book);
  }

}



