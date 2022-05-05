# The GitHub Workflow Actions

The repository contains custom GitHub workflow actions with custom code that interacts with any
other repository.

## Installing node modules for actions using Node.js

The actions toolkit is a collection of Node.js packages that allow you to quickly build JavaScript
actions with more consistency.

The toolkit @actions/core package provides an interface to the workflow commands, input and output
variables, exit statuses, and debug messages.

The toolkit also offers a @actions/github package that returns an authenticated Octokit REST client
and access to GitHub Actions contexts.

The toolkit offers more than the core and github packages. For more information, see the
actions/toolkit repository.

At your terminal, install dependencies

```shell
npm install
```

Now you should see a node_modules directory with the modules you just installed and a
package-lock.json file with the installed module dependencies and the versions of each installed
module.

## List of Workflow Actions

* [Validating of PR titles with regular expression](./pr-title-validation/README.md)
* [Validating branch names with regular expression](./branch-name-validation/README.md)
* [Enforce version has been updated](./enforce-version-update/README.md)
