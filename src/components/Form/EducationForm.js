import React, {Component} from 'react';

class EduForm extends Component{
	constructor(props){
		super(props);
		this.updateEducation=this.updateEducation.bind(this);
		this.deleteForm = this.deleteForm.bind(this);
	}

	updateEducation(e){
		const parent = e.target.parentNode;
		const title=parent.querySelector('#edu-title').value;
		const university=parent.querySelector('#edu-uni').value;
		const start=parent.querySelector('#edu-join').value;
		const end=parent.querySelector('#edu-leave').value;
		const grade=parent.querySelector('#edu-grade').value;
		
		this.props.update({start, end, title, university, grade}, this.props.listId, 'education');
	}

	deleteForm(e){
		// Remove form DOM
		e.target.parentNode.remove();
		// Remove from state
		this.props.deleteEdu(this.props.listId)
	}

	render(){
		return(
			<div>
				<form onChange={this.updateEducation}>
					<input id='edu-title' placeholder='Title of Study'></input>
					<input id='edu-uni' placeholder='School/College Name'></input>
					<input id='edu-join'placeholder='Year of Joining'></input>
					<input id='edu-leave' placeholder='Year of Leaving'></input>
					<input id='edu-grade' placeholder='Grade/Percentage'></input>
				</form>
				<button id='delete' onClick={this.deleteForm}>Delete</button>
			</div>
		);
	}
}

export default EduForm;