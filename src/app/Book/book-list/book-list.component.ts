import { Component, OnInit } from '@angular/core';
import { Book } from './.././../MODELS/Book'
import { ServiceBookService } from 'src/app/Services/service-book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: any;
  b: Book;
  err: object;
  constructor(private getBook: ServiceBookService) { }

  ngOnInit() {
    this.err = {};
    this.b = new Book();
    console.log('start');
    this.showConfig();
  }
  showConfig() {
    this.getBook.getBook()
      .subscribe((data) => {
        this.books = data;
        console.log(this.books);
      }, (error) => console.log(error)
      );
  }

  handleBook(id, action){
    this.getBook.getBookID(id).subscribe(bookR => {
      bookR["description"] = bookR["description"] + action;
      this.getBook.updateBook(bookR).subscribe(reponse => {
        this.showConfig();
  
      }, error => { window.alert(error.error["Quantity"]); }, () => { });
  
    }, error => { console.log(error) }, () => { });
  
  }

  AddBook(id) {

    this.handleBook(id, "+1");


  }
  
  deleteBook(id) {
    this.handleBook(id, "-1");
  }

}
