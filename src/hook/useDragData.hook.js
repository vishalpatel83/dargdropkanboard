import React, { useState } from 'react'

const useDragData = () => {
    const [taskList, setTaskList] = useState([
        { id: 1, title: "Do Homework", description: "do home work after the lunch", status: "todo" },
        { id: 2, title: "take a break", description: "take 30 minute break after working 5 our", status: "done" },
        { id: 3, title: "Do Homework", description: "do home work after the lnch", status: "inprogress" },

    ])
    const [completedTask, setcompletedTask] = useState(taskList?.filter((task=>task.status === "done")))
    const [toDoTask, settoDoTask] = useState(taskList?.filter((task=>task.status === "todo")))
    const [inProgressTask, setInProgressTask] = useState(taskList?.filter((task=>task.status === "inprogress")))
    
    return { taskList ,completedTask,toDoTask,inProgressTask}


}

export default useDragData

