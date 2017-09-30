import React from "react";

export default () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>React-Redux-Api-Starter</strong>
            {" "}
            A Starter Template by
            {" "}
            <a href="https://twitter.com/flwittmann">Florian Wittmann</a>

          </p>
          <p>
            Source code is licensed {" "}
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
            <a
              className="icon"
              href="https://github.com/florianwittmann/react-redux-api-starter"
            >
              <i className="fa fa-github" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
