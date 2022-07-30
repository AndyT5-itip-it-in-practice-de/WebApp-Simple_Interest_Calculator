/*  Simple Interest Calculator */
/*  scipt.js */
/*  Copyright 2022 Andreas Krämer */


function compute() {
    //for savety - bevore all calculatet -- update rate
    updateRate()


    //load variable from textbox&else
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;


    //------------------------------------------------------------------------------------------------------------ 
    //Check if field under One ---also when its nothing ore "0" ore minus
    if (principal < "1") {
        document.getElementById("result").innerText = ('');  // delete result
        alert('Enter a positive number');					 // alert when its nothing ore "0" ore minus
        document.getElementById("principal").focus();		 // goto txtbox
        return false;
    }


    //Check if age field is numeric - normal not needet because : input type="number"
    if (isNaN(principal)) {
        document.getElementById("result").innerText = ('');	// delete result
        alert('Enter a valid Amount');						// alert when its nothing ore "0" ore minus
        document.getElementById("principal").focus();		// goto txtbox
        return false;
    }
    //------------------------------------------------------------------------------------------------------------			

    /* Calculation */
    var mount = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);


    /* write Solution under Button*/
    document.getElementById("result").innerText = ('If you deposit ' + principal + ',' + '\r\n' +
        'at an interest rate of ' + rate + '%,' + '\r\n' +
        'You will receive an amount of ' + mount + ',' + '\r\n' +
        'in the year ' + year + '\r\n');



/* Markup all relevant parts...*/

	var text = ","; highlight(text);
	var text = "."; highlight(text);
	var text = "%"; highlight(text);

	var text = "0"; highlight(text);
	var text = "1"; highlight(text);
	var text = "2"; highlight(text);
	var text = "3"; highlight(text);
	var text = "4"; highlight(text);
	var text = "5"; highlight(text);
	var text = "6"; highlight(text);
	var text = "7"; highlight(text);
	var text = "8"; highlight(text);
	var text = "9"; highlight(text);
	var text = "10"; highlight(text);
	//var text = "."; highlight(text);

//no time between markups need
//var text = year; highlight(text);
//setTimeout(() => {	 text = year; highlight(text);	}, 1000);		//0,5sec timeout
//var text = "2"; setTimeout(highlight(text), 1000); //Ruft die Callback-Funktion nach 1 Sekunden auf


//loop not needet
 // loop 10times https://stackoverflow.com/a/53209339
 /* 	var number = 0;
		start_position: while(true) {
		alert(number);
		number++;
		if(number < 10) continue start_position;
		break;
		}
*/


}

/* problem to find solution to mark/highlight the numbers... */
/* https://stackoverflow.com/a/71100612 */
/* https://stackoverflow.com/questions/8644428/how-to-highlight-text-using-javascript  */
  
  function highlight(text) {
  var inputText = document.getElementById("result");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) { 
     inputText.innerHTML=innerHTML.split(text).join('<span class="highlight">'+text+'</span>');
  }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}