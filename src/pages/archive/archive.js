import React from "react";
import * as actions from "../../actions/archive";
import { ARCHIVE_HEAD_TAG } from "../../constants/archive";
import { domotion } from "react-loading-transition";
import { connect } from "react-redux";
import Tag from "./Tag";
import List from "./List";
import Footer from "../footer/footer";
import "./archive.scss";

@connect((state) => state.archive, actions)
class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archiveList: [],
    };
    this.handleArchiveList = this.handleArchiveList.bind(this);
  }
  componentDidMount() {
    this.props.dispatchArchiveList().then((res) => {
      this.setState(
        {
          archiveList: res,
        },
        () => {
          domotion(false);
        }
      );
    });
  }

  handleArchiveList(label) {
    const { archiveList } = this.props;
    this.setState({
      archiveList:
        label === ARCHIVE_HEAD_TAG
          ? archiveList
          : archiveList.filter((item) =>
              item.attributes.labels.includes(label)
            ),
    });
  }

  render() {
    const { labels } = this.props;
    const { archiveList } = this.state;
    return (
      <main className="archive">
        <Tag tags={labels} handleArchiveList={this.handleArchiveList} />
        <List list={archiveList} />
        <Footer />
      </main>
    );
  }
}

export default Archive;
