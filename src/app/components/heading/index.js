import './heading.scss';
const Heading = props => {
	const upUrl = '../../../assets/icons/icons_1.png';
	const downUrl = '../../../assets/icons/icons_2.png';
	const iconUrl = props.isUp ? upUrl : downUrl;
	return (
		<div className="heading__container">
			<div className="heading__icon">
				<img src={iconUrl} />
			</div>
			<div className="heading__text">{props.heading}</div>
		</div>
	);
};
export default Heading;
