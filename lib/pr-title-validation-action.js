const core = require('@actions/core');
const github = require('@actions/github');

const validEvent = ['pull_request'];

async function run() {
    try {
        const authToken = core.getInput('github_token', {required: true})
        const eventName = github.context.eventName;
        core.info(`Event name: ${eventName}`);
        if (validEvent.indexOf(eventName) < 0) {
            core.setFailed(`Invalid event: ${eventName}`);
            return;
        }

        let branchName = github.context.payload.pull_request.head.ref;
        core.info(`Branch name: ${branchName}`);
        // Check if branch is to be ignored
        const ignoredPrefixes = core.getInput('ignored_branch_prefixes');
        if (ignoredPrefixes.length > 0 && ignoredPrefixes.split(',').some((el) => branchName.startsWith(el.trim()))) {
            core.info(`Skipping PR title check because ${branchName} is in the ignored list - ${ignoredPrefixes}`);
            return
        }

        const owner = github.context.payload.pull_request.base.user.login;
        const repo = github.context.payload.pull_request.base.repo.name;

        const client = new github.GitHub(authToken);
        // The pull request info on the context isn't up to date. When
        // the user updates the title and re-runs the workflow, it would
        // be outdated. Therefore fetch the pull request via the REST API
        // to ensure we use the current title.
        const {data: pullRequest} = await client.pulls.get({
          owner,
          repo,
          pull_number: github.context.payload.pull_request.number
        });

        const title = pullRequest.title;

        core.info(`Pull Request title: "${title}"`);

        // Check if title pass regex
        const regex = RegExp(core.getInput('regex'));
        if (!regex.test(title)) {
            core.setFailed(`Pull Request title "${title}" failed to pass match regex - ${regex}`);
        }

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();