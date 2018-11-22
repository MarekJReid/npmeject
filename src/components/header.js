import React, {Component} from 'react'
import '../css/styles.css'



class Header extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            keywords: '' // this is updated from the this.setState below
        }
    }

    

    inputChangeHandler = (e) => { //magic happens with fat arrow function --- no need to bind, it understand that it refers
                                  // to the parent (Header) class
    // inputChangeHandler(e) { <-- bad code bad boy---- use arrow function above!
        // console.log(e.target.value)
       
        this.setState({  //when bind.this is used - this keyword this refers to the parent class above it
            keywords: e.target.value,  // this takes the target (input field text) value and put it into the state
                                      // which is in this case state
        })
    }
    render (){
        
        console.log(this.state.keywords) //this takes it from the so called database created by react called 'state'
                                         //and console.logs it 
    return (
        <header>
            <div className="logo">Logo</div> 
            <input type="text" onChange={this.inputChangeHandler} />  
            {/* <input type="text" onChange={this.inputChangeHandler.bind(this)} />   bad code :[ use arrow function!*/} 
            <div> {this.state.title} </div>
            <div> {this.state.keywords} </div>
        </header> //this version of this binds it to its inputChangeHandler which then binds it to its parent elemnt of Header
                 
            )
    }
}

export default Header


