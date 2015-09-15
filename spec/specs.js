describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Nelson", "Willie");
    expect(testContact.firstName).to.equal("Willie");
    expect(testContact.lastName).to.equal("Nelson");
    expect(testContact.address)to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Nelson", "Willie");
    expect(testContact.fullName).to.equal("Willie Nelson")
  });
});
