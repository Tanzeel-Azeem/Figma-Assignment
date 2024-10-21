export default function Header(){
    return(
      <header className="flex items-center ">
        <div>
          {/* logo */}
          <p className="text-black text-3xl ml-56 font-semibold  ">SELHONO  </p>
        </div>
        <div className="mr-5 mt-2 ml-56">
          {/* navbar */}
          <ul className=" flex gap-x-5 text-black list-none text-wrap font-serif rounded-xl">
          <li className=" hover:text-orange-400 duration-700"> Home</li>
            <li className=" hover:text-orange-400  duration-700">page</li>
            <li className=" hover:text-orange-400  duration-700" >Services</li>
            <li className=" hover:text-orange-400  duration-700">Blog</li>
            <li className=" hover:text-orange-400  duration-700"> Project</li>
            <li className=" hover:text-orange-400  duration-700" >Contacts</li>
            
          </ul>
        </div>
      </header>
    )

  }