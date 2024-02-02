import "../index.css";

import { Link } from "react-router-dom";

const InitialPage = () => {
  document.addEventListener("mousemove", (e) => {
    document.getElementById("cursor").style.top = e.pageY + "px";
    document.getElementById("cursor").style.left = e.pageX + "px";
  });

  return (
    <>
      <div className="bg-gray-950 flex flex-col items-center justify-center h-[100vh] w-[100%]">
        <div id="cursor"></div>
        <div className="text-con">
          <p className="font-bold text-nowrap text-[3rem] text-violet-900 mb-7">
            Defend The City with FlexBox
          </p>
          <p className="font-bold text-[2rem] text-center text-white">
            Welcome
          </p>
          <div className="flex items-center flex-col text-white mt-4">
            <div className="w-[40rem]">
              <p className="text-[1.3rem] text-justify">
                Defend your city and learn flexbox. Zombies have attacked your
                city and are trying to kill people. Stop them This game has 10
                stages and you have to help the game warrior to kill the zombies
                and save the city according to the instructions of the game
                guide. are you ready ?!
              </p>
            </div>
            <Link to="/Level1">
              <button className="bg-violet-900 text-white w-[41.5rem] py-4 rounded-xl text-xl font-bold mt-8 outline-none">
                Let's go
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitialPage;
