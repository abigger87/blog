import Head from "next/head";
import reset from "../../css/reset";
import typography from "../../css/typography";
import colors from "../../css/colors";
import nprogress from "../../css/nprogress";
import Header from "../header";

import "nprogress";

export const config = { amp: true };

export default ({ children, headerActive }) => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Andreas Bigger's personal website and blog." />
        <meta name="keywords" content="Andreas,Bigger,Computer,Science,CS,Investor,Entrepreneur,USC,Viterbi,CSH,Twitter,Tesla,Irobot" />
        <link rel="icon" href="https://raw.githubusercontent.com/abigger87/blog/master/public/images/favicon/favicon.png"></link>
        <title>Andreas Bigger's Blog</title>
      </Head>

      <style amp-custom jsx global>
        {reset}
      </style>
      <style amp-custom jsx global>
        {colors}
      </style>
      <style amp-custom jsx global>
        {nprogress}
      </style>
      <style amp-custom jsx global>
        {typography}
      </style>

      <Header active={headerActive} />

      {children}

      <style amp-custom jsx>{`
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
