import React from 'react';

function EduForm(props){

	const updateEducation = (e) =>{
		const parent = e.target.parentNode;
		const title=parent.querySelector('#edu-title').value;
		const university=parent.querySelector('#edu-uni').value;
		const start=parent.querySelector('#edu-join').value;
		const end=parent.querySelector('#edu-leave').value;
		const grade=parent.querySelector('#edu-grade').value;
		
		props.update({start, end, title, university, grade}, props.listId, 'education');
	}

	const deleteForm = (e) =>{
		// Remove form DOM
		e.target.parentNode.remove();
		// Remove from state
		props.deleteEdu(props.listId, 'education')
	}

	return(
		<div>
			<form onChange={updateEducation}>
				<input id='edu-title' placeholder='Title of Study'></input>
				<input id='edu-uni' placeholder='School/College Name'></input>
				<input id='edu-join'placeholder='Year of Joining'></input>
				<input id='edu-leave' placeholder='Year of Leaving'></input>
				<input id='edu-grade' placeholder='Grade/Percentage'></input>
			</form>
			<button id='delete' onClick={deleteForm}>Delete</button>
		</div>
	);
}

export default EduForm;