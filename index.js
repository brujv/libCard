

function cardValidador(numberCard) {  
  if(numberCard ==""){
    return "Erro";
  }
  else if(numberCard.length == 1){
    return "Erro";
  }
  else if(isNaN(numberCard)){
    return "Erro";
  }

  else {   	
    var sum = 0;
    var form;
    var form2;
    var pairNumberCard = [];
    var oddNumbercard = [];
    var arrNumberCard = numberCard.split("");

    for (let i= 0; i < arrNumberCard.length; i++){
      arrNumberCard[i] = +parseInt(arrNumberCard[i]);
    }
    {
      var revNumberCard = arrNumberCard.reverse();
    }

    for (let i= 0; i < revNumberCard.length; i++) {
      if (i % 2 !== 0) {
        form = revNumberCard[i] * 2;
        if (form > 9) {
          form2 = form - 9;
          pairNumberCard.push(form2);
        } else {
          pairNumberCard.push(form);
        }
      } else {
        oddNumbercard.push(revNumberCard[i]);
      }
    }

    var sumPair= pairNumberCard.reduce(function(a, b) {
      return a + b;
    });
    var sumOdd= oddNumbercard.reduce(function(a, b) {
      return a + b;
    });

    sum = sumOdd + sumPair;
    if (sum % 10 === 0 && sum !==0) {
      return "true";
    } else  {
      return "false";
    }
  }
}
module.exports = cardValidador;
