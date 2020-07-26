import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getSkirts } from '../../db';

//DONT FORGET: You have to change that - wont work anymore - when working with a real db (here importing from other file "only")
//
//
//With real db use something getServerSideProps or getStaticProps
//

const skirtsList = getSkirts();

const id = 1;

const Rocknstuff = () => {
  return (
    <div className="container">
      <Head>
        <title>Rock'n'Stuff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Our favorite skirts:</h1>

        <h2> </h2>
        <ul>
          {skirtsList.map(({ id, name, prize }) => (
            <li key={id}>
              <Link href="/rocknstuff/[id]" as={'/rocknstuff/' + id}>
                <a>
                  <img src={`/${id}.png`} />
                  <div className="text">{name}</div>
                  <br></br>
                </a>
              </Link>
              <div className="prize">{prize}</div>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
      <style jsx>
        {`
          main {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 70px;
            margin-left: 250px;
            padding-bottom: 50px;
          }
          main h1 {
            font-size: 50px;
            font-style: bold;
            color: white;
            letter-spacing: 5px;
            word-spacing: 20px;
            text-shadow: 3px 3px #0c0c0cb0;
            text-align: left;
            margin-top: -750px;
            margin-right: 100px;
            margin-left: -575px;
          }

          main li {
            border-style: solid;
            margin-top: 20px;
            margin-left: 50px;
            height: 250px;
            width: 350px;
            background-color: #ffffff52;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
          }
          main img {
            margin-left: 15px;
            width: 170px;
            height: 170px;
            align: left;
          }
          .text {
            font-size: 30px;

            color: white;
            letter-spacing: 2px;
            word-spacing: 5px;
            text-shadow: 3px 3px #0c0c0cb0;
            text-align: center;
          }
          .prize {
            font-size: 20px;
            color: white;
            letter-spacing: 2px;
            word-spacing: 5px;
            text-shadow: 3px 3px #0c0c0cb0;
            text-align: center;
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
};
export default Rocknstuff;
