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
                      <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                      nostrum natus excepturi fuga."</i>
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
                      <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                      nostrum natus excepturi fuga."</i>
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
                      <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                      nostrum natus excepturi fuga."</i>
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
                      <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                      nostrum natus excepturi fuga."</i>
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-card-group>
          <br />
          <b-button block v-b-toggle.collapse-form variant="outline-dark">Share your Story</b-button>
          <br />
          <b-collapse id="collapse-form">
            <form ref="form" @submit.stop.prevent="onSubmit">
              <b-form-group
                class="text-dark"
                label="First & Last Name:"
                label-for="name"
              >
                <b-form-input 
                  id="name" 
                  v-model="$v.form.name.$model"
                  :state="validateState('name')"
                  placeholder="Enter your name"
                ></b-form-input>
                <b-form-invalid-feedback>This is a required field.</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group
                class="text-dark"
                label="Rate your Experience:"
                label-for="rating"
              >
                <b-form-rating 
                  id="rating" 
                  v-model="$v.form.rating.$model" 
                  :state="validateState('rating')"
                  variant="warning"
                  show-value
                  show-value-max
                ></b-form-rating>
                <b-form-invalid-feedback>This is a required field.</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group
                class="text-dark"
                label="Upload an Image:"
                label-for="image"
              >
                <b-form-file
                  id="image"
                  v-model="$v.form.image.$model"
                  accept="image/*, image/heic"
                  :state="validateState('image')"
                  placeholder="Choose an image or drop it here..."
                  drop-placeholder="Drop image here..."
                ></b-form-file>
                <b-form-invalid-feedback>This is a required field.</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group
                class="text-dark"
                label="Describe your Experience:"
                label-for="comment"
              >
                <b-form-textarea
                  id="textarea-state"
                  v-model="$v.form.comment.$model"
                  :state="validateState('comment')"
                  placeholder="Enter a description of your expeience"
                  rows="3"
                ></b-form-textarea>
                <b-form-invalid-feedback>This is a required field.</b-form-invalid-feedback>
              </b-form-group>
              <div class="col-md-12 text-center">
                <b-button type="submit" variant="dark">Submit</b-button>
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
import { required, email, minValue} from 'vuelidate/lib/validators'
export default {
  name: 'testimonials',
  mixins: [validationMixin],
  data() {
    return {
      form: {   
        name: null,
        rating: 5,
        comment: null,
        image: null
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
      comment: {
        required
      },
      image: {
        required
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      alert("Thank you for sharing your experience with us!")
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