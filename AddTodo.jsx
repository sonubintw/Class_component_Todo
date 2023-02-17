import { Component } from "react";

class AddTodo extends Component{
    //state is set for initializing the value and late update it
    state={
        value:''
    }

    onSubmit=(event)=>{
        event.preventDefault()
    //this.props.addTodo is a props funtion used to get data from parent to child
        this.props.addTodo(this.state.value)
    //after submit the value should be reset using the below function
        this.setState({value:""})
    }
    onChange=(event)=>{
        //this method is used to check the value from input 
        //  console.log(event.target.value)
        //updating the state from the input value
        this.setState({value:event.target.value})
        
    }


    render(){
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-9">
                            {/* value for intializing the value as empty state */}
                        <input value={this.state.value} className="form-control"type="text" onChange={this.onChange}/>
                        </div>

                        <div className="col-md-3">
                        <button className="btn btn-success" type="submit" >Add Todos</button>
                        </div>
                       
                    </div>
                   
                </form>
            </div>
        )
    }
}
export default AddTodo;