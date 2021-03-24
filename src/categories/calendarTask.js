const KEYS = {
    taskId: 'taskId',
    tasks: 'tasks'
}

export const getCategoryCollection = ()=> ([
    {id: '1', category: 'Work'},
    {id: '2', category: 'Health'},
    {id: '3', category: 'Hobby'},
    {id: '4', category: 'Family'},
    {id: '5', category: 'Routine'},
    {id: '6', category: 'Friends'},
    {id: '7', category: 'Education'},
    {id: '8', category: 'Entertainment'}
])

export function insertNewTask(data) {
    let tasks = getAllTasks();    
    data['id'] = generateTaskId();

    tasks.push(data); 

    localStorage.setItem(KEYS.tasks, JSON.stringify(tasks))
}

export function updateTask(data) {
    let tasks = getAllTasks();
    let recordIndex = tasks.findIndex(x => x.id === data.id);
    tasks[recordIndex] = { ...data }
    localStorage.setItem(KEYS.tasks, JSON.stringify(tasks));
}

export function deleteTask(id) {
    let tasks = getAllTasks();
    tasks = tasks.filter(x => x.id != id)
    localStorage.setItem(KEYS.tasks, JSON.stringify(tasks)); 
}

export function generateTaskId() {
    if (localStorage.getItem(KEYS.taskId) == null)
        localStorage.setItem(KEYS.taskId, '0')

    var id = parseInt(localStorage.getItem(KEYS.taskId))

    localStorage.setItem(KEYS.taskId, (++id).toString())
    return id;
}

export function getAllTasks() {
    if (localStorage.getItem(KEYS.tasks) == null)
        localStorage.setItem(KEYS.tasks, JSON.stringify([]));

    return JSON.parse(localStorage.getItem(KEYS.tasks));
}