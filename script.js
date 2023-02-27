function displaynumber(num) {
    result.value+= num;
    console.log(num);
}
function clearbox(){
    result.value="";
}
function removelastitem(){
    currentexp=result.value;
    result.value=currentexp.slice(0,-1)
}
function evaluateexpression(){
    result.value=eval(result.value)
}
function squareroot(){
    result.value = Math.sqrt(result.value);
}

function calculatePercentage() {
  let currentValue = result.value;
  let percentageValue = currentValue / 100;
    result.value=percentageValue;
}



let memory = 0;

function addMemory() {
  memory += parseFloat(result.value);
}

function subtractMemory() {
  memory -= parseFloat(result.value);
}

function recallMemory() {
  result.value = memory.toString();
}