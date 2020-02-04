# QuickFrame Takehome

## Setup

**Install OS level dependencies**

- Node
- PostgreSQL

**Create .env file**

Create .env file using the sample.env file as a guide. Also keep name of file .env so works with dotenv package.

**Install app requirements**

Run following on command line to install packages, create databases for running code, create js folder for compiled typescript to go into (tsconfig.json expects folder to be named js), nd compiling typescript.

```
createdb [whatever you set environment variable DATABASE equal to]
npm install
npm run initialize
npm run build
```

## Running Code

```
npm run start
```
