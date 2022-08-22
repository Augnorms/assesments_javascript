function solution(num){

  var ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 
  'Seven', 'Eight', 'Nine'];

  var tens = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 
  'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve',
  'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 
  'Eighteen', 'Nineteen', 'Twenty', 'Twenty One', 'Twenty Two', 'Twenty Three',
  'Twenty Four', 'Twenty Five', 'Twenty Six', 'Twenty Seven', 'Twenty Eight',
  'Twenty Nine', 'Thirty', 'Thirty One', 'Thirty Two', 'Thirty Three', 
  'Thirty Four', 'Thirty Five', 'Thirty Six', 'Thirty Seven', 'Thirty Eight',
  'Thirty Nine', 'Forty', 'Fort One', 'Fort Two', 'Fort Three', 'Forty Four',
  'Forty Five', 'Forty Six','Forty Seven', 'Forty Eight', 'Forty Nine',
  'Fifty', 'Fifty One', 'Fifty Two', 'Fifty Three', 'Fifty Four', 'Fifty Five',
  'Fifty Six', 'Fifty Seven', 'Fifty Eight', 'Fifty Nine', 'Sixty', 'Sixty One',
  'Sixty Two', 'Sixty Three', 'Sixty Four', 'Sixty Five', 'Sixty Six', 
  'Sixty Seven', 'Sixty Eight', 'Sixty Nine', 'Seventy', 'Seventy One',
  'Seventy Two', 'Seventy Three', 'Seventy Four', 'Seventy Five', 
  'Seventy Six', 'Seventy Seven', 'Seventy Eight', 'Seventy Nine', 'Eighty',
  'Eighty One', 'Eighty Two', 'Eighty Three', 'Eighty Four', 'Eighty Five',
  'Eighty Six', 'Eighty Seven', 'Eighty Eight', 'Eighty Nine', 'Ninety',
  'Ninety One', 'Ninety Two', 'Ninety Three', 'Ninety Four', 'Ninety Five',
  'Ninety Six', 'Ninety Seven', 'Ninety Eigth', 'Ninety Nine'];

  var hundreds = ['', 'One Hundred', 'Two Hundred', 'Three Hundred', 
  'Four Hundred', 'Five Hundred', 'Six Hundred', 'Seven Hundred',
  'Eight Hundred', 'Nine Hundred'];

  var numString = num.toString();

  if (num < 0){

  	 throw new Error('Negative numbers are not supported.');

  } 

  //the case of 0

  if (num === 0){ 

  	return 'Zero';

 }


  //the case of 1 - 9

  if (num < 10) {

    return ones[num];

  }


  //lenght of two

  if(numString.length === 2){

  	var twolenght = +(numString[0] + numString[1]);

  	if(twolenght !== 0 && twolenght > 9){

  		return tens[twolenght];
  	}

  }


  //length of 3

  if(numString.length === 3){

  	var threeLen1 = +(numString[0]);
  	var treelenAll = +(numString[1] + numString[2]);

    if(threeLen1 !== 0 && treelenAll === 0){

    	return ones[threeLen1]+" "+"Hundred";
    }else{
 
        return ones[threeLen1]+" "+"Hundred "+ solution(treelenAll);
    }

  }


  //length of 4

  if(numString.length === 4){

  	var fourLen1 = +(numString[0]);
  	var fourLenAll = +(numString[1] + numString[2] + numString[3]);

    if(fourLen1 !== 0 && fourLenAll === 0){

    	return ones[fourLen1]+" "+"Thousand";
    }else{

    	return ones[fourLen1]+" "+"Thousand "+solution(fourLenAll);
    }

  }


  // length of 5

  if(numString.length === 5){

    var fiveLen1 = +(numString[0] + numString[1]);
    var fiveLenAll = +(numString[2] + numString[3] + numString[4]);

    if(fiveLen1  && fiveLenAll === 0){

      return tens[fiveLen1]+" "+"Thousand";

    }else{

      return tens[fiveLen1]+" "+"Thousand "+solution(fiveLenAll);
      	
    }

  }


  //length of 6

  if(numString.length === 6){

    var sixlen = numString[0];
    var sixlen1 = numString[1];
    var sixlen2 = numString[2];
    var sixlenAll = +(numString[3] + numString[4] + numString[5]);

    if(sixlen !== '0' && sixlen1 === '0' && sixlen2 === '0'
    	&& sixlenAll === 0){

    	return hundreds[sixlen]+" "+"Thousand";

    }else if(sixlen !== '0' && sixlen1 === '0' && sixlen2 !== '0'
    	&& sixlenAll === 0){
       
       return hundreds[sixlen]+" "+tens[sixlen2]+" Thousand"; 

    }else if(sixlen !== '0' && sixlen1 !== '0' && sixlen2 !== '0'
    	&& sixlenAll === 0){

      return hundreds[sixlen]+" "+tens[(sixlen1+sixlen2)]+" Thousand"; 

    }else if(sixlen !== '0' && sixlen1 !== '0' && sixlen2 !== '0'
    	&& sixlenAll !== 0){

     return hundreds[sixlen]+" "+tens[(sixlen1+sixlen2)]+
     " Thousand "+ solution(sixlenAll); 

    }
  
 }

 //length of seven

if(numString.length === 7){

	var sevenlen = numString[0];
	var sevenlen1 = numString[1];
	var sevenlen2 = numString[2];
	var sevenlen3 = numString[3];
	var sevenlenAll = +(numString[4] + numString[5] + numString[6]);

	if(sevenlen !== '0' && sevenlen1 === 0 && sevenlen2 === 0){

      return ones[sevenlen]+" "+'Million'; 

	}else if(sevenlen !== '0' && sevenlen1 !== '0' && 
		sevenlen2 === '0' && sevenlen3 === '0' && sevenlenAll === 0){
  
      return ones[sevenlen]+" "+'Million '+hundreds[sevenlen1]+' Thousand';

	}else if(sevenlen !== '0' && sevenlen1 !== '0' && 
		sevenlen2 === '0' && sevenlen3 !== '0' && sevenlenAll === 0){

		return ones[sevenlen]+" "+'Million '+hundreds[sevenlen1]+" "+ 
		ones[sevenlen3]+' Thousand';

	}else if(sevenlen !== '0' && sevenlen1 !== '0' && 
		sevenlen2 !== '0' && sevenlen3 !== '0' && sevenlenAll === 0){
       
       return ones[sevenlen]+" "+'Million '+hundreds[sevenlen1]+" "+ 
		tens[(sevenlen2 + sevenlen3)]+' Thousand';

	}else if(sevenlen !== '0' && sevenlen1 !== '0' && 
		sevenlen2 !== '0' && sevenlen3 !== '0' && sevenlenAll !== 0){

      return ones[sevenlen]+" "+'Million '+hundreds[sevenlen1]+" "+ 
		tens[(sevenlen2 + sevenlen3)]+' Thousand '+ solution(sevenlenAll);

	}
}


}