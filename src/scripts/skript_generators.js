skriptGenerator.forBlock['event_on_join'] = function(block) {
  return 'on join:\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['event_on_quit'] = function(block) {
  return 'on quit:\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['event_on_death'] = function(block) {
  return 'on death:\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['event_on_respawn'] = function(block) {
  return 'on respawn:\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['event_on_damage'] = function(block) {
  return 'on damage:\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['event_on_block_break'] = function(block) {
  return 'on break:\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['event_on_block_place'] = function(block) {
  return 'on place:\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['event_on_chat'] = function(block) {
  return 'on chat:\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['event_command_define'] = function(block) {
  var cmd = skriptField(block, 'CMD');
  var body = skriptGenerator.statementToCode(block, 'TRIGGER');
  body = skriptGenerator.prefixLines(body, skriptGenerator.INDENT);
  return 'command /' + cmd + ':\n' + skriptGenerator.INDENT + 'trigger:\n' + body;
};
skriptGenerator.forBlock['event_on_click_item'] = function(block) {
  var click = skriptField(block, 'CLICK');
  var item = skriptField(block, 'ITEM').trim();
  var target = skriptField(block, 'TARGET').trim();
  var words = { 'ANY': 'click', 'RIGHT': 'right click', 'LEFT': 'left click' };
  var header = 'on ' + words[click];
  if (target) header += ' on ' + target;
  if (item) header += ' holding ' + item;
  return header + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};

