import React, {Component} from 'react';
import '../../styles/preview.css'

class Preview extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const {name, email, phone, address} = this.props.main
		return(
			<div className='preview-container'>
				<h2>Preview</h2>
				<div className='resume'>
					<div className='top'>
						<div className='preview-name'>{name}</div>
						<div className='preview-general'>
							<p>{email}</p>
							<p>{phone}</p>
							<p>{address}</p>
						</div>
					</div>
					<div className='preview-education'>
						<h4>Education</h4>
						{this.props.main.education.map((input) => {
				            return input 
				        })}
					</div>
					<div className='preview-experience'>
						<h4>Experience</h4>
						{this.props.main.experience.map((input) => {
				            return input 
				        })}
					</div>
				</div>
			</div>
		);
	}
}

export default Preview