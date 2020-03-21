import React from 'react';

import F1 from '../../assets/F1.jpg';
import NumberFacts from '../../assets/number-facts.jpg';
import PersonalWebsite from '../../assets/personal-website.jpg';

import Card from '../Card';

import './index.scss';

function Cards() {
	const cards = [
		{
			image: F1,
			title: "Open Formula 1",
			description: "Venues of Formula 1 circuits across time.",
			demo: "https://marktoh.github.io/open-f1/",
		},
		{
			image: NumberFacts,
			title: "Number Facts",
			description: "For every number, there is a fact waiting to be discovered.",
			demo: "https://marktoh.github.io/number-facts/",
		},
		{
			image: PersonalWebsite,
			title: "Personal Website",
			description: "The beginning of an identity.",
			demo: "https://marktoh.github.io/info/",
		}
	];

	return cards.map(card => <Card {...card} />);
}

class Body extends React.Component<Props> {

	render() {
		return (
			<div className="Body">
				<div className="Body-Header">
					<div className="Body-Header-Title">
						Innovations
					</div>
				</div>
				<div className="Body-Body">
					<div className="Innovations">
						<Cards />
					</div>
				</div>
			</div>
		)
	}
}

export default Body;