var progressline = document.querySelector(".complete-line");
var progressPercent = document.querySelector(".check-mark");

var visaType = document.querySelector("#visaType");
var university = document.querySelector("#university");
var country = document.querySelector("#country");
var email = document.querySelector("#email");



function progress(bar, value){
  
  progressline.setAttribute("data-stages", "0 50 100");

  var stages = progressline.getAttribute("data-stages").split(",");
  
   var activeStage = stages.find(stage => {
      return value >= stage[0];
  });

   if(activeStage){

  progressline.style.width = `${value}%`;
  progressPercent.innerHTML =  `${value}%`;

  }

}

function percentage(){

  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var patt = /^[a-z\d\.]+@[a-z\d\]+\-[a-z\d\.]+$/;

  var visanameper = 25;
  var uninameper = 25;
  var countnameper = 25;
  var emailnumper = 25;

  var number = 0;

  if(visaType.value.length != ""){

    number+=visanameper;

  }
  
  if(university.value.length >= 2 && university.value.length <= 32 && university.value.replace(/\s/g,"").length !== 0){
   
    number+=uninameper;

  }
  if(country.value.length != ""){

    number+=countnameper;

  }
  if(typeof email.value === 'string' 
    && pattern.test(email.value) == true && email.value.length <= 128)
  {

    number+=emailnumper;

  }

  progress(progressline, number);

}

visaType.addEventListener('change', percentage);
university.addEventListener('change', percentage);
country.addEventListener('change', percentage);
email.addEventListener('change', percentage);
