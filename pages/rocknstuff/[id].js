import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getSkirtById } from '../../db';

const Skirt = (props) => {
  if (!props.skirt) return <div>Skirt not found!</div>;

  return (
    <div className="container">
      <Head>
        <title>Skirts</title>
      </Head>

      <Header />
      <main>
        <h1>{props.skirt.name}</h1>
        <p> ID: {props.skirt.id}</p>

        {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      </main>
      <Footer />
      <style jsx>{`
        main {
          width: 100%;
          height: 700px;
        }
        h1 {
          color: white;
          text-align: center;
          font-size: 70px;
          letter-spacing: 5px;
          word-spacing: 5px;
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
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};
export default Skirt;

export function getServerSideProps(context) {
  console.log('server-side context', context.params.id);

  const skirt = getSkirtById(context.params.id);

  if (skirt === undefined) {
    return { props: {} };
  }
  return {
    props: {
      skirt,
    },
  };
}
