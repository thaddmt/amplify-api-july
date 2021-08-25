/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDeviceModel = /* GraphQL */ `
  mutation CreateDeviceModel(
    $input: CreateDeviceModelInput!
    $condition: ModelDeviceModelConditionInput
  ) {
    createDeviceModel(input: $input, condition: $condition) {
      id
      owner
      tracker
      metadata
      createdAt
      updatedAt
    }
  }
`;
export const updateDeviceModel = /* GraphQL */ `
  mutation UpdateDeviceModel(
    $input: UpdateDeviceModelInput!
    $condition: ModelDeviceModelConditionInput
  ) {
    updateDeviceModel(input: $input, condition: $condition) {
      id
      owner
      tracker
      metadata
      createdAt
      updatedAt
    }
  }
`;
export const deleteDeviceModel = /* GraphQL */ `
  mutation DeleteDeviceModel(
    $input: DeleteDeviceModelInput!
    $condition: ModelDeviceModelConditionInput
  ) {
    deleteDeviceModel(input: $input, condition: $condition) {
      id
      owner
      tracker
      metadata
      createdAt
      updatedAt
    }
  }
`;
