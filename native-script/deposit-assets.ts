import { Transaction } from "@meshsdk/core";
import { getWallet } from "../common/get-wallet";
import { getScript } from "./get-script";

export async function depositAssets() {
  const wallet = getWallet();

  const walletAddress = await wallet.getChangeAddress();

  const { scriptAddr } = getScript(walletAddress);

  const tx = new Transaction({ initiator: wallet });
  tx.sendLovelace(
    {
      address: scriptAddr,
      datum: {
        value: "",
        inline: true,
      },
    },
    "1000000"
  );
  const unsignedTx = await tx.build();

  const signedTx = await wallet.signTx(unsignedTx);

  const txHash = await wallet.submitTx(signedTx);
  console.log("txHash", txHash);
}
