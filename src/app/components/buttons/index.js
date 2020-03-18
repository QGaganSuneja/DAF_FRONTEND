import './button.scss';

export const PrimaryButton = props => {
	let classes = 'dfa-btn dfa-btn-primary';
	if (props.className) {
		classes = props.className;
	}
	return (
		<button onClick={props.OnClick} className={classes}>
			{props.btn_text}
		</button>
	);
};

export const FormInput = props => {
	return (
		<div className="form-group">
			<input
				type={props.type}
				placeholder={props.placeholder}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
				className={'form-control' + ' ' + props.classes}
			/>
		</div>
	);
};
