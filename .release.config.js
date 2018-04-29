module.exports = {
    release : {
        verifyConditions : [
            '@semantic-release/npm',
            '@semantic-release/git',
            '@semantic-release/github'
        ],
        publish: [
            {
                path       : '@semantic-release/npm',
                npmPublish : false
            }, {
                path   : '@semantic-release/github',
                assets : '*.tgz'
            }
        ]
    }
}
