import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/logo.svg"
import { Link } from './link'
function Nav() {

    const ItemLink= [
        {
            to:"/residential",
            title:"Residencial"
        },
        {
            to:"/viagem",
            title:"Viagem"
        },
        {
            to:"/pessoal",
            title:"Pessoal"
           
        },
        {
            to:"/comervial",
            title:"Comercial"
        }
    ]
  return (
    <React.Fragment>
        <div className='py-7 px-10 flex justify-between items-center'>
            <div className='flex items-center gap-5'>
            <div>
                <NavLink to="/">
                    <img src={Logo} alt='logo' className='w-24'/>
                </NavLink>
            </div>
            <div className='flex space-x-6'>
                {ItemLink.map((item, index) => ( index < 2 && <Link key={index} {...item}/>) )}
            </div>
            </div>
            <div className='flex space-x-6'>
            
            {ItemLink.map((item, index) => ( index >= 2 && <Link key={index} {...item}/>) )}

            </div>
        </div>
    </React.Fragment>
  )
}

export {Nav}