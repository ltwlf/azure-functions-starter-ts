# Azure Functions Gitpod Starter Typescript

[Gitpod](https://www.gitpod.io/) is an online dev evinroment (based on VSCode) and can launch ready-to-code dev environments for your GitHub or GitLab project with a single click.
It is free for open source projects and is just great to share your running code with the community.

This is a template project that you can you use as starter for Node/JavaScript based Azure Functions.

You can Either prefix the URL in the address bar of your browser with https://gitpod.io/#azure-functions-gitpod-node or push the Gitpod button if you have installed the Gitpod [extension](https://www.gitpod.io/docs/browser-extension/).

After you pod has launched I receommend to update the npm packages to the latest version (optional)

```
npm update --save/--save-dev
```

Add a function
```
npx func new
```
Choose Typescript, select template and enter the name for your func. When you use any other template then 'HttpTrigger' you need to configure the blob "AzureWebJobsStorage".

Build and start the func host

```
npm run build
npx func start
```

Or just debug with VSCode and the precofigured "Attach to Node Function" launch configuration.

Happy Func Coding!