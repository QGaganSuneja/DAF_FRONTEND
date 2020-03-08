import React from 'react';
import './module.scss';
import Heading from '../heading';
import { PrimaryButton } from '../buttons';
import { VideoPlayer } from '../video-player/index';
import Module1 from './1/index';
import Module2 from './2/index';
import Module3 from './3/index';
import Module4 from './4/index';
import Module5 from './5/index';
import Module6 from './6/index';
export class Introduction extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isVideo: false };
		this.playVideo = this.playVideo.bind(this);
	}
	playVideo() {
		this.setState({ isVideo: !this.state.isVideo });
	}
	render() {
		const welcomeVideo = {
			btn_text: 'Welcome Video',
			src: '../../../assets/chapters/0/1.mp4'
		};
		let videoPlayer = '';
		if (this.state.isVideo) {
			videoPlayer = <VideoPlayer src={welcomeVideo.src}></VideoPlayer>;
		}
		return (
			<div className="ch-container_1">
				<div className="ch-container__section">
					<h3>Introduction Training Online Course</h3>

					<a className="carousel-control-prev" href="#demo" data-slide="prev">
						<span className="carousel-previous-icon"></span>
					</a>
					<a className="carousel-control-next" href="#demo" data-slide="next">
						<span className="carousel-next-icon"></span>
					</a>
					<div id="demo" className="carousel slide" data-interval="false">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<Heading
									isUp={true}
									heading="Introduction To The Darshan Academy Teacher Training Online Course"
								></Heading>

								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									{!this.state.isVideo && (
										<img src="../../../assets/chapters/2/module-2-image-1(800x400).png" />
									)}
									{videoPlayer}
								</div>

								<PrimaryButton
									OnClick={this.playVideo}
									btn_text={welcomeVideo.btn_text}
								></PrimaryButton>
								<div className="text-black padding-t-10">
									<p>
										Welcome to the Darshan Academy Spiritual Curriculum Teacher
										Training Online Course.
									</p>
									<p>
										The online course will help you to teach the Spiritual
										Curriculum which is run from Pre-Nursery to Class 12. It
										will enable you to understand the philosophy of the
										Spiritual Curriculum, and integrate spiritual education in a
										school. Each course module provides specially designed
										videos, exercises, readings and essays on the topics.
									</p>
									<p>
										This self-paced, well-structured course includes modules for
										you to engage with, and is like an interactive textbook. You
										will become more familiar with how to teach the Spiritual
										Curriculum, and how to use effective teaching techniques.
										You will also learn how to implement a positive behavior
										program in your classroom, and the importance of a welcoming
										environment. The course highlights the scope and sequence
										and major topics of the Spiritual Curriculum, such as
										vegetarian diet, key principles of spirituality, ethical
										living and the introspection diary.
									</p>
									<p>
										Our focus in developing the online training course is to
										help you gain confidence in teaching this subject and give
										you a platform to explore the topics in more depth. You will
										find resources and techniques that will help you teach the
										Spiritual Curriculum in an interactive way. We hope you
										enjoy this learning experience.
									</p>
									<p className="text-blue-bold">
										Welcome to the Spiritual Curriculum Teacher Training Online
										and Distance Learning Course: SCTTC.
									</p>
									<p>
										This course is designed as an introduction into how to teach
										the Spiritual Curriculum published by Darshan Education
										Foundation.
									</p>
									<p className="text-blue-light">
										This course is for: • Teachers who are or will be teaching
										in a a school using the Spiritual Curriculum.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Key Objectives of the Course"
								></Heading>
								<div className="text-black padding-t-10">
									<ul className="list-circle">
										<li>
											know the philosophy and purpose of the Spiritual
											Curriculum
										</li>
										<li>
											know how to integrate spiritual education in a school,
											like Darshan Academy.
										</li>
										<li>
											be familiar with the Spiritual Curriculum teacher manuals
											and workbooks, and support materials
										</li>
										<li>
											be familiar with the scope and sequence of the Spiritual
											Curriculum
										</li>
										<li>
											have learned how to implement lesson plans mentioned in
											the Spiritual Curriculum
										</li>
										<li>
											be familiar with the key principles in major topics of the
											Spiritual Curriculum
										</li>
										<li>
											have learned how to use effective teaching models and
											techniques for the lessons – presentation skills,
											discussions, games, projects, etc.
										</li>
										<li>
											understand how to implement the 4 Agreements and positive
											behaviour intervention program
										</li>
										<li>
											have learned how to create a welcoming, loving atmosphere
											in your classroom
										</li>
										<li>
											know effective classroom management techniques to improve
											discipline, and to model effective conflict resolution
											techniques
										</li>
										<li>
											understand that the Spiritual Curriculum is conveyed not
											only through text, but also through the teacher being a
											role model of the skills and ethical values they are
											learning.
										</li>
										<p>You will be aware of the effect of informal learning.</p>
									</ul>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="How the course works:"></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/0/module-0-image-2(800x400).png" />
								</div>
								<div className="text-black padding-t-10">
									<p>
										This course provides specially designed exercises, readings,
										videos and essays on topics related to teaching the
										Spiritual Curriculum. Through reading, watching videos and
										doing the assignments in the course you will deepen your
										knowledge in how to teach the Spiritual Curriculum.
									</p>
									<p>
										You will be working at your own pace and in your own time.
										You will be working with a coach/teacher trainer who will be
										guiding you through the course online.
									</p>
									<p>
										There will be a few fixed times when you will be
										communicating with your coach at school or online (skype,
										chat, etc.) There may also be workshop programs at the
										school where you will participate in discussions, activities
										and demo lessons.
									</p>
									<p>
										You will also be working with a teacher trainer to help you
										with the last part of the course when you will be applying
										what you learned in the classroom.
									</p>
									<p>
										Once you start the course, we recommend you to browse
										through the overview of all the chapters, so that you have
										an idea of what you will be learning.
									</p>
									<p>
										Entry Acceptance to this course is subject to you being
										recommended by:
									</p>
									<span>
										- Either your school, or a member of Darshan Education
										Foundation
									</span>
									<p></p>
									<p className="text-blue-bold">
										Note: All teachers teaching at a Darshan Academy school are
										required to take part in this online course.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Course Material"></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/1/module-0-image-4(800x400).png" />
								</div>
								<div className="text-black padding-t-10">
									<p>
										It is helpful to have access to the complete set of
										Spiritual Curriculum teacher manuals and student books, from
										Nursery to Grade 12.
									</p>
									<p>
										If you do not have access to the complete set, you should
										have at a minimum one Spiritual Curriculum teacher manual
										and one student workbook of any class.
									</p>
									<p>
										You will need Access to a computer/tablet, internet
										connection support
									</p>
									<p>
										You will be assigned a coach/teacher trainer who will
										communicate with you throughout the course. The coach will
										help you with any questions.
									</p>
									<p>
										For Darshan Academy teachers: Darshan Academy schools will
										provide access to a computer, the internet and the computer
										teacher will be available for technical support if needed.
										Each school also has a local teacher trainer, who can be
										consulted if there are questions.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Assignments"></Heading>
								<div className="text-black padding-t-10">
									<p>
										The course requires you to do some assignments related to
										the different course modules. Please send these assignments
										in sequence to your coach by email, working your way through
										the course from module 1 to 18. The coach will keep track of
										your work, and will send you feedback regularly.
									</p>
								</div>
								<div className="padding-t-10">
									<Heading isUp={true} heading="Expectations"></Heading>
									<div className="text-black padding-t-10">
										<p>
											Expect course time will depend on your background
											knowledge of spiritual topics and teaching experience in
											teaching the Spiritual Curriculum. If you have no computer
											background knowledge, it might also take you some time to
											get into the flow of learning online and using the
											internet.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class Module extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log('gagan');
		let ModuleToRender = null;
		console.log(typeof this.props.match.params.id);
		switch (this.props.match.params.id) {
			case 'introduction':
				ModuleToRender = Introduction;
				break;
			case '1':
				ModuleToRender = Module1;
				break;
			case '2':
				ModuleToRender = Module2;
				break;
			case '3':
				ModuleToRender = Module3;
				break;
			case '4':
				ModuleToRender = Module4;
				break;
			case '5':
				ModuleToRender = Module5;
				break;
			case '6':
				ModuleToRender = Module6;
				break;
			default:
				break;
		}
		return (
			<div>
				<div className="ch-super-container">
					<ModuleToRender />
				</div>
			</div>
		);
	}
}

export default Module;
