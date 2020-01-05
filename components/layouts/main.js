import Head from "next/head";
import reset from "../../css/reset";
import typography from "../../css/typography";
import colors from "../../css/colors";
import nprogress from "../../css/nprogress";
import Header from "../header";

import "nprogress";

export default ({ children, headerActive }) => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content="Andreas Bigger's Blog"></meta>
        <link rel="icon" src="../../public/images/favicon.png"></link>
        {/*} <link rel="icon" href="https://pbs.twimg.com/profile_images/1130090561569001472/6LGqtLrK_400x400.jpg"></link>*/}
        <title>Andreas Bigger's Blog</title>
      </Head>

      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {colors}
      </style>
      <style jsx global>
        {nprogress}
      </style>
      <style jsx global>
        {typography}
      </style>

      <Header active={headerActive} />

      {children}

      <style jsx>{`
        main {
          padding: 10px;
        }
        @media (max-width: 600px) {
          padding: 20px;
        }
      `}</style>
    </main>
  );
};
