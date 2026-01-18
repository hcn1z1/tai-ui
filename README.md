# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Setup and running

To run this app, you need first to install docker/docker compose from the official [website](https://docs.docker.com/compose/install/).

after installing, open this dir on your cmd and run the following line:

```shell
docker compose up -d --build
```

to stop the docker you can run

```shell
docker compose down
```

to delete everything you gotta run the following command:

```shell
docker compose down -v --rmi all
```

To access your local website go to **http://localhost:8080**. You can access the current deployment on my platform [tai-hcn1z1](https://tai.hcn1z1.dev), tho, i don't know for how long i will keep this server running.

