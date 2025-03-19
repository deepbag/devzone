import React from 'react';
import { ChevronDown, Code2 } from 'lucide-react';
import { Difficulty } from '../data/questions';

interface HeaderProps {
  selectedDifficulty: Difficulty | 'all';
  setSelectedDifficulty: (difficulty: Difficulty | 'all') => void;
}

export default function Header({ selectedDifficulty, setSelectedDifficulty }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Code2 size={24} />
          <h1>SQL Practice</h1>
        </div>
        
        <div className="header-controls">
          <div className="select-wrapper">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
              className="select"
            >
              <option value="all">All Difficulties</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <ChevronDown className="select-icon" size={16} />
          </div>
          
          <div className="select-wrapper">
            <select className="select" defaultValue="sql">
              <option value="sql">SQL</option>
            </select>
            <ChevronDown className="select-icon" size={16} />
          </div>
        </div>
      </div>
    </header>
  );
}