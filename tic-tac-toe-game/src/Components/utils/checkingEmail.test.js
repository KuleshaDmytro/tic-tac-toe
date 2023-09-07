import { checking_email } from "./checkingEmail"; 

describe("checking_email", () => {
  it("should return true for a valid email address", () => {
    document.body.innerHTML = `
      <input type="text" class="checking_login" value="valid@example.com">
    `;
    
    const result = checking_email();
    
    expect(result).toBe(true);
  });

  it("should return false for an invalid email address", () => {
    document.body.innerHTML = `
      <input type="text" class="checking_login" value="invalid-email">
    `;
    
    const result = checking_email();
    
    expect(result).toBe(false);
  });
});
