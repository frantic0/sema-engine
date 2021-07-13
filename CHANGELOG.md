# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased] - yyyy-mm-dd

Here we write upgrading notes for brands. It's a team effort to make them as
straightforward as possible.


### Added

- [PROJECTNAME-YYYY](http://tickets.projectname.com/browse/PROJECTNAME-YYYY)
  PATCH Ticket title goes here.


## [0.1.1] - 2021-07-13

### Added
- support for Chrome (v92 onwards), Firefox and Safari technology preview
- open303 as a submodule to build the maxi-processor
- cross-origin isolation header for SharedArrayBuffer
- new CHANGELOG.md
- new .npmignore
- new logger class for aggregating log messages and taking over the console.log

### Changed

- maxi-processor.js concatenates Maximilian PureJS and Wasm, open303, and custom processor code
- make does the build and packages the different sema-engine module formats
- the structure of the package to facilitate local development with npm link

### Fixed
