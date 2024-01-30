
import Modal from "../../Modal&Contents/Modal";
import { useSelector } from "react-redux";
import Dialog from "../../Modal&Contents/Dialog";
import CodeEditor from "../../Modal&Contents/CodeEditor";

const Level1 = () => {
  const { OpenModalDscription, Description, newStyles } = useSelector(
    (state) => state.Level_1Slice
  );
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
            <div>
              <img
                className="w-[15rem] h-[15rem]"
                draggable={false}
                src="/ZombieModel3.gif"
              />
            </div>
            <div>
              <img
                className="w-[15rem] h-[15rem]"
                src="/ZombieModel2.gif"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
      {OpenModalDscription ? (
        <Modal>
          <Dialog description={Description} />
        </Modal>
      ) : (
        <Modal>
          <CodeEditor />
        </Modal>
      )}
    </div>
  );
};

export default Level1;
