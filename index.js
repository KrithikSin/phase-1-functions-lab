// Code your solution in this file!
const scuber = 42;
function distanceFromHqInBlocks(value) {
  return Math.abs(value - scuber);
}

function distanceFromHqInFeet(value) {
  const feet = distanceFromHqInBlocks(value) * 264;
  return feet;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const traveled = Math.abs(start - destination) * 264;
  if (traveled <= 400) {
    return 0;
  } else if (traveled > 400 && traveled < 2001) {
    return (traveled - 400) * 0.02;
  } else if (traveled > 2000 && traveled <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
