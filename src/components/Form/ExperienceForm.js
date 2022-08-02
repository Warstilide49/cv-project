import React, {Component} from 'react';

class EduForm extends Component{
	constructor(props){
		super(props);
		this.updateExperience=this.updateExperience.bind(this);
	}

	updateExperience(){
		const company=document.querySelector('#exp-comp').value;
		const position=document.querySelector('#exp-pos').value;
		const start=document.querySelector('#exp-start').value;
		const end=document.querySelector('#exp-end').value;
		const description=document.querySelector('#exp-desc').value;
		
		this.props.addExperience(start, end, position, company, description);
	}

	render(){
		return(
			<div>
				<form onChange={this.updateExperience}>
					<input id='exp-comp' placeholder='Company Name'></input>
					<input id='exp-pos'placeholder='Position'></input>
					<input id='exp-start'placeholder='Date of Joining'></input>
					<input id='exp-end'placeholder='Date of Leaving'></input>
					<textarea id='exp-desc' placeholder='Brief description of work done' rows="4"></textarea>
				</form>
				<button>Delete</button>
			</div>
		);
	}
}

export default EduForm;