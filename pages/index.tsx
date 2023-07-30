import type { NextPage } from "next";
import { ChakraProvider } from "@chakra-ui/react";

import styles from "../styles/Home.module.css";
import Dashboard from "./components/Dashboard";

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <div className={styles.container}>
        <Dashboard />
      </div>
    </ChakraProvider>
  );
};

export default Home;
