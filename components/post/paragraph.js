export default ({ children }) => (
  <p>
    {children}
    <style amp-custom jsx>{`
      p {
        margin: 20px 0;
        line-height: 1.5;
      }
    `}</style>
  </p>
);
