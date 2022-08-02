import React, {Component} from 'react';

class EduForm extends Component{
	constructor(props){
		super(props);
		this.updateEducation=this.updateEducation.bind(this);
	}

	updateEducation(){
		const title=document.querySelector('#edu-title').value;
		const university=document.querySelector('#edu-uni').value;
		const start=document.querySelector('#edu-join').value;
		const end=document.querySelector('#edu-leave').value;
		const grade=document.querySelector('#edu-grade').value;
		
		this.props.addEducation(start, end, title, university, grade);
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
				<button>Delete</button>
			</div>
		);
	}
}

export default EduForm;