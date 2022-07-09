<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Buddhika</strong>, a game developer, living in Sri Lanka.<br/>
        I spend my days making games for a local game dev company.
      </div>

      <div style="margin-top: 20px;">I make <router-link to="/game-projects">Casual Mobile Games</router-link> and <router-link to="/music-games">Music Games</router-link> using Pixi.Js. 
      Also you can see some <router-link to="/leisure-study">personal Unity games and projects</router-link> that I have created.</div>

    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Buddhika" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}

</style>