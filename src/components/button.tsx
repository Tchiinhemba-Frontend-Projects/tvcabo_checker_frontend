import React from 'react'

interface ButtonPropps{
    title: string,
    customClass: string
}
function Button({title, customClass}:ButtonPropps) {
  return (
    <React.Fragment>
        <button className={` p-3 rounded-sm cursor-pointer ${customClass}`} >
            <span className='text-xs font-bold uppercase  '>{title}</span>
        </button>
    </React.Fragment>
  )
}

export {Button}