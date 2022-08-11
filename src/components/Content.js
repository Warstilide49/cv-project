import React, {Component} from 'react';
import Form from './Form/Form'
import Preview from './Preview/Preview'
import Education from './Preview/Education'
import Experience from './Preview/Experience'
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
				education:[<Education start={''} end={''} title={''} university={''} grade={''} key={0} listId={0}/>],
				experience:[<Experience start={''} end={''} position={''} company={''} description={''} key={0} listId={0}/>],
			},
		}
		this.changeGeneralInfo=this.changeGeneralInfo.bind(this);
		this.update=this.update.bind(this);
		this.add = this.add.bind(this);
		this.delete = this.delete.bind(this);
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

	update(object, listId, section){
		const main = this.state.main_object;
		this.setState({
			main_object:{
				...main,
				education: main.education.map(item=>{
					if (section==='education' && item.props.listId===listId){
						return (<Education start={object.start} end={object.end} title={object.title} university={object.university} grade={object.grade} key={listId} listId={listId}/>)
					}
					else{
						return item
					}
				}),
				experience: main.experience.map(item=>{
					if (section==='experience' && item.props.listId===listId){
						return (<Experience start={object.start} end={object.end} position={object.position} company={object.company} description={object.description} key={listId} listId={listId}/>)
					}
					else{
						return item
					}
				})
			}
		});
	}

	add(listId, section){
		const main = this.state.main_object;
		if(section==='education'){
			this.setState({
				main_object:{
					...main,
					education:[...main.education, <Education start={''} end={''} title={''} university={''} grade={''} key={listId} listId={listId}/>]
				}
			})
		}
		else{
			this.setState({
				main_object:{
					...main,
					experience:[...main.experience, <Experience start={''} end={''} position={''} company={''} description={''} key={listId} listId={listId}/>]
				}
			})
		}
	}

	delete(listId, section){
		const main = this.state.main_object;
		if(section==='education'){
			this.setState({
				main_object: {
					...main,
					education: main.education.filter((item)=> { 
		        		return item.props.listId !== listId 
		    		})
				}
		    });
		}
		else{
			this.setState({
				main_object: {
					...main,
					experience: main.experience.filter((item)=> { 
		        		return item.props.listId !== listId 
		    		})
				}
		    });
		}
	}

	render(){
		return(
			<div className='main-container'>
				<Form changeGeneralInfo={this.changeGeneralInfo} update={this.update} addEducation={this.add} delete={this.delete} addExperience={this.add}/>
				<Preview main={this.state.main_object}/>
			</div>
		);
	}
}

export default Content