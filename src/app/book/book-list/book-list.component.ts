import {Component, OnInit} from '@angular/core';
import {Book} from '../../book';
import {BookService} from '../../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  book: Book[] = [];

  constructor(private bookService: BookService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
    });
  }

  ngOnInit() {
    this.showAllBook();
  }

  showAllBook() {
    this.bookService.getAll().subscribe(books => {
      this.book = books;
    });
  }

  deleteById(id) {
    this.bookService.delete(id).subscribe(() => {
      this.showAllBook();
      alert('ok ck');
    });
  }

}
