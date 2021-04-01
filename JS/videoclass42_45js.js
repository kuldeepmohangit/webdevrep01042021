var nf1 = document.getElementById('numfield1');
var nf2 = document.getElementById('numfield2');
var resultfield = document.getElementById('resultfield');
var form = document.getElementById('XIsWhatPercentageOfY');

form.addEventListener('submit', function(event) {
    if(!nf1.value || !nf2.value) {
        alert("Please enter values in the field");
    }else {
        var x = parseFloat(nf1.value);
        var y = parseFloat(nf2.value);

        var result= x/y;
        var percent = result*100 ;
        
        resultfield.innerText = "Answer: "+ percent + "%";
        event.preventDefault();

    }

});