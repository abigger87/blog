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
import UL, { LI } from "../../components/post/bullets-list";
import withViews from "../../lib/with-views";
import YouTube from "../../components/post/youtube";
import Head from "next/head";

export default withViews(({ views }) => (
    <Post>
        <Header title="Venture Capital" date="December 28, 2019" views={views} />
        <Head>
            <meta property="og:title" content="Venture Capital" />
            <meta property="og:site_name" content="Andreas Bigger's blog" />
            <meta
                property="og:description"
                content="A first look into understanding venture capital."
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
                This post is a first look into understanding venture capital.
            </em>
        </P>

        <P>
            Venture Capital is a curiously invasive chunk of society - with overwhelmingly beneficial contributions. While startups and their innovative ideas can, and often do, seek out loans from banks for capital, loans do not provide the guidance, reassurance, credibility, and a whole slew of other benefits that venture capital tends to offer. But this did not happen overnight, appearing out of nowhere. Venture capital takes stake in a company, saddling the most risky backings that loans are often not given to. They serve a necessary support beam that spures much of the radical innovation in society - aside from well connected angel investors.
        </P>
        <P>
            This is largely different from hedge funds in that hedge funds typically look to invest across various asset classes with liquidity, mitigating risk by making money when investments rise and shrink in value. On the other hand, venture capital firms' success is thought to depend on the company's growth and profit, and the invested capital is known as permanent capital in that it is typically not returned from the companies to the venture capital firms.
        </P>
        <P>
            Now that we understand the operating arena of the venture capital funds, let's explore what comprise the funds themselves.
        </P>
        <H2 id="underneath-the-hood">Underneath the Hood</H2>
        <P>
            Following the "money trail", we need to understand where the venture capital funds acquire their capital to begin with. So, the general partners of a venture capital fund earn money through investments made with money supplied by "Limited Partners". These limited partners are usually large sums of money that allocate an amount to venture capital for high growth such as university endowments, insurance companies, and pension funds. For example, the famous road populated by venture capital firms, Sand Hill Road, runs alongside the Stanford Campus.
        </P>
        <P>
            University endowments, with the large ones such as Yale, Harvard, Stanford, Princeton being in the tens of billions, typically allocate around 15-20% of their endowment to venture capital to gain exposure to high growth markets.
        </P>
        <P>
            This form of investing only arose as a direct result of the mid-late 1970s alteration to money management that deemed private equity and venture capital too risky. This was directly a result of the "prudent man" rule that gave venture capital access to in excess of $4 billion in the 1970s.
        </P>
        <H2 id="venture-capital-portfolio">Venture Capital Portfolio</H2>
        <P>
            40-50% of venture capital tends to be wrong - "impaired assets".<br />
            20-30% of venture capital breaks even or returns a single digit multiplier of invested capital.<br />
            10-30% of venture capital ends up netting the massive returns.
        </P>
        <H2 id="startup-business">Startup Business from the Venture Capital Perspective</H2>
        <P>
            Understanding this, it is clear that venture capital funds absolutely need startups with massive returns, and this is precisely who they are looking to invest in. So, as a startup looking for money, it is crucially important to think about your intended growth and ensure that aligns with venture capital's desire for huge returns before seeking out money.
        </P>
        <P>
            This is often where startups break down and are unable to scale to meet the level of growth that the venture capital funds demand. To note, "huge returns" is in parallel to a long term vision.
        </P>
        <H2 id="j-curve">The J Curve</H2>
        <P>
            The J curve is a caurve representing a venture capital fund's returns and invested capital. Initially usually within a 3-5 year span, the venture capital fund returns a decline in value as money is burned by startups and little profit is realised, but a steep pop is expected once these investments come to fruition.
        </P>
        <P>
            The J curve is an important representation of the venture capital fund's capital allocation for a startup to have a general sense of understanding. For example, if a startup is looking to do a second raise of capital, the venture capital fund that previously backed them may have allocated much of their capital away in order to mitigate the depth of the J curve's dip. Essentially, the further a venture capital fund is along the curve, the more risky it is for a startup to be backed by that venture capital fund.
        </P>
        <P>
            It is also important to note that venture capital funds often expire in around 10 to 15 years, while corporate funds often do not have this issue.
        </P>
        <H2 id="venture-investor">Choosing a Venture Investor</H2>
        <P>
            As a startup, the optimal ordering of backing is first from a financial investor, who is looking for you to build first, and then later find a corporate investor that can provide exposure and relationships that can be necessary to scale.
        </P>
        <H2 id="future-outlook">What is the role of venture capital going forward?</H2>
        <P>
            With the growth of capital exchange platforms on the internet such as cryptocurrencies and crowdfunding, why are venture capital funds still important?
        </P>
        <P>
            Well, in the beginning of their role in investing, they controlled the money, so it was necessary. Whether the funds realise it or not, they will have to evolve in order to find ways to better support the companies they invest in. This is what Scott Kupor voices a16z is working in order to achieve and provide meaningful value.
        </P>
        <P>
            Thank you for reading my blog post on Venture Capital! Please share if you find interesting and reach me on twitter @abigger87
        </P>
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
        <FootNotes>
            <Note id="1">
                Much of the information in this article can and should be attributed to the a16z youtube channel and their <a href="https://youtu.be/VIOhMFw5DXY">video</a>
            </Note>
        </FootNotes>
    </Post>
));
