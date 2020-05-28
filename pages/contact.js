import Head from 'next/head';
import Link from 'next/link';

export default function contacts() {
  return (
    <div className="container">
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/">
          <a>Home </a>
        </Link>
        <div>
          <Link href="">
            <a>Rock'n'Stuff </a>
          </Link>
        </div>
        <Link href="/contact">
          <a>Contact </a>
        </Link>
        <div>
          <Link href="">
            <a>Shoppingcart </a>
          </Link>
        </div>
      </header>
      <main>
        <h1 className="title">Contact</h1>

        <p className="description">how to get in contact with us</p>

        <div className="grid"></div>
      </main>

      <footer>
        <a>
          Powered by <img src="/stoffherz.jpg" alt="love" className="logo" />
        </a>
      </footer>

      <style jsx>
        {`
          .header {
            border-style: hidden;
            padding: 30px;
            background-color: lightblue;
            text-align: center;
            word-spacing: 50px;
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
        `}
      </style>

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
