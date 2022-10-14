import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({ player, cart, setCart }) => {
  // console.log(player)
  const {strPlayer, idPlayer, strCutout} = player;

  const handleAddToCart = () => {
     const info = {
      strPlayer, 
      idPlayer, 
      strCutout,
      price:115,
     };
     if (cart?.length) {
      setCart([... cart,info]);
     
      return;
     }else{
      setCart
      ([info]);
      return;
     }
   };
  // console.log(cart);

  const handleBookmark = () => {
    const info = {
      strPlayer,
      idPlayer,
      quanity: 1,
      price: 110,
      bookmark: "true",
 };
   const prevBookmark = localStorage.getItem("bookmark");
   const oldBookmark = JSON.parse(prevBookmark);

   if (oldBookmark){
    const isExit = oldBookmark.find((p) => p.idPlayer === idPlayer);

   if (isExit){
    const updatedPrice = parseFloat(isExit.quanity);
    const newUpdatePrice = updatedPrice + 1;
isExit.quanity = newUpdatePrice;
localStorage.setItem("bookmark", JSON.stringify([oldBookmark]));
    return;
   }else{
    localStorage.setItem("bookmark", JSON.stringify([...
      oldBookmark, info]));
   }
    
   } else {
    localStorage.setItem("bookmark", JSON.stringify([info]));
    console.log("naiiiii");
   }
  
  };
    return (
        <div className='card' data-aos="zoom-in">
          <img className="player-img" src={strCutout} alt="" /> 
          <h6>{strPlayer}</h6>
          <button className="card-btn">Deatils</button>
          <button onClick={handleAddToCart} 
          className="card-btn">Add to cart</button>
          <button onClick={handleBookmark} className="card-btn">Bookmark</button>
        </div>
    );
};

export default SinglePlayer;