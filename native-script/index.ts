// Deposit Assets
// import { depositAssets } from "./deposit-assets";
// await depositAssets();

// Withdraw Assets
import { withdrawAssets } from "./withdraw-assets";
const txHash =
  "550f9e52c7c161607a5e1a38ac49c19166be7ec93162fc303655b05a9587620b";
await withdrawAssets({
  txHash: txHash,
});
