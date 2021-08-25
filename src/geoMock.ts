import { API, graphqlOperation } from "aws-amplify";

const GQL_TYPES: Record<string, unknown> = {};

export interface CreateDeviceOptions {
  id?: string | null;
  owner?: string | null;
  tracker?: string;
  modelName?: string;
  metadata: Record<string, any>;
}

export async function createDevice(options: any) {
  const modelName = "DeviceModel"; //Geo.getModle
  const moduleName = `create${modelName}`;

  const tracker = "aTrackerID"; // Geo.getTrackerId();

  const input = {
    ...options,
    tracker,
    metadata: JSON.stringify(options.metadata),
  };

  const createDeviceModel =
    GQL_TYPES.mutations[moduleName as keyof typeof GQL_TYPES.mutations];

  const data = await API.graphql(
    graphqlOperation(createDeviceModel, { input })
  );
  return data;
}

export function initSchema(queries: any, mutations: any, subscriptions: any) {
  GQL_TYPES.queries = queries;
  GQL_TYPES.mutations = mutations;
  GQL_TYPES.subscriptions = subscriptions;
}
