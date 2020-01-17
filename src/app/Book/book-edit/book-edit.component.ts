import { Component, OnInit } from '@angular/core';
import { ServiceBookService } from 'src/app/Services/service-book.service';
import { Book } from 'src/app/MODELS/Book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  constructor(private postBook: ServiceBookService, private route: ActivatedRoute, private router: Router) {
  }
  newBook: Book;


  ngOnInit() {
    console.log('start');
    this.getBook();
    console.log('finish');
  }


  getBook(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.postBook.getBookID(id)
      .subscribe(book => {
        this.newBook = book;
        console.log(this.newBook);
      }, (error) => console.log(error));
  }


  print() {
    console.log("******************************");

    console.log(this.newBook);
    this.postBook.updateBook(this.newBook).subscribe(reponse => {
      console.log("works")
      window.alert("Saved new description");
      this.router.navigateByUrl('/Book');
    }, error => { console.log("error") }, () => { });
  }







}
