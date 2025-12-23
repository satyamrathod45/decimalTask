# Sticky Notes Todo App (React)

A simple **Sticky Notes–style Todo App** built using **React**.
This project demonstrates **CRUD operations** (Create, Read, Update, Delete) with **proper state management** using React Hooks.

---

## Features

* Add new tasks
* View all tasks
* Edit existing tasks
* Mark tasks as completed
* Delete tasks
* Random sticky-note colors
* Clean and simple UI

---

## Tech Stack

* React
* JavaScript (ES6)
* React Hooks (`useState`, `useRef`)
* React Icons
* Tailwind CSS

---

## Project Structure

```
src/
│
├── component/
│   ├── Navbar.jsx
│   └── Card.jsx
│
├── App.jsx
├── index.js
└── index.css
```

---

## State Management

| State       | Purpose                           |
| ----------- | --------------------------------- |
| `task`      | Stores input value                |
| `data`      | Stores all tasks                  |
| `editingId` | Tracks which task is being edited |
| `useRef`    | Generates unique IDs              |

---

## CRUD Logic

### Create

Adds a new task without mutating state:

```js
setData([newTask, ...data]);
```

### Read

Displays tasks using map:

```jsx
data.map(todo => <Card key={todo.id} data={todo} />)
```

### Update (Edit)

Updates task text using ID-based logic:

```js
data.map(todo =>
  todo.id === editingId ? { ...todo, text: task } : todo
);
```

### Update (Complete)

Toggles completion status:

```js
data.map(todo =>
  todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
);
```

### Delete

Removes a task safely:

```js
data.filter(todo => todo.id !== id);
```

---

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/your-username/sticky-notes-todo.git
```

2. Install dependencies

```bash
npm install
```

3. Start the app

```bash
npm start
```

---

## Example Task Object

```js
{
  id: 1,
  text: "Learn React CRUD",
  isCompleted: false,
  color: "#FFEB3B",
  rotate: -2
}
```

---

## Future Improvements

* Completed / Pending filters
* LocalStorage support
* Inline editing
* Drag and drop notes
* Mobile responsiveness

---

## Author

**Satyam**
Learning React by understanding state management and core concepts.

---

## Final Note

This project is built to strengthen **React fundamentals**.
If you understand this code, you understand React CRUD.

Decimal Coding🤘🏻
