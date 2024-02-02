import { useDispatch, useSelector } from "react-redux";

import Modal from "../ui/Modal";
import Dialog from "../ui/Dialog";

import CodeEditor from "../ui/CodeEditor";
import ZombiesTarget from "../ui/ZombiesTarget";
import { KillZombiesShot, isWinUser } from "../features/Level1/Leve1Slice";
import WinModal from "../components/WinModal/WinModal";
import { Open_CloseModal } from "../features/Level1/Leve1Slice";
import { ValidateUserCode } from "../features/Level1/Leve1Slice";

const Level1 = () => {
  const {
    OpenModalDscription,
    Description,
    newStyles,
    KillTime,
    FinalShot,
    isWinUser,
  } = useSelector((state) => state.Level_1Slice);

  const Dispatch = useDispatch();

  if (KillTime) {
    setTimeout(() => {
      Dispatch(KillZombiesShot(true));
    }, 3000);
  }
  return (
    <div className="w-[100%] h-[100vh] absolute ">
      <div className="w-[100%] h-[100vh] bg-black flex bg-no-repeat">
        <div className="flex items-center justify-center w-[20%] h-[100%]">
          <img src="/character.gif" draggable={false} />
        </div>
        <div className="w-[80%] h-[100%] px-24 py-20">
          <div
            style={{ display: newStyles }}
            className="border-2 items-center justify-center border-dashed border-white w-[100%] h-[100%]">
            <div className={newStyles == "block" && "ml-[40%]"}>
              <ZombiesTarget KillTime={KillTime} Shot={FinalShot}>
                {!FinalShot ? (
                  <img
                    className="w-[15rem] h-[15rem]"
                    draggable={false}
                    src="/ZombieModel3.gif"
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
            <div className={newStyles == "block" && "ml-[40%]"}>
              <ZombiesTarget KillTime={KillTime} Shot={FinalShot}>
                {!FinalShot ? (
                  <img
                    className="w-[15rem] h-[15rem]"
                    src="/ZombieModel2.gif"
                    draggable={false}
                  />
                ) : (
                  <>
                    <audio autoPlay>
                      <source src="/gunShotSound.mp3" />
                    </audio>
                    <img
                      className="w-[15rem] h-[15rem]"
                      src="/deadZombie.gif"
                      alt="deadZombie"
                    />
                  </>
                )}
              </ZombiesTarget>
            </div>
          </div>
        </div>
      </div>

      {isWinUser ? (
        <Modal>
          <WinModal LevelLable="Level1" NextLevel={2} />
        </Modal>
      ) : OpenModalDscription ? (
        <Modal>
          <Dialog description={Description} Open_CloseModal={Open_CloseModal} />
        </Modal>
      ) : (
        <Modal>
          <CodeEditor KillTime={KillTime} ValidateUserCode={ValidateUserCode} />
        </Modal>
      )}
    </div>
  );
};

export default Level1;
