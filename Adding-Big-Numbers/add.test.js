const add = require("./add");

describe("add method", () => {
  it("adds up to return '444' when given '123' and '321' ", () => {
    expect(add("123", "321")).toEqual("444");
  });
});
