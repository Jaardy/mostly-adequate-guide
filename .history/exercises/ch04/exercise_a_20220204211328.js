// Refactor to remove all arguments by partially applying the function.

// words :: String -> [String]
const words = (str) => split(" ", str);

const split = words;

console.log(split("cat"));
