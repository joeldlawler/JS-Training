const priceRanges = [
  { label: "$", toolTip: "Inexpensive", minPerPseron: 5, maxPerPerson: 10 },
  { label: "$$", toolTip: "Not Bad", minPerPseron: 11, maxPerPerson: 20 },
  { label: "$$$", toolTip: "Pricey", minPerPseron: 21, maxPerPerson: 30 },
  { label: "$$$$", toolTip: "Expensive", minPerPseron: 31, maxPerPerson: 100 }
];

const restaurants = [
  { name: "McDonnalds", minPerPseron: 5, maxPerPerson: 10 },
  { name: "Boathouse", minPerPseron: 11, maxPerPerson: 20 },
  { name: "Grays", minPerPseron: 21, maxPerPerson: 30 },
  { name: "Red Pony", minPerPseron: 31, maxPerPerson: 100 }
];

function classifyRestuarants() {
  for (restaurant in restaurants) {
    let average = restaurant.minPerPseron + restaurant.maxPerPerson / 2;
    let stars = "*****";
    if (average < 10) stars = "*";
    if (average < 20) stars = "**";
    if (average < 30) stars = "***";
    if (average < 40) stars = "****";
    return [stars, restaurant.name];
  }
}

const cheapRestuarant = priceRanges.find(function(restuarant) {
  return restuarant.maxPerPerson < 11;
});
