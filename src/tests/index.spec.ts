import { add } from "../add"

describe("Calc", () => {
  test("should return 10 for add(6, 4)", () => {
    expect(add(6, 4)).toBe(10)
  })
  test("should return 9 for add(10, -1)", () => {
    expect(add(10, -1)).toBe(9)
  })
})
