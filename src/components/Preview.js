import React, {Component} from 'react';

class Preview extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className='preview-container'>
				<h2>Preview</h2>
				<div className='resume'>
					<div className='name'></div>
					<div className='general'></div>
					<div className='education'></div>
					<div className='experience'></div>
				</div>
			</div>
		);
	}
}

export default Preview