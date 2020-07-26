import Head from 'next/head';
import Link from 'next/link';

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <p>xxxxxxxxxxxxxx</p>
        <div>
          <a>
            Made with <img src="./stoffherz.jpg" alt="love" className="logo" />
          </a>
        </div>
        <p>xxxxxxxXxxxxxxxxxxxxx</p>
        <Link className="impressum" href="/impressum">
          <h3>Impressum</h3>
        </Link>
      </footer>
      <style jsx>{`
        footer {
          background-color: white;
          width: 100%;
          height: 60px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Rockwork, --apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          font-size: 22px;
          word-spacing: 5px;
          letter-spacing: 3px;
          text-shadow: 4px 4px #2368ad82;

          bottom: -100px;
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
        footer p {
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-shadow: none;
        }
        h3 {
          font-size: 25px;
          letter-spacing: 5px;

          text-align: right;
          text-decoration: underline;
        }
        h3:hover {
          color: #2368ad82;
          text-shadow: 10px 10px black;
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
