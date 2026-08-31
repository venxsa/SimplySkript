var skriptGenerator = new Blockly.Generator('Skript');

skriptGenerator.INDENT = '\t';
skriptGenerator.ORDER_ATOMIC = 0;
skriptGenerator.ORDER_NONE = 99;

skriptGenerator.scrub_ = function(block, code, opt_thisOnly) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !opt_thisOnly) {
    return code + skriptGenerator.blockToCode(nextBlock);
  }
  return code;
};

function skriptQuote(text) {
  return '"' + String(text).replace(/"/g, '""') + '"';
}

function skriptValue(block, name, fallback) {
  var code = skriptGenerator.valueToCode(block, name, skriptGenerator.ORDER_NONE);
  if (code) return code;
  return fallback !== undefined ? fallback : '';
}

function skriptRaw(block, name) {
  return skriptGenerator.valueToCode(block, name, skriptGenerator.ORDER_NONE) || '';
}

function skriptField(block, name) {
  return block.getFieldValue(name);
}
