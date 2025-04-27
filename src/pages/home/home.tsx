import React from 'react'
import { Card } from '../../components'
function Home() {

  const itemCard =[
    {
      title: "Residencial",
      description: "Conecte-se em casa",
      subdescription:"A partir de R$ 236/mês",
      toLink:"/residential",
      toLink2: "/residential"
    },
    {
      title: "Viagem",
      description: "Conecte-se enquanto viaja para qualquer lugar em mais de 100 mercados",
      subdescription:"A partir de R$ 315/mês",
      toLink:"/residential",
      toLink2: "/residential"
    }
  ]
  return (
    <React.Fragment>
       
          
          <div className='flex flex-col  h-svh bg-black items-center justify-center text-white space-y-4 border-b-2 border-blue-400/10'>
             <div className='space-y-4'>
              <h2 className='text-5xl text-center font-bold'>INTERNET DE ALTA VELOCIDADE <br/>
              PELO MUNDO AFORA</h2>
              <p className='text-center text-sm'>Conecte-se em casa ou de qualquer lugar.</p>
             </div>

             <div className='relative  w-full'>

              <div className='w-full absolute top-28   flex  justify-center gap-6'>
                {itemCard.map((item, index) =>(<Card {...item} key={index}/>))}
              
              </div>
                
             </div>
          </div>
        
    </React.Fragment>
  )
}

export {Home}