noteholder = new NotesHolder;

  describe('List of notes is array',
  assert.equalsTo(noteholder.notes.length, 0));

  noteholder.add("01234567890123456789012345");

  describe('Note is pushed into the array',
  assert.contains(noteholder.notes, "01234567890123456789012345"));

  describe('See the first 20 characters of a note',
  assert.equalsTo(noteholder.preview(), "0123456789012345678"));

  describe('See a full note', assert.equalsTo(noteholder.show(noteholder.notes[0]), "01234567890123456789012345"));
