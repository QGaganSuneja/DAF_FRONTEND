import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
class Module9 extends React.Component {
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
			<div className="ch-container_10">
				<div className="ch-container__section">
					<h3>Module 9</h3>
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
									heading="Scope and Sequence of the Pre-Primary Spiritual Curriculum"
								></Heading>

								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									{!this.state.isVideo && (
										<img src="../../../assets/chapters/8/module-8-image-1(800x400).png" />
									)}
									{this.state.isVideo && videoPlayer}
								</div>
								<div className="text-black padding-t-10">
									<p className="text-blue-light">
										Read through the text to get to know more about the content
										of the high school Spiritual Curriculum.
									</p>
									<p>
										A high school Spiritual Curriculum for grades 9 to 12 is
										under development. The student workbook and teacher manual
										are merged into one book. Students study some of the same
										topics they already know, but in greater depth. Some new
										topics are introduced: Leadership & Spirituality, Peace
										Studies, Arts & Spirituality, etc.
									</p>
									<p>
										{' '}
										The topics are taught in an activity based manner.
										Cooperative learning and team building techniques help
										prepare students for entry into their future professions. It
										is helpful for students to keep a personal journal, in which
										they can note down ideas and thoughts about discussion
										questions and what they are learning. There are many
										opportunities for pair and group discussions, and personal
										projects.{' '}
									</p>
									<p>
										Research shows that students retain information longer when
										it can be applied to everyday life situations. When students
										see a practical application for what they are learning,
										their motivation increases and they retain information
										longer. Therefore, in each lesson, students apply their
										knowledge to their everyday life or to its practical use in
										today's world. Theory and practice go hand in hand at the
										Darshan Academy schools.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Units"></Heading>
								<br />
								<br />
								<br />
								<Heading isUp={true} heading="Unit Meditation"></Heading>
								<div className="text-black padding-t-10">
									<p>
										The topic Meditation is repeated in every grade level. The
										Spiritual Curriculum introduces students to Jyoti
										Meditation, a simple meditation technique taught by Sant
										Rajinder Singh Ji Maharaj. Meditation is at the core of
										experiencing spirituality, so it could be considered one of
										the most important chapters of the Spiritual Curriculum.
										When we meditate we discover a way to reduce stress, develop
										concentration, experience personal transformation, and find
										peace and joy. Students learn more techniques to improve
										their meditations and to keep focused during meditation.
										They also learn about the benefits of meditation and
										references to meditation throughout religions. In Darshan
										Academy students start the day with ten minutes of
										meditation.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Unit Introspection Diary"
								></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module-5-image-2(800x400).png" />
								</div>
								<div className="text-black padding-t-10">
									<p>
										In the Introspection Diary unit students learn the
										importance of and how to keep the diary, and study an
										overview of the ethical virtues mentioned in the diary. The
										introspection diary, developed by Sant Kirpal Singh Ji
										Maharaj, helps us develop the qualities of non-violence,
										truthfulness, purity, humility, and selfless service, which
										form the basis of our spiritual life when combined with
										regular meditation. Introspection creates a greater sense of
										self-awareness by focusing our attention on our patterns of
										behaviour at school, home or play. We learn to take more
										responsibility of our behaviour. The diary helps to “weed
										out” thoughts, words, and deeds that hinder our spiritual
										progress.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Unit Key Principles of Spirituality"
								></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p className="text-blue-bold" style={{ fontStyle: 'italic' }}>
										Here are some of the aspects of the unit Key Principles of
										Spirituality students learn about:
									</p>
									<ul className="list-circle text-black-bold">
										<li>Meditation</li>
										<li>
											{' '}
											The role ethical values play in spiritual development
										</li>
										<li>Karma and Transmigration</li>
										<li>
											The relationship between a saint or spiritual Master and
											the disciple
										</li>
										<li>Living a balanced life</li>
										<li>The role of the spiritual Master</li>
										<li>
											Learning a way to attain self-knowledge and
											God-realization
										</li>
										<li>
											Understanding the purpose of human life and soul’s nature
										</li>
									</ul>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Unit Peace Studies"></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p className="text-blue-bold" style={{ fontStyle: 'italic' }}>
										In Peace Studies students learn that peace begins with me.
										Students learn how they can impact their environment by
										learning to become an example of what we teach.
									</p>
									<p>
										Students learn how differences among people can be overcome.
										They learn how every action has a reaction, and how to deal
										with anger. Peace Studies covers the topics:
									</p>
									<ul className="list-circle text-black-bold">
										<li>Peace in the Family</li>
										<li>Peace in the Family</li>
										<li>Peace among Countries</li>
										<li>Peace in the World.</li>
									</ul>
									<p>
										Students learn about the lives and activities of some
										important peace builders. Students acquire peace building
										techniques they can apply in their own life. Most
										importantly students are encouraged to work on their own
										inner peace as a contribution to outer peace.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Unit  Communication and Spirituality"
								></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										Communication and Spirituality focuses on how we can
										communicate spiritual values through a variety of ways. In
										“Communicating Spirituality through Listening & Speaking”
										topic in grade 9, students work on their own communication
										skills. They learn about nonverbal clues, presentation and
										discussion skills and techniques. They learn about the
										importance of kind words and listening as communication
										tools to get along with others.
									</p>
									<p>
										In “Communicating Spirituality through Writing” in grade 10,
										students improve their writing skills. They gain an
										appreciation for scriptures and sacred texts of the major
										religions. They learn how to use expository prose,
										persuasive writing, poetry, journalistic writing, and
										journal writing to communicate spiritual ideas.
									</p>
									<p>
										In grade 11 and 12 students focus on the communication of
										spiritual values through the media, video, radio, T.V.,
										computers, internet, and new technology. They analyze their
										own media consumption, explore different careers in the
										communication field, and become aware of the media’s
										influence on shaping our beliefs and attitudes. Students are
										encouraged to try out various communication tools to share
										their spiritual ideas and to apply their creative skills.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Unit Conflict Resolution"
								></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										Although people may desire harmonious, friendly, and
										supportive relationships, we often are not aware of how to
										achieve them, of how to encourage them, and of how our
										feelings and actions can influence our perception of an
										event or situation. In the unit “Conflict Resolution”
										students learn about the power of choice we have in how we
										use our speech and actions. Students learn what behaviour
										makes a conflict worse or helps it be resolved. They become
										aware of peer pressure. They learn how to express their
										feelings and needs without blaming, attacking or criticising
										others - effective conflict resolution strategies.
									</p>
									<p>
										Students become aware of the different types of conflicts
										that can happen in a family, community or at a global level,
										and examine successful ways of resolving these. They develop
										a greater understanding of the different cultures, and
										faiths in their communities. They learn to understand not
										only themselves but also others, and the importance of
										understanding other people’s point of view in conflict
										resolution.
									</p>
									<p>
										“Conflict Resolution in the Global Community” in grade 12
										relates to studies of peace. Lessons focus on an awareness
										of the global conflict situation, an appreciation of the
										complexity of issues that surround global conflict, and an
										awareness of peace- building on the levels of physical,
										mental and spiritual, as well as individual, social, and
										environmental. In this unit students apply the skills they
										have learnt in Conflict Resolution.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Unit Leadership & Spirituality"
								></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										In the “Leadership & Spirituality” unit students learn about
										spiritually centered leadership. What are the qualities of
										an effective leader? How have the saints set examples for us
										to become spiritually centered leaders? Students gain an
										understanding of basic decision making processes and the law
										of cause of effect. They learn how to apply leadership
										skills to effective decision making in their own lives, and
										to implement their decisions. They understand the importance
										of meditation in making us good leaders. Students learn team
										building, facilitation, goal setting, and planning skills,
										and get involved in community experiences in leadership.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Unit Spiritual Arts"></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										The “Spiritual Arts” unit covers the topics Spirituality &
										Drama, and Spirituality & Music. Spirituality & Poetry and
										Spirituality and Fine Art is under development. The topics
										explore how spiritual themes have been or can be explored by
										the various arts such as music, fine arts, poetry and drama.
										This unit is designed to give students an appreciation of
										the expression in the arts in various religions and faiths.
										They gain a greater understanding and appreciation for
										spiritual art and its role in developing devotion in the
										different religions and faiths. Students are encouraged to
										express their own spiritual ideas creatively through various
										art forms. Darshan Academies hold a Poetry Fest in which
										students express their poetic skills in poetry writing and
										poetry recitation.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Unit Health and Nutrition"
								></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										The unit “Health and Nutrition” explores the reasons why
										people choose a vegetarian diet and the benefits of being a
										vegetarian. It also highlights the importance of a healthy
										diet, cleanliness, exercise, the dangers of drugs and
										alcohol.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Unit Selfless Service"></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										Darshan Academy celebrates three special weeks during the
										year. During these weeks students engage in selfless service
										projects. Through projects in community service, helping
										people in need, and improving the ecological environment,
										students develop the concept of using their knowledge to
										make positive contributions to society. Students engage in a
										variety of service activities throughout the year.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Unit Presentations & Celebrations: Plays, Holidays & Special Events"
								></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										Students put on a play, presentation or program on one or
										more of the themes they learned in the Spiritual Curriculum.
										They work together to achieve a common goal, and use
										dramatic/artistic/musical skills to express spiritual
										values.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Unit Personal Project in Spirituality"
								></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										Students can pick a topic they enjoyed doing in the
										Spiritual Curriculum. They can do a special project of their
										own choice. They share their project with others. There are
										many possible projects for students to do. Students should
										be encouraged to come up with their own ideas. Some possible
										ideas could be an art project, a model, a skit, a self-made
										book, a selfless- service project, a cultural production, a
										power point presentation, a film, etc.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Activity:"></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										Answer the MCQs related to the text you have just read. MCQs
										to be added
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Demo Lessons:"></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										Activity: Watch some demo lessons from grades 9 to 12 Demo
										Lessons to be inserted
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
export default Module9;
