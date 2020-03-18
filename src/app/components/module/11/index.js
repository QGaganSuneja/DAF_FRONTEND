import Heading from '../../heading';
import { VideoPlayer } from '../../video-player/index';
import { PrimaryButton } from '../../buttons';
class Module11 extends React.Component {
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
			<div className="ch-container_12">
				<div className="ch-container__section">
					<h3>Module 11</h3>
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
									heading="Creating a Welcoming Environment"
								></Heading>

								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									{!this.state.isVideo && (
										<img src="../../../assets/chapters/11/module-11-image-1(800x400).png" />
									)}
									{this.state.isVideo && videoPlayer}
								</div>
								<div className="text-black padding-t-10">
									<p className="text-blue-light">
										Watch the video on an Introduction Creating a Welcoming
										Environment (Atul Video)
									</p>
									<p>
										a) Students need to feel welcomed, safe and not threatened
										within the school and classroom environment. This requires
										genuine and empathetic communications between the teacher
										and the students.
									</p>
									<p>
										{' '}
										b) It is only after such communications are verified and the
										welcoming environment established, that the learning process
										can really begin.
									</p>
									<p>
										c) Once the teacher establishes this environment, the
										student will feel accepted by the teacher and peer group,
										stress will decrease, fear of failure dissipates and a
										positive emotional environment ensues.{' '}
									</p>{' '}
									<p>
										d) There are specific techniques and methods which may be
										considered when establishing this "Welcoming Environment".
										In the following learning segment, we will review and
										consider a few of the methods and interventions that may be
										used to facilitate a more welcoming educational environment.
									</p>
									<p className="text-blue-light">
										Here a few points to consider.
									</p>
									<p>
										1. Welcome children, smile, and find time to talk to each
										child regularly.{' '}
									</p>
									<p>
										2. Use positive, respectful and encouraging language when
										communicating with students and others in the school. You
										are a role model.
									</p>{' '}
									<p>
										3. Have interesting, well planned lessons and engage
										students through activities.
									</p>
									<p>
										{' '}
										4. Create an environment where it is okay to make mistakes{' '}
									</p>
									<p>
										5. Have posters in the class with all the children’s names,
										art work, assignments and photos.
									</p>
									<p>
										{' '}
										6. Link the learning content to the child’s personal life,
										experiences, their world.
									</p>
									<p>
										{' '}
										7. Play an ice breaker/team building game to help students
										get to know each other and create a family feeling.{' '}
									</p>
									<p>
										8. Be aware of the level of learning of the different
										students and plan activities that are at their levels.{' '}
									</p>
									<p>
										9. Value, care for, and respect each student. Each child is
										special.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Assignment Part 1: How to Create a Welcoming Environment"
								></Heading>
								<div className="text-black padding-t-10">
									<p>
										When a student enters a classroom, they look for signs that
										they are welcomed, safe and respected within the
										environment. Research has shown that the human brain
										functions better and is more receptive to learning if the
										surroundings are safe and inviting. If on the contrary, the
										child feels threatened, unsafe or unwelcomed, real learning
										is difficult to achieve.
									</p>
									<p>
										Teachers are a major key to student learning and can welcome
										each student as they arrive to class and to school.
										Establishing anchoring activities to begin the class are
										effective, stretching exercises or meditation sets a calming
										start to the lesson. Remember that our interactions and
										behaviors towards each student are critical components in
										the process. Welcoming students with a few words and a smile
										is important. Positive feedback on classroom participation
										(even if a student response is not exactly what is
										requested), will motivate students to continue to
										participate. If students are told “that is an interesting
										answer but I am looking for something a bit different” they
										will continue to participate. Saying only that their
										response is “incorrect”, may cause the student to avoid
										class participation.
									</p>
									<p>
										{' '}
										Teachers should know the academic level of each student and
										ask questions which are at the level of the specific
										student. This will ensure that the student responds and will
										continue to participate and be motivated in classroom
										activities. Questioning is very important for a teacher and
										is used to involve students, even those sitting at the back
										of the classroom.{' '}
									</p>
									<p>
										We can celebrate achievements by displaying assignments and
										pictures by the students. At certain levels, photos of
										students involved in different activities and maybe a
										birthday class chart can be displayed. Ice breaker games are
										helpful in getting students to get to know each other
										better.{' '}
									</p>
									<p>
										The Spiritual Curriculum suggests and encourages
										collaborative activities which can promote a team spirit
										within the class. Students look forward to social
										interactions with the other students. The teacher can
										facilitate students working in teams and groups in order to
										support such interactions. Examples may include a
										think-pair-share activity, group discussions, group
										presentations, cultural performances, and role playing.
										Participation in such collaborative learning activities can
										lead to a family feeling within the classroom and a more
										welcoming environment. Once a student feels involved in the
										learning experience, this may result in “long term learning
										retention” of the topics and material.{' '}
									</p>
									<p>
										The teacher’s enthusiasm, expectations, facial expressions,
										gestures (body language), voice pitch/volume may all have a
										direct correlation with student motivation and achievement.
										Students have to be treated fairly and equally. Favoritism
										for some and not others may decrease motivation, teachers
										really need to be an example of equality demonstrating
										respect and sincere concern for each and every student. One
										perspective to view the classroom is to understand that each
										student could be considered as your own child and with this
										point of view we can judge our own behaviors as teachers.
									</p>
								</div>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/11/module-11-image-1(800x400).png" />
								</div>
								<PrimaryButton
									className="dfa-btn dfa-btn-danger"
									btn_text="Review Questions Part 1:  Choose the Best Answer:"
								></PrimaryButton>
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
export default Module11;
