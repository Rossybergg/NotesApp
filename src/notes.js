function NotesHolder() {
  var notes = [];

  function preview(note) {
    return note.substr(0, 20)
  }

  function add(string) {
    var safe = escapeHtml(string);
    notes.push(safe);
  }

  function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
  }

  return {notes: notes, preview: preview, add: add, escapeHtml: escapeHtml}

}
