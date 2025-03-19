import React from 'react';
import { Question } from '../data/questions';
import { ChevronRight } from 'lucide-react';

interface QuestionListProps {
  questions: Question[];
  onQuestionClick: (question: Question) => void;
}

export default function QuestionList({ questions, onQuestionClick }: QuestionListProps) {
  return (
    <div className="question-list">
      {questions.map((question) => (
        <button
          key={question.id}
          onClick={() => onQuestionClick(question)}
          className="question-item"
        >
          <div>
            <h3>{question.title}</h3>
            <span className={`difficulty-badge difficulty-${question.difficulty}`}>
              {question.difficulty}
            </span>
          </div>
          <ChevronRight size={20} />
        </button>
      ))}
    </div>
  );
}