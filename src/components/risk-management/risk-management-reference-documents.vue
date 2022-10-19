<template>
 <div class="container">
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <p class="level-left"> Reference these documents:</p>
      </div>
    </div>
  </div>
  
  <div class="columns">
    <div class="column">
      <p class="is-size-4">{{documentStatus.documentsCompletePercent}}</p>
      <div class="columns">
        <div class="column">
        <p> Complete</p>
        </div>
       </div>
      </div>
    <div class="column">
      <p class="is-size-4 has-text-primary">{{documentStatus.documentsControlScore}}</p>
      <div class="columns">
        <div class="column">
        <p> Score</p>
        </div>
       </div>
      </div>
    <div class="column">
      <p class="is-size-4">{{documentStatus.documentsMaturityLevel}}</p>
      <div class="columns">
        <div class="column">
        <p> Maturity Level</p>
        </div>
       </div>
      </div>
  </div> 
  </div>
</template>

<script>
export default {
  name: 'RiskManagementReferenceDocuments',
  data() {
    return {
      documentStatus: {
        documentsCompletePercent: '100%',
        documentsControlScore: '850',
        documentsMaturityLevel: '5',
      },
    };
  },
};
</script>
