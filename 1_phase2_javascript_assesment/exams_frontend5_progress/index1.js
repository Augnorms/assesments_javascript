byID = id => document.getElementById(id);
byClass = name => document.getElementsByClassName(name)[0];

var Visa=byID('visaType'),
Country=byID('country'), 
University=byID('university'), 
Email=byID('email')

function setBar() {
var score=0 ;
if(Visa.value) score++; 
if(Country.value) score++ ;
if(University.value.match(/^.{2,32}$/)) score++;
if(Email.value.length<=128 && !Email.value.match(/\.{2}/) && 
Email.value.match(/^[a-z\d\.]+@[a-z\d\]+\-[a-z\d\.]+$/)) score++;

byClass('check-mark').innerHTML = byClass('complete-line').style.width = `${score*25}%`;
}


Visa.onchange = Country.onchange = University.onchange = Email.onchange = setBar;