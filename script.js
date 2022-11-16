import { Book } from "./book.js";
import { ExtendedBook } from "./extendedBook.js";
import { SuperExtendedBook } from "./superExtendedBook.js";
let book1 = new Book("book1", "author1");
book1.readThisBook();
let book2 = new ExtendedBook("book2", "author2", "fantasy");
book2.readThisBook();
let book3 = new SuperExtendedBook("book3", "author3", "fantasy", "123333");
book3.readThisBook();

export class Books {
  constructor() {
    this.shopBooks = [];
  }
  addBook(book) {
    this.shopBooks.push(book);
  }
}
