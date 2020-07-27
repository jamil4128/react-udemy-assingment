import React, { Component } from 'react';
import ValidationComponent from "./ValidationComponent"
import CharComponent from "./CharComponent"

export class AppList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:"",
        }
    }
    
    changeListener=(event)=>{
        this.setState({
            value:event.target.value,
            }) 
    }
    deleteHandler=(deleteIndex)=>{
        const values=this.state.value.split("")
        values.splice(deleteIndex,1)
        console.log(values)
        const updatedValues=values.join("")
        console.log(updatedValues)
        this.setState({value:updatedValues})
    }
    
  render() {
      const style={
        display:"inline-block",
        padding:"16px",
        textAlign:"center",
        margin:"16px",
        border:"1px solid black"

    }
    
    const texts=this.state.value.split("")
    const textarray=
    <ul>{texts.map((p,index)=>{
        return(
            <li style={style} onClick={()=>this.deleteHandler(index)} key={index}>{p}</li>          
        )
    })}
    </ul>
    return (
      <div>
      <input type="text" onChange={this.changeListener} value={this.state.value}/>
      <p>{this.state.value}</p>
      <p>{this.state.value.length}</p>
      <ValidationComponent length={this.state.value.length}/>
      <CharComponent text={textarray}/>
        
      </div>
    );
  }
}

export default AppList;
