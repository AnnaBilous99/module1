export class Book {
  #name;
  #author;
  constructor(name, author) {
    this.#name = name;
    this.#author = author;
  }
  readThisBook() {
    console.log(
      ` You need to read this book- ${this.#name} its author ${this.#author}`
    );
  }
  getName() {
    return this.#name;
  }
  getAuthor() {
    return this.#author;
  }
}
