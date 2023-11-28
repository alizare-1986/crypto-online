"use client";
import { useEffect, useState } from "react";
import TableCoin from "../module/TableCoin";
import Pagination from "../module/Pagination";
import { getCoins } from "@/services/fetchApi";
import SearchMoney from "../module/SearchMoney";
import Chart from "../module/Chart";

function CoinsPage() {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currenc, setCurrenc] = useState("usd");
  const [chart, setChart] = useState(null);
  useEffect(() => {
    setLoading(true);
    const Fetch = async () => {
      setCoin(await getCoins(page, currenc));
      setLoading(false);
    };
    Fetch();
  }, [page, currenc]);

  return (
    <div>
      <SearchMoney currenc={currenc} setCurrenc={setCurrenc} />
      <TableCoin coin={coin} loading={loading} setChart={setChart} />
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
}

export default CoinsPage;
