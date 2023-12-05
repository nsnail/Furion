import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import styles from "./FloatBar.module.css";

export default function FloatBar() {
  return (
    <div className={styles.floatbar}>
      <div className={styles.qrcode}>
        <img
          title="微信扫码关注 Furion 官方公众号"
          src={useBaseUrl("img/weixin_qrcode.jpg")}
          style={{ display: "block" }}
        />
        <div>❤️ 关注 Furion 微信公众号有惊喜哦！</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "flex-start",
        }}
      >

        <div className={styles.extend}>
          <Link className={styles.item} to={useBaseUrl("docs/subscribe")}>
            <div style={{ flex: 1 }}>
              <div className={styles.itemTitle}>⭐️ VIP 服务 ⭐️</div>
              <div className={styles.itemDesc}>
                仅需 499 元/年，尊享 365 天项目无忧
              </div>
            </div>
            <div className={styles.jiantou}></div>
          </Link>
          <Item
            title="问题反馈"
            description="到 Furion 开源仓库反馈"
            onClick={() =>
              window.open(
                "https://gitee.com/dotnetchina/Furion/issues",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

function Item({ title, description, onClick }) {
  return (
    <div className={styles.item} onClick={onClick}>
      <div style={{ flex: 1 }}>
        <div className={styles.itemTitle}>{title}</div>
        <div className={styles.itemDesc}>{description}</div>
      </div>
      <div className={styles.jiantou}></div>
    </div>
  );
}
