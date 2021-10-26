/*
Text: 
   It was 94 fahrenheit outside, so :insertName: went for a walk. When they got
      to :insertLocation:, they stared in horror for a few moments, then :insertEvent:. Bob
      saw the whole thing, but was not surprised — :insertName: weighs 300 pounds,
      and it was a hot day.

Name: 
Willy the Goblin
Big Daddy
Father Christmas


Location:
the soup kitchen
Disneyland
the White House

Event:
spontaneously combusted
melted into a puddle on the sidewalk
turned into a slug and crawled away
*/

/*

1. Opret variabel til Story container.
2. Opret array til Name.
3. Opret array til Location
4. Opret array til Event
5. Opret variabel til Text.
6. Indsæt variableren i Text.
7. Indsæt det færdige resultat i Story tag. 



1. Opret function generateStory().
2. Tilknyt onclick="" på knappen. 
3. Tjek om name er udfyldt
4. Tjek om location er udfyldt.
5. Tjek om event er udfyldt. 
6. De inputs som er udfyldt skal bruges i historien. 

*/

let storyContainer = document.getElementById("story");
let characterName = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let stpryLocation = ["the soup kitchen", "Disneyland", "the White House"];
let storyEvent = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

let customName = document.getElementById("customName");
let customLocation = document.getElementById("customLocation");
let customEvent = document.getElementById("customEvent");

generateStory();

function generateStory() {
  let randomNumber = Math.floor(Math.random() * 3);

  let finalName = characterName[randomNumber];
  let finalLocation = stpryLocation[Math.floor(Math.random() * 3)];
  let finalEvent = storyEvent[Math.floor(Math.random() * 3)];

  if (customName.value != "") {
    finalName = customName.value;
  }

  if (customLocation.value != "") {
    finalLocation = customLocation.value;
  }

  if (customEvent.value != "") {
    finalEvent = customEvent.value;
  }

  let story =
    "It was 94 fahrenheit outside, so " +
    finalName +
    " went for a walk. When they got to " +
    finalLocation +
    ", they stared in horror for a few moments, then " +
    finalEvent +
    ". Bob saw the whole thing, but was not surprised — " +
    finalName +
    " weighs 300 pounds, and it was a hot day.";

  storyContainer.innerText = story;
}
