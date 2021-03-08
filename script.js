// Use the skeleton bellow as a basis for your script
var generateBtn = document.querySelector("#magic-btn");

function displayMagicPhrase() {
  var magicPhrase = makeSomeMagic();

  var magicPhraseDisplay = document.querySelector("#magic-phrase");

  magicPhraseDisplay.value = magicPhrase;
}
function makeSomeMagic() {
  console.log("making magic");
  let likeSports = confirm("Do you like to do sports?");
  console.log(likeSports);
  let likePuzzle = confirm("Do you like puzzle?");
  let likePets = confirm("Do you like pets?");
  let likePizza = confirm("Do you like pizza?");
  let likeDriving = confirm("Do you like driving?");
  let likeComputers = confirm("Do you like computers?");
  let likeFunctions = confirm("Do you like functions?");
  if (likePuzzle || likePets || likePizza) {
    return "Soon you will make yourself a present!";
  } else if (likeSports) {
    return "You are a dynamic person, your career will be outdoors! ";
  } else if (likeDriving) {
    return "You will own a beautiful car!";
  } else if (likeComputers && likeFunctions) {
    return "You are the best, you are a future developer!";
  } else {
    return "Your future is unpredictable, decide what you like in this life!!";
  }
}
// Attach event listener to the magi button
generateBtn.addEventListener("click", displayMagicPhrase);
