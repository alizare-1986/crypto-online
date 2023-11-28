function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page >= 9) return;
    setPage((page) => page + 1);
  };
  return (
    <div className="flex items-center w-96 justify-between m-auto mb-28">
      <button
        className={
          page === 1
            ? "w-20 opacity-30 rounded-lg border cursor-pointer text-base"
            : " w-20 bg-blue-500 rounded-lg border cursor-pointer text-base"
        }
        onClick={previousHandler}
      >
        previous
      </button>
      {page === 1 ? (
        <p className=" bg-blue-700 border w-7 flex text-base items-center justify-center  rounded-lg">
          1
        </p>
      ) : (
        <p className="border w-7 flex text-base items-center justify-center   rounded-lg">
          1
        </p>
      )}
      {page === 2 ? (
        <p className=" bg-blue-700 border w-7 flex text-base items-center justify-center  rounded-lg">
          2
        </p>
      ) : (
        <p className="border w-7 flex text-base items-center justify-center   rounded-lg">
          2
        </p>
      )}
      {page > 2 && page < 8 ? (
        <>
          <p className=" bg-blue-700 border w-7 flex text-base items-center justify-center  rounded-lg">
            {page}
          </p>
        </>
      ) : (
        <span>...</span>
      )}

      {page === 8 ? (
        <p className=" bg-blue-700 border w-7 flex text-base items-center justify-center  rounded-lg">
          8
        </p>
      ) : (
        <p className="border w-7 flex text-base items-center justify-center   rounded-lg">
          8
        </p>
      )}
      {page === 9 ? (
        <p className=" bg-blue-700 border w-7 flex text-base items-center justify-center  rounded-lg">
          9
        </p>
      ) : (
        <p className="border w-7 flex text-base items-center justify-center   rounded-lg">
          9
        </p>
      )}
      <button
        className={
          page === 9
            ? "w-20 opacity-30 rounded-lg border cursor-pointer text-base"
            : " w-20 bg-blue-500 rounded-lg border cursor-pointer text-base"
        }
        onClick={nextHandler}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
