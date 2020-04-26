<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
import index from './components/index'

export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style>
:root {
  --gray-1: #f6f6f6;
  --gray-2: #bfbfbf;
  --gray-3: #8c8c8c;
  --gray-4: #5b5b5b;
  --gray-5: #2f2f2f;
  --green: #005a34;
}
body {
  line-height: 1.7;
  color: var(--gray-1);
  font-weight: 400;
  font-size: 1rem;
}
::-moz-selection {
  background: var(--gray-5);
  color: var(--gray-1);
}
::selection {
  background: var(--gray-5);
  color: var(--gray-1);
}
.h1,
.h2,
.h3,
.h4,
.h5,
h1,
h2,
h3,
h4,
h5 {
  font-family: Muli, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
  color: var(--gray-5);
}
a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
a:hover {
  text-decoration: none;
}
p {
  color: var(--gray-4);
}
.btn {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 900;
  padding: 6px 20px;
}
.btn:hover,
.btn:active,
.btn:focus {
  outline: none;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.btn.btn-black {
  border-width: 2px;
  border-color: #000;
  background: #000;
  color: #fff;
}
.btn.btn-black:hover {
  color: #000;
  background-color: transparent;
}
.btn.btn-black.btn-outline-black {
  color: #000;
  background-color: transparent;
}
.btn.btn-black.btn-outline-black:hover {
  border-color: #000;
  background: #000;
  color: #fff;
}
.btn.btn-white {
  border-width: 2px;
  border-color: #fff;
  background: #fff;
  color: #000;
}
.btn.btn-white:hover {
  color: #fff;
  background-color: transparent;
}
.btn.btn-white.btn-outline-white {
  color: #fff;
  background-color: transparent;
}
.btn.btn-white.btn-outline-white:hover {
  border-color: #fff;
  background: #fff;
  color: #000;
}
</style>