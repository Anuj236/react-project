import { CDN_URL } from "../utils/constants";

const RestaurantCard = (restaurant) => {
  const { resData } = restaurant;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className=" p-2 m-2 w-64 h-screen max-h-[450px] bg-gray-100 rounded-sm shadow-lg hover:bg-gray-300 border border-collapse ">
      <img className="rounded-lg  " src={CDN_URL + cloudinaryImageId} /> 
      <h3 className="font-bold py-4">{name}</h3>
      <h4 className="truncate">{cuisines.join(",")}</h4>
      <h4>{avgRating}*</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla?.deliveryTime} minutes</h4>
      </div>
   
  );
};

export default RestaurantCard;
