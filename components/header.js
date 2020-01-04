import Logo from "./logo";
import Link from "next/link";

export const WRITINGS = "WRITINGS";
export const ABOUT = "ABOUT";
export const TWITTER = "TWITTER";
export const SOURCE = "SOURCE";

export default ({ active = null }) => (
  <header>
    <Link href="/">
      <a href="/">
        <Logo />
      </a>
    </Link>

    <nav>
      <ul>
        <li className={active === WRITINGS ? "active" : ""}>
          <Link href="/">
            <a href="/">Writings</a>
          </Link>
        </li>
        <li className={active === ABOUT ? "active" : ""}>
          <a href="mailto:abigger87@gmail.com">Email</a>
        </li>
        <li className={active === TWITTER ? "active" : ""}>
          <a href="https://twitter.com/abigger87" target="_blank">
            Twitter
          </a>
        </li>
        <li className={active === SOURCE ? "active" : ""}>
          <a href="https://github.com/abigger87/blog" target="_blank">
            Source
          </a>
        </li>
      </ul>
    </nav>

    <style jsx>{`
      nav {
        padding: 10px 0 10px 5px;
      }
      
      ul, ul li {    
        -moz-border-radius-topleft: 7px;
        -moz-border-radius-topright: 7px;
        -webkit-border-top-left-radius: 7px;
        -webkit-border-top-right-radius: 7px;
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
      }
      
      ul {
        display: flex;
      }

      a {
        text-decoration: none;
        color: #000;
        display: inline-flex;
        transition: 150ms background-color ease;
        padding: 5px;
      }


      ul li a {
        padding: 5px 10px;
      }

      a:hover {
        background-color: var(--link-highlight);
      }

      .active a {
        font-weight: bold;
        pointer-events: none;
      }

      @media (min-width: 500px) {
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        nav {
          padding: 0;
        }
      }
    `}</style>
  </header>
);
