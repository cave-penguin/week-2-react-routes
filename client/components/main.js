import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <Link to="/dashboard"> Go To Root</Link>
          <Link to="/dashboard/profile/3d240521-5706-4272-a57e-5484ea9a2dcc"> Go To Profile</Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
