// Charlie's Doberman Generator -- June 2015

$(function() {
  // Global variables
  var tempProb;
  // Traits that are not associated with coat color:
  var sex, line, ears, tail;

  // Define the sex of the generated doberman.
  if (Math.random() < 0.5) {
    sex = "Her";
  } else {
    sex = "His";
  }

  // Line influences what the body of the doberman will look like.
  if (Math.random() < 0.5) {
    line = "an American";
  } else {
    line = "a European";
  }

  // Generates what the ears of the doberman will look like.
  tempProb = Math.random();
  if (tempProb < 0.25) {
    ears = "uncropped/floppy";
  } else if (tempProb < 0.5) {
    ears = "cropped show-style";
  } else if (tempProb < 0.75) {
    ears = "cropped military-style";
  } else {
    ears = "cropped pet-style";
  }

  // Generates the appearance of the tail.
  tempProb = Math.random();
  if (tempProb < 0.33) {
    tail = "uncropped/long";
  } else if (tempProb < 0.66) {
    tail = "docked show-style";
  } else {
    tail = "docked military/pet-style";
  }


  // Variabls for traits associated with coat color
  var coatColorSimple, nose, eyes;

  tempProb = Math.random();
  if (tempProb < 0.2) {
    coatColorSimple = "black with tan markings";
    nose = "black";
    eyes = "brown";

  } else if (tempProb < 0.4) {
    coatColorSimple = "blue-gray with brown markings";
    nose = "dark gray";
    eyes = "gray";

  } else if (tempProb < 0.6) {
    coatColorSimple = "red with brown markings";
    nose = "brown";
    eyes = "amber";

  } else if (tempProb < 0.8) {
    coatColorSimple = "Isabella/fawn colored with rust markings";
    nose = "liver-colored";
    eyes = "amber";

  } else {
    coatColorSimple = "white with cream markings";
    nose = "pink";
    eyes = "light blue";
  }

  // Print statement to print it all:
  $(".print").append("You doberman is of " + line + " line. " + sex + " ears are " + ears + ". " + sex + " tail is " + tail + ". Your doberman is " + coatColorSimple + ". " + sex + " eyes are " + eyes + ". " + sex + " nose and paw pads are " + nose + ".");
  });


/*
 * Credits:
 * http://orig09.deviantart.net/8560/f/2013/293/c/a/doberman_pinscher_coat_color_and_anatomy_guide_by_xlunastarx-d6r7m4r.png
*/
