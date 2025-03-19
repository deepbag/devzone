export type Difficulty = 'low' | 'medium' | 'high';

export interface Question {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  sqlQuery: string;
  expectedOutput: string;
}

export const questions: Question[] = [
  {
    id: 1,
    title: "Select All Employees",
    description: "Write a query to select all employees from the employees table.",
    difficulty: "low",
    sqlQuery: "SELECT * FROM employees;",
    expectedOutput: `[
  { "id": 1, "name": "John Doe", "department": "IT" },
  { "id": 2, "name": "Jane Smith", "department": "HR" }
]`
  },
  {
    id: 2,
    title: "Filter by Department",
    description: "Write a query to select employees from the IT department with salary > 50000.",
    difficulty: "medium",
    sqlQuery: "SELECT * FROM employees WHERE department = 'IT' AND salary > 50000;",
    expectedOutput: `[
  { "id": 1, "name": "John Doe", "department": "IT", "salary": 60000 }
]`
  },
  {
    id: 3,
    title: "Complex Join Operation",
    description: "Write a query to join employees with departments and projects, showing only active projects.",
    difficulty: "high",
    sqlQuery: `SELECT e.name, d.department_name, p.project_name 
FROM employees e 
JOIN departments d ON e.department_id = d.id
JOIN projects p ON e.project_id = p.id
WHERE p.status = 'active';`,
    expectedOutput: `[
  { "name": "John Doe", "department_name": "IT", "project_name": "Cloud Migration" }
]`
  }
];