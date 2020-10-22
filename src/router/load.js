import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.icon = React.createRef();
  }

  componentDidMount() {
    const icon = ReactDOM.findDOMNode(this.icon.current);
    icon && icon.classList.add("icon-done");
  }

  componentDidUpdate() {
    const { isload } = this.props;
    const dom = ReactDOM.findDOMNode(this);
    const icon = ReactDOM.findDOMNode(this.icon.current);
    if (isload) {
      dom.classList.remove("loading-done");
      icon.classList.remove("icon-done");
      dom.classList.add("loading");
      icon.classList.add("icon");
    } else if (!isload) {
      dom.classList.remove("loading");
      icon.classList.remove("icon");
      dom.classList.add("loading-done");
      icon.classList.add("icon-done");
    }
  }
  render() {
    return (
      <main className="initLoading">
        <div ref={this.icon} className="c-transition_spinner">
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20"></circle>
          </svg>
        </div>
      </main>
    );
  }
}