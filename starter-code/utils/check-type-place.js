const checkTypePlace = place => {
  return {
    isCoffeShop: place ? place.type === 'coffeShop' : false,
    isBookStore: place ? place.type === 'bookStore' : false
  }
}
module.exports = checkTypePlace;