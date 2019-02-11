var assert = {

  contains: function contains(array, object) {
    if (array.includes(object)) {
      return console.log('%c Test Passed', 'color: #00FF00');
    } else {
      return console.log(`%c FAIL: expected ${array} to contain ${object}`, 'color: #FF0000');
    }
  }
,
  equalsTo: function equalsTo (object1, object2) {

    if (object1 === object2) {
      console.log('%c Test Passed', 'color: #00FF00');
    } else {
      console.log(`%c FAIL: expected "${object1}" to equal "${object2}"`,'color: #FF0000');
    }
  }

}

function describe (string, func) {
  console.log(string);
  func;
}
