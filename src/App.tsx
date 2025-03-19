import React, { useState } from 'react';
import Header from './components/Header';
import QuestionList from './components/QuestionList';
import QuestionDrawer from './components/QuestionDrawer';
import { questions, Question, Difficulty } from './data/questions';

function App() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

  const filteredQuestions = selectedDifficulty === 'all'
    ? questions
    : questions.filter(q => q.difficulty === selectedDifficulty);

  return (
    <div>
      <Header
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
      />
      
      <main className="main">
        <QuestionList
          questions={filteredQuestions}
          onQuestionClick={setSelectedQuestion}
        />
      </main>

      <QuestionDrawer
        question={selectedQuestion}
        onClose={() => setSelectedQuestion(null)}
      />
    </div>
  );
}

export default App;