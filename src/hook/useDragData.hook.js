import React, { useState } from 'react'

const useDragData = () => {

    const [index, setIndex] = useState(null)
    const initialData = {
        tasks: {
          "task-1": { id: "task-1",title:"Homework", description: "finish homework before 4pm" },
          "task-2": { id: "task-2", title:"sport",description: "do yoga on early morning" },
          "task-3": { id: "task-3",title:"lunch" ,description: "lunch after 1 pm" },
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

    const handleDragEnd=(result)=>{
       
        // settaskData(newState);
    }

    const onDragStart=(result)=>{

    }
    return { handleDragEnd,initialData,taskData,onDragStart}


}

export default useDragData

