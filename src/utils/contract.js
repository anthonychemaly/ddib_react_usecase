import {
  ContractCallQuery,
  PublicKey,
  ContractFunctionParameters,
  Hbar,
} from "@hashgraph/sdk";
import initOperator from "./operator";
import operatorConfig from "../assets/identityHolderAccount.json";

async function callGetIsAdultFunction(contractId) {
  let client = await initOperator();

  const operatorPublicKey = PublicKey.fromString(
    operatorConfig.operatorPublicKey
  );

  const contractQuery = await new ContractCallQuery()
    .setGas(100000)
    .setContractId(contractId)
    .setFunction(
      "isAdult",
      new ContractFunctionParameters().addAddress(
        "0x" + operatorPublicKey.toEvmAddress()
      )
    )
    .setQueryPayment(new Hbar(2))
    .execute(client);

  const response = contractQuery.getBool(0);

  return response;
}

export default callGetIsAdultFunction;
