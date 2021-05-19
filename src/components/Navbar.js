import React from 'react';

class Navbar extends React.Component{
    // const { dropdown,handleChange } = props;
    constructor(props){
        super(props);
        this.state={
            dropdown:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            dropdown:e.target.value

        })
        this.props.sendValue(e.target.value);
        console.log(e.target.value);
    }
    render(){
        return (
            <div className="nav">
                <div className="dropdown">
                    {/* <label for> */}
                    <select className="allmenu" onChange={this.handleChange} >
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                        <option value="top">Top</option>
                        <option value="down">Down</option>
                    </select>
                </div>
            </div>
        );
    }
    
    
}

export default Navbar;