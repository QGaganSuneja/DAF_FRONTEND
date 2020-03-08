import Heading from '../../heading';
import { PrimaryButton } from '../../buttons';
import { VideoPlayer } from '../../video-player/index';
class Module6 extends React.Component {
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
			src: '../../../../assets/chapters/5/6.mp4'
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
			<div className="ch-container_7">
				<div className="ch-container__section">
					<h3>Module 6</h3>
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
									heading="Introduction to a Vegetarian Diet"
								></Heading>

								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									{!this.state.isVideo && (
										<img src="../../../assets/chapters/5/module-5-image-1(800x400).png" />
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
										Welcome to the module Introduction to Vegetarian Diet A
										vegetarian diet consists of plant foods, including
										vegetables, fruits, grains, legumes (beans, peas, lentils,
										etc.), as well as dairy products, such as milk, cheese,
										butter, yogurt, and ice cream.
									</p>
									<p>
										The Spiritual Curriculum introduces students to the topic of
										vegetarian diet, health and nutrition. Students learn how to
										plan a vegetarian meal and vegetarian cooking.
									</p>
									<p>
										Vegetarianism is a compassionate diet because it involves
										eating food which doesn’t involve the killing of any
										animals. It supports our spiritual development. A vegetarian
										diet is being promoted by many medical doctors for health
										benefits. When comprised of nutritious whole foods, it has a
										significant impact on our health. It is not only healthy for
										the body but it is also healthy for the planet and helps the
										environment. The following module highlights some of the
										benefits of a vegetarian diet, and includes some suggested
										activities for class lessons.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Benifits of Vegetarian Diet"
								></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module-5-image-2(800x400).png" />
								</div>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p className="text-blue-bold">
										Physical Benefits of a Vegetarian Diet:
									</p>
									<p>
										Research performed by many doctors and scientists concludes
										that a balanced plant based diet is good for our physical
										health. Doctors are advising people to eliminate
										non-vegetarian food from the diet and instead eat more
										vegetables, fruits, legumes and grains. All around the world
										a vegetarian lifestyle is being recommended. Many companies
										and restaurants have added more vegetarian dishes to their
										menu to promote healthy eating.
									</p>
									<p className="text-blue-bold">
										Mental and Intellectual Benefits of a Vegetarian Diet
									</p>
									<p>
										People around the world are becoming more aware of the
										body-mind connection. When we eat a plant based diet we
										become more peaceful than those who eat meat, fish or eggs.
										The reason this happens is that we pick up the vibration of
										whatever we eat. If we eat animals we may pick up some of
										their animalistic nature. Whatever we eat has an effect on
										us. Eating plant products has a more calming and peaceful
										effect on our mind.
									</p>
									<p className="text-blue-bold">
										Physical Benefits of a Vegetarian Diet:
									</p>
									<p>
										Research performed by many doctors and scientists concludes
										that a balanced plant based diet is good for our physical
										health. Doctors are advising people to eliminate
										non-vegetarian food from the diet and instead eat more
										vegetables, fruits, legumes and grains. All around the world
										a vegetarian lifestyle is being recommended. Many companies
										and restaurants have added more vegetarian dishes to their
										menu to promote healthy eating.
									</p>
									<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
										<img src="../../../assets/chapters/5/module-5-image-2(800x400).png" />
									</div>
									<p className="text-blue-bold">
										Spiritual Benefits of a Vegetarian Diet
									</p>
									<p>
										Saints and mystics have spoken of the spiritual benefits of
										a vegetarian diet. One aspect of ethical living is
										nonviolence. Saints have talked about caring for all forms
										of life. A plant based diet is a compassionate and
										nonviolent diet as no living animal is cruelly killed for
										food.
									</p>
									<p className="text-blue-bold">
										Ecological Benefits of a Vegetarian Diet
									</p>
									<p>
										People around the world are becoming more interested about
										the welfare of our community and the preservation of our
										planet. Environmentalists have pointed out that one solution
										to the problem of food and water shortages is better
										utilization of our resources. They have shown that much more
										fuel, water and energy is needed to raise cattle and produce
										meat than is used to produce grains, vegetables and fruits.
										So vegetarianism is an effective way of conserving the
										resources of our planet. If everyone was a vegetarian, there
										would be more food, water and land resources for the future
										generations.
									</p>
									<p>
										The reasons for not eating meat are compelling. The
										fantastic news is that being a vegetarian can help us attain
										a healthier body, mind, soul and planet.{' '}
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="See the Mindmap with the Benefits of a Vegetarian Diet"
								></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module-5-image-2(800x400).png" />
								</div>
								<Heading
									isUp={true}
									heading="Watch this PPT: Introduction to a Vegetarian Diet"
								></Heading>
								<div style={{ padding: '100px' }}>
									<iframe
										src="https://onedrive.live.com/embed?resid=99C852D64B51706%21114&amp;authkey=%21AM7nl_gmL9aa0yY&amp;em=2&amp;wdAr=1.3333333333333333"
										width="722px"
										height="565px"
										frameborder="0"
									>
										This is an embedded{' '}
										<a target="_blank" href="https://office.com">
											Microsoft Office
										</a>{' '}
										presentation, powered by{' '}
										<a target="_blank" href="https://office.com/webapps">
											Office
										</a>
										.
									</iframe>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Read this talk: Vegetarianism and Spirituality"
								></Heading>
								<div className="text-black" style={{ paddingTop: '20px' }}>
									<p className="text-blue-bold" style={{ fontStyle: 'italic' }}>
										By Sant Rajinder Singh Ji Maharaj
										<br />
										(From www.sos.org)
									</p>
									<p>
										For those concerned with improving your health,
										vegetarianism is now being promoted by many medical doctors
										who claim that this diet provides optimum nutrition and
										guards against many diseases caused by non-vegetarian foods.
										When considering the vegetarian diet, most people focus on
										the health benefits.
									</p>
									<p>
										They may learn about the variety of vegetarian dishes that
										can be prepared, take nutrition lessons on how to eat a
										balanced diet using vegetarian foods, and study how to get
										protein from meat substitutes such as vegetarian products
										made from soy, nuts, beans, and vegetable protein, among
										others.
									</p>
									<p>
										However, other aspects of the vegetarian diet are equally
										important. Along with improving our physical well-being,
										there exists a vital connection between our spiritual
										essence and the foods we eat.
									</p>
									<p className="text-blue-bold">
										Connecting with Your Inner Essence
									</p>
									<p>
										Spirituality is not only concerned with discovering your own
										inner side but is an extension of having love and concern
										for all life in creation. Spirituality involves bringing us
										closer to our true nature, our inner self, which is one with
										God.
									</p>
									<p>
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
									</p>
									<p>
										When we look at life through the consciousness of the soul,
										we begin to live in a gentler manner and start respecting
										all forms of life. This is one of the reasons that many
										people who are in touch with their soul turn to a vegetarian
										diet. They feel that God has provided enough food in the
										form of plants to sustain them, and it is not necessary to
										take the life of any of God’s creatures for food.
									</p>
									<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
										<img src="../../../assets/chapters/5/module-5-image-2(800x400).png" />
									</div>
									<p className="text-blue-bold" style={{ fontStyle: 'italic' }}>
										A Diet That Complements Meditation
									</p>
									<p>
										Vegetarianism complements meditation. Vegetarianism is the
										most compassionate diet because it involves eating food
										containing the least amount of destruction of life. For
										those who wish to make rapid progress in meditation, a
										vegetarian diet is important. Many great philosophers,
										artists, poets, writers, and many enlightened people have
										been vegetarians as well.
									</p>
									<p>
										The great artist, Leonardo da Vinci, was a vegetarian who
										had great compassion. Whenever he saw a caged bird, he would
										pay the owner for the cage and the bird. Then he would open
										the cage door and watch the joyful bird soar to freedom.
									</p>
									<p>
										Sir Isaac Newton, Mahatma Gandhi, and Albert Schweitzer are
										just a few examples of great philosophers, scientists,
										humanitarians, and world leaders who inspired others to
										adopt a path of nonviolence towards all creation.
									</p>
									<p className="text-bold-blue">
										We Are Accountable for Our Actions
									</p>
									<p>
										Enlightened beings have taught that animals too have
										consciousness or a soul, which makes them also a part of
										God. Thus, the spiritual basis of vegetarianism is not to
										take the life of any other creature. One of the principles
										is not to harm any living creature. Thus, if we wish to find
										God, then we need to be loving and caring to all God’s
										creatures. That is why a vegetarian diet forms a part of a
										spiritual life.
									</p>
									<p>A Vegetarian Diet Helps You to Improve in Meditation </p>
									<p>
										For those who are seeking to improve in meditation,
										including for spiritual growth, vegetarianism offers another
										benefit. Those involved in developing spiritually and want
										to experience their inner self or soul can do so through
										meditation, which is enhanced by a vegetarian diet.
									</p>

									<p>
										Meditation requires stillness. Our attention is usually
										focused on the outer sights, sounds, smells, tastes, and
										sensations of this world, which keeps us from tuning
										ourselves to the spiritual gifts within. This requires
										concentration. To concentrate in meditation, we need to be
										calm and collected. What benefit do we gain from avoiding
										foods from dead animals? One benefit is that avoiding such
										foods can raise our consciousness. We know the effect that
										our own hormones have on our body. Just imagine how many
										stress hormones we are adding, which were circulating in the
										animals, birds, or fish when they were being killed or
										slaughtered to be used as meat! That is all forming a part
										of us when we partake of it. The food we eat not only has an
										effect upon our physical, emotional, and mental makeup, but
										on our spiritual consciousness.
									</p>
									<p>
										{' '}
										If we are trying to lead a life of nonviolence and
										compassion, if we are trying to become more serene and
										peaceful, if we are trying to still our mind to concentrate
										within to find our spiritual treasures, then we will
										naturally want to follow a diet that helps us achieve our
										goal.
									</p>
									<br />
									<br />
									<p
										className="text-blue-light"
										style={{ fontStyle: 'italic' }}
									>
										Answer these MCQs
									</p>
									<p
										className="text-blue-light"
										style={{ fontStyle: 'italic' }}
									>
										(1) Vegetarianism is a must for those who follow spiritual
										path as
									</p>
									<p>1) It leads to better concentration.</p>
									<p>2) No harm is done to any living creature.</p>
									<p>3) Results in calmness.</p>
									<p>4) All of the above</p>
									<p
										className="text-blue-light"
										style={{ fontStyle: 'italic' }}
									>
										(1) We should adopt a vegetarian life style as
									</p>
									<p>
										1) Research has proved that it is good for our physical
										health.
									</p>
									<p>2) It makes us more peaceful.</p>
									<p>3) Nonviolence and vegetarianism go hand in hand.</p>
									<p>4) All of the above.</p>
									<p
										className="text-blue-light"
										style={{ fontStyle: 'italic' }}
									>
										(1) Vegetarian diet can increase the health of
									</p>
									<p>1) Our Body</p>
									<p>2) Our Mind</p>
									<p>3) Our Soul</p>
									<p>4) All of the above.</p>
									<p
										className="text-blue-light"
										style={{ fontStyle: 'italic' }}
									>
										(1) Those who eat meat, ingest
									</p>
									<p>1) Flesh</p>
									<p>
										2) Stress hormones that are released due to animal’s fear
									</p>
									<p>3) Both (1) and (2)</p>
									<p>4) None of the above.</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="Read these FAQs from the Veggie Fest Chicago website:"
								></Heading>
								<div style={{ padding: '10% 0% 5% 0%', textAlign: 'center' }}>
									<img src="../../../assets/chapters/5/module-5-image-3(800x400).png" />
								</div>
								<div className="text-black">
									<p className="text-blue">
										How can a vegetarian diet affect our environment, especially
										our water resources?
									</p>
									<p>
										According to a recent report from UNESCO, without
										significant global policy change, the world will only have
										60% of the water it needs by 2030. In terms of food
										production, it takes 15,500 liters of water to produce 1 kg
										beef, contrasted with 180 liters for 1 kg tomatoes and 250
										liters for 1 kg potatoes.
									</p>
									<p className="text-blue">
										Is it true that becoming vegetarian could help alleviate
										global warming?
									</p>
									<p>
										If current dietary habits and trends continue, by 2050 we
										will experience a 51% increase in current levels of
										environmental markers like greenhouse gas emissions, CO2,
										rising temperatures, and an increased carbon footprint
										associated with food production. These factors are based on
										current trends in global population growth and on the fact
										that as populations get wealthier, people tend to eat more
										meat. Between now and 2050, a global switch to diets that
										rely far less on meat and far more on vegetables, fruits,
										and other plant foods could reduce food-related greenhouse
										gas emissions by two-thirds.
									</p>
									<p className="text-blue">
										What are the health benefits of becoming a vegetarian?
									</p>
									<p>
										According to a Harvard Medical School publication,
										“Plant-based eating is recognized as not only nutritionally
										sufficient but also as a way to reduce the risk for much
										chronic illness.” (Harvard Health, December 4, 2017). In one
										of the largest studies that combined data from five studies
										involving more than 76,000 participants, vegetarians were
										25% less likely to die of heart disease. Research also
										suggested that a predominantly plant-based diet could reduce
										the risk for type 2 diabetes by 50%.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<Heading
									isUp={true}
									heading="See these Art and Craft Activities related to Vegetarian Diet for Children:"
								></Heading>
								<div className="row">
									<div className="col-md-6"></div>
									<div className="col-md-6"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Module6;
