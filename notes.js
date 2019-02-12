function NotesHolder() {
  var notes = [];

  function preview() {
    for (i = 0; i <= notes.length; i++) {
      return notes[i].substr(0, 19);
    }
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

web_noteholder = new NotesHolder
