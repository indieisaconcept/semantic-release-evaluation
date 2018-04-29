module.exports = {
    npmPublish       : false,
    verifyConditions : [
        '@semantic-release/git',
        '@semantic-release/github'
    ],
    prepare : [{
        path       : '@semantic-release/npm',
        tarballDir : '.semantic-release'
    }],
    publish : [{
        path   : '@semantic-release/github',
        assets : '.semantic-release/*.tgz'
    }]
};
