Blockly.defineBlocksWithJsonArray([
{
  "type": "iftttt_webhook",
  "message0": "IFTTT Webhooks %1 Key: %2 Evant: %3 Value1: %4 Value2: %5 Value3: %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "key",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "event",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "value1",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "value2",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "value3",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "Send trigger to IFTTT with web hooks",
  "helpUrl": "https://www.sensesiot.com/"
}
]);
