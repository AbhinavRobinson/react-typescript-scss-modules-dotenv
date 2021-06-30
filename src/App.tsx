import classes from "./App.module.scss";

import React from "react";
import dotenv from "dotenv";

const App: React.FC = () => {
  // init dotenv
  dotenv.config();

  return (
    <div className={classes.App}>
      \/ {process.env.REACT_APP_TITLE ?? "dotenv error"} /\
    </div>
  );
};

export default App;
