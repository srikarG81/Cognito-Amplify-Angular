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
  aws_user_pools_id: 'ap-south-1_dlhYOZVgs', // (optional) -  Amazon Cognito User Pool ID
  aws_user_pools_web_client_id: '2diqghfl973g5pr3e2kpbr06p6', // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
  aws_cognito_identity_pool_id:'ap-south-1:97b47973-2707-4a28-bdc9-2fbe799d936b',

  aws_user_files_s3_bucket_region: 'ap-south-1', // (required) - Amazon S3 bucket region
  aws_user_files_s3_bucket: 'auth-demo-25032022' // (required) - Amazon S3 bucket URI+
 
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
