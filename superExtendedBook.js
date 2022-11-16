import { ExtendedBook } from "./extendedBook.js";

export class SuperExtendedBook extends ExtendedBook {
  #printCirculation;
  constructor(name, author, genre, printCirculation) {
    super(name, author, genre);
    this.#printCirculation = printCirculation;
  }
  readThisBook() {
    console.log(
      ` You need to read this book- ${this.getName()} its author ${this.getAuthor()} its genre ${this.getGenre()} print circulation ${
        this.#printCirculation
      }`
    );
  }
  getPrintCirculation() {
    return this.#printCirculation;
  }
}
