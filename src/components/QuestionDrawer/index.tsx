import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Question } from "../../data/questions";
import "./question-drawer.css";
import CustomTable from "../CustomTable";
import { Eye, EyeOff } from "lucide-react";

interface QuestionDrawerProps {
  question: Question | null;
  onClose: () => void;
}

export default function QuestionDrawer({
  question,
  onClose,
}: QuestionDrawerProps) {
  const [isBlur, setIsBlur] = useState<boolean>(false);
  if (!question) return null;

  return (
    <div
      className="devzone-question-drawer-overlay"
      onClick={() => {
        setIsBlur(false);
        onClose();
      }}
    >
      <div
        className="devzone-question-drawer-container"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="devzone-question-drawer">
          <div className="devzone-question-drawer-header">
            <h2 className="devzone-question-drawer-title">{question.title}</h2>
            <button
              onClick={() => {
                setIsBlur(false);
                onClose();
              }}
              className="devzone-question-drawer-close"
            >
              <X size={24} />
            </button>
          </div>

          <div className="devzone-question-drawer-content">
            <div className="devzone-question-drawer-section">
              <h3>Description</h3>
              <p>{question.description}</p>
            </div>

            {question.required_tables && (
              <div className="devzone-question-drawer-section">
                <h3>Required Tables</h3>
                <pre className="devzone-question-drawer-code-block">
                  <code>
                    {question.required_tables?.map((_) => {
                      return (
                        <span className="devzone-question-drawer-table-name">
                          {_}
                        </span>
                      );
                    })}
                  </code>
                </pre>
              </div>
            )}

            {question?.expectedOutput && (
              <div className="devzone-question-drawer-section">
                <h3>Expected Output</h3>
                <pre className="devzone-question-drawer-code-block">
                  <code>
                    {question?.expectedOutput?.length > 0 && (
                      <CustomTable
                        columns={Object.keys(question.expectedOutput[0]).map(
                          (key) => ({
                            header: key,
                            accessor: key,
                          })
                        )}
                        data={question.expectedOutput}
                      />
                    )}
                  </code>
                </pre>
              </div>
            )}

            {question.hints && (
              <div className="devzone-question-drawer-section">
                <h3>Hint</h3>
                <pre className="devzone-question-drawer-code-block">
                  <code>
                    <ul>
                      {question.hints?.map((_, index) => (
                        <ol>
                          {index + 1}. {_}
                        </ol>
                      ))}
                    </ul>
                  </code>
                </pre>
              </div>
            )}

            {question?.sqlQuery && (
              <div className="devzone-question-drawer-section">
                <h3>Solution</h3>
                <pre className="devzone-question-drawer-code-block">
                  <code className={!isBlur ? "blurred" : ""}>
                    <ul>
                      {question?.sqlQuery?.map((_, index) => (
                        <ol>{_}</ol>
                      ))}
                    </ul>
                  </code>

                  <button
                    className="show-solution-button"
                    onClick={() => setIsBlur(!isBlur)}
                  >
                    {isBlur ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </pre>
              </div>
            )}

            {isBlur && question.explanation && (
              <div className="devzone-question-drawer-section">
                <h3>Explaination</h3>
                <p>{question.explanation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
