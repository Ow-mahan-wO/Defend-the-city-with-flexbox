import Editor from "@monaco-editor/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ValidateUserCode } from "../Levels/Level1/Leve1Slice";

const CodeEditor = () => {
  const EditorRef = useRef();
  const Dispatch = useDispatch();
  function HandleEditorDidMount(editor, monaco) {
    EditorRef.current = editor;
  }

  return (
    <div className="p-6 w-[100%]">
      <div className="flex p-2 text-lg flex-col border-[10px] rounded-lg border-blue-400 w-[100%] h-[100%] bg-black">
        <Editor
          height="100%"
          width="100%"
          onChange={(value) =>
           value=Dispatch(ValidateUserCode(EditorRef.current.getValue()))
          }
          onMount={HandleEditorDidMount}
          defaultLanguage="css"
          defaultValue=".Zombies{}"
          theme="vs-dark"
        />
      </div>
    </div>
  );
};

export default CodeEditor;
