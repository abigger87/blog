import Post from "../../components/layouts/post";
import Quote from "../../components/post/quote";
import P from "../../components/post/paragraph";
import Tweet from "../../components/post/tweet";
import Header from "../../components/post/header";
import Code from "../../components/post/code";
import Snippet from "../../components/post/snippet";
import { H2 } from "../../components/post/heading";
import Figure, { Image } from "../../components/post/figure";
import { Ref, FootNotes, Note } from "../../components/post/footnotes";
import UL, { LI } from "../../components/post/numbers-list";
import withViews from "../../lib/with-views";
import YouTube from "../../components/post/youtube";
import Head from "next/head";

export default withViews(({ views }) => (
    <Post>
        <Header title="Fisher's Fundamentals" date="December 28, 2019" views={views} />
        <Head>
            <meta property="og:title" content="Fisher's Fundamentals" />
            <meta property="og:site_name" content="Andreas Bigger's blog" />
            <meta
                property="og:description"
                content="A return to Fisher's fundamental growth-investing."
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@abigger87" />
            <meta
                property="og:image"
                content="https://user-images.githubusercontent.com/13041/71661903-92614e80-2d47-11ea-9e97-ceee5ad8c720.png"
            />
        </Head>

        <P>
            <em>
                A return to Fisher's fundamental growth-investing.
            </em>
        </P>

        <P>
            Phillip Fisher is an extraordinary who disrupted the field of investing, pioneering growth investing. He specialized in innovative companies driven by strong future prospectives backed by research and development. In Common Stocks and Uncommon Profits, Fisher's book that drove him to legendary status, Phillip Fisher lays out a framework for growth investing.
        </P>
        <H2 id="scuttlebutt">The Scuttlebutt Approach</H2>
        <P>
            The scuttlebut approach is a term coined to describe the investigation of a company's entire position. Using this approach, the investor consumes all information about a company to gain a holistic picture for due diligence and to conduct a sound business analysis. In order to piece together a near-complete picture of a company, the investor scuttlebutts by conversing with all kinds of people related to the company in order to learn about the different perspectives of customers, vendors, competitors, partners, employees, and management. The scuttlebutt boils down, in its purest form, to intense research, beyond the standard due diligence that many analysts and stock holders conduct.
        </P>
        <P>
            Fundamentally, Fisher proposes that this due diligence creates a margin of safety in an investment.
        </P>
        <H2 id="fishers-points">Fisher's 15 Points</H2>
        <UL>
            <LI>
                Does the company have products or services with sufficient market potential to make possible a sizable increase in sales for at least several years?
            </LI>
            <LI>
                Does the management have a determination to continue to develop products or processes that will still further increase total sales potentials when the growth potentials of currently attractive product lines have largely been exploited?
            </LI>
            <LI>
                How effective are the company’s research and development efforts in relation to its size?
            </LI>
            <LI>
                Does the company have an above-average sales organization?
            </LI>
            <LI>
                Does the company have a worthwhile profit margin?
            </LI>

            *3. *

            *4. *

            *5. Does the company have a worthwhile profit margin?*

            *6. What is the company doing to maintain or improve profit margins?*

            *7. Does the company have outstanding labor and personnel relations?*

            *8. Does the company have outstanding executive relations?*

            *9. Does the company have depth to its management?*

            *10. How good are the company’s cost analysis and accounting controls?*

            *11. Are there other aspects of the business, somewhat peculiar to the industry involved, which will give the investor important clues as to how outstanding the company may be in relation to its competition?*

            *12. Does the company have a short-range or long-range outlook in regard to profits?*

            *13. In the foreseeable future will the growth of the company require sufficient equity financing so that the larger number of shares then outstanding will largely cancel the existing stockholders’ benefit from this anticipated growth?*

            *14. Does the management talk freely to investors about its affairs when things are going well but “clam up” when troubles and disappointments occur?*

            *15. Does the company have a management of unquestionable integrity?*
        </UL>
        <style jsx>{`
      table {
        border-collapse: collapse;
      }

      table td,
      table th {
        border: 1px solid #ededed;
        padding: 10px;
        font-size: 14px;
      }

      table td:first-child {
        text-align: center;
        font-weight: bold;
      }

      table th {
        text-align: left;
        font-size: 12px;
        text-transform: uppercase;
      }
    `}</style>
    </Post>
));
