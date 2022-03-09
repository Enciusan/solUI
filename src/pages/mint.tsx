import "../App.css";
import { useMemo, useState } from "react";
import Home from "../Home";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getMathWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { ThemeProvider, createTheme, Slider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
  : undefined;

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 60000; // milliseconds (confirm this works for your project)

const Mint = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  // const [isVisible, setIsVisible] = useState(false);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSolletWallet(),
      getMathWallet(),
    ],
    []
  );
  return (
    <div
      className="w-full h-screen px-8 bg-gradient-to-l from-[#a6b9fe] via-[#b9b0e9] to-pink-300"
      id="roadmap"
    >
      <h2 className="text-dark lg:text-7xl text-5xl font-pirata text-center pt-10">
        MINT PAGE
      </h2>

      <div className="grid grid-cols-2 pt-10">
        <div className="w-3/4 pt-10 ">
          <img className="rounded-xl" src="../img/ukr.jpg"></img>
        </div>
        <div className="w-full h-full">
          <div className="pt-10 text-xl font-mono font-bold">
          &nbsp;&nbsp;&nbsp;Foxes, we never thought this moment would come … <br/>
          &nbsp;&nbsp;&nbsp;In these difficult times, we have to unite and help in any way we can.<br/>
          &nbsp;&nbsp;&nbsp;The NoName FoxesClub decided to help #Ukraine by having a public sale with this specific art.<br/>
          &nbsp;&nbsp;&nbsp;All the money from the public sale will be donated to Ukraine using crypto. The screenshots will be posted shortly after.<br/>
          &nbsp;&nbsp;&nbsp;Let&rsquo;s make the best out of this situation and help in any way we can. Ukraine, the Noname FoxesClub are with you!
          </div>
          <ThemeProvider theme={theme}>
            <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect>
                <WalletDialogProvider>
                  <Home
                    candyMachineId={candyMachineId}
                    connection={connection}
                    startDate={startDateSeed}
                    txTimeout={txTimeout}
                    rpcHost={rpcHost}
                  />
                </WalletDialogProvider>
              </WalletProvider>
            </ConnectionProvider>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Mint;
