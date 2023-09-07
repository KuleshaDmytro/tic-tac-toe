import { checkIfThePasswordIsTheSame } from "./checkIfThePasswordIsTheSame";

describe("checking_password", () => {
  it("should return true for a same passwords", () => {
    document.body.innerHTML = `
      <input type="password" class="checking_password" value="123456Aa">
      <input type="password" class="checking_password" value="123456Aa">
    `;
    
    const result = checkIfThePasswordIsTheSame();
    
    expect(result[0]).toBe(true);
  });

  it("should return false for a different passwords", () => {
    document.body.innerHTML = `
      <input type="password" class="checking_password" value="123456Aa">
      <input type="password" class="checking_password" value="12345612585">
    `;
    
    const result = checkIfThePasswordIsTheSame();
    
    expect(result[0]).toBe(false);
  });

});
