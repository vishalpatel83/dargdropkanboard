import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import TaskCard from './taskcard.component'
import { Segment } from 'semantic-ui-react'

const ColumnComponent = ({column,tasksList}) => {
    return (
        // <GridColumn>
            <Droppable droppableId={column.id}  type="column" direction="horizontal" isDropDisabled={false}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        <>
                            {
                               tasksList&& tasksList?.map((task, index) => (
                                    <TaskCard task={task} key={task.id} index={index}/>
                                ))
                            }
                        </>
                    </div>
                )}
            </Droppable>
        // </GridColumn>
    )
}

export default ColumnComponent
