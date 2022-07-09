<template>
  <div>
    <h1>Self Studies</h1>

    <div style="margin-bottom: 30px;">
      Several other Unity projects that I do to improve my knowledge.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import leisureProjectsData from "@/data/LeisureProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: leisureProjectsData,
    };
  },
});
</script>
