import React from "react";
import { Comment } from "../../../../components";
import "./index.scss";

export default class Comments extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
    };
  }

  handleClick = () => {
    this.setState({
      load: true,
    });
  };

  render() {
    const { id } = this.props;
    const { load } = this.state;
    return (
      <div style={Styles.layout}>
        {load ? (
          <Comment slug={id} />
        ) : (
          <div className="comment" onClick={this.handleClick.bind(this)}>
            加载评论
          </div>
        )}
      </div>
    );
  }
}

const Styles = {
  layout: {
    marginTop: "50px",
    width: "90%",
  },
};
