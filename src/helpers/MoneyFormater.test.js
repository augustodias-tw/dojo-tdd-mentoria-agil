import { moneyFormater } from "./MoneyFormater"

describe("MoneyFormater", () => {
    it("should show R$ in the MoneyFormater", () => {
       const moneyFormaterValue = moneyFormater(10)
       expect(moneyFormaterValue.startsWith("R$")).toBe(true)
       
    })
   it("should show decimal Places", () => {
      const moneyFormaterDecimalPlaces = moneyFormater(10)
      expect(moneyFormaterDecimalPlaces.endsWith(".00")).toBe(true)
   })})