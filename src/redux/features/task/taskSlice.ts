import { RootState } from "@/redux/store";
import { ITask } from "@/types";

import { createSlice } from "@reduxjs/toolkit";

// -----like as schema of the state--------
interface InitialState{
    tasks:ITask[]
}
const initialState:InitialState={
    tasks:[
        {
            id:"asdfesdfasef",
            title:"Learn Redux",
            description:"creat home page , and routing",
            dueDate:"2022-01-30",
            isCompleted:false,
            priority:"High",
                },
        {
            id:"asdfesdfasef",
            title:"Learn Redux Toolkit",
            description:"creat home page , and routing",
            dueDate:"2022-01-30",
            isCompleted:false,
            priority:"High",
                },
        {
            id:"asdfesdfaswef",
            title:"individual project",
            description:"creat home page , and routing",
            dueDate:"2022-01-30",
            isCompleted:false,
            priority:"High",
                },
    ]
}
 const taskSlice=createSlice({
    name:'task',
    initialState,
    reducers:{
        
    },

});

toggleCompleteState:(state,action:PayloadAction<string>)=>{
    console.log(action.payload);
    state.tasks.forEach((task)=>{
        task.id===action.payload?(task.isCompleted=!task.isCompleted):null;
    })
};
updateFilter:(state,action:PayloadAction<string>)=>{
    state.filter=action.payload;
}
export const selectTask=(state:RootState)=>{
    return state.todo. tasks;
}
export default taskSlice.reducer;