import React from "react";

export default props => {
  return (
    <div className="field">
      <div className="control">

        <button
          type="submit"
          className={`button is-primary ${props.inProgress ? "is-loading" : ""}`}
        >
          {props.children}
        </button>
      </div>
    </div>
  );
};
