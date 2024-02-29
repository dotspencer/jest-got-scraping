import { gotScraping } from 'got-scraping';

describe('got-scraping', () => {
  test('example', async () => {
    expect(5).toBe(5);
  });

  test('status 200', async () => {
    const url = 'https://apify.com/';
    const res = await gotScraping.get(url);
    expect(res.statusCode).toBe(200);
  });
});
