import { ChevronDown, Code2 } from "lucide-react";
import { Difficulty } from "../../data/questions";
import "./header.css";

interface HeaderProps {
  selectedDifficulty: Difficulty | "all";
  setSelectedDifficulty: (difficulty: Difficulty | "all") => void;
  setSelectedTopic: (topic: string) => void;
  selectedTopic: string;
}

const Header = ({
  selectedDifficulty,
  setSelectedDifficulty,
  setSelectedTopic,
  selectedTopic,
}: HeaderProps) => {
  return (
    <header className="devzone-header-container">
      <div className="devzone-header-wrapper">
        <div className="devzone-header-logo">
          <Code2 size={24} />
          <h1>Developer Zone</h1>
        </div>

        <div className="devzone-header-controls">
          <div className="devzone-header-select-wrapper">
            <select
              className="devzone-header-select"
              defaultValue="all"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value as string)}
            >
              <option value="all">All Topic</option>
              <option value="select">Select</option>
            </select>
            <ChevronDown className="devzone-header-select-icon" size={16} />
          </div>

          <div className="devzone-header-select-wrapper">
            <select
              value={selectedDifficulty}
              onChange={(e) =>
                setSelectedDifficulty(e.target.value as Difficulty | "all")
              }
              className="devzone-header-select"
            >
              <option value="all">All Difficulties</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <ChevronDown className="devzone-header-select-icon" size={16} />
          </div>

          <div className="devzone-header-select-wrapper">
            <select className="devzone-header-select" defaultValue="sql">
              <option value="sql">SQL</option>
            </select>
            <ChevronDown className="devzone-header-select-icon" size={16} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
