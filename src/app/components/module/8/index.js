import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
import './index.scss';
class Module8 extends React.Component {
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
			<div className="ch-container_9">
				<div className="ch-container__section">
					<h3>Module 8</h3>
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
									heading="Scope and Sequence of the Darshan Academy Spiritual Curriculum Grade    1 – 8"
								></Heading>

								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									{!this.state.isVideo && (
										<img src="../../../assets/chapters/8/module-8-image-1(800x400).png" />
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
									<p className="text-blue-light">
										Read through the text to gain an understanding of the Scope
										and Sequence of grades 1 to 8 of the Spiritual Curriculum
										and the different topics
									</p>
									<p>
										There is a different course for each grade level, from 1 –
										8. The same major units are covered in each grade level but
										with new topics and at a higher level of understanding.
										While the broad major units are repeated, there are no
										repetitions of individual topics or lessons from grade level
										to grade level.
									</p>
									<p className="text-blue-light">
										Example of how the Unit “Truthfulness” is taught in
										different Grades
										<br />
										<br />
										GRADE
									</p>
									<p>
										<span
											style={{
												color: '#6b489d',
												fontStyle: 'italic',
												fontSize: '20px',
												fontWeight: 'bold'
											}}
										>
											Grade 1: Telling the truth | &nbsp;
										</span>
										<span
											style={{
												color: '#aed13e',
												fontStyle: 'italic',
												fontSize: '20px',
												fontWeight: 'bold'
											}}
										>
											Grade 2: Not stealing | &nbsp;
										</span>
										<span
											style={{
												color: '#aed13e',
												fontStyle: 'italic',
												fontSize: '20px',
												fontWeight: 'bold'
											}}
										>
											Grade 3: Gossip | &nbsp;
										</span>

										<span
											style={{
												color: '#74c8a6',
												fontStyle: 'italic',
												fontSize: '20px',
												fontWeight: 'bold'
											}}
										>
											Grade 4: Trust &nbsp;
										</span>
										<br />
										<span
											style={{
												color: '#c5b72f',
												fontStyle: 'italic',
												fontSize: '20px',
												fontWeight: 'bold'
											}}
										>
											Grade 5: Being True to Yourself and God | &nbsp;
										</span>
										<span
											style={{
												color: '#f69633',
												fontStyle: 'italic',
												fontSize: '20px',
												fontWeight: 'bold'
											}}
										>
											Grade 6: Hypocrisy
										</span>
										<br />
										<span
											style={{
												color: '#f27347',
												fontStyle: 'italic',
												fontSize: '20px',
												fontWeight: 'bold'
											}}
										>
											Grade 7: Honesty in the Workplace | &nbsp;
										</span>
										<span
											style={{
												color: '#2e5aa9',
												fontStyle: 'italic',
												fontSize: '20px',
												fontWeight: 'bold'
											}}
										>
											Grade 8: Searching for Spiritual Truth
										</span>
									</p>
								</div>
								<Heading
									isUp={true}
									heading="How the Units are divided:"
								></Heading>
								<br />
								<br />
								<Heading
									isUp={true}
									heading="Unit 1 Personal Spiritual Development"
								></Heading>
								<div className="text-black padding-t-10">
									<p>
										The topics focus on ethical living and how to become a
										better person, meditation, self-improvement and attaining
										one’s goals.{' '}
										<span className="text-blue-light">
											The topics included in Unit 1 are:
										</span>
									</p>
									<ul className="list-circle li-margin">
										<li>Meditation</li>
										<li>Diary</li>
										<li>Nonviolence</li>
										<li>Truthfulness</li>
										<li>Humility</li>
										<li>Love for God and Love for All</li>
										<li>Selfless Service</li>
										<li>Vegetarian Diet and Vegetarian Cooking</li>
										<li>Personal Goal Setting</li>
									</ul>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Unit 2 Understanding Key Principles of Spirituality"
								></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module-5-image-2(800x400).png" />
								</div>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										The unit on Key Principles of Spirituality focuses on the
										underlying teachings taught by saints and spiritual teachers
										of all spiritual traditions. It is a comparative study that
										examines the similarities found in all traditions. The
										topics explored focus on similarities in views about the
										soul, God, meditation, the spiritual teacher, saints,
										ethical living, and how to lead a spiritual life in the
										modern world, or how to balance one’s physical, mental, and
										spiritual activities in life.
									</p>
									<p>The topics in Unit 2 are:</p>
									<p>• Topics in Key Principles of Spirituality</p>
									<p>• Role of the Spiritual Teacher </p>
									<p>• Living a Spiritual Life in the Modern World</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Unit 3 Getting Along With and Respecting Others and Life"
								></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module-5-image-2(800x400).png" />
								</div>
								<div className="text-black">
									<p>
										The topic in this unit deals with how to get along with
										other people and learning to have respect for all people,
										irrespective of differences, and having respect for our
										planet and all life.{' '}
									</p>
									<p className="text-blue-bold">The topic in this Unit is: </p>
									<p>• Conflict Resolution</p>
								</div>
								<PrimaryButton btn_text={'Projects'}></PrimaryButton>
								<div className="text-black padding-t-10">
									<p>
										Projects give students an opportunity to explore a variety
										of personal and group projects in which they can go into
										more depth on some of the topics learned in the course.
										Through selfless service projects in community service,
										helping people in need, and improving the ecological
										environment, students develop the concept of using their
										knowledge to make positive contributions to society.
										Students can put on a play or program on one or more of the
										themes they learned in the Spiritual Curriculum. They work
										together to achieve a common goal, and use
										dramatic/artistic/musical skills to express spiritual
										values. During special weeks based on love, service,
										kindness, human unity and peace, students engage in
										activities, such as a quiz, presentations, debate, cultural
										programs, community service, rally and competitions.
										Projects Personal/and or Group Selfless Service Projects
										Presentation of a Play or a Cultural Program
									</p>
									<p>
										During special weeks based on love, service, kindness, human
										unity and peace, students engage in activities, such as a
										quiz, presentations, debate, cultural programs, community
										service, rally and competitions.
									</p>
									<p>• Projects</p>
									<p>• Personal/and or Group Selfless Service Projects</p>

									<p>• Presentation of a Play or a Cultural Program</p>
									<p>• Special Weeks</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Scope and Sequence of the Spiritual Curriculum 1 to 8"
								></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module-5-image-2(800x400).png" />
								</div>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p className="text-blue-light">Meditation</p>
									<p>
										At Darshan Academy students meditate for ten minutes at the
										beginning of the school day. The meditation instructions by
										Sant Rajinder Singh Ji Maharaj can be found at the back of
										every Spiritual Curriculum teacher manual.
									</p>
									<p>
										The meditation technique we introduce is called Jyoti
										meditation, the repetition of any Name of God. This is a
										simple technique of meditation which can be practiced as a
										science by people of all ages, religions, and faiths.
									</p>
									<p>
										Teachers should follow the meditation instructions given in
										the teacher manual, and not introduce or mix it with any
										other meditation techniques. Read the instructions as they
										are written in the teacher manual once per week in class to
										remind the students how to meditate. Remind the students
										that the meditation instructions have been given by the
										spiritual Master Sant Rajinder Singh Ji Maharaj. The
										meditation topic in the Spiritual Curriculum deals with the
										theoretical aspect of meditation, how to meditate, why we
										should meditate, the benefits of meditation, etc.
									</p>
									<p>
										The practical experience of meditating is an important
										component of the Spiritual Curriculum. It is while
										meditating that we can experience the peace and bliss of our
										soul. Please do not ask students about their inner
										experiences. These are personal experiences between the soul
										and God.
									</p>
									{/* <p>
										This Light exists as much in the humble ant as in the
										powerful lion. It shines in the snake as well as the cow. It
										shimmers in the fish, as well as the birds. When we look at
										life through the eyes of the soul, we witness God in even
										the humblest and most grotesque of creatures. With that
										angle of vision, we develop love for all that exists.
									</p>
									<p>
										When we look at life through the consciousness of the soul,
										we begin to live in a gentler manner and start respecting
										all forms of life. This is one of the reasons that many
										people who are in touch with their soul turn to a vegetarian
										diet. They feel that God has provided enough food in the
										form of plants to sustain them, and it is not necessary to
										take the life of any of God’s creatures for food.
									</p> */}
									<p className="text-blue-light">Introspection Diary</p>
									<p>
										The introspection diary, developed by Sant Kirpal Singh Ji
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
									<p className="text-blue-light">How to fill Diary</p>
									<p>
										In the columns for each quality on the introspection diary,
										we note down the number of failures we can recall each day.
										This is called the system of negative marking. Instead of
										placing down the number of times we have succeeded in the
										virtue, we tally our failings. This shows us the areas of
										failure we need to weed out from ourselves. We should not
										feel depressed or ashamed of our failures, but use the
										information to find areas needing improvement in virtuous
										living. By keeping the introspection diary over time, the
										number of failures will decrease. In classes 1 to 3 students
										can draw sad faces instead of writing numbers in their
										diary.
									</p>
									<p>
										{' '}
										At the bottom of the front page of the diary there is space
										to note down how much time we spent in selfless service and
										how much time was spent in meditation.
									</p>
									<p>
										{' '}
										During the topic of teaching the Introspection Diary
										students should be given time daily in class, to fill out
										the diary. Students should review their thoughts, words, and
										deeds during the past twenty-four hours, and then fill out
										the diary. Students do not need to show their diary to the
										teacher.
									</p>
									<p className="text-blue-light">Non violence</p>
									<p>
										The nonviolence topic deals with not hurting anyone with
										words, thoughts and deeds. Students learn how to act in
										situations at home and school, and deal with them
										non-violently. They learn about great people who practiced
										non-violence. They learn about using nonviolence to make a
										peaceful world.
									</p>
									<p className="text-blue-light">Truthfulness</p>
									<p>
										The topic truthfulness deals with the various failures of
										falsehood, stealing, lying, gossip, hypocrisy and deceit.
										Students learn about the importance of honesty and earning
										our livelihood honestly. The topic illustrates how
										developing truthfulness accelerates our spiritual journey.
										In grade 8 the students learn how various people have
										searched for spiritual truth.
									</p>
									<p className="text-blue-light"> Humility</p>
									<p>
										The topic humility explores the many faces of the ego: Pride
										of knowledge, pride of power, and pride of wealth. Students
										learn about the importance of our thoughts and words, and
										that we should not think that we are better, smarter, or
										richer than others. They learn how to talk to and deal with
										others with humility, and how to use humility in everyday
										situations. Gratitude is a by-product of humility, so the
										topic starts out in grade one with thanking God for all of
										God’s gifts to us. Students study examples of humility
										throughout history and current events.
									</p>
									<p className="text-blue-light">
										{' '}
										Love for God and Love for All
									</p>
									<p>
										Students learn that we are all one family in God, and the
										importance of loving others and God in our life. The topic
										focuses on how to act lovingly in daily situations and how
										to chart our progress in love for all. It might be easy to
										love our friends, but this topic also focuses on how to have
										love for people who are different from us or who do not
										agree with us.
									</p>
									<p>
										In grade seven students study examples in history and
										current events of love for God and love for all.
									</p>
									<p className="text-blue-light"> Selfless Servie</p>
									<p>
										Selfless service means acting without any desire for a
										reward or recognition. It is given out of love and a desire
										to help others. We break out of our own comfort zone to
										reach out to others. Students explore opportunities that
										arise for selfless service in our daily life, in the family,
										classroom, community, and at a global level. They learn
										about the different categories of selfless service:
										Physical, financial, intellectual, and spiritual. Students
										study examples of selfless service through history and
										current events.
									</p>
									<p>
										Darshan Academy celebrates three special weeks during the
										year that coincide with the birthdays of the great Masters.
										During these weeks students engage in selfless service
										projects. Through projects in community service, helping
										people in need, and improving the ecological environment,
										students develop the concept of using their knowledge to
										make positive contributions to society.
									</p>
									<p className="text-blue-light">
										Vegetarian Diet and Vegetarian Cooking
									</p>
									<p>
										The Spiritual Curriculum introduces students to the topic
										vegetarian diet and vegetarian cooking. Vegetarians eat
										fruits, grains, vegetables, dairy products, legumes, pulses
										and nuts. They do not eat meat, fish, fowl or eggs. Students
										learn how to eat when they are with non-vegetarian friends
										and at parties. They learn the health benefits of being a
										vegetarian, as well as the emotional and spiritual benefits
										that involve non-violence, karmic reasons, and having peace
										of mind. Students learn how to cook various international
										vegetarian recipes and vegetarian dishes for special
										holidays. Students study examples of famous vegetarians
										through history and in current events.
									</p>
									<p>
										Darshan Academy only permits vegetarian food in the school
										premises. Students are requested to bring only vegetarian
										food for their lunch and snacks
									</p>
									<p className="text-blue-light">Personal Goal-Setting</p>
									<p>
										The topic Personal Goal-Setting helps students set goals for
										themselves, for their personal and spiritual growth. They
										learn how to set goals and design an action plan for their
										health, school work, and for meditation. They learn how to
										track their progress over a set period of time. Students
										also learn to set goals for a group level and for team
										efforts. In grade eight students learn how to set goals for
										one’s career plans, and learn about examples from history of
										people who set goals and attained them.
									</p>
									<p className="text-blue-light">
										{' '}
										Topics in Key Principles of Spirituality
									</p>
									<p>
										Key Principles of Spirituality focuses on the teachings of
										the saints. The word saint encompasses a variety of terms
										including saints, mystics, enlightened beings, spiritual
										Masters and realized souls. It is the study of the essence
										of the spiritual teachings. The topic starts by teaching
										that we have not only a body and a mind, but also a soul,
										and that meditation helps us find who we are as a soul. The
										topic looks at how God created us, and how the soul can
										return to God. The soul is of the same essence as of God.{' '}
									</p>
									<p>
										When God created the world, a divine current emanated from
										God. This divine current has two components to it – the
										Light and Sound of God. Through meditation we can contact
										these two currents and travel back to God. The topic also
										explores the law of karma, and how good and bad karma keep
										us in the world. Meditation can help us get out of the law
										of karma.
									</p>
									<p className="text-blue-light">
										Role of the Spiritual Teacher
									</p>
									<p>
										The topic of “The Role of the Spiritual Teacher” introduces
										students to how a spiritual teacher helps us, by teaching us
										how to meditate, lead a good life, and by helping us with
										our questions and problems. Students study the life of
										various spiritual teachers.
									</p>
									<p className="text-blue-light">
										Living a Spiritual Life in the Modern World
									</p>
									<p>
										Living a Spiritual Life in the Modern World” means that we
										remain in the world, in our own society, culture, faith and
										family and fulfill our duties and responsibilities along
										with developing spiritually. It means living a spiritual
										life in a modern world. We have obligations towards our
										family, our jobs, our education, career, community and the
										world. However it is also important to find time to
										meditate, do selfless service and progress spiritually.
										Living a spiritual life in the modern world means finding a
										balance between our spiritual and worldly life. The symbol
										used to show this balance is the lotus flower. It grows in
										the muddy water (the world), but its flower remains dry and
										faces the light.
									</p>
									<p>
										Students learn how to do a good job at home, at school, and
										in the community, and still find time to meditate. They
										learn how to stick to spiritual principles when faced with
										daily life situations. They learn how to attend to worldly
										responsibilities and keep spiritual goals in their daily
										life.
									</p>
									<p className="text-blue-light">Conflict Resolution</p>
									<p>
										Students learn how to resolve conflicts in a peaceful way.
										The topic “Conflict Resolution” teaches cooperation and
										communication skills as building blocks to resolving
										conflicts peacefully. It also teaches tolerance and being
										able to see other people’s points of view, as important
										skills and attitudes in conflict resolution. Students learn
										how to brainstorm solutions to a conflict. They learn to
										express their feelings and needs and recognise these in
										other people. They learn the difference between a request
										and a demand. Students learn how to solve conflicts at home,
										on the playground, and in the community peacefully. They
										explore conflicts in current events and models of conflict
										resolution. They actively use conflict resolution in student
										government and leadership positions to help make the world a
										better place.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Answer these MCQs"></Heading>
								<div className="text-black">
									<p>MCQ's</p>
								</div>
								<div className="carousel-item">
									<Heading isUp={true} heading="Demo Lessons:"></Heading>
									<div className="text-black">
										<p>
											Watch some classroom demo lessons related to the Spiritual
											Curriculum.
										</p>
										<p></p>
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
export default Module8;
