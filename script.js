var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      question:
        "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },
    {
        question:
          "In HTML, you use a button on a form to:",
        choices: ["run a program", "submit a form to a server", "reset a form to its original state", "all of the above"],
        answer: "all of the above",
      },
      {
        question:
          "The introduction of CGI scripts changed the way that the Web was used because:",
        choices: ["customers acquired the ability to locate and purchase merchandise online", "it allows computer users to access a company's customer support database", "all of the above", "of the ability to maintain customer databases"],
        answer: "all of the above",
      },
      {
        question:
          "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<script>", "<href>", "<div>"],
        answer: "<script>",
      },
      {
        question:
          "When you want to use JavaScript to manipulate the currently displayed Web page, the Web page's JavaScript object name is ____.",
        choices: ["Frame", "Dev tools", "Document", "Window"],
        answer: "Document",
      },
      {
        question:
          "How do you write a conditional statement for executing some statements only if 'i' is NOT equal to 5?",
        choices: ["if (i != 5)", "if (i <> 5)", "if =! 5 then", "if <>5"],
        answer: "if (i != 5)",
      },
      {
        question:
          "When you want to use JavaScript to manipulate the browser window, the browser window's JavaScript object name is ____.",
        choices: ["quotes", "Frame", "Window", "Document"],
        answer: "Window",
      },
      {
        question:
          "For defining a spacing property in a style sheet, which of the following is not true",
        choices: ["position white-space: normal", "curly brackets", "padding-right: 100px", "margin-top: 50px"],
        answer: "position white-space: normal",
      },
      {
        question: 
            "A named element in a JavaScript program that is used to store and retrieve data is a ____.",
        choices: ["string", "variable", "method", "assignment operator"],
        answer: "variable",
      },
  ];
  
  var questionEl = document.querySelector("#question");
  var optionListEl = document.querySelector("#option-list");
  var questionResultEl = document.querySelector("#question-result");
  var timerEl = document.querySelector("#timer");
  
  var questionIndex = 0;
  var correctCount = 0;
  
  var time = 90;
  var intervalId;
  
  function endQuiz() {
    clearInterval(intervalId);
    var body = document.body;
    body.innerHTML = "Game over, You scored " + correctCount;
  }
  
  function updateTime() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
      endQuiz();
    }
  }
  
  function renderQuestion() {
    
    if (time == 0) {
      updateTime();
      return;
    }
  
    intervalId = setInterval(updateTime, 1000);
    
    questionEl.textContent = questions[questionIndex].question;
  
    optionListEl.innerHTML = "";
    questionResultEl.innerHTML = "";
  
    var choices = questions[questionIndex].choices;
    var choicesLenth = choices.length;
  
    for (var i = 0; i < choicesLenth; i++) {
      var questionListItem = document.createElement("li");
      questionListItem.textContent = choices[i];
      optionListEl.append(questionListItem);
    }
  }
  
  function nextQuestion() {
    questionIndex++;
    if (questionIndex === questions.length) {
      time = 0;
    }
    renderQuestion();
  }
  
  function checkAnswer(event) {
    clearInterval(intervalId);
    if (event.target.matches("li")) {
      var answer = event.target.textContent;
      if (answer === questions[questionIndex].answer) {
        questionResultEl.textContent = "Correct";
        correctCount++;
      } else {
        questionResultEl.textContent = "Incorrect";
        time = time - 2;
        timerEl.textContent = time;
      }
    }
    setTimeout(nextQuestion, 2000);
  }
  
  renderQuestion();
  optionListEl.addEventListener("click", checkAnswer);
  