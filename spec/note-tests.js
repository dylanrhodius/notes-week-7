function testDisplayNoteReturnsText() {
  var note = new Note("My favourite language is Javascript");
  assert.isTrue(note.displayNote() === "My favourite language is Javascript");
}

testDisplayNoteReturnsText();
