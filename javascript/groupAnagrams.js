function groupAnagrams(words) {
  const map = {};
  for (let word of words) {
    // Sort the characters of the word to create a key
    // All anagrams will have the same sorted character string
    const key = word.split('').sort().join('');
    // If the key doesn't exist in the map, create an empty array
    // and push the word into that array
    if (!map[key]) map[key] = [];
    map[key].push(word);
  }
// Return the values of the map, which are arrays of grouped anagrams
  return Object.values(map);
}

console.log(groupAnagrams(['chien', 'niche', 'ecart', 'trace', 'crate', 'race']));
// [["chien", "niche"], ["ecart", "trace", "crate"], ["race"]]
