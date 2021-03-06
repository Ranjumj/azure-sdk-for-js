/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/certificatesMappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClientContext } from "../appPlatformManagementClientContext";

/** Class representing a Certificates. */
export class Certificates {
  private readonly client: AppPlatformManagementClientContext;

  /**
   * Create a Certificates.
   * @param {AppPlatformManagementClientContext} client Reference to the service client.
   */
  constructor(client: AppPlatformManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the certificate resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param certificateName The name of the certificate resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificatesGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, certificateName: string, options?: msRest.RequestOptionsBase): Promise<Models.CertificatesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param certificateName The name of the certificate resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, certificateName: string, callback: msRest.ServiceCallback<Models.CertificateResource>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param certificateName The name of the certificate resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, certificateName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CertificateResource>): void;
  get(resourceGroupName: string, serviceName: string, certificateName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CertificateResource>, callback?: msRest.ServiceCallback<Models.CertificateResource>): Promise<Models.CertificatesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        certificateName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CertificatesGetResponse>;
  }

  /**
   * Create or update certificate resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param certificateName The name of the certificate resource.
   * @param certificateResource Parameters for the create or update operation
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificatesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, certificateName: string, certificateResource: Models.CertificateResource, options?: msRest.RequestOptionsBase): Promise<Models.CertificatesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serviceName,certificateName,certificateResource,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CertificatesCreateOrUpdateResponse>;
  }

  /**
   * Delete the certificate resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param certificateName The name of the certificate resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, certificateName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serviceName,certificateName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * List all the certificates of one user.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificatesListResponse>
   */
  list(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase): Promise<Models.CertificatesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param callback The callback
   */
  list(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.CertificateResourceCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, serviceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CertificateResourceCollection>): void;
  list(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CertificateResourceCollection>, callback?: msRest.ServiceCallback<Models.CertificateResourceCollection>): Promise<Models.CertificatesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.CertificatesListResponse>;
  }

  /**
   * Create or update certificate resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param certificateName The name of the certificate resource.
   * @param certificateResource Parameters for the create or update operation
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serviceName: string, certificateName: string, certificateResource: Models.CertificateResource, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        certificateName,
        certificateResource,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete the certificate resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param certificateName The name of the certificate resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serviceName: string, certificateName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        certificateName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List all the certificates of one user.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificatesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CertificatesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CertificateResourceCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CertificateResourceCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CertificateResourceCollection>, callback?: msRest.ServiceCallback<Models.CertificateResourceCollection>): Promise<Models.CertificatesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.CertificatesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/certificates/{certificateName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.certificateName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CertificateResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/certificates",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CertificateResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/certificates/{certificateName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.certificateName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "certificateResource",
    mapper: {
      ...Mappers.CertificateResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CertificateResource
    },
    201: {
      bodyMapper: Mappers.CertificateResource
    },
    202: {
      bodyMapper: Mappers.CertificateResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/certificates/{certificateName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.certificateName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CertificateResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
