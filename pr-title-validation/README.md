# Pull Request Title Validation Action
The GitHub workflow action for validating of PR titles with regular expression

## Usage

To start using this action copy the following YAML into a new file at `.github/workflows/main.yml`, 
and point the action reference `energyhub/workflow-actions/pr-title-validation@v2.0` in the `uses` section

```yaml
name: PR Title Validation
on:
  pull_request:
    types: [opened, edited, synchronize, reopened]
jobs:
  Validator-PR-Title:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - uses: energyhub/workflow-actions/pr-title-validation@v2.0
        with:
          regex: '^[A-Z]+-\d+\s:\s.*?$'
```

### Note:
Ensure to add `types` to the Pull requests webhook event as by default workflows are triggered only
for `opened`, `synchronize`, or `reopened` pull request events. Read more about
it [here](https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows#pull_request).
```yaml
on:
  pull_request:
    types: [opened, edited, synchronize, reopened]
```

Triggering the action on anything other than `pull_request` will cause a failure.