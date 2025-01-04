import { Task } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
// -----like as schema of the state--------
interface InitialState{
    task:Task[]
}
const initialState:InitialState={
    task:[
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
        
    }
})
export default taskSlice.reducer;