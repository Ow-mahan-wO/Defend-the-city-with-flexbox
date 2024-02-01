import { useDispatch, useSelector } from "react-redux";


const Dialog = ({ description, Open_CloseModal }) => {
  const Dispatch = useDispatch();
  function SpeechDescriptionHandler(description) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(description));
  }
  return (
    <>
      <div className="flex rounded-t-2xl w-[100%] h-[100%] bg-red-500">
        <div className="w-[40%]">
          <img
            className="w-[15rem] h-[15rem]"
            src="/character.gif"
            draggable={false}
          />
          <div className="flex ">
            <button
              className="mt-5 bg-black text-white p-3 rounded-lg my-8 ml-7"
              onClick={() => {
                Dispatch(Open_CloseModal(false));
                speechSynthesis.pause();
              }}>
              OK I understood
            </button>
            <button
              className="bg-black h-[3rem] mt-5 p-3 ml-1 rounded-lg"
              onClick={() => SpeechDescriptionHandler(description)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-[60%] py-12 px-10 text-justify">{description}</div>
      </div>
    </>
  );
};

export default Dialog;
