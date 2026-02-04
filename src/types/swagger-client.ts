/**
 * Swagger API Client Example
 * 
 * This file demonstrates how to use the generated Swagger types
 * for type-safe API calls to the Wesal API REST endpoints.
 */

import type { paths, operations } from './swagger';

/**
 * Example: Type-safe file upload
 */
export async function uploadFile(file: File, subfolder?: string) {
  const formData = new FormData();
  formData.append('file', file);

  const url = new URL('https://wesal-api.testing3000.cloud/upload');
  if (subfolder) {
    url.searchParams.set('subfolder', subfolder);
  }

  const response = await fetch(url.toString(), {
    method: 'POST',
    body: formData,
  });

  // Type-safe response
  type UploadResponse = operations['AppController_uploadFile']['responses'][200]['content']['application/json'];
  
  if (!response.ok) {
    throw new Error('Upload failed');
  }

  return (await response.json()) as UploadResponse;
}

/**
 * Example: Export users to CSV
 */
export async function exportUsers(fields?: string[]) {
  const url = new URL('https://wesal-api.testing3000.cloud/users/export');
  if (fields && fields.length > 0) {
    url.searchParams.set('fields', fields.join(','));
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('Export failed');
  }

  // Returns CSV blob
  return await response.blob();
}

/**
 * Example: Download file
 */
export async function downloadFile(encodedPath: string) {
  const url = `https://wesal-api.testing3000.cloud/download/${encodedPath}`;
  
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Download failed');
  }

  return await response.blob();
}

/**
 * Generic API client helper with type inference
 */
export async function callSwaggerApi<
  Path extends keyof paths,
  Method extends keyof paths[Path],
  Operation extends paths[Path][Method]
>(
  path: Path,
  method: Method,
  options?: {
    params?: Operation extends { parameters: { query: infer Q } } ? Q : never;
    body?: Operation extends { requestBody: { content: { 'application/json': infer B } } } ? B : never;
  }
) {
  const url = new URL(`https://wesal-api.testing3000.cloud${path as string}`);
  
  // Add query parameters
  if (options?.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  const response = await fetch(url.toString(), {
    method: method as string,
    headers: options?.body ? { 'Content-Type': 'application/json' } : undefined,
    body: options?.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  return response;
}

// Export all types for use in other files
export type * from './swagger';
