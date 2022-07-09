<template>
  <div>
    <h1>Casual Games</h1>

    <div style="margin-bottom: 30px;">
      Casual mobile games that I made for <a target="_blank" href="https://app.imigames.io">IMIGames</a> platform. 
      <br>I contributed in programming each game from scratch, managing the development of the project with talented game artists and sound engineers, and templating common game behaviors to speed up the development of new games.
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
import gameProjectsData from "@/data/GameProjectsData.ts";

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
