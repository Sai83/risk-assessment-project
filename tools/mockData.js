const riskManagementQuestions = [
  {
    id: 1,
    title: "Risk Management processes are formally established, managed and agreed to by organizational stakeholders.",
    authorId: 1,
    acceptedUsers:[
      {
        name: "David Kedrowski",
        result: "Yes",
        date: "10/16/2022"
      }
    ] 
  },
  {
    id: 2,
    title: "Organizational risk tolerance is determinded and clearly expressed ( eg an acceptable rusj score and/or risk threshold has been established, and criteria for which risks/risk levels require specific actions have been agreed upon).",
    authorId: 2,
    acceptedUsers:[
      {
        name: "Sai",
        result: "No",
        date: "10/16/2022"
      }
    ] 
  },
 
];

const newQuestions = {
  id: null,
  title: "",
  authorId: null,
  acceptedUsers:[{
    name:"",
    result:"",
    date: Date.now()
  }]
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newQuestions,
  riskManagementQuestions,  
};
