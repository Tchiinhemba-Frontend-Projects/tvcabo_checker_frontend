import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './button'
interface CardProps {
    title: string,
    description: string,
    subdescription:string,
    toLink:string,
    toLink2: string

}
function Card({title, description, subdescription, toLink, toLink2}:CardProps) {
  return (
    <React.Fragment>
        <div className=' bg-[hsla(0,0%,100%,0.050980392156862744)] backdrop-blur-sm p-8 rounded-sm w-2/5  space-y-6 border border-zinc-100/10'>
                  <div className='space-y-2'>
                    <h3 className='text-2xl uppercase font-bold'>{title}</h3>
                    <p className='text-sm'>{description}</p>
                    <span className='text-sm font-bold'>{subdescription}</span>
                  </div>
                  <div className='flex gap-4 items-center'>
                    <Link to={toLink}>
                        
                        <Button title="Pedir agora" customClass="bg-white text-black"/>
                    </Link>
                    <Link to={toLink2}>
                        
                        <Button title="Saber mais" customClass=" border border-white text-white"/>
                    </Link>
                    
                  </div>
        </div>
    </React.Fragment>
  )
}

export  {Card}