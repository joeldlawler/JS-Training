console.log(checkSpeed(95));

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (speed < speedLimit + kmPerPoint) return "Ok";
  if (points >= 12) return "License suspended";
  else return points + " points";
}
