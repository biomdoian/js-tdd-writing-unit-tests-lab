// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("should return true for a simple palindrome", () => {
    // Arrange
    const word = "racecar";

    // Act
    const result = isPalindrome(word);

    // Assert
    expect(result).toBe(true);
  });

  it("should return false for a non-palindrome", () => {
    // Arrange
    const word = "car";

    // Act
    const result = isPalindrome(word);

    // Assert
    expect(result).toBe(false);
  });
});