function checkAnswers(){
  var  quizScore = 0
  var questionOneAnswer = document.querySelector("input[name='programmer']:checked").value
  if (questionOneAnswer == "18") {
    quizScore = quizScore + 1
  }
  var questionTwoAnswer = document.querySelector("input[name='company']:checked").value
  if (questionTwoAnswer == "1") {
    quizScore = quizScore + 1
  }
  var questionThreeAnswer = document.querySelector("input[name='tatiana']:checked").value
  if (questionThreeAnswer == "17") {
    quizScore = quizScore + 1
  }
  var questionFourAnswer = document.querySelector("input[name='music']:checked").value
  if (questionFourAnswer == "snow") {
    quizScore = quizScore + 1
  }
  var questionFiveAnswer = document.querySelector("input[name='tracks']:checked").value
  if (questionFiveAnswer == "weekend") {
    quizScore = quizScore + 1
  }
  alert("Your score is...")
  alert(quizScore)
}
