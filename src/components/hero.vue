<template>
  <div
    class="site-blocks-cover overlay"
  >
    <navbar />
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-12">
          <div class="row mb-4">
            <div class="col-md-7">
              <h1>Bob's Electronic Repair</h1>
              <p class="mb-5 lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam assumenda ea quo cupiditate facere deleniti fuga
                officia.
              </p>
              <div>
                <a
                  href="#contact-section"
                  class="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block"
                  >Schedule an Appointment</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from './navbar'
export default {
  name: 'hero',
  components: {
    navbar
  }
}
</script>
