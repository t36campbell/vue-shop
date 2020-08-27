<template>
  <div>
    <nav class="nav navbar-nav navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <button class="navbar-toggler align-self-start" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse bg-dark p-3 p-lg-0 mt-12 mt-lg-0 d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-start mobileMenu"
          id="navbar"
        >
          <b-navbar-nav class="navbar-nav align-self-stretch">
            <b-nav-item>
              <a href="#" v-smooth-scroll>
                <h3 class="nav-link">Home</h3>
              </a>
            </b-nav-item>
            <b-nav-item>
              <a href="#services-section" v-smooth-scroll>
                <h3 class="nav-link">Services</h3>
              </a>
            </b-nav-item>
            <b-nav-item>
              <a href="#products-section" v-smooth-scroll>
                <h3 class="nav-link">Products</h3>
              </a>
            </b-nav-item>
            <b-nav-item>
              <a href="#teardowns-section" v-smooth-scroll>
                <h3 class="nav-link">Teardowns</h3>
              </a>
            </b-nav-item>
            <b-nav-item>
              <a href="#contact-section" v-smooth-scroll>
                <h3 class="nav-link">Contact</h3>
              </a>
            </b-nav-item>
          </b-navbar-nav>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    
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
.nav {
  background-color: var(--gray-5);
}
.navbar-dark .navbar-nav .nav-link {
  color: var(--gray-1);
}
@media (max-width: 991.98px) {
  .mobileMenu {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    position: absolute;
    height: 100vh;
    -webkit-transition: all ease 0.25s;
    transition: all ease 0.25s;
  }
  .mobileMenu.open {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    width: 25cw;
  }
  @media (max-width: 768px) {
    .mobileMenu.open {
      width: 50vw;
    }
  }
  @media (max-width: 576px) {
    .mobileMenu.open {
      width: 100vw;
    }
  }
}
</style>