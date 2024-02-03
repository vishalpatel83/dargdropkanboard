import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { GridColumn } from 'semantic-ui-react'
import {
    CardMeta,
    CardHeader,
    CardGroup,
    CardDescription,
    CardContent,
    Button,
    Card,
    Image,
} from 'semantic-ui-react'
import TaskCard from './taskcard.component'

const ColumnComponent = ({ id, taskList }) => {
    return (
        <GridColumn>
            <Droppable droppableId={id}  type="" direction="horizontal">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        <>
                            {
                                taskList.map((task, index) => (
                                    <TaskCard task={task} key={task.id} index={index}/>
                                ))
                            }
                        </>
                    </div>
                )}
            </Droppable>
        </GridColumn>
    )
}

export default ColumnComponent
