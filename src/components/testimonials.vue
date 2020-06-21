<template>
  <div class="site-section bg-light" id="testimonials-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12">
          <h3 class="section-sub-title text-center">Testimonials</h3>
          <h2 class="section-title text-center mb-3">Customer Reviews</h2>
          <br />
          <b-card-group deck>
            <b-card
              border-variant="dark"
              bg-variant="light"
              class="overflow-hidden card-width rounded-0"
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
                  <b-card-body body-class="text-center" title="John Doe">
                    <b-form-rating
                      id="r1"
                      variant="warning"
                      v-model="r1"
                      class="bg-transparent"
                      no-border
                      readonly
                      show-value
                      show-value-max
                    ></b-form-rating>
                    <b-card-text class="text-justify">
                      <i>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                        nostrum natus excepturi fuga."
                      </i>
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
            <b-card
              border-variant="dark"
              bg-variant="light"
              class="overflow-hidden card-width rounded-0"
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
                  <b-card-body body-class="text-center" title="Stan Smith">
                    <b-form-rating
                      id="r2"
                      variant="warning"
                      v-model="r2"
                      class="bg-transparent"
                      no-border
                      readonly
                      show-value
                      show-value-max
                    ></b-form-rating>
                    <b-card-text class="text-justify">
                      <i>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                        nostrum natus excepturi fuga."
                      </i>
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
              class="overflow-hidden card-width rounded-0"
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
                  <b-card-body body-class="text-center" title="Bob Belcher">
                    <b-form-rating
                      id="r3"
                      variant="warning"
                      v-model="r3"
                      class="bg-transparent"
                      no-border
                      readonly
                      show-value
                      show-value-max
                    ></b-form-rating>
                    <b-card-text class="text-justify">
                      <i>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                        nostrum natus excepturi fuga."
                      </i>
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
            <b-card
              border-variant="dark"
              bg-variant="light"
              class="overflow-hidden card-width rounded-0"
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
                  <b-card-body body-class="text-center" title="Jane Doe">
                    <b-form-rating
                      id="r4"
                      variant="warning"
                      v-model="r4"
                      class="bg-transparent"
                      no-border
                      readonly
                      show-value
                      show-value-max
                    ></b-form-rating>
                    <b-card-text class="text-justify">
                      <i>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                        nostrum natus excepturi fuga."
                      </i>
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-card-group>
          <br />
          <div class="col-12 text-center mb-3">
            <div class="mx-auto row form-group justify-content-center">
              <b-button
                block
                v-b-toggle.collapse-form
                class="btn btn-black btn-outline-black mx-0 rounded-0"
              >Share your Story</b-button>
            </div>
          </div>
          <b-collapse id="collapse-form" class="mx-3">
            <form ref="form" @submit.stop.prevent="onSubmit">
              <b-form-group class="text-dark" label="First & Last Name:" label-for="name">
                <b-form-input
                  id="name"
                  class="form-control rounded-0"
                  v-model="$v.form.name.$model"
                  :state="validateState('name')"
                  placeholder="Enter your name"
                ></b-form-input>
                <b-form-invalid-feedback>This is a required field.</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group class="text-dark" label="Rate your Experience:" label-for="rating">
                <b-form-rating
                  id="rating"
                  class="form-control rounded-0"
                  v-model="$v.form.rating.$model"
                  :state="validateState('rating')"
                  variant="warning"
                  show-value
                  show-value-max
                ></b-form-rating>
                <b-form-invalid-feedback>This is a required field.</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group class="text-dark" label="Upload an Image:" label-for="image">
                <b-form-file
                  id="image"
                  class="rounded-0"
                  v-model="$v.form.image.$model"
                  accept="image/*, image/heic"
                  :state="validateState('image')"
                  placeholder="Choose an image or drop it here..."
                  drop-placeholder="Drop image here..."
                ></b-form-file>
                <b-form-invalid-feedback>This is a required field.</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group class="text-dark" label="Describe your Experience:" label-for="comment">
                <b-form-textarea
                  id="textarea-state"
                  class="form-control rounded-0"
                  v-model="$v.form.comment.$model"
                  :state="validateState('comment')"
                  placeholder="Enter a description of your expeience"
                  rows="3"
                ></b-form-textarea>
                <b-form-invalid-feedback>This is a required field.</b-form-invalid-feedback>
              </b-form-group>
              <div class="col-md-12 text-center">
                <div class="mx-auto row form-group justify-content-center">
                  <b-button
                    class="col-md-3 btn btn-black btn-black mx-1 rounded-0"
                    @click="saveReview"
                  >Save for Later</b-button>
                  <br />
                  <b-button
                    class="col-md-3 btn btn-black btn-black mx-1 rounded-0"
                    type="submit"
                  >Submit</b-button>
                </div>
              </div>
            </form>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minValue } from 'vuelidate/lib/validators'
export default {
  name: 'testimonials',
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: null,
        rating: 5,
        image: null,
        comment: null
      },
      r1: 5,
      r2: 4,
      r3: 3,
      r4: 5
    }
  },
  validations: {
    form: {
      name: {
        required
      },
      rating: {
        required
      },
      image: {
        required
      },
      comment: {
        required
      }
    }
  },
  mounted() {
    if (localStorage.name) this.form.name = localStorage.name
    if (localStorage.rating) this.form.rating = localStorage.rating
    if (localStorage.comment) this.form.comment = localStorage.comment
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    },
    onSubmit(evt) {
      evt.preventDefault()
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      alert('Thank you for sharing your experience with us!')
    },
    saveReview() {
      if (this.form.name) localStorage.name = this.form.name
      if (this.form.rating) localStorage.rating = this.form.rating
      if (this.form.comment) localStorage.comment = this.form.comment
      alert('Your information will be here when you come back')
    }
  }
}
</script>

<style>
.card-width {
  max-width: 50%;
}
@media (max-width: 767px) {
  .card-width {
    max-width: 100%;
  }
}
</style>