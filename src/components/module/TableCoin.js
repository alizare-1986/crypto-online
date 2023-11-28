import {Loader} from "./Loader";
import TableRow from "./TableRow";

function TableCoin({ coin, loading,setChart }) {
  return (
    <div className="flex items-center justify-center m-14 min-h-screen max-sm:block max-sm:overflow-x-scroll ">
      {loading ? (
        <Loader className=" flex justify-center items-center " />
      ) : (
        <table className=" w-full border-collapse">
          <thead className=" border-b-2 border-white mb-80">
            <tr className=" text-xl text-left p-3 max-sm:p-0">
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coin.map((coins) => (
              <TableRow key={coins.id} coin={coins} setChart={setChart}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;
