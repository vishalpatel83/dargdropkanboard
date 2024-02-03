import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Card, CardContent, CardDescription, CardHeader } from 'semantic-ui-react'

const TaskCard = ({ task, index }) => {
    debugger
    return (
        <Draggable draggableId={task?.id} key={task.id} index={index} type="task">
            {(provided, snapshot) => (
                <Card
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <CardContent>
                        <CardHeader>{task.title}</CardHeader>
                        <CardDescription>
                            {task.description}
                        </CardDescription>
                    </CardContent>

                </Card>
                // </div>
            )}
        </Draggable>
    )
}

export default TaskCard
