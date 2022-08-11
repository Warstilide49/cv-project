import React from 'react';

function Education(props){
	const {start, end, title, university, grade} = props;
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

export default Education; 