skriptGenerator.forBlock['cond_compare'] = function(block) {
  var a = skriptValue(block, 'A', '0');
  var b = skriptValue(block, 'B', '0');
  var op = skriptField(block, 'OP');
  return ['(' + a + ' ' + op + ' ' + b + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['cond_has_permission'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  var perm = skriptQuote(skriptField(block, 'PERM'));
  return ['(' + who + ' has permission ' + perm + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['cond_is_op'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  return ['(' + who + ' is op)', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['cond_is_online'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  return ['(' + who + ' is online)', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['cond_is_sneaking'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  return ['(' + who + ' is sneaking)', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['cond_in_world'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  var world = skriptQuote(skriptField(block, 'WORLD'));
  return ['(' + who + ' is in world ' + world + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['cond_block_is'] = function(block) {
  var blk = skriptValue(block, 'BLOCK', 'event-block');
  var type = skriptField(block, 'TYPE');
  return ['(' + blk + ' is ' + type + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['cond_inventory_contains'] = function(block) {
  var inv = skriptValue(block, 'INV', "player's inventory");
  var item = skriptValue(block, 'ITEM', 'diamond');
  return ['(' + inv + ' contains ' + item + ')', skriptGenerator.ORDER_ATOMIC];
};

skriptGenerator.forBlock['eff_message'] = function(block) {
  var text = skriptValue(block, 'TEXT', '""');
  var to = skriptValue(block, 'TO', 'player');
  return 'send ' + text + ' to ' + to + '\n';
};
skriptGenerator.forBlock['eff_broadcast'] = function(block) {
  var text = skriptValue(block, 'TEXT', '""');
  return 'broadcast ' + text + '\n';
};
skriptGenerator.forBlock['eff_teleport'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  var where = skriptValue(block, 'WHERE', 'spawn of world "world"');
  return 'teleport ' + who + ' to ' + where + '\n';
};
skriptGenerator.forBlock['eff_kill'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  return 'kill ' + who + '\n';
};
skriptGenerator.forBlock['eff_heal'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  return 'heal ' + who + '\n';
};
skriptGenerator.forBlock['eff_damage'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  var amount = skriptValue(block, 'AMOUNT', '1');
  return 'damage ' + who + ' by ' + amount + ' hearts\n';
};
skriptGenerator.forBlock['eff_set_health'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  var amount = skriptValue(block, 'AMOUNT', '20');
  return "set " + who + "'s health to " + amount + '\n';
};
skriptGenerator.forBlock['eff_give_item'] = function(block) {
  var item = skriptValue(block, 'ITEM', 'diamond');
  var who = skriptValue(block, 'WHO', 'player');
  return 'give ' + item + ' to ' + who + '\n';
};
skriptGenerator.forBlock['eff_clear_inventory'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  return "clear " + who + "'s inventory\n";
};
skriptGenerator.forBlock['eff_play_sound'] = function(block) {
  var sound = skriptValue(block, 'SOUND', '"block.note_block.pling"');
  var where = skriptValue(block, 'WHERE', 'player\'s location');
  return 'play sound ' + sound + ' at ' + where + '\n';
};
skriptGenerator.forBlock['eff_execute_command_player'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  var cmd = skriptValue(block, 'CMD', '"/help"');
  return 'make ' + who + ' execute command ' + cmd + '\n';
};
skriptGenerator.forBlock['eff_execute_command_console'] = function(block) {
  var cmd = skriptValue(block, 'CMD', '"/say hello"');
  return 'execute console command ' + cmd + '\n';
};
skriptGenerator.forBlock['eff_set_gamemode'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  var mode = skriptField(block, 'MODE');
  return "set " + who + "'s gamemode to " + mode + '\n';
};
skriptGenerator.forBlock['eff_potion_effect'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  var type = skriptField(block, 'TYPE');
  var amplifier = skriptField(block, 'AMPLIFIER');
  var seconds = skriptValue(block, 'SECONDS', '10');
  return 'apply potion effect of ' + type + ' of tier ' + amplifier + ' to ' + who + ' for ' + seconds + ' seconds\n';
};
skriptGenerator.forBlock['eff_cancel_event'] = function() {
  return 'cancel event\n';
};
skriptGenerator.forBlock['eff_wait'] = function(block) {
  var seconds = skriptValue(block, 'SECONDS', '1');
  return 'wait ' + seconds + ' seconds\n';
};
skriptGenerator.forBlock['eff_spawn_entity'] = function(block) {
  var type = skriptField(block, 'TYPE');
  var where = skriptValue(block, 'WHERE', 'player\'s location');
  return 'spawn ' + type + ' at ' + where + '\n';
};
skriptGenerator.forBlock['eff_set_block'] = function(block) {
  var where = skriptValue(block, 'WHERE', 'player\'s location');
  var type = skriptField(block, 'TYPE');
  return 'set block at ' + where + ' to ' + type + '\n';
};
skriptGenerator.forBlock['eff_launch_firework'] = function(block) {
  var where = skriptValue(block, 'WHERE', 'player\'s location');
  return 'launch firework at ' + where + '\n';
};

skriptGenerator.forBlock['val_player'] = function() {
  return ['player', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_victim'] = function() {
  return ['victim', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_attacker'] = function() {
  return ['attacker', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_event_block'] = function() {
  return ['event-block', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_location_of'] = function(block) {
  var entity = skriptValue(block, 'ENTITY', 'player');
  return ['location of ' + entity, skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_world'] = function() {
  return ['world', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_health_of'] = function(block) {
  var entity = skriptValue(block, 'ENTITY', 'player');
  return ['health of ' + entity, skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_name_of'] = function(block) {
  var entity = skriptValue(block, 'ENTITY', 'player');
  return ['name of ' + entity, skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_tool_of'] = function(block) {
  var entity = skriptValue(block, 'ENTITY', 'player');
  return [entity + "'s tool", skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_block_at'] = function(block) {
  var loc = skriptValue(block, 'LOCATION', 'player\'s location');
  return ['block at ' + loc, skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_item_type'] = function(block) {
  return [skriptField(block, 'NAME'), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_random_number'] = function(block) {
  var min = skriptValue(block, 'MIN', '1');
  var max = skriptValue(block, 'MAX', '10');
  return ['random number between ' + min + ' and ' + max, skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_distance'] = function(block) {
  var a = skriptValue(block, 'A', 'player\'s location');
  var b = skriptValue(block, 'B', 'player\'s location');
  return ['distance between ' + a + ' and ' + b, skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_loop_value'] = function() {
  return ['loop-value', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_loop_player'] = function() {
  return ['loop-player', skriptGenerator.ORDER_ATOMIC];
};

function skriptVarName(block) {
  var name = skriptField(block, 'NAME');
  var isList = skriptField(block, 'IS_LIST') === 'TRUE';
  return name + (isList ? '::*' : '');
}

skriptGenerator.forBlock['var_set'] = function(block) {
  var name = skriptVarName(block);
  var value = skriptValue(block, 'VALUE', '0');
  return 'set {' + name + '} to ' + value + '\n';
};
skriptGenerator.forBlock['var_add'] = function(block) {
  var name = skriptVarName(block);
  var value = skriptValue(block, 'VALUE', '1');
  return 'add ' + value + ' to {' + name + '}\n';
};
skriptGenerator.forBlock['var_remove'] = function(block) {
  var name = skriptVarName(block);
  var value = skriptValue(block, 'VALUE', '1');
  return 'remove ' + value + ' from {' + name + '}\n';
};
skriptGenerator.forBlock['var_delete'] = function(block) {
  var name = skriptVarName(block);
  return 'delete {' + name + '}\n';
};
skriptGenerator.forBlock['var_get'] = function(block) {
  var name = skriptVarName(block);
  return ['{' + name + '}', skriptGenerator.ORDER_ATOMIC];
};

skriptGenerator.forBlock['eff_set_experience'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  var amount = skriptValue(block, 'AMOUNT', '0');
  return "set " + who + "'s experience to " + amount + '\n';
};
skriptGenerator.forBlock['eff_give_experience'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  var amount = skriptValue(block, 'AMOUNT', '10');
  return 'give ' + amount + ' experience to ' + who + '\n';
};
skriptGenerator.forBlock['eff_set_time'] = function(block) {
  var time = skriptField(block, 'TIME');
  return 'set time to ' + time + '\n';
};
skriptGenerator.forBlock['eff_set_weather'] = function(block) {
  var weather = skriptField(block, 'WEATHER');
  return 'set weather in world "world" to ' + weather + '\n';
};
skriptGenerator.forBlock['eff_drop_item'] = function(block) {
  var item = skriptValue(block, 'ITEM', 'diamond');
  var where = skriptValue(block, 'WHERE', 'player\'s location');
  return 'drop ' + item + ' at ' + where + '\n';
};
skriptGenerator.forBlock['eff_create_particle'] = function(block) {
  var type = skriptField(block, 'TYPE');
  var where = skriptValue(block, 'WHERE', 'player\'s location');
  return 'create ' + type + ' particle at ' + where + '\n';
};
skriptGenerator.forBlock['eff_stop_sound'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  return 'stop all sounds for ' + who + '\n';
};
skriptGenerator.forBlock['eff_enchant_item'] = function(block) {
  var item = skriptValue(block, 'ITEM', 'diamond sword');
  var enchant = skriptField(block, 'ENCHANT');
  var level = skriptField(block, 'LEVEL');
  return 'enchant ' + item + ' with ' + enchant + ' ' + level + '\n';
};

skriptGenerator.forBlock['cond_has_item'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  var item = skriptValue(block, 'ITEM', 'diamond');
  return ['(' + who + ' has ' + item + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['cond_is_flying'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  return ['(' + who + ' is flying)', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['cond_is_burning'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  return ['(' + who + ' is on fire)', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['cond_is_raining'] = function() {
  return ['(it is raining)', skriptGenerator.ORDER_ATOMIC];
};

skriptGenerator.forBlock['val_max_health_of'] = function(block) {
  var entity = skriptValue(block, 'ENTITY', 'player');
  return ['max health of ' + entity, skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_experience_of'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  return [who + "'s experience", skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_uuid_of'] = function(block) {
  var who = skriptValue(block, 'WHO', 'player');
  return ['uuid of ' + who, skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['val_all_players'] = function() {
  return ['all players', skriptGenerator.ORDER_ATOMIC];
};

skriptGenerator.forBlock['val_raw_unquoted'] = function(block) {
  return [skriptField(block, 'CODE'), skriptGenerator.ORDER_ATOMIC];
};

skriptGenerator.forBlock['raw_effect'] = function(block) {
  return skriptField(block, 'CODE') + '\n';
};
skriptGenerator.forBlock['raw_condition'] = function(block) {
  return ['(' + skriptField(block, 'CODE') + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['raw_expression'] = function(block) {
  return [skriptField(block, 'CODE'), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['raw_event'] = function(block) {
  var header = skriptField(block, 'HEADER');
  return header + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};

skriptGenerator.forBlock['loop_all_players'] = function(block) {
  return 'loop all players:\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['loop_generic'] = function(block) {
  var list = skriptValue(block, 'LIST', 'all players');
  return 'loop ' + list + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};

skriptGenerator.forBlock['controls_if'] = function(block) {
  var code = '';
  for (var i = 0; block.getInput('IF' + i); i++) {
    var cond = skriptValue(block, 'IF' + i, 'true');
    var branch = skriptGenerator.statementToCode(block, 'DO' + i);
    code += (i === 0 ? 'if ' : 'else if ') + cond + ':\n' + branch;
  }
  if (block.getInput('ELSE')) {
    code += 'else:\n' + skriptGenerator.statementToCode(block, 'ELSE');
  }
  return code;
};

skriptGenerator.forBlock['controls_repeat_ext'] = function(block) {
  var times = skriptValue(block, 'TIMES', '10');
  var branch = skriptGenerator.statementToCode(block, 'DO');
  return 'loop ' + times + ' times:\n' + branch;
};

skriptGenerator.forBlock['controls_whileUntil'] = function(block) {
  var mode = skriptField(block, 'MODE');
  var cond = skriptValue(block, 'BOOL', 'true');
  var branch = skriptGenerator.statementToCode(block, 'DO');
  if (mode === 'UNTIL') {
    cond = '(not ' + cond + ')';
  }
  return 'while ' + cond + ':\n' + branch;
};

skriptGenerator.forBlock['logic_boolean'] = function(block) {
  var value = skriptField(block, 'BOOL');
  return [value === 'TRUE' ? 'true' : 'false', skriptGenerator.ORDER_ATOMIC];
};

skriptGenerator.forBlock['logic_negate'] = function(block) {
  var bool = skriptValue(block, 'BOOL', 'true');
  return ['(not ' + bool + ')', skriptGenerator.ORDER_ATOMIC];
};

skriptGenerator.forBlock['logic_operation'] = function(block) {
  var op = skriptField(block, 'OP') === 'AND' ? 'and' : 'or';
  var a = skriptValue(block, 'A', 'true');
  var b = skriptValue(block, 'B', 'true');
  return ['(' + a + ' ' + op + ' ' + b + ')', skriptGenerator.ORDER_ATOMIC];
};

skriptGenerator.forBlock['logic_compare'] = function(block) {
  var ops = {
    'EQ': 'is', 'NEQ': 'is not', 'LT': 'is less than',
    'LTE': 'is less than or equal to', 'GT': 'is greater than',
    'GTE': 'is greater than or equal to'
  };
  var op = ops[skriptField(block, 'OP')];
  var a = skriptValue(block, 'A', '0');
  var b = skriptValue(block, 'B', '0');
  return ['(' + a + ' ' + op + ' ' + b + ')', skriptGenerator.ORDER_ATOMIC];
};

skriptGenerator.forBlock['math_number'] = function(block) {
  return [String(skriptField(block, 'NUM')), skriptGenerator.ORDER_ATOMIC];
};

skriptGenerator.forBlock['math_arithmetic'] = function(block) {
  var symbols = { 'ADD': '+', 'MINUS': '-', 'MULTIPLY': '*', 'DIVIDE': '/', 'POWER': '^' };
  var symbol = symbols[skriptField(block, 'OP')];
  var a = skriptValue(block, 'A', '0');
  var b = skriptValue(block, 'B', '0');
  return ['(' + a + ' ' + symbol + ' ' + b + ')', skriptGenerator.ORDER_ATOMIC];
};

skriptGenerator.forBlock['text'] = function(block) {
  return [skriptQuote(skriptField(block, 'TEXT')), skriptGenerator.ORDER_ATOMIC];
};

skriptGenerator.forBlock['text_print'] = function(block) {
  var text = skriptValue(block, 'TEXT', '""');
  return 'send ' + text + ' to player\n';
};

skriptGenerator.forBlock['custom_hello'] = function(block) {
  var text = skriptQuote(skriptField(block, 'TEXT'));
  return 'send ' + text + ' to player\n';
};
