/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDeviceModelInput = {
  id?: string | null,
  owner?: string | null,
  metadata1: string,
};

export type ModelDeviceModelConditionInput = {
  owner?: ModelStringInput | null,
  metadata1?: ModelStringInput | null,
  and?: Array< ModelDeviceModelConditionInput | null > | null,
  or?: Array< ModelDeviceModelConditionInput | null > | null,
  not?: ModelDeviceModelConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type DeviceModel = {
  __typename: "DeviceModel",
  id: string,
  owner?: string | null,
  metadata1: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDeviceModelInput = {
  id: string,
  owner?: string | null,
  metadata1?: string | null,
};

export type DeleteDeviceModelInput = {
  id: string,
};

export type ModelDeviceModelFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  metadata1?: ModelStringInput | null,
  and?: Array< ModelDeviceModelFilterInput | null > | null,
  or?: Array< ModelDeviceModelFilterInput | null > | null,
  not?: ModelDeviceModelFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelDeviceModelConnection = {
  __typename: "ModelDeviceModelConnection",
  items?:  Array<DeviceModel | null > | null,
  nextToken?: string | null,
};

export type CreateDeviceModelMutationVariables = {
  input: CreateDeviceModelInput,
  condition?: ModelDeviceModelConditionInput | null,
};

export type CreateDeviceModelMutation = {
  createDeviceModel?:  {
    __typename: "DeviceModel",
    id: string,
    owner?: string | null,
    metadata1: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDeviceModelMutationVariables = {
  input: UpdateDeviceModelInput,
  condition?: ModelDeviceModelConditionInput | null,
};

export type UpdateDeviceModelMutation = {
  updateDeviceModel?:  {
    __typename: "DeviceModel",
    id: string,
    owner?: string | null,
    metadata1: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDeviceModelMutationVariables = {
  input: DeleteDeviceModelInput,
  condition?: ModelDeviceModelConditionInput | null,
};

export type DeleteDeviceModelMutation = {
  deleteDeviceModel?:  {
    __typename: "DeviceModel",
    id: string,
    owner?: string | null,
    metadata1: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDeviceModelQueryVariables = {
  id: string,
};

export type GetDeviceModelQuery = {
  getDeviceModel?:  {
    __typename: "DeviceModel",
    id: string,
    owner?: string | null,
    metadata1: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDeviceModelsQueryVariables = {
  filter?: ModelDeviceModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeviceModelsQuery = {
  listDeviceModels?:  {
    __typename: "ModelDeviceModelConnection",
    items?:  Array< {
      __typename: "DeviceModel",
      id: string,
      owner?: string | null,
      metadata1: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDeviceModelSubscription = {
  onCreateDeviceModel?:  {
    __typename: "DeviceModel",
    id: string,
    owner?: string | null,
    metadata1: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDeviceModelSubscription = {
  onUpdateDeviceModel?:  {
    __typename: "DeviceModel",
    id: string,
    owner?: string | null,
    metadata1: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDeviceModelSubscription = {
  onDeleteDeviceModel?:  {
    __typename: "DeviceModel",
    id: string,
    owner?: string | null,
    metadata1: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
