import  Shimmer  from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

// Conatains Menus for restaurants


const RestaurantMenu = () => {
 const {resId}=useParams();

 const resInfo=useRestaurantMenu(resId);

 if(resInfo===null) {return <Shimmer />};

 const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
  
 const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 console.log(itemCards)
  
  return (
    <div className="menu">
     <h2>{name}</h2>
      <p>
       {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item)=>{
          console.log(item?.card.info.name);
          <li key={item?.card.info.id}>{item.card.info.name}-{"Rs."}{item?.card.info.price}</li>
        })}
      </ul>
      </div>
  );
}

export default RestaurantMenu;
