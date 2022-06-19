import Head from 'next/head'
import NavbarApp from '../NavbarApp/NavbarApp'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      <NavbarApp />
      <main>{ children }</main>
    </>
  )
}

export default Layout