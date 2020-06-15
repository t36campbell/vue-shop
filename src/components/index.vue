<template>
  <div class="site-wrap">
    <navbar />
    <hero />
    <services />
    <products />
    <teardowns />
    <gmap />
    <contact />
  </div>
</template>

<script>
import navbar from './navbar'
import hero from './hero'
import services from './services'
import products from './products'
import teardowns from './teardowns'
import gmap from "./gmap"
import contact from './contact'

export default {
  name: 'index',
  components: {
    navbar,
    hero,
    services,
    products,
    teardowns,
    gmap,
    contact
  }
}
</script>

<style>
.site-wrap:before {
  display: none;
  -webkit-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
  background: rgba(0, 0, 0, 0.6);
  content: '';
  position: absolute;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
}
</style>