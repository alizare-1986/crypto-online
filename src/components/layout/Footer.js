
function Footer() {
  return (
    <footer className="flex justify-around border h-14 items-center mx-5 rounded-lg bg-zinc-800">
    &copy;{" "} crypto.online
    <br></br>
    <div >
    made in...  
      <a
      className=" text-blue-500"
        href={"https://github.com/alizare-1986"}
        target={"_blank"}
        rel={"noreferrer"}
      >
       @AliEnayatZare
      </a>
      </div>
      
    </footer>
  )
}

export default Footer
