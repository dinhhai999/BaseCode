import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const LayoutAdmin = (props: Props) => {
  return (
    <div>
      <div>LayoutAdmin</div>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default LayoutAdmin
