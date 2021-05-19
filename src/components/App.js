import React from 'react';
import Navbar from './Navbar';
import Button from './Button';
// import Tooltip from './Tooltip';

class  App extends React.Component {
  constructor(){
    super();
      this.state={
        dropDownValue:'left',
      }  
  }
  handleChange=(val)=>{
    this.setState({
      dropDownValue:val
    })
    console.log(val);  
  }
  
  render (){
    const {dropDownValue}=this.state;
    return (
      <div className="App">
        <Navbar sendValue={this.handleChange}/>
        <Button dropDownValue={dropDownValue}/>
        {/* <Tooltip showTooltip={showTooltip} dropDownValue={dropDownValue}/> */}
      </div>
    );
  }
  
}

export default App;
