import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Airdrop } from "./Airdrop"
import { ShowSolBalance } from "./ShowSolBalance";


function App() {

    return (
        <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <WalletMultiButton />
                    <WalletDisconnectButton />

                    <Airdrop />

                    <ShowSolBalance />
                </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default App;