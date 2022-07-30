import React, {Component} from 'react';

class Form extends Component{
	constructor(props){
		super(props);
		this.update=this.update.bind(this);
	}

	update(){
		const name=document.querySelector('#name').value;
		this.props.changeName(name);
	}

	render(){
		return(
			<div className='form-container'>
				<h2>Form</h2>
				<div className='general'>
					<h4>General Information</h4>
					<form>
						<input id='name' placeholder='Name' onChange={this.update}></input>
						<input placeholder='Email'></input>
						<input placeholder='Phone number'></input>
						<input placeholder='Address'></input>
					</form>
				</div>
				<div className='education'>
					<h4>Education</h4>
					<form>
						<input placeholder='Title of Study'></input>
						<input placeholder='School/College Name'></input>
						<input placeholder='Year of Joining'></input>
						<input placeholder='Year of Leaving'></input>
						<input placeholder='Grade/Percentage'></input>
					</form>
					<button id='add-education'>Add</button>
				</div>
				<div className='experience'>
					<h4>Experience</h4>
					<form>
						<input placeholder='Company Name'></input>
						<input placeholder='Position'></input>
						<input placeholder='Date of Joining'></input>
						<input placeholder='Date of Leaving'></input>
						<textarea placeholder='Brief description of work done' rows="4"></textarea>
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