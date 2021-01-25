import Head from 'next/head'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Formregister from '../components/Formregister'

export default function Home() {
   return (
   <>
      <Head>
         <title>Create Next App</title>
         <link rel="icon" href="/favicon.ico" />
         <link rel="icon" href="assets/images/shared/icon-tab.png" />
         <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400&display=swap" rel="stylesheet" />
         <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous" />
         <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/grids-responsive-min.css" />
         <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
         
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
         <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js"></script>
         <script src="assets/js/main.js"></script>
      </Head>
      <div className="bg-index">
           <Header />
            <Formregister />
               <Body />
           <Footer />
      </div>
   </>
   )
}
