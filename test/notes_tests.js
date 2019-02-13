noteholder = new NotesHolder;

  describe('List of notes is array',
  assert.equalsTo(noteholder.notes.length, 0));

  noteholder.add("01234567890123456789012345");

  describe('Note is pushed into the array',
  assert.contains(noteholder.notes, "01234567890123456789012345"));

  describe('See the first 20 characters of a note',
  assert.equalsTo(noteholder.preview("01234567890123456789012345"), "01234567890123456789"));

  describe('Special characters are escaped',
  assert.equalsTo(noteholder.escapeHtml(`&, <, >, ", '`), "&amp;, &lt;, &gt;, &quot;, &#039;"));
