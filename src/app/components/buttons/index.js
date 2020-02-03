import './button.scss';

export const PrimaryButton = props => {
	return (
		<button onClick={props.OnClick} className="dfa-btn dfa-btn-primary">
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
