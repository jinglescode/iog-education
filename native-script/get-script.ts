import {
  NativeScript,
  resolveNativeScriptAddress,
  resolvePaymentKeyHash,
} from "@meshsdk/core";

export function getScript(walletAddress: string) {
  const hash = resolvePaymentKeyHash(walletAddress);

  const script: NativeScript = {
    type: "sig",
    keyHash: hash,
  };
  const scriptAddr = resolveNativeScriptAddress(script);

  return { hash, script, scriptAddr };
}
