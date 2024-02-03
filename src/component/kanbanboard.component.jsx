import React from 'react'
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'
import ColumnComponent from './column.component';
import useDragData from '../hook/useDragData.hook';
import { DragDropContext } from 'react-beautiful-dnd';

const KanbanBoard = () => {
    const { handleDragEnd, taskData,onDragStart } = useDragData()


    return (
        <>
            <DragDropContext onDragEnd={handleDragEnd} onDragStart={onDragStart} >
                <Grid columns={3} divided>
                    <GridRow>
                        <GridColumn>
                            <h3>To do</h3>
                        </GridColumn>
                        <GridColumn>
                            <h3>In Progress</h3>
                        </GridColumn>
                        <GridColumn>
                            <h3>Done</h3>
                        </GridColumn>
                    </GridRow>
                    <GridRow>
                        {taskData.columnOrder.map((columnId, i) => {
                            debugger
                            const column = taskData.columns[columnId];
                            const tasksList = column.taskIds?.map((taskId) => taskData.tasks[taskId]);

                            return (
                                <GridColumn>
                                    <ColumnComponent key={column.id}  column={column} tasksList={tasksList} />
                                </GridColumn>
                            );
                        })}

                    </GridRow>
                </Grid>
            </DragDropContext>
        </>
    )
}

export default KanbanBoard;
