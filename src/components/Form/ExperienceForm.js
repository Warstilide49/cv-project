import React from 'react';

function ExpForm(props){

	const updateExperience = (e) =>{
		const parent = e.target.parentNode;
		const company=parent.querySelector('#exp-comp').value;
		const position=parent.querySelector('#exp-pos').value;
		const start=parent.querySelector('#exp-start').value;
		const end=parent.querySelector('#exp-end').value;
		const description=parent.querySelector('#exp-desc').value;
		
		props.update({start, end, position, company, description}, props.listId, 'experience');
	}

	const deleteForm = (e) =>{
		// Remove form DOM
		e.target.parentNode.remove();
		// Remove from state
		props.deleteExp(props.listId, 'experience')
	}

	return(
		<div>
			<form onChange={updateExperience}>
				<input id='exp-comp' placeholder='Company Name'></input>
				<input id='exp-pos'placeholder='Position'></input>
				<input id='exp-start'placeholder='Date of Joining'></input>
				<input id='exp-end'placeholder='Date of Leaving'></input>
				<textarea id='exp-desc' placeholder='Brief description of work done' rows="4"></textarea>
			</form>
			<button id='delete' onClick={deleteForm}>Delete</button>
		</div>
	);
}

export default ExpForm;