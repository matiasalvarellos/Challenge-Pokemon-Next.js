import Container from "../components/Container";
import "../stylesheets/global.css"

function MyApp({ Component, pageProps }){
  return (
    <Container>
      <Component {...pageProps }/>
    </Container>
  )
}

export default MyApp;