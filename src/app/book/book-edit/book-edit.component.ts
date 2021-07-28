import {Component, OnInit} from '@angular/core';
import {Book} from '../../book';
import {BookService} from '../../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book = {};

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id');
      this.getBookId(id);
    });
  }

  ngOnInit() {
  }

  getBookId(id) {
    this.bookService.getById(id).subscribe(book => this.book = book);
  }

  updateBook(id) {
    this.bookService.edit(this.book, id).subscribe(() => alert('ok ck'));
  }

}
