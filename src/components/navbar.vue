<template>
  <b-navbar
    class="nav"
    toggleable="lg"
    type="dark"
    sticky
  >
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse
      class="col-12"
      id="nav-collapse"
      is-nav
    >
      <b-navbar-nav>
        <b-nav-item><a href="#app" v-smooth-scroll><h3 class="nav-link">Home</h3></a></b-nav-item>
        <b-nav-item><a href="#services-section" v-smooth-scroll><h3 class="nav-link">Services</h3></a></b-nav-item>
        <b-nav-item><a href="#products-section" v-smooth-scroll><h3 class="nav-link">Products</h3></a></b-nav-item>
        <b-nav-item><a href="#contact-section" v-smooth-scroll><h3 class="nav-link">Contact</h3></a></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar'
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
.nav{
  background-color: var(--gray-5);
}
.navbar-dark .navbar-nav .nav-link {
    color: var(--gray-1);
}
</style>