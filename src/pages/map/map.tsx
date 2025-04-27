import React from 'react'
import { UseSearch } from '../../hooks' 
import { InputLocation,Button,GoogleMapS } from '../../components'
function Map() {
    const {HandeleSearch,search, setSearch} =UseSearch()
    
  return (
    <React.Fragment>
        <div className='flex items-center justify-center h-svh relative'>
            <h2 className='text-white'>Map</h2>
            <GoogleMapS/>
            <div className={"absolute bottom-20  w-[50%]"}>
            <div className='space-y-2'>
            <h4 className='text-sm font-bold '>Endereço de uso do serviço</h4> 
                <form action="" onSubmit={HandeleSearch} className=''>
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

export {Map}