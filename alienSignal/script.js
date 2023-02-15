let encrypt = {
    'v': 'e',
    'g': 't',
    'b': 'o',
    'z': 'a',
    'a': 'n',
    'f': 's',
    's': 'h',
    'r': 'i',
    'e': 'r',
    'w': 'd',
    'j': 'w',
    'h': 'u',
    'n': 'm',
    'l': 'y',
    'o': 'l',
    't': 'g',
    'u': 'f',
    'y': 'b',
    'x': 'c',
    'c': 'p',
    'p': 'k',
    'i': 'v',
    'q': 'j',
    'd': 'q',
    'k': 'x',
    'm': 'z',
    ' ': ' ',
    ',': ',',
    '\n': ' ',
    '.': '.',
    ':': ':',
    '?': '?',
    ';': ';',
    '!': '!',
    '-': '-',
    '=': '=',
    "'": "'",
    '[': '[',
    ']': ']',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': 's',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0',
    '(': '(',
    ')': ')',
    'A': 'N',
    'B': 'O',
    'C': 'P',
    'D': 'Q',
    'E': 'R',
    'F': 'S',
    'G': 'T',
    'H': 'U',
    'I': 'V',
    'J': 'W',
    'K': 'X',
    'L': 'Y',
    'M': 'Z',
    'N': 'A',
    'O': 'B',
    'P': 'C',
    'Q': 'D',
    'R': 'E',
    'S': 'F',
    'T': 'G',
    'U': 'H',
    'V': 'I',
    'W': 'J',
    'X': 'K',
    'Y': 'L',
    'Z': 'M'
  };
  
  let inputFile;
  let output = "";
  
  function preload() {
    inputFile = loadStrings("shakespeare-bowl.txt");
  }
  
  function setup() {
    noCanvas();
    for (let i = 0; i < inputFile.length; i++) {
      let line = inputFile[i];
      for (let j = 0; j < line.length; j++) {
        let char = line.charAt(j);
        output += encrypt[char];
      }
      output += "\n";
    }
    console.log(output);
  }