function onlyDigits(str) {

  // for (var i = 0; i < str.length; i++) {
  //   if (['a-z'].indexOf(str[i] > -1)){
  //      return false;
  //   }
  //   else {
  //     return true;
  //   }
  // }

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

  var num = 0;

  for (var i = 0; i < str.length; i++) {
    // while ( num < 10){

    if (str.indexOf(num) == -1){
      return num;
    }
    num ++;
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
    else{
      output += array[i] + '-';
    }
  }
  return output;
}

function camelCase(str) {
  var output = str;

  for (var i = 0; i < str.length; i++) {
    // if (i === 0) {
    //   output += str[i];
    // }
    if (str[i] === ' ') {
      var sub = str.substr([i+1],1);
      sub = sub.toUpperCase();
      //
      output = output.replace(str[i+1], sub);
      console.log(output);
    }
    // else if ('[A-Z]'.indexOf(str) > -1) {
    //   console.log(str[i]);
    // }
    // else {
    //   output += str[i];
    // }
  }

  var result = output.replace(/ /g, '');
  console.log(result);
  return result;
}
