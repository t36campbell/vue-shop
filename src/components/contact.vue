<template>
  <div class="site-section bg-light" id="contact-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h3 class="section-sub-title">Contact Form</h3>
          <h2 class="section-title mb-3">Get In Touch</h2>
        </div>
        <div class="col-12">
          <h2 class="h4 text-black mb-5 text-center">Location & Hours</h2>
          <div class="row justify-content-center">
            <div class="col-md-6 col-sm-12">
              <div class="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.7230655754465!2d-82.4875402846048!3d40.39282997936799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8839cb5288c441cb%3A0xe990c0740358c806!2sENew%20Zone%20Computer%20Shop!5e0!3m2!1sen!2sus!4v1586365486553!5m2!1sen!2sus"
                  width="300"
                  height="300"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 text-justify">
              <br />
              <h6 class="text-black">Address</h6>
              <p>1234 Main St.</p>
              <p>Small-Town OH 45701</p>
              <h6 class="text-black">Hours</h6>
              <p>Monday - Friday</p>
              <p>9:00 AM - 5:30 PM</p>
              <h6 class="text-black">Phone</h6>
              <p>555.123.4567</p>
            </div>
          </div>
          <br />
          <b-form @submit="onSubmit" class="col-12" id="contact">
            <h2 class="h4 text-black mb-5 text-center">Schedule an Appointment</h2>
            <div class="row justify-content-center form-group">
              <div class="col-md-6 col-sm-12">
                <b-form-datepicker 
                  id="datepicker" 
                  class="mb-2" 
                  v-model="form.date" 
                  :min="min"
                  :state="false"
                ></b-form-datepicker>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="row form-group">
                  <b-form-group 
                    id="input-group-1" 
                    class="col-md-12 text-black"
                    label="First Name:" 
                    label-for="fname"
                  >
                    <b-form-input
                      id="fname"
                      class="col-md-12 form-control rounded-0"
                      v-model="form.fname"
                      :state="false"
                      required
                      placeholder="Enter Your First Name"
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="row form-group">
                  <b-form-group 
                    id="input-group-2" 
                    class="col-md-12 text-black"
                    label="Last Name:" 
                    label-for="lname"
                  >
                    <b-form-input
                      id="lname"
                      class="col-md-12 form-control rounded-0"
                      v-model="form.lname"
                      :state="false"
                      required
                      placeholder="Enter Your Last Name"
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="row form-group">
                  <b-form-group 
                    id="input-group-3" 
                    class="col-md-12 text-black"
                    label="Phone:" 
                    label-for="phone"
                  >
                    <b-form-input
                      id="phone"
                      class="col-md-12 form-control rounded-0"
                      v-model="form.phone"
                      :state="false"
                      required
                      placeholder="Enter Your Phone Number"
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="row form-group">
                  <b-form-group 
                    id="input-group-4" 
                    class="col-md-12 text-black"
                    label="Email:" 
                    label-for="email"
                  >
                    <b-form-input
                      id="email"
                      class="col-md-12 form-control rounded-0"
                      v-model="form.email"
                      type="email"
                      :state="false"
                      required
                      placeholder="Enter Your Email"
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="row form-group">
                  <b-form-group 
                    id="input-group-5" 
                    class="col-md-12 text-black"
                    label="Device Name:" 
                    label-for="device"
                  >
                    <b-form-input
                      id="device"
                      class="col-md-12 form-control rounded-0"
                      v-model="form.device"
                      :state="false"
                      required
                      placeholder="Enter the Name of Your Device"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <b-form-group class="text-black">
                  <div class="col-md-12">
                    <h6>Select a Service</h6>
                    <br />
                    <b-form-radio
                      v-model="selected"
                      name="selected-service"
                      value="A"
                      required
                    >Cell Phone Repair</b-form-radio>
                    <br />
                    <b-form-radio v-model="selected" name="selected-service" value="B">Tablet Repair</b-form-radio>
                    <br />
                    <b-form-radio v-model="selected" name="selected-service" value="C">Laptop Repair</b-form-radio>
                    <br />
                    <b-form-radio v-model="selected" name="selected-service" value="D">Computer Repair</b-form-radio>
                    <br />
                    <b-form-radio v-model="selected" name="selected-service" value="E">Custom PC Builds</b-form-radio>
                    <br />
                    <b-form-radio
                      v-model="selected"
                      name="selected-service"
                      value="F"
                    >Server Builds & Installs</b-form-radio>
                    <br />
                  </div>
                </b-form-group>
              </div>
              <div class="col-md-12 text-center">    
                <b-button type="submit" variant="primary">Submit</b-button>
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate"; 
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: 'contact',
  data() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      // 15th two months prior
      const minDate = new Date(today)
      minDate.setMonth(minDate.getMonth() - 2)
      minDate.setDate(15)

      return {
        min: minDate,
        form: {
          date: null,
          fname: null,
          lname: null,
          phone: null,
          email: null,
          device: null,
          selected: null
        }
      }
  },   
  validations: {
    form: {
      date: {
        
      },
      fname: {
        
      },
      lname: {
        
      },
      phone: {
        
      },
      email: {
        
      },
      device: {
        
      },
      selected: {
        
      }
    }
  }, 
  methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
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
.text-black {
  color: var(--gray-5);
}
.form-control {
  height: 43px;
  font-family: Muli, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
}
.form-control:active,
.form-control:focus {
  border-color: var(--green);
}
.form-control:active,
.form-control:focus,
.form-control:hover {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.site-section {
  padding: 2.5em 0;
}
@media (min-width: 768px) {
  .site-section {
    padding: 5em 0;
  }
}
.section-sub-title {
  font-size: 13px;
  color: var(--gray-4);
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
.map-container {
  position: relative;
  padding-bottom: 90%;
  padding-top: 35px;
  height: 0;
  overflow: hidden;
}
.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>