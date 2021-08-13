import Amplify, { API, graphqlOperation } from "aws-amplify";
import { CreateDeviceModelInput } from "./API";

import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const MODEL_NAME = "DeviceModel";

async function createDevice() {
  const input: CreateDeviceModelInput = {
    id: "foo" + new Date().getSeconds(),
    owner: "foo",
    metadata1: `bar`,
  };

  const mutations = await import("./graphql/mutations"); // where do we get this path from? has to come from the customers src/graphl path

  const moduleName = `create${MODEL_NAME}`;
  const createDeviceModel = mutations[moduleName as keyof typeof mutations];
  const data = await API.graphql(
    graphqlOperation(createDeviceModel, { input })
  );
  return data;
}

const MutationButton = document.getElementById("MutationEventButton");
const MutationResult = document.getElementById("MutationResult");

MutationButton.addEventListener("click", (evt) => {
  createDevice().then((evt) => {
    console.log(evt);
    MutationResult.innerHTML += `<p>${(evt as any).data.createTodo.name} - ${
      (evt as any).data.createTodo.description
    }</p>`;
  });
});
