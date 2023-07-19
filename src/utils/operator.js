import { AccountId, Client, PrivateKey } from "@hashgraph/sdk";

const operatorConfig = require("../assets/identityHolderAccount.json");

async function initOperator() {
  const operatorAccountId = AccountId.fromString(
    operatorConfig.operatorAccountId
  );
  const operatorPrivateKey = PrivateKey.fromString(
    operatorConfig.operatorPrivateKey
  );
  // Create a client and return it
  const client = Client.forTestnet();
  client.setOperator(operatorAccountId, operatorPrivateKey);
  return client;
}

export default initOperator;
