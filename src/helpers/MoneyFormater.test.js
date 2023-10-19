import { moneyFormater } from "./MoneyFormater"

describe("MoneyFormater", () => {
    it("should show R$ in the MoneyFormater", () => {
       const moneyFormaterValue = moneyFormater(10)
       expect(moneyFormaterValue.startsWith("R$")).toBe(true)
    })})