import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            locale: initialProps.locale,
            gaTrackingId: initialProps.gaTrackingId,
            hostByLocale: initialProps.hostByLocale,
            graphqlUri: initialProps.graphqlUri,
            ...initialProps
        }
    }

    render() {
        return (
            <html amp="true" lang={this.props.locale}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="https://raw.githubusercontent.com/abigger87/blog/master/public/images/favicon/favicon.png"></link>
                    <title>Andreas Bigger's Blog</title>
                    <meta name="description" content="Andreas Bigger's personal website and blog." />
                    <meta name="keywords" content="Andreas,Bigger,Computer,Science,CS,Investor,Entrepreneur,USC,Viterbi,CSH,Twitter,Tesla,Irobot" />
                    <!-- Global site tag (gtag.js) - Google Analytics -->
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6C0HPZB5KY"></script>
                    <script>
                        window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
    
                        gtag('config', 'G-6C0HPZB5KY');
                    </script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}