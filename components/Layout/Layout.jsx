import Head from 'next/head'
import FooterApp from '../FooterApp'
import NavbarApp from '../NavbarApp'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      <NavbarApp />
      <main>{ children }</main>
      <FooterApp />
    </>
  )
}

export default Layout