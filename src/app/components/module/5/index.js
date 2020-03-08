import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
class Module5 extends React.Component {
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
			src: '../../../../assets/chapters/5/5.mp4'
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
			<div className="ch-container_6">
				<div className="ch-container__section">
					<h3>Module 5</h3>
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
									heading="Key Principles of Spirituality"
								></Heading>

								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									{!this.state.isVideo && (
										<img src="../../../assets/chapters/5/module-5-image-2(800x400).png" />
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
										In this chapter, we will look at some key principles of
										spirituality that are taught in the Spiritual Curriculum.
										The module Key Principles of Spirituality explores questions
										related to who we really are. Are we the brain, the
										emotions, the body? Or are we in reality a soul, a part of
										God? And if we are a part of God, how can we see God? How
										can we experience our real self and solve the mystery of
										life?
									</p>
									<p>
										The module highlights the role of the spiritual guide who
										helps us to answer many of these questions by showing us how
										to meditate and discover who we really are through the
										technique of going within and tapping into our divine core.
										Meditation is a simple technique that helps us connect with
										the divine and find inner peace. A spiritual guide helps
										people achieve their spiritual goals by providing them with
										ongoing guidance to lead an ethical life and to perfect
										their meditations.
									</p>
									<p>
										A life based on ethical values is a key principle on the
										spiritual path and includes living a life of nonviolence,
										truthfulness, humility, purity, selfless service,
										vegetarianism and avoidance of alcohol and drugs. The
										ultimate goal of this process is to take the inner journey
										back to our true spiritual home.
									</p>
									<p>
										The saints and mystics tell us that God is eternal, all
										conscious, all love, all Light and Sound, and all peace. God
										created all that exists. God brought creation into being. At
										the time of creation two principles emanated - the Light and
										Sound of God. The Light and Sound of God can be contacted
										within through a process of meditation. In this way we can
										experience our connection with God.
									</p>
									<p>
										We also look at the idea of balancing our life in the world
										with our spiritual practices - how to live in the world and
										still stick to our spiritual principles when faced with
										daily life situations. Living in the world, we have
										responsibilities towards our family and community and we
										need to work to earn our livelihood. The key is to not get
										wrapped up by the world and to find time to develop
										ourselves spiritually through meditation and to live an
										ethical life. This is called Positive Mysticism in action.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading isUp={true} heading="Spiritual Discourses"></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module-5-image-2(800x400).png" />
								</div>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										You will now watch a few videos in which Sant Rajinder Singh
										Ji Maharaj beautifully explains various tenets of the
										spiritual path.
									</p>
									<p>
										<span
											className="text-blue-bold"
											style={{ fontStyle: 'italic' }}
										>
											Watch the video “Putting God on your To Do List,”
										</span>
										an excerpt of a spiritual discourse by Sant Rajinder Singh
										Ji Maharaj. Our day-to-day activities can keep us so busy
										that we forget to make time for finding God--the real
										purpose of our lives. After watching the video, answer the
										questions.
									</p>
									<p className="text-blue-bold" style={{ fontStyle: 'italic' }}>
										After watching the video “Putting God on your To Do List,”
										answer this question:
									</p>
									<p className="text-black">
										Which of the following is our birthright, according to Sant
										Rajinder Singh JI Maharaj?
									</p>
									<p>a. To earn name and fame </p>
									<p>b. To fulfill all our worldly wishes</p>
									<p>c. God realization and self-realization </p>
									<p>d. To visit seven wonders of the world</p>
									<p>
										<span
											className="text-blue-bold"
											style={{ fontStyle: 'italic' }}
										>
											Watch this video, “Experiencing Your Soul,” (Youtube) from
											a talk by Sant Rajinder Singh Ji Maharaj. God created this
											universe.&nbsp;
										</span>
										Our soul is a part of God. When we meditate, we can be
										transported into a world of joy where we experience our
										soul. After watching the video answer the questions.
									</p>
									<p>
										(1) The two primal manifestation of God are ___________ and
										__________ (Light, Sound).
									</p>
									<p>
										{' '}
										(2) Which of the following is not one of the qualities of
										the soul?
										<p>a. Eternal</p>
										<p>b. Fearless </p>
										<p>c. Full of love and light</p>
										<p>d. fragrant</p>
									</p>
									<p>
										<span
											className="text-blue-bold"
											style={{ fontStyle: 'italic' }}
										>
											Watch this video “Find God through Meditation,” by Sant
											Rajinder Singh Ji Maharaj. God is everywhere .
										</span>
										&nbsp; We don't see God because our attention is focused
										elsewhere. If we have a zeal and passion to find God, we can
										reach this goal by meditating on the divine Light and Sound
										within.&nbsp;
										<span
											className="text-blue-bold"
											style={{ fontStyle: 'italic' }}
										>
											After watching the video answer the questions.
										</span>
									</p>
									<p style={{ fontWeight: 'bold' }}>
										(1) Which of the following is a definite way to find God?{' '}
									</p>
									<p>a. Doing penances </p>
									<p>b. Fasting </p>
									<p>c. Donating at religious places </p>
									<p>d.Focusing our attention within </p>
									<p style={{ fontWeight: 'bold' }}>
										(2) Where can we find God?
									</p>
									<p>a. In the deepest ocean </p>
									<p>b. In a cave on Mount Everest </p>
									<p>c. In the hearts of young children </p>
									<p>d. Everywhere </p>
									<p style={{ fontWeight: 'bold' }}>
										(3) What is the basic ingredient for progress on the
										spiritual path?{' '}
									</p>
									<p>a. Financial security </p>
									<p>b. Past karma </p>
									<p>c. Specific religion </p>
									<p>d. Sincere efforts in the right direction </p>
									<p style={{ fontWeight: 'bold' }}>
										(4) Which of the following increases as we experience God’s
										Light within?{' '}
									</p>
									<p>a. Passion to realize God. </p>
									<p>b. Karmic debts </p>
									<p>c. Weight </p>
									<p>d. Ritual</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Let’s review this module."
								></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p>
										At the heart of spirituality are these simple key
										principles:
									</p>
									<p>
										• There is one God of all creation. God is in all living
										beings. We have respect for people of all faiths and
										backgrounds.{' '}
									</p>
									<p>
										• Our true self is soul. Within each of us is a soul, a
										great spiritual potential which is a part of the Divine.
										This soul - not the body and mind with which we now identify
										- is our real self.{' '}
									</p>
									<p>
										• The true purpose of life is to reconnect with our soul.
										From this experience flows a peace that is not dependent on
										life's circumstances - a profound peace that is eternal.
										This experience is the true source of the happiness that we
										all crave. Spiritual realization as a matter of first-hand
										inner experience.
									</p>
									<p>
										{' '}
										• Meditation helps us to grow spiritually. It is a natural
										method that can be practiced by anyone, regardless of age,
										health, education, or religion.
									</p>
									<p>
										{' '}
										• A competent teacher speeds our progress. It’s a common
										sense principle of life: studying with one who has mastered
										that subject we wish to learn accelerates our learning. By
										virtue of their own inner awakening, spiritual Masters
										awaken others. We can get on-going guidance from a spiritual
										Master in how to progress spiritually in the shortest
										possible time. The spiritual Master imparts us a connection
										with the inner Light and Sound so our soul can experience
										the love and peace within. On our journey, the spiritual
										Master becomes a constant and unfailing companion guiding
										until we reach our True Home.
									</p>
									<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
										<img src="../../../assets/chapters/5/module-5-image-3(800x400).png" />
									</div>
									<p>
										{' '}
										• Compassion and service for all creation, and lead a life
										imbued with ethical values.
									</p>
									<p>
										{' '}
										• A vegetarian diet is a nonviolent way of life and supports
										our physical health, the health of the planet and our
										spiritual progress.{' '}
									</p>
									<p>
										• Lead a balanced life. Living in the world, we have
										responsibilities towards our family and community and we
										need to work to earn our livelihood. While doing so,
										however, we don’t lose sight of our spiritual goals.
									</p>
									<p>
										• As we advance within through meditation and behold God's
										Light within us, we see that same light shining in others.
										As a consequence of that realization, a natural spirit of
										love for all and compassion becomes the hallmark of our
										outer lives.
									</p>
									<br />
									<br />
									<button className="dfa-btn dfa-btn-primary">
										Answer these questions:
									</button>
									<p className="text-blue-bold" style={{ fontStyle: 'italic' }}>
										(1) Fill in the blanks with the correct choices.
									</p>
									<p>
										a. Only those who ______________ (prioritize/relax) the
										right way will reach their aim.
									</p>
									<p>
										{' '}
										b. Most people put ________ (God/everything else) first and
										_________ (God/everything else) next.
									</p>
									<p className="text-blue-bold" style={{ fontStyle: 'italic' }}>
										(2) List the following items in the correct order from first
										to sixth priority for a person following the spiritual path.
									</p>
									<p>a. Household chores</p>
									<p>b. Office gossip</p>
									<p>c. Meditation</p>
									<p>d. Selfless service</p>
									<p>e. Career path</p>
									<p>f. Who is marrying/dating whom?</p>
									<p className="text-blue-bold" style={{ fontStyle: 'italic' }}>
										(3) What is the ultimate goal of every soul’s human
										experience in the world?
									</p>
									<p>
										a. To get off the wheel of transmigration and merge with
										God.
									</p>
									<p>b. To succeed at sports and bring laurels to the state.</p>
									<p>
										c. To experience all the pleasures of the material world.
									</p>
									<p>d. To earn a lot of money and spend it lavishly.</p>
									<p className="text-blue-bold">
										(4) Which of the following is not an ethical virtue?
									</p>
									<p>a. Purity</p>
									<p>b. Vegetarianism</p>
									<p>c. Violence</p>
									<p>d. Truthfulnes</p>

									<p className="text-blue-bold">(5) What is meditation?</p>
									<p>a. Doing yoga asanas</p>
									<p>b. Going to the Himalayas and living alone</p>
									<p>c. Technique of paying attention to the inner world</p>
									<p>d. Loud chanting of God’s name</p>

									<p className="text-blue-bold">
										(6) Which of the following qualities does not describe God?
									</p>
									<p>a. Eternal </p>
									<p>b. Conscious</p>
									<p>c. Light and Sound</p>
									<p>d. Terminable</p>

									<p className="text-blue-bold">
										(7) How should we balance our spiritual lives while living a
										regular life?
									</p>
									<p>a. Leave everything and go to the mountains</p>
									<p>b. Fulfill your worldly duties and ignore spirituality</p>
									<p>c. Cut off relations with family</p>
									<p>d. Strike a balance between spiritual and worldly lives</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Classroom Activity Videos"
								></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module-5-image-3(800x400).png" />
								</div>
								<div className="text-black">
									<p>
										Here are a few sample videos of class activities from the
										topic Key Principles of Spirituality, out of the Spiritual
										Curriculum.
									</p>
									<p>
										A few Classroom videos related to Pos. Mysticism, Role of
										the Spiritual Master, Key Principles of Spirituality
									</p>
									<p className="text-blue-bold" style={{ fontStyle: 'italic' }}>
										Congratulations you have completed the module on Key
										Principles of Spirituality. Try to lead a balanced life and
										find time to nourish your soul.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Learn more about spirituality"
								></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module-5-image-3(800x400).png" />
								</div>
								<div
									style={{
										backgroundColor: '#dad23e',
										fontWeight: 'normal',
										padding: '40px',
										fontSize: '20px'
									}}
								>
									To learn more about spirituality read this text below and
									answer the questions.
									<br />
									This is optional.
								</div>
								<div className="text-black">
									<p className="text-blue-light">
										For Serenity Become Calm Within
									</p>
									<p className="text-blue-light">
										Editorial by Sant Rajinder Singh Ji Maharaj, Speaking Tree
									</p>
									<p>
										True peace can only be attained when we rise above physical
										body consciousness and enter realms of peace, beauty, and
										bliss within. As in any field of scientific knowledge,
										spirituality also allows us to conduct the experiment of our
										spiritual consciousness within the laboratory of our body.
										The instrumentation used for this experiment is meditation —
										that is, focusing our attention on the seat of the soul and
										ascending to the spiritual realms within us. Once we reach
										these realms, we experience indescribable peace and bliss
										within us, which then translates to outer peace around us.
										Gradually, when more and more people start experiencing this
										inner and outer peace, circles of peace start forming across
										the globe, and ultimately this entire world will become a
										haven of peace and spiritual consciousness for all of us.
										Since there is one Source of entire Creation, so all of us
										are consequentially same and equal. But this truth can only
										be experienced by inversion and not conversion. The outer
										rites and rituals, or the exoteric part of our faiths may
										well be different, but the quintessence of all religions is
										the same. This esoteric part of all religions exhorts us to
										know our true spiritual Self and to attain the merger of our
										soul in God.
									</p>
									<p>
										This can happen only when we soar to the inner spiritual
										realms through meditation. Once we reach these realms, we
										experience indescribable peace and bliss within us, which
										then translates to outer peace around us. For the world to
										become peaceful, we first need to become peaceful ourselves.
										Gradually, when more and more people start experiencing this
										inner and outer peace — circles of peace start forming
										across the globe, and ultimately this entire world will
										become a haven of peace and spiritual consciousness for all
										of us. In modern times, near death experiences have shown
										that there is an existence beyond the human body. This very
										thing is corroborated by the mystical teachings of great
										spiritual masters, who have told us since time immemorial
										that our soul exists beyond the death of our physical body.
									</p>
									<p>
										They have also taught us the way to experience this reality
										by going within and coming in contact with the creative
										force of God, which is the divine Light and Sound of God.
										Finding God is not limited to members of any particular
										religion or faith; it is a path open and available to all.
										As we will meditate regularly, we imbibe the ethical values
										of love, humility, and compassion, and become deeply
										peaceful from within. Meditation is the only means by which
										we can realise our inner unity with entire mankind.
										Vegetarian food not only nourishes our body but also
										nourishes our soul and enhances our spiritual consciouness,
										thus making our soul all the more ready to experience our
										inner spiritual regions.
									</p>

									<p
										className="text-blue-light"
										style={{ fontStyle: 'italic' }}
									>
										(1) Spirituality is based on
									</p>
									<p>1) Blind faith</p>
									<p>2) Beliefs</p>
									<p>3) Scientific approach</p>
									<p>4) Rituals</p>
									<p
										className="text-blue-light"
										style={{ fontStyle: 'italic' }}
									>
										2. For World to become peaceful, first of all
									</p>
									<p>1) We need to become peaceful ourselves.</p>
									<p>2) We need to make our neighbors peaceful.</p>
									<p>3) We need to make our country peaceful.</p>
									<p>4) We need to make our continent peaceful.</p>

									<p
										className="text-blue-light"
										style={{ fontStyle: 'italic' }}
									>
										3. We can experience our soul through
									</p>
									<p>1) Reasoning</p>
									<p>2) Inferences</p>
									<p>3) Analysis</p>
									<p>4) Meditation</p>

									<p
										className="text-blue-light"
										style={{ fontStyle: 'italic' }}
									>
										4. Meditation helps us to realize
									</p>
									<p>1) Ourselves</p>
									<p>2) God</p>
									<p>3) Our unity with entire mankind</p>
									<p>4) All of the above</p>

									<p
										className="text-blue-light"
										style={{ fontStyle: 'italic' }}
									>
										5. Meditation helps bring world peace as
									</p>
									<p>
										1) It makes us realize our inner unity with entire mankind.
									</p>
									<p>2) It makes us loving and compassionate.</p>
									<p>3) It makes us humble.</p>
									<p>4) All of the above.</p>
									<p
										className="text-blue-light"
										style={{ fontStyle: 'italic' }}
									>
										6. We are at peace with others when
									</p>
									<p>1) We have a lot of money.</p>
									<p>2) We attain power and positions of this world.</p>
									<p>3) We enter realms of peace, beauty and bliss within .</p>
									<p>4) We become a celebrity.</p>
									<p
										className="text-blue-light"
										style={{ fontStyle: 'italic' }}
									>
										7. All of us are same and equal because
									</p>
									<p>1) We all are creations of one God.</p>
									<p>2) We all have a family.</p>
									<p>3) We all earn money.</p>
									<p>4) We all are social.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Module5;
