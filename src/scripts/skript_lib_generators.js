skriptGenerator.forBlock['lib_evt_1'] = function(block) {
  return ("bucket " + "catch" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (" " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_2'] = function(block) {
  return ("fish") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_3'] = function(block) {
  return ("entity potion effect " + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (" " + skriptRaw(block, "ARG1")) : '') + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2")) : '') + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? ("due to " + skriptRaw(block, "ARG3")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_4'] = function(block) {
  return (" breed" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_5'] = function(block) {
  return (" " + "toggle" + " of " + skriptValue(block, "ARG1", "(inputkeys)")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_6'] = function(block) {
  return (" " + " smelt" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_7'] = function(block) {
  return ("brew" + " consum" + skriptField(block, "CH1") + " fuel " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_8'] = function(block) {
  return ("brew" + " start") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_9'] = function(block) {
  return ("brew" + " " + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_10'] = function(block) {
  return (" pick" + " " + " " + " item") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_11'] = function(block) {
  return (" game" + "mode change " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("to " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_12'] = function(block) {
  return (":enter" + " " + " " + " region") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_13'] = function(block) {
  return ("heal" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '') + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG2")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_14'] = function(block) {
  return ("command " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_15'] = function(block) {
  return (" can build check") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_16'] = function(block) {
  return ("damag" + skriptField(block, "CH1") + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '') + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("by " + skriptRaw(block, "ARG2")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_17'] = function(block) {
  return ("Enderman/Sheep/Silverfish/Falling Block") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_18'] = function(block) {
  return ("book sign") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_19'] = function(block) {
  return ("beacon toggle") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_20'] = function(block) {
  return ("resource pack " + " response") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_21'] = function(block) {
  return (skriptValue(block, "ARG1", "(entitydatas)") + " shoot" + " " + skriptField(block, "CH1")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_22'] = function(block) {
  return (" " + "leash" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_23'] = function(block) {
  return ("skript" + " " + skriptField(block, "CH1")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_24'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG1", "(itemtypes)")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_25'] = function(block) {
  return (" " + " " + " plate") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_26'] = function(block) {
  return ("at " + skriptValue(block, "ARG1", "(times)") + " " + " real time") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_27'] = function(block) {
  return ("world sav" + skriptField(block, "CH1") + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_28'] = function(block) {
  return (" " + "level progress" + " " + skriptField(block, "CH1")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_29'] = function(block) {
  return ("grow" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + "1:" + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_30'] = function(block) {
  return ("attack attempt") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_31'] = function(block) {
  return (" armo" + "r change") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_32'] = function(block) {
  return (" " + " " + skriptField(block, "CH1")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_33'] = function(block) {
  return (([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG1")) : '') + " teleport") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_34'] = function(block) {
  return ("send" + " " + " " + " command" + " list") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_35'] = function(block) {
  return (" beacon effect " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_36'] = function(block) {
  return ("xp" + " " + " spawn") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_37'] = function(block) {
  return (skriptField(block, "CH1") + " grow" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (" " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_38'] = function(block) {
  return (" portal") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_39'] = function(block) {
  return ("death " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_40'] = function(block) {
  return (" level " + skriptField(block, "CH1")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_41'] = function(block) {
  return (skriptValue(block, "ARG1", "(entitydata)") + " " + "move") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_42'] = function(block) {
  return ("book " + skriptField(block, "CH1")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_43'] = function(block) {
  return ("vehicle collision " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + " " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_44'] = function(block) {
  return ("every " + skriptValue(block, "ARG1", "(timespan)")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_45'] = function(block) {
  return ("first " + skriptField(block, "CH1")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_46'] = function(block) {
  return ("entit" + skriptField(block, "CH1") + " transform" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("due to " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_47'] = function(block) {
  return (" " + "enter" + " " + " chunk") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_48'] = function(block) {
  return (" target") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_49'] = function(block) {
  return (" stop spectating " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_50'] = function(block) {
  return ("weather change " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("to " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_51'] = function(block) {
  return ("at " + skriptValue(block, "ARG1", "(time)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("in " + skriptRaw(block, "ARG2")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_52'] = function(block) {
  return (" " + " harvest" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_53'] = function(block) {
  return (" " + "break" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (" " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_54'] = function(block) {
  return ("dispens" + skriptField(block, "CH1") + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (" " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_55'] = function(block) {
  return (" firework explo" + "d" + skriptField(block, "CH1") + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("colo" + "red " + skriptRaw(block, "ARG1")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_evt_56'] = function(block) {
  return ("Click" + "click" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("on " + skriptRaw(block, "ARG1")) : '') + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG2")) : '') + "click" + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG3", "(itemtype)") + " on " + skriptValue(block, "ARG4", "(entitydata)")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_cond_57'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(damagesources)") + " " + skriptField(block, "CH1") + " scale" + " damage with difficulty") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_58'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(damagesources)") + " " + skriptField(block, "CH1") + " " + "directly caused") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_59'] = function(block) {
  return ['(' + (" in open water" + " of " + skriptValue(block, "ARG1", "(entities)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_60'] = function(block) {
  return ['(' + ("lure enchantment bonus is " + skriptField(block, "CH1")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_61'] = function(block) {
  return ['(' + (" poisoned of " + skriptValue(block, "ARG1", "(livingentities)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_62'] = function(block) {
  return ['(' + (" instant of " + skriptValue(block, "ARG1", "(potioneffecttypes)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_63'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(skriptpotioneffects)") + " ") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_64'] = function(block) {
  return ['(' + (" " + " icon" + " of " + skriptValue(block, "ARG1", "(skriptpotioneffects)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_65'] = function(block) {
  return ['(' + (" ambient of " + skriptValue(block, "ARG1", "(skriptpotioneffects)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_66'] = function(block) {
  return ['(' + (" particles of " + skriptValue(block, "ARG1", "(skriptpotioneffects)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_67'] = function(block) {
  return ['(' + ("be dispensed") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_68'] = function(block) {
  return ['(' + (" swap equipment " + " of " + skriptValue(block, "ARG1", "(equippablecomponents)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_69'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(equippablecomponents)") + " will " + skriptField(block, "CH1") + " " + "on " + " injury") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_70'] = function(block) {
  return ['(' + (" be sheared off " + " of " + skriptValue(block, "ARG1", "(equippablecomponents)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_71'] = function(block) {
  return ['(' + (" be " + skriptField(block, "CH1") + " on" + " entities of " + skriptValue(block, "ARG1", "(equippablecomponents)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_72'] = function(block) {
  return ['(' + (" " + " data tag" + " " + skriptValue(block, "ARG1", "(strings)") + " of " + skriptValue(block, "ARG2", "(objects)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_73'] = function(block) {
  return ['(' + (" in lov" + skriptField(block, "CH1") + " " + " of " + skriptValue(block, "ARG1", "(livingentities)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_74'] = function(block) {
  return ['(' + (" " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(livingentities)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_75'] = function(block) {
  return ['(' + (" " + "age" + " of " + skriptValue(block, "ARG1", "(livingentities)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_76'] = function(block) {
  return ['(' + (" a " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(livingentities)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_77'] = function(block) {
  return ['(' + (" " + " adult of " + skriptValue(block, "ARG1", "(livingentities)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_78'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(players)") + " " + skriptField(block, "CH1") + " pressing " + skriptValue(block, "ARG2", "(inputkeys)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_79'] = function(block) {
  return ['(' + (" lootable of " + skriptValue(block, "ARG1", "(blocks)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_80'] = function(block) {
  return ['(' + (" " + " loot" + "table of " + skriptValue(block, "ARG1", "(blocks)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_81'] = function(block) {
  return ['(' + (" brewing stand will consume " + " fuel") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_82'] = function(block) {
  return ['(' + ("forced to " + " glint") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_83'] = function(block) {
  return ['(' + (" enchanted " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("with " + skriptRaw(block, "ARG1") + " ") : '') + " of " + skriptValue(block, "ARG2", "(itemtypes)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_84'] = function(block) {
  return ['(' + (" visible through " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(displays)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_85'] = function(block) {
  return ['(' + (" " + skriptValue(block, "ARG1", "(displays)") + " " + skriptField(block, "CH1") + " " + " " + skriptField(block, "CH2") + " shadow") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_86'] = function(block) {
  return ['(' + (" " + "responsive" + " of " + skriptValue(block, "ARG1", "(entities)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_87'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(bossbars)") + " " + " darken" + " the sky") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_88'] = function(block) {
  return ['(' + (" tagged " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(minecrafttags)") + " of " + skriptValue(block, "ARG2", "(itemtypes)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_89'] = function(block) {
  return ['(' + (" empty of " + skriptValue(block, "ARG1", "(objects)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_90'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(objects)") + " contain" + " " + skriptValue(block, "ARG2", "(objects)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_91'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is " + "invisible") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_92'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(commandsenders)") + " " + skriptField(block, "CH1") + " " + " permission" + " " + skriptValue(block, "ARG2", "(strings)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_93'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is on " + " ground") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_94'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(inventories)") + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG2", "(itemtypes)") + " ") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_95'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is ticking") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_96'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is sneezing") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_97'] = function(block) {
  return ['(' + ("running " + " minecraft " + skriptValue(block, "ARG1", "(string)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_98'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(dates)") + " " + skriptField(block, "CH1") + " in the " + "past") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_99'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(inventories)") + " is empty") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_100'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is leashed") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_101'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is " + " saddled") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_102'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is playing dead") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_103'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is pathfinding " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("to" + " " + skriptRaw(block, "ARG2")) : '')) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_104'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(blocks)") + " is " + "conditional") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_105'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " has been stared at") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_106'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " " + skriptField(block, "CH1") + " " + " for " + skriptValue(block, "ARG2", "(players)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_107'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(player)") + " can see all messages ") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_108'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemtypes)") + " is " + skriptField(block, "CH1")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_109'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " " + skriptField(block, "CH1") + " incendiary") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_110'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemtypes)") + " is flammable") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_111'] = function(block) {
  return ['(' + ("chunk" + " " + skriptValue(block, "ARG1", "(directions)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2")) : '') + " " + skriptField(block, "CH1") + " loaded") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_112'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is rolling") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_113'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(numbers)") + " " + skriptField(block, "CH1") + " evenly divisible by " + skriptValue(block, "ARG2", "(number)") + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? ("with " + " tolerance " + " " + skriptRaw(block, "ARG3")) : '')) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_114'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is valid") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_115'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(blocks)") + " is sedated") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_116'] = function(block) {
  return ['(' + (" " + " tool" + "tip" + " of " + skriptValue(block, "ARG1", "(itemtypes)") + " " + skriptField(block, "CH1") + " " + "hidden") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_117'] = function(block) {
  return ['(' + (" damage " + skriptField(block, "CH1") + "0¦" + " " + " " + skriptField(block, "CH2") + " by " + skriptValue(block, "ARG1", "(damagecause)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_118'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is " + skriptField(block, "CH1")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_119'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(players)") + " can fly") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_120'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is shivering") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_121'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(players)") + " is " + skriptField(block, "CH1") + " ") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_122'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is scared") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_123'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is sleeping") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_124'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " can pick" + "up items") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_125'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemstacks)") + " is of type" + " " + skriptValue(block, "ARG2", "(itemtypes)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_126'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(players)") + " has " + " " + skriptField(block, "CH1") + " weather ") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_127'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(blocks)") + " is passable") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_128'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(offlineplayers)") + " " + skriptField(block, "CH1") + " banned") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_129'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itementities)") + " is " + skriptField(block, "CH1")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_130'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is frozen") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_131'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is dancing") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_132'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is persistent") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_133'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(strings)") + " " + skriptField(block, "CH1") + " with " + skriptValue(block, "ARG2", "(strings)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_134'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " has " + skriptField(block, "CH1") + " horn") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_135'] = function(block) {
  return ['(' + (" resource pack " + skriptField(block, "CH1") + " " + " " + skriptValue(block, "ARG1", "(resourcepackstate)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_136'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is " + skriptField(block, "CH1")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_137'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is climbing") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_138'] = function(block) {
  return ['(' + (([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG1")) : '') + " ha" + skriptField(block, "CH1") + " " + skriptValue(block, "ARG2", "(itemtypes)") + " in " + " hand") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_139'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(players)") + " has " + " resource pack ") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_140'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is eating") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_141'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + "'" + " custom name" + " " + skriptField(block, "CH1") + " visible") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_142'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(locations)") + " is within " + skriptValue(block, "ARG2", "(number)") + " " + skriptField(block, "CH1") + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG3", "(locations)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_143'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(players)") + " is flying") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_144'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(players)") + " can see chat colo" + "r") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_145'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemtypes)") + " is interactable") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_146'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is gliding") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_147'] = function(block) {
  return ['(' + ("respawn anchors " + " work in " + skriptValue(block, "ARG1", "(worlds)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_148'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is on " + skriptField(block, "CH1") + " back") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_149'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is wearing " + skriptValue(block, "ARG2", "(itemtypes)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_150'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(inventories)") + " " + "can hold" + " " + skriptValue(block, "ARG2", "(itemtypes)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_151'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " has " + skriptField(block, "CH1")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_152'] = function(block) {
  return ['(' + ("plugin" + " " + skriptValue(block, "ARG1", "(strings)") + " " + skriptField(block, "CH1") + " enabled") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_153'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(offlineplayers)") + " " + " " + " play" + " " + " " + skriptField(block, "CH1")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_154'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " can " + skriptField(block, "CH1")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_155'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(chunk)") + " is " + " slime chunk") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_156'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " " + skriptField(block, "CH1") + " from a " + " spawner") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_157'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(blocks)") + " is ringing") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_158'] = function(block) {
  return ['(' + (" event is cancel" + "ed") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_159'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entitydatas)") + " is spawnable " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("in " + " " + skriptRaw(block, "ARG2")) : '')) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_160'] = function(block) {
  return ['(' + (" server " + "is" + " " + "in white" + "list mode") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_161'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(vectors)") + " is normali" + skriptField(block, "CH1") + "ed") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_162'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is charging " + " fireball") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_163'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemtypes)") + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG2", "(value)") + "'s preferred tool" + skriptValue(block, "ARG3", "(itemtypes)") + " " + skriptField(block, "CH2") + " " + " preferred tool" + " " + skriptField(block, "CH3") + " " + skriptValue(block, "ARG4", "(value)") + skriptValue(block, "ARG5", "(itemtypes)") + " " + skriptField(block, "CH4") + skriptField(block, "CH5") + " " + skriptValue(block, "ARG6", "(value)") + "'s preferred tool" + skriptValue(block, "ARG7", "(itemtypes)") + " " + skriptField(block, "CH6") + skriptField(block, "CH7") + " " + " preferred tool" + " " + skriptField(block, "CH8") + " " + skriptValue(block, "ARG8", "(value)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_164'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(offlineplayers)") + " is " + " op") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_165'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(strings)") + " " + skriptField(block, "CH1") + " alphanumeric") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_166'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(strings)") + " " + "1¦match" + " " + skriptValue(block, "ARG2", "(strings)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_167'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(blocks)") + " is resonating") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_168'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(string)") + " is " + " s" + skriptField(block, "CH1") + "ript " + skriptField(block, "CH2")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_169'] = function(block) {
  return ['(' + (" " + skriptField(block, "CH1") + " firework will be consumed") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_170'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is jumping") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_171'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is " + "right" + "-" + "handed") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_172'] = function(block) {
  return ['(' + ("script" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG1")) : '') + " " + skriptField(block, "CH1") + " loaded") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_173'] = function(block) {
  return ['(' + (skriptField(block, "CH1") + " enabled " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("in " + skriptRaw(block, "ARG1")) : '')) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_174'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " " + skriptField(block, "CH1") + " " + " " + " line of sight to " + skriptValue(block, "ARG2", "(entities)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_175'] = function(block) {
  return ['(' + (" " + skriptField(block, "CH1") + " " + " " + "will" + " " + skriptField(block, "CH2")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_176'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(blocks)") + " " + skriptField(block, "CH1") + " redstone powered") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_177'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(potioneffects)") + " is infinite") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_178'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is " + skriptField(block, "CH1")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_179'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(players)") + " has " + skriptField(block, "CH1") + " filtering " + skriptField(block, "CH2")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_180'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is " + skriptField(block, "CH1")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_181'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(metadataholders)") + " " + skriptField(block, "CH1") + " metadata " + " " + skriptValue(block, "ARG2", "(strings)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_182'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is riptiding") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_183'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(objects)") + " " + "exist") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_184'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemstacks)") + " is stackable") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_185'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is silent") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_186'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is in " + "water") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_187'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is " + skriptField(block, "CH1")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_188'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is screaming") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_189'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is " + skriptField(block, "CH1")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_190'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " can despawn " + skriptField(block, "CH1")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_191'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(locations)") + " " + skriptField(block, "CH1") + " within " + skriptValue(block, "ARG2", "(location)") + " and " + skriptValue(block, "ARG3", "(location)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_192'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemtypes)") + " is occluding") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_193'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemtypes)") + " is edible") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_194'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(players)") + " is sneaking") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_195'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemtypes)") + " is " + " fuel") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_196'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(players)") + " is sprinting") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_197'] = function(block) {
  return ['(' + ("neither" + " " + skriptValue(block, "ARG1", "(objects)") + " " + skriptField(block, "CH1") + " " + skriptField(block, "CH2") + " than" + " " + skriptValue(block, "ARG2", "(objects)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_198'] = function(block) {
  return ['(' + (" entity storage of " + skriptValue(block, "ARG1", "(blocks)") + " " + skriptField(block, "CH1") + " full") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_199'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " has " + " score" + "board tag" + " " + skriptValue(block, "ARG2", "(strings)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_200'] = function(block) {
  return ['(' + ("chance of " + skriptValue(block, "ARG1", "(number)") + "1:" + " ") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_201'] = function(block) {
  return ['(' + (" egg " + skriptField(block, "CH1") + " hatch") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_202'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is dashing") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_203'] = function(block) {
  return ['(' + (" lid" + " of " + skriptValue(block, "ARG1", "(blocks)") + " " + skriptField(block, "CH1") + " " + "open") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_204'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is tameable") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_205'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemtypes)") + " is " + "breakable") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_206'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemtypes)") + " is " + " block") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_207'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemtypes)") + " has " + " model data ") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_208'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(offlineplayers)") + " is " + "online") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_209'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is wet") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_210'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + "'" + " " + " hand" + " " + skriptField(block, "CH1") + " raised") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_211'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(date)") + " " + skriptField(block, "CH1") + " more" + " than " + skriptValue(block, "ARG2", "(timespan)") + " ") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_212'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(blocks)") + " has glowing text") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_213'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(livingentities)") + " is swimming") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_214'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(entities)") + " is riding " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2")) : '')) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_215'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(players)") + " " + skriptField(block, "CH1") + " " + " cooldown " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG2", "(itemtypes)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_216'] = function(block) {
  return ['(' + (" respawn location " + skriptField(block, "CH1") + " " + " " + "respawn anchor") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_217'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemtypes)") + " is solid") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_218'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(itemtypes)") + " is transparent") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_219'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(script)") + " is using " + skriptValue(block, "ARG2", "(strings)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_220'] = function(block) {
  return ['(' + (" " + skriptValue(block, "ARG1", "(livingentities)") + " " + skriptField(block, "CH1") + " going to explode") + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_221'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(players)") + " " + "can" + " build " + skriptValue(block, "ARG2", "(directions)") + " " + skriptValue(block, "ARG3", "(locations)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_222'] = function(block) {
  return ['(' + (" " + skriptValue(block, "ARG1", "(regions)") + " contain" + " " + skriptValue(block, "ARG2", "(directions)") + " " + skriptValue(block, "ARG3", "(locations)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_cond_223'] = function(block) {
  return ['(' + (skriptValue(block, "ARG1", "(offlineplayers)") + " " + skriptField(block, "CH1") + " " + "0¦" + " member" + " of " + " " + skriptValue(block, "ARG2", "(regions)")) + ')', skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_eff_224'] = function(block) {
  return (" " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(gameeffects)") + " " + ([skriptRaw(block, "ARG2"), skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2") + " " + skriptRaw(block, "ARG3")) : '') + " " + ([skriptRaw(block, "ARG4")].some(function(s){ return s !== ''; }) ? ("as " + skriptRaw(block, "ARG4")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_225'] = function(block) {
  return (skriptField(block, "CH1") + " in " + " hook" + " entity") + '\n';
};
skriptGenerator.forBlock['lib_eff_226'] = function(block) {
  return ("apply " + " lure enchantment bonus") + '\n';
};
skriptGenerator.forBlock['lib_eff_227'] = function(block) {
  return ("icon") + '\n';
};
skriptGenerator.forBlock['lib_eff_228'] = function(block) {
  return (skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_229'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(skriptpotioneffects)") + " to " + skriptValue(block, "ARG2", "(livingentities)") + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? ("for " + skriptRaw(block, "ARG3")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_230'] = function(block) {
  return ("poison " + skriptValue(block, "ARG1", "(livingentities)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("for " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_231'] = function(block) {
  return ("ambient") + '\n';
};
skriptGenerator.forBlock['lib_eff_232'] = function(block) {
  return ("particles") + '\n';
};
skriptGenerator.forBlock['lib_eff_233'] = function(block) {
  return ("message" + " " + skriptValue(block, "ARG1", "(objects)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("to " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_234'] = function(block) {
  return ("send " + " action" + "bar " + " " + skriptValue(block, "ARG1", "(object)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("to " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_235'] = function(block) {
  return ("broadcast " + skriptValue(block, "ARG1", "(objects)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_236'] = function(block) {
  return ("send title " + skriptValue(block, "ARG1", "(object)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("with subtitle " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_237'] = function(block) {
  return (skriptField(block, "CH1") + " " + " title" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_238'] = function(block) {
  return ("allow " + skriptValue(block, "ARG1", "(equippablecomponents)") + " to be equipped on" + " entities") + '\n';
};
skriptGenerator.forBlock['lib_eff_239'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(equippablecomponents)") + " " + skriptField(block, "CH2") + " " + "on " + " injury") + '\n';
};
skriptGenerator.forBlock['lib_eff_240'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(equippablecomponents)") + " to swap equipment ") + '\n';
};
skriptGenerator.forBlock['lib_eff_241'] = function(block) {
  return ("allow " + skriptValue(block, "ARG1", "(equippablecomponents)") + " to be sheared off ") + '\n';
};
skriptGenerator.forBlock['lib_eff_242'] = function(block) {
  return ("allow " + skriptValue(block, "ARG1", "(equippablecomponents)") + " to be dispensed") + '\n';
};
skriptGenerator.forBlock['lib_eff_243'] = function(block) {
  return (skriptField(block, "CH1") + " " + " " + skriptValue(block, "ARG1", "(worldborders)") + " " + "by" + " " + skriptValue(block, "ARG2", "(number)") + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? ("over " + " " + skriptRaw(block, "ARG3")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_244'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " " + " " + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_245'] = function(block) {
  return ("lock age of " + skriptValue(block, "ARG1", "(livingentities)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_246'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " breedable") + '\n';
};
skriptGenerator.forBlock['lib_eff_247'] = function(block) {
  return ("rotate " + skriptValue(block, "ARG1", "(vectors)") + " around " + " " + " " + "-" + "axis by " + skriptValue(block, "ARG2", "(number)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_248'] = function(block) {
  return ("generate " + " loot " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(loottable)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH2") + " " + skriptRaw(block, "ARG2")) : '') + " in " + skriptValue(block, "ARG3", "(inventories)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_249'] = function(block) {
  return ("make " + " brewing stand consume " + " fuel") + '\n';
};
skriptGenerator.forBlock['lib_eff_250'] = function(block) {
  return ("enchant " + skriptValue(block, "ARG1", "(itemtypes)") + " with " + skriptValue(block, "ARG2", "(enchantmenttypes)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_251'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(itemtypes)") + " " + " " + " glint") + '\n';
};
skriptGenerator.forBlock['lib_eff_252'] = function(block) {
  return (" teleport " + skriptValue(block, "ARG1", "(entities)") + " " + "to" + " " + skriptValue(block, "ARG2", "(location)") + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? (" retaining " + skriptRaw(block, "ARG3")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_253'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(displays)") + " visible through " + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_254'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptField(block, "CH2") + " shadow to " + " " + skriptValue(block, "ARG1", "(displays)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_255'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(entities)") + " responsive") + '\n';
};
skriptGenerator.forBlock['lib_eff_256'] = function(block) {
  return ("kick " + skriptValue(block, "ARG1", "(players)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("by reason of" + " " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_257'] = function(block) {
  return ("ban " + " " + skriptValue(block, "ARG1", "(strings)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("by reason of" + " " + skriptRaw(block, "ARG2")) : '') + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? ("for " + skriptRaw(block, "ARG3")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_258'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(bossbars)") + " " + " darken the sky") + '\n';
};
skriptGenerator.forBlock['lib_eff_259'] = function(block) {
  return ("register " + " ") + '\n';
};
skriptGenerator.forBlock['lib_eff_260'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(entities)") + " to " + skriptValue(block, "ARG2", "(entity)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_261'] = function(block) {
  return ("apply knockback to" + " " + skriptValue(block, "ARG1", "(livingentities)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2")) : '') + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? ("with " + skriptField(block, "CH1") + " " + skriptRaw(block, "ARG3")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_262'] = function(block) {
  return ("zombify " + skriptValue(block, "ARG1", "(livingentities)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_263'] = function(block) {
  return ("drop " + skriptValue(block, "ARG1", "(itemtypes)") + " " + ([skriptRaw(block, "ARG2"), skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2") + " " + skriptRaw(block, "ARG3")) : '') + " ") + '\n';
};
skriptGenerator.forBlock['lib_eff_264'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " swing " + " " + " hand") + '\n';
};
skriptGenerator.forBlock['lib_eff_265'] = function(block) {
  return ("") + '\n';
};
skriptGenerator.forBlock['lib_eff_266'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " despawn" + " " + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_267'] = function(block) {
  return ("enforce " + " " + " white" + "list") + '\n';
};
skriptGenerator.forBlock['lib_eff_268'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " " + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_269'] = function(block) {
  return (skriptField(block, "CH1") + " " + " " + skriptValue(block, "ARG1", "(fireworkeffects)") + " at " + skriptValue(block, "ARG2", "(locations)") + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? (" " + skriptField(block, "CH2") + " " + skriptRaw(block, "ARG3")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_270'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " " + "start:" + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_271'] = function(block) {
  return ("load " + " world" + " " + skriptValue(block, "ARG1", "(strings)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("with environment " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_272'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(blocks)") + " have glowing text") + '\n';
};
skriptGenerator.forBlock['lib_eff_273'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(entities)") + " " + " " + skriptValue(block, "ARG2", "(direction)") + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH2") + " " + " " + skriptField(block, "CH3") + " " + " " + skriptRaw(block, "ARG3")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_274'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(itemtypes)") + "'" + " " + " tool" + "tip") + '\n';
};
skriptGenerator.forBlock['lib_eff_275'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(itemtypes)") + " " + " " + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_276'] = function(block) {
  return (skriptField(block, "CH1") + " " + " us" + "e of " + skriptValue(block, "ARG1", "(livingentities)") + "'" + " " + " item") + '\n';
};
skriptGenerator.forBlock['lib_eff_277'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(entities)") + " " + " persist") + '\n';
};
skriptGenerator.forBlock['lib_eff_278'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " " + "stop" + " eating") + '\n';
};
skriptGenerator.forBlock['lib_eff_279'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(players)") + " " + "say" + " " + skriptValue(block, "ARG2", "(strings)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_280'] = function(block) {
  return ("instantly explode " + " " + skriptValue(block, "ARG1", "(livingentities)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_281'] = function(block) {
  return ("force " + skriptValue(block, "ARG1", "(players)") + " to " + " fly") + '\n';
};
skriptGenerator.forBlock['lib_eff_282'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " " + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_283'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(entities)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("for " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_284'] = function(block) {
  return (skriptField(block, "CH1") + " book " + skriptValue(block, "ARG1", "(itemtype)") + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG2", "(players)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_285'] = function(block) {
  return (skriptField(block, "CH1") + " the " + skriptField(block, "CH2") + " of " + skriptValue(block, "ARG1", "(blocks)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_286'] = function(block) {
  return ("return " + skriptValue(block, "ARG1", "(objects)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_287'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptField(block, "CH2") + " " + skriptField(block, "CH3") + " " + skriptValue(block, "ARG1", "(players)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_288'] = function(block) {
  return (" " + " " + " command" + " " + skriptValue(block, "ARG1", "(strings)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("by " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_289'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " start shivering") + '\n';
};
skriptGenerator.forBlock['lib_eff_290'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " attack " + skriptValue(block, "ARG2", "(entities)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_291'] = function(block) {
  return ("equip " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG1")) : '') + " with " + skriptValue(block, "ARG2", "(itemtypes)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_292'] = function(block) {
  return ("hide " + skriptValue(block, "ARG1", "(entities)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_293'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " " + "right" + "-" + "handed") + '\n';
};
skriptGenerator.forBlock['lib_eff_294'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " " + skriptField(block, "CH1") + " " + ([skriptRaw(block, "ARG2"), skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2") + " " + skriptRaw(block, "ARG3")) : '') + " " + ([skriptRaw(block, "ARG4")].some(function(s){ return s !== ''; }) ? ("timespan:for " + skriptRaw(block, "ARG4")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_295'] = function(block) {
  return ("feed " + " " + skriptValue(block, "ARG1", "(players)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("by " + skriptRaw(block, "ARG2") + " ") : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_296'] = function(block) {
  return ("make " + " egg " + " hatch") + '\n';
};
skriptGenerator.forBlock['lib_eff_297'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " get " + "off" + " " + skriptField(block, "CH1") + " back") + '\n';
};
skriptGenerator.forBlock['lib_eff_298'] = function(block) {
  return (skriptField(block, "CH1") + " lightning" + "1¦" + "effect" + " " + skriptValue(block, "ARG1", "(directions)") + " " + skriptValue(block, "ARG2", "(locations)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_299'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(livingentities)") + " " + "to " + " " + skriptField(block, "CH2") + " of " + skriptValue(block, "ARG2", "(block)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_300'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(entities)") + " " + " incendiary") + '\n';
};
skriptGenerator.forBlock['lib_eff_301'] = function(block) {
  return ("allow " + skriptValue(block, "ARG1", "(livingentities)") + " to pick" + "up items") + '\n';
};
skriptGenerator.forBlock['lib_eff_302'] = function(block) {
  return (skriptField(block, "CH1") + " ") + '\n';
};
skriptGenerator.forBlock['lib_eff_303'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(entities)") + " " + " " + skriptField(block, "CH2") + " " + " " + skriptValue(block, "ARG2", "(entity)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_304'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(players)") + " " + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_305'] = function(block) {
  return ("play sound" + " " + skriptValue(block, "ARG1", "(strings)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_306'] = function(block) {
  return (skriptField(block, "CH1") + " " + " " + skriptField(block, "CH2") + " " + " to drop") + '\n';
};
skriptGenerator.forBlock['lib_eff_307'] = function(block) {
  return ("keep " + " " + skriptField(block, "CH1") + " ") + '\n';
};
skriptGenerator.forBlock['lib_eff_308'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(entities)") + " " + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_309'] = function(block) {
  return ("stop" + " " + " server") + '\n';
};
skriptGenerator.forBlock['lib_eff_310'] = function(block) {
  return ("send " + " resource pack " + " " + skriptValue(block, "ARG1", "(string)") + " to " + skriptValue(block, "ARG2", "(players)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_311'] = function(block) {
  return ("enable PvP " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("in " + skriptRaw(block, "ARG1")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_312'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(itementities)") + " from " + skriptField(block, "CH2")) + '\n';
};
skriptGenerator.forBlock['lib_eff_313'] = function(block) {
  return ("sort " + skriptValue(block, "ARG1", "(objects)") + " " + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_314'] = function(block) {
  return ("open" + " " + " lid" + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(blocks)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_315'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " " + "start sleeping" + " " + ([skriptRaw(block, "ARG2"), skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2") + " " + skriptRaw(block, "ARG3")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_316'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(objects)") + " to " + skriptValue(block, "ARG2", "(objects)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_317'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(objects)") + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG2", "(wyrażenie)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_318'] = function(block) {
  return (skriptField(block, "CH1") + " tree " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of type " + skriptRaw(block, "ARG1")) : '') + " " + skriptValue(block, "ARG2", "(directions)") + " " + skriptValue(block, "ARG3", "(locations)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_319'] = function(block) {
  return ("load " + " server icon " + skriptField(block, "CH1") + " " + " " + " " + " " + skriptValue(block, "ARG1", "(string)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_320'] = function(block) {
  return ("copy " + skriptValue(block, "ARG1", "(objects)") + " " + "to " + skriptValue(block, "ARG2", "(objects)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_321'] = function(block) {
  return ("op " + skriptValue(block, "ARG1", "(offlineplayers)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_322'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(entities)") + " " + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_323'] = function(block) {
  return ("remove " + " " + "left horn" + " of " + skriptValue(block, "ARG1", "(livingentities)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_324'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(entities)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_325'] = function(block) {
  return ("replace " + " " + skriptValue(block, "ARG1", "(strings)") + " in " + skriptValue(block, "ARG2", "(strings)") + " with " + skriptValue(block, "ARG3", "(string)") + " ") + '\n';
};
skriptGenerator.forBlock['lib_eff_326'] = function(block) {
  return ("log " + skriptValue(block, "ARG1", "(strings)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + " " + skriptRaw(block, "ARG2")) : '') + " ") + '\n';
};
skriptGenerator.forBlock['lib_eff_327'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " " + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_328'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " ram " + skriptValue(block, "ARG2", "(livingentity)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_329'] = function(block) {
  return ("run " + skriptValue(block, "ARG1", "(executable)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("arguments:with arg" + "s " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_330'] = function(block) {
  return ("dye" + " " + skriptValue(block, "ARG1", "(itemtypes)") + " " + skriptValue(block, "ARG2", "(color)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_331'] = function(block) {
  return ("close " + skriptValue(block, "ARG1", "(players)") + "'" + " inventory ") + '\n';
};
skriptGenerator.forBlock['lib_eff_332'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " sense " + " disturbance " + skriptValue(block, "ARG2", "(direction)") + " " + skriptValue(block, "ARG3", "(location)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_333'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(livingentities)") + " " + " " + "face ") + '\n';
};
skriptGenerator.forBlock['lib_eff_334'] = function(block) {
  return (skriptField(block, "CH1") + " " + " drops ") + '\n';
};
skriptGenerator.forBlock['lib_eff_335'] = function(block) {
  return ("connect " + skriptValue(block, "ARG1", "(players)") + " to " + " " + " " + skriptValue(block, "ARG2", "(string)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_336'] = function(block) {
  return ("make command block" + " " + skriptValue(block, "ARG1", "(blocks)") + " " + "conditional") + '\n';
};
skriptGenerator.forBlock['lib_eff_337'] = function(block) {
  return (skriptField(block, "CH1") + " " + " " + skriptField(block, "CH2") + " firework from being consumed") + '\n';
};
skriptGenerator.forBlock['lib_eff_338'] = function(block) {
  return ("apply " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG1")) : '') + " bone" + "meal" + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("to " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_339'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " " + "start:" + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_340'] = function(block) {
  return ("cause exception") + '\n';
};
skriptGenerator.forBlock['lib_eff_341'] = function(block) {
  return ("ring " + skriptValue(block, "ARG1", "(blocks)") + " " + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_342'] = function(block) {
  return ("suppress " + " type hints") + '\n';
};
skriptGenerator.forBlock['lib_eff_343'] = function(block) {
  return (" suppress " + " " + " warning") + '\n';
};
skriptGenerator.forBlock['lib_eff_344'] = function(block) {
  return ("cancel " + " event") + '\n';
};
skriptGenerator.forBlock['lib_eff_345'] = function(block) {
  return (skriptField(block, "CH1") + " " + " " + skriptValue(block, "ARG1", "(timespan)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_346'] = function(block) {
  return ("damage " + skriptValue(block, "ARG1", "(livingentities)") + " by " + skriptValue(block, "ARG2", "(number)") + " ") + '\n';
};
skriptGenerator.forBlock['lib_eff_347'] = function(block) {
  return ("allow " + skriptValue(block, "ARG1", "(livingentities)") + " to " + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_348'] = function(block) {
  return (skriptField(block, "CH1") + " " + " " + skriptField(block, "CH2") + " of " + skriptValue(block, "ARG1", "(blocks)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("for " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_349'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " " + skriptField(block, "CH1")) + '\n';
};
skriptGenerator.forBlock['lib_eff_350'] = function(block) {
  return ("hide " + skriptValue(block, "ARG1", "(players)") + " " + skriptField(block, "CH1") + " " + " server list") + '\n';
};
skriptGenerator.forBlock['lib_eff_351'] = function(block) {
  return ("continue ") + '\n';
};
skriptGenerator.forBlock['lib_eff_352'] = function(block) {
  return ("hide" + " " + " " + skriptField(block, "CH1") + "name of " + skriptValue(block, "ARG1", "(entities)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_353'] = function(block) {
  return ("kill " + skriptValue(block, "ARG1", "(entities)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_354'] = function(block) {
  return ("save " + " " + skriptValue(block, "ARG1", "(worlds)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_355'] = function(block) {
  return (" " + " explosion " + skriptField(block, "CH1") + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG1", "(number)") + " " + ([skriptRaw(block, "ARG2"), skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2") + " " + skriptRaw(block, "ARG3")) : '') + " ") + '\n';
};
skriptGenerator.forBlock['lib_eff_356'] = function(block) {
  return ("silence " + skriptValue(block, "ARG1", "(entities)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_357'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " " + skriptField(block, "CH1") + " to" + " " + skriptValue(block, "ARG2", "(livingentity)") + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? ("at speed " + skriptRaw(block, "ARG3")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_358'] = function(block) {
  return ("update " + skriptValue(block, "ARG1", "(blocks)") + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG2", "(blockdata)") + " ") + '\n';
};
skriptGenerator.forBlock['lib_eff_359'] = function(block) {
  return (skriptField(block, "CH1") + " " + " " + " " + " cooldown") + '\n';
};
skriptGenerator.forBlock['lib_eff_360'] = function(block) {
  return ("hide " + " player " + " info" + " ") + '\n';
};
skriptGenerator.forBlock['lib_eff_361'] = function(block) {
  return ("break " + skriptValue(block, "ARG1", "(blocks)") + " " + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("using " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_362'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(livingentities)") + " " + skriptField(block, "CH1") + " dead") + '\n';
};
skriptGenerator.forBlock['lib_eff_363'] = function(block) {
  return ("force " + skriptValue(block, "ARG1", "(players)") + " to respawn") + '\n';
};
skriptGenerator.forBlock['lib_eff_364'] = function(block) {
  return (skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(blocks)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_365'] = function(block) {
  return (skriptValue(block, "ARG1", "(wyrażenie)") + " if " + skriptValue(block, "ARG2", "(wyrażenie)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_366'] = function(block) {
  return ("make " + skriptValue(block, "ARG1", "(players)") + " see " + skriptValue(block, "ARG2", "(locations)") + " as " + skriptValue(block, "ARG3", "(itemtype)")) + '\n';
};
skriptGenerator.forBlock['lib_eff_367'] = function(block) {
  return ("stop " + "all:all sound" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("in " + " " + skriptRaw(block, "ARG1")) : '') + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG2")) : '')) + '\n';
};
skriptGenerator.forBlock['lib_eff_368'] = function(block) {
  return ("1:" + skriptField(block, "CH1") + " script " + " " + skriptValue(block, "ARG1", "(string)") + " ") + '\n';
};
skriptGenerator.forBlock['lib_eff_369'] = function(block) {
  return ("detonate " + skriptValue(block, "ARG1", "(entities)")) + '\n';
};
skriptGenerator.forBlock['lib_expr_370'] = function(block) {
  return [(" absorbed blocks"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_371'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " " + skriptField(block, "CH2") + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_372'] = function(block) {
  return [(" affected entities"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_373'] = function(block) {
  return [(" " + " age of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_374'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_375'] = function(block) {
  return [(" target jukebox of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_376'] = function(block) {
  return [(" banned " + "players"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_377'] = function(block) {
  return [(" " + " " + " commands"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_378'] = function(block) {
  return [("all groups"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_379'] = function(block) {
  return [(" " + " data " + " keys of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_380'] = function(block) {
  return [("alphabetically sorted " + skriptValue(block, "ARG1", "(strings)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_381'] = function(block) {
  return [(" altitude" + " of " + skriptValue(block, "ARG1", "(locations)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_382'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(numbered)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_383'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(itemtypes)") + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG2", "(inventories)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_384'] = function(block) {
  return [(skriptValue(block, "ARG1", "(number)") + " " + " deg"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_385'] = function(block) {
  return [(" " + " " + " " + " repair cost of " + skriptValue(block, "ARG1", "(inventories)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_386'] = function(block) {
  return [(" anvil " + " " + skriptField(block, "CH1") + " input of " + skriptValue(block, "ARG1", "(inventories)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_387'] = function(block) {
  return [("any " + " of " + " " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_388'] = function(block) {
  return [(" applied " + " effect"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_389'] = function(block) {
  return [(" applied enchant" + "s"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_390'] = function(block) {
  return [(" " + " " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(colors)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_391'] = function(block) {
  return [(" last arg"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_392'] = function(block) {
  return [("ConstantConditions"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_393'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " armo" + "r item of " + skriptValue(block, "ARG1", "((new|equipped) armo[u]r item)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_394'] = function(block) {
  return [(" " + skriptValue(block, "ARG1", "(equipmentslots)") + " " + " of " + skriptValue(block, "ARG2", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_395'] = function(block) {
  return [(" arrow knockback strength of " + skriptValue(block, "ARG1", "(projectiles)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_396'] = function(block) {
  return [(" arrow pierce level of " + skriptValue(block, "ARG1", "(projectiles)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_397'] = function(block) {
  return [(" arrow" + " stuck in " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_398'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " block" + " of " + skriptValue(block, "ARG1", "(projectiles)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_399'] = function(block) {
  return [(" attack cooldown of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_400'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_401'] = function(block) {
  return [(" " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_402'] = function(block) {
  return [(" " + "money" + " of " + skriptValue(block, "ARG1", "(offlineplayers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_403'] = function(block) {
  return [(" " + skriptValue(block, "ARG1", "(bannerpatterntypes)") + " item"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_404'] = function(block) {
  return [(" banner pattern" + " of " + skriptValue(block, "ARG1", "(itemstacks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_405'] = function(block) {
  return [(" " + " barter" + " drops"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_406'] = function(block) {
  return [(" " + " barter" + " input"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_407'] = function(block) {
  return [(" " + "secondary" + " " + " effect of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_408'] = function(block) {
  return [(" beacon " + " range of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_409'] = function(block) {
  return [(" beacon tier of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_410'] = function(block) {
  return [(" " + " bed" + " " + " of " + skriptValue(block, "ARG1", "(offlineplayers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_411'] = function(block) {
  return [(" target flower of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_412'] = function(block) {
  return [(" " + " honey level of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_413'] = function(block) {
  return [(" biome " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of" + " " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_414'] = function(block) {
  return [(" " + "block"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_415'] = function(block) {
  return [(" block" + "data of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_416'] = function(block) {
  return [(" " + " hardness of " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_417'] = function(block) {
  return [(" blocks " + skriptValue(block, "ARG1", "(direction)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_418'] = function(block) {
  return [(" blocks " + skriptField(block, "CH1") + " " + " " + skriptValue(block, "ARG1", "(regions)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_419'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " sound" + " of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_420'] = function(block) {
  return [(" blocks in radius " + skriptValue(block, "ARG1", "(number)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG2")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_421'] = function(block) {
  return [(" " + " " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_422'] = function(block) {
  return [(" " + " " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_423'] = function(block) {
  return [(" book " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_424'] = function(block) {
  return [(" boss" + "bar of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_425'] = function(block) {
  return [(" boss" + "bar" + " " + skriptField(block, "CH1") + " " + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG1", "(strings)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_426'] = function(block) {
  return [(" break speed" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '') + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("for " + skriptRaw(block, "ARG2")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_427'] = function(block) {
  return [(" breeding mother"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_428'] = function(block) {
  return [(" brewing " + " fuel " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_429'] = function(block) {
  return [(" brewing results"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_430'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " slot of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_431'] = function(block) {
  return [(" " + " brewing time of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_432'] = function(block) {
  return [(" broadcast" + "-" + "message"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_433'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " item of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_434'] = function(block) {
  return [(" carr" + skriptField(block, "CH1") + " block" + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_435'] = function(block) {
  return [(" last caught " + " errors"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_436'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " entity of " + skriptValue(block, "ARG1", "(damagesources)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_437'] = function(block) {
  return [("character " + skriptField(block, "CH1") + " code" + "point" + " " + skriptValue(block, "ARG1", "(integer)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_438'] = function(block) {
  return [(" " + " characters " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(string)") + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG2", "(string)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_439'] = function(block) {
  return [(" " + " charge" + " of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_440'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " format"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_441'] = function(block) {
  return [(" " + "message"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_442'] = function(block) {
  return [(" " + "recipients"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_443'] = function(block) {
  return [(" " + " chest inventory " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(textcomponent)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("with " + skriptRaw(block, "ARG2") + " row") : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_444'] = function(block) {
  return [(" chunk" + " " + "of" + " " + skriptValue(block, "ARG1", "(locations)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_445'] = function(block) {
  return [(" "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_446'] = function(block) {
  return [(" client view distance" + " of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_447'] = function(block) {
  return [(" remaining " + " "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_448'] = function(block) {
  return [(" " + " code" + "point" + " of " + skriptValue(block, "ARG1", "(strings)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_449'] = function(block) {
  return [("colo" + "r-" + skriptValue(block, "ARG1", "(strings)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_450'] = function(block) {
  return [(" colo" + "r" + " " + skriptField(block, "CH1") + " hex" + " code" + " " + skriptValue(block, "ARG1", "(strings)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_451'] = function(block) {
  return [(" colo" + "r" + " of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_452'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " command"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_453'] = function(block) {
  return [(" " + " command of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_454'] = function(block) {
  return [(" main command " + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (" command" + " " + skriptRaw(block, "ARG1")) : '')) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_455'] = function(block) {
  return [(" " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_456'] = function(block) {
  return [(" compass target of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_457'] = function(block) {
  return [(" " + " config"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_458'] = function(block) {
  return [(" consumed item"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_459'] = function(block) {
  return [(" " + skriptField(block, "CH1") + "-" + "coord" + " of " + skriptValue(block, "ARG1", "(locations)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_460'] = function(block) {
  return [("created damage source"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_461'] = function(block) {
  return [(" " + " max" + " fuse tick" + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_462'] = function(block) {
  return [(" " + " " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_463'] = function(block) {
  return [(" cursor slot of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_464'] = function(block) {
  return [(" " + " model data of " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_465'] = function(block) {
  return [(" damage"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_466'] = function(block) {
  return [("damage cause"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_467'] = function(block) {
  return [(skriptValue(block, "ARG1", "(itemtype)") + " with " + skriptField(block, "CH1") + " " + " " + skriptValue(block, "ARG2", "(number)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_468'] = function(block) {
  return [(" damage location of " + skriptValue(block, "ARG1", "(damagesources)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_469'] = function(block) {
  return [(" damage type of " + skriptValue(block, "ARG1", "(damagesources)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_470'] = function(block) {
  return [(skriptValue(block, "ARG1", "(timespan)") + " " + "ago"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_471'] = function(block) {
  return [(" death" + "-" + "message"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_472'] = function(block) {
  return [(" debug info" + " of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_473'] = function(block) {
  return [(skriptValue(block, "ARG1", "(objects)") + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG2", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_474'] = function(block) {
  return [(skriptField(block, "CH1") + "queued " + skriptValue(block, "ARG1", "(queue)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_475'] = function(block) {
  return [("difference " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(object)") + " and " + skriptValue(block, "ARG2", "(object)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_476'] = function(block) {
  return [(" difficult" + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(worlds)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_477'] = function(block) {
  return [(" direct entity of " + skriptValue(block, "ARG1", "(damagesources)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_478'] = function(block) {
  return [(([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG1") + " ") : '') + " in " + " " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG2", "(entity)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_479'] = function(block) {
  return [(" bill" + "board" + " " + " of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_480'] = function(block) {
  return [(" " + " " + "light " + " override" + " of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_481'] = function(block) {
  return [(" glow" + " colo" + "r" + " override" + " of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_482'] = function(block) {
  return [(" display " + "width" + " of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_483'] = function(block) {
  return [(" interpolation " + "duration" + " of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_484'] = function(block) {
  return [(" shadow " + "strength" + " of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_485'] = function(block) {
  return [(" teleport" + " duration" + " of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_486'] = function(block) {
  return [(" " + "right" + " " + " rotation of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_487'] = function(block) {
  return [(" " + "display" + " " + "translation" + " of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_488'] = function(block) {
  return [(" " + " view " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_489'] = function(block) {
  return [(" distance between " + skriptValue(block, "ARG1", "(location)") + " and " + skriptValue(block, "ARG2", "(location)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_490'] = function(block) {
  return [(" " + " domestication level of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_491'] = function(block) {
  return [(" drops"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_492'] = function(block) {
  return [(" drops of " + skriptValue(block, "ARG1", "(blocks)") + " " + ([skriptRaw(block, "ARG2"), skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG2") + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? ("1¦as " + skriptRaw(block, "ARG3")) : '')) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_493'] = function(block) {
  return [(" " + "duplicat" + skriptField(block, "CH1") + " cool" + "down " + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_494'] = function(block) {
  return [(" " + "damage" + " " + " of " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_495'] = function(block) {
  return [(" " + " " + skriptField(block, "CH1") + " " + "value" + " of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_496'] = function(block) {
  return [(" egg"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_497'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " element " + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_498'] = function(block) {
  return [(" " + " " + "xp" + " cost"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_499'] = function(block) {
  return [(" enchant" + " item"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_500'] = function(block) {
  return [(" enchant" + " bonus"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_501'] = function(block) {
  return [(" enchant" + " hint"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_502'] = function(block) {
  return [(" " + " level" + " of " + skriptValue(block, "ARG1", "(enchantments)") + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG2", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_503'] = function(block) {
  return [(" enchant" + " offers"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_504'] = function(block) {
  return [(" " + " cost of " + skriptValue(block, "ARG1", "(enchantmentoffers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_505'] = function(block) {
  return [(" enchantments of " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_506'] = function(block) {
  return [(" ender" + "chest" + " of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_507'] = function(block) {
  return [(" " + skriptValue(block, "ARG1", "(entitydatas)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + "world" + " " + skriptRaw(block, "ARG2")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_508'] = function(block) {
  return [(" " + skriptValue(block, "ARG1", "(wyrażenie)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_509'] = function(block) {
  return [(" " + skriptValue(block, "ARG1", "(attributetype)") + " " + " attribute " + " of " + skriptValue(block, "ARG2", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_510'] = function(block) {
  return [(" " + " " + skriptField(block, "CH1") + " us" + "e time of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_511'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_512'] = function(block) {
  return [(" entity size of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_513'] = function(block) {
  return [(" entity snapshot of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_514'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " sound" + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_515'] = function(block) {
  return [(" " + " " + " entity count of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_516'] = function(block) {
  return [(" camera overlay of " + skriptValue(block, "ARG1", "(equippablecomponents)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_517'] = function(block) {
  return [(" allowed entities of " + skriptValue(block, "ARG1", "(equippablecomponents)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_518'] = function(block) {
  return [(" equip sound of " + skriptValue(block, "ARG1", "(equippablecomponents)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_519'] = function(block) {
  return [(" equipped " + skriptField(block, "CH1") + " " + skriptField(block, "CH2") + " of " + skriptValue(block, "ARG1", "(equippablecomponents)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_520'] = function(block) {
  return [(" shear" + " sound of " + skriptValue(block, "ARG1", "(equippablecomponents)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_521'] = function(block) {
  return [(" equipment slot of " + skriptValue(block, "ARG1", "(equippablecomponents)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_522'] = function(block) {
  return [(" equippable component" + " of " + skriptValue(block, "ARG1", "(slots)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_523'] = function(block) {
  return [(" event-" + skriptValue(block, "ARG1", "(wyrażenie)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_524'] = function(block) {
  return [(" " + "initiator"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_525'] = function(block) {
  return [(" exact item" + " of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_526'] = function(block) {
  return [(skriptValue(block, "ARG1", "(objects)") + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG2", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_527'] = function(block) {
  return [(" exhaustion of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_528'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " " + "xp" + " "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_529'] = function(block) {
  return [(" " + "experience" + " " + " cooldown of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_530'] = function(block) {
  return [("experience" + " cooldown change " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_531'] = function(block) {
  return [(" exploded blocks"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_532'] = function(block) {
  return [(" " + " block " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_533'] = function(block) {
  return [(" explosion " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_534'] = function(block) {
  return [(" explosive " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_535'] = function(block) {
  return [(" " + "head" + " " + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_536'] = function(block) {
  return [(" " + "horizontal" + " facing of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_537'] = function(block) {
  return [(" fall" + " " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_538'] = function(block) {
  return [(" " + " fertilized blocks"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_539'] = function(block) {
  return [(skriptValue(block, "ARG1", "(objects)") + " " + skriptField(block, "CH1") + " \\" + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2") + "\\") : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_540'] = function(block) {
  return [(" final damage"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_541'] = function(block) {
  return [(" " + " " + "burn" + " " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_542'] = function(block) {
  return [(skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(fireworktype)") + " " + " colo" + "red " + skriptValue(block, "ARG2", "(colors)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_543'] = function(block) {
  return [(" first empty slot" + " in " + skriptValue(block, "ARG1", "(inventories)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_544'] = function(block) {
  return [("min:min" + " fish" + " approach" + " angle"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_545'] = function(block) {
  return [("fish" + " bit" + skriptField(block, "CH1") + " " + " time"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_546'] = function(block) {
  return [("fish" + " " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_547'] = function(block) {
  return [(" hook" + " entity"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_548'] = function(block) {
  return [("min:min" + " fish" + " wait" + " time"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_549'] = function(block) {
  return [(" fl" + "y" + " " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_550'] = function(block) {
  return [(" food exhaustion of " + skriptValue(block, "ARG1", "(damagesources)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_551'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_552'] = function(block) {
  return [(skriptValue(block, "ARG1", "(dates)") + " formatted " + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG2")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_553'] = function(block) {
  return [(" freeze time of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_554'] = function(block) {
  return [("player" + " from " + skriptValue(block, "ARG1", "(uuids)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_555'] = function(block) {
  return [(" function " + " " + skriptValue(block, "ARG1", "(string)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG2")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_556'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " item"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_557'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " slot of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_558'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " time of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_559'] = function(block) {
  return [("Could not obtain required data for "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_560'] = function(block) {
  return [(" game" + "mode of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_561'] = function(block) {
  return [(" gamerule " + skriptValue(block, "ARG1", "(gamerule)") + " of " + skriptValue(block, "ARG2", "(worlds)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_562'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " " + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_563'] = function(block) {
  return [(" glowing of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_564'] = function(block) {
  return [(" gravity of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_565'] = function(block) {
  return [(" group" + " of " + skriptValue(block, "ARG1", "(offlineplayers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_566'] = function(block) {
  return [(" hanging " + "entity"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_567'] = function(block) {
  return [(skriptValue(block, "ARG1", "(strings)") + " hash" + " with " + ":" + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_568'] = function(block) {
  return [(" hatching number"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_569'] = function(block) {
  return [(" hatching entity "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_570'] = function(block) {
  return [(" heal" + " amount"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_571'] = function(block) {
  return [("regen" + " " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_572'] = function(block) {
  return [(" health of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_573'] = function(block) {
  return [(" hex" + " code of " + skriptValue(block, "ARG1", "(colors)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_574'] = function(block) {
  return [(" hidden players " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_575'] = function(block) {
  return [(" " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_576'] = function(block) {
  return [(" hotbar button"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_577'] = function(block) {
  return [(" " + " hotbar slot" + " of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_578'] = function(block) {
  return [(" " + " " + " " + skriptField(block, "CH1") + " " + " list"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_579'] = function(block) {
  return [(" humidit" + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_580'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_581'] = function(block) {
  return [(" " + " " + "position" + " of " + " " + skriptValue(block, "ARG1", "(strings)") + " in " + skriptValue(block, "ARG2", "(string)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_582'] = function(block) {
  return [("input"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_583'] = function(block) {
  return [(" interaction " + "height" + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_584'] = function(block) {
  return [(" inventor" + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(inventoryholders)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_585'] = function(block) {
  return [("inventory action"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_586'] = function(block) {
  return [(" inventory clos" + skriptField(block, "CH1") + " " + skriptField(block, "CH2")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_587'] = function(block) {
  return [("¦holder" + " of " + skriptValue(block, "ARG1", "(inventories)") + skriptValue(block, "ARG2", "(inventories)") + "'" + " " + "¦holder"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_588'] = function(block) {
  return [(" slot" + " " + skriptValue(block, "ARG1", "(numbers)") + " of " + skriptValue(block, "ARG2", "(inventory)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_589'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(booleans)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_590'] = function(block) {
  return [("IP" + " of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_591'] = function(block) {
  return [("item"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_592'] = function(block) {
  return [(" item" + " " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(slots)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_593'] = function(block) {
  return [(" " + " component copy of " + skriptValue(block, "ARG1", "(itemcomponents)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_594'] = function(block) {
  return [(" " + " cooldown of " + skriptValue(block, "ARG1", "(itemtypes)") + " for " + skriptValue(block, "ARG2", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_595'] = function(block) {
  return [(" item " + " transform of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_596'] = function(block) {
  return [(" item flags of " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_597'] = function(block) {
  return [(" item " + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_598'] = function(block) {
  return [(" uuid of " + " " + " item owner " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_599'] = function(block) {
  return [(" block" + "s"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_600'] = function(block) {
  return [(" items " + "in" + " " + " " + skriptValue(block, "ARG1", "(inventories)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_601'] = function(block) {
  return [(" uuid of " + " " + " item thrower " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_602'] = function(block) {
  return [(skriptValue(block, "ARG1", "(itemtype)") + " with " + " model data " + skriptValue(block, "ARG2", "(numbers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_603'] = function(block) {
  return [(skriptValue(block, "ARG1", "(itemtypes)") + " with" + " " + " glint"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_604'] = function(block) {
  return [(skriptValue(block, "ARG1", "(itemtypes)") + " with" + " " + " tool" + "tip"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_605'] = function(block) {
  return [(" " + "join" + "-" + "message"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_606'] = function(block) {
  return [("concat" + " " + skriptValue(block, "ARG1", "(strings)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + " " + skriptRaw(block, "ARG2")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_607'] = function(block) {
  return [(skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_608'] = function(block) {
  return [(" boss" + "bar " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(bossbars)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_609'] = function(block) {
  return [(" kick" + "-" + "message"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_610'] = function(block) {
  return [(" " + " " + " " + skriptField(block, "CH1") + " " + " of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_611'] = function(block) {
  return [(" last attacker of " + skriptValue(block, "ARG1", "(entity)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_612'] = function(block) {
  return [(" last damage of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_613'] = function(block) {
  return [(" last damage " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_614'] = function(block) {
  return [(" " + " death location" + " of " + skriptValue(block, "ARG1", "(offlineplayers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_615'] = function(block) {
  return [(" last " + skriptField(block, "CH1") + " " + " " + skriptValue(block, "ARG1", "(entities)") + " " + skriptField(block, "CH2") + " " + "attacked"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_616'] = function(block) {
  return [(" last player" + " to " + "attack" + " " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_617'] = function(block) {
  return [(" " + " loaded server icon"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_618'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " login of " + skriptValue(block, "ARG1", "(offlineplayers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_619'] = function(block) {
  return [(" " + " resource pack response" + " of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_620'] = function(block) {
  return [(" " + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(entitydata)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_621'] = function(block) {
  return [(" leash holder" + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_622'] = function(block) {
  return [(" length of " + skriptValue(block, "ARG1", "(strings)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_623'] = function(block) {
  return [(" " + " level of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_624'] = function(block) {
  return [(" level progress of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_625'] = function(block) {
  return [("light" + "level " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of" + " " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_626'] = function(block) {
  return [(" " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_627'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " " + " " + ([skriptRaw(block, "ARG1"), skriptRaw(block, "ARG2"), skriptRaw(block, "ARG3"), skriptRaw(block, "ARG4")].some(function(s){ return s !== ''; }) ? ("\\" + "]" + skriptRaw(block, "ARG1") + ", " + skriptRaw(block, "ARG2") + ", " + " " + skriptRaw(block, "ARG3") + " " + ([skriptRaw(block, "ARG4")].some(function(s){ return s !== ''; }) ? (" " + skriptRaw(block, "ARG4")) : '')) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_628'] = function(block) {
  return [(skriptValue(block, "ARG1", "(vector)") + " to location in " + skriptValue(block, "ARG2", "(world)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_629'] = function(block) {
  return [(skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(location)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_630'] = function(block) {
  return [(skriptValue(block, "ARG1", "(location)") + " offset by " + " " + skriptValue(block, "ARG2", "(vectors)") + " "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_631'] = function(block) {
  return [(" loop" + "-" + skriptField(block, "CH1") + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("-" + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_632'] = function(block) { return [skriptField(block, 'CODE'), skriptGenerator.ORDER_ATOMIC]; };
skriptGenerator.forBlock['lib_expr_633'] = function(block) {
  return [(" loot"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_634'] = function(block) {
  return [("loot" + "context"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_635'] = function(block) {
  return [(" looted entity of " + skriptValue(block, "ARG1", "(lootcontexts)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_636'] = function(block) {
  return [(" loot" + " " + " location of " + skriptValue(block, "ARG1", "(lootcontexts)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_637'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(lootcontexts)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_638'] = function(block) {
  return [(" loot" + " " + " luck " + " of " + skriptValue(block, "ARG1", "(lootcontexts)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_639'] = function(block) {
  return [(" loot of " + skriptValue(block, "ARG1", "(loottables)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + " " + skriptRaw(block, "ARG2")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_640'] = function(block) {
  return [(" loot" + "table" + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_641'] = function(block) {
  return [(" loot" + "table" + " " + skriptValue(block, "ARG1", "(strings)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_642'] = function(block) {
  return [(" loot" + " seed" + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_643'] = function(block) {
  return [(" love" + " time of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_644'] = function(block) {
  return [(" " + "highest" + " " + " block " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(locations)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_645'] = function(block) {
  return [(" max" + " " + "durabilit" + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_646'] = function(block) {
  return [(" max" + " freeze time of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_647'] = function(block) {
  return [(" max" + " health of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_648'] = function(block) {
  return [(" max" + " " + " us" + skriptField(block, "CH1") + " " + skriptField(block, "CH2") + " of " + skriptValue(block, "ARG1", "(itemstacks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_649'] = function(block) {
  return [(" max" + " minecart " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_650'] = function(block) {
  return [(" " + " max" + " player" + " "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_651'] = function(block) {
  return [(" max" + " stack" + " of " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_652'] = function(block) {
  return [("me"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_653'] = function(block) {
  return [(skriptField(block, "CH1") + " " + "0¦members" + " of " + " " + skriptValue(block, "ARG1", "(regions)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_654'] = function(block) {
  return [(" " + " " + ":free" + " " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_655'] = function(block) {
  return [(" " + " repair amount"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_656'] = function(block) {
  return [("metadata " + " " + skriptValue(block, "ARG1", "(strings)") + " of " + skriptValue(block, "ARG2", "(metadataholders)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_657'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " " + " of " + skriptValue(block, "ARG1", "(location)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_658'] = function(block) {
  return [(" mid" + "point " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(object)") + " and " + skriptValue(block, "ARG2", "(object)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_659'] = function(block) {
  return [(" " + " " + skriptField(block, "CH1") + " velocity of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_660'] = function(block) {
  return [(" " + "min" + " enchant" + " level of " + skriptValue(block, "ARG1", "(enchantments)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_661'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " phase" + " of " + skriptValue(block, "ARG1", "(worlds)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_662'] = function(block) {
  return [(" " + " " + "MOTD"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_663'] = function(block) {
  return [(" name" + " of " + skriptValue(block, "ARG1", "(offlineplayers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_664'] = function(block) {
  return [(skriptValue(block, "ARG1", "(itemtype)") + " " + "named" + " " + skriptValue(block, "ARG2", "(textcomponent)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_665'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(entitydatas)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (" to " + skriptRaw(block, "ARG2")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_666'] = function(block) {
  return [(" " + skriptValue(block, "ARG1", "(bannerpatterntype)") + " colo" + "red " + skriptValue(block, "ARG2", "(color)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_667'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " tick" + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_668'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " time" + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_669'] = function(block) {
  return [(" node " + skriptValue(block, "ARG1", "(string)") + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG2", "(node)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_670'] = function(block) {
  return [("now"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_671'] = function(block) {
  return [("number of upper" + "case char" + skriptField(block, "CH1") + " in " + skriptValue(block, "ARG1", "(string)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_672'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG1", "(number)") + " " + skriptField(block, "CH3") + " " + skriptValue(block, "ARG2", "(number)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_673'] = function(block) {
  return [(" offline" + "players"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_674'] = function(block) {
  return [(" " + " " + " player " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_675'] = function(block) {
  return [(" on-screen kick message"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_676'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " inventory " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_677'] = function(block) {
  return [(" " + " " + "op" + "s"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_678'] = function(block) {
  return [(" " + "hidden" + " gene" + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_679'] = function(block) {
  return [(skriptValue(block, "ARG1", "(string)") + " parsed as " + skriptValue(block, "ARG2", "(classinfo)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_680'] = function(block) {
  return [(" " + " " + " error"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_681'] = function(block) {
  return [(" particle count of " + skriptValue(block, "ARG1", "(particles)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_682'] = function(block) {
  return [(" particle distribution of " + skriptValue(block, "ARG1", "(particles)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_683'] = function(block) {
  return [(" particle offset of " + skriptValue(block, "ARG1", "(particles)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_684'] = function(block) {
  return [(" " + "particle speed " + " of " + skriptValue(block, "ARG1", "(particles)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_685'] = function(block) {
  return [("unchecked"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_686'] = function(block) {
  return [(skriptValue(block, "ARG1", "(particles)") + " with " + " offset " + " " + skriptValue(block, "ARG2", "(vector)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_687'] = function(block) {
  return [(skriptValue(block, "ARG1", "(particles)") + " with " + " particle speed " + " " + " " + skriptValue(block, "ARG2", "(number)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_688'] = function(block) {
  return [(" passenger" + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_689'] = function(block) {
  return [(" path" + "finding target location"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_690'] = function(block) {
  return [(" path" + "finding target "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_691'] = function(block) {
  return [(skriptValue(block, "ARG1", "(number)") + "percent" + " of " + skriptValue(block, "ARG2", "(numbers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_692'] = function(block) {
  return [(" permissions " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_693'] = function(block) {
  return [(" " + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG1")) : '') + " " + " data " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG2", "(string)") + " of " + skriptValue(block, "ARG3", "(chunks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_694'] = function(block) {
  return [(" picked " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_695'] = function(block) {
  return [(" pick" + "up delay of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_696'] = function(block) {
  return [(" ping of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_697'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(itemtype)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_698'] = function(block) {
  return [(" " + " chat completion" + " of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_699'] = function(block) {
  return [(" " + skriptField(block, "CH1") + "list " + "header" + " " + " of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_700'] = function(block) {
  return [(" " + skriptField(block, "CH1") + "list name" + " of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_701'] = function(block) {
  return [(" " + skriptField(block, "CH1") + "list priority of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_702'] = function(block) {
  return [(" protocol version of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_703'] = function(block) {
  return [(" " + " plugins"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_704'] = function(block) {
  return [(" portal" + " blocks"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_705'] = function(block) {
  return [(" portal cooldown of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_706'] = function(block) {
  return [(" " + " amplifier" + " of " + skriptValue(block, "ARG1", "(skriptpotioneffects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_707'] = function(block) {
  return [(" " + " duration" + " of " + skriptValue(block, "ARG1", "(skriptpotioneffects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_708'] = function(block) {
  return [(" " + " " + skriptValue(block, "ARG1", "(potioneffecttypes)") + " " + " effect" + " of " + skriptValue(block, "ARG2", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_709'] = function(block) {
  return [(" " + " potion effects of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_710'] = function(block) {
  return [(" potion " + " category of " + skriptValue(block, "ARG1", "(potioneffecttypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_711'] = function(block) {
  return [(" " + " " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_712'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " critical " + skriptField(block, "CH2") + " of " + skriptValue(block, "ARG1", "(projectiles)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_713'] = function(block) {
  return [(" projectile force"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_714'] = function(block) {
  return [(" " + " " + " protocol version "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_715'] = function(block) {
  return [(" moved blocks"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_716'] = function(block) {
  return [(" rotation " + "angle" + " of " + skriptValue(block, "ARG1", "(quaternions)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_717'] = function(block) {
  return [(" " + " queue " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_718'] = function(block) {
  return [(" " + "end" + " of " + skriptValue(block, "ARG1", "(queue)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_719'] = function(block) {
  return [(" " + "quit" + "-" + "message"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_720'] = function(block) {
  return [(skriptField(block, "CH1") + " " + skriptField(block, "CH2")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_721'] = function(block) {
  return [(" random " + skriptValue(block, "ARG1", "(classinfo)") + " " + " of " + skriptValue(block, "ARG2", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_722'] = function(block) {
  return [(([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("a|" + skriptRaw(block, "ARG1")) : '') + " random " + " character" + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG2", "(string)") + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG3", "(string)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_723'] = function(block) {
  return [(([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("a|" + skriptRaw(block, "ARG1")) : '') + " random " + "number" + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG2", "(number)") + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG3", "(number)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_724'] = function(block) {
  return [(" random uuid"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_725'] = function(block) {
  return [(skriptField(block, "CH1") + " name" + " of " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_726'] = function(block) {
  return [("raw " + skriptValue(block, "ARG1", "(strings)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_727'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " " + "bow"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_728'] = function(block) {
  return [("recursive " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_729'] = function(block) {
  return [(" recursive " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_730'] = function(block) {
  return [(" redstone power of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_731'] = function(block) {
  return [(skriptValue(block, "ARG1", "(objects)") + " " + skriptField(block, "CH1") + " " + skriptField(block, "CH2") + " \\" + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2") + "\\") : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_732'] = function(block) {
  return [(" reduced value"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_733'] = function(block) {
  return [("region"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_734'] = function(block) {
  return [(" region" + "s" + " " + skriptValue(block, "ARG1", "(direction)") + " " + skriptValue(block, "ARG2", "(locations)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_735'] = function(block) {
  return [(" remaining air of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_736'] = function(block) {
  return [(skriptValue(block, "ARG1", "(strings)") + " repeated " + skriptValue(block, "ARG2", "(integer)") + " time"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_737'] = function(block) {
  return [(skriptValue(block, "ARG1", "(strings)") + " where " + " " + skriptValue(block, "ARG2", "(strings)") + " " + skriptField(block, "CH1") + " replaced with " + skriptValue(block, "ARG3", "(string)") + " "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_738'] = function(block) {
  return [(skriptValue(block, "ARG1", "(textcomponents)") + " resolved for " + skriptValue(block, "ARG2", "(commandsender)") + " "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_739'] = function(block) {
  return [(" resonat" + skriptField(block, "CH1") + " time of " + skriptValue(block, "ARG1", "(block)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_740'] = function(block) {
  return [(" respawn location"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_741'] = function(block) {
  return [("respawn" + " reason"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_742'] = function(block) {
  return [(" result" + " of " + " " + skriptValue(block, "ARG1", "(executable)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("arguments:with arg" + "s " + skriptRaw(block, "ARG2")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_743'] = function(block) {
  return [("reversed " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_744'] = function(block) {
  return [(" ring" + " time of " + skriptValue(block, "ARG1", "(block)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_745'] = function(block) {
  return [(skriptValue(block, "ARG1", "(quaternions)") + " rotated around " + " " + " " + "-" + "axis by " + skriptValue(block, "ARG2", "(number)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_746'] = function(block) {
  return [(" " + "round" + " down" + " " + skriptValue(block, "ARG1", "(numbers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_747'] = function(block) {
  return [(" saturation of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_748'] = function(block) {
  return [(" scoreboard tags of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_749'] = function(block) {
  return [(" " + " script"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_750'] = function(block) {
  return [(" scripts"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_751'] = function(block) {
  return [(" scripts "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_752'] = function(block) {
  return [(" sea level of " + skriptValue(block, "ARG1", "(worlds)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_753'] = function(block) {
  return [(" " + " " + " pickle" + "s" + " of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_754'] = function(block) {
  return [("a " + skriptField(block, "CH1") + " equippable component"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_755'] = function(block) {
  return [(" " + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG1")) : '') + " boss" + "bar " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG2")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_756'] = function(block) {
  return [(" loot context " + skriptValue(block, "ARG1", "(direction)") + " " + skriptValue(block, "ARG2", "(location)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_757'] = function(block) {
  return [("a " + " world" + "border"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_758'] = function(block) {
  return [(" custom damage source " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + " " + " " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_759'] = function(block) {
  return [(" " + " potion effect of " + skriptValue(block, "ARG1", "(potioneffecttype)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (" " + skriptRaw(block, "ARG2")) : '') + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? ("for " + skriptRaw(block, "ARG3")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_760'] = function(block) {
  return [(" seed" + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(worlds)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_761'] = function(block) {
  return [(" " + " " + " command" + " list"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_762'] = function(block) {
  return [(" " + " " + " icon"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_763'] = function(block) {
  return [(" " + skriptValue(block, "ARG1", "(classinfo)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_764'] = function(block) {
  return [(" shooter " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_765'] = function(block) {
  return [("shuffled " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_766'] = function(block) {
  return [("line " + skriptValue(block, "ARG1", "(integer)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG2")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_767'] = function(block) {
  return [("simulation distance"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_768'] = function(block) {
  return [(" " + " effect"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_769'] = function(block) {
  return [(" skull of " + skriptValue(block, "ARG1", "(offlineplayers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_770'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " owner of " + skriptValue(block, "ARG1", "(slots)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_771'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " texture of " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_772'] = function(block) {
  return [(" " + " index of " + skriptValue(block, "ARG1", "(slots)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_773'] = function(block) {
  return [("sorted " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_774'] = function(block) {
  return [(" source block"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_775'] = function(block) {
  return [(" source location of " + skriptValue(block, "ARG1", "(damagesources)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_776'] = function(block) {
  return [(" spawn" + " " + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_777'] = function(block) {
  return [(" spawn egg entity of " + skriptValue(block, "ARG1", "(itemstacks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_778'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " type" + " of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_779'] = function(block) {
  return [("spawn" + " reason"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_780'] = function(block) {
  return [("spectator target " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_781'] = function(block) {
  return [(" " + "0¦walk" + "speed of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_782'] = function(block) {
  return [(" stored enchant" + "s of " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_783'] = function(block) {
  return [(skriptValue(block, "ARG1", "(strings)") + " in " + skriptField(block, "CH1") + "case"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_784'] = function(block) {
  return [(" string colo" + "r" + " " + " of " + skriptValue(block, "ARG1", "(strings)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_785'] = function(block) {
  return [(" " + skriptValue(block, "ARG1", "(classinfo)") + " value " + " " + skriptValue(block, "ARG2", "(string)") + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG3", "(node)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_786'] = function(block) {
  return [(" " + "part" + " of " + skriptValue(block, "ARG1", "(strings)") + " " + skriptField(block, "CH1") + " " + "ind" + skriptField(block, "CH2") + " " + skriptValue(block, "ARG2", "(number)") + " " + skriptField(block, "CH3") + " " + skriptField(block, "CH4") + " " + skriptValue(block, "ARG3", "(number)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_787'] = function(block) {
  return [(" " + "tablist" + " players of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_788'] = function(block) {
  return [("  tag " + skriptValue(block, "ARG1", "(strings)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_789'] = function(block) {
  return [(" tag " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(minecrafttag)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_790'] = function(block) {
  return [(" " + " key" + " of " + skriptValue(block, "ARG1", "(minecrafttags)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_791'] = function(block) {
  return [(""), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_792'] = function(block) {
  return [(""), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_793'] = function(block) {
  return [(" tamer"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_794'] = function(block) {
  return [(" target" + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (" " + skriptRaw(block, "ARG1")) : '') + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG2")) : '') + " " + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? (" " + " ray" + "size " + " " + skriptRaw(block, "ARG3")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_795'] = function(block) {
  return [(" " + " target" + " block" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_796'] = function(block) {
  return [("teleport " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_797'] = function(block) {
  return [(" temperature" + " of " + skriptValue(block, "ARG1", "(blocks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_798'] = function(block) {
  return [(skriptValue(block, "ARG1", "(objects)") + " if " + skriptValue(block, "ARG2", "(wyrażenie)") + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG3", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_799'] = function(block) {
  return [(" text alignment" + " of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_800'] = function(block) {
  return [(" line width of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_801'] = function(block) {
  return [(" " + " " + " opacity of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_802'] = function(block) {
  return [(" text" + " of " + skriptValue(block, "ARG1", "(displays)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_803'] = function(block) {
  return [(" time" + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("in" + " " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_804'] = function(block) {
  return [(" time " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_805'] = function(block) {
  return [(" " + "time played" + " of " + skriptValue(block, "ARG1", "(offlineplayers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_806'] = function(block) {
  return [(skriptValue(block, "ARG1", "(number)") + " time"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_807'] = function(block) {
  return [(" time since " + skriptValue(block, "ARG1", "(dates)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_808'] = function(block) {
  return [(" " + ":" + skriptField(block, "CH1") + "s of " + skriptValue(block, "ARG1", "(timespans)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_809'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " " + " " + " " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_810'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_811'] = function(block) {
  return [(" " + " experience of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_812'] = function(block) {
  return [("tps from " + " last " + " minute"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_813'] = function(block) {
  return [(skriptValue(block, "ARG1", "(objects)") + " " + skriptField(block, "CH1") + " " + skriptField(block, "CH2") + " \\" + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG2") + "\\") : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_814'] = function(block) {
  return [(" transform" + " " + skriptField(block, "CH1")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_815'] = function(block) {
  return [(" type of " + skriptValue(block, "ARG1", "(entitydatas)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_816'] = function(block) {
  return [("breakable " + skriptValue(block, "ARG1", "(itemtypes)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_817'] = function(block) {
  return [(" unix date of " + skriptValue(block, "ARG1", "(numbers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_818'] = function(block) {
  return [(" unix timestamp of " + skriptValue(block, "ARG1", "(dates)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_819'] = function(block) {
  return [(" unleash" + " reason"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_820'] = function(block) {
  return [(" uuid" + " of " + skriptValue(block, "ARG1", "(offlineplayers)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_821'] = function(block) {
  return [(" " + skriptValue(block, "ARG1", "(classinfo)") + " value of " + skriptValue(block, "ARG2", "(valued)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_822'] = function(block) {
  return [(" " + skriptValue(block, "ARG1", "(classinfo)") + " " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG2", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_823'] = function(block) {
  return [(" angle between " + " " + skriptValue(block, "ARG1", "(vector)") + " and " + skriptValue(block, "ARG2", "(vector)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_824'] = function(block) {
  return [(" vector " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(location)") + " " + skriptField(block, "CH2") + " " + skriptValue(block, "ARG2", "(location)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_825'] = function(block) {
  return [(skriptValue(block, "ARG1", "(vector)") + " cross " + skriptValue(block, "ARG2", "(vector)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_826'] = function(block) {
  return [(" " + " cylindrical vector " + " " + " " + skriptValue(block, "ARG1", "(number)") + ", " + " " + skriptValue(block, "ARG2", "(number)") + "," + " " + " " + skriptValue(block, "ARG3", "(number)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_827'] = function(block) {
  return [(skriptValue(block, "ARG1", "(vector)") + " dot " + skriptValue(block, "ARG2", "(vector)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_828'] = function(block) {
  return [("vector" + " " + " " + skriptValue(block, "ARG1", "(directions)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_829'] = function(block) {
  return [(" " + " vector " + " " + skriptValue(block, "ARG1", "(number)") + "," + skriptValue(block, "ARG2", "(number)") + "," + skriptValue(block, "ARG3", "(number)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_830'] = function(block) {
  return [(" " + " vector " + skriptField(block, "CH1") + " yaw " + skriptValue(block, "ARG1", "(number)") + " and pitch " + skriptValue(block, "ARG2", "(number)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_831'] = function(block) {
  return [(" " + skriptField(block, "CH1") + " length" + " of " + skriptValue(block, "ARG1", "(vectors)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_832'] = function(block) {
  return [("normali" + skriptField(block, "CH1") + "e" + " " + skriptValue(block, "ARG1", "(vector)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_833'] = function(block) {
  return [(" vector " + skriptField(block, "CH1") + " " + skriptValue(block, "ARG1", "(location)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_834'] = function(block) {
  return [(" projection " + " " + skriptValue(block, "ARG1", "(vector)") + " on" + " " + skriptValue(block, "ARG2", "(vector)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_835'] = function(block) {
  return [(" random vector"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_836'] = function(block) {
  return [(" " + " spherical vector " + " " + " " + skriptValue(block, "ARG1", "(number)") + ", " + " " + skriptValue(block, "ARG2", "(number)") + "," + " " + " " + skriptValue(block, "ARG3", "(number)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_837'] = function(block) {
  return [(" squared length" + " of " + skriptValue(block, "ARG1", "(vectors)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_838'] = function(block) {
  return [(" vehicle" + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_839'] = function(block) {
  return [(" velocit" + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_840'] = function(block) {
  return [("0¦" + "bukkit" + "-" + "version"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_841'] = function(block) {
  return [(" " + " version "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_842'] = function(block) {
  return [(" view distance" + " of " + skriptValue(block, "ARG1", "(players)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_843'] = function(block) {
  return [(" villager " + "level" + " of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_844'] = function(block) {
  return [(" villager profession of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_845'] = function(block) {
  return [(" villager type of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_846'] = function(block) {
  return [(" most angered entity of " + skriptValue(block, "ARG1", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_847'] = function(block) {
  return [(" anger level " + " " + skriptValue(block, "ARG1", "(livingentities)") + " towards " + skriptValue(block, "ARG2", "(livingentities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_848'] = function(block) {
  return [(" weather " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_849'] = function(block) {
  return [("whether " + skriptValue(block, "ARG1", "(wyrażenie)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_850'] = function(block) {
  return [(" white" + "list"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_851'] = function(block) {
  return [(skriptValue(block, "ARG1", "(itemtype)") + " with" + " fire" + "resistance"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_852'] = function(block) {
  return [(skriptValue(block, "ARG1", "(itemtypes)") + " with " + " item flag" + " " + skriptValue(block, "ARG2", "(itemflags)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_853'] = function(block) {
  return [(skriptValue(block, "ARG1", "(locations)") + " with " + " " + " " + " " + skriptValue(block, "ARG2", "(number)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_854'] = function(block) {
  return [(" world " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? ("of " + skriptRaw(block, "ARG1")) : '')), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_855'] = function(block) {
  return [(" world" + "border of " + skriptValue(block, "ARG1", "(worlds)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_856'] = function(block) {
  return [(" world" + "border " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(worldborders)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_857'] = function(block) {
  return [(" world" + "border damage amount of " + skriptValue(block, "ARG1", "(worldborders)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_858'] = function(block) {
  return [(" world" + "border damage buffer of " + skriptValue(block, "ARG1", "(worldborders)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_859'] = function(block) {
  return [(" world" + "border " + skriptField(block, "CH1") + " of " + skriptValue(block, "ARG1", "(worldborders)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_860'] = function(block) {
  return [(" world" + "border warning distance of " + skriptValue(block, "ARG1", "(worldborders)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_861'] = function(block) {
  return [(" world" + "border warning time of " + skriptValue(block, "ARG1", "(worldborders)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_862'] = function(block) {
  return [(" " + " environment of " + skriptValue(block, "ARG1", "(worlds)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_863'] = function(block) {
  return [(" world " + " " + skriptValue(block, "ARG1", "(string)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_864'] = function(block) {
  return [(" worlds"), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_865'] = function(block) {
  return [(skriptValue(block, "ARG1", "(number)") + " of " + skriptValue(block, "ARG2", "(itemstacks)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_866'] = function(block) {
  return [(" " + " "), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_867'] = function(block) {
  return [(" " + "pitch" + " of " + skriptValue(block, "ARG1", "(entities)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_868'] = function(block) {
  return [(""), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_869'] = function(block) {
  return [(" amount" + " of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_870'] = function(block) {
  return [(" " + skriptField(block, "CH1") + "name" + " of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_871'] = function(block) {
  return [(" name" + " of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_872'] = function(block) {
  return [(" number" + " of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_873'] = function(block) {
  return [(" progress of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_874'] = function(block) {
  return [(" scale" + " of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_875'] = function(block) {
  return [(" size" + " of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_876'] = function(block) {
  return [(" style" + " of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_877'] = function(block) {
  return [(" title" + " of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_878'] = function(block) {
  return [(" " + ([skriptRaw(block, "ARG1")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG1")) : '') + " value of " + skriptValue(block, "ARG2", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_879'] = function(block) {
  return [(" viewer" + " of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_expr_880'] = function(block) {
  return [(" " + "-" + " of " + skriptValue(block, "ARG1", "(objects)")), skriptGenerator.ORDER_ATOMIC];
};
skriptGenerator.forBlock['lib_sec_881'] = function(block) {
  return ("catch " + " error") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_882'] = function(block) {
  return (skriptField(block, "CH1")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_883'] = function(block) {
  return ("filter " + skriptValue(block, "ARG1", "(objects)") + " to match ") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_884'] = function(block) {
  return (" while " + skriptValue(block, "ARG1", "(wyrażenie)")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_885'] = function(block) {
  return ("loop " + skriptValue(block, "ARG1", "(objects)")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_886'] = function(block) {
  return ("shoot " + skriptValue(block, "ARG1", "(entitydatas)") + " " + ([skriptRaw(block, "ARG2")].some(function(s){ return s !== ''; }) ? ("from " + skriptRaw(block, "ARG2")) : '') + " " + ([skriptRaw(block, "ARG3")].some(function(s){ return s !== ''; }) ? (skriptField(block, "CH1") + " " + skriptField(block, "CH2") + " " + skriptRaw(block, "ARG3")) : '') + " " + ([skriptRaw(block, "ARG4")].some(function(s){ return s !== ''; }) ? (skriptRaw(block, "ARG4")) : '')) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_887'] = function(block) {
  return ("else") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_888'] = function(block) {
  return ("for " + " " + " " + skriptValue(block, "ARG1", "(object)") + " in " + skriptValue(block, "ARG2", "(objects)")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_889'] = function(block) {
  return ("auto" + " reload ") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_890'] = function(block) {
  return ("aliases") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_891'] = function(block) {
  return (" " + " " + skriptValue(block, "ARG1", "(wyrażenie)") + " ") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_892'] = function(block) {
  return (" function " + skriptValue(block, "ARG1", "(wyrażenie)")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_893'] = function(block) {
  return ("options") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_894'] = function(block) {
  return ("variables") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_895'] = function(block) {
  return ("using " + " " + skriptValue(block, "ARG1", "(wyrażenie)")) + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_896'] = function(block) {
  return ("usage") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
skriptGenerator.forBlock['lib_sec_897'] = function(block) {
  return ("example") + ':\n' + skriptGenerator.statementToCode(block, 'DO');
};
