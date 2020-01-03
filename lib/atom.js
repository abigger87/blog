const { posts } = require('../posts')
const max = 10 // max returned posts

module.exports = () => `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Andreas Bigger</title>
    <subtitle>Essays</subtitle>
    <link href="https://andreasbigger.com/atom" rel="self"/>
    <link href="https://andreasbigger.com/"/>
    <updated>${posts[0].date}</updated>
    <id>https://andreasbigger.com/</id>
    <author>
      <name>Andreas Bigger</name>
      <email>abigger87@gmail.com</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
  return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://andreasbigger.com/${post.date.match(/\d{4}/)[0]}/${post.id}"/>
          <updated>${post.date}</updated>
        </entry>`
}, '')}
  </feed>
`
