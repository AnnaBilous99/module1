import { Book } from "./book.js";

export class ExtendedBook extends Book {
  #genre;
  constructor(name, author, genre) {
    super(name, author);
    this.#genre = genre;
  }
  readThisBook() {
    console.log(
      ` You need to read this book- ${this.getName()} its author ${this.getAuthor()} its genre ${
        this.#genre
      }`
    );
  }
  getGenre() {
    return this.#genre;
  }
}
