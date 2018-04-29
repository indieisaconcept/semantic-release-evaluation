module.exports = {
    npmPublish       : false,
    verifyConditions : [
        '@semantic-release/git',
        '@semantic-release/github'
    ],
    publish: [
        {
            path       : '@semantic-release/npm',
            tarballDir : 'dist'
        }, {
            path   : '@semantic-release/github',
            assets : 'dist/*.tgz'
        }
    ]
};
