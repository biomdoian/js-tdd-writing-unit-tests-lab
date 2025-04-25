// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("should return true for a simple palindrome", () => {
    const word = "racecar";
    const result = isPalindrome(word);
    expect(result).toBe(true);
  });

  it("should return false for a non-palindrome", () => {
    const word = "car";
    const result = isPalindrome(word);
    expect(result).toBe(false);
  });
});