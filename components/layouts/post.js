import Page from "./main";

export default ({ children }) => (
  <Page>
    <main>
      <article>{children}</article>
    </main>

    <style amp-custom amp-custom="true" jsx>{`
      main {
        padding: 15px;
        max-width: 680px;
        margin: auto;
        font-size: 18px;
      }
    `}</style>
  </Page>
);
