<template>
  <div class="site-blocks-cover overlay" id="tutorials-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 text-center pull-down">
          <h3 class="tut-section-sub-title">Instructional Videos</h3>
          <h2 class="tut-section-title mb-3">Repair Tutorials</h2>
        </div>
        <div class="col-12"> 
            <b-embed
                type="iframe"
                aspect="16by9"
                src= "https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                allowfullscreen
            ></b-embed>
        </div>                
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tutorials',
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
.tut-section-sub-title {
  font-size: 13px;
  color: var(--gray-5);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
}
.tut-section-title {
  color: var(--gray-1);
  font-size: 40px;
  font-weight: 900;
}
.pull-down {
    margin-top: 5vh;
}
</style>