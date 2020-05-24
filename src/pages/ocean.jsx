import React from "react"
import Styles from "./ocean.module.scss"
const Ocean = () => (
  <div className={Styles.ocean}>
    <div className={Styles.container}>
      <div className={`${Styles.fish} ${Styles.f1}`}>
        <div className={Styles.bell}></div>
        <div className={`${Styles.tentacle} ${Styles.one}`}></div>
        <div className={`${Styles.tentacle} ${Styles.two}`}></div>
        <div className={`${Styles.tentacle} ${Styles.three}`}></div>
        <div className={`${Styles.tentacle} ${Styles.four}`}></div>
      </div>
    </div>
  </div>
)
export default Ocean
