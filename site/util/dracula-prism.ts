/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

/*
 * Dracula Theme for Prism.JS
 *
 * @author Gustavo Costa
 * e-mail: gusbemacbe@gmail.com
 *
 * @contributor Jon Leopard
 * e-mail: jonlprd@gmail.com
 *
 * @license MIT 2016-2018
 */

// This has been tweaked to work with react-prism-renderer

export const draculaPrism = `
pre::-webkit-scrollbar {
  width: 14px;
}

pre::-webkit-scrollbar-track {
  background-color: #6272a4;
  border-radius: 0px;
}

pre::-webkit-scrollbar-thumb {
  background-color: #bd93f9;
  border-radius: 0px;
}

code[class*="language-"],
pre[class*="language-"],
[language="jsx"] pre {
  color: #ccc;
  background: rgb(40, 41, 54);
  text-shadow: none;
  font-family: PT Mono, Consolas, Monaco, "Andale Mono", "Ubuntu Mono",
    monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

@media print {
  code[class*="language-"],
  pre[class*="language-"] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*="language-"] {
  background: rgba(40, 41, 54, 1) !important;
  border-radius: 0.5em;
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  height: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: rgba(40, 41, 54, 1);
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 4px 7px;
  border-radius: 0.3em;
  white-space: normal;
}

.limit-300
{
  height: 300px !important;
}

.limit-400
{
  height: 400px !important;
}

.limit-500
{
  height: 500px !important;
}

.limit-600
{
  height: 600px !important;
}

.limit-700
{
  height: 700px !important;
}

.limit-800
{
  height: 800px !important;
}

.token.plain {
  color: #ccc
}

.token.comment {
  color: rgba(98, 114, 164, 1);
}

.token.prolog {
  color: rgba(207, 207, 194, 1);
}

.token.tag {
  color: rgba(220, 104, 170, 1);
}

.token.entity {
  color: rgba(139, 233, 253, 1);
}

.token.atrule {
  color: rgba(98, 239, 117, 1);
}

.token.url {
  color: rgba(102, 217, 239, 1);
}

.token.selector {
  color: rgba(207, 207, 194, 1);
}

.token.string {
  color: rgba(241, 250, 140, 1);
}

.token.property {
  color: rgba(255, 184, 108, 1);
}

.token.important {
  color: rgba(255, 121, 198, 1);
  font-weight: bold;
}

.token.punctuation {
  color: rgba(230, 219, 116, 1);
}

.token.number {
  color: rgba(189, 147, 249, 1);
}

.token.function {
  color: rgba(80, 250, 123, 1);
}

.token.class-name {
  color: rgba(255, 184, 108, 1);
}

.token.keyword {
  color: rgba(255, 121, 198, 1);
}

.token.boolean {
  color: rgba(255, 184, 108, 1);
}

.token.operator {
  color: rgba(139, 233, 253, 1);
}

.token.char {
  color: rgba(255, 135, 157, 1);
}

.token.regex {
  color: rgba(80, 250, 123, 1);
}

.token.variable {
  color: rgba(80, 250, 123, 1);
}

.token.constant {
  color: rgba(255, 184, 108, 1);
}

.token.symbol {
  color: rgba(255, 184, 108, 1);
}

.token.builtin {
  color: rgba(255, 121, 198, 1);
}

.token.attr-value {
  color: #7ec699;
}

.token.inserted {
 color: rgba(80, 250, 123, 1);
}

.token.deleted {
  color: #e2777a;
}

.token.namespace {
  color: #e2777a;
}

.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token {
  color: #ff79c6;
}

.language-json .token.property {
  color: #ff79c6;
}

.language-css .token.selector {
  color: rgba(80, 250, 123, 1);
}

.language-css .token.property {
  color: rgba(255, 184, 108, 1);
}

.language-markup .token.attr-value {
  color: rgba(102, 217, 239, 1);
}

.language-markup .token.tag {
  color: rgba(80, 250, 123, 1);
}

pre.line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber;
}

pre.line-numbers > code {
  position: relative;
  white-space: inherit;
}

.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 0;
  font-size: 100%;
  left: -3.8em;
  width: 3em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #999;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.line-numbers-rows > span {
  pointer-events: none;
  display: block;
  counter-increment: linenumber;
}

.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}

div.code-toolbar {
  position: relative;
}

div.code-toolbar > .toolbar {
  position: absolute;
  top: 0.3em;
  right: 0.2em;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}

div.code-toolbar:hover > .toolbar {
  opacity: 1;
}

div.code-toolbar > .toolbar .toolbar-item {
  display: inline-block;
  padding-right: 20px;
}

div.code-toolbar > .toolbar a {
  cursor: pointer;
}

div.code-toolbar > .toolbar button {
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  -webkit-user-select: none; /* for button */
  -moz-user-select: none;
  -ms-user-select: none;
}

div.code-toolbar > .toolbar a,
div.code-toolbar > .toolbar button,
div.code-toolbar > .toolbar span {
  color: #ccc;
  font-size: 0.8em;
  padding: 0.5em;
  background: rgba(98, 114, 164, 1);
  border-radius: 0.5em;
}

div.code-toolbar > .toolbar a:hover,
div.code-toolbar > .toolbar a:focus,
div.code-toolbar > .toolbar button:hover,
div.code-toolbar > .toolbar button:focus,
div.code-toolbar > .toolbar span:hover,
div.code-toolbar > .toolbar span:focus {
  color: inherit;
  text-decoration: none;
  background-color: var(--verde);
}
`
