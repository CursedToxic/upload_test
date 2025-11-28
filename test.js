function containsLettersAndNumbers(str) {
  // Check for at least one letter (case-insensitive)
  const hasLetter = /[a-zA-Z]/.test(str); 

  // Check for at least one number
  const hasNumber = /\d/.test(str); 

  // Return true only if both conditions are met
  return hasLetter && hasNumber;
}

// Examples:
console.log(containsLettersAndNumbers("abc123")); // true
console.log(containsLettersAndNumbers("hello")); // false
console.log(containsLettersAndNumbers("12345")); // false
console.log(containsLettersAndNumbers("a1b2c3")); // true
console.log(containsLettersAndNumbers("1a"));    // true
console.log(containsLettersAndNumbers(""));      // false