var clickFalg = true;
var clickCard = [];
var sucessCard = [];
var startTime;

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
            document.querySelector('#wrapper').append(rowItem);
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
            startTime = new Date();
        }, 5000)
    })

}
cardCreate(4, 3);



function cardClick() {
    var card = document.querySelectorAll('.card');
    card.forEach(card => {
        card.addEventListener('click', function (e) {
            if (clickFalg && !sucessCard.includes(card)) {
                card.classList.toggle('flipped');
                clickCard.push(card);
                if (clickCard.length === 2) {
                    var cardFirst = clickCard[0].querySelector('.card-back')
                    var cardSecond = clickCard[1].querySelector('.card-back')
                    if (cardFirst.style.backgroundColor == cardSecond.style.backgroundColor) {
                        console.log(clickCard[0])
                        sucessCard.push(clickCard[0]);
                        sucessCard.push(clickCard[1]);
                        clickCard = [];
                        if (sucessCard.length === 12) {
                            var endTime = new Date();
                            alert("축하합니다 성공!!" + Math.floor((startTime - endTime) / 1000) + "초 걸렸습니다.");
                            reload();
                        }
                    } else {
                        clickFalg = false;
                        setTimeout(function () {
                            clickCard[0].classList.remove('flipped');
                            clickCard[1].classList.remove('flipped');
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

function reload() {
    document.querySelector('#wrapper').innerHTML = '';
    cardCreate(4, 3);
    cardBackColorSet();
    cardClick();
    sucessCard = [];
}


function cardBackColorSet() {
    var rndColor = rndColorSet();
    var cardBack = document.querySelectorAll('.card-back');
    cardBack.forEach((cardBack, idx) => {
        cardBack.style.backgroundColor = rndColor[idx];
    });
}
cardBackColorSet();