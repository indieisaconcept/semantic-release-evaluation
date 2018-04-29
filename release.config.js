module.exports = {
    npmPublish       : false,
    verifyConditions : [
        '@semantic-release/changelog',
        '@semantic-release/git',
        '@semantic-release/github'
    ],
    prepare : [
        "@semantic-release/changelog",
        '@semantic-release/npm',
        {
            path : '@semantic-release/exec',
            cmd  : 'npm run build'
        }, {
            path    : '@semantic-release/git',
            assets  : ['package.json', 'dist/**/*.js', 'docs'],
            message : 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }
    ],
    publish : [
        '@semantic-release/github'
    ]
};
