import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rock'n'Stuff - Impressum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1 className="title">
          Impressum
          <br></br>
        </h1>
        <h3>
          Verantwortlich für die Website, so wie <br></br>
          Konzept/ Design &amp; Programmierung/ Umsetzung:
        </h3>
        <p>
          Mag. Michaela Heyer<br></br>
          Pernerstorfergasse XX/x/XX <br></br>1100 Wien<br></br> Tel.
          +43650XXXX321 <br></br>Mail: XXX at hotmail.com <br></br>
          <br></br>Private Seite <br></br>
          Stand: 25.07.2020
        </p>
      </main>

      <style jsx>{`
        main {
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
          margin: 50px;
          font-size: 80px;
          font-style: bold;
          color: white;
          letter-spacing: 10px;
          word-spacing: 20px;
          text-shadow: 3px 3px #0c0c0cb0;
        }

        main h3 {
          font-size: 40px;
          color: white;
          letter-spacing: 5px;
          word-spacing: 20px;
          text-shadow: 3px 3px #0c0c0cb0;
        }
        main p {
          font-size: 40px;
          word-spacing: 10px;
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
