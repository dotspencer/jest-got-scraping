# jest-got-scraping

## Setup

```
npm install
```

## Run test

```
npm run test
```

## Output

```
$ npm run test

> jest-got-scraping@1.0.0 test
> jest

 FAIL  src/test.ts
  ● Test suite failed to run

    Cannot find module 'got-scraping' from 'src/test.ts'

    > 1 | import { gotScraping } from 'got-scraping';
        | ^
      2 | // import axios from 'axios';
      3 |
      4 | describe('got-scraping', () => {

      at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/resolver.js:427:11)
      at Object.<anonymous> (src/test.ts:1:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.242 s, estimated 1 s
Ran all test suites.
```

