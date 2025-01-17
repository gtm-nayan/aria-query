/**
 * @flow
 */
const menuitemRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-posinset': null,
    'aria-setsize': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'MENU_ITEM',
      },
      module: 'JAPI',
    },
    {
      concept: {
        name: 'option',
      },
      module: 'ARIA',
    },
  ],
  requireContextRole: [
    'group',
    'menu',
    'menubar',
  ],
  requiredContextRole: [
    'group',
    'menu',
    'menubar',
  ],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'widget',
      'command',
    ],
  ],
};

export default menuitemRole;