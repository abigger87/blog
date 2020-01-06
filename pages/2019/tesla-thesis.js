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
        <Header title="Tesla Thesis" date="December 28, 2019" views={views} />
        <Head>
            <meta property="og:title" content="Tesla Thesis" />
            <meta property="og:site_name" content="Andreas Bigger's blog" />
            <meta
                property="og:description"
                content="First Blog - Is Tesla a buy?"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@abigger87" />
            <meta
                property="og:image"
                content="https://raw.githubusercontent.com/abigger87/blog/master/public/images/tesla/teslaBlog1.jpg"
            />
        </Head>

        <P>
            <em>
                First Blog - Is Tesla a buy?
            </em>
        </P>

        <P>
            Since the beginning of 2019, Tesla (TSLA) has declined by nearly 50%, dropping from about $347 at its peak to $186. This enormous fluctuation in the value of the Tesla business has no seeming reason.
        </P>
        <P>
            Tesla split investors into the buyers who nothing less than envy Elon Musk's vision and short sellers who worry about the financial troubles Tesla faces. The short sellers have driven the price down significantly in this last run due to the large debt Tesla faces.
        </P>
        <H2 id="wall-street-perspective">The Wall Street Perspective</H2>
        <P>
            Let's begin with Wall Street's perspective on Tesla by taking a look at analyst predictions for 2020. 28 Analysts estimate a year ago EPS of -1.17 USD, yet an increased sales growth of 23.5%. 2019 sales growth year/est is 16.10% which is already very high. The Tesla EPS as of 3/30/2019 was expected to be -0.69, but was realized to be -2.9, a -320% surprise. This upset had actually worsened from the 12/30/2018 EPS reporting a difference of -0.27, a surprise of -12%. Thus the massive short sell does not have root in revenue, but is correlated with EPS. This will come back into the fold when looking further into the financials below.
        </P>
        <H2 id="share-price">Share Price</H2>
        <P>
            26 analysts average a price target of 283.32 with a high of 437 and a low of 150. Tesla's stock price penetrates well into the lower portion of the range, coming in at 185.16. This is a significant reduction from the estimated price and gives a very positive margin of error from the analysts price.
        </P>
        <H2 id="valuation">Company Valuation - Financially</H2>
        <P>
            Tesla's outstanding shares number to 172,721,000. This gives Tesla a market cap of $31,981,020,360 or about $32 billion, to be conservative.
            <br />
            The amount of Total Long Term Debt stands at 11.49 billion as of March 31, 3019 which has declined by about half a billion since December 31, 2018.
            <br />
            Additionally, Tesla raised $2.7 billion mid-May 2019, of which Elon Musk increased his interest with $25 million. This gives Tesla a significant operation cushion.
            <br />
            Another point of strength to attribute to Tesla is the ability for the company to pay off $920 million in debt during Q1 2019.
            <br />
            Over the past four quarters, Tesla cash flows have been very volatile. But this can be expected as constant reinvestment occurs into new vehicles and technology while meeting demand for current car models.
            <br />
            Here is a picture of the previous four quarters:
        </P>
        <Figure
            desc="Tesla Cash Flow"
        >
            <Image src="https://raw.githubusercontent.com/abigger87/blog/master/public/images/tesla/cashflow.png" />
        </Figure>
        <P>
            In the first quarter of 2019, Tesla reported losses per share on an adjusted basis of $2.90, and the revenue reached $4.54 billion. Tesla also delivered 63,000 cars during the quarter, which fell below the analyst's consensus setimate of 76,000 cars.
        </P>
        <P>
            Although the sales were down about 41% from the fourth quarter of 2018, they increased significantly from $2.74 billion, a year ago, to $3.72 billion, a 36% increase.
        </P>
        <H2 id="elon-musk">Elon Musk</H2>
        <P>
            Elon Musk is very devoted to his projects, and his recent commitment to buying more Tesla in its recent raise. Additionally, the extent to which Elon Musk has been involved in attracting attention and liquidity to Tesla has been beneficial for the most part, as well as Tesla employees who share similar visions and thus work at Tesla.
        </P>
        <H2 id="the-gigafactory">The Gigafactory</H2>
        <P>
            Tesla's first Gigafactory is not yet fully operational, but the company is finalizing three additional locations for future gigafactories. The company's plan is to build 10-20 gigafactories in the long run. Once the gigafactory is complete, it will produce around 500,000 cars per year (for perspective, they have produced around 550,000 cars in their entire history).
        </P>
        <P>
            Another gigafactory is currently in development in Shanghai, which has been developing in "Chinese speed", as tweeted by many. But in all seriousness, video of the factory does show significant progress since it began development.
            </P>
        <P>
            Currently, most work is done at Tesla's Fremont plant with 20,000 people working there. They also operate a solar Gigafactory in Buffalo. Future plans also include a gigafactory in Europe.
            </P>
        <P>
            One of the key aspects of Tesla's vehicle production system is its design. Elon Musk has built rockets, and has claimed that they are about 10 times as hard ot manufacture than to design, but he claims it is around 100 times harder to design car manufacturing systems than to design the vehicles themselves.
            </P>
        <P>
            The streamlining efficient production systems that Tesla is building carry value that, by using Musks' statements, maintain very high value. In the next section we will look at the next Tesla asset that holds tremendous future value: Charging Station Network.
        </P>
        <H2 id="charging-network">The Charging Station Network</H2>
        <P>
            If Tesla has a competitive moat to other ev manufacturers, the charging station network creates an already 100 foot-wide, ever expanding moat.
        </P>
        <P>
            As of the end of 2018, Tesla had nearly 13,000 supercharger stations around the world. These outlets are estimated to account for "30 percent to 40 percent" of total US charging outlets counted by the US Dept. of Energy according to Michael Sheetz article on Tesla's charging station network (1).
        </P>
        <P>
            Tesla plans to expand its network of supercharger stations to more than 21,000, covering most of the United States. This network expanded at a rate of 40%, which is impressive as Tesla battles production issues and its vehicles on the road increased by 83 percent.
            </P>
        <Figure
            desc="Tesla Superchargers"
        >
            <Image src="https://raw.githubusercontent.com/abigger87/blog/master/public/images/tesla/superchargers.jpg" />
        </Figure>
        <P>
            Elon Musk also tweeted that the goal of Tesla is to double its superchargers by the end of 2019.
        </P>
        <P>
            On March 6, 2019, Tesla unveiled it is rolling out the v3 supercharger which charges at a rate of 250 kW, at about 1,000 miles of range per hour of charging the Model 3.
        </P>
        <P>
            On a last note, Tesla claims they will not price gauge on recharging, but do charge for the electricity in order to cover costs. Even with the small cost of electricity, the convenience and speed of charging contributes a significant advantage to Tesla's electrical vehicles over other electrical vehicles.
        </P>
        <H2 id="solar-roof">Solar Roof</H2>
        <P>
            The Tesla Solar Roof has been nothing short of a let-down thus far, but Tesla is pushing forward and doubling down on the project. A project first debuted at an October 2016 event, the Solar Roof is the most mysterious Tesla project by far with little updates and seemingly unlimited opportunity.
            </P>
        <P>
            As of recent, Tesla's managment decisions have been strong and thus there is no reason why the Solar Roof project would not be shut down if managment saw this as a failure.
            </P>
        <P>
            Also, recent light has been shed on the project with the Solar Roof Version 3 being released on June 11, 2019 by Elon Musk at the annual shareholders meeting. The tiles are priced relatively cheap at $42 per square foot, considering non-solar dummy tiles costing $11 per square foot. With 30 years of durability, the tiles should produce easily enough to break even quickly.
            </P>
        <P>
            Tesla is currently testing the tiles in a 6 month trial that is expected to simulate 30 years of wear and tear. Hopefully, we will see this project come to fruition in the coming years, creating an ecosystem similar to Apple's with the powerwall - which is what we will look at next.
        </P>
        <H2 id="the-powerwall">The Powerwall</H2>
        <P>
            The Tesla Powerwall is a "rechargeable lithium ion battery with liquid thermal control". The first generation powerwall launched in April 2015, and version 2.0 was announced in October 2016. Prior to April 2018, the price of Powerwall 2.0 was $5,500, but has increased since to $6,700. The Powerwall is a unique product and one of the few in the residential energy storage market. The Powerwall's also pair well with solar panel systems, thus offering non Tesla vehicle owners an attractive offer nevertheless.
        </P>
        <P>
            As home efficiency is becoming, and I expect it to be, a major market in the coming years (a time horizon of 20-30 years), it is crucial that Tesla start early in establishing it's own residential energy ecosystem with sustainable energy.
        </P>
        <P>
            With the last version being announced almost 3 years ago, we should expect the third version soon, most likely to be launched with the Solar Roof Version 3 on a time estimate of 6-18 months (between end of 2019 to end of 2020).
        </P>
        <P>
            This seems to be another strong Tesla project that is crucial for the brand, but may not prove to be valuable for a long while, until the next-gen Solar Roof.
        </P>
        <H2 id="competitive-comparison">A Competitive Comparison</H2>
        <P>
            Tesla has a large number of direct and indirect competitors. The two main types of companies we will focus on is automobile companies and ride-hailing companies.
            </P>
        <P>
            Automobile companies have been around since the early 20th century and have magnitudes more experience than Tesla.
            </P>
        <P>
            Electrical vehicles that rival Tesla's are headed by the Chevy Volt and Nissan Leaf. But both these vehicles can be related to Tesla as Android phones were to Apple's. They have not reached the same quality, and with Tesla's Model 3, absolutely do not compare in quality to price ratio (however measureable that may be).
            </P>
        <P>
            But, since Tesla has made significant strides in the electrical vehicle space, so have the competition begun to follow with BMW, Fiat Chrysler Automobiles, Ford Motor Co., General Motors, Honda, Hyundai, Jaguar / Land Rover, Kia, Mazda, Mercedes-Benz, Mitsubishi, Nissan, Suburu, Toyota, Volkswagon, and Volvo all developing and producing commercially available electric cars.
            </P>
        <P>
            Let us peak at market cap and Q1 2019 revenue of some major competitors compared to Tesla:
            </P>
        <P>
            Tesla - Mkt Cap: $32b, Revenue: $4.54b<br />
            BMW - Mkt Cap: $41b, Revenue: $25b<br />
            Nissan - Mkt Cap: $59b, Revenue: $27b<br />
            General Motors - Mkt Cap: $52b, Revenue: $35b<br />
            Ford Motor Co. - Mkt Cap: $40b, Revenue: $40b<br />
            Fiat Chrysler - Mkt Cap: $21b, Revenue: $27.5b<br />
            Honda - Mkt Cap: $47b, Revenue: $143b
            </P>
        <P>
            Although these businesses are roughly valued better than Tesla in a pure financial perspective (other metrics taken into account), Tesla maintains its supremecy in other areas of innovation. Additionally, Tesla's small revenue is actually an upside as it has huge potential to grow, while these other businesses have been established for a much longer period of time than Tesla.
            </P>
        <P>
            The other competitive edge to take a look at is whether or not ride-hailing business will largely impact Tesla. Elon Musk stated that Tesla's will be able to be deployed to drive others, possibly earning the owners money while doing so. This is in direct competition with ride-hailing companies such as Lyft and Uber, and those companies should be expected to deploy their own autonomous vehicles to drive people around. Fortunately, it seems as though Tesla has more of an investment in vehicle autonomy and has progressed further than ride-hailing companies such as Lyft and Uber. Additionally, those who deploy vehicles will most likely compete with their prices to drive passengers around which is a much better model than Lyft or Uber's fixed methods of pricing.
            </P>
        <P>
            Realistically, there will be those who purchase cars instead of use ride-hailing for the foreseeable future and, thus, does not prove to be an immediate hinderance on Tesla.
        </P>
        <H2 id="takeaway">Takeaway</H2>
        <P>
            Although performance has been significantly hindered during the first quarter of 2019 due to operations, the strong position Tesla holds through its innovation in the automobile industry, and its ongoing projects, do not merit the value of Tesla to decline from $347 per share to $186. At a price of $186 per share, I recommend Tesla as a hold/buy.
        </P>
        <H2 id="thank-you">Thank you!</H2>
        <P>
            Thank you for reading my blog on Tesla! I hope to have provided a strong analysis that is found to be useful and be sure to check me out on twitter @abigger87.
        </P>
        <style amp-custom="true" jsx>{`
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
                <a href="https://www.cnbc.com/2019/02/12/morgan-stanley-tesla-charging-station-network-competitive-moat.html">
                    Tesla Charging Station Network
                </a>
            </Note>
        </FootNotes>
    </Post>
));
