import './index.scss';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
const Navigation = () => {
	const braceOpen = '{';
	const braceClose = '}';
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
			<div className="banner">
				<div className="flex-container">
					<div style={{ padding: '130px', flexBasis: '50%' }}>
						<h1 style={{ color: 'white' }}>
							Train to Teach generations of Peacemakers
						</h1>
					</div>
					<div style={{ padding: '170px', flexGrow: 1 }}>
						<button
							style={{ backgroundColor: 'white', color: '#2e8ecd' }}
							className="btn col-lg-8 btn-primary form-submit"
						>
							Begin the Course
						</button>
					</div>
				</div>
			</div>
			<div className="ch-super-container">
				<div
					className="flex-container flex-wrap justify-space"
					ytr485ti
					style={{ padding: '50px' }}
				>
					<div className="navigation-card flex-base-25">
						<p>Philosophy &amp; purpose of Spiritual Curriculum </p>
					</div>
					<div className="navigation-card flex-base-25">
						<p>Introduction to Darshan Academy</p>
					</div>
					<div className="navigation-card flex-base-25">
						<p>Introduction to Sant Rajinder Singh Ji Maharaj</p>
					</div>
					<div className="navigation-card flex-base-25">
						<p>Introduction to Meditation</p>
					</div>
					<div className="navigation-card flex-base-25">
						<p>Key Priciples of Spirituality</p>
					</div>
					<div className="navigation-card flex-base-25">
						<p>Introduction to Vegitarian Diet</p>
					</div>
					<div className="navigation-card flex-base-25">
						<p>
							Spiritual Curriculum for pre primary {braceOpen} Level 0 1 and 2{' '}
							{braceClose}
						</p>
					</div>
					<div className="navigation-card flex-base-25">
						<p>Spiritual Curriculum Grades 1 to 8</p>
					</div>
					<div className="navigation-card flex-base-25">
						<p>Spiritual Curriculum Grades 9 to 12</p>
					</div>
					<div className="navigation-card flex-base-25">
						<p>Evaluation</p>
					</div>
					<div className="navigation-card flex-base-25">
						<p>Creating a Welcoming Environment</p>
					</div>
					<div className="navigation-card flex-base-25">
						<p>Teaching Techniques</p>
					</div>
					<div className="navigation-card flex-base-25">
						<p>Lessons by Teachers</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Navigation;
