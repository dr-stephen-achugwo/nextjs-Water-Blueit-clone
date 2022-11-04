import Head from "next/head";
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from "react"
function MyApp({ Component, pageProps }) {

//     useEffect(()=>{
//         import("bootstrap/dist/js/bootstrap");
// },[])


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
//* _app.js in içinde olan css leri okur.
//* birden fazla css sayfan varsa bile buraya import etmelisin
