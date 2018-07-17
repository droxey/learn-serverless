# dailycomm.it

To test locally, execute the following commands in order:

```bash
$ serverless invoke local --function create --path mocks/create-event.json
$ serverless invoke local --function get --path mocks/get-event.json
$ serverless invoke local --function list --path mocks/list-event.json
$ serverless invoke local --function update --path mocks/update-event.json
$ serverless invoke local --function delete --path mocks/delete-event.json
```

Add your user's IAM credentials to `env.yml`:

- `env.yml`:
    ```yaml
    dev:
    AWS_ACCESS_KEY_ID: iam_user_secret_access_key_id
    AWS_SECRET_ACCESS_KEY: iam_user_secret_access_key

    prod:
    AWS_ACCESS_KEY_ID: iam_user_secret_access_key_id
    AWS_SECRET_ACCESS_KEY: iam_user_secret_access_key
    ```

As well as `~/.aws/credentials`:

- `~/.aws/credentials`:
    ```yaml
    [default]
    aws_access_key_id = root_aws_access_key_id
    aws_secret_access_key = root_aws_secret_access_key

    [notesapp]
    aws_access_key_id = iam_user_secret_access_key_id
    aws_secret_access_key = T5LPlUI/iam_user_secret_access_key
    ```

To deploy, open a new Terminal window and run:

```bash
$ serverless deploy --aws-profile notesapp
```
