module.exports = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "main",
    // { name: "next", prerelease: true },
    // { name: "release/*", prerelease: "rc" },
    {
      channel: false, // forces default channel
      name: "support/v([0-9]+)",
      range: "${name.replace('support/v', '')}.x.x",
    },
  ],
  ci: true,
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "feat", section: "✨ Features" },
            { type: "fix", section: "🐛 Bug Fixes" },
            { type: "chore", hidden: true },
          ],
        },
        writerOpts: {
            headerPartial:`# Release Notes - {{~#if date}} ({{date}}) {{~/if}}`,
        },
      },
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};