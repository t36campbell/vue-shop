<template>
  <div class="site-blocks-cover overlay">
    <div class="container">
      <div class="row align-items-end justify-content-center hero-card">
        <div class="col-12 text-center">
          <h3 class="section-sub-title text-black">Local Repair Shop</h3>
          <h2 class="section-title mb-3 text-light">Bob's Electronics Repair</h2>
        </div>
        <div class="card bg-transparent border-0 rounded-0">
          <div class="mx-auto align-items-start row justify-content-center">
            <div class="card-body col-md-6">
              <p class="mb-5 lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis risus sed vulputate odio ut enim. Sed tempus urna et pharetra pharetra massa massa.
                Nisl nisi scelerisque eu ultrices vitae auctor. Eu consequat ac felis donec et odio. Viverra maecenas accumsan lacus vel facilisis volutpat est.
                Id cursus metus aliquam eleifend mi in. Nunc mattis enim ut tellus elementum sagittis. Mauris ultrices eros in cursus turpis massa.
              </p>
              <div class="mx-auto row form-group justify-content-center">
                <br />
                <a
                  class="col-12 btn btn-white btn-outline-white ml-1 rounded-0"
                  href="#schedule"
                  v-smooth-scroll
                >Schedule an Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero'
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
a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
a:hover {
  text-decoration: none;
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
}
.site-section {
  padding: 2.5em 0;
}
@media (min-width: 768px) {
  .site-section {
    padding: 5em 0;
  }
}
.site-section.site-section-sm {
  padding: 4em 0;
}
.site-blocks-cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-position: center center;
  background-image: url(../assets/images/stock-bg.png);
  max-height: 100vh;
}
.site-blocks-cover.overlay {
  position: relative;
}
.site-blocks-cover.overlay:before {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
}
.hero-card {
  margin-top: 73px;
}
@media (max-width: 991.98px) {
  .hero-card {
    margin-top: 40px;
  }
}
h3.hero {
  color: var(--gray-1);
  font-weight: 900;
}
p.lead {
  color: var(--gray-1);
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 300;
}
</style>
