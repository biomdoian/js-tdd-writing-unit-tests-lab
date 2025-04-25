// Your code here
export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string.");
  }

  if (word.length === 0) return false; 

  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Only alphabetic characters allowed.");
  }

  const lower = word.toLowerCase();
  return lower === lower.split("").reverse().join("");
}