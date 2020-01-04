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
    <Header title="iRobot Thesis" date="December 28, 2019" views={views} />
    <Head>
      <meta property="og:title" content="iRobot Thesis" />
      <meta property="og:site_name" content="Andreas Bigger's blog" />
      <meta
        property="og:description"
        content="A fundamentals perspective of iRobot, its valuation, and its future potential as a consumer robotics company"
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
        This post is a fundamental analysis of {" "}
        <a href="https://irobot.com" target="_blank">
          iRobot
        </a>
      </em>
    </P>

    <Quote>
      NASDAQ:{" "}<a href="https://finance.yahoo.com/quote/IRBT/">IRBT</a><br />
      12/27/2019, 4:00pm EST<br />
      52.10 USD<br />
      $1.49 Billion<br />
      16.54 P/E<br />
      4.22 Price to Book Ratio<br />
      2.13 Price to Sales Ratio<br />
      28.06 Million Shares Outstanding<br />
      52-week high: $132.88<br />
      52-week low: $42.41
    </Quote>
    <P>
      iRobot is an American consumer robotics company, designing and building robots for inside and outside of the home. These consist of vacuum cleaners (Roomba), floor moppers (Braava), lawn mowers (Terra), and programmable robots (Root).
    </P>
    <P>
      iRobot was founded in 1990 by three members of MIT’s Artificial Intelligence Lab, which works on robots for space exploration and military defense. In 2002, the flagship Roomba was unveiled, selling more than 8 million home robots by 2012. In 2016, iRobot sold its military robotics business to Arlington Capital Partners, to focus on the consumer market.
    </P>
    <H2 id="product-line">Product Line</H2>
    <P>
      Following the sale of the military division to Arlington Capital Partners, iRobot initiated a series of discontinuations to streamline its business and trim the unnecessary products tarnishing its brand.
    </P>
    <P>
      2016 - Scooba, a floor-washing robot, was phased out.<br />
      2017 - Looj, a gutter-cleaning robot, was discontinued.
    </P>
    <P>
      iRobot’s current lineup includes the Roomba, Braava, Create, Mirra, and soon to be released Terra.
    </P>
    <P>
      In 2020, Colin Angle expects at least one new product line to be released, a strong indication of innovative reinvestments.
    </P>
    <H2 id="competition">Competition</H2>
    <P>
      iRobot faces extreme competitive pressures and an ever-diminishing moat around their robotics technology. On the Roomba front, SharkNinja and Ecovacs robots are undercutting Roomba’s high-end pricing with comparable technology. iRobot is also locked into a race to release an autonomous lawn-mower robot with competitors including Husqvarna, Worx Landroid, the Robomower, and many more - with many to be introduced in 2020 along with Terra.
    </P>
    <P>
      It is clear iRobot faces intense competitive pressure, being squeezed from all sides of the competitive field.
    </P>
    <P>
      Many of the robotic vacuum competitors to iRobot are private companies or hold a variety of other products such as SharkNinja, with its famous Ninja Blender. Thus it is difficult to compare the pricing of iRobot to the industry, though it is clear that the narrowing margin(5) rules iRobot out from being a high growth stock.
    </P>
    <H2 id="pricing-power">Pricing Power</H2>
    <P>
      Following the tariff hike in May 2019 from 10% to 25% on Chinese imports, iRobot’s stock faced a devastating decline from a March 4, 2019 high of about $130.78 to a November 29, 2019 52-week low of $43.56. This collapse coincides with the ongoing litigation battles that iRobot is locked in with shareholders and the recent patent dispute with SharkNinja, which they lost. To be specific, the court rejected iRobot on their motion to remove the SharkNinja robot vacuum from shelves while the patent-infringement issue is disputed. Now, it is entirely up to iRobot to present a valid argument that SharkNinja infringed upon two of their patents. This is entirely possible as iRobot maintains a long history of successfully defending its intellectual property.
    </P>
    <P>
      Due to the tariffs, management had decided to increase prices for its robots, whereas the competition held steady with static prices. This price hike lead customers to buy elsewhere, and iRobot recognized their lack of pricing power. To regain market share and retain their dominant position in North America, Colin Angle announced the reduction of iRobot prices to earlier levels in early November of 2019(3).
    </P>
    <P>
      This brings up another point, which is the market share of iRobot. Shown in the chart below sourced from company presentations:
    </P>
    <Figure
      desc="IRBT Market Share"
    >
      <Image src="https://raw.githubusercontent.com/abigger87/ab3/master/public/images/blog/iRobot/market.png" />
    </Figure>
    <H2 id="financials-and-industry">Financials and Industry</H2>
    <P>
      iRobot’s dominant position in the market induces fear in many investors of the potential market share erosion that can occur. This fear is bolstered by the increasing competition from strong, money-flush competitors such as Husqvarna, Deere, Honda, and MTD Products(3). This forces iRobot to be more reliant on its developing technologies, namely the Braava and Terra.
    </P>
    <P>
      Despite the slowing revenue growth for iRobot, the robotic vacuum market is expected to reach $7.5 Billion by 2024, a CAGR of 11.4% over 2019-2024(4). In 2018, the global robotic vacuum cleaner market was worth $3.9 Billion, and iRobot secured a $1.09 Billion revenue for comparison. For 2019, iRobot expects yoy revenue growth of 10-11% for a revenue of $1.2-1.21 Billion, level with IMARC’s 5-year industry expectations.
    </P>
    <Figure
      desc="iRobot 2019 finances"
    >
      <Image src="https://raw.githubusercontent.com/abigger87/ab3/master/public/images/blog/iRobot/2019.png" />
    </Figure>
    <P>
      As shown above, iRobot is expecting a slight decline in earnings due to multiple misfortunes in 2019 in regards to tariffs and lawsuits. This has dropped forecasts for revenue, operating income, and EPS throughout 2019, and gross margin for 2019 is expected to come in at about 45%, a low for iRobot. This is negatively paired with the 2020 forecast of below 40% gross margins primarily due to competition(5).
    </P>
    <P>
      Despite this analysis, overseas growth remains dynamically vigorous at 25% in Q3 2019. Additionally, operating expenses are consistently being trimmed with a 4% reduction and operating income expanded from 14% to 15% in Q3 2019.
    </P>
    <P>
      As a dominating brand, iRobot presents a strong position in the market and demonstrates little signs of decay as foreign sales offset the temporary setbacks in the US caused by tariffs and hiked prices.
    </P>
    <H2 id="intellectual-property">Intellectual Property</H2>
    <P>
      As a pioneering technological powerhouse, iRobot has been consistently protected by its goodwill, contributing to the competitive moat that has been rapidly decreasing. The recent rejected motion against SharkNinja is certainly a negative sign for iRobot, though they still could win the two patent-infringement arguments they will throw against SharkNinja. Their intellectual property team has a long history of successful defences and Colin Angle recognizes the 1000 plus patents iRobot has created in the past decade(5).
    </P>
    <Tweet
      id="1159527811251679232"
      caption="Colin Angle launching iRobot 2.0"
    />
    <H2 id="amazon">Amazon</H2>
    <P>
      As Amazon is the largest online retailer and AWS the largest cloud compute service, the connection that iRobot holds with Amazon is of paramount importance. This relationship is recognized by iRobot and Colin Angle’s investment in Amazon as iRobot “invested” into AWS back in 2016(1). Additionally, the iRobot products integrate Amazon Alexa for hands-free interaction beyond the smartphone app.
    </P>
    <P>
      In terms of competition, iRobot’s vacuums are on par with competition. As of EOY 2019, the iRobot Roomba i7+ 7550 is rated the Best Automatic Dirt Disposal, the iRobot Roomba 960 is Best for Pet Hair, and the iRobot Roomba S9 9150 is the Most Splurge-Worthy on Amazon. But, the best overall robot is the eufy BoostIQ(2).
    </P>
    <P>
      While this likely indicates the strengthening of competition successfully putting iRobot to the test, iRobot maintains a successful home brand and is easily on par with competition in a variety of facets.
    </P>
    <H2 id="brand">Brand</H2>
    <P>
      Having been in the consumer robotics vacuum industry for a long period, iRobot maintains a strong brand image and has consistently delivered seamless home robots since the premier Roomba release in 2002.
    </P>
    <H2 id="investor-profile">Investor Profile</H2>
    <P>
      As of December 2019, only 14% of shareholders are individual stakeholders. At this point the only attempted explanation is institutional arbitrages attempting to gain upside on tariff reductions, especially as United States elections near and Mr. Trump exits office.
    </P>
    <H2 id="management">Management</H2>
    <P>
      Colin Angle has been iRobots CEO for its entire history and has much to show for it. iRobot’s versatile maneuvering has few mistakes, though we believe the sale of its military division to Arlington Capital Management was one.
    </P>
    <P>
      Over the past decade, iRobot has expanded its intellectual property with over 1000 patents as Mr. Angle recognizes the increasing competition head-on in his Q3 2019 Results Prepared Remarks(5). In an extended effort to protect their competitive moat, a strongly positive stance in our view, iRobot has initiated legal action with claims of patent infringement - namely against SharkNinja. Although SharkNinja initially won as iRobot’s motion to remove SharkNinja products from shelves was rejected, we believe iRobot management is taking the right steps in attempting to protect their intellectual property and iRobot’s grand market share.
    </P>
    <P>
      As analyzed in the Pricing Power section, management made another key decision to roll back prices to pre-tariff levels after iRobot realized their pricing power was much more narrow than originally thought.
    </P>
    <P>
      Lastly, management has shown initiative to pour resources into R&D, despite multiple failures. The key idea in this area is management's ability to discontinue products that failed. This follows the innovative principle of failing fast and hard - a great sign when innovation is precisely what iRobot requires to stay ahead of the competition.
    </P>
    <H2 id="conlusion">Conlusion</H2>
    <P>
      Ultimately, we believe the strength of iRobot’s brand and an efficient management will alleviate temporary setbacks as a result of import tariffs in the United States while overseas sales grow tremendously. The likely introduction of Terra next year indicates the continued technological advancement of iRobot as a robotics pioneer. Additionally, a look at the strong future role of the smart home indicates the growth of home robotics industries and their brands, so long as technological advancement works seamlessly for the customer.
    </P>
    <P>
      Based on this analysis, the sharp decline of iRobot stock in 2019 was due to market vagaries and an over exaggeration of fears due to import tariffs. With competition presenting a real hurdle for iRobot, management’s execution is paramount to maintain and further grow the business. Through the discontinuation of outmoded products, reduction in United States robot pricing to protect market share, a bold management has shown iRobot is ready and able to maneuver efficiently.
    </P>
    <P>
      The deflated value of iRobot to a share price of $52.43 and a price to book ratio of 4.22 presents a solid argument for a BUY rating, though we would like to see a price to book ratio of under 3, with a better price for purchase. At 52-week low levels of $42.41, a BUY rating makes more sense at that price level. With the new year coming around, it is worth keeping a tab on iRobot as a potential opportunity for a pure value investment.
    </P>
    <P>
      TLDR<br />
      iRobot presents good value at its current price of $52.43, but a great value investment would be seen at levels around $37 per share. At $37 per share, the Price to Book ratio would be below 3 and P/E below 12.
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
        <a href="https://www.bizjournals.com/boston/blog/techflash/2016/07/what-irobots-partnership-with-amazon-will-mean-for.html">
          What iRobot's partnership with Amazon will mean for the future of connected robots
        </a>
      </Note>

      <Note id="2">
        <a href="https://www.amazon.com/ospublishing/story/d3d32a4b-8b90-44bd-b730-29175d721e55/ref=sxin_3?pd_rd_w=4vQbQ&pf_rd_p=b134afc4-fd90-4da1-8a84-f3ce3c98defa&pf_rd_r=DAV4VXAGXGW2SH865RYN&pd_rd_r=1736c32b-9b15-487f-bb76-fc11c117a4b5&pd_rd_wg=3nw7o&qid=1577129669&cv_ct_pg=search&cv_ct_wn=osp-multisource&ascsubtag=amzn1.osa.d3d32a4b-8b90-44bd-b730-29175d721e55.ATVPDKIKX0DER.en_US&linkCode=oas&cv_ct_id=amzn1.osa.d3d32a4b-8b90-44bd-b730-29175d721e55.ATVPDKIKX0DER.en_US&tag=realsimpleosp-20&cv_ct_cx=robot+vacuum+cleaners">
          The 11 Best Robot Vacuums That Actually Clean Your Carpet
        </a>
      </Note>

      <Note id="3">
        <a href="https://www.nasdaq.com/articles/heres-why-irobot-stock-is-down-nearly-40-in-a-year-2019-11-03">
          Here's Why iRobot Stock Is Down Nearly 40% in a Year
        </a>
      </Note>

      <Note id="4">
        <a href="https://www.imarcgroup.com/robotic-vacuum-cleaner-market" >
          Robotic Vacuum Cleaner Market: Global Industry Trends, Share, Size, Growth, Opportunity and Forecast 2019-2024
        </a>
      </Note>

      <Note id="5">
        <a href="https://investor.irobot.com/static-files/82d1f971-41f3-409b-a21a-ddad3224634e">
          iRobot Third-Quarter 2019 Conference Call
        </a>
      </Note>
    </FootNotes>
  </Post>
));
