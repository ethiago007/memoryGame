$(document).ready(function () {
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
$('#card2').click(function() {
    counter++;
    $('#card2Src').attr('src', akatsuki.cardFace);
    if (guess1 === 0) {
      guess1 = akatsuki.cardFace;
      guess1id = '#card2Src';
    } else if (guess1 !== 0) {
      guess2 = akatsuki.cardFace;
      guess2id = '#card2Src';
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
  $('#card44').click(function() {
    counter++;
    $('#card12Src').attr('src', akatsuki.cardFace);
    if (guess1 === 0) {
      guess1 = akatsuki.cardFace;
      guess1id = '#card12Src';
    } else if (guess1 !== 0) {
      guess2 = akatsuki.cardFace;
      guess2id = '#card12Src';
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
  $('#card3').click(function() {
    counter++;
    $('#card3Src').attr('src', aomine.cardFace);
    if (guess1 === 0) {
      guess1 = aomine.cardFace;
      guess1id = '#card3Src';
    } else if (guess1 !== 0) {
      guess2 = aomine.cardFace;
      guess2id = '#card3Src';
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
  $('#card55').click(function() {
    counter++;
    $('#card13Src').attr('src', aomine.cardFace);
    if (guess1 === 0) {
      guess1 = aomine.cardFace;
      guess1id = '#card13Src';
    } else if (guess1 !== 0) {
      guess2 = aomine.cardFace;
      guess2id = '#card13Src';
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
  $('#card4').click(function() {
    counter++;
    $('#card4Src').attr('src', eren.cardFace);
    if (guess1 === 0) {
      guess1 = eren.cardFace;
      guess1id = '#card4Src';
    } else if (guess1 !== 0) {
      guess2 = eren.cardFace;
      guess2id = '#card4Src';
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
  $('#card77').click(function() {
    counter++;
    $('#card15Src').attr('src', eren.cardFace);
    if (guess1 === 0) {
      guess1 = eren.cardFace;
      guess1id = '#card15Src';
    } else if (guess1 !== 0) {
      guess2 = eren.cardFace;
      guess2id = '#card15Src';
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
  $('#card5').click(function() {
    counter++;
    $('#card5Src').attr('src', kakashi.cardFace);
    if (guess1 === 0) {
      guess1 = kakashi.cardFace;
      guess1id = '#card5Src';
    } else if (guess1 !== 0) {
      guess2 = kakashi.cardFace;
      guess2id = '#card5Src';
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
  $('#card66').click(function() {
    counter++;
    $('#card14Src').attr('src', kakashi.cardFace);
    if (guess1 === 0) {
      guess1 = kakashi.cardFace;
      guess1id = '#card14Src';
    } else if (guess1 !== 0) {
      guess2 = kakashi.cardFace;
      guess2id = '#card14Src';
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
  $('#card6').click(function() {
    counter++;
    $('#card6Src').attr('src', kaneki.cardFace);
    if (guess1 === 0) {
      guess1 = kaneki.cardFace;
      guess1id = '#card6Src';
    } else if (guess1 !== 0) {
      guess2 = kaneki.cardFace;
      guess2id = '#card6Src';
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
  $('#card22').click(function() {
    counter++;
    $('#card10Src').attr('src', kaneki.cardFace);
    if (guess1 === 0) {
      guess1 = kaneki.cardFace;
      guess1id = '#card10Src';
    } else if (guess1 !== 0) {
      guess2 = kaneki.cardFace;
      guess2id = '#card10Src';
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
  $('#card7').click(function() {
    counter++;
    $('#card7Src').attr('src', kise.cardFace);
    if (guess1 === 0) {
      guess1 = kise.cardFace;
      guess1id = '#card7Src';
    } else if (guess1 !== 0) {
      guess2 = kise.cardFace;
      guess2id = '#card7Src';
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
  $('#card88').click(function() {
    counter++;
    $('#card16Src').attr('src', kise.cardFace);
    if (guess1 === 0) {
      guess1 = kise.cardFace;
      guess1id = '#card16Src';
    } else if (guess1 !== 0) {
      guess2 = kise.cardFace;
      guess2id = '#card16Src';
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
  $('#card8').click(function() {
    counter++;
    $('#card8Src').attr('src', naruto.cardFace);
    if (guess1 === 0) {
      guess1 = naruto.cardFace;
      guess1id = '#card8Src';
    } else if (guess1 !== 0) {
      guess2 = naruto.cardFace;
      guess2id = '#card8Src';
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
  $('#card33').click(function() {
    counter++;
    $('#card11Src').attr('src', naruto.cardFace);
    if (guess1 === 0) {
      guess1 = naruto.cardFace;
      guess1id = '#card11Src';
    } else if (guess1 !== 0) {
      guess2 = naruto.cardFace;
      guess2id = '#card11Src';
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

});