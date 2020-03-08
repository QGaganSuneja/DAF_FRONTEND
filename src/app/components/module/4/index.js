import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
import { FormInput } from '../../buttons/index';
class Module4 extends React.Component {
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
			src: '../../../../assets/chapters/4/4.mp4'
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
			<div className="ch-container_5">
				<div className="ch-container__section">
					<h3>Module 4</h3>
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
									heading="Introduction To Meditation"
								></Heading>

								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									{!this.state.isVideo && (
										<img src="../../../assets/chapters/4/module-4-image-1(800x400).png" />
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
										Welcome to the next module. In this section you will learn
										about the practice of meditation. Meditation helps you
										experience refreshing moments of calm, balance, and peace at
										any time and any place. As you relax, you feel your stress
										melt away. In this section you will discover how meditation
										can improve your physical, mental, spiritual and emotional
										health.
									</p>
									<p>
										Students learn the art of meditation as part of the
										Spiritual Curriculum. They start the school day with
										meditation. It develops their concentration skills, which
										helps them become better students. Meditation also aids in
										creating a calm classroom atmosphere. Through meditation,
										you can grow spiritually while finding inner peace and
										tranquillity.
									</p>
									<p>
										The ancient practice of meditation has garnered a lot of
										interest and support from the scientific community across
										the world. Through many scientific researches, it has been
										proven that meditation provides observable physical benefits
										like reducing the risk of stress-related illnesses. By
										alleviating stress, meditation can improve your physical
										health. It brings about inner tranquillity and joy. Thus,
										meditation can improve your relationships with family,
										friends, partners, co-workers, and even our neighbors and
										community.
									</p>
									<p>
										I would encourage you to not only work through this section,
										but also find time to meditate in your daily routine and
										enjoy its immense benefits. Through sitting in a comfortable
										position at home or anywhere else, you can tap into the
										gifts that lie within us.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Implementing Meditation in a School"
								></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p className="text-blue-bold">
										Read this text on how to implement meditation at school:
									</p>
									<p>
										The Spiritual Curriculum includes lessons in the art of
										meditation. Younger students begin with five minutes of
										meditation daily. This increases to fifteen minutes in the
										upper grades.
									</p>
									<p>
										Research shows that when people spend some time sitting in
										introspective silence they reach levels of physical and
										mental relaxation that foster stress reduction, increase
										their efficiency and productivity, and accelerate learning.
										By tapping into inner resources through silent meditation
										periods, students can access an inner spring of creativity,
										peace, and wisdom.
									</p>
									<p>
										Darshan Academy schedules a school wide ten minute
										meditation time at the beginning of the day. A bell is rung
										to signal the beginning and end of this meditation time.
										During the meditation period all the students are expected
										to be silent and meditate in their classrooms together with
										their teachers. This meditation time occurs daily at the
										same time.
									</p>
									<p>
										Teachers read out the meditation instructions given by Sant
										Rajinder Singh Ji Maharaj once a week to the students to
										remind them on how to meditate. Please stick to these
										instructions, and do not mix them with any other practices.
										You can find these instructions at the back of every
										Spiritual Curriculum teacher manual.
									</p>
									<p>
										Some students prefer to meditate cross legged on the floor.
										For this they can bring a cushion or keep a meditation mat
										in the classroom. Others prefer to keep sitting on their
										chairs. You can meditate in the classroom or outside.
										Students should avoid putting their heads on the desks, or
										lying down, as you may fall asleep this way. Important is to
										keep the meditation period daily at the same time, and not
										use it for any other activity.
									</p>
									<p>
										The Spiritual Curriculum contains a chapter on meditation
										that focuses on the benefits of meditation, and how to
										improve our meditation. This is the theory side of
										meditation. The practical side of spirituality is the actual
										experience of meditation. During meditation students can tap
										into the joy and peace of their soul.{' '}
									</p>
									<p>
										Visitors to the schools can observe the beneficial effects
										daily meditation has on the students: concentration skills
										that help them perform better academically and increase
										their sense of peace, which fosters harmonious relations
										with others. Beginning the day with meditation relieves
										tension, which helps students work more efficiently and with
										less stress and creates a peaceful atmosphere.
									</p>
								</div>
								<button
									OnClick={e => {
										this.playVideo(e, '2');
									}}
									className="dfa-btn dfa-btn-danger"
								>
									{secondVideo.btn_text}
								</button>
								<br />
								<br />
								<br />
								<button
									OnClick={e => {
										this.playVideo(e, '2');
									}}
									className="dfa-btn dfa-btn-danger"
								>
									{'Activity'}
								</button>
								<div className="text-black">
									<p>
										Read the Meditation Instructions as given by Sant Rajinder
										Singh Ji Maharaj on the last page of the Spiritual
										Curriculum Teacher’s Manual.{' '}
									</p>
								</div>
								<p>Write the meditation steps here in a short form:</p>

								{/* <li>
									<input type="text" />
									<input type="text" />
									<input type="text" />
									<input type="text" />
								</li> */}
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Benifit of Meditation for the Body"
								></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/4/module-4-image-2(800x400).png" />
								</div>
								<div className="text-black">
									<p>
										By alleviating stress, meditation can improve your physical
										health. One of the physical benefits includes reducing the
										risk of stress-related illnesses.{' '}
									</p>
									<p>
										Medical researchers and doctors have reported the effects
										that stress has on the body. A number of illnesses are the
										result of stress. For this reason, medical practitioners
										recommend meditation to their patients to reduce stress
										levels. This includes meditating to decrease your heart
										rates and blood pressure. They even recommend meditation to
										enhance your body’s immune response. Hospitals and medical
										clinics even offer classes in meditation for patients.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Benifit of Meditation for the Mind"
								></Heading>
								<div className="text-black">
									<p>
										Meditation produces a deep state of relaxation and a calm
										mind, providing mental benefits.
									</p>{' '}
									<p>
										Studies have shown the positive effect meditation has on the
										brain and improving memory. It also enhances concentration,
										attention, and focus. Meditation can improve concentration,
										whether one needs to concentrate for sports, education,
										work, or hobbies. When focused, we can increase our
										effectiveness and productivity. Sports figures and champion
										athletes have reported how meditation helps them improve
										focus to prepare for competing in their sport at the highest
										level.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Benifit of Meditation for the Emotions"
								></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/4/module-4-image-3(800x400).png" />
								</div>
								<div className="text-black">
									<p>
										{' '}
										Your emotional wellness can also be enhanced through
										meditation. It brings about inner tranquillity and joy.
										Through meditation, you can reduce anxiety and depression
										caused by hopelessness and disappointments in life. When
										these are the result of emotions, such as feeling isolated
										or lonely, or sadness dealing with losses in life,
										meditation can supplement the support we receive from
										professionals.{' '}
									</p>
									<p>
										When you meditate, you tap into a place of happiness and
										peace within. This increases a sense of positivity. You
										realize that beyond your daily problems that cause emotional
										pain, there is a pool of joy within that you can tap into
										and feel more joyous. Meditation helps you to recharge,
										refresh and rejuvenate.
									</p>
									<p>
										{' '}
										When you feel happier, you are calmer and more balanced.
										This creates a ripple effect that will radiate to others.
										Meditation can improve your relationships with family,
										friends, partners, co-workers, and even our neighbors and
										community.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading=" Meditation for Spiritual Growth"
								></Heading>
								<div className="text-black">
									<p className="text-blue-light">
										Watch the video: Meditation for Spiritual Growth, (Youtube,
										1:01 min)
									</p>
									<p>
										With the stress and rapid pace of life in this technological
										age, many people stop and wonder about their purpose in
										life. Did you ever stop to consider questions at times, such
										as: who am I, why am I here, what is my life’s purpose, and
										what will bring me fulfilment? One way people reflect on
										such questions is by sitting in silence in meditation.
										Spending some time in meditation opens the doors to finding
										answers to these questions about your purpose and how to
										find fulfilment in life. (Source: www.sos.org)
									</p>
									<p className="text-blue-light">
										After watching the video “Meditation for Spiritual Growth,”
										answer the following multiple choice question:
									</p>
									<p>Meditation helps you to:</p>
									<p>
										1. Discover Your Purpose and Find Fulfilment in Your Life
									</p>
									<p>2. Grow in Wisdom by Deepening Your Understanding</p>
									<p>3. Awaken Spiritually</p>
									<p>
										4. Experience the Inner and Outer Peace of Connecting with
										Your Joy Within
									</p>
									<p>5. All of the above</p>
									<button className="dfa-btn dfa-btn-danger">
										Watch the following Videos
									</button>
									<p>
										Spiritual Pearls, How can Meditation increase our
										Productivity? (Youtube, 1:26 min)
									</p>
									<p>
										Spiritual Pearls, What are the Benefits of Meditation, Part
										1 (Youtube, 1:31 min)
									</p>
									<p>
										Spiritual Pearls, What are the Benefits of Meditation, Part
										2 (Youtube, 1:20 min)
									</p>
									<button className="dfa-btn dfa-btn-danger">Activity</button>
									<p>Write down one reason why you would like to meditate:</p>
									<input
										type="textarea"
										style={{
											backgroundColor: '#f38685',
											width: '100%',
											height: '53px',
											border: 'none',
											color: 'white',
											padding: '10px'
										}}
										className="white-placeholder"
										placeholder="Write a reason here"
									></input>
									<div className="row" style={{ marginTop: '10px' }}>
										<div className="col-md-10"></div>
										<div className="col-md-2" style={{ textAlign: 'right' }}>
											<button className="dfa-btn dfa-btn-danger">SEND</button>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="How You Can Attain Spiritual Consciousness"
								></Heading>
								<p style={{ paddingTop: '40px' }} className="text-blue-light">
									“How You Can Attain Spiritual Consciousness” (Youtube, 12:06
									min)
								</p>
								<p className="text-black">
									In this video Sant Rajinder Singh Ji Maharaj explains how to
									shift your attention away from the physical senses and focus
									on the spiritual world within by accessing “the channel of
									God.” (Excerpt from an address at Malcolm X College, April 22,
									2018)
								</p>
								<button className="dfa-btn dfa-btn-primary">
									FAQ: Questions related to Meditation in the Classroom
								</button>
								<div className="text-black">
									<p className="text-blue-bold">
										Q. What to do if a student sleeps during meditation time, or
										lays their head on the desk?
									</p>
									<p>
										A. You can gently lift up the child to a sitting position.
										Remind the students after meditation to keep awake during
										meditation.
									</p>
									<p className="text-blue-bold">
										Q. What if a student does not want to close his eyes during
										meditation?
									</p>
									<p>
										{' '}
										A. We cannot force a student to meditate. But the student
										must keep quiet, so as not to disturb any others students
										meditating. Eventually the student might try to meditate.{' '}
									</p>
									<p className="text-blue-bold">
										Q. How to meditate with young children?
									</p>
									<p>
										A. Initially when you start meditating with young children,
										you can start with one minute of meditation, and gradually
										build it up to ten minutes as their concentration skills
										improve.
									</p>
								</div>
								<div style={{ paddingTop: '10px' }}>
									<p
										className="text-blue-bold"
										style={{ lineHeight: 'normal', fontStyle: 'italic' }}
									>
										Congratulations on completing the Meditation Chapter. Find
										time to meditate daily this week. Find a quiet place and
										time. Experience the benefits of meditation. For more
										articles and videos on meditation, visit www.sos.org
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
export default Module4;
