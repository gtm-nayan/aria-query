/**
 * @flow
 */
const progressbarRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
    'aria-valuetext': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'progress',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            name: 'aria-valuemax',
          },
          {
            name: 'aria-valuemin',
            value: 0,
          },
          {
            name: 'aria-valuenow',
          },
        ],
        constraints: [
          'the progress bar is determinate',
        ],
        name: 'progress',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'status',
      },
      module: 'ARIA',
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'range',
    ],
    [
      'roletype',
      'widget',
    ],
  ],
};

export default progressbarRole;