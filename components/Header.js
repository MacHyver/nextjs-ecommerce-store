import Head from 'next/head';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <header className="header">
        <div>
          <Link href="/">
            <a>Home </a>
          </Link>

          <Link href="/rocknstuff">
            <a>Rock'n'Stuff </a>
          </Link>

          <Link href="/contact">
            <a>Contact </a>
          </Link>

          <Link href="/cart">
            <a>
              Shoppingcart{' '}
              <img
                src="/../carticon.png"
                alt="shoppingcart icon"
                className="cart"
              />
            </a>
          </Link>
        </div>
      </header>

      <style jsx>{`
        .header {
          border-style: hidden;
          padding: 30px;
          background-color: #020202;
          text-align: center;
          align-items: center;
          font-family: Rockwork, --apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          font-size: 60px;
          font-style: bold;
          letter-spacing: 2px;
          text-shadow: 2px 2px white;
          cursor: url(metalhand.png), url(metalhand.gif), auto;
        }
        .header a {
          color: #2368ad;
          text-align: center;
          padding: 14px 70px;
        }
        .header a:hover {
          color: #2368ad;
          text-shadow: 20px 20px white;
        }
        header img {
          margin-left: 0.5rem;
          width: 30px;
          height: 30px;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          cursor: url(metalhand.png), url(metalhand.gif), auto;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
