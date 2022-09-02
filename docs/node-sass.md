# Common issues with node-sass

1. Use `nvm`

```shell
nvm use

Found '/Users/giulia/Sites/super-blog-11ty/super-styleguide/.nvmrc' with version <v15.0.1>
Now using node v15.0.1 (npm v7.0.3)
``` 

2. Remove `node_modules` folder

```shell
rm -rf node_modules/
```

3. Update npm

```shell
npm update
```

4. Rebuild `node-sass`

```shell
npm rebuild node-sass
```

5. install again _node-modules_ with a clean installation

```shell
nmp ci
```

More info: [node-sass [Unsupported] Install node-sass 4.14.1 on Node 15 #3026](https://github.com/sass/node-sass/issues/3026)