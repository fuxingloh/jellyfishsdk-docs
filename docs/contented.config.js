/** @type {import('@birthdayresearch/contented').ContentedConfig} */
module.exports = {
  preview: {
    name: "JellyfishSDK",
    url: "https://jellyfishsdk-docs.fuxing.dev",
    github: {
      url: "https://github.com/fuxingloh/jellyfishsdk-docs"
    }
  },
  processor: {
    rootDir: './',
    pipelines: [
      {
        type: 'Doc',
        pattern: ['**/*.md'],
        processor: 'md',
        fields: {
          title: {
            type: 'string',
          },
        },
      }
    ],
  },
};
