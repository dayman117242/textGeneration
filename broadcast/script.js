let footballText, commercialText;
let footballSections = [], commercialSections = [], splicedSections = [];

function preload() {
  footballText = loadStrings('shakespeare-bowl-game.txt');
  commercialText = loadStrings('shakespeare-bowl-commercials.txt');
}

function setup() {
  // Separate the text files into sections based on the starting phrases
  let currentSectionType;
  for (let i = 0; i < footballText.length; i++) {
    if (footballText[i].startsWith("At the football stadium")) {
      currentSectionType = "football";
      footballSections.push(footballText[i]);
    } else {
      footballSections[footballSections.length-1] += "\n" + footballText[i];
    }
  }
  for (let i = 0; i < commercialText.length; i++) {
    if (commercialText[i].startsWith("In a television commercial")) {
      currentSectionType = "commercial";
      commercialSections.push(commercialText[i]);
    } else {
      commercialSections[commercialSections.length-1] += "\n" + commercialText[i];
    }
  }

  // Combine the football and commercial sections into a single spliced array
  let footballIndex = 0, commercialIndex = 0;
  let currentSection = "football";
  while (footballIndex < footballSections.length && commercialIndex < commercialSections.length) {
    if (currentSection === "football") {
      splicedSections.push(footballSections[footballIndex]);
      footballIndex++;
      currentSection = "commercial";
    } else {
      splicedSections.push(commercialSections[commercialIndex]);
      commercialIndex++;
      currentSection = "football";
    }
  }
  while (footballIndex < footballSections.length) {
    splicedSections.push(footballSections[footballIndex]);
    footballIndex++;
  }
  while (commercialIndex < commercialSections.length) {
    splicedSections.push(commercialSections[commercialIndex]);
    commercialIndex++;
  }

  // Display the spliced text sections in the console log
  for (let i = 0; i < splicedSections.length; i++) {
    console.log(splicedSections[i]);
  }
}