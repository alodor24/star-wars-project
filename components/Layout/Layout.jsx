import Head from 'next/head'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>

      <Navbar />

      <main>{ children }</main>
    </>
  )
}

export default Layout