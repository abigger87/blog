import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
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
            <Html lang={this.props.locale}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}