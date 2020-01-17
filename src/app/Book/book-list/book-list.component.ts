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

  AddBook(Id) {



    this.b.Id = Id;
    this.b.Description = null;
    this.b.Quantity = 1;
    this.b.Autor = "1";
    this.b.Title = "2";
    this.b.Edition = "3";

    this.getBook.updateBook(this.b).subscribe(reponse => {
      console.log("works");
      let data = JSON.parse(JSON.stringify(reponse));
      if ("OK" in data) {
        this.showConfig();
      } else {
        window.alert(data["Quantity"]);
      }

    }, error => { console.log("error") }, () => { });

  }

}
