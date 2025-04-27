import React from 'react'
import { MdOutlineLocationSearching } from "react-icons/md";

interface InputLocationProps{
  setSearch:React.Dispatch<React.SetStateAction<string>>;
  search: string
}
function InputLocation({setSearch,search}:InputLocationProps) {
  return (
    <React.Fragment>
        <div className='relative w-full border-1 border-solid border-zinc-100/50 bg-[hsla(0,0%,100%,.15)] backdrop-blur-lg rounded-sm focus-within:border-white'>
                  <input type="text" placeholder='Digite e seleciona' className=' px-4 py-4  text-white placeholder:text-white placeholder:uppercase  w-[90%] outline-none group-hover:border-white text-sm placeholder:text-sm' value={search} onChange={(e) => setSearch(e.target.value)}/>

                  <span className="absolute right-3.5 top-4">
                    <button className='cursor-pointer text-zinc-100/80'>
                    <MdOutlineLocationSearching size={18}/>
                  </button></span>
                </div>
    </React.Fragment>
  )
}

export{InputLocation}