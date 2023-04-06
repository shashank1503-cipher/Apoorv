import Image from "next/image";
import styles from "../../styles/EventDetails.module.css";
import abc from "../../../public/img2.svg";
import { useState } from "react";

const EventDetails = (props) => {
  const [visible, setVisible] = useState("invisible");
  const handleVisible = () => {
    if (visible === "visible") {
      setVisible("invisible");
    } else {
      setVisible("visible");
    }
  };
  return (
    <div className={styles.main_div}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <h1>Details</h1>
        </div>
        <div className={styles.body}>
          <p>{props.description}</p>
          {props.isCTF ? (
            <div>
              <button onClick={(e) => handleVisible()}>Click here</button>
              <div
                style={{
                  display: visible === "visible" ? "flex" : "none",
                  flexDirection: "column",
                }}
              >
                Haha! April's Fool!
                <br /> Wait... It was on 1st April?
                <br />
                Then the flag must have been revealed!
                <br />
                <p style={{ color: "RGB(77, 34, 30)" }}>
                  QXBvb3J2Q1RGe3QzeHRfaGlnaDFpOXRpbjlfaXNfcjM0bGx5X2MwMGx9
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.img}>
        <Image src={abc} alt={"image"} fill />
        <div className={styles.after}>
          <div className={styles.date}>
            <h1>{props.date}</h1>
          </div>
          <div className={styles.divider}>
            <hr />
          </div>
          <div className={styles.time}>
            <h1>{props.time}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
