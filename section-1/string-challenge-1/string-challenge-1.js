function stripPuncutation(str) {
  var output = '';
  for (var i = 0; i < str.length; i ++) {
    if ('.,:'.indexOf(str[i]) === -1){
      output += str[i];
    }
  }
  return output;
}

function stringReverser(str) {
  var output = '';
  for (var i = str.length -1; i > -1; i--) {
    output += str[i];
  }
  return output;
}

function truncate(sentence) {
  // var output = '';
  // for (var i = 0; i < 15;  i++) {
  //   output += sentence[i];
  // }
  // output += '...';
  // return output;

  var output = sentence.substr(0,15);
  return output += '...';
}

function truncateByCount(sentence, count) {
  var output = sentence.substring(0, count);
  return output += '...';

}

function capitalizeEveryOtherLetter(str) {

var output = '';

  for(var i = 0; i < str.length; i ++) {
    if(i % 2 === 0) {
      output += str[i].toUpperCase();
    }
    else{
      output += str[i];
    }
  }
  return output;
}
