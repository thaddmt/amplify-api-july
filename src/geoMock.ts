import { API, graphqlOperation } from "aws-amplify";

const GQL_TYPES: Record<string, unknown> = {};

export type CreateDeviceModelInputBase = {
  id?: string | null;
  owner?: string | null;
  [index: string]: any;
};

export async function createDevice(
  modelName: string,
  options: CreateDeviceModelInputBase
) {
  const moduleName = `create${modelName}`;

  const createDeviceModel =
    GQL_TYPES.mutations[moduleName as keyof typeof GQL_TYPES.mutations];

  const data = await API.graphql(
    graphqlOperation(createDeviceModel, { input: options })
  );
  return data;
}

export function initSchema(queries: any, mutations: any, subscriptions: any) {
  GQL_TYPES.queries = queries;
  GQL_TYPES.mutations = mutations;
  GQL_TYPES.subscriptions = subscriptions;
}
