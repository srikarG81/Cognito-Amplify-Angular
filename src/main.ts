import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify from 'aws-amplify';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Amplify.configure({

 
  aws_cognito_region: 'ap-south-1', // (required) - Region where Amazon Cognito project was created
  aws_user_pools_id: 'ap-south-1_1rR4m93FE', // (optional) -  Amazon Cognito User Pool ID
  aws_user_pools_web_client_id: '7b7rfg43vm1hvjulgl8u45bgth', // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
 
  AWSS3: {
    bucket: '', //REQUIRED -  Amazon S3 bucket name
    region: 'XX-XXXX-X', //OPTIONAL -  Amazon service region
}
  
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
