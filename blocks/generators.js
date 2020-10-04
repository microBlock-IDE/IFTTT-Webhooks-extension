Blockly.Python['iftttt_webhook'] = function(block) {
  Blockly.Python.definitions_['import_ifttt'] = 'import ifttt';

  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC) || "''";
  var value_event = Blockly.Python.valueToCode(block, 'event', Blockly.Python.ORDER_ATOMIC) || "''";
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC) || "''";
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC) || "''";
  var value_value3 = Blockly.Python.valueToCode(block, 'value3', Blockly.Python.ORDER_ATOMIC) || "''";
  
  var code = `ifttt.trigger(${value_key}, ${value_event}, ${value_value1}, ${value_value2}, ${value_value3})\n`;
  return code;
};
