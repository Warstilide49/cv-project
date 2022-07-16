import React, {Component} from 'react';
import Form from './Form'
import Preview from './Preview'
import '../styles/content.css'


class Content extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className='main-container'>
				<Form/>
				<Preview/>
			</div>
		);
	}
}

export default Content