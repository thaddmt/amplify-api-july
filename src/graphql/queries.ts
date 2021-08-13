/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDeviceModel = /* GraphQL */ `
  query GetDeviceModel($id: ID!) {
    getDeviceModel(id: $id) {
      id
      owner
      metadata1
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
        metadata1
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
