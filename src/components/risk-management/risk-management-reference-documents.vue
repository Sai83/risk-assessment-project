<template>
 <div>
  <p> Reference these documents:</p>
  <div>{{documentStatus.documentsCompletePercent}} Complete</div>
  <div>{{documentStatus.documentsControlScore}} Score</div>
  <div>{{documentStatus.documentsMaturityLevel}} Maturity Level</div>

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
