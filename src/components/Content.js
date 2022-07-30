import React, {Component} from 'react';
import Form from './Form'
import Preview from './Preview'
import '../styles/content.css'


class Content extends Component{
	constructor(props){
		super(props);
		this.state={
			trial_name:'',
		}
		this.changeName=this.changeName.bind(this);
	}

	changeName(newName){
		this.setState({
			trial_name: newName,
		});
	}

	render(){
		return(
			<div className='main-container'>
				<Form changeName={this.changeName}/>
				<Preview name={this.state.trial_name}/>
			</div>
		);
	}
}

export default Content