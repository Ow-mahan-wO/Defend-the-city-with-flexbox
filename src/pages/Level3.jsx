import { useDispatch, useSelector } from "react-redux";

import WinModal from "../components/WinModal/WinModal";
import CodeEditor from "../ui/CodeEditor";
import Dialog from "../ui/Dialog";
import Modal from "../ui/Modal";
import ZombiesTarget from "../ui/ZombiesTarget";

import {
  KillZombiesShot,
  Open_CloseModal,
} from "../features/Level3/Level3Sliece";

const Level3 = () => {
  const {
    Description,
    OpenModalDscription,
    isTrueUserCode,
    KillTime,
    FinalShot,
    isWinUser,
  } = useSelector((state) => state.Level_3Slice);
  const Dispatch = useDispatch();
  if (KillTime) {
    setTimeout(() => {
      Dispatch(KillZombiesShot(true));
    }, 3000);
  }

  return (
    <>
      <div className="w-[100%] h-[100vh] absolute ">
        <div className="w-[100%] h-[100vh] bg-black flex flex-col justify-end bg-no-repeat">
          <div className="px-24">
            <div className="w-[10rem] h-[10rem]">
              <img className="w-[100%] h-[100%]" src="/machineGun.png" alt="" />
            </div>
          </div>
          <div className="w-[100%] h-[75%] px-24 pt-10 pb-20">
            <div className="flex border-2 border-dashed border-white w-[100%] h-[100%]">
              <div>
                <ZombiesTarget KillTime={KillTime} Shot={FinalShot}>
                  {!FinalShot ? (
                    <img
                      className="w-[15rem] h-[15rem]"
                      draggable={false}
                      src="/ZombieModel1.gif"
                    />
                  ) : (
                    <>
                      <img
                        className="w-[15rem] h-[15rem]"
                        src="/deadZombie.gif"
                        alt="deadZombie"
                      />
                      <audio autoPlay>
                        <source src="/gunShotSound.mp3" />
                      </audio>
                    </>
                  )}
                </ZombiesTarget>
              </div>
              <div>
                <ZombiesTarget KillTime={KillTime} Shot={FinalShot}>
                  {!FinalShot ? (
                    <img
                      className="w-[15rem] h-[15rem]"
                      src="/ZombieModel4.gif"
                      draggable={false}
                    />
                  ) : (
                    <img
                      className="w-[15rem] h-[15rem]"
                      src="/deadZombie.gif"
                      alt="deadZombie"
                    />
                  )}
                </ZombiesTarget>
              </div>
            </div>
          </div>
        </div>

        {isWinUser ? (
          <Modal>
            <WinModal LevelLable="Level2" NextLevel={3} />
          </Modal>
        ) : OpenModalDscription ? (
          <Modal>
            <Dialog
              description={Description}
              Open_CloseModal={Open_CloseModal}
            />
          </Modal>
        ) : (
          <Modal>
            <CodeEditor
              KillTime={KillTime}
              ValidateUserCode={ValidateUserCode}
            />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Level3;
