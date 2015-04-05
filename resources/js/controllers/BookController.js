var books = new Array(); // maybe remove this line

console.log("BookController");
mediaLibrary.controller('BookController', function($scope){
	$scope.hello = "Hello world";
	$scope.books = [{
		"title": "Thief Of Time",
		"author": "Terry Pratchett",
		"series": "Discworld",
		"language": "English",
		"isbn": "15484165151515417",
		"isPocket": true
	}]
});