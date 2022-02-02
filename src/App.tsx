import "./App.css";
import { useMemo, useState } from "react";

import Minter from "./Minter";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MintCard from "./components/MintCard";
import Spacing from "./components/Spacing";
import BackTopButton from "./components/BackTopButton";
import Intro from "./components/Intro";
import Team from "./components/Team";

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
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

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

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
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

  // const mystyle = {background-image: url('./img/bgpattern.jpg')} as React.CSSProperties;

  return (
    <>
      <div className="flex flex-col md:w-full md:h-full ">
        <div className="bg-gradient-to-t from-[#192152] bg-fixed">
          <Navbar />
          <Spacing />
          <Intro />
          <Spacing />
          <About />
          <BackTopButton />
          <Spacing />
          <MintCard />
          <Spacing />
          <Gallery />
          <Spacing />
          <Team />
          {/* <Spacing /> */}
          <FAQ />
          <Spacing />
          <Footer />

          {/* <ThemeProvider theme={theme}>
            <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect>
                <WalletDialogProvider>
                  <Minter
                    candyMachineId={candyMachineId}
                    connection={connection}
                    startDate={startDateSeed}
                    txTimeout={txTimeout}
                    rpcHost={rpcHost}
                  />
                </WalletDialogProvider>
              </WalletProvider>
            </ConnectionProvider>
          </ThemeProvider> */}
        </div>
      </div>
    </>
  );
};

export default App;
