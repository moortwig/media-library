// inheritence formula: ChildClassName.prototype = new ParentClass();
console.log('Book');
Book.prototype = new Media();
Book.prototype.constructor = Book;

function Book(author) {
	this.author = author;
	this.series = series;
	this.language = language;
	this.isbn = isbn;
}