<template>
  <div class="site-section bg-light" id="testimonials-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12">
          <h3 class="section-sub-title text-center">Testimonials</h3>
          <h2 class="section-title text-center mb-3">Customer Reviews</h2>
          <b-card-group deck>
            <b-card
              border-variant="dark"
              bg-variant="light"
              class="overflow-hidden card-width"
              no-body
            >
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img-lazy
                    src="https://picsum.photos/400/400/?image=59"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img-lazy>
                </b-col>
                <b-col md="6">
                  <b-card-body body-class="text-center" title="Horizontal Card">
                    <b-form-rating
                      id="r1"
                      variant="warning"
                      v-model="r1"
                      class="bg-transparent"
                      no-border
                      readonly
                    ></b-form-rating>
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
            <b-card
              border-variant="dark"
              bg-variant="light"
              class="overflow-hidden card-width"
              no-body
            >
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img-lazy
                    src="https://picsum.photos/400/400/?image=3"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img-lazy>
                </b-col>
                <b-col md="6">
                  <b-card-body body-class="text-center" title="Horizontal Card">
                    <b-form-rating
                      id="r2"
                      variant="warning"
                      v-model="r2"
                      class="bg-transparent"
                      no-border
                      readonly
                    ></b-form-rating>
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-card-group>
          <br />
          <b-card-group deck>
            <b-card
              border-variant="dark"
              bg-variant="light"
              class="overflow-hidden card-width"
              no-body
            >
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img-lazy
                    src="https://picsum.photos/400/400/?image=36"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img-lazy>
                </b-col>
                <b-col md="6">
                  <b-card-body body-class="text-center" title="Horizontal Card">
                    <b-form-rating
                      id="r3"
                      variant="warning"
                      v-model="r3"
                      class="bg-transparent"
                      no-border
                      readonly
                    ></b-form-rating>
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
            <b-card
              border-variant="dark"
              bg-variant="light"
              class="overflow-hidden card-width"
              no-body
            >
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img-lazy
                    src="https://picsum.photos/400/400/?image=18"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img-lazy>
                </b-col>
                <b-col md="6">
                  <b-card-body body-class="text-center" title="Horizontal Card">
                    <b-form-rating
                      id="r4"
                      variant="warning"
                      v-model="r4"
                      class="bg-transparent"
                      no-border
                      readonly
                    ></b-form-rating>
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-card-group>
          <br />
          <b-card-group deck>
            <b-card
              border-variant="dark"
              bg-variant="light"
              class="overflow-hidden card-width"
              no-body
            >
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img-lazy
                    src="https://picsum.photos/400/400/?image=81"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img-lazy>
                </b-col>
                <b-col md="6">
                  <b-card-body body-class="text-center" title="Horizontal Card">
                    <b-form-rating
                      id="r5"
                      variant="warning"
                      v-model="r5"
                      class="bg-transparent"
                      no-border
                      readonly
                    ></b-form-rating>
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
            <b-card
              border-variant="dark"
              bg-variant="light"
              class="overflow-hidden card-width"
              no-body
            >
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img-lazy
                    src="https://picsum.photos/400/400/?image=72"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img-lazy>
                </b-col>
                <b-col md="6">
                  <b-card-body body-class="text-center" title="Horizontal Card">
                    <b-form-rating
                      id="r6"
                      variant="warning"
                      v-model="r6"
                      class="bg-transparent"
                      no-border
                      readonly
                    ></b-form-rating>
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-card-group>
          <br />
          <b-button block v-b-toggle.collapse-form variant="outline-dark">Share your Story</b-button>
          <b-collapse id="collapse-form">
            <b-card>
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                  class="text-dark"
                  label="Name"
                  label-for="name"
                  invalid-feedback="Name is required"
                >
                  <b-form-input id="name" v-model="name" required></b-form-input>
                </b-form-group>
                <b-form-group
                  class="text-dark"
                  label="Rating"
                  label-for="rating"
                  invalid-feedback="Rating is required"
                >
                  <b-form-rating id="rating" v-model="rating" variant="warning" class="mb-2"></b-form-rating>
                </b-form-group>
                <b-form-group
                  class="text-dark"
                  label="Comment"
                  label-for="comment"
                  invalid-feedback="Comment is required"
                >
                  <b-form-textarea
                    id="textarea-state"
                    v-model="comment"
                    :state="comment.length >= 10"
                    placeholder="Enter at least 10 characters"
                    rows="3"
                    required
                  ></b-form-textarea>
                </b-form-group>
                <b-form-group
                  class="text-dark"
                  label="Upload an Image"
                  label-for="image"
                  invalid-feedback="Image is required"
                >
                  <b-form-file
                    id="image"
                    ref="fileInput"
                    v-model="image"
                    accept="image/*"
                    :state="Boolean(image)"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
                  <div class="text-dark mt-3">Selected file: {{ image ? image.name : '' }}</div>
                </b-form-group>
              </form>
            </b-card>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'testimonials',
  data() {
    return {
      image: null,
      comment: '',
      name: '',
      rating: '',
      r1: 5,
      r2: 4,
      r3: 5,
      r4: 3,
      r5: 5,
      r6: 4,
    }
  },
  methods: {
    
  }
}
</script>

<style>
.card-width {
  max-width: 50%
}
@media (max-width: 767px) {
  .card-width{
    max-width: 100%
  }
}
</style>