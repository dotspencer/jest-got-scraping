// import { gotScraping } from 'got-scraping';
import axios from 'axios';

describe('got-scraping', () => {
  test('example', async () => {
    expect(5).toBe(5);
  });

  // test('status 200', async () => {
  //   const url = 'https://apify.com/';
  //   const res = await gotScraping.get(url);
  //   expect(res.statusCode).toBe(200);
  // });

  test('status 200', async () => {
    const url = 'https://apify.com/';
    const res = await axios.get(url);
    expect(res.status).toBe(200);
  });
});


