

describe('Strings are like arrays so', function() {

  factoid('you can get the number of letters by using the `length` property.', function() {

    var str = 'Jack smote the wicked dragon mightily with a wet fish.';

    var length = str.length;

    chai.assert.equal(length, 54);
  });

  factoid('you can loop through them and do things like collect all the vowels.', function() {
    var str = 'Jack smote the wicked dragon mightily with a wet fish.';

    var theVowels = '';

    for (var i = 0; i < str.length ; i++) {
      // if( str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      //   theVowels += str[i];
      // }

      if ('aeiou'.indexOf(str[i]) > -1){
        theVowels += str[i];
      }
    }
    chai.assert.equal(theVowels, 'aoeeieaoiiiaei');
  });

  describe('you can use `indexOf` to get location of', function() {

    factoid('a letter. If it exists, the number will be zero or greater.', function() {

      var str = 'Jack smote the wicked dragon mightily with a wet fish.';

      var indexOfW = str.indexOf('w');

      chai.assert.equal(indexOfW, 15);
    });

    factoid('a word. If it exists, the number will be zero or greater.', function() {

      var str = 'Jack smote the wicked dragon mightily with a wet fish.';

      var indexOfDragon = str.indexOf('dragon');

      chai.assert.equal(indexOfDragon, 22);
    });

    factoid('a letter. If it does not exist, the number will be -1.', function() {

      var str = 'Jack smote the wicked dragon mightily with a wet fish.';

      var indexOfZ = str.indexOf('z');

      chai.assert.equal(indexOfZ, -1);
    });

  });

});

describe('Strings', function() {

  factoid('can be converted to uppercase.', function() {
    var str = 'hello';

    var result = str.toUpperCase();

    chai.assert.equal(result, 'HELLO');
  });

  factoid('can be converted to lowercase.', function() {
    var str = 'HELLO';

    var result = str.toLowerCase();

    chai.assert.equal(result, 'hello');
  });

  factoid('can be split based on a delimiter.', function() {
    var str = 'Bob,Smith,54,2304 Main St,Dallas,TX,76543';

    //turn the str into an array by splitting it into different values at the comma seperater

    var arr = str.split(',');

    //array now looks like this
    //['Bob', 'Smith', '54', '2304 Main St', 'Dallas', 'TX', '76543']

    var city = arr[4];

    chai.assert.equal(city, 'Dallas');
  });

  factoid('have a substr function for selecting a subset of the string.', function() {
    var str = 'Jack smote the wicked dragon mightily with a wet fish.';

    //get word wicked
    // takes an index start and the length (inclusive)
    //`substr` takes two arguments, the index to start with the length to select.
    var sub = str.substr(15, 6);

    chai.assert.equal(sub, 'wicked');
  });

  factoid('have a substring function for selecting a subset of the string.', function() {
    var str = 'Jack smote the wicked dragon mightily with a wet fish.';
    //get word wicked
    // takes and index start and an index end (inclusive)
    //`substring` takes two arguments, the index to start and the index to end the selection.
    var sub = str.substring(15,21);

    chai.assert.equal(sub, 'wicked');
  });

});
