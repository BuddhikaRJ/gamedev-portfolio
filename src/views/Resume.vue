<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Buddhika</strong>, a Game Developer currently working in a Sri Lankan Game Dev company.
      <br />
      <br />Right ow I'm working as a lead developer with a team of game devs to deliver new games to our imi games platform.
      <br />
      <br />

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Buddhika Jayawickrama - resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download resume as PDF</a>
        
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Buddhika" />
    </div>

    <div style="clear:both"></div>


  </div>
</template>

<script lang="ts">
import Vue from "vue";


</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>