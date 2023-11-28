import { convertChart } from "@/helpers/convertDataChart";
import Image from "next/image";
import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };
  return (
    <div className=" fixed top-0 left-0 w-full h-full backdrop-blur-sm overflow-scroll">
      <span
        className=" inline-block text-2xl font-bold bg-red-700 text-white w-8 h-9 text-center m-8 rounded-2xl cursor-pointer "
        onClick={() => setChart(null)}
      >
        x
      </span>
      <div className=" flex items-center justify-center ">
        <div className=" flex flex-col items-start justify-start  rounded-2xl border p-8 ">
          <div className="flex items-center mb-4 ">
            <img className=" w-10 h-10 mr-5" src={chart.coin.image} alt="" />
            <p className=" text-2xl font-bold">{chart.coin.name}</p>
          </div>
          <div>
            <ChartComponent data={convertChart(chart, type)} type={type} />
            <div className=" flex mt-2 " onClick={typeHandler}>
              <button
                className={
                  type === "prices"
                    ? " flex mx-5 border rounded-lg p-1 bg-blue-700 text-black cursor-pointer text-base "
                    : "flex mx-5 border rounded-lg p-1 bg-black text-blue-700 cursor-pointer text-base"
                }
              >
                Prices
              </button>
              <button
                className={
                  type === "market_caps"
                    ? " flex mx-5 border rounded-lg p-1 bg-blue-700 text-black cursor-pointer text-base "
                    : "flex mx-5 border rounded-lg p-1 bg-black text-blue-700 cursor-pointer text-base"
                }
              >
                Market Caps
              </button>
              <button
                className={
                  type === "total_volumes"
                    ? " flex mx-5 border rounded-lg p-1 bg-blue-700 text-black cursor-pointer text-base "
                    : "flex mx-5 border rounded-lg p-1 bg-black text-blue-700 cursor-pointer text-base"
                }
              >
                Total Volumes
              </button>
            </div>
            <div className=" flex text-lg mt-7 ">
              <div className=" flex mx-3 ">
                <p className=" text-blue-700 mr-2 font-bold">Prices :</p>
                <span>${chart.coin.current_price}</span>
              </div>
              <div className=" flex mx-3">
                <p className=" text-blue-700 mr-2 font-bold">ATH :</p>
                <span>${chart.coin.ath}</span>
              </div>
              <div className=" flex mx-3">
                <p className=" text-blue-700 mr-2 font-bold">Market Cap:</p>
                <span>{chart.coin.market_cap}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
export const ChartComponent = ({ data, type }) => {
  return (
    <LineChart width={900} height={400} data={data}>
      <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth="2px" />
      <CartesianGrid stroke="#404042" />
      <XAxis dataKey="date" hide />
      <YAxis width={110} dataKey={type} domain={["auto", "auto"]} />
      <Legend />
      <Tooltip />
    </LineChart>
  );
};
