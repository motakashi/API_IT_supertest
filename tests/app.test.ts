// tests/app.test.ts
import request from 'supertest';
import app from '../src/app';

describe('API Integration Tests', () => {
  // GETエンドポイントのテスト
  it('GET /api/resource エンドポイントで、200 ステータスコードと挨拶メッセージが返される', async () => {
    const response = await request(app).get('/api/resource');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, World!' });
  });

  // POSTエンドポイントの成功ケース
  it('POST /api/resource エンドポイントで、正しいリクエストの場合は 201 ステータスコードと成功メッセージが返される', async () => {
    const response = await request(app)
      .post('/api/resource')
      .send({ name: 'John Doe' });
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: 'Resource created for John Doe' });
  });

  // POSTエンドポイントの失敗ケース
  it('POST /api/resource エンドポイントで、無効なリクエストの場合は 400 ステータスコードとエラーメッセージが返される', async () => {
    const response = await request(app).post('/api/resource').send({});
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Name is required' });
  });
});
