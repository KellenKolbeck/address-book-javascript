describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Nelson", "Willie");
    expect(testContact.firstName).to.equal("Willie");
    expect(testContact.lastName).to.equal("Nelson");
    expect(testContact.address)to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Nelson", "Willie");
    expect(testContact.fullName()).to.equal("Willie Nelson")
  });
});

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("123 Main Street", "Test City", "Test State");
    expect(testAddress.street).to.equal("123 Main Street");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });

  it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("123 Main Street", "Test City", "Test State");
    expect(testAddress.fullAddress())to.equal("123 Main Street, Test City, Test State")
  });
});
