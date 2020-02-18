import './index.scss';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
const Navigation = () => {
	return (
		<div style={{ fontFamily: 'Rubik' }}>
			<div className="flex">
				<div className="banner-image1"></div>
				<div className="banner-text">
					<h5>Welcome to</h5>
					<h5>Darshan Academy's</h5>
					<br />
					<h3>Spiritual Curriculum</h3>
					<h1>Training Course</h1>
					<h2 style={{ color: '#1cafe6' }}>For Teacher</h2>
					<br />
					<br />
					<button className="btn btn-primary form-submit">
						<span style={{ fontSize: '20px', padding: '10px' }}>
							Learn More
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};
export default Navigation;
