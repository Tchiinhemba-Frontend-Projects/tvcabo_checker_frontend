import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './header'
function Layout() {
  return (
    <React.Fragment>
        <div >
        <Header/>
         <Outlet/>
        </div>
    </React.Fragment>
  )
}

export {Layout}