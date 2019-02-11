var assert = {
  contains: function contains(array, object) {
    if (array.includes(object)) {
      return console.log("test passed");
    } else {
      return console.log("failed: expected " + array + " to contain " + object);
    }
  }
}
