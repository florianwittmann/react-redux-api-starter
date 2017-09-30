import React, { Component } from "react";
import { Field } from "redux-form";

class TextArea extends Component {
  field = props => {
    let { meta, title, placeholder } = props;

    return (
      <div className="field">
        <label className="label">{title}</label>
        <div className="control">
          <textarea
            className={
              meta.touched && meta.error ? "textarea is-danger" : "textarea"
            }
            {...props.input}
            placeholder={placeholder ? placeholder : ""}
          />

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

export default TextArea;
