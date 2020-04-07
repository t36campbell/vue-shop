<template>
    <header
      class="site-navbar py-4 bg-white js-sticky-header site-navbar-target"
      role="banner"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-10 d-none d-xl-block">
            <nav
              class="site-navigation position-relative text-left"
              role="navigation"
            >
              <ul
                class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block"
              >
                <li><a href="#home-section" class="nav-link">Home</a></li>
                <li>
                  <a href="#services-section" class="nav-link">Services</a>
                </li>
                <li>
                  <a href="#products-section" class="nav-link">Products</a>
                </li>
                <li><a href="#contact-section" class="nav-link">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div
            class="col-6 d-inline-block d-xl-none ml-md-0 py-3"
            style="position: relative; top: 3px;"
          >
            <a
              href="#"
              class="site-menu-toggle js-menu-toggle text-black float-right"
              ><span class="icon-menu h3"></span
            ></a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
