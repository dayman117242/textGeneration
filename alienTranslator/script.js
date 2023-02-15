let decrypt = {
    'e': 'v',
    't': 'g',
    'o': 'b',
    'a': 'z',
    'n': 'a',
    's': 'f',
    'h': 's',
    'i': 'r',
    'r': 'e',
    'd': 'w',
    'w': 'j',
    'u': 'h',
    'm': 'n',
    'y': 'l',
    'l': 'o',
    'g': 't',
    'f': 'u',
    'b': 'y',
    'c': 'x',
    'p': 'c',
    'k': 'p',
    'v': 'i',
    'j': 'q',
    'q': 'd',
    'x': 'k',
    'z': 'm',
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
    'Z': 'M',
    'A': 'N',
    'B': 'O',
    'C': 'P',
    'D': 'Q',
    'E': 'R',
    'F': 'S',
    'G': 'T',
    'H': 'U',
    'I': 'V',
    'J': 'Q',
    'K': 'P',
    'L': 'Y',
    'M': 'Z'
  };
  
  function preload() {
    encrypted = loadStrings('alien-signal.txt');
  }
  
  function setup() {
    decrypted = '';
    for (let i = 0; i < encrypted.length; i++) {
      let line = encrypted[i];
      for (let j = 0; j < line.length; j++) {
        let char = line.charAt(j);
        decrypted += decrypt[char];
      }
      decrypted += '\n';
    }
    console.log(decrypted);
  }