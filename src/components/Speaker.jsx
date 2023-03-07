import React, { useEffect } from "react";
import styles from "../styles/Speaker.module.css";
import { speakers } from "../pages/api/speakerdata";
import { useState } from "react";
import axios from "axios";
const Speaker = () => {
  const [people, setPeople] = useState(speakers);
  console.log(people, speakers);
  useEffect(() => {
    axios
      .get("api/speakerdata")
      .then((res) => {
        return res.data;
      })
      .then((data) => setPeople(data));
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Speakers</h1>
      <div className={styles.container}>
        {/* use a map function using its key to loop through the speakers array and display the speakers */}
        <div className={styles.grid}>
          {people?.map((person) => (
            <div className={styles.card} key={person.id}>
              <img
                src={person.image}
                alt=''
                srcset=''
                height='250px'
                width='auto'
              />
              <h3>{person.name}</h3>
              <p>{person.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speaker;
