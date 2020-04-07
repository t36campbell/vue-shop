<template>
  <div class="site-wrap">
    <navbar />
    <hero />
    <services />
    <products />
    <contact />
  </div>
</template>

<script>
import navbar from './navbar'
import hero from './hero'
import services from './services'
import products from './products'
import contact from './contact'

export default {
  name: 'index',
  components: {
    navbar,
    hero,
    services,
    products,
    contact
  }
}
</script>
