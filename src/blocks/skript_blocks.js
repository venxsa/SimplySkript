Blockly.Blocks['event_on_join'] = {
  init: function() {
    this.appendDummyInput().appendField('gdy gracz dołączy do serwera');
    this.appendStatementInput('DO');
    this.setColour('#c0392b');
    this.setTooltip('on join');
  }
};

Blockly.Blocks['event_on_quit'] = {
  init: function() {
    this.appendDummyInput().appendField('gdy gracz opuści serwer');
    this.appendStatementInput('DO');
    this.setColour('#c0392b');
    this.setTooltip('on quit');
  }
};

Blockly.Blocks['event_on_death'] = {
  init: function() {
    this.appendDummyInput().appendField('gdy gracz zginie');
    this.appendStatementInput('DO');
    this.setColour('#c0392b');
    this.setTooltip('on death');
  }
};

Blockly.Blocks['event_on_respawn'] = {
  init: function() {
    this.appendDummyInput().appendField('gdy gracz się odrodzi');
    this.appendStatementInput('DO');
    this.setColour('#c0392b');
    this.setTooltip('on respawn');
  }
};

Blockly.Blocks['event_on_damage'] = {
  init: function() {
    this.appendDummyInput().appendField('gdy gracz otrzyma obrażenia');
    this.appendStatementInput('DO');
    this.setColour('#c0392b');
    this.setTooltip('on damage');
  }
};

Blockly.Blocks['event_on_block_break'] = {
  init: function() {
    this.appendDummyInput().appendField('gdy blok zostanie zniszczony');
    this.appendStatementInput('DO');
    this.setColour('#c0392b');
    this.setTooltip('on break');
  }
};

Blockly.Blocks['event_on_block_place'] = {
  init: function() {
    this.appendDummyInput().appendField('gdy blok zostanie postawiony');
    this.appendStatementInput('DO');
    this.setColour('#c0392b');
    this.setTooltip('on place');
  }
};

Blockly.Blocks['event_on_chat'] = {
  init: function() {
    this.appendDummyInput().appendField('gdy gracz napisze na czacie');
    this.appendStatementInput('DO');
    this.setColour('#c0392b');
    this.setTooltip('on chat');
  }
};

Blockly.Blocks['event_command_define'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('zdefiniuj komendę /')
        .appendField(new Blockly.FieldTextInput('heal'), 'CMD');
    this.appendStatementInput('TRIGGER').appendField('wykonaj');
    this.setColour('#c0392b');
    this.setTooltip('command /...: trigger:');
  }
};

Blockly.Blocks['event_on_click_item'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('gdy gracz kliknie')
        .appendField(new Blockly.FieldDropdown([
          ['dowolnym przyciskiem', 'ANY'],
          ['prawym przyciskiem', 'RIGHT'],
          ['lewym przyciskiem', 'LEFT']
        ]), 'CLICK');
    this.appendDummyInput()
        .appendField('trzymając przedmiot')
        .appendField(new Blockly.FieldTextInput('diamond sword'), 'ITEM')
        .appendField('(zostaw puste = dowolny/brak)');
    this.appendDummyInput()
        .appendField('na (opcjonalnie, np. blok/encja)')
        .appendField(new Blockly.FieldTextInput(''), 'TARGET');
    this.appendStatementInput('DO');
    this.setColour('#c0392b');
    this.setTooltip('on [right|left]click [on ...] [holding ...]');
  }
};

Blockly.Blocks['cond_compare'] = {
  init: function() {
    this.appendValueInput('A');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['jest równe', 'is'],
          ['nie jest równe', 'is not'],
          ['jest większe niż', 'is greater than'],
          ['jest mniejsze niż', 'is less than'],
          ['jest większe lub równe', 'is greater than or equal to'],
          ['jest mniejsze lub równe', 'is less than or equal to']
        ]), 'OP');
    this.appendValueInput('B');
    this.setOutput(true, 'Boolean');
    this.setColour('#7a5ba5');
  }
};

Blockly.Blocks['cond_has_permission'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('gracz');
    this.appendDummyInput()
        .appendField('ma uprawnienie')
        .appendField(new Blockly.FieldTextInput('essentials.heal'), 'PERM');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#7a5ba5');
  }
};

