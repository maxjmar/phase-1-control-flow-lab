function scuberGreetingForFeet(someNumber){
  // Write your code here!
  let result
  if (someNumber <= 400) {
    result = 'This one is on me!';
  }
  else if (someNumber <= 2499) {
    result = 'I will gladly take your thirty bucks.';
  }
  else if (someNumber > 2500) {
    result = 'No can do.';
  }
  return result
}


function ternaryCheckCity(destinationCity) {
  let travelAdvisery = destinationCity === 'NYC'? 'Ok, sounds good.' : 'No go.';
  return travelAdvisery;
}
ternaryCheckCity('NYC')


function switchOnCharmFromTip(tipAmount) {
  // Write your code here!
  let tipResponse
  switch (tipAmount) {
    case 'generous':
      tipResponse = 'Thank you so much.';
      break;
    case 'not as generous':
      tipResponse = 'Thank you.';
      break;
    default:
      tipResponse = 'Bye.';
  }
  return tipResponse
}