import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function contacts() {
  return (
    <div className="container">
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <h1>how to get in contact with us</h1>

        <p></p>
        <form>
          <div>
            <label>Email Address</label>
            <input type="text" name="EMAIL" required></input>
          </div>
          <div>
            <label>Your Name</label>
            <input type="text" name="NAME" required></input>
          </div>
          <div>
            <label>How can we Rock'n'Stuff you?</label>
            <textarea maxlength="250">Enter text here ...</textarea>
          </div>
          <div>
            <button type="submit">Click &amp; send to us!</button>
          </div>
        </form>
      </main>

      <Footer />

      <style jsx>{`
        main {
          padding: 5rem 0;
          width: 100%;
          height: 950px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: Rockwork, --apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          text-align: center;
        }
        main h1 {
          font-size: 60px;
          font-style: bold;
          color: white;
          letter-spacing: 5px;
          text-shadow: 3px 3px #0c0c0cb0;
          margin-top: -150px;
        }

        // main p {
        //   font-size: 60px;
        //   word-spacing: 20px;
        //   color: white;
        //   letter-spacing: 2px;
        //   text-shadow: 3px 3px #0c0c0cb0;
        //   margin-top: ;
        // }

        input {
          background-color: #fff;
          border: 2px solid #c9c9c9;
          border-radius: 3px;
          display: inline-block;
          margin: 0 0 24px;
          min-height: 36px;
          min-width: 50px;
          padding: 0 0.4em;
          vertical-align: middle;
          width: 100%;
        }

        label {
          font-size: 30px;
          color: white;
          letter-spacing: 3px;
          word-spacing: 5px;
          text-shadow: 3px 3px #0c0c0cb0;
          display: block;
          padding-bottom: 3px;
          user-select: none;
          text-align: left;
        }

        textarea {
          width: 100%;
          height: 150px;
          padding: 12px 20px;
          box-sizing: border-box;
          border: 2px solid #ccc;
          border-radius: 4px;
          background-color: #f8f8f8;
          resize: none;
          font-family: Rockwork, --apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          font-size: 30px;
        }
        button {
          width: 100%;
          height: 50px;
          margin-top: 10px;
          font-family: Rockwork, --apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          box-sizing: border-box;
          font-size: 30px;
          color: white;
          letter-spacing: 5px;
          text-shadow: 3px 3px #0c0c0cb0;
          background-color: #ffffff3b;
          text-align: center;
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
