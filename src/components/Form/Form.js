import React, {Component} from 'react';
import EduForm from './EducationForm'
import ExpForm from './ExperienceForm'
import { v4 as uuidv4 } from 'uuid';

class Form extends Component{
	constructor(props){
		super(props);
		this.state={
			education:[<EduForm update={this.props.update} deleteEdu={this.props.delete} key={0} listId={0}/>],
			experience:[<ExpForm update={this.props.update} deleteExp={this.props.delete} key={0} listId={0}/>],
		}
		this.updateGeneral=this.updateGeneral.bind(this);
		this.addBlockEdu=this.addBlockEdu.bind(this);	
		this.addBlockExp=this.addBlockExp.bind(this);	
	}

	updateGeneral(){
		const name=document.querySelector('#name').value;
		const email=document.querySelector('#email').value;
		const phone=document.querySelector('#phone').value;
		const address=document.querySelector('#address').value;
		
		this.props.changeGeneralInfo(name, email, phone, address);
	}

	addBlockEdu(){
		const new_id=uuidv4()
		this.setState({
			education:[...this.state.education, <EduForm update={this.props.update} deleteEdu={this.props.delete} key={uuidv4()} listId={new_id}/>]
		})
		this.props.addEducation(new_id, 'education')
	}

	addBlockExp(){
		const new_id=uuidv4()
		this.setState({
			experience:[...this.state.experience, <ExpForm update={this.props.update} deleteExp={this.props.delete} key={uuidv4()} listId={new_id}/>]
		})
		this.props.addExperience(new_id, 'experience')
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
					<div className='spaced-header'>
						<h4>Education</h4>
						<button id='add-education' onClick={this.addBlockEdu}>Add</button>
					</div>
					<div className='form-blocks'>
						{this.state.education.map((input) => {
					            return input 
					    })}
					</div>
				</div>
				<div className='form-experience'>
					<div className='spaced-header'>
						<h4>Experience</h4>
						<button id='add-education' onClick={this.addBlockExp}>Add</button>
					</div>
					<div className='form-blocks'>
						{this.state.experience.map((input) => {
					            return input 
					    })}
					</div>
				</div>
			</div>
		);
	}
}

export default Form