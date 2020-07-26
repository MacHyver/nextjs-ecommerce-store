import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import { getSkirts } from '../db.js';

const skirtList = getSkirts();

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rock'n'Stuff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <h1 className="title">Choose your favorite Rock'n'Stuff here:</h1>

        <a>Spring/Summer Rock'n'Stuff 2020</a>
        <br></br>
        <ul>
          {skirtList.map((skirt) => {
            return (
              <li key={skirt.id}>
                {skirt.name}
                {skirt.src}
              </li>
            );
          })}
        </ul>
        <Link href="/pinkskirt">
          <a>
            <img src="./pinkskirt.jpg" alt="pink skirt" className="skirt" />
          </a>
        </Link>
        <a>
          <img src="./whiteskirt.jpg" alt="white skirt" className="skirt" />
        </a>
        <a>
          <img src="./redskirt.jpg" alt="red skirt" className="skirt" />
        </a>
        <a>
          <img src="./blackskirt.jpg" alt="black skirt" className="skirt" />
        </a>
        <a>Or try/do it yourself with our original fabrics and patterns!</a>
        <br></br>
        <a>
          <img src="./pinkfabric.jpg" alt="pink fabric" className="fabric" />
        </a>
        <a>
          <img src="./whitefabric.jpg" alt="white fabric" className="fabric" />
        </a>
        <a>
          <img src="./redfabric.jpg" alt="red fabric" className="fabric" />
        </a>
        <a>
          <img src="./blackfabric.jpg" alt="black fabric" className="fabric" />
        </a>
        <div className="grid"></div>
      </main>

      <footer>
        <a>
          Made with <img src="./stoffherz.jpg" alt="love" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main img {
          margin-left: 15px;
          width: 90px;
          height: 90px;
        }
        main img:hover {
          color: black;
          text-shadow: 2px 2px white;
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
