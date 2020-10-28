<template>
  <div class="site-section">
    <b-container fluid>
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h3 class="section-sub-title">Popular Teardowns</h3>
          <h2 class="section-title mb-3">Device Teardowns</h2>
          <br />
          <br />
          <div class="card bg-white border-white rounded-0">
            <b-tabs
              v-model="tabIndex"
              content-class="mt-6"
              nav-class="tab"
              active-nav-item-class="bg-white rounded-0 font-weight-bold"
              fill
            >
              <b-tab title="iPhone" title-link-class="tab text-black" @click="saveTab(0)">
                <h3 class="tab-title mb-6 font-weight-bold text-black">
                  iPhone 12 Pro Teardown
                </h3>
                <p class="mx-auto mb-6 text-justify">
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
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/DDV0_fDJZ40"
                  allowfullscreen
                ></b-embed>
              </b-tab>
              <b-tab title="Apple Watch" title-link-class="tab text-black" @click="saveTab(0)">
                <h3 class="tab-title mb-6 font-weight-bold text-black">
                  Apple Watch S6 Teardown
                </h3>
                <p class="mx-auto mb-6 text-justify">
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
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/MBniQrDGgfA"
                  allowfullscreen
                ></b-embed>
              </b-tab>
              <b-tab title="iPad Pro" title-link-class="tab" @click="saveTab(1)">
                <h3 class="tab-title mb-6 font-weight-bold text-black">
                  iPad Pro 12.9" 4th Gen Teardown
                </h3>
                <p class="mx-auto mb-6 text-justify">
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
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/xz6CExnGw9w"
                  allowfullscreen
                ></b-embed>
              </b-tab>
              <b-tab title="Mac Pro" title-link-class="tab" @click="saveTab(2)">
                <h3 class="tab-title mb-6 font-weight-bold text-black">
                  Mac Pro 2019 Teardown
                </h3>
                <p class="mx-auto mb-6 text-justify">
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
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/w6LTules0y0"
                  allowfullscreen
                ></b-embed>
              </b-tab>
              <b-tab title="MacBook Pro" title-link-class="tab" @click="saveTab(3)">
                <h3 class="tab-title mb-6 font-weight-bold text-black">
                  MacBook Pro 16" 2019 Teardown
                </h3>
                <p class="mx-auto mb-6 text-justify">
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
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/Mjb12GCKycw"
                  allowfullscreen
                ></b-embed>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'teardowns',
  data() {
    return {
      tabIndex: 0,
    };
  },
  mounted() {
    if (localStorage.tabIndex) this.tabIndex = Number(localStorage.tabIndex);
  },
  methods: {
    saveTab(tab) {
      localStorage.tabIndex = tab;
    },
  },
};
</script>
