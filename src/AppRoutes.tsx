import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { questions, Question, Difficulty } from "./data/questions";
import { Header, QuestionDrawer, QuestionList } from "./components";

function AppRoutes() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    Difficulty | "all"
  >("all");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  const difficultyOrder: Record<Difficulty, number> = {
    important: 0,
    low: 1,
    medium: 2,
    high: 3,
  };

  const filteredQuestions = useMemo(() => {
    return questions
      .filter((q: Question) => {
        const matchesDifficulty =
          selectedDifficulty === "all" || q.difficulty === selectedDifficulty;
        const matchesTopic =
          selectedTopic === "all" ||
          q.topic.toUpperCase().includes(selectedTopic.toUpperCase());

        return matchesDifficulty && matchesTopic && !q.requiredQuestion;
      })
      .sort(
        (a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
      ); // Sorting based on mapped difficulty order
  }, [questions, selectedDifficulty, selectedTopic]);

  return (
    <div>
      <Header
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <QuestionList
                questions={filteredQuestions}
                required={questions.filter((q) => q.requiredQuestion)}
                onQuestionClick={setSelectedQuestion}
              />
            }
          />
        </Routes>
      </main>

      <QuestionDrawer
        question={selectedQuestion}
        onClose={() => setSelectedQuestion(null)}
      />
    </div>
  );
}

export default AppRoutes;
