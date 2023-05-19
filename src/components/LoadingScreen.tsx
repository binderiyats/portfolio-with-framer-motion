import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen: FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const router = useRouter();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setShow(false);
  //     }, 500);
  //   }, [router]);

  return (
    <motion.div
      key={"my_unique_key"}
      exit={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div
        className={`min-w-screen min-h-screen fixed top-0 left-0 bottom-0 right-0 bg-black duration-300`}
      >
        LoadingScreen
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
