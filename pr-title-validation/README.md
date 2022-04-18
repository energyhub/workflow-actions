# Pull Request Title Validation Action
The GitHub workflow action for validating of PR titles with regular expression

## Usage

See [action.yml](./action.yml)

```yaml
steps:
- uses: energyhub/workflow-actions/pr-title-validation@v1.0
  with:
    regex: '^[A-Z]+-\d+\s:\s.*?$' # Regex the title should match.
    github_token: ${{ github.token }} # Default: ${{ github.token }}
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