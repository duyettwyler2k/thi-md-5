import {Component, OnInit} from '@angular/core';
import {Book} from '../../book';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = {};
  isSubmitted = false;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  createBook(bookForm) {
    this.isSubmitted = true;
    if (bookForm.valid) {
      this.bookService.save(bookForm.value).subscribe(() => {
        alert('Ok Ck');
      });
    } else {
      alert('khong on roi dai vuong oi');
    }
  }

}
