<p align="center">
  <h1 align="center">Example translation application for storyblok</h1>
</p>

## Installation

Clone this project with:

```bash
$ git clone https://github.com/ademarCardoso/translation-tool.git
```

### Install all dependencies
```bash
yarn # or npm install
```

### Create a Tool-app in Storyblok partner portal

With the app created in the storyblok, copy and paste the credentials to the `.env-sample` file and rename the file to only `.env`

### Run the project
Now with the app creating on **Storyblok**, start the tunnel with `ngrok`, with the command below.

```bash
npx ngrok http 3000
```

Copy the id that ngrok will generate and replace it in the callback url of the `.env` file and in the app urls in the **Storyblok**.

After this configuration, start the **Nuxt** server with the command below.

```bash
yarn dev #or npm run dev
```

### About the translation api
The translation api is [this](https://english.api.rakuten.net/systran/api/systran-io-translation-and-nlp?endpoint=568bd090e4b0e203818a59f0), the application was made using this free api, but you can change it if you feel better.
You need to register to have an apiKey, the service is free :)

#### For more information
If you want a boilerplate to start your own tool, take a look at this [repository](https://github.com/storyblok/storyblok-tool-example).


---

<p align="center">
  <h5 align="center">Powered by <a href="https://www.storyblok.com/" title="link to the Storyblok website">Storyblok</a></h5>
</p>