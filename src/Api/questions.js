const quizQuestions = [
  {
    id: "1",
    tag: "name",
    question: "What is your name?",
    type: "text",
    answers: []
  },
  {
    id: "2",
    tag: "email",
    question: "What is your email address?",
    type: "email",
    answers: []
  },
  {
    id: "3",
    tag: "sport",
    question: "What is your favourite sport?",
    type: "radio",
    answers: ["Tennis", "Football", "Formula One"]
  },
  {
    id: "4.Tennis",
    tag: "player",
    question: "Who is your favourite player?",
    type: "text",
    answers: []
  },
  {
    id: "4.Football",
    tag: "team",
    question: "What team do you root for?",
    type: "text",
    answers: []
  },
  {
    id: "4.Formula One",
    tag: "track",
    question: "Which track is your favourite?",
    type: "radio",
    answers: ["Monza", "Monaco", "SPA", "Suzuka"]
  },
  {
    id: "5",
    tag: "policy",
    question: "Do you wish to be contacted in future?",
    type: "radio",
    answers: ["Yes", "No"]
  }
];

export default quizQuestions;
