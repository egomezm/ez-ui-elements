export function TextArea(props) {
  const value = props.value || '';
  const label = props.label || 'Notes';
  const placeholder = props.placeholder && props.placeholder || 'Enter Notes ...';
  const subtext = props.subtext && props.subtext || '';
  const maxLength = props.maxLength && props.maxLength || 1000;
  const required = props.required && props.required || false;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "notes",
    className: "control-label"
  }, label), /*#__PURE__*/React.createElement("textarea", {
    className: "form-control",
    name: "notes",
    id: "notes",
    placeholder: placeholder,
    value: value,
    onChange: event => {
      props.onChange(event.target.value);
    },
    maxLength: maxLength,
    required: required
  }), /*#__PURE__*/React.createElement("small", {
    className: "text-muted"
  }, subtext));
}