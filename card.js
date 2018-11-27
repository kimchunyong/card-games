
function rndColorSet() {
    var colors = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'purple', 'purple', 'pink', 'pink'];

    var rndColor = [];
    for (var j = 0; colors.length > 0; j++) {
        rndColor = rndColor.concat(colors.splice(Math.floor(Math.random() * colors.length), 1))
    }

    return rndColor;
}

function cardCreate(row, col) {
    for (var i = 0; i < col; i++) {
        var rowItem = document.createElement('div');
        rowItem.className = "row-item";
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
cardCreate(4, 3);

function cardBackColorSet() {
    var rndColor = rndColorSet();
    var cardBack = document.querySelectorAll('.card-back');
    cardBack.forEach((cardBack, idx) => {
        cardBack.style.backgroundColor = rndColor[idx];
    });
}
cardBackColorSet();