<template>
  <div class="site-wrap">
    <hero />
    <services />
    <products />
    <contact />
  </div>
</template>

<script>
import hero from './hero'
import services from './services'
import products from './products'
import contact from './contact'

export default {
  name: 'index',
  components: {
    hero,
    services,
    products,
    contact
  }
}
</script>
