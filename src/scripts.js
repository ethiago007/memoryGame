let akashi = new Card("./../img/akashi.jpg");
let akatsuki = new Card("./../img/akatsuki.jpg")
let aomine = new Card('./../img/aomine.jpg');
let eren =  new Card('./../img/eren.jpg');
let kakashi = new Card('./../img/kakshi.jpg');
let kaneki = new Card('./../img/kaneki.jpg');
let kise = new Card('./../img/kise.jpg');
let naruto = new Card('./../img/naruto.jpg');

let guess1 = 0;
let guess2 = 0;
let guess1id;
let guess2id;
let counter = 0;

$('#card1').click(function() {
  counter++;
  $('#card1Src').attr('src', akashi.cardFace);
  if (guess1 === 0) {
    guess1 = akashi.cardFace;
    guess1id = '#card1Src';
  } else if (guess1 !== 0) {
    guess2 = akashi.cardFace;
    guess2id = '#card1Src';
  }
  if (guess2 !== 0) {
    if (guess1 === guess2) {
      guess1 = 0;
      guess2 = 0;
      
    }
    else {
      guess1 = 0;
      guess2 = 0;
      // $('#response').html("<span id='wrong'><h3>You guessed incorrect. Click here to try again.</h3></span>");
      // $('#wrong').click(function() {
        $('#response').html("");
        $(guess1id).attr('src', '');
        $(guess2id).attr('src', '');
      // });
    }
  }
});
$('#card11').click(function() {
  counter++;
  $('#card9Src').attr('src', akashi.cardFace);
  if (guess1 === 0) {
    guess1 = akashi.cardFace;
    guess1id = '#card9Src';
  } else if (guess1 !== 0) {
    guess2 = akashi.cardFace;
    guess2id = '#card9Src';
  }
  if (guess2 !== 0) {
    if (guess1 === guess2) {
      guess1 = 0;
      guess2 = 0;
      
    }
    else {
      guess1 = 0;
      guess2 = 0;
      // $('#response').html("<span id='wrong'><h3>You guessed incorrect. Click here to try again.</h3></span>");
      // $('#wrong').click(function() {
        $('#response').html("");
        $(guess1id).attr('src', '');
        $(guess2id).attr('src', '');
      // });
    }
  }
});