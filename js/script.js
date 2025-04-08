const questions = [
  "Do you like horror games?",
  "Are you alone right now?",
  "Do you believe in ghosts?",
  "Is there someone behind you?",
  "Have you ever experienced something you can't explain?",
  "Do you think you are being watched?",
  "Do you hear strange noises at night?",
  "Do you feel a chill in the room?",
  "Do you believe in the supernatural?",
  "Have you ever had a nightmare you couldn't wake up from?",
  "Do you feel safe?",
  "Is there a shadow in the corner of your eye?",
  "Do you often feel anxious?",
  "Do you like exploring abandoned places?",
  "Do you enjoy watching horror movies?",
  "Do you believe in aliens?",
  "Do you think there are parallel universes?",
  "Have you ever felt a presence when no one was there?",
  "Do you enjoy being scared?",
  "Do you have a fear of the dark?",
  "Do you think you are brave?",
  "Have you ever seen something you can't explain?",
  "Do you believe in fate?",
  "Do you think you have a sixth sense?",
  "Do you often have vivid dreams?",
  "Do you enjoy solving mysteries?",
  "Do you think there is life after death?",
  "Have you ever used a Ouija board?",
  "Do you believe in karma?",
  "Do you think some places are haunted?"
];

let currentQuestionIndex = 0;
let score = 0;

function startSurvey() {
  document.getElementById('start-btn').style.display = 'none';
  document.getElementById('answer-container').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById('question').textContent = questions[currentQuestionIndex];
  } else {
    evaluateSurvey();
  }
}

function answer(response) {
  if (response === 'Yes') {
    score++;
  }
  console.log(`Question: ${questions[currentQuestionIndex]} - Answer: ${response}`);
  currentQuestionIndex++;
  showQuestion();
}

function evaluateSurvey() {
  let personalityType;
  if (score >= 25) {
    personalityType = "Brave and daring";
  } else if (score >= 15) {
    personalityType = "Curious and adventurous";
  } else if (score >= 5) {
    personalityType = "Skeptical and cautious";
  } else {
    personalityType = "Fearful and timid";
  }

  document.getElementById('question').textContent = `Thank you for completing the survey! You are: ${personalityType}`;
  document.getElementById('answer-container').style.display = 'none';
}
