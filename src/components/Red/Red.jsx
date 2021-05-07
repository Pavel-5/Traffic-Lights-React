import React from "react";

import "../Styles.css";

class Red extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
    };

    this.indexTimeout = [];
  }

  componentDidMount() {
    this.timer();
  }

  componentWillUnmount() {
    this.indexTimeout.forEach((index) => {
      clearTimeout(index);
    });
  }

  timer() {
    if (this.state.count === 0) {
      this.indexTimeout.forEach((index) => {
        clearTimeout(index);
      });

      this.props.history.push({
        pathname: "/yellow",
        state: { color: "red" },
      });
    } else {
      this.indexTimeout.push(
        setTimeout(() => {
          this.setState({
            count: this.state.count - 1,
          });

          this.timer();
        }, 1000)
      );
    }
  }

  render() {
    return (
      <div className="blocks">
        <div className="red block active">{this.state.count}</div>
        <div className="yellow block"></div>
        <div className="green block"></div>
      </div>
    );
  }
}

export default Red;
