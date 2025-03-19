export type Difficulty = "low" | "medium" | "high" | "important";

export interface Question {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  sqlQuery: string[];
  expectedOutput?: { [key: string]: any }[];
  topic: string;
  explanation?: string;
  required_tables?: string[];
  hints?: string[];
  requiredQuestion?: boolean;
}

export const questions: Question[] = [
  {
    id: 1,
    title: "Create Companies Table",
    description: "Write a SQL query to create the companies table.",
    difficulty: "important",
    topic: "!IMPORTANT - CREATE TABLE",
    sqlQuery: [
      "CREATE TABLE companies (",
      "  id INT AUTO_INCREMENT PRIMARY KEY,",
      "  name VARCHAR(255) NOT NULL,",
      "  registration_number VARCHAR(100) UNIQUE NOT NULL,",
      "  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      ");",
    ],
    expectedOutput: [
      {
        id: "INT AUTO_INCREMENT PRIMARY KEY",
        name: "VARCHAR(255) NOT NULL",
        registration_number: "VARCHAR(100) UNIQUE NOT NULL",
        created_at: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      },
    ],
    requiredQuestion: true,
  },
  {
    id: 2,
    title: "Create Branches Table",
    description:
      "Write a SQL query to create the branches table with a foreign key reference to the companies table.",
    difficulty: "important",
    topic: "!IMPORTANT - CREATE TABLE",
    sqlQuery: [
      "CREATE TABLE branches (",
      "  id INT AUTO_INCREMENT PRIMARY KEY,",
      "  company_id INT NOT NULL,",
      "  name VARCHAR(255) NOT NULL,",
      "  location VARCHAR(255),",
      "  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,",
      "  FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE",
      ");",
    ],
    expectedOutput: [
      {
        id: "INT AUTO_INCREMENT PRIMARY KEY",
        company_id:
          "INT NOT NULL FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE",
        name: "VARCHAR(255) NOT NULL",
        location: "VARCHAR(255)",
        created_at: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      },
    ],
    requiredQuestion: true,
  },
  {
    id: 3,
    title: "Create Departments Table",
    description:
      "Write a SQL query to create the departments table with a foreign key reference to the branches table.",
    difficulty: "important",
    topic: "!IMPORTANT - CREATE TABLE",
    sqlQuery: [
      "CREATE TABLE departments (",
      "  id INT AUTO_INCREMENT PRIMARY KEY,",
      "  branch_id INT NOT NULL,",
      "  name VARCHAR(255) NOT NULL,",
      "  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,",
      "  FOREIGN KEY (branch_id) REFERENCES branches(id) ON DELETE CASCADE",
      ");",
    ],
    expectedOutput: [
      {
        id: "INT AUTO_INCREMENT PRIMARY KEY",
        branch_id:
          "INT NOT NULL FOREIGN KEY (branch_id) REFERENCES branches(id) ON DELETE CASCADE",
        name: "VARCHAR(255) NOT NULL",
        created_at: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      },
    ],
    requiredQuestion: true,
  },
  {
    id: 4,
    title: "Create Employees Table",
    description:
      "Write a SQL query to create the employees table with foreign key references to companies, branches, and departments tables.",
    difficulty: "important",
    topic: "!IMPORTANT - CREATE TABLE",
    sqlQuery: [
      "CREATE TABLE employees (",
      "  id INT AUTO_INCREMENT PRIMARY KEY,",
      "  company_id INT NOT NULL,",
      "  branch_id INT NOT NULL,",
      "  department_id INT NOT NULL,",
      "  first_name VARCHAR(100) NOT NULL,",
      "  last_name VARCHAR(100) NOT NULL,",
      "  email VARCHAR(255) UNIQUE NOT NULL,",
      "  phone VARCHAR(20) UNIQUE,",
      "  hire_date DATE NOT NULL,",
      "  salary DECIMAL(10,2),",
      "  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,",
      "  FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE,",
      "  FOREIGN KEY (branch_id) REFERENCES branches(id) ON DELETE CASCADE,",
      "  FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE",
      ");",
    ],
    expectedOutput: [
      {
        id: "INT AUTO_INCREMENT PRIMARY KEY",
        company_id:
          "INT NOT NULL FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE",
        branch_id:
          "INT NOT NULL FOREIGN KEY (branch_id) REFERENCES branches(id) ON DELETE CASCADE",
        department_id:
          "INT NOT NULL FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE",
        first_name: "VARCHAR(100) NOT NULL",
        last_name: "VARCHAR(100) NOT NULL",
        email: "VARCHAR(255) UNIQUE NOT NULL",
        phone: "VARCHAR(20) UNIQUE",
        hire_date: "DATE NOT NULL",
        salary: "DECIMAL(10,2)",
        created_at: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      },
    ],
    requiredQuestion: true,
  },
  {
    id: 1,
    title: "Select All Companies",
    description:
      "Write a query to select all companies from the companies table.",
    difficulty: "low",
    topic: "SELECT",
    sqlQuery: ["SELECT * FROM companies;"],
    expectedOutput: [
      { id: 1, name: "Tech Corp", registration_number: "TC12345" },
      { id: 2, name: "Health Inc", registration_number: "HI67890" },
    ],
    explanation:
      "The SELECT * statement retrieves all companies from the table.",
    required_tables: ["companies"],
    hints: [
      "Use SELECT * FROM companies to retrieve all companies.",
      "Use WHERE to filter specific companies if needed.",
    ],
  },
  {
    id: 2,
    title: "Select All Employees",
    description:
      "Write a query to select all employees from the employees table.",
    difficulty: "low",
    topic: "SELECT",
    sqlQuery: ["SELECT * FROM employees;"],
    expectedOutput: [
      {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "john@example.com",
      },
      {
        id: 2,
        first_name: "Jane",
        last_name: "Smith",
        email: "jane@example.com",
      },
    ],
    explanation:
      "The SELECT * statement retrieves all employees from the table.",
    required_tables: ["employees"],
    hints: [
      "Use SELECT * FROM employees to retrieve all employees.",
      "Consider selecting only specific columns for better performance.",
    ],
  },
  {
    id: 3,
    title: "Select Employees with Department Names",
    description:
      "Write a query to retrieve employee names along with their department names.",
    difficulty: "medium",
    topic: "SELECT, JOIN",
    sqlQuery: [
      "SELECT e.id, e.first_name, e.last_name, d.name AS department FROM employees e",
      "JOIN departments d ON e.department_id = d.id;",
    ],
    expectedOutput: [
      { id: 1, first_name: "John", last_name: "Doe", department: "IT" },
      { id: 2, first_name: "Jane", last_name: "Smith", department: "HR" },
    ],
    explanation:
      "This query uses INNER JOIN to fetch employee details along with department names.",
    required_tables: ["departments", "employees"],
    hints: [
      "Use JOIN to get data from multiple tables.",
      "Use AS to rename columns for clarity.",
    ],
  },
  {
    id: 4,
    title: "Find Employees Hired After 2020",
    description: "Write a query to select employees hired after 2020.",
    difficulty: "medium",
    topic: "SELECT, WHERE",
    sqlQuery: ["SELECT * FROM employees WHERE hire_date > '2020-12-31';"],
    expectedOutput: [
      {
        id: 3,
        first_name: "Alice",
        last_name: "Brown",
        hire_date: "2021-01-15",
      },
    ],
    explanation: "The WHERE clause filters employees hired after 2020.",
    required_tables: ["employees"],
    hints: [
      "Use WHERE hire_date > 'YYYY-MM-DD' to filter by date.",
      "Use ORDER BY hire_date DESC to get the newest employees first.",
    ],
  },
  {
    id: 5,
    title: "Count Employees per Department",
    description:
      "Write a query to count the number of employees in each department.",
    difficulty: "high",
    topic: "SELECT, JOIN, GROUP BY",
    sqlQuery: [
      "SELECT d.name AS department, COUNT(e.id) AS employee_count FROM departments d",
      "LEFT JOIN employees e ON d.id = e.department_id GROUP BY d.name;",
    ],
    expectedOutput: [
      { department: "IT", employee_count: 3 },
      { department: "HR", employee_count: 2 },
      { department: "Finance", employee_count: 0 },
    ],
    explanation:
      "This query groups employees by department and uses COUNT() to get the number of employees per department.",
    required_tables: ["departments", "employees"],
    hints: [
      "Use GROUP BY to count employees per department.",
      "Use LEFT JOIN to ensure all departments appear, even if they have no employees.",
    ],
  },
  {
    id: 6,
    title: "Find Employees with Highest Salary",
    description: "Write a query to find the employee with the highest salary.",
    difficulty: "medium",
    topic: "SELECT, ORDER BY, LIMIT",
    sqlQuery: ["SELECT * FROM employees ORDER BY salary DESC LIMIT 1;"],
    expectedOutput: [
      { id: 4, first_name: "Emma", last_name: "Davis", salary: 90000 },
    ],
    explanation:
      "The ORDER BY salary DESC sorts employees by salary in descending order, and LIMIT 1 selects the top result.",
    required_tables: ["employees"],
    hints: [
      "Use ORDER BY salary DESC to get the highest salary first.",
      "Use LIMIT 1 to get only one result.",
    ],
  },
];
