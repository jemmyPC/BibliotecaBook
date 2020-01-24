import { Component, OnInit } from '@angular/core';
import { ServiceBookService } from 'src/app/Services/service-book.service';
import { Book } from 'src/app/MODELS/Book';
import { FormBuilder, FormGroup, NG_VALIDATORS } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],

})


export class BookCreateComponent implements OnInit {


  constructor(private postBook: ServiceBookService, private router: Router) { }
  newBook: Book;
  err: object;
  ngOnInit() {
    this.err = {};
    this.newBook = new Book();
  }


  print() {
    this.postBook.postBook(this.newBook).subscribe(reponse => {

      window.alert("Book added");
      this.router.navigateByUrl('/Book');

    }, error => {
      const json = error.error;
      console.log(json);
      for (const key in this.err) {
        this.err[key] = "";
      }
      for (const key in json) {
        this.err["err" + key] = json[key];
      }

    }, () => { });
  }
}
