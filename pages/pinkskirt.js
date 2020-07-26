import Head from 'next/head';
import Link from 'next/link';

// var modal = document.getElementById('tryModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('pinkskirt');
// var modalImg = document.getElementById('pink');
// var captionText = document.getElementById('caption');
// img.onclick = function () {
//   modal.style.display = 'block';
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// };

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName('close')[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = 'none';
// };

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rock'n'Stuff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <div>
          <Link href="/">
            <a>Home </a>
          </Link>
          {/* <div> */}
          <Link href="/rocknstuff">
            <a>Rock'n'Stuff </a>
          </Link>
          {/* </div> */}
          <Link href="/contact">
            <a>Contact </a>
          </Link>
          {/* <div> */}
          <Link href="/cart">
            <a>
              Shoppingcart{' '}
              <img
                src="./carticon.png"
                alt="shoppingcart icon"
                className="cart"
              />
            </a>
          </Link>
          {/* </div> */}
        </div>
      </header>
      <main>
        <h1 className="title">Pink Skirt!</h1>

        <p className="description">try it and buy it!</p>

        <div className="grid"></div>
        <a>
          <img
            id="pinkSkirt"
            src="./pinkskirt.jpg"
            alt="pink midlength skirt front view"
            className="skirt"
          />
          {/* <div id="tryModal" class="modal">
            <span class="close">&times;</span>
            <img class="modal-content" id="pink"></img>
            <div id="caption"></div>
          </div> */}
        </a>
        <a>
          <img
            id="pinkSkirtback"
            src="./pinkskirtback.jpg"
            alt="pink midlength skirt back view"
            className="skirt"
          />
        </a>
      </main>

      <footer>
        <a>
          Made with <img src="./stoffherz.jpg" alt="love" className="logo" />
        </a>
      </footer>

      <style jsx>
        {`
          .header {
            border-style: hidden;
            padding: 30px;
            background-color: lightblue;
            text-align: center;
            align-items: center;
            font-family: --apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            font-size: 25px;
            font-style: bold;
            text-shadow: 2px 2px white;
          }
          .header a {
            color: rgb(6, 126, 173);
            text-align: center;
            padding: 14px 16px;
          }
          .header a:hover {
            color: black;
            text-shadow: 2px 2px white;
          }
          header img {
            margin-left: 0.5rem;
            width: 30px;
            height: 30px;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          main img {
            class: center;
            width: 500px;
            height: 550px;
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
