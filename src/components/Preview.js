import React, {Component} from 'react';
import '../styles/preview.css'

class Preview extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className='preview-container'>
				<h2>Preview</h2>
				<div className='resume'>
					<div className='top'>
						<div className='preview-name'>{this.props.name}</div>
						<div className='preview-general'></div>
					</div>
					<div className='preview-education'></div>
					<div className='preview-experience'></div>
				</div>
			</div>
		);
	}
}

export default Preview