import React,{useState,useEffect} from 'react'
import { Nav } from './nav'
function Header() {
    const[Background, setBackground] = useState<boolean>(false)

  useEffect(() =>{
    window.onscroll = () => {
        if(window.scrollY >= 30){
          setBackground(true);
        }
        else{
          setBackground(false);
        }
    }
  },[])
  return (
    <React.Fragment>
        <div className={`fixed z-20 w-full text-white  ${Background ? ' transition-all duration-500 ease-in-out after:absolute after:w-full  after:h-full after:bg-[hsla(0,0%,100%,0.090980392156862744)] after:top-0 after:z-10 after:backdrop-blur-sm' : 'bg-transparent'} `}>
          
        <div className='relative z-20 '>
          <Nav/>
        </div>
        </div>
    </React.Fragment>
  )
}

export {Header}