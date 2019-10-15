Using yarn:

```sh
yarn
yarn test src/01_var_let_const.test.js

node solution/08_more_arrays.js
```

Using npm:

```sh
npm install
npm test -- src/01_var_let_const.test.js

node solution/08_more_arrays.js
```

Using docker:

```sh
docker run -v $(pwd):/data -w /data node:12 yarn
docker run -it --rm -v $(pwd):/data -w /data node:12 yarn test src/01_var_let_const.test.js

docker run -it --rm -v $(pwd):/data -w /data node:12 node solution/08_more_arrays.js
```
