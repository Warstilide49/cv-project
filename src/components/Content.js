import React, {Component} from 'react';
import Form from './Form'
import Preview from './Preview'
import Education from './Education'
import Experience from './Experience'
import '../styles/content.css'


class Content extends Component{
	constructor(props){
		super(props);
		this.state={
			main_object:{
				name:'',
				email:'',
				phone:'',
				address:'',
				education:[],
				experience:[],
			},
		}
		this.changeGeneralInfo=this.changeGeneralInfo.bind(this);
		this.addEducation=this.addEducation.bind(this);
		this.addExperience=this.addExperience.bind(this);
	}

	changeGeneralInfo(name, email, phone, address){
		this.setState({
			main_object: {
				...this.state.main_object,
				name,
				email,
				phone,
				address,
			}	
		});
	}

	addEducation(start, end, title, university, grade){
		const main = this.state.main_object;
		this.setState({
			main_object:{
				...main,
				education:[<Education start={start} end={end} title={title} university={university} grade={grade} key={main.education.length}/>],
			}
		});
	}

	addExperience(start, end, position, company, description){
		const main = this.state.main_object;
		this.setState({
			main_object:{
				...main,
				experience:[<Experience start={start} end={end} position={position} company={company} description={description} key={main.experience.length}/>],
			}
		});
	}


	render(){
		return(
			<div className='main-container'>
				<Form changeGeneralInfo={this.changeGeneralInfo} addEducation={this.addEducation} addExperience={this.addExperience}/>
				<Preview main={this.state.main_object}/>
			</div>
		);
	}
}

export default Content