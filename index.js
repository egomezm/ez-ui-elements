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
export function _ElementTemplate(props) {
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
export function Button(props) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "Click Me!");
}






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




// import 'ItemCard.css';

export function ItemCard(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css",
    integrity: "sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=",
    crossOrigin: "anonymous"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-md-10 "
  }, /*#__PURE__*/React.createElement("div", {
    className: "row "
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-xl-3 col-lg-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card l-bg-cherry"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-statistic-3 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-icon card-icon-large"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-shopping-cart"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "card-title mb-0"
  }, "New Orders")), /*#__PURE__*/React.createElement("div", {
    className: "row align-items-center mb-2 d-flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "d-flex align-items-center mb-0"
  }, "3,243")), /*#__PURE__*/React.createElement("div", {
    className: "col-4 text-right"
  }, /*#__PURE__*/React.createElement("span", null, "12.5%", ' ', /*#__PURE__*/React.createElement("i", {
    className: "fa fa-arrow-up"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "progress mt-1 ",
    "data-height": "8"
    // style='height: 8px;'
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-bar l-bg-cyan",
    role: "progressbar",
    "data-width": "25%",
    "aria-valuenow": "25",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
    // style='width: 25%;'
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "col-xl-3 col-lg-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card l-bg-blue-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-statistic-3 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-icon card-icon-large"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-users"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "card-title mb-0"
  }, "Customers")), /*#__PURE__*/React.createElement("div", {
    className: "row align-items-center mb-2 d-flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "d-flex align-items-center mb-0"
  }, "15.07k")), /*#__PURE__*/React.createElement("div", {
    className: "col-4 text-right"
  }, /*#__PURE__*/React.createElement("span", null, "9.23%", ' ', /*#__PURE__*/React.createElement("i", {
    className: "fa fa-arrow-up"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "progress mt-1 ",
    "data-height": "8"
    // style='height: 8px;'
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-bar l-bg-green",
    role: "progressbar",
    "data-width": "25%",
    "aria-valuenow": "25",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
    // style='width: 25%;'
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "col-xl-3 col-lg-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card l-bg-green-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-statistic-3 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-icon card-icon-large"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-ticket-alt"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "card-title mb-0"
  }, "Ticket Resolved")), /*#__PURE__*/React.createElement("div", {
    className: "row align-items-center mb-2 d-flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "d-flex align-items-center mb-0"
  }, "578")), /*#__PURE__*/React.createElement("div", {
    className: "col-4 text-right"
  }, /*#__PURE__*/React.createElement("span", null, "10%", ' ', /*#__PURE__*/React.createElement("i", {
    className: "fa fa-arrow-up"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "progress mt-1 ",
    "data-height": "8"
    // style='height: 8px;'
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-bar l-bg-orange",
    role: "progressbar",
    "data-width": "25%",
    "aria-valuenow": "25",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
    // style='width: 25%;'
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "col-xl-3 col-lg-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card l-bg-orange-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-statistic-3 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-icon card-icon-large"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-dollar-sign"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "card-title mb-0"
  }, "Revenue Today")), /*#__PURE__*/React.createElement("div", {
    className: "row align-items-center mb-2 d-flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "d-flex align-items-center mb-0"
  }, "$11.61k")), /*#__PURE__*/React.createElement("div", {
    className: "col-4 text-right"
  }, /*#__PURE__*/React.createElement("span", null, "2.5%", ' ', /*#__PURE__*/React.createElement("i", {
    className: "fa fa-arrow-up"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "progress mt-1 ",
    "data-height": "8"
    // style='height: 8px;'
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-bar l-bg-cyan",
    role: "progressbar",
    "data-width": "25%",
    "aria-valuenow": "25",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
    // style='width: 25%;'
  }))))))));
}









