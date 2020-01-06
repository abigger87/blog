export default ({ children }) => (
  <code>
    {children}
    <style amp-custom jsx>{`
      code {
        color: #be00ff;
        font-family: Menlo, monospace;
        font-size: 0.95em;
      }

      code :global(> a) {
        color: #be00ff;
      }
    `}</style>
  </code>
);
