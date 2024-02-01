import Editor from "@monaco-editor/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ValidateUserCode } from "../features/Level1/Leve1Slice";

import { motion, spring } from "framer-motion";

const CodeEditor = ({ KillTime }) => {
  const EditorRef = useRef();
  const Dispatch = useDispatch();
  function HandleEditorDidMount(editor, monaco) {
    EditorRef.current = editor;
  }

  return (
    <div className="p-6 w-[100%]">
      <motion.div
        className="flex p-2 ml-[20%] text-lg flex-col border-[10px] rounded-lg border-blue-400 w-[80%] h-[100%] bg-black"
        initial={{ y: 0, opacity: 1 }}
        animate={KillTime && { y: 312, opacity: 0 }}
        transition={{ duration: 3, type: "spring" }}>
        <Editor
          height="100%"
          width="100%"
          options={{
            readOnly: KillTime,
          }}
          onChange={(value) =>
            (value = Dispatch(ValidateUserCode(EditorRef.current.getValue())))
          }
          onMount={HandleEditorDidMount}
          defaultLanguage="css"
          defaultValue=".Zombies{}"
          theme="vs-dark"
        />
      </motion.div>
    </div>
  );
};

export default CodeEditor;
