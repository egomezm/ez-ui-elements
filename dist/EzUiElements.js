import React from 'react';
export default function EzUiElements(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "row no-print"
  }, "EZ UI Elements");
}
export function Test(props) {
  return /*#__PURE__*/React.createElement("div", null, "Bleh!");
}
export function EndDateInput(props) {
  const entity = props.entity || 'date';
  const label = props.label || 'Date';
  const subtext = props.subtext || '';
  const required = props.required || false;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "date",
    className: "control-label"
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "form-control",
    id: entity,
    name: entity,
    value: props.value,
    onChange: event => {
      props.onChange(event.target.value);
    },
    min: "2000-01-01",
    max: "9999-12-31",
    required: required
  }), /*#__PURE__*/React.createElement("small", {
    className: "text-muted"
  }, subtext));
}