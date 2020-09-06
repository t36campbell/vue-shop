<template>
  <div class="site-section bg-light" id="services-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h3 class="section-sub-title">Our Services</h3>
          <h2 class="section-title mb-3">We Offer Services</h2>
        </div>
      </div>
      <div class="card bg-white border-dark rounded-0">
        <div class="row no-gutters align-items-start">
          <div class="col-md-4">
            <img src="../assets/images/phone.jpg" alt="Image" class="card-img rounded-0" />
          </div>
          <div class="col-md-8 ml-auto product-title-wrap">
            <div class="card-body">
              <h3
                class="card-title text-black mb-4 font-weight-bold text-center"
              >Mobile Phone Repair</h3>
              <p
                class="card-text mx-4 text-justify"
                v-if="$mq === 'xs' || $mq === 'sm' || $mq === 'md'"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                nostrum natus excepturi fuga.
              </p>
              <p
                class="card-text mx-4 text-justify"
                v-if="$mq === 'lg' || $mq === 'xl'"
              >
                Et tempora id nostrum saepe amet doloribus deserunt totam officiis
                cupiditate asperiores quasi accusantium voluptatum dolorem quae
                sapiente voluptatem ratione odio iure blanditiis earum fuga
                molestiae alias dicta perferendis inventore!
              </p>
              <div class="col-12 text-center">
                <div class="mx-auto row justify-content-center">
                  <br />
                  <a
                    class="col-12 btn btn-black ml-1 rounded-0"
                    href="#schedule"
                    v-smooth-scroll
                  >Schedule an Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="card bg-light border-dark rounded-0">
        <div class="row no-gutters align-items-start">
          <div class="col-md-4">
            <img src="../assets/images/tablet.jpg" alt="Image" class="card-img rounded-0" />
          </div>
          <div class="col-md-8 ml-auto product-title-wrap">
            <div class="card-body">
              <h3 class="card-title text-black mb-4 font-weight-bold text-center">Tablet Repair</h3>
              <p
                class="card-text mx-4 text-justify"
                v-if="$mq === 'xs' || $mq === 'sm' || $mq === 'md'"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                nostrum natus excepturi fuga.
              </p>
              <p
                class="card-text mx-4 text-justify"
                v-if="$mq === 'lg' || $mq === 'xl'"
              >
                Et tempora id nostrum saepe amet doloribus deserunt totam officiis
                cupiditate asperiores quasi accusantium voluptatum dolorem quae
                sapiente voluptatem ratione odio iure blanditiis earum fuga
                molestiae alias dicta perferendis inventore!
              </p>
              <div class="col-12 text-center">
                <div class="mx-auto row justify-content-center">
                  <br />
                  <a
                    class="col-12 btn btn-black ml-1 rounded-0"
                    href="#schedule"
                    v-smooth-scroll
                  >Schedule an Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="card bg-light border-dark rounded-0">
        <div class="row no-gutters align-items-start">
          <div class="col-md-4">
            <img src="../assets/images/laptop.png" alt="Image" class="card-img rounded-0" />
          </div>
          <div class="col-md-8 ml-auto product-title-wrap">
            <div class="card-body">
              <h3 class="card-title text-black mb-4 font-weight-bold text-center">Laptop Repair</h3>
              <p
                class="card-text mx-4 text-justify"
                v-if="$mq === 'xs' || $mq === 'sm' || $mq === 'md'"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                nostrum natus excepturi fuga.
              </p>
              <p
                class="card-text mx-4 text-justify"
                v-if="$mq === 'lg' || $mq === 'xl'"
              >
                Et tempora id nostrum saepe amet doloribus deserunt totam officiis
                cupiditate asperiores quasi accusantium voluptatum dolorem quae
                sapiente voluptatem ratione odio iure blanditiis earum fuga
                molestiae alias dicta perferendis inventore!
              </p>
              <div class="col-12 text-center">
                <div class="mx-auto row justify-content-center">
                  <br />
                  <a
                    class="col-12 btn btn-black ml-1 rounded-0"
                    href="#schedule"
                    v-smooth-scroll
                  >Schedule an Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="card bg-light border-dark rounded-0">
        <div class="row no-gutters align-items-start">
          <div class="col-md-4">
            <img src="../assets/images/desktop.jpg" alt="Image" class="card-img rounded-0" />
          </div>
          <div class="col-md-8 ml-auto product-title-wrap">
            <div class="card-body">
              <h3 class="card-title text-black mb-4 font-weight-bold text-center">
                Computer Repair
              </h3>
              <p
                class="card-text mx-4 text-justify"
                v-if="$mq === 'xs' || $mq === 'sm' || $mq === 'md'"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                nostrum natus excepturi fuga.
              </p>
              <p
                class="card-text mx-4 text-justify"
                v-if="$mq === 'lg' || $mq === 'xl'"
              >
                Et tempora id nostrum saepe amet doloribus deserunt totam officiis
                cupiditate asperiores quasi accusantium voluptatum dolorem quae
                sapiente voluptatem ratione odio iure blanditiis earum fuga
                molestiae alias dicta perferendis inventore!
              </p>
              <div class="col-12 text-center">
                <div class="mx-auto row justify-content-center">
                  <br />
                  <a
                    class="col-12 btn btn-black ml-1 rounded-0"
                    href="#schedule"
                    v-smooth-scroll
                  >Schedule an Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="card bg-light border-dark rounded-0">
        <div class="row no-gutters align-items-start">
          <div class="col-md-4">
            <img src="../assets/images/pc.png" alt="Image" class="card-img rounded-0" />
          </div>
          <div class="col-md-8 ml-auto product-title-wrap">
            <div class="card-body">
              <h3 class="card-title text-black mb-4 font-weight-bold text-center">
                Custom PC Builds
              </h3>
              <p
                class="card-text mx-4 text-justify"
                v-if="$mq === 'xs' || $mq === 'sm' || $mq === 'md'"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                nostrum natus excepturi fuga.
              </p>
              <p
                class="card-text mx-4 text-justify"
                v-if="$mq === 'lg' || $mq === 'xl'"
              >
                Et tempora id nostrum saepe amet doloribus deserunt totam officiis
                cupiditate asperiores quasi accusantium voluptatum dolorem quae
                sapiente voluptatem ratione odio iure blanditiis earum fuga
                molestiae alias dicta perferendis inventore!
              </p>
              <div class="col-12 text-center">
                <div class="mx-auto row justify-content-center">
                  <br />
                  <a
                    class="col-12 btn btn-black ml-1 rounded-0"
                    href="#schedule"
                    v-smooth-scroll
                  >Schedule an Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="card bg-light border-dark rounded-0">
        <div class="row no-gutters align-items-start">
          <div class="col-md-4">
            <img src="../assets/images/server.jpg" alt="Image" class="card-img rounded-0" />
          </div>
          <div class="col-md-8 ml-auto product-title-wrap">
            <div class="card-body">
              <h3
                class="card-title text-black mb-4 font-weight-bold text-center"
              >Server Builds & Installs</h3>
              <p
                class="card-text mx-4 text-justify"
                v-if="$mq === 'xs' || $mq === 'sm' || $mq === 'md'"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                nostrum natus excepturi fuga.
              </p>
              <p
                class="card-text mx-4 text-justify"
                v-if="$mq === 'lg' || $mq === 'xl'"
              >
                Et tempora id nostrum saepe amet doloribus deserunt totam officiis
                cupiditate asperiores quasi accusantium voluptatum dolorem quae
                sapiente voluptatem ratione odio iure blanditiis earum fuga
                molestiae alias dicta perferendis inventore!
              </p>
              <div class="col-12 text-center">
                <div class="mx-auto row justify-content-center">
                  <br />
                  <a
                    class="col-12 btn btn-black ml-1 rounded-0"
                    href="#schedule"
                    v-smooth-scroll
                  >Schedule an Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'services',
};
</script>
