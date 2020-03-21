import React from 'react';
import Profile from '../../assets/profile.jpg';

import { TiDocument as Resume } from 'react-icons/ti';
import { IoLogoGithub as GitHub, IoLogoLinkedin as LinkedIn } from 'react-icons/io';

import './index.scss';

function Information() {
	return(
		<div className="Information">
			<div className="Information-Body">
				<div className="Information-Body-Header">
					<div className="Identity">
						<div className="Name">
							Mark Toh
						</div>
						<div className="Title">
							Software Engineer, Full Stack
						</div>
					</div>
				</div>
				<div className="Description">
					<div>Specializing in rich UI web development</div>
					<div>Member of the board of directors at Mumbo Inc.</div>
					<div>Senior Software Engineer at <a className="Link" href="https://datachat.ai/" target="_blank" rel="noopener noreferrer">DataChat</a></div>
				</div>
				<div className="ContactInfo">
						<a href="https://marktoh.github.io/info/resume.pdf" target="_blank" rel="noopener noreferrer">
							Resume
							<Resume />
						</a>
						<a href="https://www.linkedin.com/in/mark-toh/" target="_blank" rel="noopener noreferrer">
							LinkedIn
							<LinkedIn />
						</a>
						<a href="https://github.com/marktoh" target="_blank" rel="noopener noreferrer">
							GitHub
							<GitHub/>
						</a>
					</div>
			</div>
		</div>
	)
}

function Picture() {
	return (
	<div className="Picture">
		<div className="Picture-Body">
			<img src={Profile} alt="Abc"></img>
		</div>
	</div>)
}

class Header extends React.Component<Props> {
	render() {
		return (
			<div className="Header">
				<div className="Header-Body">
					<Picture />
					<Information />
				</div>
		  </div>
		)
	}
}

export default Header;