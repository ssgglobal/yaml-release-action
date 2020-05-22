# Generate changelog from Release YAML

Generate a changelog.md file from a release.yml file

## Inputs

### `version`

**Required** The semantic version number of the current release.

### `release`

**Required** The path to the `release.yml` file to parse. Default `./release.yml`.

### `markdown`

**Required** The path to the `markdown.md` file to write the output to. Default `./markdown.md`.

## Outputs

## `status`

Was the acction successful or not?

## Example Usage

```
  - uses: ssgglobal/yaml-release-action@v0.1.0
    with:
      version: '1.0.0'
      release: './release.yml'
      markdown: './changelog.md'

  # Getting the version from a file and setting it in a var
  - name: Get Release Version
    run: echo ::set-env name=REL_VERSION::$(cat ./version)

  - uses: ssgglobal/yaml-release-action@v0.1.0
    with:
      version: ${{ env.REL_VERSION }}
      release: './release.yml'
      markdown: './changelog.md'
```

### Yaml Release Format

The YAML Release file must be formatted as follows.

```
releases:
    - version: 1.0.0 # Semantic Version number.
      name: 'Release Name' # Optional.
      changes:
        - issue: '123' # Issue management ref number. Optional.
          type: 'feat' # Type of issue (feat, bug, hotfix, etc). Optional.
          author: '@octocat' # The github username for the author of this commit. Optional.
          description: A description of the commit # Required.

    - version: 1.0.1 # Semantic Version number.
      name: 'Release Name' # Optional.
      changes:
        - issue: '123' # Issue management ref number. Optional.
          type: 'feat' # Type of issue (feat, bug, hotfix, etc). Optional.
          author: '@octocat' # The github username for the author of this commit. Optional.
          description: A description of the commit # Required.
```

### Generated Markdown

This will produce a markdown file like.

```
# v1.0.0 (My Awesome Release)

## Changelog

| # | Feature | Completed By |
|:-:|---|---|
| 123 | **feat:** This feature is totally awesome! | @dsebot |
| 124 | **bug:** My bad. | @dsebot |
```