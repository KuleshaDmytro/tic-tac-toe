import { checking_password } from "./checkingPassword";

describe("checking_password", () => {
  it("should return true for a valid password", () => {
    document.body.innerHTML = `
      <input type="password" class="checking_password" value="123456Aa">
    `;
    
    const result = checking_password();
    
    expect(result).toBe(true);
  });

  it("should return false for an invalid password", () => {
    document.body.innerHTML = `
      <input type="password" class="checking_password" value="123123123">
    `;
    
    const result = checking_password();
    
    expect(result).toBe(false);
  });
});
