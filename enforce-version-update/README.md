# Branch Name Validation Action
The GitHub workflow action for enforcing version has been updated. 

## Usage

To start using this action copy the following YAML into a new file at 
`.github/workflows/enforce_version_update.yml`,
and point the action reference `energyhub/workflow-actions/enforce-version-update@v2.0` in the 
`uses` section.

```yaml
name: Enforce Version Update
on:
  pull_request:
    types: [synchronize, opened, reopened, ready_for_review, review_requested]
    branches: # against branches
      - main # there is no way to dynamically get the repository's default branch so hardcode it
jobs:
  Enforce-Version-Update:
    if: ${{ github.event_name == 'push' || ! github.event.pull_request.draft }} # not on drafts (optional)
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - uses: energyhub/workflow-actions/enforce-version-update@v2.0
        with:
          new-version: <extract new version>
          main-version: <extract old version>
```
