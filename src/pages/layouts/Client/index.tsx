import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../../common/components/footer'
import Header from '../../../common/components/header'

type Props = {}

const LayoutClient = (props: Props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default LayoutClient
