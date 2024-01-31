import { motion } from "framer-motion";

const ZombiesTarget = ({ children, KillTime, Shot }) => {
  return (
    <div className="flex relative">
      {KillTime && !Shot ? (
        <>
          <motion.img
            className="absolute w-[7rem] h-[6rem] left-12 top-12"
            initial={{ opacity: 0, scale: 0, y: 200 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                delay: 1,
                type:'spring'
            }}
            src="/target.png"
            alt="cursorTarget"
          />
        </>
          ) : null}   
      {children}
    </div>
  );
};

export default ZombiesTarget;
