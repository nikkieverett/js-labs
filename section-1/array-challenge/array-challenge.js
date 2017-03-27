
function arrayReverser(arr) {
  var output = [];
  for(var i = arr.length - 1; i > -1; i--){
    output.push(arr[i]);
  }
  return output;
}


function sumArrayOfNumbers(arr) {
  var result = 0;

  for(var i = 0; i < arr.length; i++){
    result += arr[i];
  }
  return result;
}


function numbersOver10(arr) {
  var output = [];

  for (var i = 0; i < arr.length; i++){
    if(arr[i] > 10){
      output.push(arr[i]);
    }
  }

  return output;
}

function numbersOverX(arr, num) {
}

function stringsLongerThanFourLetters(arr) {
}

function stringsLongerThanXLetters(arr, length) {
}
