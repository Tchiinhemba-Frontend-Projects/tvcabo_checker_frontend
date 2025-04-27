import React from 'react'
import { UseSearch } from '../../hooks' 
import { Button, InputLocation} from '../../components'

function Residential() {
  const {HandeleSearch,search, setSearch} =UseSearch()
 
  return (
    <React.Fragment>
      <div className="flex flex-col  h-svh bg-black items-center justify-center text-white space-y-8">
      <div className='space-y-4'>
              <h2 className='text-5xl text-center font-bold uppercase'>TVCABO PARA RESIDÊNCIAS</h2>
              <p className='text-center text-sm'>Internet estável de alta velocidade, onde quer que você more. </p>
             </div>

             <div className='space-y-2'>
              <h4 className='text-sm font-bold'>Endereço de uso do serviço</h4>
               <div className='w-full flex items-center  justify-center'>
                <form action="" onSubmit={HandeleSearch}>
                  <div className="flex gap-5">
                    <InputLocation setSearch={setSearch} search={search}/>
                    <Button title="Pedir Agora" customClass='bg-white text-black w-44'/>
                  </div>
                </form>
               </div>
             </div>
      </div>
    </React.Fragment>
  )
}

export {Residential}