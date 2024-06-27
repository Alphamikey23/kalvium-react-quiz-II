import React, { Component } from 'react';
import './QuizComponent.css'

const quizData = [
  {
    "question": "What temperature does water boil at?",
    "choices": ["50 degrees Celcius", "25 degrees Celcius", "100 degrees Celcius", "150 degrees Celcius"],
    "answer": "100 degrees Celcius"
  },
  {
    "question": "Who wrote Julius Caesar, Macbeth and Hamlet?",
    "choices": ["Wole Soyinka", "William Shakespeare", "Ngozi Chimamanda Adichie", "Dan Brown"],
    "answer": "William Shakespeare"
  },
  {
    "question": "What did the crocodile swallow in Peter Pan?",
    "choices": ["A Book", "A Computer", "A pair of shoes", "Alarm Clock"],
    "answer": "Alarm Clock"
  },
  {
    "question": "Which is the only mammal that can’t jump?",
    "choices": ["Dog", "Elephant", "Goat", "Lion"],
    "answer": "Elephant"
  },
  {
    "question": "Who lived at 221B, Baker Street, London?",
    "choices": ["Tony Stark", "Morgan Freeman", "Sherlock Holmes", "Samuel L. Jackson"],
    "answer": "Sherlock Holmes"
  },
  {
    "question": "What colour is a panda?",
    "choices": ["Green and Yellow", "Blue and Red", "Green and White", "Black and White"],
    "answer": "Black and White"
  },
  {
    "question": "Where is the smallest bone in the human body?",
    "choices": ["The Chest", "The Ear", "The Legs", "The Hands"],
    "answer": "The Ear"
  },
  {
    "question": "What does the roman numeral C represent?",
    "choices": ["100", "10", "10,000", "1,000,000"],
    "answer": "100"
  },
  {
    "question": "What takes place in Hong Kong's Happy Valley?",
    "choices": ["Chicken Wrestling", "Horse racing", "Street Racing", "Arm Wrestling"],
    "answer": "Horse racing"
  },
  {
    "question": "Who painted the Mona Lisa?",
    "choices": ["Alexander Graham Bell", "Sir Isaac Newton", "Leonardo Da Vinci", "Albert Einstein"],
    "answer": "Leonardo Da Vinci"
  },
  {
    "question": "What’s the most important book in the Moslem religion?",
    "choices": ["The Koran", "The Dictionary", "The Bible", "The Chemistry text Book"],
    "answer": "The Koran"
  },
  {
    "question": "What’s the capital of Ethiopia?",
    "choices": ["Cape Town", "San Francisco", "Abuja", "Addis Ababa"],
    "answer": "Addis Ababa"
  },
  {
    "question": "How many squares are there on a chess board?",
    "choices": ["128", "64", "32", "256"],
    "answer": "64"
  },
  {
    "question": "Who invented the electric light bulb?",
    "choices": ["Tom Cruise", "Barack Obama", "Wole Soyinka", "Thomas Edison"],
    "answer": "Thomas Edison"
  },
  {
    "question": "What are the first three words of the bible?",
    "choices": ["be with everyone", "Again Jesus asked", "In the beginning", "At that time"],
    "answer": "In the beginning"
  }
];

export default class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      questions: quizData,
      selectedAnswer: null,
      score: 0,
      quizCompleted: false
    };
  }

  handleAnswerClick = (choice) => {
    this.setState({ selectedAnswer: choice });
  };

  handleSubmitAnswer = () => {
    const { currentIndex, questions, selectedAnswer, score } = this.state;
    const currentQuestion = questions[currentIndex];

    if (selectedAnswer === currentQuestion.answer) {
      this.setState({ score: score + 1 });
    }

    
    if (currentIndex + 1 < questions.length) {
      this.setState({ currentIndex: currentIndex + 1, selectedAnswer: null });
    } else {
      this.setState({ quizCompleted: true });
    }
  };

  handlePrevQuestion = () => {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      this.setState({ currentIndex: currentIndex - 1, selectedAnswer: null });
    }
  };

  handleNextQuestion = () => {
    const { currentIndex, questions } = this.state;
    if (currentIndex < questions.length - 1) {
      this.setState({ currentIndex: currentIndex + 1, selectedAnswer: null });
    }
  };

  handleQuitQuiz = () => {
    
    if (window.confirm("Are you sure you want to quit the quiz?")) {
      this.setState({ quizCompleted: true });
    }
  };

  handleRestartQuiz = () => {
    this.setState({
      currentIndex: 0,
      selectedAnswer: null,
      score: 0,
      quizCompleted: false
    });
  };

  render() {
    const { questions, currentIndex, selectedAnswer, quizCompleted, score } = this.state;

    if (quizCompleted) {
      return (
        <div className="quiz-container">
          <h1>Quiz Completed!</h1>
          <p>Your score: {score} out of {questions.length}</p>
          <button onClick={this.handleRestartQuiz}>Restart Quiz</button>
        </div>
      );
    }

    const currentQuestion = questions[currentIndex];

    return (
      <div className="quiz-container">
        <h1>Quiz Questions</h1>
        <p className="question">{currentQuestion.question}</p>
        <div className="choices">
          {currentQuestion.choices.map((choice, index) => (
            <button
              key={index}
              className={`choice-button ${selectedAnswer === choice ? 'selected' : ''}`}
              onClick={() => this.handleAnswerClick(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
        <div className="button-container">
          <button
            className="quiz-button"
            onClick={this.handlePrevQuestion}
            disabled={currentIndex === 0}
          >
            PREV
          </button>
          <button
            className="quiz-button"
            onClick={this.handleNextQuestion}
            disabled={currentIndex === questions.length - 1 || !selectedAnswer}
          >
            NEXT
          </button>
          <button className="quiz-button" onClick={this.handleQuitQuiz}>
            QUIT
          </button>
          <button
          className="submit-button"
          onClick={this.handleSubmitAnswer}
          disabled={!selectedAnswer}
        >
          {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
        </div>
        
      </div>
    );
  }
}
