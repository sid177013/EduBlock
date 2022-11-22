'use strict';

let workspace = null;


Blockly.Themes.Jazro = Blockly.Theme.defineTheme('jazro', {
  'base': Blockly.Themes.Classic,
  'categoryStyles': {
    'start_category': {
      'colour': "#4a148c"
    },
  },
  'blockStyles': {
    'start_blocks': {
      'colourPrimary': "#4a148c",
      'colourSecondary': "#AD7BE9",
      'colourTertiary': "#CDB6E9"
    },
  },
  'componentStyles': {
    'workspaceBackgroundColour': '#ff7518',
    'toolboxBackgroundColour': '#28a8e0',
    'toolboxForegroundColour': '#252526',
    'flyoutBackgroundColour': '#252526',
    'flyoutForegroundColour': '#ccc',
    'flyoutOpacity': 1,
    'scrollbarColour': '#ff0000',
    'insertionMarkerColour': '#fff',
    'insertionMarkerOpacity': 0.3,
    'scrollbarOpacity': 0.4,
    'cursorColour': '#d0d0d0',
    'blackBackground': '#333'
  }
});
function start() {
  // Create main workspace.
  workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: toolboxCategories,
      theme: Blockly.Themes.Jazro,
    });
}