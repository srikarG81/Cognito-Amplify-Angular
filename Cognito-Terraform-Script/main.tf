resource "aws_cognito_user_pool" "pool" {
  name = "pool"
   username_attributes = ["email", "phone_number"]
  auto_verified_attributes = ["email"]
  password_policy {
    minimum_length = 6
  }

  verification_message_template {
    default_email_option = "CONFIRM_WITH_CODE"
    email_subject = "Account Confirmation"
    email_message = "Your confirmation code is {####}"
  }

  schema {
    attribute_data_type      = "String"
    developer_only_attribute = false
    mutable                  = true
    name                     = "email"
    required                 = true

    string_attribute_constraints {
      min_length = 1
      max_length = 256
    }
  }
}

resource "aws_cognito_user_pool_client" "client" {
  name = "client"

  user_pool_id = "${aws_cognito_user_pool.pool.id}"

  generate_secret     = false

access_token_validity = 5
refresh_token_validity = 30

 token_validity_units {
     access_token  = "minutes"
     id_token      = "hours"
     refresh_token = "days"
     // the above are defaults; valid values are: seconds | minutes | hours | days
  }
}