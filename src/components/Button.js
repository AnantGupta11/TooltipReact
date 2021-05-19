import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showTooltip:false
        }
    }
    mouseOver=()=>{
        this.setState({
            showTooltip:true
        })
    }
    mouseOut=()=>{
        this.setState({
            showTooltip:false
        })
    }
    
    render () {
        const {showTooltip}=this.state;
        const {dropDownValue} =this.props;
        return (
            <div className="tooltip-component">
                <button className="tooltip-button" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>Press</button>
                    <div className="tooltip-container">                    
                        {
                            showTooltip && 
                            dropDownValue==='top' &&  
                            <div id="tooltip" className="top">
                                    <div className="tooltip-arrow" />
                                    <div className="tooltip-label">Top</div>
                            </div>
                        }                                        
                        {
                            showTooltip && 
                            dropDownValue==='right'&& 
                            <div id="tooltip" className="right">
                                    <div className="tooltip-arrow" />
                                    <div className="tooltip-label">Right</div>
                            </div>
                        } 
                        {
                            showTooltip && 
                            dropDownValue==='down'&& 
                            <div id="tooltip" className="bottom">
                                <div className="tooltip-arrow" />
                                <div className="tooltip-label">Down</div>
                            </div>
                        } 
                        {
                            showTooltip && 
                            dropDownValue==='left'&&  
                            <div id="tooltip" className="left">
                                <div className="tooltip-arrow" />
                                <div className="tooltip-label">Left</div>
                            </div>
                        } 
                </div>
            </div>
        );
    }    
}
export default Button;