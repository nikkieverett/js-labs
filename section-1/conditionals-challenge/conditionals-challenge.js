function fullName(firstName, lastName, middleInitial) {
  if (middleInitial === undefined && lastName === undefined) {
    return firstName;
  }
  else if (middleInitial === undefined) {
    return firstName + ' ' + lastName;
  }
  else {
    return firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

function returnSmaller(first, second) {
  if(first < second) {
    return first;
  }
  else if(second < first) {
    return second;
  }
  else {
    return first;
  }
}

function tankDeterminer(animal, size) {
  if(animal === 'turtle') {
    return 'turtle';
  }
  if(animal === 'clown fish' && size === 'small') {
    return 'small saltwater';
  }
  if(animal === 'clown fish' && size === 'large') {
    return 'medium saltwater';
  }
  if(animal === 'guppy' && size === 'small' || size === 'large'){
    return 'small freshwater';
  }

}
