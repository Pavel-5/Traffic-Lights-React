import React from "react";

import "../Styles.css";

class Green extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true,
      count: 5,
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
    if (this.state.count > 3)
      this.indexTimeout.push(
        setTimeout(() => {
          this.setState({
            count: this.state.count - 1,
          });

          this.timer();
        }, 1000)
      );
    else {
      this.setState({
        isActive: !this.state.isActive,
      });

      this.indexTimeout.push(
        setTimeout(() => {
          this.setState({
            isActive: !this.state.isActive,
          });

          this.indexTimeout.push(
            setTimeout(() => {
              if (this.state.count === 1)
                this.props.history.push({
                  pathname: "/yellow",
                  state: { color: "green" },
                });
              else {
                this.setState({
                  count: this.state.count - 1,
                });

                this.timer();
              }
            }, 700)
          );
        }, 300)
      );
    }
  }

  render() {
    return (
      <div className="blocks">
        <div className="red block"></div>
        <div className="yellow block"></div>
        <div
          className={this.state.isActive ? "green block active" : "green block"}
        >
          {this.state.count}
        </div>
      </div>
    );
  }
}

export default Green;
