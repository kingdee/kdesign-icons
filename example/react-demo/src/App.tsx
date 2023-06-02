// import { Add, Abs,ArrowDownSolid,ArrowLeftSolid } from "@kdesign-icons/react";
import * as icons from "@kdcloudjs/kdesign-icons";
import "./App.css";

function App() {
  console.log(icons);
  return (
    <>
      {Object.values(icons).map((item, key) => {
        const Components = item;
        return (
          <div className="icon-item" key={key}>
            <Components key={key} size='32px' />
            <div>
              {key}.
              {item.displayName}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
