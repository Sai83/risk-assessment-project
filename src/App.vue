<template>
  <div id="app">
    <RiskAssessment/>
  </div>
</template>

<script>
import RiskAssessment from './components/risk-management/risk-assessment.vue';

export default {
  name: 'App',
  components: {
    RiskAssessment
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
