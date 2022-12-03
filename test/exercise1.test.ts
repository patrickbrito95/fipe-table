export const maskify = require("../exercises/exercises_1/index");

test("exercise 1", () => {
    console.log = jest.fn();
  expect(maskify("4556364607935616")).toBe("############5616");
  expect(maskify("64607935616")).toBe("#######5616");
  expect(maskify("(11) 9 9977-7640")).toBe("############7640");
  expect(maskify("1")).toBe("1");
  expect(maskify("")).toBe("");
  expect(maskify("Skippy")).toBe("##ippy");
  expect(maskify("Nanananananananananana Batman!")).toBe(
    "##########################man!"
  );
});