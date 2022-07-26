import React, {Component} from 'react';

class Experience extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const {start, end, position, company, description} = this.props;
		return(
			<div className='experience'>
				<div className='preview-timeline'>{start}-{end}</div>
				<div>
					<h3>{position}</h3>
					<p className='preview-company'>{company}</p>
					<p>{description}</p>	
				</div>
			</div>
		);
	}
}

export default Experience; 