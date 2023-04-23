const add = require("./add");

describe("add method", () => {
  it("adds up small string numbers and returns the result in string ", () => {
    expect(add("123", "321")).toEqual("444");
    expect(add("1372", "69")).toEqual("1441");
  });

  it("adds up big string numbers and returns the result in string ", () => {
    expect(
      add("63829983432984289347293874", "90938498237058927340892374089")
    ).toEqual("91002328220491911630239667963");

    expect(
      add(
        "823094582094385190384102934810293481029348123094818923749817",
        "234758927345982475298347523984572983472398457293847594193837"
      )
    ).toEqual("1057853509440367665682450458794866464501746580388666517943654");
  });
});
