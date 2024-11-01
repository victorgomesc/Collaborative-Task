export async function getTasks(){
    await new Promise(resolve => setTimeout(resolve, 1000))
    return [
    { id: 1, task: 'Footer', name: 'Victor', state: 'stop', date: '20/10/2024'},
    { id: 2, task: 'Modal', name: 'Victor', state: 'stop', date: '20/10/2024'},
    { id: 3, task: 'Modal', name: 'Victor', state: 'stop', date: '20/10/2024'},
    { id: 4, task: 'Modal', name: 'Victor', state: 'stop', date: '20/10/2024'},
    { id: 5, task: 'Modal', name: 'Victor', state: 'stop', date: '20/10/2024'},
    { id: 6, task: 'Modal', name: 'Victor', state: 'stop', date: '20/10/2024'},
    ];
}

interface CreateTaskRequest {
    name: string
    task: string
    state: string
    date: string

}

export async function CreateTask(_: CreateTaskRequest){
    await new Promise(resolve => setTimeout(resolve, 1000))

    return
}