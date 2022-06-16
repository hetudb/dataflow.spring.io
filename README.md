<p align="center">
  <a href="https://www.hetudb.com">
    <img alt="Hetu Distributed Database Dashboard" title="Hetu Distributed Database Website" src="http://www.hetudb.com/images/card.jpg" width="450">
  </a>
</p>

<p align="center">
  <a href="https://github.com/hetudb/hetudb.github.io/actions?query=workflow%3A%22Staging+Build+and+Deploy%22">
  <img src="https://github.com/hetudb/hetudb.github.io/workflows/Staging%20Build%20and%20Deploy/badge.svg?event=push" alt="Staging Build and Deploy">
  </a>
  <a href="https://github.com/hetudb/hetudb.github.io/actions?query=workflow%3A%22Staging+Check+Links%22">
  <img src="https://github.com/hetudb/hetudb.github.io/workflows/Staging%20Check%20Links/badge.svg?event=schedule" alt="Staging Check Links">
  </a>
</p>

## Introduction

This project contains the Markdown files that get automatically generated as documentation and guides for the [HetuDB](https://hetudb.github.io/) site.

## Building

You'll need [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/) installed globally. Note that, for Node, you need `version 10`, not the latest version.

```bash
# Init
yarn install        # Install dependencies

# Linter / Prettier
yarn run lint       # Linter
yarn run fix        # Fix linting errors

# Dev
yarn start          # Run dev

# Prod
yarn build          # Run dev
yarn serve          # Serve the prod build
```

## Contributing

We welcome contributions!
All documentation for this project is written using `Markdown`.
An example segment from our [Getting Started Guide](https://hetudb.github.io/docs/developer-guides/getting-started/quicks/) is shown below:

# Getting Started with HetuDB

HetuDB is a real-time OLAP database management system.

- Simple:

  - Multi-Modal APIs for Rust/Python/Java/R/SQL
  - Cloud native serverless On S3 or local

- Feature-rich:

  - Extensive SQL Plus support
  - Transactions, persistence
  - External Direct Parquet & CSV & Json querying

- Fast
  - Vectorized engine in SIMD
  - Parallel query processing
  - Optimized for analytics
  - High-performance RowwiseRowBlock and RowwiseColumnarBlock format store: lstore and cstore

For quick start HetuDB, please refer to the [Installation guide](%currentPath%/installation/).

## Q&A and issue tracking

If you have any feedback, additions, or changes to the documentation or guides, don't hesitate to [add an issue](https://github.com/hetudb/hetudb.github.io/issues).

## Code of Conduct

This project is governed by the [HetuDB Code of Conduct](CODE_OF_CONDUCT.adoc). By participating, you are expected to uphold this code of conduct. Please report unacceptable behavior to hetudb-code-of-conduct@hetudb.com.

## License

The HetuDB is released under version 2.0 of the [Apache License](https://www.apache.org/licenses/LICENSE-2.0).
