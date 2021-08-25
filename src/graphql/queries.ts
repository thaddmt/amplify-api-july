/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDeviceModel = /* GraphQL */ `
  query GetDeviceModel($id: ID!) {
    getDeviceModel(id: $id) {
      id
      owner
      tracker
      metadata
      createdAt
      updatedAt
    }
  }
`;
export const listDeviceModels = /* GraphQL */ `
  query ListDeviceModels(
    $filter: ModelDeviceModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeviceModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        tracker
        metadata
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
