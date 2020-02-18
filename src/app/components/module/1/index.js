import React from 'react';
import '../module.scss';
import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
class Module1 extends React.Component {
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
			btn_text: 'Video Introduction to Education of a Peaceful World',
			src: '../../../../assets/chapters/1/2.mp4'
		};
		let videoPlayer = '';
		let videoPlayer2 = '';
		if (this.state.isVideo) {
			videoPlayer = <VideoPlayer src={welcomeVideo.src}></VideoPlayer>;
		}
		if (this.state.isVideo1) {
			videoPlayer2 = <VideoPlayer src={secondVideo.src}></VideoPlayer>;
		}
		return (
			<div className="ch-container_2">
				<div className="ch-container__section">
					<h3>Module 1</h3>

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
									heading="Philosophy and Purpose of the Spiritual Curriculum"
								></Heading>

								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									{!this.state.isVideo && (
										<img src="../../../assets/chapters/1/module-1-image-2(800x400).jpg" />
									)}
									{videoPlayer}
								</div>

								<PrimaryButton
									OnClick={e => {
										this.playVideo(e, '1');
									}}
									btn_text={welcomeVideo.btn_text}
								></PrimaryButton>
								<div className="text-black padding-t-10">
									<p>
										The spiritual curriculum is designed to develop a strong
										ethical and spiritual foundation in students. The course is
										open to students of all faiths and backgrounds and focuses
										on how to respect others, and how to get along with others
									</p>
									<p>
										It also teaches meditation as a way to develop
										concentration, reduce stress, to know one’s inner self, find
										inner peace and happiness, and to bring about outer peace.
									</p>
									<p>
										The course teaches life skills that will help students deal
										with the pressures that might come to their life. Students
										learn communication and peaceful conflict resolution skills.
										Through projects in community service, helping people in
										need, and improving the ecological environment, students
										develop the concept of using their knowledge to make
										positive contributions to society.
									</p>
									<p>
										The lessons in the Spiritual Curriculum are designed for use
										with an interactive teaching technique. Student involvement,
										class participation, discussion, and cooperative learning
										are important in the instructional delivery of the course.
									</p>
									<p>
										Enjoy seeing some impressions of the Spiritual Curriculum in
										action in this PPT that highlights the philosophy and
										purpose.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="PTT Philosophy and Purpose of the Spiritual Curriculum"
								></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									{!this.state.isVideo1 && (
										<img src="../../../assets/chapters/1/module-1-image-2(800x400).jpg" />
									)}
									{videoPlayer2}
								</div>
								<PrimaryButton
									OnClick={e => {
										this.playVideo(e, '2');
									}}
									btn_text={secondVideo.btn_text}
								></PrimaryButton>
								<div className="text-black padding-t-10 ">
									<p>
										The following talk “Education for a Peaceful World” by Sant
										Rajinder Singh Ji Maharaj was delivered during his visit to
										Columbia where he was awarded the Medal of Cultural Merit by
										the Ministry of Education of Columbia. In his address to the
										Cabinet of Ministers in June 1990, Maharaj Ji gave a
										landmark speech outlining his vision of how spiritual
										education of children could contribute to a peaceful world.
										The discourse was produced as a booklet. These thoughts laid
										the building blocks of the Darshan Academy schools and
										shaped the concept of a new school model.{' '}
									</p>
									<p>
										our next assignment is to read the talk “Education for a
										Peaceful World” and answer some questions related to the
										text at the end.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Assignment:  Read these inspiring quotes on education"
								></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									{!this.state.isVideo2 && (
										<img src="../../../assets/chapters/1/module-1-image-2(800x400).jpg" />
									)}
									{videoPlayer2}
								</div>
								<div
									className="text-black padding-20"
									style={{ backgroundColor: '#f3e6a2' }}
								>
									<p>
										The real aim of education is to develop the character and
										individuality of a pupil, his or her mind, will and soul
										power. The best education is that which teaches us that the
										end of knowledge is service.
										<br />
										-Sant Kirpal Singh Ji Maharaj
									</p>
								</div>
								<div className="text-black padding-t-10">
									<p>
										Irrespective of whether the children leave the schools to
										get into the arts’ fields, the sciences and become
										professionals in whatever areas their skills will take them,
										they all are going to be having to deal with life itself -
										dealing with our parents, dealing with our families, dealing
										with our neighbours, dealing with others at work. These
										skills are generally not given in an education process,
										because we do not focus that much attention on them. We just
										think that people learn by themselves. But if we take some
										time and put in some effort into that direction, then
										hopefully from a young age children would be much more
										equipped to handle the pressures that might come to their
										lives.
										<br />
										-Sant Rajinder Singh Ji Maharaj
									</p>
									<p>
										Sant Kirpal Singh Ji Maharaj often said that on spiritual
										health depends the health of our body and our mind. So if
										the spirit is not well, if the spirit is not enhanced, then
										all the enhancement in the intellectual realm is really not
										going to help us. As the students go through these
										Academies, we want to be sure that they recognize that their
										true self is not the body, is not the intellect, but the
										soul which is giving life to the body.
										<br />
										<br />
										-Sant Rajinder Singh Ji Maharaj
									</p>
									<p>
										The purpose of education is not only to know Mathematics,
										English, History, Geography and Science. Those are
										necessities of life. But a focus of a good education system
										is to have the children who go through the process become
										individuals who can decide between right and wrong. Every
										day we make a decision. Should I do this, or that? Is this
										good for me? Is that good for me? If we can create an
										environment in which children learn how to pick up what is
										good and what is right, then we have created an atmosphere
										which is always going to be happy and peaceful.
										<br />
										<br />
										-Sant Rajinder Singh Ji Maharaj
									</p>
									<p className="text-blue-bold">
										Review the philosophy and purpose module. You can discuss
										these questions with your teacher trainer:
									</p>
									<p>
										What are the different areas offered by the spiritual
										curriculum, and for each, describe the benefit you see to
										including these areas in the school curriculum.
										<p></p>How would the world be different if there was
										spiritual education in schools?{' '}
									</p>
									<p>Why should we teach spirituality at an early age?</p>
									<p className="text-blue-light">
										Congratulations you have finished the first module. We hope
										you have gained a deeper understanding of the Philosophy and
										Purpose of the Spiritual Curriculum.
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
export default Module1;
