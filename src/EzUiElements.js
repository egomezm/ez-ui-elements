import React from 'react';

export default function EzUiElements(props) {
	return <div className='row no-print'>EZ UI Elements</div>;
}

export function Test(props) {
	return <div>Bleh!</div>;
}

export function EndDateInput(props) {
	const entity = props.entity || 'date';
	const label = props.label || 'Date';
	const subtext = props.subtext || '';
	const required = props.required || false;

	return (
		<div>
			<label htmlFor='date' className='control-label'>
				{label}
			</label>
			<input
				type='date'
				className='form-control'
				id={entity}
				name={entity}
				value={props.value}
				onChange={(event) => {
					props.onChange(event.target.value);
				}}
				min='2000-01-01'
				max='9999-12-31'
				required={required}
			/>
			<small className='text-muted'>{subtext}</small>
		</div>
	);
}
