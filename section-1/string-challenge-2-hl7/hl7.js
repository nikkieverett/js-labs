var PIDParser = {

  name: function(data) {
    var pidArray = data.split('|');
    pidArray = pidArray.filter(function(str) {
      return /\S/.test(str);
    });

    var result = pidArray[2];
    return result;
  },

  birthYear: function(data) {
    var pidArray = data.split('|');
    pidArray = pidArray.filter(function(str) {
      return /\S/.test(str);
    });

    var result = pidArray[3];
    var subResult = result.substr(0,4);
    return subResult;
  },

  birthMonth: function(data) {
    var pidArray = data.split('|');
    pidArray = pidArray.filter(function(str) {
      return /\S/.test(str);
    });

    var result = pidArray[3];
    var subResult = result.substr(4,2);
    return subResult;
  },

  birthDay: function(data) {
    var pidArray = data.split('|');
    pidArray = pidArray.filter(function(str) {
      return /\S/.test(str);
    });

    var result = pidArray[3];
    console.log(result);
    var subResult = result.substr(6,2);
    return subResult;
  }
};

var MSHParser = {

  type: function(data) {
    var mshArray = data.split('|');
    mshArray = mshArray.filter(function(str) {
      return /\S/.test(str);
    });

    var result = mshArray[8];
    return result;
  },

  sendingApplication: function(data) {
    var mshArray = data.split('|');
    mshArray = mshArray.filter(function(str) {
      return /\S/.test(str);
    });

    var result = mshArray[2];
    return result;

  },

  sendingFacility: function(data) {
    var mshArray = data.split('|');
    mshArray = mshArray.filter(function(str) {
      return /\S/.test(str);
    });

    var result = mshArray[3];
    return result;
  }
};
