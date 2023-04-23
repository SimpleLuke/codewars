const add = require("./add");

describe("add method", () => {
  it("adds up small string numbers and returns the result in string ", () => {
    expect(add("123", "321")).toEqual("444");
    expect(add("1372", "69")).toEqual("1441");
  });

  it.only("adds up big string numbers and returns the result in string ", () => {
    expect(
      add("63829983432984289347293874", "390938498237058927340892374089")
    ).toEqual("91002328220491911630239667963");
  });
});
