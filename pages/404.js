import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rock'n'Stuff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">404 Error</h1>
        <h2>Uuuupsi, page not found!</h2>
      </main>

      <style jsx>{`
        .container {
          // min-height: 100vh;
          // display: flex;
          // flex-direction: column;
          // justify-content: center;
          // align-items: center;
        }
        .header {
          border-style: hidden;
          padding: 30px;
          background-color: lightblue;
          text-align: center;
          word-spacing: 70px;
          font-family: --apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 25px;
          font-style: bold;
          text-shadow: 2px 2px white;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
          width: 25px;
          height: 25px;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
