Blockly.Blocks['custom_hello'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wyświetl komunikat")
        .appendField(new Blockly.FieldTextInput("Cześć!"), "TEXT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Wysyła wiadomość do gracza");
    this.setHelpUrl("");
  }
};
