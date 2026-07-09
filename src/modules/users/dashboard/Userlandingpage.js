import React, { Fragment } from 'react'
import Headerpage from '../sharescomponents/Headerpage'
import Footerpage from '../sharescomponents/Footerpage'
import Sidebar from '../sharescomponents/Sidebar'
import Usermainpage from './Usermainpage'
import { Outlet } from 'react-router-dom'

function Userlandingpage() {
  return (
    <Fragment>
    <Headerpage/>
    <div className='container-fluid'>
      <div className='row page'>
        <div className='col-md-2 g-0'>
          <Sidebar/>
        </div>
        <div className='col-md-10 border'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>

    <Footerpage/>
    </Fragment>
  )
}

export default Userlandingpage