Blockly.Blocks['cond_is_op'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('gracz');
    this.appendDummyInput().appendField('jest operatorem (OP)');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#7a5ba5');
  }
};

Blockly.Blocks['cond_is_online'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('gracz');
    this.appendDummyInput().appendField('jest online');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#7a5ba5');
  }
};

Blockly.Blocks['cond_is_sneaking'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('gracz');
    this.appendDummyInput().appendField('jest w kucki (sneak)');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#7a5ba5');
  }
};

Blockly.Blocks['cond_in_world'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('gracz');
    this.appendDummyInput()
        .appendField('jest w świecie')
        .appendField(new Blockly.FieldTextInput('world'), 'WORLD');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#7a5ba5');
  }
};

Blockly.Blocks['cond_block_is'] = {
  init: function() {
    this.appendValueInput('BLOCK').appendField('blok');
    this.appendDummyInput()
        .appendField('jest typu')
        .appendField(new Blockly.FieldTextInput('stone'), 'TYPE');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#7a5ba5');
  }
};

Blockly.Blocks['cond_inventory_contains'] = {
  init: function() {
    this.appendValueInput('INV').appendField('ekwipunek');
    this.appendValueInput('ITEM').appendField('zawiera');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#7a5ba5');
  }
};

Blockly.Blocks['eff_message'] = {
  init: function() {
    this.appendValueInput('TEXT').appendField('wyślij wiadomość');
    this.appendValueInput('TO').appendField('do');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_broadcast'] = {
  init: function() {
    this.appendValueInput('TEXT').appendField('rozgłoś (broadcast)');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_teleport'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('teleportuj');
    this.appendValueInput('WHERE').appendField('do');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_kill'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('zabij');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_heal'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('ulecz');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_damage'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('zadaj obrażenia');
    this.appendValueInput('AMOUNT').appendField('w liczbie serc');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_set_health'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('ustaw zdrowie');
    this.appendValueInput('AMOUNT').appendField('na');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_give_item'] = {
  init: function() {
    this.appendValueInput('ITEM').appendField('daj przedmiot');
    this.appendValueInput('WHO').appendField('graczowi');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_clear_inventory'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('wyczyść ekwipunek gracza');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_play_sound'] = {
  init: function() {
    this.appendValueInput('SOUND').appendField('odtwórz dźwięk');
    this.appendValueInput('WHERE').appendField('w miejscu');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_execute_command_player'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('spraw, by gracz');
    this.appendValueInput('CMD').appendField('wykonał komendę');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_execute_command_console'] = {
  init: function() {
    this.appendValueInput('CMD').appendField('wykonaj komendę konsoli');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_set_gamemode'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('ustaw tryb gry gracza');
    this.appendDummyInput()
        .appendField('na')
        .appendField(new Blockly.FieldDropdown([
          ['przetrwanie', 'survival'],
          ['kreatywny', 'creative'],
          ['przygodowy', 'adventure'],
          ['widz', 'spectator']
        ]), 'MODE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_potion_effect'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('nałóż efekt eliksiru');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('speed'), 'TYPE')
        .appendField('poziom')
        .appendField(new Blockly.FieldNumber(1, 1), 'AMPLIFIER')
        .appendField('na');
    this.appendValueInput('SECONDS').appendField('sekund');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_cancel_event'] = {
  init: function() {
    this.appendDummyInput().appendField('anuluj zdarzenie');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_wait'] = {
  init: function() {
    this.appendValueInput('SECONDS').appendField('czekaj');
    this.appendDummyInput().appendField('sekund');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_spawn_entity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('przywołaj')
        .appendField(new Blockly.FieldTextInput('zombie'), 'TYPE');
    this.appendValueInput('WHERE').appendField('w miejscu');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_set_block'] = {
  init: function() {
    this.appendValueInput('WHERE').appendField('ustaw blok w miejscu');
    this.appendDummyInput()
        .appendField('na')
        .appendField(new Blockly.FieldTextInput('stone'), 'TYPE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_launch_firework'] = {
  init: function() {
    this.appendValueInput('WHERE').appendField('wystrzel fajerwerk w miejscu');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['val_player'] = {
  init: function() {
    this.appendDummyInput().appendField('gracz');
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_victim'] = {
  init: function() {
    this.appendDummyInput().appendField('ofiara (victim)');
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_attacker'] = {
  init: function() {
    this.appendDummyInput().appendField('napastnik (attacker)');
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_event_block'] = {
  init: function() {
    this.appendDummyInput().appendField('blok zdarzenia');
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_location_of'] = {
  init: function() {
    this.appendValueInput('ENTITY').appendField('lokalizacja');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_world'] = {
  init: function() {
    this.appendDummyInput().appendField('świat');
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_health_of'] = {
  init: function() {
    this.appendValueInput('ENTITY').appendField('zdrowie');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_name_of'] = {
  init: function() {
    this.appendValueInput('ENTITY').appendField('nazwa');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_tool_of'] = {
  init: function() {
    this.appendValueInput('ENTITY').appendField('przedmiot w ręce');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_block_at'] = {
  init: function() {
    this.appendValueInput('LOCATION').appendField('blok w miejscu');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_item_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('przedmiot')
        .appendField(new Blockly.FieldTextInput('diamond sword'), 'NAME');
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_random_number'] = {
  init: function() {
    this.appendValueInput('MIN').appendField('losowa liczba od');
    this.appendValueInput('MAX').appendField('do');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_distance'] = {
  init: function() {
    this.appendValueInput('A').appendField('odległość między');
    this.appendValueInput('B').appendField('a');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_loop_value'] = {
  init: function() {
    this.appendDummyInput().appendField('aktualny element pętli');
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_loop_player'] = {
  init: function() {
    this.appendDummyInput().appendField('aktualny gracz z pętli');
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['var_set'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .appendField('ustaw zmienną')
        .appendField(new Blockly.FieldTextInput('licznik'), 'NAME')
        .appendField('(lista:')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'IS_LIST')
        .appendField(')')
        .appendField('na');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#d4a017');
  }
};

Blockly.Blocks['var_add'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .appendField('dodaj')
    this.appendDummyInput()
        .appendField('do zmiennej')
        .appendField(new Blockly.FieldTextInput('licznik'), 'NAME')
        .appendField('(lista:')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'IS_LIST')
        .appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#d4a017');
  }
};

Blockly.Blocks['var_remove'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .appendField('odejmij')
    this.appendDummyInput()
        .appendField('od zmiennej')
        .appendField(new Blockly.FieldTextInput('licznik'), 'NAME')
        .appendField('(lista:')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'IS_LIST')
        .appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#d4a017');
  }
};

Blockly.Blocks['var_delete'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('usuń zmienną')
        .appendField(new Blockly.FieldTextInput('licznik'), 'NAME')
        .appendField('(lista:')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'IS_LIST')
        .appendField(')');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#d4a017');
  }
};

Blockly.Blocks['var_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('zmienna')
        .appendField(new Blockly.FieldTextInput('licznik'), 'NAME')
        .appendField('(lista:')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'IS_LIST')
        .appendField(')');
    this.setOutput(true, null);
    this.setColour('#d4a017');
  }
};

Blockly.Blocks['eff_set_experience'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('ustaw doświadczenie gracza');
    this.appendValueInput('AMOUNT').appendField('na');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_give_experience'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('daj graczowi');
    this.appendValueInput('AMOUNT').appendField('punktów doświadczenia');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_set_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('ustaw czas świata na')
        .appendField(new Blockly.FieldDropdown([
          ['dzień', 'day'],
          ['noc', 'night'],
          ['świt', 'dawn'],
          ['zmierzch', 'dusk'],
          ['południe', 'noon'],
          ['północ', 'midnight']
        ]), 'TIME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_set_weather'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('ustaw pogodę na')
        .appendField(new Blockly.FieldDropdown([
          ['czystą', 'clear'],
          ['deszczową', 'rainy'],
          ['burzową', 'thundering']
        ]), 'WEATHER');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_drop_item'] = {
  init: function() {
    this.appendValueInput('ITEM').appendField('upuść przedmiot');
    this.appendValueInput('WHERE').appendField('w miejscu');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_create_particle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('stwórz efekt cząsteczkowy')
        .appendField(new Blockly.FieldTextInput('flame'), 'TYPE');
    this.appendValueInput('WHERE').appendField('w miejscu');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_stop_sound'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('zatrzymaj wszystkie dźwięki dla gracza');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['eff_enchant_item'] = {
  init: function() {
    this.appendValueInput('ITEM').appendField('zaklnij przedmiot');
    this.appendDummyInput()
        .appendField('zaklęciem')
        .appendField(new Blockly.FieldTextInput('sharpness'), 'ENCHANT')
        .appendField('poziom')
        .appendField(new Blockly.FieldNumber(1, 1), 'LEVEL');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#b5651d');
  }
};

Blockly.Blocks['cond_has_item'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('gracz');
    this.appendValueInput('ITEM').appendField('posiada');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#7a5ba5');
  }
};

Blockly.Blocks['cond_is_flying'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('gracz');
    this.appendDummyInput().appendField('lata');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#7a5ba5');
  }
};

Blockly.Blocks['cond_is_burning'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('jednostka');
    this.appendDummyInput().appendField('płonie');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#7a5ba5');
  }
};

Blockly.Blocks['cond_is_raining'] = {
  init: function() {
    this.appendDummyInput().appendField('pada deszcz w świecie');
    this.setOutput(true, 'Boolean');
    this.setColour('#7a5ba5');
  }
};

Blockly.Blocks['val_max_health_of'] = {
  init: function() {
    this.appendValueInput('ENTITY').appendField('maksymalne zdrowie');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_experience_of'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('doświadczenie gracza');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_uuid_of'] = {
  init: function() {
    this.appendValueInput('WHO').appendField('UUID gracza');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_all_players'] = {
  init: function() {
    this.appendDummyInput().appendField('wszyscy gracze online');
    this.setOutput(true, null);
    this.setColour('#3f9b93');
  }
};

Blockly.Blocks['val_raw_unquoted'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('wartość bez cudzysłowów (może być pusta)')
        .appendField(new Blockly.FieldTextInput(''), 'CODE');
    this.setOutput(true, null);
    this.setColour('#3f9b93');
    this.setTooltip('Wstawia wpisany tekst dosłownie, bez otaczania go cudzysłowami. Zostaw puste, żeby wstawić pustą (pominiętą) wartość — przydatne tam, gdzie Skript wymaga braku wartości albo literału bez cudzysłowów, np. w niektórych warunkach dodatków.');
  }
};

Blockly.Blocks['raw_effect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('efekt Skript:')
        .appendField(new Blockly.FieldTextInput('heal player'), 'CODE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#555555');
    this.setTooltip('Wpisz dowolną linię składni Skripta (effect)');
  }
};

Blockly.Blocks['raw_condition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('warunek Skript:')
        .appendField(new Blockly.FieldTextInput('player is op'), 'CODE');
    this.setOutput(true, 'Boolean');
    this.setColour('#555555');
    this.setTooltip('Wpisz dowolny warunek Skripta (condition)');
  }
};

Blockly.Blocks['raw_expression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('wyrażenie Skript:')
        .appendField(new Blockly.FieldTextInput('location of player'), 'CODE');
    this.setOutput(true, null);
    this.setColour('#555555');
    this.setTooltip('Wpisz dowolne wyrażenie Skripta (expression)');
  }
};

Blockly.Blocks['raw_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('zdarzenie/sekcja Skript (nagłówek):')
        .appendField(new Blockly.FieldTextInput('on join'), 'HEADER');
    this.appendStatementInput('DO');
    this.setColour('#555555');
    this.setTooltip('Wpisz dowolny nagłówek zdarzenia lub sekcji Skripta (bez dwukropka na końcu), np. "on join", "command /heal", "options"');
  }
};


Blockly.Blocks['loop_all_players'] = {
  init: function() {
    this.appendDummyInput().appendField('dla każdego gracza online');
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ba55b');
  }
};

Blockly.Blocks['loop_generic'] = {
  init: function() {
    this.appendValueInput('LIST').appendField('dla każdego elementu w');
    this.appendStatementInput('DO');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5ba55b');
  }
};
