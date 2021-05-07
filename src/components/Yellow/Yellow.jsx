import React from "react";

import "../Styles.css";

class Yellow extends React.Component {
	constructor(props) {
		super(props);

		this.indexTimeout = null;
	}

  componentDidMount() {
    this.timer();
  }

  componentWillUnmount() {
    clearTimeout(this.indexTimeout);
  }

  timer() {
    this.indexTimeout = setTimeout(() => {
			clearTimeout(this.indexTimeout);
      if (this.props.location.state.color === "green")
        this.props.history.push("/red");
      else this.props.history.push("/green");
    }, 3000);
  }

  render() {
    return (
      <div className="blocks">
        <div className="red block"></div>
        <div className="yellow block active"></div>
        <div className="green block"></div>
      </div>
    );
  }
}

export default Yellow;
