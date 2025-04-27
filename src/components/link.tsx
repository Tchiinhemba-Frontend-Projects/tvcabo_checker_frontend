import React from 'react'
import { NavLink } from 'react-router-dom'


interface LinkProp{
    to: string,
    title: string
}
function Link({to, title}: LinkProp) {
  return (
    <React.Fragment>
        <NavLink to={to} className={({isActive}) => (`uppercase font-medium border-solid border-transparent py-1 ${isActive && "border-b border-solid border-white" }`)}>
            <h3>{title}</h3>
        </NavLink>
    </React.Fragment>
  )
}

export {Link}