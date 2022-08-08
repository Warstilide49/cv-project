import React, {Component} from 'react';
import ReactToPrint from 'react-to-print';
import '../../styles/preview.css'

class Preview extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const {name, email, phone, address} = this.props.main
		return(
			<div className='preview-container'>
				<h2>Preview</h2>
				<div className='resume' ref={el=>(this.componentRef=el)}>
					<div className='top'>
						<div className='preview-name'>{name}</div>
						<div className='preview-general'>
							<p>{email}</p>
							<p>{phone}</p>
							<p>{address}</p>
						</div>
					</div>
					<div className='preview-education'>
						<h4>Education</h4>
						{this.props.main.education.map((input) => {
				            return input 
				        })}
					</div>
					<div className='preview-experience'>
						<h4>Experience</h4>
						{this.props.main.experience.map((input) => {
				            return input 
				        })}
					</div>
				</div>
				<ReactToPrint 
					trigger={()=>{
						return <button id='save-pdf'>Save in PDF format</button>
					}}
					content={()=>this.componentRef}
					documentTitle={name}
				/>
			</div>
		);
	}
}

export default Preview