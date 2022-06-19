import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalStyle } from '../styles/_app.syles'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
