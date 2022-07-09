<template>
  <div>
    <h1>Music Games</h1>

    <div style="margin-bottom: 30px;">
      Music Games that I made for <a target="_blank" href="https://app.imigames.io">IMIGames</a> platform. 
      <br>The released games mimic the mechanics from different popular rhythm games like Guitar Hero, and Magic Tiles 3.
      <br>The initial game project got further developed into a template for future song releases.
      <br>I contributed in research on existing music games, developing the core game from scratch and developing the music game template.
      
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      There is more to see on <a target="_blank" href="https://app.imigames.io">imigames.io</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/MusicGameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
