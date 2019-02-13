var assert = {

  contains: function contains(array, object) {
    if (array.includes(object)) {
      return console.log("%cPASS:", 'background: #d6ffce; color: #157502; font-size: large');
    } else {
      return console.warn(`%cFAIL: expected "${array}" to contain "${object}"`, 'background: #edbbbb; color: #750202; font-size: large');
    }
  }
,
  equalsTo: function equalsTo (object1, object2) {

    if (object1 === object2) {
      console.log("%cPASS:", 'background: #d6ffce; color: #157502; font-size: large');
    } else {
      console.warn(`%cFAIL: expected "${object1}" to equal "${object2}"`,'background: #edbbbb; color: #750202; font-size: large');
    }
  }

}

function describe (string, func) {
  console.log(`  ^:${string}`)
  func;
}
