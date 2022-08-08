import React, {Component} from 'react';

class ExpForm extends Component{
	constructor(props){
		super(props);
		this.updateExperience=this.updateExperience.bind(this);
		this.deleteForm = this.deleteForm.bind(this);
	}

	updateExperience(e){
		const parent = e.target.parentNode;
		const company=parent.querySelector('#exp-comp').value;
		const position=parent.querySelector('#exp-pos').value;
		const start=parent.querySelector('#exp-start').value;
		const end=parent.querySelector('#exp-end').value;
		const description=parent.querySelector('#exp-desc').value;
		
		this.props.update({start, end, position, company, description}, this.props.listId, 'experience');
	}

	deleteForm(e){
		// Remove form DOM
		e.target.parentNode.remove();
		// Remove from state
		this.props.deleteExp(this.props.listId)
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
				<button id='delete' onClick={this.deleteForm}>Delete</button>
			</div>
		);
	}
}

export default ExpForm;