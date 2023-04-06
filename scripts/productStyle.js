function changeStyle() {
  const cardGroupLower = document
    .getElementsByClassName("default-z-index-0")
    .item(0);
  const cardGroupUpper = document
    .getElementsByClassName("default-z-index-1")
    .item(0);
  cardGroupLower.style.cssText = "animation: moveUp 0.3s linear forwards;";
  cardGroupUpper.style.cssText = "animation: moveDown 0.3s linear forwards;";
}

function resetStyle() {
  const cardGroupLower = document
    .getElementsByClassName("default-z-index-0")
    .item(0);
  const cardGroupUpper = document
    .getElementsByClassName("default-z-index-1")
    .item(0);
    cardGroupUpper.style.cssText = "animation: resetPositionUpperCard 0.3s linear forwards;";
    cardGroupLower.style.cssText = "animation: resetPositionLowerCard 0.3s linear forwards;";
}
