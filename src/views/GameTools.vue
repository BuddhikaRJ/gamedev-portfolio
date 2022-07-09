<template>
  <div>
    <h1>Game Dev Tools</h1>

    <div style="margin-bottom: 30px;">
      Several tools that I made for game developers to increase development speed and game quality at <a target="_blank" href="https://app.imigames.io">IMIGames</a> platform.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      Games made with these templates and tools are deployed in <a target="_blank" href="https://app.imigames.io">imigames.io</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameToolProjectsData.ts";

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
