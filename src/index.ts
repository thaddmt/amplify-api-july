import Amplify, { API, graphqlOperation } from "aws-amplify";
import { CreateDeviceModelInput } from "./API";
import { createDevice, initSchema, CreateDeviceOptions } from "./geoMock";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";
import * as subscriptions from "./graphql/subscriptions";

import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

initSchema(queries, mutations, subscriptions);

const MutationButton = document.getElementById("MutationEventButton");

MutationButton.addEventListener("click", (evt) => {
  const options: CreateDeviceOptions = {
    id: "foo" + new Date().getHours() + new Date().getSeconds(),
    owner: "foo",
    metadata: { foo: "bar" },
  };

  createDevice(options).then((evt) => {
    console.log(evt);
  });
});
