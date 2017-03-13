function Card(number){
  this.number = number;
  this.flip = false;
}

Card.prototype.matchChecker = function (Card) {
  if (Card.number === this.number)
  {
    this.flip = true;
    Card.flip = true;
    return true;
  }else{
    return false;
  }
};

exports.memoryBL = Card;
