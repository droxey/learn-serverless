# dailycomm.it

To test locally, execute the following commands in order:

```bash
$ serverless invoke local --function create --path mocks/create-event.json
$ serverless invoke local --function get --path mocks/get-event.json
$ serverless invoke local --function list --path mocks/list-event.json
$ serverless invoke local --function update --path mocks/update-event.json
$ serverless invoke local --function delete --path mocks/delete-event.json
```
