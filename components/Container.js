import Head from "next/head";
import Header from "./Header"
import Footer from "./Footer";

function Container({children}){
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cosmo/bootstrap.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
        <script src="https://kit.fontawesome.com/0999de7920.js" ></script>
        <script src="https://kit.fontawesome.com/0999de7920.js" crossorigin="anonymous"></script>
      </Head>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </>

  )
}

export default Container;