import React from 'react';

import { FaPlay } from 'react-icons/fa';

import './index.scss'

type Props = {
	image: any,
	title: string,
	description: string,
	demo: string,
}
class Card extends React.Component<Props> {
	render() {
		const { image, title, description, demo } = this.props;

		return (
			<div className="Card">
				<a className="Card-Body" href={demo} target="_blank" rel="noopener noreferrer">
					<div className="Card-Jumbotron">
						<img src={image} alt={title}></img>
					</div>
					<div className="Card-Information">
						<div className="Card-Title">
							{title}
						</div>
						<div className="Card-Description">
							{description}
						</div>
						<div className="Card-Footer">
							<a className="Link" href={demo} target="_blank" rel="noopener noreferrer">
								<FaPlay />
								Demo
							</a>
						</div>
					</div>
				</a>
			</div>
		)
	}
}

export default Card;