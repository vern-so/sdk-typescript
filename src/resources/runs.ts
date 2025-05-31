// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Executes a task with the provided inputs
   *
   * @example
   * ```ts
   * const run = await client.runs.create({
   *   taskId: 'task_123456',
   * });
   * ```
   */
  create(body: RunCreateParams, options?: RequestOptions): APIPromise<RunCreateResponse> {
    return this._client.post('/runs', { body, ...options });
  }

  /**
   * Retrieves the details of a specific task run
   *
   * @example
   * ```ts
   * const run = await client.runs.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RunRetrieveResponse> {
    return this._client.get(path`/runs/${id}`, options);
  }
}

export interface RunCreateResponse {
  /**
   * Unique identifier for the run
   */
  id?: string;

  /**
   * The inputs provided for the task
   */
  inputs?: Record<string, unknown>;

  /**
   * Timestamp when the run was queued
   */
  queued_at?: string;
}

export interface RunRetrieveResponse {
  /**
   * Unique identifier for the run
   */
  id?: string;

  /**
   * Timestamp when the run completed
   */
  completed_at?: string;

  /**
   * Timestamp when the run was created
   */
  created_at?: string;

  /**
   * The inputs provided for the task
   */
  inputs?: Record<string, unknown>;

  /**
   * The response data from the task execution
   */
  response?: Record<string, unknown>;

  /**
   * Timestamp when the run started executing
   */
  started_at?: string;

  /**
   * The current status of the run
   */
  status?: 'queued' | 'running' | 'complete' | 'failed';

  /**
   * The name of the task that was executed
   */
  task?: string;
}

export interface RunCreateParams {
  /**
   * The ID of the task to execute
   */
  taskId: string;

  /**
   * The inputs required for the task
   */
  inputs?: Record<string, unknown>;

  /**
   * Optional user-specified UID for a profile linked via magic link
   */
  profileId?: string;

  /**
   * An optional URL to be processed by the task
   */
  url?: string;
}

export declare namespace Runs {
  export {
    type RunCreateResponse as RunCreateResponse,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunCreateParams as RunCreateParams,
  };
}
