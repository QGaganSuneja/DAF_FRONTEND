import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
import { FormInput } from '../../buttons/index';
class Module2 extends React.Component {
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
			src: '../../../../assets/chapters/1/2.mp4'
		};
		const secondVideo = {
			btn_text: 'Video',
			src: '../../../../assets/chapters/1/2.mp4'
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
			<div className="ch-container_3">
				<div className="ch-container__section">
					<h3>Module 2</h3>

					<a className="carousel-control-prev" href="#demo" data-slide="prev">
						<span className="carousel-control-prev-icon"></span>
					</a>
					<a className="carousel-control-next" href="#demo" data-slide="next">
						<span className="carousel-control-next-icon"></span>
					</a>
					<div id="demo" className="carousel slide" data-interval="false">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<Heading
									isUp={true}
									heading="Introduction To Darshan Academy"
								></Heading>

								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									{!this.state.isVideo && (
										<img src="../../../assets/chapters/2/module-2-image-1(800x400).png" />
									)}
									{this.state.isVideo && videoPlayer}
								</div>

								<PrimaryButton
									OnClick={e => {
										this.playVideo(e, '1');
									}}
									btn_text={welcomeVideo.btn_text}
								></PrimaryButton>
								<div className="text-black padding-t-10">
									<p>
										Darshan Academy has a unique holistic educational system
										that turns out students who are well-rounded and developed
										in all areas of life: physically, mentally, emotionally and
										spiritually. The schools offer a strong academic curriculum
										coupled with spiritual education
									</p>
									<p>
										They are named after the great saint, Sant Darshan Singh Ji
										Maharaj, who spread the message of human unity and peace
										throughout the world. What makes these schools unique is
										that there is a daily period at each grade level for the
										spiritual curriculum. This includes time daily for silent
										meditation. Students learn to be kind, giving and caring
										people
									</p>
									<p>
										Darshan Academies have received numerous prestigious awards
										for their excellence in education over the years, including
										number one CBSE school in the city, and number one school in
										holistic education from Education for Today. Students also
										regularly win prizes in different fields at the national and
										international level, and staff members have been honoured
										with several State Teacher Awards.
									</p>
									<p>
										The motto of the school is creating generations of
										peacemakers, highlighting the vision of the founder of
										Darshan Academy, Sant Rajinder Singh Ji Maharaj, who said:
										Each student who learns how to be peaceful adds one more
										person to bring peace into this world.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Brochure Darshan Academy"
								></Heading>
								<div className="text-black padding-t-10 ">
									<p>
										Read this Brochure about darshan academy to find out some of
										the highlights of the school
									</p>
									<p className="text-blue-light">
										Brochure Darshan Academy.PDF
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="20th Anniversary Talk by Sant Rajinder Singh Ji Maharaj at Talkatora Video"
								></Heading>

								<div style={{ padding: '10% 0% 0% 0%', textAlign: 'center' }}>
									{this.state.isVideo1 && videoPlayer2}
								</div>

								<PrimaryButton
									OnClick={e => {
										this.playVideo(e, '2');
									}}
									btn_text={secondVideo.btn_text}
								></PrimaryButton>
								<div className="text-black padding-t-10">
									<p>
										Watch this video of Darshan Academy featured on the Great
										Indian Schools TV Series by India Today.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Great Indian Schools, by India Today Video"
								></Heading>

								<div>{this.state.isVideo2 && videoPlayer3}</div>
								<div className="text-black padding-t-10">
									<p>
										Watch this video of Darshan Academy featured on the Great
										Indian Schools TV Series by India Today.
									</p>
								</div>
								<PrimaryButton
									OnClick={e => {
										this.playVideo(e, '3');
									}}
									btn_text={thirdVideo.btn_text}
								></PrimaryButton>
								<div className="text-black padding-t-20">
									<p className="text-blue-bold"> True Or False:</p>
									<ul className="list-circle">
										<li>
											Darshan Academy is named after Sant Kirpal Singh Ji
											Maharaj.
										</li>
										<li>
											The motto of Darshan Academy is: Creating Generations of
											Makers.
										</li>
										<li>
											Darshan Academy offers holistic education for body, mind
											and soul.
										</li>
										<li>Students at Darshan Academy meditate once a week.</li>
										<li> Darshan Academy students learn ethical values.</li>
										<li>Students engage in selfless and community service. </li>
										<li>
											The main method of teaching the Spiritual Curriculum is
											through lectures.
										</li>
										<li>
											Roti Bank is an initative where students save money by
											putting it in a bank.
										</li>
										<li>There are 19 Darshan Academies in India.</li>
									</ul>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Activity"></Heading>
								<p className="text-black padding-t-10">
									Check out the Darshan Academy website:
									<a className="text-blue-bold" href="www.darshanacademy.org">
										www.darshanacademy.org
									</a>
									. Find one interesting fact about Darshan Academy and write it
									here:
								</p>
								<FormInput
									type="textarea"
									value={this.state.password}
									classes="form-input"
									onChange={this.handleChange}
								/>

								<p className="text-blue-light">
									Congratulations, you have completed Module 2, Introduction to
									Darshan Academy
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Module2;
