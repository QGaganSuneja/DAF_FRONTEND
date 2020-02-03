import { Player } from 'video-react';
export const VideoPlayer = props => {
	return (
		<Player autoplay>
			<source src={props.src}></source>
		</Player>
	);
};
