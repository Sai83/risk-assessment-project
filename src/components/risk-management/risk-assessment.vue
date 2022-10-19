<template>
  <div>
  <h2>1.1 Risk Management Practices and Intergrations</h2>
  <RiskManagementDetails/>
  <RiskManagementDone/>

 <p> Our working definition of information security is
  "managing risks to information confidentiality, integrity
  and availablity using administrative, physical ad techinal controls".
  Risk management practices are fundemental to every information security program.
  Our risk management practices must be formalized, documented, repeatable and measureable.
  </p>

  <RiskManagementPeopleEdit/>
  <RiskManagementReferenceDocuments/>
  <RiskManagementQuestionnare/>
</div>
</template>
<script>
import RiskManagementDetails from './risk-management-details.vue';
import RiskManagementDone from './risk-management-done.vue';
import RiskManagementPeopleEdit from './risk-management-people-edit.vue';
import RiskManagementReferenceDocuments from './risk-management-reference-documents.vue';
import RiskManagementQuestionnare from './risk-management-questionnare.vue';

export default {
  name: 'RiskManagementPracticesAndIntegration',
  components: {
    RiskManagementDetails,
    RiskManagementDone,
    RiskManagementPeopleEdit,
    RiskManagementReferenceDocuments,
    RiskManagementQuestionnare,
  },

};
</script>
