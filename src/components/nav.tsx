import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <React.Fragment>
        <div className='py-7 px-10 flex justify-between items-center'>
            <div className='flex items-center gap-5'>
            <div>
                <h2>Logo</h2>
            </div>
            <div className='flex space-x-4'>
                <NavLink to="/residential" className={({isActive}) => (`${isActive && "underline" }`)}>
                    <h3>Residencial</h3>
                </NavLink>
                <NavLink to="">
                    <h3>Residencial</h3>
                </NavLink>
            </div>
            </div>
            <div >

            <NavLink to="">
                    <h3>Residencial</h3>
                </NavLink>

            </div>
        </div>
    </React.Fragment>
  )
}

export {Nav}