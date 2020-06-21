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

<style>
:root {
  --white: #fff;
  --gray-1: #f6f6f6;
  --gray-2: #bfbfbf;
  --gray-3: #8c8c8c;
  --gray-4: #5b5b5b;
  --gray-5: #2f2f2f;
  --green: #005a34;
}
.site-section {
  padding: 2.5em 0;
  background: var(--white);
}
@media (min-width: 768px) {
  .site-section {
    padding: 5em 0;
  }
}
@media (max-width: 991.98px) {
  .img-md-fluid {
    max-width: 100%;
  }
}
.section-sub-title {
  font-size: 13px;
  color: var(--gray-2);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
}
.section-title {
  color: var(--gray-5);
  font-size: 40px;
  font-weight: 900;
}
@media (max-width: 991.98px) {
  .section-title {
    font-size: 30px;
  }
}
.product-item {
  text-align: center;
}
.product-item figure {
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;
}
.product-item figure:before {
  z-index: 2;
  -webkit-transition: 0.4s all ease;
  -o-transition: 0.4s all ease;
  transition: 0.4s all ease;
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
  position: absolute;
  content: '';
  border: 4px solid var(--gray-1);
  left: 20px;
  right: 20px;
  top: 20px;
  bottom: 20px;
  opacity: 0;
  visibility: hidden;
}
.product-item figure img {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.product-item h3 {
  font-size: 18px;
}
.product-item h3 a {
  color: var(--gray-5);
}
.product-item h3 a:hover {
  color: var(--gray-1);
}
.product-item p {
  line-height: 1.4;
  font-size: 13px;
}
.product-item:hover figure:before {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.product-item:hover figure img {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>