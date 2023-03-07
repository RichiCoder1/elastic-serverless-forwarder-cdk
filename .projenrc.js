const projen = require("projen");
const {
  awscdk: { AwsCdkConstructLibrary },
  javascript: { NodePackageManager },
} = projen;

const project = new AwsCdkConstructLibrary({
  author: "Richard Simpson",
  authorAddress: "richardsimpson@outlook.com",
  defaultReleaseBranch: "main",
  name: "@richicoder/elastic-serverless-forwarder-cdk",
  repositoryUrl:
    "git@github.com:RichiCoder1/elastic-serverless-forwarder-cdk.git",
  catalog: {
    twitter: "RichiCoder1",
    announce: true,
  },

  cdkVersion: "2.66.0",
  stability: "experimental",

  minNodeVersion: "18.0.0",
  packageManager: NodePackageManager.PNPM,
  prettier: true,
  renovatebot: true,
  autoApproveOptions: {
    allowedUsernames: ["renovate[bot]"],
  },
  docgen: true,
  stale: true,
  compat: true,

  githubOptions: {
    mergify: false,
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const pnpmVersion = "7.29.0";

project.addFields({
  packageManager: `pnpm@${pnpmVersion}`,
  engines: {
    pnpm: `^${pnpmVersion}`,
  },
});

project.addDevDeps("@types/node@^16.0.0");

project.synth();
