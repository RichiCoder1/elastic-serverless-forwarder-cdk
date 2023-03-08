const { AwsCdkConstructLibrary } = require("projen/lib/awscdk");
const { NodePackageManager, NpmAccess } = require("projen/lib/javascript");

const project = new AwsCdkConstructLibrary({
  name: "@richicoder/elastic-serverless-forwarder-cdk",
  author: "Richard Simpson",
  authorAddress: "richardsimpson@outlook.com",
  defaultReleaseBranch: "main",
  repositoryUrl:
    "git@github.com:RichiCoder1/elastic-serverless-forwarder-cdk.git",
  catalog: {
    twitter: "RichiCoder1",
    announce: true,
  },

  cdkVersion: "2.66.0",
  stability: "experimental",

  bundledDeps: ["yaml"],
  devDeps: ["@jest/globals"],

  minNodeVersion: "18.0.0",
  packageManager: NodePackageManager.PNPM,
  npmAccess: NpmAccess.PUBLIC,
  prettier: true,
  renovatebot: true,
  autoApproveOptions: {
    allowedUsernames: ["renovate[bot]"],
  },
  docgen: true,
  stale: true,
  compat: true,

  devContainer: true,

  githubOptions: {
    mergify: false,
  },
});

// Add pnpm corepack config
const pnpmVersion = "7.29.0";
project.addFields({
  packageManager: `pnpm@${pnpmVersion}`,
  engines: {
    pnpm: `^${pnpmVersion}`,
  },
});

// Fix for TS compilation error
project.addDevDeps("jsii@v4.9-next");

project.synth();
