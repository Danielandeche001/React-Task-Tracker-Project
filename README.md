# Group 5 Task Tracker

A task tracking web app built with React and Vite for our group project.

## Team Members

**Daniel**
- Set up the GitHub repo and invite collaborators
- Scaffold the project with Vite and React
- Set up folder structure 
- Build App.jsx with useState and useEffect
- Pass tasks data down to TaskList as props
- Review all pull requests before merging
- Deploy the app on Vercel

**Faith**
- Build the TaskForm component
- Write the request to add new tasks to Firebase

**Winfrey**
- Build the TaskCard component
- Implement DELETE to remove a task
- Implement PATCH to mark a task as complete

**Oren**
- Build the SearchBar component
- Build the FilterButtons component
- Add logic to sort tasks by priority (Low, Medium, High)

## What it does

- Add new tasks
- Mark tasks as complete
- Delete tasks
- Search and filter by priority
- Data is saved using Firebase Firestore

## How to run it

First install the dependencies:

```
npm install
```

Then start the app:

```
npm run dev
```

Open `http://localhost:5173` in your browser.

## Branches

- `main` - main branch
- `feature/task-form` - Faith's branch
- `feature/task-cards` - Winfrey's branch
- `feature/search-filter` - Oren's branch
