// Deposit Assets
// import { depositAssets } from "./deposit-assets";
// await depositAssets();

// Withdraw Assets
import { withdrawAssets } from "./withdraw-assets";
const txHash =
  "6ddb22df64bc4ac671b510003a5cb4675aaaf9445f71a337ac4f5658aef6cbbf";
await withdrawAssets({
  txHash: txHash,
});
