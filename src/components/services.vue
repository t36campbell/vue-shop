<template>
  <div class="site-section">
    <b-container fluid>
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h3 class="section-sub-title">Our Services</h3>
          <h2 class="section-title mb-3">We Offer Services</h2>
        </div>
      </div>
      <b-card no-body class="border-dark">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img src="../assets/images/phone.jpg" alt="Image" class="rounded-0">
            </b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body
              title="Mobile Phone Repair"
              class="card-title text-black mb-4 text-center"
            >
              <b-card-text
                class="card-text mx-4 text-justify"
                v-if="$mq === 'xs' || $mq === 'sm' || $mq === 'md'"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae nostrum natus excepturi fuga.
              </b-card-text>
              <b-card-text
                class="card-text mx-4 text-justify"
                v-if="$mq === 'lg' || $mq === 'xl'"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                risus sed vulputate odio ut enim. Sed tempus urna et pharetra
                pharetra massa massa. Nisl nisi scelerisque eu ultrices vitae
                auctor. Eu consequat ac felis donec et odio. Viverra maecenas
                accumsan lacus vel facilisis volutpat est. Id cursus metus
                aliquam eleifend mi in. Nunc mattis enim ut tellus elementum
                sagittis. Mauris ultrices eros in cursus turpis massa.
              </b-card-text>
              <b-button
                class="col-md-12 btn btn-dark mt-8 rounded-0"
                v-on:click="route('/contact')"
                >View Item</b-button
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <br />
      <b-card no-body class="border-dark">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img src="../assets/images/tablet.jpg" alt="Image" class="rounded-0">
            </b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body
              title="Tablet Repair"
              class="card-title text-black mb-4 text-center"
            >
              <b-card-text
                class="card-text mx-4 text-justify"
                v-if="$mq === 'xs' || $mq === 'sm' || $mq === 'md'"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae nostrum natus excepturi fuga.
              </b-card-text>
              <b-card-text
                class="card-text mx-4 text-justify"
                v-if="$mq === 'lg' || $mq === 'xl'"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                risus sed vulputate odio ut enim. Sed tempus urna et pharetra
                pharetra massa massa. Nisl nisi scelerisque eu ultrices vitae
                auctor. Eu consequat ac felis donec et odio. Viverra maecenas
                accumsan lacus vel facilisis volutpat est. Id cursus metus
                aliquam eleifend mi in. Nunc mattis enim ut tellus elementum
                sagittis. Mauris ultrices eros in cursus turpis massa.
              </b-card-text>
              <b-button
                class="col-md-12 btn btn-dark mt-8 rounded-0"
                v-on:click="route('/contact')"
                >View Item</b-button
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <br />
      <b-card no-body class="border-dark">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img src="../assets/images/laptop.png" alt="Image" class="rounded-0">
            </b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body
              title="Laptop Repair"
              class="card-title text-black mb-4 text-center"
            >
              <b-card-text
                class="card-text mx-4 text-justify"
                v-if="$mq === 'xs' || $mq === 'sm' || $mq === 'md'"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae nostrum natus excepturi fuga.
              </b-card-text>
              <b-card-text
                class="card-text mx-4 text-justify"
                v-if="$mq === 'lg' || $mq === 'xl'"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                risus sed vulputate odio ut enim. Sed tempus urna et pharetra
                pharetra massa massa. Nisl nisi scelerisque eu ultrices vitae
                auctor. Eu consequat ac felis donec et odio. Viverra maecenas
                accumsan lacus vel facilisis volutpat est. Id cursus metus
                aliquam eleifend mi in. Nunc mattis enim ut tellus elementum
                sagittis. Mauris ultrices eros in cursus turpis massa.
              </b-card-text>
              <b-button
                class="col-md-12 btn btn-dark mt-8 rounded-0"
                v-on:click="route('/contact')"
                >View Item</b-button
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <br />
      <b-card no-body class="border-dark">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img src="../assets/images/desktop.jpg" alt="Image" class="rounded-0">
            </b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body
              title="Computer Repair"
              class="card-title text-black mb-4 text-center"
            >
              <b-card-text
                class="card-text mx-4 text-justify"
                v-if="$mq === 'xs' || $mq === 'sm' || $mq === 'md'"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae nostrum natus excepturi fuga.
              </b-card-text>
              <b-card-text
                class="card-text mx-4 text-justify"
                v-if="$mq === 'lg' || $mq === 'xl'"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                risus sed vulputate odio ut enim. Sed tempus urna et pharetra
                pharetra massa massa. Nisl nisi scelerisque eu ultrices vitae
                auctor. Eu consequat ac felis donec et odio. Viverra maecenas
                accumsan lacus vel facilisis volutpat est. Id cursus metus
                aliquam eleifend mi in. Nunc mattis enim ut tellus elementum
                sagittis. Mauris ultrices eros in cursus turpis massa.
              </b-card-text>
              <b-button
                class="col-md-12 btn btn-dark mt-8 rounded-0"
                v-on:click="route('/contact')"
                >View Item</b-button
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <br />
      <b-card no-body class="border-dark">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img src="../assets/images/pc.png" alt="Image" class="rounded-0">
            </b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body
              title="Custom PC Builds"
              class="card-title text-black mb-4 text-center"
            >
              <b-card-text
                class="card-text mx-4 text-justify"
                v-if="$mq === 'xs' || $mq === 'sm' || $mq === 'md'"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae nostrum natus excepturi fuga.
              </b-card-text>
              <b-card-text
                class="card-text mx-4 text-justify"
                v-if="$mq === 'lg' || $mq === 'xl'"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                risus sed vulputate odio ut enim. Sed tempus urna et pharetra
                pharetra massa massa. Nisl nisi scelerisque eu ultrices vitae
                auctor. Eu consequat ac felis donec et odio. Viverra maecenas
                accumsan lacus vel facilisis volutpat est. Id cursus metus
                aliquam eleifend mi in. Nunc mattis enim ut tellus elementum
                sagittis. Mauris ultrices eros in cursus turpis massa.
              </b-card-text>
              <b-button
                class="col-md-12 btn btn-dark mt-8 rounded-0"
                v-on:click="route('/contact')"
                >View Item</b-button
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <br />
      <b-card no-body class="border-dark">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img src="../assets/images/server.jpg" alt="Image" class="rounded-0">
            </b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body
              title="Server Builds & Installs"
              class="card-title text-black mb-4 text-center"
            >
              <b-card-text
                class="card-text mx-4 text-justify"
                v-if="$mq === 'xs' || $mq === 'sm' || $mq === 'md'"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae nostrum natus excepturi fuga.
              </b-card-text>
              <b-card-text
                class="card-text mx-4 text-justify"
                v-if="$mq === 'lg' || $mq === 'xl'"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                risus sed vulputate odio ut enim. Sed tempus urna et pharetra
                pharetra massa massa. Nisl nisi scelerisque eu ultrices vitae
                auctor. Eu consequat ac felis donec et odio. Viverra maecenas
                accumsan lacus vel facilisis volutpat est. Id cursus metus
                aliquam eleifend mi in. Nunc mattis enim ut tellus elementum
                sagittis. Mauris ultrices eros in cursus turpis massa.
              </b-card-text>
              <b-button
                class="col-md-12 btn btn-dark mt-8 rounded-0"
                v-on:click="route('/contact')"
                >View Item</b-button
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'services',
};
</script>
