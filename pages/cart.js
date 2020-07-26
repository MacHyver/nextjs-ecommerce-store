import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rock'n'Stuff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <img src="./undercon2.png" alt="under construction ribbon" />
        <div>
          <h1 className="title">
            Under Construction!
            <br></br> Please come back later<br></br>or &nbsp;
            <Link href="/contact">
              <a>contact us</a>
            </Link>
            <br></br>in order to get a reminder when the page is <br></br>ready
            2 rock again!
          </h1>
        </div>

        {/* <p className="description">"Check it out or check more out now"</p>
        <br></br>
        <a>
          <img src="./cookie.jpeg" alt="cookies" className="fabric" />
        </a>
        <div className="grid"></div> */}
      </main>
      <Footer />

      <style jsx>
        {`
          main {
            width: 100%;
            height: 750px;
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          img {
            position: absolute;
            left: 0px;
            top: 0px;
            margin: 120px 0px;
            width: 100%;
            height: 100%;
          }
          .title {
            font-size: 70px;
            font-style: bold;
            color: black;
            letter-spacing: 3px;
            word-spacing: 15px;
            text-shadow: 3px 3px #ebbd38;
            text-align: center;
          }
          main a {
            color: black;
            text-align: center;
          }
          main a:hover {
            color: #2368ad;
            text-shadow: 15px 15px white;
          }
        `}
      </style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Rockwork, --apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          background: url(damaskdark.jpeg) #2368ad;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
