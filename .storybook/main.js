const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const SRC = `${ROOT}/src`;

module.exports = {
    stories: ['../src/**/*.stories.[tj]sx'],
    addons: ['@storybook/addon-storysource', '@storybook/addon-docs', '@storybook/addon-knobs/register'],
    refs: {
        // 'Chromatic Design System': {
        //     title: 'Storybook Design System',
        //     url: 'https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com',
        // },
        // 'Storybook TypeScript Example': {
        //     title: 'Storybook TypeScript Example',
        //     url: 'https://ebazhanov.github.io/storybook-typescript-example',
        // },
        'UI Storybook Example': {
            title: 'UI Storybook',
            url: 'http://localhost:4400',
        },
    },
    webpackFinal: async (config) => {
        config.module.rules.push(
            {
                test: /\.tsx?$/,
                loader: require.resolve('babel-loader'),
            },
            {
                test: /\.stories\.tsx?$/,
                loaders: [
                    {
                        loader: require.resolve('@storybook/source-loader'),
                        options: { parser: 'typescript' },
                    },
                ],
                enforce: 'pre',
            },
        );

        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.modules.push(SRC, 'node_modules');

        return config;
    },
};
