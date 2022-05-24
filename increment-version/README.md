# Version Number Incrementer Action
The GitHub workflow action for incrementing a version number

## Usage

To start using this action copy the following YAML into a new file at
`.github/workflows/increment_version.yml`,
and point the action reference `energyhub/workflow-actions/increment-version@1.0.0` in the
`uses` section.

For example:
```yaml
name: Increment Feature Version
on:
  pull_request:
    types: [opened]
jobs:
  Minor-Version-Update:
    if: github.event.pull_request.user.login == 'dependabot[bot]'
    runs-on: ubuntu-latest
    steps:
      - name: checkout main branch
        uses: actions/checkout@v3
        with:
          ref: main
          path: main
      - id: main-version
        name: find main branch version in VERSION.txt
        uses: ./.github/actions/get_version
        with:
          version-location: main
      - id: increment-minor-version
        name: Increment Semantic Version
        uses: energyhub/workflow-actions/increment-version@1.0.0
        with:
          current-version: ${{ steps.main-version.outputs.version }}
          version-fragment: 'feature'
      - id: update-version-file
        name: Update VERSION.txt
        run: echo "VERSION = ${{ steps.increment-minor-version.outputs.next-version }}" > ./VERSION.txt
      - id: commit-and-push
        name: Commit new version and push
        run: git add ./VERSION.txt && git commit -m "Bump protos version" && git push

```
