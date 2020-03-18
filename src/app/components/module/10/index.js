import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
class Module10 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isVideo: false, isVideo1: false, isVideo2: false };
		this.playVideo = this.playVideo.bind(this);
	}
	playVideo(e, param) {
		switch (param) {
			case '1':
				this.setState({
					isVideo: !this.state.isVideo,
					isVideo1: false,
					isVideo2: false
				});
				break;
			case '2':
				this.setState({
					isVideo: false,
					isVideo1: !this.state.isVideo1,
					isVideo2: false
				});
				break;
			case '3':
				this.setState({
					isVideo: false,
					isVideo1: false,
					isVideo2: !this.state.isVideo2
				});
				break;
		}
	}

	render() {
		const welcomeVideo = {
			btn_text: 'Welcome Video',
			src: '../../../../assets/chapters/8/8.mp4'
		};
		const secondVideo = {
			btn_text: 'Watch a video on 10 Benefits of Meditation.',
			src: '../../../../assets/chapters/4/WM-10 Reasons of Meditation.mp4'
		};
		const thirdVideo = {
			btn_text: 'Great Indian Schools, by India Today Video',
			src: '../../../../assets/chapters/1/2.mp4'
		};
		let videoPlayer = '';
		let videoPlayer2 = '';
		let videoPlayer3 = '';
		if (this.state.isVideo) {
			videoPlayer = <VideoPlayer src={welcomeVideo.src}></VideoPlayer>;
		}
		if (this.state.isVideo1) {
			videoPlayer2 = <VideoPlayer src={secondVideo.src}></VideoPlayer>;
		}
		if (this.state.isVideo2) {
			videoPlayer3 = <VideoPlayer src={thirdVideo.src}></VideoPlayer>;
		}
		return (
			<div className="ch-container_11">
				<div className="ch-container__section">
					<h3>Module 10</h3>
					<a
						style={{ height: '40px', width: '200px', top: '50%' }}
						className="carousel-control-prev"
						href="#demo"
						data-slide="prev"
					>
						<span className="carousel-previous-icon"></span>
					</a>
					<a
						style={{ height: '40px', width: '200px', top: '50%' }}
						className="carousel-control-next"
						href="#demo"
						data-slide="next"
					>
						<span className="carousel-next-icon"></span>
					</a>
					<div id="demo" className="carousel slide" data-interval="false">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<Heading isUp={true} heading="Evaluation"></Heading>

								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									{!this.state.isVideo && (
										<img src="../../../assets/chapters/10/module-10-image-1(800x400).png" />
									)}
									{this.state.isVideo && videoPlayer}
								</div>
								<div className="text-black padding-t-10">
									<p>
										Welcome to the next module on Evaluation. In this module you
										will learn how to evaluate the student’s progress in the
										spiritual curriculum. The students are evaluated under four
										major headings namely:
									</p>
									<ul>
										<li>• written test</li>
										<li>• activities and projects</li>
										<li>• participation</li>
										<li>• class behaviour</li>
									</ul>
									<p>
										In this way the child is evaluated in an overall manner. You
										will get to know the various projects used for assessment in
										different classes and how to write a Spiritual Curriculum
										written test. You will also see the criteria for recording
										participation and positive behavior in this module.
									</p>
									<p>Let us now have a closer look at the module.</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Activities and Projects for Evaluation"
								></Heading>
								<div className="text-black padding-t-10">
									<p>
										Various projects and activities have been put together that
										can be used for assessment of the students’ understanding of
										the Spiritual Curriculum. Click on different classes to see
										Spiritual Curriculum projects and activities and how to
										evaluate them
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Classroom Behaviour and Participation"
								></Heading>
								<div className="text-black padding-t-10">
									<p>
										See the criteria for evaluating Participation and Class
										Behaviour
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="How to write a Spiritual Curriculum Written Test?"
								></Heading>
								<div className="text-black padding-t-10">
									<p>
										See the blueprints on how to write a Spiritual Curriculum
										Question Paper
									</p>
									<p>
										Congratulations, you have now completed module 11 on
										Evaluation. Have a discussion with your coach/teacher
										trainer to clarify any questions related to this module.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Module10;
