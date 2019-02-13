function NotesHolder() {
  var notes = [];

  function preview() {
    text = "";
    for (i = 0; i < notes.length; i++) {
      text += '<a href="">' + notes[i].substr(0, 20) + '...</a>';
    }
    document.getElementById("demo").innerHTML = text;
  }

  function add(string) {
    notes.push(string);
  }

  function show(string) {
    for (i = 0; i <= notes.length; i++){
      if (notes.includes(string))
      {return notes[i]}
    }
  }

  return {notes: notes, preview: preview, add: add, show: show}

}
