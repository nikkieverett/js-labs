function onlyDigits(str) {

  // for (var i = 0; i < str.length; i++) {
  //   if (['a-z'].indexOf(str[i]) > -1){
  //      return false;
  //   }
  // }
  // return true;

  var result = '';

  for (var i = 0; i < str.length; i++) {
    if ('0123456789'.indexOf(str[i]) > -1){
       result = true;
    }
    else {
      return false;
    }
  }
  return result;
}

function formatPhoneNumber(str) {

 var result = '';

 result = '(' + str.substr(0,3) + ')' + ' ' + str.substr(3,3) + '-' + str.substr(6,4);

 return result;

}

function formatCreditCardNumber(str) {
 var result = '';

 result = str.substr(0,4) + ' ' + str.substr(4,4) + ' ' + str.substr(8,4) + ' ' + str.substr(12,4);

 return result;

}

function missingInteger(str) {

  for (var i = 0; i <= 9; i++) {

    if (str.indexOf(i) == -1){
      return i;
    }
  }
}

function repeatChar(char, count) {
  var result = '';

  for ( var i = 0; i < count; i++) {
  result += char;
  }

  return result;
}

function delimitWord(str, char) {

  var result = '';

  for (var i = 0; i < str.length; i++) {
    if (i < str.length -1) {
    result += str[i] + char;
    }
    else {
      result += str[i];
    }
  }
  return result;
}

function reverseWord(str) {
  var output = '';

  for (var i = str.length -1; i > -1; i--) {
    output += str[i];
  }
  return output;
}

function reverseSentence(str) {
  var array = str.split(' ');
  var output = '';

  for (var i = array.length-1; i > -1; i--) {
    if (i <= 0){
      output += array[i];
    }
    else{
      output += array[i] + ' ';
    }
  }
  return output;
}

function kabobCase(str) {
  var array = str.split(' ');
  var output = '';

  for (var i = 0; i < array.length; i++) {
    if (i == (array.length-1)){
      output += array[i];
    }
    else {
      output += array[i] + '-';
    }
  }
  return output;
}

function camelCase(str) {

  var strArray = str.split(' ');
  var output = '';

  for (var i = 0; i < strArray.length; i++) {
    if (i === 0) {
      output += strArray[i].toLowerCase();
    }
    else {
      var string = strArray[i];
      var firstLetter = string[0].toUpperCase();
      var restOfLetters = string.slice(1).toLowerCase();
      output += firstLetter + restOfLetters;
    }
  }
  return output;
}
