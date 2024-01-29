import { useState } from "react";
import Modal from "../../Modal";

const Level1 = () => {
    const [openModal, setOpenModal] = useState(true);
    const Description = `Oh hi fighter . Our mission today is very simple, but pay attention because this is the beginning of the war . you should At this stage, you have to place the zombies in a line so that the shooter can kill them. You can do this with the (display:flex;) command. Be quick before it's too late!`;
    return (
        <div className="w-[100%] h-[100vh] absolute ">
      <div className="w-[100%] h-[100vh] bg-black flex bg-no-repeat">
        <div className="flex items-center justify-center w-[20%] h-[100%]">
          <img src="/character.gif" alt="" />
        </div>
        <div className="w-[80%] h-[100%] px-24 py-20">
          <div className="border-2 items-center justify-center border-dashed border-white w-[100%] h-[100%]">
            <div>
              <img
                className="w-[15rem] h-[15rem]"
                src="/ZombieModel3.gif"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[15rem] h-[15rem]"
                src="/ZombieModel2.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {openModal ? <Modal description={Description} setOpenModal={setOpenModal} />:null}
      </div>
  );
};

export default Level1;
