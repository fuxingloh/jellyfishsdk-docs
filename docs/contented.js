import {
  defineDocumentType,
  getUnifiedProcessor,
  computeContentHeadings,
  computePath,
  computeSections,
} from '@birthdayresearch/contented-processor';

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the documentation.',
      required: true
    },
    description: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    path: computePath('/', /\d+:/g, ''),
    sections: computeSections(/docs\/?/g, /\d+:/g, ''),
    contentHeadings: computeContentHeadings(),
  },
}));

export default {
  rootDir: './',
  unified: getUnifiedProcessor,
  types: [Doc],
};
