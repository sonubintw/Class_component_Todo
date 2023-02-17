import { Component } from "react";
import AddTodo from "./AddTodo";
import SingleTodos from "./SingleTodo";

/*
id: 
Value:
isDone:
*/


class Todos extends Component{
    
    state={
        /*
        id: 
        Value:
        isDone:
        */
       //ternary operator is used to see whether Current_todos 
       //are present in or not; if not return blank array
        todos:
        localStorage.getItem("Current_todos")?
        JSON.parse(localStorage.getItem("Current_todos")):
        []
    }
//function to get data from child to parent wiz(<AddTodo/>) 
    addNewTodo=(todoValue)=>{
        let Current_todos=this.state.todos;
        Current_todos.push({
            id:new Date().getTime(),
            value:todoValue,//value from child using props function
            isDone:false
        })
        this.updateState(Current_todos)
    
       
    }
    //function to update state and Lastest_todo is a parameter for the function
updateState=(Current_todos)=>{
        this.setState({
            todos:Current_todos
        })

        localStorage.setItem("Current_todos",JSON.stringify
        (Current_todos))
}

    
//delete the todo items
onDelete=(todoId)=>{
    let Current_todos=this.state.todos.filter((elem)=>{
        // let z=elem.id !== todoId
        // console.log(z)
            return elem.id !== todoId
    })
    
    console.log(Current_todos+" before")
    // //updating state using the function updateState
    this.updateState(Current_todos)
    console.log(Current_todos)
   
}
//to handle the checkbox
handleDone=(todoId)=>{
    let Current_todos=this.state.todos.map((elem)=>{
        if(elem.id === todoId){
            elem.isDone = !elem.isDone
            //above code is the toggler for true and false of isDone
        }
        return elem
    })
    this.updateState(Current_todos);
 
}

    render(){
        return (
            <div className="">
                <h1 className="text-center">Todos App</h1>
                {
                    this.state.todos.lnength===0 ? <h2>No todos are present</h2> : this.state.todos.map((elem,index)=>{
                        return <SingleTodos key={index} todoItem={elem} index={index+1}
                        delete={this.onDelete}
                        isDone={this.handleDone}
                        />
                    }) 
                }
                <AddTodo addTodo={this.addNewTodo}/>
            </div>
        )
    }
}
export default Todos;