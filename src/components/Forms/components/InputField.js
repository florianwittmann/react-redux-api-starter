import React, { Component } from "react";
import { Field } from "redux-form";

class InputField extends Component {
  field = props => {
    let { meta, type, title, icon, placeholder } = props;

    return (
      <div className="field">
        <label className="label">{title}</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className={meta.touched && meta.error ? "input is-danger" : "input"}
            type={type ? type : "text"}
            {...props.input}
            placeholder={placeholder ? placeholder : ""}
          />
          {icon
            ? <span className="icon is-small is-left">
                <i className={"fa fa-" + icon} />
              </span>
            : ""}
          {meta.touched && meta.error
            ? <span className="icon is-small is-right">
                <i className="fa fa-warning" />
              </span>
            : ""}
        </div>
        <p className="help is-danger">
          {meta.touched ? meta.error : ""}
        </p>
      </div>
    );
  };

  render() {
    const componentToRender = this.props.component;

    return (
      <Field {...this.props} {...componentToRender} component={this.field} />
    );
  }
}

export default InputField;
