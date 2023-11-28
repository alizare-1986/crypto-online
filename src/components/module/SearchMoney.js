"use client";
import { searchCoins } from "@/services/fetchApi";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Loader1 } from "./Loader";

function SearchMoney({ currenc, setCurrenc }) {
  const [query, setQuery] = useState("");
  const [dataS, setDataS] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setDataS([]);
    if (!query) return;
    const fetchSearch = async () => {
      try {
        setDataS(await searchCoins(query), { signal: controller.signal });
        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          toast.error("مشکل در گرفتن اطلاعات");
        }
      }
    };
    setLoading(true);
    fetchSearch();

    return () => controller.abort();
  }, [query]);
 

  return (
    <div className=" mt-12 relative">
      <input
        className=" w-72 h-8 p-2 text-lg text-white bg-black border-none rounded-xl mx-2"
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        className=" bg-slate-700 mx-2 w-20 h-7 border-none rounded-xl p-1"
        value={currenc}
        onChange={(e) => setCurrenc(e.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {query ? (
        <div className="absolute text-center top-16 w-80 h-96 rounded-lg  bg-black border p-5 overflow-auto ">
          {loading ? (
            <div className=" flex items-center justify-center">
              <Loader1 />
            </div>
          ) : (
            <ul>
              {dataS.map((c) => (
                <li
                  key={c.id}
                  className="flex mb-4 pb-1 border-b-2 list-none  "
                >
                  <img className=" mr-3 w-6 h-6" src={c.thumb} alt={c.name} />
                  <p>{c.name}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}

      <Toaster />
    </div>
  );
}

export default SearchMoney;
