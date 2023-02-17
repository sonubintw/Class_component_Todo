import { Component } from "react";

class SingleTodos extends Component{
    //below function is used to export data from child to parent using (prop.function_name) which is set in parent  
    mkcDelete=()=>{
        this.props.delete(this.props.todoItem.id)
    }
//below function is used to export data from child to parent using (prop.function_name) which is set in parent 
    bcisDone=()=>{
        this.props.isDone(this.props.todoItem.id)
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-1"><strong>{this.props.index}</strong></div>

                    <div className="col-md-1"><input type="checkbox" onChange={this.bcisDone} checked={this.props.todoItem.isDone}/></div>

                    <div style={{textDecoration: this.props.todoItem.isDone ? 'line-through':''}} className="col-md-6"><strong>
                    {/* binding of data */}
                    {this.props.todoItem.value}</strong></div>

                    <div className="col-md-4 mb-1"><button className="btn btn-danger"onClick={this.mkcDelete}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default SingleTodos;