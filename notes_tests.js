noteholder = new NotesHolder;

describe('list of notes is array', assert.equalsTo(noteholder.notes.length, 0));

noteholder.add("My first note!");

describe('note is pushed into the array',
assert.contains(noteholder.notes, "My first note!"));
