// Checklist App
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const themeToggle = document.getElementById('themeToggle');

// Load tasks from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        taskList.innerHTML = '';
        tasks.forEach(task => {
            addTaskToList(task.text, task.completed);
        });
    }
}

// Save tasks to localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.task-item').forEach(item => {
        const checkbox = item.querySelector('.task-checkbox');
        const text = item.querySelector('.task-text').textContent;
        tasks.push({ text, completed: checkbox.checked });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add a task to the list
function addTaskToList(text, completed = false) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${completed ? 'checked' : ''} />
        <span class="task-text">${escapeHtml(text)}</span>
        <button class="delete-btn" title="Delete task">🗑️</button>
    `;
    
    const checkbox = li.querySelector('.task-checkbox');
    const deleteBtn = li.querySelector('.delete-btn');
    
    checkbox.addEventListener('change', saveTasks);
    deleteBtn.addEventListener('click', () => {
        li.remove();
        saveTasks();
    });
    
    taskList.appendChild(li);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Add task on button click
addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text) {
        addTaskToList(text);
        saveTasks();
        taskInput.value = '';
        taskInput.focus();
    }
});

// Add task on Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});

// Load and initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Theme toggle
themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadTasks();
});