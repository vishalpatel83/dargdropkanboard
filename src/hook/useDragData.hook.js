import React, { useState } from 'react'

const useDragData = () => {

    const [index, setIndex] = useState(null)
    const [task, setTask] = useState({ title: "", description: "" })
    const initialData = {
        tasks: {
            "task-1": { id: "task-1", title: "Homework", description: "finish homework before 4pm" },
            "task-2": { id: "task-2", title: "sport", description: "do yoga on early morning" },
            "task-3": { id: "task-3", title: "lunch", description: "lunch after 1 pm" },
        },
        columns: {
            "column-1": {
                id: "column-1",
                title: "To do",
                taskIds: ["task-1", "task-2", "task-3"],
            },
            "column-2": {
                id: "column-2",
                title: "In progress",
                taskIds: [],
            },
            "column-3": {
                id: "column-3",
                title: "Done",
                taskIds: [],
            },
        },
        columnOrder: ["column-1", "column-2", "column-3"],
    };


    const [taskData, settaskData] = useState(initialData)

    const handleDragEnd = (result) => {

        // settaskData(newState);
    }

    const onDragStart = (result) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let taskId = `task-${taskData.columns['column-1'].taskIds.length + 1}`
        let newTask = {
            id: taskId,
            ...task
        }
        const oldTask = taskData;
        oldTask.tasks[taskId] = newTask
        oldTask.columns["column-1"].taskIds = [taskId, ...oldTask.columns["column-1"].taskIds]

        settaskData(oldTask)

        setTask({
            title:"",
            description:""
        })
    }

    const handleChange = (e) => {
        const { value } = e.target
        const { name } = e.target
        setTask((task) => (
            {
                ...task,
                [name]: value
            }
        ))
    }
    return { handleDragEnd, initialData, taskData, onDragStart, task, handleChange ,handleSubmit}


}

export default useDragData

