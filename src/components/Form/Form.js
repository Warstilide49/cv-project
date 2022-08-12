import React, {useState} from 'react';
import EduForm from './EducationForm'
import ExpForm from './ExperienceForm'
import { v4 as uuidv4 } from 'uuid';

function Form(props){

	const [education, setEducation] = useState([<EduForm update={props.update} deleteEdu={props.delete} key={0} listId={0}/>]);
	const [experience, setExperience] = useState([<ExpForm update={props.update} deleteExp={props.delete} key={0} listId={0}/>]);
	
	const updateGeneral = () => {
		const name=document.querySelector('#name').value;
		const email=document.querySelector('#email').value;
		const phone=document.querySelector('#phone').value;
		const address=document.querySelector('#address').value;
		
		props.changeGeneralInfo(name, email, phone, address);
	}

	const addBlockEdu = () =>{
		const new_id=uuidv4()
		setEducation([...education, <EduForm update={props.update} deleteEdu={props.delete} key={uuidv4()} listId={new_id}/>])
		props.addEducation(new_id, 'education')
	}

	const addBlockExp = () =>{
		const new_id=uuidv4()
		setExperience([...experience, <ExpForm update={props.update} deleteExp={props.delete} key={uuidv4()} listId={new_id}/>])
		props.addExperience(new_id, 'experience')
	}

	return(
		<div className='form-container'>
			<h2>Form</h2>
			<div className='form-general'>
				<h4>General Information</h4>
				<form onChange={updateGeneral}>
					<input id='name' placeholder='Name'></input>
					<input id='email' placeholder='Email'></input>
					<input id='phone' placeholder='Phone number'></input>
					<input id='address' placeholder='Address'></input>
				</form>
			</div>
			<div className='form-education'>
				<div className='spaced-header'>
					<h4>Education</h4>
					<button id='add-education' onClick={addBlockEdu}>Add</button>
				</div>
				<div className='form-blocks'>
					{education.map((input) => {
				            return input 
				    })}
				</div>
			</div>
			<div className='form-experience'>
				<div className='spaced-header'>
					<h4>Experience</h4>
					<button id='add-education' onClick={addBlockExp}>Add</button>
				</div>
				<div className='form-blocks'>
					{experience.map((input) => {
				            return input 
				    })}
				</div>
			</div>
		</div>
	);
}

export default Form