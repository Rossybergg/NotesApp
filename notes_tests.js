noteholder = new NotesHolder;

  describe('List of notes is array',
  assert.equalsTo(noteholder.notes.length, 0));

noteholder.add("My first note!");

  describe('Note is pushed into the array',
  assert.contains(noteholder.notes, "My first note!"));
