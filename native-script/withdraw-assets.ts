import { Transaction } from "@meshsdk/core";
import { getUtxo } from "../common/get-utxo";
import { getWallet } from "../common/get-wallet";
import { getScript } from "./get-script";

export async function withdrawAssets({ txHash }: { txHash: string }) {
  const wallet = getWallet();

  const walletAddress = await wallet.getChangeAddress();

  const { script, scriptAddr } = getScript(walletAddress);
  const utxo = await getUtxo(scriptAddr, txHash);
  console.log("utxo", utxo);

  if (utxo == undefined) {
    console.log("UTXO not found");
    return;
  }

  const tx = new Transaction({ initiator: wallet });
  tx.setRequiredSigners([walletAddress]);
  tx.setNativeScriptInput(script, utxo);
  tx.sendValue(walletAddress, utxo);

  const unsignedTx = await tx.build();
  const signedTx = await wallet.signTx(unsignedTx, true);
  const _txHash = await wallet.submitTx(signedTx);
  console.log("txHash", _txHash);
}
