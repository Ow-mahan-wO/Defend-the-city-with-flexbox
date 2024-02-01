import { useDispatch, useSelector } from "react-redux";
import ZombiesTarget from "../ui/ZombiesTarget";
import Modal from "../ui/Modal";
import WinModal from "../components/WinModal/WinModal";
import Dialog from "../ui/Dialog";
import CodeEditor from "../ui/CodeEditor";
import { KillZombiesShot, Open_CloseModal } from "../features/Level2/Leve2Slice";
import { ValidateUserCode } from "../features/Level2/Leve2Slice";


const Level2 = () => {
  const {
    OpenModalDscription,
    Description,
    isTrueUserCode,
    KillTime,
    FinalShot,
    isWinUser,
  } = useSelector((state) => state.Level_2Slice);

  const Dispatch = useDispatch();

  if (KillTime) {
    setTimeout(() => {
      Dispatch(KillZombiesShot(true));
    }, 3000);
  }
  console.log(FinalShot);
  return (
    <>
      <div className="w-[100%] h-[100vh] absolute ">
        <div className="w-[100%] h-[100vh] bg-black flex bg-no-repeat">
          <div className="flex items-center justify-center w-[20%] h-[100%]">
            <img src="/character.gif" draggable={false} />
          </div>
          <div className="w-[80%] h-[100%] px-24 py-20">
            <div
              style={isTrueUserCode?{display:'flex',alignItems:'center'}:{}}
              className="border-2 border-dashed border-white w-[100%] h-[100%]">
              <div >
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
              <div >
                <ZombiesTarget KillTime={KillTime} Shot={FinalShot}>
                  {!FinalShot ? (
                    <img
                      className="w-[15rem] h-[15rem]"
                      src="/ZombieModel2.gif"
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
            <WinModal LevelLable="Level1" NextLevel={3} />
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
    </>
  );
};

export default Level2;
