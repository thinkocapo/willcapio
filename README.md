<p align="center">
  <a href="https://github.com/justinformentin/gatsby-v2-tutorial-starter">
    <img
      src="https://i.imgur.com/mW3HLrn.png"
      height="80"
      alt="gatsby-v2-tutorial-starter"
      title="Gatsby v2 Tutorial Starter"
    />
  </a>
</p>

<p align="center">
  <a href="https://circleci.com/gh/justinformentin/gatsby-v2-tutorial-starter">
    <img
      src="https://circleci.com/gh/justinformentin/gatsby-v2-tutorial-starter.svg?style=svg"
      alt="CircleCI"
    />
  </a>
  <a href="https://codeclimate.com/github/justinformentin/gatsby-v2-tutorial-starter">
    <img
      src="https://codeclimate.com/github/justinformentin/gatsby-v2-tutorial-starter/badges/gpa.svg"
      alt="Maintainability"
    />
  </a>
  <a href="https://codeclimate.com/github/justinformentin/gatsby-v2-tutorial-starter">
    <img
      src="https://codeclimate.com/github/justinformentin/gatsby-v2-tutorial-starter/badges/issue_count.svg"
      alt="Issues"
    />
  </a>
  <a href="https://www.codacy.com/app/justinformentin/gatsby-v2-tutorial-starter?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=justinformentin/gatsby-v2-tutorial-starter&amp;utm_campaign=Badge_Grade">
    <img
      src="https://api.codacy.com/project/badge/Grade/c910ab2b18a24dde80cfc05b73c908aa"
      alt="Code Quality"
    />
  </a>
  <a href="https://david-dm.org/justinformentin/gatsby-v2-tutorial-starter">
    <img
      src="https://img.shields.io/david/justinformentin/gatsby-v2-tutorial-starter.svg"
      alt="Dependencies"
    />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img
      src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"
      alt="styled with prettier"
    />
  </a>
  <a href="https://www.netlify.com">
    <img
      src="https://img.shields.io/badge/deploys%20by-netlify-00c7b7.svg"
      alt="deploys by netlify"
    />
  </a>
</p>

<p align="center">
  <strong>
    View the demo at <a href="https://gatsby-tutorial-starter.netlify.com">gatsby-tutorial-starter.netlify.com</a>.
  </strong>
</p>

<p align="center">
  <strong>
    Read the full step by step guide: <a href="https://justinformentin.com/guide-to-building-a-gatsby-site">Guide to Build a Gatsby Site with Perfect Pagespeed Scores</a></a>.
  </strong>
</p>

## Features

- Gatsby v2
- Emotion for styling
- Code syntax highlighting
- Tags
- SEO
  - Sitemap generation
  - Schema.org JSON-LD for Google Rich Snippets
  - Twitter Tags
  - OpenGraph Tags for Facebook/Google+/Pinterest
  - robots.txt
- Typography.js
- Typefaces for faster font loading
- Offline Support
- Manifest Support
- Gatsby Image
  - Responsive images
  - Traced SVG Loading with Lazy-Loading
  - WebP Support
- Development tools
  - ESLint for linting
  - Prettier for code style
  - CircleCI support
  - Google Lighthouse Optimization

# Lighthouse Audit

<p align="center">
  <a href="https://github.com/justinformentin/gatsby-v2-tutorial-starter">
    <img
      src="https://i.imgur.com/YOVC76X.png"
      alt="Google Lighthouse Audit"
      title="Google Lighthouse Audit"
    />
  </a>
</p>

# Usage

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/justinformentin/gatsby-v2-tutorial-starter)

```bash
Download project
# With `gatsby-cli`
gatsby new my-site https://github.com/justinformentin/gatsby-v2-tutorial-starter

OR

# Cloning
git clone my-site https://github.com/justinformentin/gatsby-v2-tutorial-starter.git
cd my-site

THEN

# Install dependencies
npm i

# Start dev server
gatsby develop

# Build for production
gatsby build

# Format with Prettier
npm format

```

## Folder structure
```bash
├──.circleci # Circleci integration
├── config # Theme and site metadata
├── content # Post markdown and images
├── src
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── style
│   └── templates # For Post and Tag page generation
├── static # Images for logo and favicon, and robots.txt
├── gatsby-config.js # Plugin loading and configuration
└── gatsby-node.js # Generate posts/tags and modify webpack
```

## TODO

I. 
CODE Page
collapsable...code snippets | topics areas of interest/learning
"[Intervention] An <img> element was lazyloaded with loading=lazy, but had no dimensions specified. Specifying dimensions improves performance. See https://crbug.com/954323"

II. 
LANGUAGE | SALES | ANIMALS | SPORTS

LANGUAGE - sanskrit. eastern philosophy, words for object orientation. learning techniques for spoken.


III.
monitor MB's used.

BLOCKCHAIN
favorite resources. MasteringBitcoin  
Speech by Cardano founder  . quotes.
subreddits to follow.  


CARNAVAL colombia, this is worthy of its own post?
SKATEBOARDERS & AWESOME SHIT
guy juggling swords..
skateboarding SP, argentina (me) and others

MUSIC
something on RATM. shirt?


III.  
IMG host research. have to pay somewhere. 

TOP PHOTOS - saved a bunch to ~/Pictures folder. post FL/vaca's. but re-check all int'l photo albums. pics from : breckenridge hostel, ukrainian toys in store,  

check memoir document on GDrive, everything underlined....

ANIMALS san diego zoo, and others. south america. birds. "it's all happening At The Zoo" link to simon & garfunkel.

WRITINGS  

SOFTWARE JOURNEY  
the story of why i started programming

florida hockey photo. jetski.

## Code Page for Part II
My favorite languages...  

(Collapsable...)
Examples... 
Python decorator I wrote because I didn't want to see all the multi-processing verbage:  
however not good if sharing, because the behavior is quite hidden/encapsulated  

?  
Protocools, data types, ports, https:  
Network programming, C/C++ Go, Unix  
I like knowing there's no interpreter, feels more lightweight.  

Idempotency  
I liked this concept. Here's from grad school course:  
(snippet) 

Scripting. Shell scripts. Especially with blockchains.  
(Bash Party screenshot + code snippet)  
Something I find interesting. Usually a variable has a data type. But in shell script, that's not the case. e.g. gcp whoami  
use it to your advantage.  

React Redux + Reactive programming:  
I like the concept of immutability avoiding updates by reference, or passing through lots of child/parent props. It's like a database in the browser.  
The first thing I did on a Angular7 project for client was implement NgRedux.  
(snippet)  

Tmux:  
always say going to. i like how you can send-keys from 1 to another.good for when managing lots of terminals. examples...  
(screenshot | snippet)  

.zshrc:  
(snippet of some fav commands)  

Undertaker:  
Event Maker - protocools, new classes + data types, dig into internals of SDK and how compresses/encodes  
I would never do 'int_age' because it's obvious what age is for. However with bytes, rowproxy, buffers, ORM classes (e.g. sqlalchemy's rowProxy), and converting between these, it's crucial for `row_proxy.data` or `dict_body`

Kubernetes:  
minikube repo  


gRPC:  
grpc repo  