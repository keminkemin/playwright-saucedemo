import { expect } from '@playwright/test';
export class UserAPI {
    constructor(request, baseUrl) {
    this.request = request;
    this.baseUrl = baseUrl;
  }
    async getUsers() {
    return await this.request.get(
      `${this.baseUrl}/users`,
      {
        Headers: {
          'Authorization': `Bearer d4abeb3822a03236c5b31eb3dee19ee6106e49a7c838bd7f022f2f83547b9840`
        }
      }
    );
  }
    async getUser(id) {
    return await this.request.get(
      `${this.baseUrl}/users/${id}`,
      {
        Headers: {
          'Authorization': `Bearer d4abeb3822a03236c5b31eb3dee19ee6106e49a7c838bd7f022f2f83547b9840`
        }
      }
    );
  }

    async createUser(userData) {
    return await this.request.post(
        `${this.baseUrl}/users`,
        {
            data: userData,
            Headers: {
                'Authorization': `Bearer d4abeb3822a03236c5b31eb3dee19ee6106e49a7c838bd7f022f2f83547b9840`
            } 
        }
    );
  }

    async updateUser(id, userData) {
    return await this.request.put(
        `${this.baseUrl}/users/${id}`,
        {
            data: userData,
            Headers: {
                'Authorization': `Bearer d4abeb3822a03236c5b31eb3dee19ee6106e49a7c838bd7f022f2f83547b9840`
            }
        }
    );
  }

    async deleteUser(id) {
    return await this.request.delete(
        `${this.baseUrl}/users/${id}`,
        {
            Headers: {
                'Authorization': `Bearer d4abeb3822a03236c5b31eb3dee19ee6106e49a7c838bd7f022f2f83547b9840`
            }
        }
    );
  }
}
