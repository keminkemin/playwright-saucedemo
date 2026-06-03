import { test, expect } from '@playwright/test';
import { UserAPI } from '../../api/UserAPI.js';

test('Verify user list can be retrieved successfully', async ({ request }) => {
  const userAPI = new UserAPI(request, 'https://gorest.co.in/public/v2');
  const response = await userAPI.getUsers();
    expect(response.status()).toBe(200);
});

test('Verify user details can be retrieved successfully', async ({ request }) => {
  const userAPI = new UserAPI(request, 'https://gorest.co.in/public/v2');
  const response = await userAPI.getUser(8488254);
    expect(response.status()).toBe(200);
});

test('Verify non-existent user returns 404', async ({ request }) => {
  const userAPI = new UserAPI(request, 'https://gorest.co.in/public/v2');
  const response = await userAPI.getUser(9999);
    expect(response.status()).toBe(404);
});

test('Verify user list contains expected fields', async ({ request }) => {
  const userAPI = new UserAPI(request, 'https://gorest.co.in/public/v2');
  const response = await userAPI.getUsers();
    const users = await response.json();
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty('id');
    expect(users[0]).toHaveProperty('name');
    expect(users[0]).toHaveProperty('email');
    expect(users[0]).toHaveProperty('gender');
    expect(users[0]).toHaveProperty('status');
});

test('Verify user details contain expected fields', async ({ request }) => {
  const userAPI = new UserAPI(request, 'https://gorest.co.in/public/v2');
  const response = await userAPI.getUser(8488254);
    const user = await response.json();
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('gender');
    expect(user).toHaveProperty('status');
}); 