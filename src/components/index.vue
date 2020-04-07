<template>
  <div class="site-wrap">
    <navbar/>
    <hero/>
    <services/>
    <products/>
  </div>
</template>

<script>
import navbar from './navbar'
import hero from './hero'
import services from './services'
import products from './products'

export default {
  name: 'index',
  components: {
    navbar,
    hero,
    services,
    products
  }
}
</script>
