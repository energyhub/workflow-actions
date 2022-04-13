# Pull Request Title Validation Action
The GitHub workflow action for validating of PR titles with regular expression

## Usage

See [action.yml](./action.yml)

```yaml
steps:
- uses: energyhub/pr-title-validation-action@v1.0
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

## Installing node modules

The actions toolkit is a collection of Node.js packages that allow you to quickly build JavaScript actions with more consistency.

The toolkit @actions/core package provides an interface to the workflow commands, input and output variables, exit statuses, and debug messages.

The toolkit also offers a @actions/github package that returns an authenticated Octokit REST client and access to GitHub Actions contexts.

The toolkit offers more than the core and github packages. For more information, see the actions/toolkit repository.

At your terminal, install the actions toolkit core and github packages.

```shell
npm install @actions/core
npm install @actions/github
```
Now you should see a node_modules directory with the modules you just installed and a package-lock.json file with the installed module dependencies and the versions of each installed module.

## Compiling javascript file

Install vercel/ncc by running this command in your terminal.
```shell
npm i -g @vercel/ncc
```

Compile your index.js file.
```shell
ncc build index.js --license licenses.txt
```
