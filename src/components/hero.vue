<template>
  <div class="site-section">
    <b-container fluid>
      <div class="row mb-5 justify-content-center">
        <div class="col-md-6 text-center">
          <h3 class="section-sub-title text-black">Local Repair Shop</h3>
          <h2 class="section-title mb-3 text-black">Bob's Electronics Repair</h2>
        </div>
        <div class="card border-0 rounded-0">
          <div class="mx-auto align-items-start row justify-content-center">
            <div class="card-body col-md-6">
              <p class="mb-5 lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis risus sed vulputate odio ut enim.
                  Sed tempus urna et pharetra pharetra massa massa.
                  Nisl nisi scelerisque eu ultrices vitae auctor.
                  Eu consequat ac felis donec et odio.
                  Viverra maecenas accumsan lacus vel facilisis volutpat est.
                  Id cursus metus aliquam eleifend mi in.
                  Nunc mattis enim ut tellus elementum sagittis.
                  Mauris ultrices eros in cursus turpis massa.
                </p>
                <br />
                <h4 class="mb-3 text-black">About Us</h4>
                <p class="mb-5 lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis risus sed vulputate odio ut enim.
                  Sed tempus urna et pharetra pharetra massa massa.
                  Nisl nisi scelerisque eu ultrices vitae auctor.
                  Eu consequat ac felis donec et odio.
                  Viverra maecenas accumsan lacus vel facilisis volutpat est.
                  Id cursus metus aliquam eleifend mi in.
                  Nunc mattis enim ut tellus elementum sagittis.
                  Mauris ultrices eros in cursus turpis massa.
                </p>
              <div class="mx-auto row form-group justify-content-center">
                <br />
                <b-button
                  class="col-md-12 btn btn-dark mx-1 rounded-0"
                  v-on:click="route('/contact')"
                >Schedule an Appointment</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import router from '../router';

export default {
  name: 'hero',
  methods: {
    route(path) {
      router.push(path);
    },
  },
};
</script>
