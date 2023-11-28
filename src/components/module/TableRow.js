import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import Image from "next/image";
import { chartCoins } from "@/services/fetchApi";

function TableRow({ coin,setChart }) {
  
const {id,name,image,symbol,current_price,price_change_percentage_24h,total_volume}=coin

  const showHandler=async()=>{
    const res= await fetch(chartCoins(id))
  const data=await res.json()
  setChart({...data,coin})
  
  }
  return (
    <tr className=" h-20 border-b border-black font-semibold text-lg max-sm:p-0">
      <td className=" ">
        <div className="flex items-center cursor-pointer" onClick={showHandler}>
          <img className=" w-8 h-8 mr-3" src={image} alt="coin" />
          <span className=" font-semibold text-xl text-gray-400">
            {symbol.toUpperCase()}
          </span>
        </div>
      </td>

     <td >{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td>
        {price_change_percentage_24h.toFixed(2) > 0 ? (
          <span className=" text-green-300">
            {price_change_percentage_24h.toFixed(2)}
          </span>
        ) : (
          <span className=" text-red-400">
            {price_change_percentage_24h.toFixed(2)}
          </span>
        )}
        %
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <Image
          src={price_change_percentage_24h > 0 ? chartUp : chartDown}
          alt="percentage"
          width='auto'
          height='auto'
         priority={true}
        />
      </td>
    </tr>
  );
}

export default TableRow;
