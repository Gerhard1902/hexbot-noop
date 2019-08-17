import React, { Component } from 'react';
import Dot from '../Components/dots/dot';
import Pacman from '../Components/pacman/pacman';
import Spinner from '../Components/Spinner/Spinner'
import './container.css'
import axios from 'axios';
class Container extends Component {
    state={

        color1: {},
        color2: {},
        color3: {},
        color4:{},
        loading:false
    }

    componentDidMount(){
		this.reloadHandler();
    }
    
    reloadHandler(){
        this.setState({loading:true});
            axios.get('http://api.noopschallenge.com/hexbot?count=4')
			.then(response=>{
                this.setState({
                    color1: response.data.colors[0].value,
                    color2: response.data.colors[1].value,
                    color3: response.data.colors[2].value,
                    color4: response.data.colors[3].value,
                });
                this.setState({loading:false});
			})
            .catch(error=>{//this.setState({errror:true})
                console.log(error);
                });                
    }
    
    
  render() {
    let x=(  
        <div> 
            <div className= "container">
                <Pacman color={this.state.color1}/>
                <div className="dot">
                   <Dot color={this.state.color2}/>
                    <Dot color={this.state.color3}/>
                    <Dot color={this.state.color4}/>
                </div>
            </div>
            <button onClick={this.reloadHandler.bind(this)}>Reload Colors</button>
        </div> 
        );


    if(this.state.loading){
        x=<Spinner/>;
    }
      
    return (
        <div>
            {x}
        </div>   
    );
  }
}

export default Container;