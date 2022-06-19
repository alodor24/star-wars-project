import Head from 'next/head'
import NavbarApp from '../NavbarApp/NavbarApp'
import Image from 'next/image'
import * as SC from './Layout.styles'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      <NavbarApp />
      <main>{ children }</main>
      <SC.Startship>
        <Image src="/images/milenian-falcon.png" alt="milenian-falcon" width={200} height={200} layout="intrinsic" />
      </SC.Startship>
    </>
  )
}

export default Layout