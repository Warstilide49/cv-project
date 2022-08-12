import React, {useState} from 'react';
import Form from './Form/Form'
import Preview from './Preview/Preview'
import Education from './Preview/Education'
import Experience from './Preview/Experience'
import '../styles/content.css'

function Content(props){

	const [main_object, setMainObject] = useState({
		name:'',
		email:'',
		phone:'',
		address:'',
		education:[<Education start={''} end={''} title={''} university={''} grade={''} key={0} listId={0}/>],
		experience:[<Experience start={''} end={''} position={''} company={''} description={''} key={0} listId={0}/>],
	});

	const changeGeneralInfo = (name, email, phone, address) => {
		setMainObject({
			...main_object,
			name,
			email,
			phone,
			address,
		})
	}

	const update = (object, listId, section) =>{
		setMainObject({
			...main_object,
			education: main_object.education.map(item=>{
				if (section==='education' && item.props.listId===listId){
					return (<Education start={object.start} end={object.end} title={object.title} university={object.university} grade={object.grade} key={listId} listId={listId}/>)
				}
				else{
					return item
				}
			}),
			experience: main_object.experience.map(item=>{
				if (section==='experience' && item.props.listId===listId){
					return (<Experience start={object.start} end={object.end} position={object.position} company={object.company} description={object.description} key={listId} listId={listId}/>)
				}
				else{
					return item
				}
			})
		})
	}

	const add = (listId, section) => {
		if(section==='education'){
			setMainObject({
				...main_object,
				education:[...main_object.education, <Education start={''} end={''} title={''} university={''} grade={''} key={listId} listId={listId}/>]
			})
		}
		else{
			setMainObject({
				...main_object,
				experience:[...main_object.experience, <Experience start={''} end={''} position={''} company={''} description={''} key={listId} listId={listId}/>]
			})
		}
	}

	const deleteSec = (listId, section) =>{
		if(section==='education'){
			setMainObject({
				...main_object,
				education: main_object.education.filter((item)=> { 
	        		return item.props.listId !== listId 
	    		})
			})
		}
		else{
			setMainObject({
				...main_object,
				experience: main_object.experience.filter((item)=> { 
	        		return item.props.listId !== listId 
	    		})
			});
		}
	}

	return(
		<div className='main-container'>
			<Form changeGeneralInfo={changeGeneralInfo} update={update} addEducation={add} delete={deleteSec} addExperience={add}/>
			<Preview main={main_object}/>
		</div>
	);
}

export default Content