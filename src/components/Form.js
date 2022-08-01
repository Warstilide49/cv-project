import React, {Component} from 'react';

class Form extends Component{
	constructor(props){
		super(props);
		this.updateGeneral=this.updateGeneral.bind(this);
		this.updateEducation=this.updateEducation.bind(this);
		this.updateExperience=this.updateExperience.bind(this);
	}

	updateGeneral(){
		const name=document.querySelector('#name').value;
		const email=document.querySelector('#email').value;
		const phone=document.querySelector('#phone').value;
		const address=document.querySelector('#address').value;
		
		this.props.changeGeneralInfo(name, email, phone, address);
	}

	updateEducation(){
		const title=document.querySelector('#edu-title').value;
		const university=document.querySelector('#edu-uni').value;
		const start=document.querySelector('#edu-join').value;
		const end=document.querySelector('#edu-leave').value;
		const grade=document.querySelector('#edu-grade').value;
		
		this.props.addEducation(start, end, title, university, grade);
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
			<div className='form-container'>
				<h2>Form</h2>
				<div className='form-general'>
					<h4>General Information</h4>
					<form onChange={this.updateGeneral}>
						<input id='name' placeholder='Name'></input>
						<input id='email' placeholder='Email'></input>
						<input id='phone' placeholder='Phone number'></input>
						<input id='address' placeholder='Address'></input>
					</form>
				</div>
				<div className='form-education'>
					<h4>Education</h4>
					<form onChange={this.updateEducation}>
						<input id='edu-title' placeholder='Title of Study'></input>
						<input id='edu-uni' placeholder='School/College Name'></input>
						<input id='edu-join'placeholder='Year of Joining'></input>
						<input id='edu-leave' placeholder='Year of Leaving'></input>
						<input id='edu-grade' placeholder='Grade/Percentage'></input>
					</form>
					<button id='add-education'>Add</button>
				</div>
				<div className='form-experience'>
					<h4>Experience</h4>
					<form onChange={this.updateExperience}>
						<input id='exp-comp' placeholder='Company Name'></input>
						<input id='exp-pos'placeholder='Position'></input>
						<input id='exp-start'placeholder='Date of Joining'></input>
						<input id='exp-end'placeholder='Date of Leaving'></input>
						<textarea id='exp-desc' placeholder='Brief description of work done' rows="4"></textarea>
					</form>
					<button id='add-experience'>Add</button>
				</div>
				<button>Save in PDF format</button>
				<button>Load Example</button>
			</div>
		);
	}
}

export default Form