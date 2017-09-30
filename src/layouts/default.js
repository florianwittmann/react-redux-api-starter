import React from "react";

export default props => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            {props.title &&
              <h1 className="title">
                {props.title}
              </h1>}
            {props.subtitle &&
              <h2 className="subtitle">
                {props.subtitle}
              </h2>}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">{props.children}</div>
      </section>
    </div>
  );
};
