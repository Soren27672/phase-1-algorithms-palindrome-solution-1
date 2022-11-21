function isPalindrome(word) {
  let backwards = [];
  
  for(let i = 0;i < word.length;++i) {
    backwards[word.length - 1 - i] = word.toLowerCase()[i];
    // For each letter, assign the letter to the new array at an index that is the length of the
    // string minus the iterator and 1, which will result in the character number inverse of the
    // original
  }
  backwards = backwards.reduce((ac,cv) => ac += cv);
    // Reduce it all into one string
  return backwards === word.toLowerCase();
}

/* 
  Lowercase the string
  Make a new array called backwards
  Iterate through the string, putting the current letter into backwards at an index that equals the length minus the iterator
  reduce backwards into a string
  return the value of strictly comparing the two strings
*/

/*
  My function iterates over the string, putting each character into an array at an index that is the length of
  the word -1 -the iterator
  Then it reduces that array into a string and compares the it to the original, returning true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Racecar\nExpecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("mMmmM\nExpecting: true");
  console.log("=>", isPalindrome("mMmmM"));

  console.log("a\nExpecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Robot\nExpecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("nmnm\nExpecting: false");
  console.log("=>", isPalindrome("nmnm"));
}

module.exports = isPalindrome;
