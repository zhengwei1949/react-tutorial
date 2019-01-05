module.exports = function(api){
    api.cache(true);
    const plugins = [
        [
            "@babel/plugin-transform-runtime"
        ]
    ];
    const presets = [
        [
            '@babel/env',
            {
                "targets": {
                    "browsers":[
                        // "chrome 59"
                        "ie 10"
                    ]
                },
                "modules": 'amd',
                "useBuiltIns": 'usage', // 是否开启自动支持 polyfill
            }
        ]
    ];
    return {
        presets,
        plugins
    }
}