import React, {Component} from 'react';

class Education extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const {start, end, title, university, grade} = this.props;
		return(
			<div className='education'>
				<div>{start}-{end}</div>
				<div>
					<h3>{title}</h3>
					<p>{university}</p>
					<p>{grade}</p>	
				</div>
			</div>
		);
	}
}

export default Education; 