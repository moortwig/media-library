var books = new Array(); // maybe remove this line

console.log("BookController");
mediaLibrary.controller('BookController', function($scope){
	$scope.books = [
		{
			"title": "Thief Of Time",
			"author": "Terry Pratchett",
			"series": "Discworld",
			"language": "English",
			"isbn": "15484165151515417",
			"isPocket": true
		},
		{
			"title": "Maskerade",
			"author": "Terry Pratchett",
			"series": "Discworld",
			"language": "English",
			"isbn": "1515314358131",
			"isPocket": true
		},
		{
			"title": "The Summer Tree",
			"author": "Guy Gavriel Kay",
			"series": "The Fionavar Tapestry",
			"language": "English",
			"isbn": "1214213543151351351",
			"isPocket": true
		}
	]
});