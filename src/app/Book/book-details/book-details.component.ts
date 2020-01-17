import { Component, OnInit } from '@angular/core';
import { Book } from '../../MODELS/Book';
import { ServiceBookService } from 'src/app/Services/service-book.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: any;
  constructor(private getBook: ServiceBookService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('start');
    this.showConfig();
  }

  showConfig() {
    const id = + this.route.snapshot.paramMap.get('id');
    this.getBook.getBookID(id)
      .subscribe((data) => {
        this.book = data;
        console.log(this.book);
        console.log(data);
      }, (error) => console.log(error)

      );
  }

}
