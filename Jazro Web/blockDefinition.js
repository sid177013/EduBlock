'use strict';

Blockly.Blocks['start'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("When")
      .appendField(new Blockly.FieldImage("https://freepngimg.com/thumb/categories/1398.png", 18, 18, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Clicked");
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setStyle('start_blocks');
  }
};

Blockly.Blocks['move_1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("keep moving")
      .appendField(new Blockly.FieldDropdown([["forward", "move_forward"], ["backward", "move_backward"], ["right", "move_right"], ["left", "move_left"]]), "move")
      .appendField("at the speed of")
      .appendField(new Blockly.FieldDropdown([["100", "slow"], ["150", "fast"], ["255", "fastest"]]), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['move_2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["forward", "move_forward"], ["backward", "move_backward"], ["left", "move_left"], ["right", "move_right"]]), "move_2");
    this.appendValueInput("NAME")
      .setCheck("Number");
    this.appendDummyInput()
      .appendField("second at the speed of")
      .appendField(new Blockly.FieldDropdown([["100", "slow"], ["150", "fast"], ["255", "fastest"]]), "speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['move_3'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("stop moving");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['show_1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("play note")
      .appendField(new Blockly.FieldDropdown([["C5", "note_1"], ["D5", "note_2"], ["E5", "note_3"], ["F5", "note_4"], ["G5", "note_5"], ["A5", "note_6"], ["B5", "note_7"], ["C6", "note_8"]]), "note")
      .appendField("for a")
      .appendField(new Blockly.FieldDropdown([["eighth", "beat_1"], ["quarter", "beat_2"], ["half", "beat_3"], ["whole", "beat_4"], ["double", "beat_5"]]), "beat");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sense_1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("obstacle ahead");
    this.setOutput(true, null);
    this.setColour(315);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("wait");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("repeat")
      .appendField(new Blockly.FieldDropdown([["1", "loop_1"], ["2", "loop_2"], ["3", "loop_3"], ["4", "loop_4"], ["5", "loop_5"], ["6", "loop_6"], ["7", "loop_7"], ["8", "loop_8"], ["9", "loop_9"]]), "loop");
    this.appendStatementInput("do")
      .setCheck(null)
      .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_3'] = {
  init: function () {
    this.appendValueInput("if")
      .setCheck(null)
      .appendField("if");
    this.appendStatementInput("then")
      .setCheck(null)
      .appendField("then");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_4'] = {
  init: function () {
    this.appendValueInput("if")
      .setCheck(null)
      .appendField("if");
    this.appendStatementInput("then")
      .setCheck(null)
      .appendField("then");
    this.appendStatementInput("else")
      .setCheck(null)
      .appendField("else");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};