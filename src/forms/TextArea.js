export function TextArea(props) {
	const value = props.value || '';
	const label = props.label || 'Notes';
	const placeholder =
		(props.placeholder && props.placeholder) || 'Enter Notes ...';
	const subtext = (props.subtext && props.subtext) || '';
	const maxLength = (props.maxLength && props.maxLength) || 1000;
	const required = (props.required && props.required) || false;

	return (
		<div>
			<label htmlFor='notes' className='control-label'>
				{label}
			</label>
			<textarea
				className='form-control'
				name='notes'
				id='notes'
				placeholder={placeholder}
				value={value}
				onChange={(event) => {
					props.onChange(event.target.value);
				}}
				maxLength={maxLength}
				required={required}
			/>
			<small className='text-muted'>{subtext}</small>
		</div>
	);
}
