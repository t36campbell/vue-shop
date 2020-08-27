<template>
  <div class="site-section" id="products-section">
    <div class="container">
      <div class="row mb-5 justify-content-center">
        <div class="col-md-6 text-center">
          <h3 class="section-sub-title">Popular Products</h3>
          <h2 class="section-title mb-3">Our Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
            consequatur laboriosam ipsam.
          </p>
        </div>
      </div>
      <b-card-group deck>
        <div class="card bg-white border-dark rounded-0">
          <img src="../assets/images/imac.jpg" alt="Image" class="card-img rounded-0" />
          <div class="card-body">
            <h3 class="card-title text-black mb-4 font-weight-bold text-center">Apple iMac</h3>
            <p class="card-text mx-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
              nostrum natus excepturi fuga.
            </p>
            <div class="col-12 text-center">
              <div class="mx-auto row form-group justify-content-center">
                <br />
                <a
                  class="col-12 btn btn-black ml-1 rounded-0"
                  href="#schedule"
                  v-smooth-scroll
                >View Item</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-white border-dark rounded-0">
          <img src="../assets/images/ipads.jpg" alt="Image" class="card-img rounded-0" />
          <div class="card-body">
            <h3 class="card-title text-black mb-4 font-weight-bold text-center">Apple iPads</h3>
            <p class="card-text mx-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
              nostrum natus excepturi fuga.
            </p>
            <div class="col-12 text-center">
              <div class="mx-auto row form-group justify-content-center">
                <br />
                <a
                  class="col-12 btn btn-black ml-1 rounded-0"
                  href="#schedule"
                  v-smooth-scroll
                >View Item</a>
              </div>
            </div>
          </div>
        </div>
      </b-card-group>
      <br />
      <b-card-group deck>
        <div class="card bg-white border-dark rounded-0">
          <img src="../assets/images/iphone.jpg" alt="Image" class="card-img rounded-0" />
          <div class="card-body">
            <h3 class="card-title text-black mb-4 font-weight-bold text-center">Apple iPhone 6</h3>
            <p class="card-text mx-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
              nostrum natus excepturi fuga.
            </p>
            <div class="col-12 text-center">
              <div class="mx-auto row form-group justify-content-center">
                <br />
                <a
                  class="col-12 btn btn-black ml-1 rounded-0"
                  href="#schedule"
                  v-smooth-scroll
                >View Item</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-white border-dark rounded-0">
          <img src="../assets/images/ipads-2.jpg" alt="Image" class="card-img rounded-0" />
          <div class="card-body">
            <h3 class="card-title text-black mb-4 font-weight-bold text-center">Apple iPads</h3>
            <p class="card-text mx-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
              nostrum natus excepturi fuga.
            </p>
            <div class="col-12 text-center">
              <div class="mx-auto row form-group justify-content-center">
                <br />
                <a
                  class="col-12 btn btn-black ml-1 rounded-0"
                  href="#schedule"
                  v-smooth-scroll
                >View Item</a>
              </div>
            </div>
          </div>
        </div>
      </b-card-group>
      <br />
      <b-card-group deck>
        <div class="card bg-white border-dark rounded-0">
          <img src="../assets/images/macbook.jpg" alt="Image" class="card-img rounded-0" />
          <div class="card-body">
            <h3 class="card-title text-black mb-4 font-weight-bold text-center">Apple MacBook Pro</h3>
            <p class="card-text mx-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
              nostrum natus excepturi fuga.
            </p>
            <div class="col-12 text-center">
              <div class="mx-auto row form-group justify-content-center">
                <br />
                <a
                  class="col-12 btn btn-black ml-1 rounded-0"
                  href="#schedule"
                  v-smooth-scroll
                >View Item</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-white border-dark rounded-0">
          <img src="../assets/images/watch.jpg" alt="Image" class="card-img rounded-0" />
          <div class="card-body">
            <h3 class="card-title text-black mb-4 font-weight-bold text-center">Apple Watch Series 3</h3>
            <p class="card-text mx-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
              nostrum natus excepturi fuga.
            </p>
            <div class="col-12 text-center">
              <div class="mx-auto row form-group justify-content-center">
                <br />
                <a
                  class="col-12 btn btn-black ml-1 rounded-0"
                  href="#schedule"
                  v-smooth-scroll
                >View Item</a>
              </div>
            </div>
          </div>
        </div>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'products'
}
</script>