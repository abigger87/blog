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
        <Header title="The Blockchain" date="December 28, 2019" views={views} />
        <Head>
            <meta property="og:title" content="The Blockchain" />
            <meta property="og:site_name" content="Andreas Bigger's blog" />
            <meta
                property="og:description"
                content="An exploration into Blockchain technology"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@abigger87" />
            <meta
                property="og:image"
                content="https://raw.githubusercontent.com/abigger87/blog/master/public/images/blockchain/blockchain.png"
            />
        </Head>

        <P>
            <em>
                An exploration into Blockchain technology
            </em>
        </P>

        <H2 id="decentralization">A Brief History of Decentralization</H2>
        <P>
            The blockchain can be described as a step along the journey to complete decentralization. Some time ago, people - and possibly you yourself - referenced information using the Encyclopedia Britannica and other physical books. These reference books were built by a select number of contributors who were paid by the different book publishers. Well, in 2001 the Wikipedia team was born to provide people with a free online encyclopedia. As access to the internet grew and became more easily accessible, this innovation spread. As of June, 2019, the number of active English contributors (within the last 30 days) is 127,026.
        </P>
        <Figure
            desc="blockchain"
        >
            <Image src="https://raw.githubusercontent.com/abigger87/blog/master/public/images/blockchain/blockchain.png" />
        </Figure>
        <P>
            In 2009, the financial crisis occurred in the United States and many lost faith in the banks. This allowed the launch of a new project called Bitcoin.
        </P>
        <H2 id="bitcoin">Bitcoin and the Decentralized Ledger</H2>
        <P>
            Now, to fully understand the roots of Bitcoin, we must first take a look at a ledger. A ledger is simply a record of cash flowing in and out of your balance, and everyone else's. In a centralized service such as Paypal, we trust the Paypal team to record how much money everyone has. But, in a decentralized ledger, there are thousands of computers around the world competing to modify the ledger. When one computer attempts to post a block of transactions to the ledger, the other computers verify the transaction. The block is then posted to the ledger if more than 50% of the computers agree that the transactions are correct. To see this in action, we can go to https://blockchain.info to view the latest transactions being verified by computers around the world.
        </P>
        <P>
            On https://blockchain.info, we can even click on a block to view many of its attributes, such as number of transactions, output total, and the transaction fees. An example of this is shown below.
        </P>
        <Figure
            desc="blockchain block"
        >
            <Image src="https://raw.githubusercontent.com/abigger87/blog/master/public/images/blockchain/blockExample.png" />
        </Figure>
        <P>
            So, Bitcoin is a decentralized network allowing users to transact peer to peer without the middle man (such as a bank). Trust in the network is created by having many computers from around the world agree on each transaction. Unlike traditional currencies and assets, bitcoin is very portable.
        </P>
        <P>
            In fact, the idea of a decentralized ledger has intrigued the financial industry and the banks themselves. The correspondent banking system that slows banking transactions may soon be gone once all banks use one decentralized ledger instead of each maintaining their own and verifying the transactions with each other.
        </P>
        <H2 id="blockchain">Blockchain</H2>
        <P>
            This whole time, we have been looking into Bitcoin and its decentralized ledger that emerged in the wake of the 2009 financial crisis. Bitcoin implements the blockchain to record transactions in a ledger. But it is important to separate the idea of blockchain from Bitcoin as Bitcoin is a cryptocurrency that uses the blockchain to record transactions.
        </P>
        <P>
            The blockchain technology was actually first outlined in 1991 by Stuart Haber and W. Scott Stornetta who wanted to create a system of record-keeping where time stamps could not be tampered with. It was only in 2009, when Satoshi Nakamoto utilized this technology in its first real-world application called Bitcoin.
        </P>
        <P>
            The takeaway of this blog is that the principle behind blockchain is trust.
        </P>
        <P>
            With that, thank you for reading my blog! Please contact me for any questions and be sure to check out my other blog posts!
        </P>
    </Post>
));
