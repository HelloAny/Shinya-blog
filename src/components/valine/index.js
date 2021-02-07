import React from "react";
import { appId, appKey } from "../../constants/auth";

export default class Comment extends React.PureComponent {
  constructor(props) {
    super(props);
    this._commentRef = React.createRef();
  }

  async componentDidMount() {
    // 当window变量未被定义时，不加载valine模块，否则会导致编译时报错
    if (typeof window === "undefined") {
      return;
    }
    if (!this._commentRef.current) {
      return;
    }
    const Valine = await (await import("valine")).default;
    this._valine = new Valine({
      el: this._commentRef.current, // 如果是用id定位<div>，则这里填入id
      appId,
      appKey,
      path: this.props.slug,
      avatar: "retro",
      emojiCDN: "https://pic.amikara.com/blog/",
      emojiMaps: {
        tb_坏笑: "bqb1.png",
        tb_委屈: "bqb2.png",
        tb_礼物: "bqb3.png",
        tb_吃惊: "bqb4.png",
        tb_咖啡: "bqb5.png",
        tb_疑问: "bqb6.png",
        tb_怒气: "bqb7.png",
        tb_棒: "bqb8.png",
        tb_呕: "bqb9.png",
        tb_疑虑: "bqb10.png",
        tb_太好了: "bqb11.png",
        tb_鄙视: "bqb12.png",
        tb_low: "bqb13.png",
        tb_牛逼: "bqb14.png",
        tb_财迷: "bqb15.png",
        tb_不好意思: "bqb16.png",
        tb_无语: "bqb17.png",
        tb_困: "bqb18.png",
        tb_蜘蛛侠: "bqb19.png",
        tb_灯泡: "bqb20.png",
        tb_喷水: "bqb21.png",
        tb_龙鸣: "bqb22.png",
        tb_帅: "bqb23.png",
        tb_生气: "bqb24.png",
        tb_玫瑰: "bqb25.png",
        tb_哈哈: "bqb26.png",
        tb_滑稽: "bqb27.png",
        tb_恰个v: "bqb28.png",
        tb_嘿嘿: "bqb29.png",
        tb_傻比无语: "bqb30.png",
        tb_汗: "bqb31.png",
        tb_吓死: "bqb32.png",
        tb_大哭: "bqb33.png",
        tb_很多钱: "bqb34.png",
        tb_哈哈哈: "bqb35.png",
        tb_音乐: "bqb36.png",
        tb_难过: "bqb37.png",
        tb_可怜: "bqb38.jpg",
        tb_yeah: "bqb39.png",
        tb_yeah2: "bqb40.png",
        tb_彩虹: "bqb41.png",
        tb_开心: "bqb42.png",
        tb_哦: "bqb43.png",
        tb_口: "bqb44.png",
        tb_做坏: "bqb45.png",
      },
    });
  }

  render() {
    return (
      <div style={{ width: "90%" }}>
        <div ref={this._commentRef} />
      </div>
    );
  }
}
