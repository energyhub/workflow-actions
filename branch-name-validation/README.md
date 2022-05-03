# Branch Name Validation Action
The GitHub workflow action for validating the name of a branch submitted for PR.
The valid PR branch name is in `camel_case`, starts with the ticket identifier followed by a short description of the feature.
Example: `mec_123_get_registration`.

## Usage

To start using this action copy the following YAML into a new file at `.github/workflows/main.yml`, 
and point the action reference `energyhub/workflow-actions/branch-name-validation@v2.0` in the `uses` section

You can't rename the branch with a pull request open without deleting the branch and removing the pull request.

```yaml
name: Branch Name Validation
on:
  pull_request:
    types: [opened]
jobs:
  Validator-Branch-Name:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - uses: energyhub/workflow-actions/branch-name-validation@v2.0
        with:
          ignored_prefixes: 'rc,hotfix'
          min_length: 5
          regex: '^[a-z]+_\d+_[a-z0-9_]+$'
```

Triggering the action on anything other than `pull_request` will cause a failure.