module.exports = {
    npmPublish       : false,
    verifyConditions : [
        '@semantic-release/git',
        '@semantic-release/github'
    ],
    prepare : [{
        path       : '@semantic-release/npm',
        tarballDir : '.semantic-release'
    }, {
        path   : '@semantic-release/git',
        assets : [
            'package.json',
            'package-lock.json',
            'dist/**/*.js'
        ],
        message : 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }],
    publish : [
        '@semantic-release/github'
    ]
};
