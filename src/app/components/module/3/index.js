import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
import { FormInput } from '../../buttons/index';
class Module3 extends React.Component {
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
			src: '../../../../assets/chapters/3/3.mp4'
		};
		const secondVideo = {
			btn_text: 'CNN Video',
			src:
				'../../../../assets/chapters/3/Understanding_The_Science_Behind_Spirituality_CNN_News.mp4'
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
			<div className="ch-container_4">
				<div className="ch-container__section">
					<h3>Module 3</h3>

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
								<Heading
									isUp={true}
									heading="Introduction To Sant Rajinder Singh Ji Maharaj"
								></Heading>

								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									{!this.state.isVideo && (
										<img src="../../../assets/chapters/3/module-3-image-1(800x400).png" />
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
										Welcome to the next section of the online Spiritual
										Curriculum Teacher Training Course. In this section, you
										will be introduced to the luminary force behind the
										Spiritual Curriculum, Sant Rajinder Singh Ji Maharaj.
									</p>
									<p>
										It is an honour to introduce Sant Rajinder Singh Ji Maharaj,
										founder chairman of Darshan Education Foundation. An IIT
										Madras graduate, Sant Rajinder Singh Ji Maharaj also holds a
										Master of Science degree in Electrical Engineering from the
										Illinois Institute of Technology in Chicago. He has had a
										successful career in the field of computers and
										communication.
									</p>
									<p>
										Today, many are searching for answers to the mystery of the
										purpose of our lives. And many are seeking an experience of
										the soul and of the divine. Sant Rajinder Singh Ji Maharaj
										tells us the answers lie within ourselves and can be
										uncovered through meditation. He has mastered the inner
										spiritual journey and can share with you the bliss, peace,
										and joy within. His unique background in both science and
										spirituality helps him make the meditation practice simple
										and clear. As head of Science of Spirituality
										internationally and Sawan Kirpal Ruhani Mission in India, he
										has been traveling worldwide teaching a meditation practice
										that brings profound inner peace.
									</p>
									<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
										{
											<img src="../../../assets/chapters/3/module-3-image-2(800x400).png" />
										}
									</div>
									<p>
										Sant Rajinder Singh Ji Maharaj is also the author of
										numerous publications, and best-selling books, including,
										Empowering Your Soul through Meditation.
									</p>
									<p>
										{' '}
										His efforts at forging global peace have been recognized by
										religious, social, and civic leaders. He has been bestowed
										with numerous well renowned awards and has received Honorary
										Doctorate Degrees from five prestigious universities and a
										distinguished Leadership Award from Illinois Institute of
										Technology, Chicago for his work in the fields of peace and
										spirituality. He serves as an inspiring example to others in
										the fact that he lives the principles he teaches in his own
										life.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<div className="col-lg-5">
									<Heading
										isUp={true}
										heading="CNN Interview (around 20min)"
									></Heading>
								</div>
								<div style={{ textAlign: 'center' }}>
									{this.state.isVideo1 && videoPlayer2}
								</div>

								<PrimaryButton
									OnClick={e => {
										this.playVideo(e, '2');
									}}
									btn_text={secondVideo.btn_text}
								></PrimaryButton>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Resources"></Heading>
								<div className="text-black padding-t-10">
									<p>
										For beautiful articles and uplifting videos by Sant Rajinder
										Singh Ji Maharaj please visit and subscribe for latest
										updates:
									</p>
									<ul className="list-circle text-black-bold">
										<li>
											<a style={{ fontStyle: 'italic' }} href="www.sos.org">
												www.sos.org
											</a>
										</li>
										<li>
											<a
												style={{ fontStyle: 'italic' }}
												href="https://www.youtube.com/user/SantRajinderSingh"
											>
												https://www.youtube.com/user/SantRajinderSingh
											</a>
										</li>
										<li>
											<a
												style={{ fontStyle: 'italic' }}
												href="https://www.facebook.com/SantRajinderSinghJiMaharaj"
											>
												https://www.facebook.com/SantRajinderSinghJiMaharaj
											</a>
										</li>
										<li> add instagram link Add links of Instagram</li>
									</ul>
								</div>
								<div className="col-lg-3" style={{ paddingLeft: '0px' }}>
									<Heading isUp={true} heading="Activity"></Heading>
								</div>
								<div style={{ paddingTop: '20px' }}>
									<span classNam="text-black">
										See some of the internet resources mentioned above and
										choose one quote by Sant Rajinder Singh Ji Maharaj that
										inspires you and write it in the box:
									</span>
								</div>
								<br />
								<FormInput
									type="textarea"
									value={this.state.password}
									classes="form-input"
									onChange={this.handleChange}
									placeholder="Write Here"
								/>
								<div style={{ paddingTop: '20px' }}>
									<span className="text-blue-light"> Optional</span>
									<p className="text-black">
										Check out your school library for books by Sant Rajinder
										Singh Ji Maharaj and read one.
									</p>
								</div>
								<span className="text-blue-light">
									Congratulations you have completed Module 3, Introduction to
									Sant Rajinder Singh Ji Maharaj.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Module3;
