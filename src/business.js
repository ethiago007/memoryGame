function Card(cardFace) {
    this.cardFace = cardFace;
  }
  
  Card.prototype.samecardFace = function(guess) {
    if (guess === this.cardFace) {
      return true;
    }
    else {
      return false;
    }
  };