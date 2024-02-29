# jest-got-scraping

## Setup

```
npm install
```

## Run test

```
npm run test
```

## Notes

Had to add `"type": "module",` to `package.json`

Had to add `--experimental-vm-modules` flag to jest command.

```
"scripts": {
  "test": "NODE_OPTIONS=\"$NODE_OPTIONS --experimental-vm-modules\" jest"
},
```

