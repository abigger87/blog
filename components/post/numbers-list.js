export default ({ children }) => (
  <ul>
    {children}
    <style amp-custom jsx>{`
      ul {
        margin: 0 0 20px 0;
        padding: 0;
        list-style: inside decimal;
      }
    `}</style>
  </ul>
);

const LI = ({ children }) => (
  <li>
    {children}
    <style amp-custom jsx>{`
      li {
        margin-bottom: 5px;
        line-height: 1.5;
      }
    `}</style>
  </li>
);

export { LI };
