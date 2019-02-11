var assert = {

  contains: function contains(array, object) {
    if (array.includes(object)) {
      return console.log("Test Passed");
    } else {
      return console.log("FAIL: expected " + array + " to contain " + object);
    }
  }
,
  equalsTo: function equalsTo (object1, object2) {

    if (object1 === object2) {
      console.log(`Test Passed`);
    } else {
      console.log(`FAIL: expected "${object1}" to equal "${object2}"`);
    }
  }

}
