
function calcFoodPrice(guestNumbers){
    let foodPrice = 0;
    foodPrice = guestNumbers.totalAdults * 30400;
    foodPrice += guestNumbers.totalChildren5to10 * (30400/2)
   return foodPrice;
 }

 const capitalizeName = (name) => {
    return name
      .split(' ') // 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
      .join(' '); 
  };

 export {calcFoodPrice,capitalizeName}; 