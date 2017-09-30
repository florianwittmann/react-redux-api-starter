import React from "react";

export default props => {
  if (!props.errorMessage) return null;

  return (
    <div className="notification is-danger">
      <strong>Ooops!</strong> {props.errorMessage}
    </div>
  );
};
