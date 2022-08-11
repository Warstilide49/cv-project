import React from 'react';

function Experience(props){
	const {start, end, position, company, description} = props;
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

export default Experience; 