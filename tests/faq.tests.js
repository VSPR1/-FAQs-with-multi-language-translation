
const request = require('supertest');
const app = require('../server'); // Assuming you export app in server.js

describe('GET /api/faqs', () => {
  it('should return FAQs in default language (English)', async () => {
    const res = await request(app).get('/api/faqs');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('question');
  });

  it('should return FAQs in Hindi', async () => {
    const res = await request(app).get('/api/faqs?lang=hi');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('question');
  });
});
