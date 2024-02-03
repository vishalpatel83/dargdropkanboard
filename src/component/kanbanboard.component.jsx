import React, { useEffect } from 'react'
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'
import ColumnComponent from './column.component';
import useDragData from '../hook/useDragData.hook';
import { DragDropContext } from 'react-beautiful-dnd';

const KanbanBoard = () => {
    const {taskList,inProgressTask,completedTask,toDoTask}=useDragData()
    useEffect(() => {

    }, [])

    const handleDragEnd=()=>{

    }
    
    return (
        <>
         <DragDropContext onDragEnd={handleDragEnd}>
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
                    <ColumnComponent id={"1"} taskList={toDoTask}/>
                    <ColumnComponent id={"2"} taskList={inProgressTask}/>
                    <ColumnComponent id={"3"} taskList={completedTask}/>
                </GridRow>
            </Grid>
            </DragDropContext>
        </>
    )
}

export default KanbanBoard;
