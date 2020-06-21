<template>
  <div class="site-section bg-light" id="teardowns-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h3 class="section-sub-title">Popular Teardowns</h3>
          <h2 class="section-title mb-3">Device Teardowns</h2>
          <br />
          <br />
          <div class="card bg-white border-dark rounded-0">
            <b-tabs v-model="tabIndex" content-class="mt-3" nav-class="tab" active-nav-item-class="bg-white rounded-0" fill>
              <b-tab title="iPhone" title-link-class="tab" @click="saveTab(0)">
                <h3 class="tab-title">iPhone 11 Pro Teardown</h3>
                <p class="mx-5 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis risus sed vulputate odio ut enim. Sed tempus urna et pharetra pharetra massa massa.
                  Nisl nisi scelerisque eu ultrices vitae auctor. Eu consequat ac felis donec et odio. Viverra maecenas accumsan lacus vel facilisis volutpat est.
                  Id cursus metus aliquam eleifend mi in. Nunc mattis enim ut tellus elementum sagittis. Mauris ultrices eros in cursus turpis massa.
                </p>
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/46uVhRFDaoc"
                  allowfullscreen
                ></b-embed>
              </b-tab>
              <b-tab title="iPad Pro" title-link-class="tab" @click="saveTab(1)">
                <h3 class="tab-title">iPad Pro 12.9" 4th Gen Teardown</h3>
                <p class="mx-5 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis risus sed vulputate odio ut enim. Sed tempus urna et pharetra pharetra massa massa.
                  Nisl nisi scelerisque eu ultrices vitae auctor. Eu consequat ac felis donec et odio. Viverra maecenas accumsan lacus vel facilisis volutpat est.
                  Id cursus metus aliquam eleifend mi in. Nunc mattis enim ut tellus elementum sagittis. Mauris ultrices eros in cursus turpis massa.
                </p>
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/xz6CExnGw9w"
                  allowfullscreen
                ></b-embed>
              </b-tab>
              <b-tab title="Mac Pro" title-link-class="tab" @click="saveTab(2)">
                <h3 class="tab-title">Mac Pro 2019 Teardown</h3>
                <p class="mx-5 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis risus sed vulputate odio ut enim. Sed tempus urna et pharetra pharetra massa massa.
                  Nisl nisi scelerisque eu ultrices vitae auctor. Eu consequat ac felis donec et odio. Viverra maecenas accumsan lacus vel facilisis volutpat est.
                  Id cursus metus aliquam eleifend mi in. Nunc mattis enim ut tellus elementum sagittis. Mauris ultrices eros in cursus turpis massa.
                </p>
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/w6LTules0y0"
                  allowfullscreen
                ></b-embed>
              </b-tab>
              <b-tab title="MacBook Pro" title-link-class="tab" @click="saveTab(3)">
                <h3 class="tab-title">MacBook Pro 16" 2019 Teardown</h3>
                <p class="mx-5 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis risus sed vulputate odio ut enim. Sed tempus urna et pharetra pharetra massa massa.
                  Nisl nisi scelerisque eu ultrices vitae auctor. Eu consequat ac felis donec et odio. Viverra maecenas accumsan lacus vel facilisis volutpat est.
                  Id cursus metus aliquam eleifend mi in. Nunc mattis enim ut tellus elementum sagittis. Mauris ultrices eros in cursus turpis massa.
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'teardowns',
  data() {
    return {
      tabIndex: 0,
    }  
  },
  mounted() {
    if (localStorage.tabIndex) this.tabIndex = Number(localStorage.tabIndex)
  },
  methods: {
    saveTab(tab) {
      localStorage.tabIndex = tab
    }
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
.tab-title {
  color: var(--gray-5);
  font-weight: 700;
}
.tab {
  background-color: var(--gray-2);
  color: var(--gray-5);
  text-decoration: none;
  border-radius: 0;
}
.tab:hover {
  color: black;
  text-decoration: none;
  border-radius: 0;
}
</style>