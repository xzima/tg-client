# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other
method with the owners of this repository before making a change. Please note we have
a [code of conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Development environment setup

To set up a development environment, please follow these steps:

1. Install [jdk-11](https://adoptium.net/releases.html?variant=openjdk11&jvmVariant=hotspot)

2. Clone the repo

```shell
git clone https://github.com/xzima/tg-client
```

3. Build application

You can build app [with maven wrapper](https://maven.apache.org/wrapper/).

```shell
./mvnw clean package
```

## CI and CD

We use Heroku as test environment, GitHub Actions as automation server and Codecov for test coverage:

- On Pull Requests to **develop**,**rc** and **master**, to build, test and execute the Codecov analysis
- On Push to **rc** branch (from **develop**), to build, test and execute the Codecov analysis and upload the RC version
  to DockerHub and release app on Heroku
- On Push to **master** branch (from **rc**), to build, test and execute the Codecov analysis and upload the STABLE
  version to DockerHub and release app on Heroku and update license headers, the CHANGELOG and the LICENSES_THIRD_PARTY

## Test coverage report

run this command, if you want to get a local test coverage report:

```shell
./mvnw clean test jacoco:report
# or for windows
.\mvnw.cmd clean test jacoco:report
## see /target/site/jacoco-aggregate/index.html
```

## Issues and feature requests

You've found a bug in the source code, a mistake in the documentation, or maybe you'd like a new feature? You can help
us by [submitting an issue on GitHub](https://github.com/xzima/tg-client/issues). Before you create an issue, make sure
to search the issue archive -- your issue may have already been addressed!

Please try to create bug reports that are:

- _Reproducible._ Include steps to reproduce the problem.
- _Specific._ Include as much detail as possible: which version, what environment, etc.
- _Unique._ Do not duplicate existing opened issues.
- _Scoped to a Single Bug._ One bug per report.

**Even better: Submit a pull request with a fix or new feature!**

### How to submit a Pull Request

1. Search our repository for open or closed
   [Pull Requests](https://github.com/xzima/tg-client/pulls)
   that relate to your submission. You don't want to duplicate effort.
2. Fork the project
3. Create your feature branch (`git checkout -b feat/amazing_feature`)
4. Commit your changes (`git commit -m 'feat: add amazing_feature'`) Tg Client
   uses [conventional commits](https://www.conventionalcommits.org), so please follow the specification in your commit
   messages.
5. Push to the branch (`git push origin feat/amazing_feature`)
6. [Open a Pull Request](https://github.com/xzima/tg-client/compare?expand=1)
