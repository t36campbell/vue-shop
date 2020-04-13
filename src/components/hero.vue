<template>
  <div class="site-blocks-cover overlay">
    <div class="container window mx-auto">
      <div class="row h-auto justify-content-center align-items-center">
        <div class="col-md-11">
          <div class="row mb-6">
            <div class="col-md-8">
              <h1 class="hero">Bob's Electronics Repair</h1>
              <p class="mb-5 lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Quis risus sed vulputate odio ut enim. Sed tempus urna et pharetra pharetra massa massa. 
                Nisl nisi scelerisque eu ultrices vitae auctor. Eu consequat ac felis donec et odio. Viverra maecenas accumsan lacus vel facilisis volutpat est. 
                Id cursus metus aliquam eleifend mi in. Nunc mattis enim ut tellus elementum sagittis. Mauris ultrices eros in cursus turpis massa.
              </p>
              <div>
                <a
                  class="btn btn-black btn-outline-black py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block"
                  href="#contact-section"
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
  margin-top: -5vh;
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
.site-blocks-cover,
.site-blocks-cover > .container > .row {
  min-height: 600px;
  height: calc(100vh);
}
.site-blocks-cover h1 {
  font-size: 4rem;
  font-weight: 400;
  color: var(--gray-5);
  font-weight: 900;
}
@media (max-width: 991.98px) {
  .site-blocks-cover h1 {
    font-size: 2rem;
  }
}
.site-blocks-cover p {
  color: var(--gray-5);
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
}
.site-blocks-cover p.lead {
  font-size: 20px;
}
.block-13 {
  position: relative;
  z-index: 1;
}
.block-12 {
  position: relative;
}
.window {
  top: 20%;
  border-radius: 12px;
  border: 10px solid white;
  border-style: double;
  margin: 2rem;
  padding: 2rem;
  background-clip: padding-box;
  background-color: hsla(240, 67%, 94%,0.6);
}
.hero {
  color: var(--gray-5);
}
</style>
