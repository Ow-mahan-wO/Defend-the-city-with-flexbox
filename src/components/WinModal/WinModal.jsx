import Star from "./Star";

import { motion } from "framer-motion";

const WinModal = ({ LevelLable }) => {
  const WINMODAL_VARIANT = {
    before: {
      y: 400,
      scale: 0,
    },
    after: {
      y: 0,
      scale: 1,
      transition: {
        duration: 2,
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  
  return (
    <motion.div
      className="flex items-center flex-col rounded-t-2xl w-[100%] h-[100%] bg-red-500"
      variants={WINMODAL_VARIANT}
      initial="before"
      animate="after">
      <div className="text-3xl font-bold mt-5">{LevelLable}</div>
      <div className="flex mt-5">
        <Star />
        <Star />
        <Star />
      </div>
          <div>
              <button className="bg-black text-white p-3 w-[13rem] rounded-xl mt-8 font-bold">Next Level</button>
      </div>
    </motion.div>
  );
};

export default WinModal;
