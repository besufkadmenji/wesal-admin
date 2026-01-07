/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation activateAdmin($activateAdminId: ID!) {\n    activateAdmin(id: $activateAdminId) {\n      avatarFilename\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      phoneNumber\n      roleName\n      status\n      updatedAt\n      userType\n    }\n  }\n": typeof types.ActivateAdminDocument,
    "\n    query admin($adminId: ID!) {\n      admin(id: $adminId) {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        roleName\n        status\n        updatedAt\n        userType\n        phoneNumber\n      }\n    }\n  ": typeof types.AdminDocument,
    "\n  query admins($paginationInput: AdminPaginationInput) {\n    admins(paginationInput: $paginationInput) {\n      meta {\n        hasNext\n        hasPrevious\n        limit\n        page\n        total\n        totalPages\n      }\n      items {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        roleName\n        status\n        updatedAt\n        userType\n        phoneNumber\n      }\n    }\n  }\n": typeof types.AdminsDocument,
    "\n  mutation createAdmin($createAdminInput: CreateAdminInput!) {\n    createAdmin(createAdminInput: $createAdminInput) {\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      roleName\n      status\n      updatedAt\n      userType\n      phoneNumber\n    }\n  }\n": typeof types.CreateAdminDocument,
    "\n  mutation deactivateAdmin(\n    $deactivateAdminId: ID!\n    $input: DeactivateAdminInput!\n  ) {\n    deactivateAdmin(id: $deactivateAdminId, input: $input) {\n      avatarFilename\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      phoneNumber\n      roleName\n      status\n      updatedAt\n      userType\n    }\n  }\n": typeof types.DeactivateAdminDocument,
    "\n  query meAdmin {\n    meAdmin {\n      id\n      createdAt\n      email\n      fullName\n      organizationName\n      permissionType\n      roleName\n      status\n      updatedAt\n      userType\n      phoneNumber\n      avatarFilename\n    }\n  }\n": typeof types.MeAdminDocument,
    "\n  mutation removeAdmin($removeAdminId: ID!) {\n    removeAdmin(id: $removeAdminId)\n  }\n": typeof types.RemoveAdminDocument,
    "\n  mutation updateAdmin(\n    $updateAdminId: ID!\n    $updateAdminInput: UpdateAdminInput!\n  ) {\n    updateAdmin(id: $updateAdminId, updateAdminInput: $updateAdminInput) {\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      roleName\n      status\n      updatedAt\n      userType\n      phoneNumber\n    }\n  }\n": typeof types.UpdateAdminDocument,
    "\n  mutation adminChangePassword($input: AdminChangePasswordInput!) {\n    adminChangePassword(input: $input)\n  }\n": typeof types.AdminChangePasswordDocument,
    "\n  mutation adminForgotPassword($input: AdminForgotPasswordInput!) {\n    adminForgotPassword(input: $input)\n  }\n": typeof types.AdminForgotPasswordDocument,
    "\n  mutation adminLogin($input: AdminLoginInput!) {\n    adminLogin(input: $input) {\n      accessToken\n    }\n  }\n": typeof types.AdminLoginDocument,
    "\n  mutation adminResetPassword($input: AdminResetPasswordInput!) {\n    adminResetPassword(input: $input)\n  }\n": typeof types.AdminResetPasswordDocument,
    "\n  mutation adminVerifyPasswordResetOtp(\n    $input: VerifyAdminPasswordResetOtpInput!\n  ) {\n    adminVerifyPasswordResetOtp(input: $input) {\n      resetToken\n    }\n  }\n": typeof types.AdminVerifyPasswordResetOtpDocument,
    "\n  query adminPermissions($adminId: ID!) {\n    adminPermissions(adminId: $adminId) {\n      adminId\n      createdAt\n      id\n      permission {\n        action\n        createdAt\n        description\n        id\n        module\n        name\n        nameAr\n        permissionPlatform\n        resource\n        updatedAt\n      }\n      permissionId\n      updatedAt\n      admin {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        phoneNumber\n        roleName\n        status\n        updatedAt\n        userType\n      }\n    }\n  }\n": typeof types.AdminPermissionsDocument,
    "\n  mutation bulkAssignPermissionsToAdmin($input: BulkAssignPermissionsInput!) {\n    bulkAssignPermissionsToAdmin(input: $input) {\n      adminId\n      createdAt\n      id\n      permission {\n        resource\n        action\n        createdAt\n        description\n        id\n        module\n        name\n        nameAr\n        permissionPlatform\n        updatedAt\n      }\n      admin {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        phoneNumber\n        roleName\n        status\n        updatedAt\n        userType\n      }\n      permissionId\n      updatedAt\n    }\n  }\n": typeof types.BulkAssignPermissionsToAdminDocument,
    "\n  query permissions {\n    permissions {\n      action\n      createdAt\n      description\n      id\n      module\n      name\n      nameAr\n      permissionPlatform\n      resource\n      updatedAt\n    }\n  }\n": typeof types.PermissionsDocument,
};
const documents: Documents = {
    "\n  mutation activateAdmin($activateAdminId: ID!) {\n    activateAdmin(id: $activateAdminId) {\n      avatarFilename\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      phoneNumber\n      roleName\n      status\n      updatedAt\n      userType\n    }\n  }\n": types.ActivateAdminDocument,
    "\n    query admin($adminId: ID!) {\n      admin(id: $adminId) {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        roleName\n        status\n        updatedAt\n        userType\n        phoneNumber\n      }\n    }\n  ": types.AdminDocument,
    "\n  query admins($paginationInput: AdminPaginationInput) {\n    admins(paginationInput: $paginationInput) {\n      meta {\n        hasNext\n        hasPrevious\n        limit\n        page\n        total\n        totalPages\n      }\n      items {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        roleName\n        status\n        updatedAt\n        userType\n        phoneNumber\n      }\n    }\n  }\n": types.AdminsDocument,
    "\n  mutation createAdmin($createAdminInput: CreateAdminInput!) {\n    createAdmin(createAdminInput: $createAdminInput) {\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      roleName\n      status\n      updatedAt\n      userType\n      phoneNumber\n    }\n  }\n": types.CreateAdminDocument,
    "\n  mutation deactivateAdmin(\n    $deactivateAdminId: ID!\n    $input: DeactivateAdminInput!\n  ) {\n    deactivateAdmin(id: $deactivateAdminId, input: $input) {\n      avatarFilename\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      phoneNumber\n      roleName\n      status\n      updatedAt\n      userType\n    }\n  }\n": types.DeactivateAdminDocument,
    "\n  query meAdmin {\n    meAdmin {\n      id\n      createdAt\n      email\n      fullName\n      organizationName\n      permissionType\n      roleName\n      status\n      updatedAt\n      userType\n      phoneNumber\n      avatarFilename\n    }\n  }\n": types.MeAdminDocument,
    "\n  mutation removeAdmin($removeAdminId: ID!) {\n    removeAdmin(id: $removeAdminId)\n  }\n": types.RemoveAdminDocument,
    "\n  mutation updateAdmin(\n    $updateAdminId: ID!\n    $updateAdminInput: UpdateAdminInput!\n  ) {\n    updateAdmin(id: $updateAdminId, updateAdminInput: $updateAdminInput) {\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      roleName\n      status\n      updatedAt\n      userType\n      phoneNumber\n    }\n  }\n": types.UpdateAdminDocument,
    "\n  mutation adminChangePassword($input: AdminChangePasswordInput!) {\n    adminChangePassword(input: $input)\n  }\n": types.AdminChangePasswordDocument,
    "\n  mutation adminForgotPassword($input: AdminForgotPasswordInput!) {\n    adminForgotPassword(input: $input)\n  }\n": types.AdminForgotPasswordDocument,
    "\n  mutation adminLogin($input: AdminLoginInput!) {\n    adminLogin(input: $input) {\n      accessToken\n    }\n  }\n": types.AdminLoginDocument,
    "\n  mutation adminResetPassword($input: AdminResetPasswordInput!) {\n    adminResetPassword(input: $input)\n  }\n": types.AdminResetPasswordDocument,
    "\n  mutation adminVerifyPasswordResetOtp(\n    $input: VerifyAdminPasswordResetOtpInput!\n  ) {\n    adminVerifyPasswordResetOtp(input: $input) {\n      resetToken\n    }\n  }\n": types.AdminVerifyPasswordResetOtpDocument,
    "\n  query adminPermissions($adminId: ID!) {\n    adminPermissions(adminId: $adminId) {\n      adminId\n      createdAt\n      id\n      permission {\n        action\n        createdAt\n        description\n        id\n        module\n        name\n        nameAr\n        permissionPlatform\n        resource\n        updatedAt\n      }\n      permissionId\n      updatedAt\n      admin {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        phoneNumber\n        roleName\n        status\n        updatedAt\n        userType\n      }\n    }\n  }\n": types.AdminPermissionsDocument,
    "\n  mutation bulkAssignPermissionsToAdmin($input: BulkAssignPermissionsInput!) {\n    bulkAssignPermissionsToAdmin(input: $input) {\n      adminId\n      createdAt\n      id\n      permission {\n        resource\n        action\n        createdAt\n        description\n        id\n        module\n        name\n        nameAr\n        permissionPlatform\n        updatedAt\n      }\n      admin {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        phoneNumber\n        roleName\n        status\n        updatedAt\n        userType\n      }\n      permissionId\n      updatedAt\n    }\n  }\n": types.BulkAssignPermissionsToAdminDocument,
    "\n  query permissions {\n    permissions {\n      action\n      createdAt\n      description\n      id\n      module\n      name\n      nameAr\n      permissionPlatform\n      resource\n      updatedAt\n    }\n  }\n": types.PermissionsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation activateAdmin($activateAdminId: ID!) {\n    activateAdmin(id: $activateAdminId) {\n      avatarFilename\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      phoneNumber\n      roleName\n      status\n      updatedAt\n      userType\n    }\n  }\n"): (typeof documents)["\n  mutation activateAdmin($activateAdminId: ID!) {\n    activateAdmin(id: $activateAdminId) {\n      avatarFilename\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      phoneNumber\n      roleName\n      status\n      updatedAt\n      userType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query admin($adminId: ID!) {\n      admin(id: $adminId) {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        roleName\n        status\n        updatedAt\n        userType\n        phoneNumber\n      }\n    }\n  "): (typeof documents)["\n    query admin($adminId: ID!) {\n      admin(id: $adminId) {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        roleName\n        status\n        updatedAt\n        userType\n        phoneNumber\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query admins($paginationInput: AdminPaginationInput) {\n    admins(paginationInput: $paginationInput) {\n      meta {\n        hasNext\n        hasPrevious\n        limit\n        page\n        total\n        totalPages\n      }\n      items {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        roleName\n        status\n        updatedAt\n        userType\n        phoneNumber\n      }\n    }\n  }\n"): (typeof documents)["\n  query admins($paginationInput: AdminPaginationInput) {\n    admins(paginationInput: $paginationInput) {\n      meta {\n        hasNext\n        hasPrevious\n        limit\n        page\n        total\n        totalPages\n      }\n      items {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        roleName\n        status\n        updatedAt\n        userType\n        phoneNumber\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createAdmin($createAdminInput: CreateAdminInput!) {\n    createAdmin(createAdminInput: $createAdminInput) {\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      roleName\n      status\n      updatedAt\n      userType\n      phoneNumber\n    }\n  }\n"): (typeof documents)["\n  mutation createAdmin($createAdminInput: CreateAdminInput!) {\n    createAdmin(createAdminInput: $createAdminInput) {\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      roleName\n      status\n      updatedAt\n      userType\n      phoneNumber\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deactivateAdmin(\n    $deactivateAdminId: ID!\n    $input: DeactivateAdminInput!\n  ) {\n    deactivateAdmin(id: $deactivateAdminId, input: $input) {\n      avatarFilename\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      phoneNumber\n      roleName\n      status\n      updatedAt\n      userType\n    }\n  }\n"): (typeof documents)["\n  mutation deactivateAdmin(\n    $deactivateAdminId: ID!\n    $input: DeactivateAdminInput!\n  ) {\n    deactivateAdmin(id: $deactivateAdminId, input: $input) {\n      avatarFilename\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      phoneNumber\n      roleName\n      status\n      updatedAt\n      userType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query meAdmin {\n    meAdmin {\n      id\n      createdAt\n      email\n      fullName\n      organizationName\n      permissionType\n      roleName\n      status\n      updatedAt\n      userType\n      phoneNumber\n      avatarFilename\n    }\n  }\n"): (typeof documents)["\n  query meAdmin {\n    meAdmin {\n      id\n      createdAt\n      email\n      fullName\n      organizationName\n      permissionType\n      roleName\n      status\n      updatedAt\n      userType\n      phoneNumber\n      avatarFilename\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeAdmin($removeAdminId: ID!) {\n    removeAdmin(id: $removeAdminId)\n  }\n"): (typeof documents)["\n  mutation removeAdmin($removeAdminId: ID!) {\n    removeAdmin(id: $removeAdminId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateAdmin(\n    $updateAdminId: ID!\n    $updateAdminInput: UpdateAdminInput!\n  ) {\n    updateAdmin(id: $updateAdminId, updateAdminInput: $updateAdminInput) {\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      roleName\n      status\n      updatedAt\n      userType\n      phoneNumber\n    }\n  }\n"): (typeof documents)["\n  mutation updateAdmin(\n    $updateAdminId: ID!\n    $updateAdminInput: UpdateAdminInput!\n  ) {\n    updateAdmin(id: $updateAdminId, updateAdminInput: $updateAdminInput) {\n      createdAt\n      email\n      fullName\n      id\n      organizationName\n      permissionType\n      roleName\n      status\n      updatedAt\n      userType\n      phoneNumber\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation adminChangePassword($input: AdminChangePasswordInput!) {\n    adminChangePassword(input: $input)\n  }\n"): (typeof documents)["\n  mutation adminChangePassword($input: AdminChangePasswordInput!) {\n    adminChangePassword(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation adminForgotPassword($input: AdminForgotPasswordInput!) {\n    adminForgotPassword(input: $input)\n  }\n"): (typeof documents)["\n  mutation adminForgotPassword($input: AdminForgotPasswordInput!) {\n    adminForgotPassword(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation adminLogin($input: AdminLoginInput!) {\n    adminLogin(input: $input) {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation adminLogin($input: AdminLoginInput!) {\n    adminLogin(input: $input) {\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation adminResetPassword($input: AdminResetPasswordInput!) {\n    adminResetPassword(input: $input)\n  }\n"): (typeof documents)["\n  mutation adminResetPassword($input: AdminResetPasswordInput!) {\n    adminResetPassword(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation adminVerifyPasswordResetOtp(\n    $input: VerifyAdminPasswordResetOtpInput!\n  ) {\n    adminVerifyPasswordResetOtp(input: $input) {\n      resetToken\n    }\n  }\n"): (typeof documents)["\n  mutation adminVerifyPasswordResetOtp(\n    $input: VerifyAdminPasswordResetOtpInput!\n  ) {\n    adminVerifyPasswordResetOtp(input: $input) {\n      resetToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query adminPermissions($adminId: ID!) {\n    adminPermissions(adminId: $adminId) {\n      adminId\n      createdAt\n      id\n      permission {\n        action\n        createdAt\n        description\n        id\n        module\n        name\n        nameAr\n        permissionPlatform\n        resource\n        updatedAt\n      }\n      permissionId\n      updatedAt\n      admin {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        phoneNumber\n        roleName\n        status\n        updatedAt\n        userType\n      }\n    }\n  }\n"): (typeof documents)["\n  query adminPermissions($adminId: ID!) {\n    adminPermissions(adminId: $adminId) {\n      adminId\n      createdAt\n      id\n      permission {\n        action\n        createdAt\n        description\n        id\n        module\n        name\n        nameAr\n        permissionPlatform\n        resource\n        updatedAt\n      }\n      permissionId\n      updatedAt\n      admin {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        phoneNumber\n        roleName\n        status\n        updatedAt\n        userType\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation bulkAssignPermissionsToAdmin($input: BulkAssignPermissionsInput!) {\n    bulkAssignPermissionsToAdmin(input: $input) {\n      adminId\n      createdAt\n      id\n      permission {\n        resource\n        action\n        createdAt\n        description\n        id\n        module\n        name\n        nameAr\n        permissionPlatform\n        updatedAt\n      }\n      admin {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        phoneNumber\n        roleName\n        status\n        updatedAt\n        userType\n      }\n      permissionId\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation bulkAssignPermissionsToAdmin($input: BulkAssignPermissionsInput!) {\n    bulkAssignPermissionsToAdmin(input: $input) {\n      adminId\n      createdAt\n      id\n      permission {\n        resource\n        action\n        createdAt\n        description\n        id\n        module\n        name\n        nameAr\n        permissionPlatform\n        updatedAt\n      }\n      admin {\n        createdAt\n        email\n        fullName\n        id\n        organizationName\n        permissionType\n        phoneNumber\n        roleName\n        status\n        updatedAt\n        userType\n      }\n      permissionId\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query permissions {\n    permissions {\n      action\n      createdAt\n      description\n      id\n      module\n      name\n      nameAr\n      permissionPlatform\n      resource\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query permissions {\n    permissions {\n      action\n      createdAt\n      description\n      id\n      module\n      name\n      nameAr\n      permissionPlatform\n      resource\n      updatedAt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;