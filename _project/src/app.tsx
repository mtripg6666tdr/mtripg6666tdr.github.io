import React from "react";
import { WorksBox } from "./components/worksBox";

export function App() {
  return (
    <>
    <div className="base_container">
      <h1>うさみょん(myon2019)/mtripg6666tdrの作品置き場</h1>
      <p>作ったものをとりあえず並べて置くところ<span className="strike">誰得</span></p>
      <WorksBox />
    </div>
    <footer>
      <span>Copyright &copy; 2016-2022 mtripg6666tdr All Rights Reserved.</span>
    </footer>
    </>
  )
}