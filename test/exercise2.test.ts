export const updateData = require("../exercises/exercises_2/index");

test("exercise 2", () => {
  expect(
    updateData(
      { name: "Patrick", country: "Brasil", age: 27 },
      { country: "China", age: 32 }
    )
  ).toEqual({ name: "Patrick", country: "China", age: 32 });
  expect(
    updateData(
      { name: "Patrick", country: "Brasil", age: 27 },
      { price: 89.9, amount: 15, description: "camiseta azul" }
    )
  ).toEqual({ name: "Patrick", country: "Brasil", age: 27 });
  expect(
    updateData(
      { name: "Jorginho", country: "Méxido", age: 51 },
      { name: "Camiseta Verde", price: 59.9, amount: 30 }
    )
  ).toEqual({ name: "Camiseta Verde", country: "Méxido", age: 51 });
});