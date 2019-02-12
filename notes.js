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

  return {notes: notes, preview: preview, add: add}

}
