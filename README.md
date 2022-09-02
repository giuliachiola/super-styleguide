# Super styleguide

This project is my tech blog styleguide.

| \                | \                                                                                                                                                                            |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Deploy status	         | [![Netlify Status](https://api.netlify.com/api/v1/badges/ef4e02ee-909c-4030-906d-8e58c79a7695/deploy-status)](https://app.netlify.com/sites/styleguide-giuliachiola/deploys) |
| Deploy preview   | https://styleguide-giuliachiola.netlify.app/                                                                                                                                 |
| Project typology | Personal                                                                                                                                                                     |

![project preview](docs/project-preview.png)

## 🔥 Tech stack

| Purpose            | Technology                                            |
|--------------------|-------------------------------------------------------|
| Templating         | EJS                                                   |
| Styling            | SCSS + BEMIT                                          |
| Documentation      | Markdown                                              |
| Presentation layer | [UIengine](https://github.com/dennisreimann/uiengine) |

## 🌊 Run development mode

Note that this project do NOT build correctly with newer node versions, please use **nvm**:

```shell
# get supported node version from .nvmrc file
nvm use
```

```shell
# install dependencies
npm i

# serve with hot reload at localhost:3002
npm run dev
```

## 🧳 Build setup

```shell
# build for production
npm run build
```

## 📚 Project documentation

- [issues with node-sass](./docs/node-sass.md)

### 🌿 Branches

| Branch name | Use                                       |
|:------------|:------------------------------------------|
| `main`      | production (also used by super-blog-11ty) |
| `develop`   | staging                                   |
