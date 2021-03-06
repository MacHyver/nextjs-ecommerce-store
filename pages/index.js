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
        <h1 className="title">Welcome to Rock'n'Stuff!</h1>

        <p className="description">
          Your homebase for selfmade skirts and other stuff
        </p>

        <div className="grid"></div>
      </main>

      <Footer />

      <style jsx>{`
        main {
          padding: 5rem 0;
          width: 100%;
          height: 750px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: Rockwork, --apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }
        main h1 {
          font-size: 90px;
          font-style: bold;
          color: white;
          letter-spacing: 5px;
          word-spacing: 20px;
          text-shadow: 3px 3px #0c0c0cb0;
        }

        main p {
          font-size: 70px;
          word-spacing: 20px;
          color: white;
          letter-spacing: 2px;
          text-shadow: 3px 3px #0c0c0cb0;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Rockwork, --apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          background: url(damaskdark.jpeg) #2368ad;

          cursor: url(metalhand.png), url(metalhand.gif), auto;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
