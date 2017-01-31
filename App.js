
//AJAX

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': <[X-Client-Id]>,
  	'X-Auth-Token': <[X-Auth-Token]>
}

$.ajaxSetup {
	headers: myHeaders
}

$.ajax({
	GET: baseUrl,
	method: 'GET',
	success: function(response) {
      setupColumns(response.columns);
    }
});

//Nowy JS

function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
  		board.createColumn(col);
  		setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
 	cards.forEach(function (card) {
 		var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
 		col.createCard(card)
 	})
}

// TWORZENIE NOWYCH EGZEMPLARZY KOLUMN
var todoColumn = new Column('Do zrobienia');
var doingColumn = new Column('W trakcie');
var doneColumn = new Column('Skończone');

// DODAWANIE KOLUMN DO TABLICY
board.createColumn(todoColumn);
board.createColumn(doingColumn);
board.createColumn(doneColumn);

// TWORZENIE NOWYCH EGZEMPLARZY KART
var card1 = new Card('Nowe zadanie');
var card2 = new Card('stworzyc tablice kanban');

// DODAWANIE KART DO KOLUMN
todoColumn.createCard(card1);
doingColumn.createCard(card2);