import React from "react";
import { Question } from "../../data/questions";
import { ChevronRight } from "lucide-react";
import "./question-list.css";

interface QuestionListProps {
  questions: Question[];
  required: Question[];
  onQuestionClick: (question: Question) => void;
}

export default function QuestionList({
  questions,
  onQuestionClick,
  required,
}: QuestionListProps) {
  return (
    <>
      <div className="devzone-question-list-required">
        {required?.map((question) => {
          return (
            <button
              key={question.id}
              onClick={() => onQuestionClick(question)}
              className="devzone-question-item"
            >
              <div className="devzone-question-item-block">
                <span
                  className={`devzone-topic-badge devzone-topic-${question.topic}`}
                >
                  {question.topic}
                </span>
                <h3 className="devzone-question-item-title">
                  {question.title}
                </h3>
              </div>
              <div className="devzone-question-item-block">
                <span
                  className={`devzone-difficulty-badge devzone-difficulty-${question.difficulty}`}
                >
                  {question.difficulty}
                </span>
                <ChevronRight size={20} style={{ marginLeft: "10px" }} />
              </div>
            </button>
          );
        })}
      </div>
      <div className="devzone-question-list">
        {questions?.map((question) => (
          <button
            key={question.id}
            onClick={() => onQuestionClick(question)}
            className="devzone-question-item"
          >
            <div className="devzone-question-item-block">
              <span
                className={`devzone-topic-badge devzone-topic-${question.topic}`}
              >
                {question.topic}
              </span>
              <h3 className="devzone-question-item-title">{question.title}</h3>
            </div>
            <div className="devzone-question-item-block">
              <span
                className={`devzone-difficulty-badge devzone-difficulty-${question.difficulty}`}
              >
                {question.difficulty}
              </span>
              <ChevronRight size={20} style={{ marginLeft: "10px" }} />
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
