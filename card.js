var row = 4;
var col = 3;

function cardCreate(row, col) {
    for (var i = 0; i < col; i++) {
        var rowItem = document.createElement('div');
        rowItem.className = "row-item"
        for (var j = 0; j < row; j++) {
            var card = document.createElement('div');
            card.className = "card";
            var cardInner = document.createElement('div');
            cardInner.className = "card-inner";
            var cardFront = document.createElement('div');
            cardFront.className = "card-front";
            var cardBack = document.createElement('div');
            cardBack.className = "card-back";


            (function (card) {
                card.addEventListener('click', function () {
                    card.classList.toggle('flipped');
                })
            })(card)
            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);
            rowItem.appendChild(card);
            document.body.append(rowItem);
        }
    }
}
cardCreate(row, col);
