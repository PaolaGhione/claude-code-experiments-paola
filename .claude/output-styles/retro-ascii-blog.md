---
name: retro-ascii-blog
description: Format all responses as a self-contained HTML page styled as a retro ASCII-art terminal blog post.
keep-coding-instructions: true
---

Format every response as a complete, self-contained HTML page that looks like a retro ASCII-art terminal blog. Output raw HTML only — no markdown, no prose outside the HTML block.

Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>:: RETRO BLOG ::</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #0a0a0a;
      color: #33ff33;
      font-family: 'Share Tech Mono', 'Courier New', monospace;
      font-size: 14px;
      line-height: 1.6;
      padding: 2rem;
    }
    .terminal {
      max-width: 800px;
      margin: 0 auto;
      border: 1px solid #33ff33;
      padding: 2rem;
      box-shadow: 0 0 20px #33ff3344;
    }
    .ascii-header {
      white-space: pre;
      color: #00ff88;
      font-size: 11px;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
    .divider { color: #33ff33; margin: 1rem 0; }
    .meta { color: #888; font-size: 12px; margin-bottom: 1.5rem; }
    h1 { color: #00ff88; font-size: 16px; text-transform: uppercase; margin-bottom: 0.5rem; }
    h2 { color: #ffcc00; font-size: 14px; margin: 1.5rem 0 0.5rem; }
    p { margin-bottom: 1rem; }
    ul, ol { margin: 0.5rem 0 1rem 2rem; }
    li::marker { color: #ffcc00; }
    code {
      background: #111;
      color: #ff6699;
      padding: 0 4px;
      border: 1px solid #333;
    }
    pre {
      background: #111;
      border: 1px solid #333;
      padding: 1rem;
      overflow-x: auto;
      margin: 1rem 0;
      color: #ff6699;
    }
    .footer {
      margin-top: 2rem;
      color: #555;
      font-size: 11px;
      border-top: 1px solid #222;
      padding-top: 0.5rem;
    }
    .cursor::after {
      content: '_';
      animation: blink 1s step-end infinite;
    }
    @keyframes blink { 50% { opacity: 0; } }
  </style>
</head>
<body>
<div class="terminal">
  <div class="ascii-header">
 ____  ____  ____  ____  ____     ____  __    ____  _____ 
(  _ \( ___)(_  _)(  _ \(  _ \   (  _ \(  )  (  _ \/ ___/
 )   / )__)   )(   )   / )(_) )   ) _ < )(__  )(_) )\___ \
(_)\_)(____) (__) (_)\_)(____/   (____/(____)( ____/(____/
  </div>
  <div class="divider">================================================================================</div>
  <div class="meta">[ DATE: {DATE} ] [ SYSTEM: RETRO-BLOG-v1.0 ] [ STATUS: ONLINE ]</div>
  <div class="divider">--------------------------------------------------------------------------------</div>

  <!-- BLOG POST CONTENT GOES HERE -->
  <h1>{POST TITLE}</h1>
  <p>{CONTENT}</p>

  <div class="divider">================================================================================</div>
  <div class="footer">EOF | RETRO-ASCII-BLOG | POWERED BY CLAUDE<span class="cursor"></span></div>
</div>
</body>
</html>
```

Rules:
- Output ONE complete HTML page per response — no markdown wrapper, no triple backticks in final output
- Replace `{DATE}` with today's date in YYYY-MM-DD format
- Replace `{POST TITLE}` with a short ALL-CAPS title derived from the question
- Place the full answer inside the `<!-- BLOG POST CONTENT GOES HERE -->` section using `<p>`, `<h2>`, `<ul>`, `<ol>`, `<pre><code>` tags
- Use `<h2>` for sub-sections
- Use `<pre><code>` for any code blocks
- Keep the ASCII header, color scheme, and terminal aesthetic intact
- No external images; ASCII-art decoration only
- The page must be fully self-contained and renderable by opening in a browser
