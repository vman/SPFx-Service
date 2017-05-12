# SPFx-Service

Clone the repo:

  `git clone https://github.com/vman/SPFx-Service.git`

Navigate to the service folder:

`cd SPFx-Service\service`

Install npm packages for the service:

`npm i`

Bundle the service. This will create the dist and lib folders:

`gulp bundle`

Register your service as a local npm package:

`npm link`

Now the service is ready for use. Navigate to the consumer folder:

`cd..`

`cd consumer`

Install npm packages for the consumer webpart:

`npm i`

Install our local service npm package:

`npm link list-service-demo`

Run your SPFx webpart in the workbench:

`gulp serve`

When you add the webpart to the workbench, you should see that there are 2 js files loaded on the page:

![SPFx files](/images/files.png)