import React from "react";
import styles from "./styles";
import { IoMdWallet } from "react-icons/io";

function Login({ connectWallet }) {
  return (
    <div className={styles.walletConnectWrapper}>
      <div className={styles.semiWrapper}>
        <button
          className={styles.button}
          onClick={() => connectWallet("injected")}
        >
          Connect Wallet
          <IoMdWallet />
        </button>
        <div className={styles.details}>
          You need Chrome to be <br /> able to run this app
        </div>
      </div>
    </div>
  );
}

export default Login;
