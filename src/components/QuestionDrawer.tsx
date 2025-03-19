import React from 'react';
import { X } from 'lucide-react';
import { Question } from '../data/questions';

interface QuestionDrawerProps {
  question: Question | null;
  onClose: () => void;
}

export default function QuestionDrawer({ question, onClose }: QuestionDrawerProps) {
  if (!question) return null;

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-container">
        <div className="drawer">
          <div className="drawer-header">
            <h2 className="drawer-title">{question.title}</h2>
            <button onClick={onClose} className="drawer-close">
              <X size={24} />
            </button>
          </div>

          <div className="drawer-content">
            <div className="drawer-section">
              <h3>Description</h3>
              <p>{question.description}</p>
            </div>

            <div className="drawer-section">
              <h3>Expected SQL Query</h3>
              <pre className="code-block">
                <code>{question.sqlQuery}</code>
              </pre>
            </div>

            <div className="drawer-section">
              <h3>Expected Output</h3>
              <pre className="code-block">
                <code>{question.expectedOutput}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}