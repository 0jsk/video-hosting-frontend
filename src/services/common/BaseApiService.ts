import { join } from 'path';
import { $axios } from '@/plugins/axios';

type HTTPMethods = 'get' | 'post' | 'put' | 'delete';

type RequestFn<R> = (endpoint?: string, body?: any) => Promise<R>;

export default class BaseApiService {
  protected resource = '/';
  private getResourcePath = (endpoint?: string) => endpoint ? join(this.resource, endpoint) : this.resource;

  private request<R> (method: HTTPMethods): RequestFn<R> {
    return async (endpoint?: string, body?: any) => {
      const path = this.getResourcePath(endpoint);
      const {
        data,
        status
      } = await $axios[method](path, body);

      if (status < 200 || status > 299) {
        throw new Error(data?.message ?? 'Api Error');
      }

      return data;
    };
  }

  protected async get<R = void> (endpoint?: string, body?: any) {
    return await this.request<R>('get')(endpoint, body);
  }

  protected async post<R = void> (endpoint: string, body?: any) {
    return await this.request<R>('post')(endpoint, body);
  }

  protected async put<R = void> (endpoint?: string, body?: any) {
    return await this.request<R>('put')(endpoint, body);
  }

  protected async delete<R = void> (endpoint?: string, body?: any) {
    return await this.request<R>('delete')(endpoint, body);
  }
}
