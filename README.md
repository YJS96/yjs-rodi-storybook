# RODI Frontend

rodi

## Description

## Setting

### Before you start

```bash
# node setup
nvm install
nvm use

# package install
# @WARN: if you are not using pnpm, you cannot start the project
# please ref: https://pnpm.io/ko/installation
pnpm install
# when ci level
# pnpm install --frozen-lockfile

# setup .env
cp .env.example .env

# start
pnpm run dev
```

### ENV

We are using [@t3-oss/env-nextjs](https://env.t3.gg/docs/recipes) and zod for env management.
If you want to add new env variable, please check env.ts at the root of the project.

### CVA(class-variance-authority)

You need to set up [tailwindcss intellisense setting](https://cva.style/docs/getting-started/installation)

for vscode. add the following

1. [Install the "Tailwind CSS IntelliSense" Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

2. Add the following to your settings.json

```.json
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
```
