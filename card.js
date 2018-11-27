var clickFalg = true;
var clickCard = [];

function rndColorSet() {
    var colors = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'purple', 'purple', 'pink', 'pink'];

    var rndColor = [];
    for (var j = 0; colors.length > 0; j++) {
        rndColor = rndColor.concat(colors.splice(Math.floor(Math.random() * colors.length), 1))
    }

    return rndColor;
}

function cardCreate(row, col) {
    clickFalg = false;
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

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);
            rowItem.appendChild(card);
            document.body.append(rowItem);
        }
    }
    document.querySelectorAll('.card').forEach(function (card, index) {
        setTimeout(function () {
            card.classList.add('flipped');
        }, 1000 + 100 * index)
    })

    document.querySelectorAll('.card').forEach(function (card, index) {
        setTimeout(function () {
            card.classList.remove('flipped');
            clickFalg = true;
        }, 5000)
    })

}
cardCreate(4, 3);



function cardClick() {
    var card = document.querySelectorAll('.card');
    card.forEach(card => {
        card.addEventListener('click', function (e) {
            if (clickFalg) {
                var targetParent = e.target.parentElement.parentElement;
                card.classList.toggle('flipped');
                clickCard.push(targetParent);
                if (clickCard.length === 2) {
                    //console.log(111)
                    var cardFirst = clickCard[0]
                    console.log(cardFirst)
                    var cardSecond = clickCard[1].querySelector('card-back')
                    if (cardFirst !== cardSecond) {
                        console.log(222)
                        clickCard = [];
                    } else {
                        console.log(333)
                        clickFalg = false;
                        setTimeout(function () {
                            cardFirst.classList.remove('flipped');
                            cardSecond.classList.remove('flipped');
                            clickFalg = true;
                            clickCard = [];
                        }, 1000)
                    }

                }
            }
        })
    })
}
cardClick();


function cardBackColorSet() {
    var rndColor = rndColorSet();
    var cardBack = document.querySelectorAll('.card-back');
    cardBack.forEach((cardBack, idx) => {
        cardBack.style.backgroundColor = rndColor[idx];
    });
}
cardBackColorSet();