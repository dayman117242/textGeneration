## Star-Crossed Live Show

An enthusiastically curious race of aliens called the Thezpions have stumbled across Earth, studying and becoming fascinated with our planet's culture. They have taken their findings home to the planet Durama to create an intergalactic live televised event honoring and celebrating our culture. Unfortunately, Thezpions live far away in space and Earth has a weak signal, so we can only hear the events unfold like a radio show. Also, the Thezpions do not speak English so we need someone to run the show's [live transcript](./alien-signal.txt/) through SETI's [universal translator](https://editor.p5js.org/dayman117242/sketches/i6w4W-e9u) so we can understand what kind of show they're putting on. Godspeed, for all spacekind.

---

## Instructions

# [GPT-2 Google Colab Notebook](https://colab.research.google.com/drive/1VLG8e7YSEwypxU-noRNhsv5dW4NfTGce)
1. Download GPT-2 124M model.
2. Upload a text file of a Shakespeare play from [Project Gutenberg](https://www.gutenberg.org/). (I used [Romeo & Juliet](./romeo-and-juliet.txt).)
3. Finetune the model with the following settings:
```
sess = gpt2.start_tf_sess()

gpt2.finetune(sess,
              dataset=file_name,
              learning_rate=1e-5,
              model_name='124M',
              steps=3000,
              restore_from='fresh',
              run_name='run1',
              print_every=20,
              sample_every=100,
              save_every=200
              )         
```
4. Generate text from the trained model using the following settings:
```
gpt2.generate(sess,
              length=1023,
              temperature=0.9,
              prefix="At the football stadium",
              nsamples=5,
              batch_size=5
              )
```Copy the generated text output into a text file, name it "[shakespeare-bowl-game.txt](./shakespeare-bowl-game.txt)".

5. Generate text from the trained model again, this time with a different prefix:
```
gpt2.generate(sess,
              length=1023,
              temperature=0.9,
              prefix="In a television commercial",
              nsamples=5,
              batch_size=5
              )
```Copy the generated text output into a text file, name it "[shakespeare-bowl-commercials.txt](./shakespeare-bowl-commercials.txt)".

# [ChatGPT](https://chat.openai.com/chat)
1. Splice the game with the commercials. Prompts used: 
I've made two text files, one with sections that start with the phrase "At the football stadium" and the other with sections that start with the phrase "In a television commercial". A section is defined as starting with a phrase up until the point the phrase shows up again. I want to make a program that splices these two texts together like you're watching a big game on TV with commercials in between. It is crucial that these sections alternate one after the other (e.g. football, commercial, football, commercial). No time intervals, just the whole static text remixed for the output in the console log. ([Example](https://editor.p5js.org/dayman117242/sketches/I0N5VEPt4))

Run the two text files through the program. Copy the spliced text output into a text file, name it "[shakespeare-bowl.txt](/shakespeare-bowl.txt)".

2. Make a [cipher key](./alien-language.txt). Encrypt the "shakespeare-bowl.txt" file. Prompts used:
Make a p5.js program that uses this cipher key to encrypt text files in the console log output. 
```
encrypt = {
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
```
([Example](https://editor.p5js.org/dayman117242/sketches/xdHne8MlS))

Run the spliced text file through the encryption program. Copy the encrypted text output into a text file, name it "[alien-signal.txt](./alien-signal.txt)".
3. Make a decryption program. Prompts used:
Make a program that reverses this process and decrypts the encrypted text with encrypted text files as input. ([Example](https://editor.p5js.org/dayman117242/sketches/i6w4W-e9u))

Run the encrypted text file through the decryption program.

---

## Sample Outputs

-The Game: [shakespeare-bowl-game.txt](./shakespeare-bowl-game.txt)

-The Commercials: [shakespeare-bowl-commercials.txt](./shakespeare-bowl-commercials.txt)

-The Combined Broadcast (Translated in English): [shakespeare-bowl.txt](/shakespeare-bowl.txt)

-The Combined Broadcast (Native Language): [alien-signal.txt](./alien-signal.txt)

---

## Artist's Statement

Wow, where to begin? This creative project drew from a myriad of inspirations, coinciding with Valentine's Day and the Super Bowl this week. I decided to consolidate these events into my project by training an AI to reinterpret romantic Shakespeare plays like Romeo & Juliet into a play-by-play transcript of a big football game intercut with similarly Renaissance-themed commercials. I was very much influenced by Bilgé Kimyonok’s Neverending Soap-Opera, especially in terms of disrupting traditional media's boundaries in literature and television, and I realized I inadvertently evoked Shrek with my dynamic, subversive mix of medieval settings and modern popular culture. I also took inspiration from Ryan North, who adapted Shakespeare into gleefully irreverent and chaotic choose-your-own-adventure books such as To Be or Not to Be and Romeo and/or Juliet, the latter which I got to read in Lohmeyer's Theory & Practice of Interactive Storytelling. Such works definitely shaped my project's exploration of Roland Barthes's concept regarding "the death of the author" when creators break free from the author's original intent to produce subversive extensions, distortions, and reinterpretations.

I decided to compound the distortion a step further by implementing the cipher I discussed in my developer post, creating a fictional alien language and translator through ChatGPT while also conceiving a fun little story scenario that contextualized the generated text. I initially just wanted to play around with the cipher to explore my passion for puzzle-solving, but I unexpectedly found even more rewarding opportunities with the context of language to explore semiotics and the very essence of communication, as language alone can drastically affect the meaning of a message or work in the fluid, volatile, and dynamic process of adaptation. My project also intentionally derives from and evokes the films Contact and Arrival in regards to extraterrestrial communication, suggesting the profound applications of language and other cultural elements bridging seemingly distant civilizations, which bears even greater relevance today juxtaposed against increasingly advanced technologies.