Blockly.Blocks['lib_evt_1'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Bucket Jednostka");
    this.appendValueInput("ARG1").appendField("bucket catch (opcjonalnie) (entitydatas) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtBucketEntity :: bucket (catch[ing]|captur(e|ing)) [[of] %-entitydatas%]");
  }
};
Blockly.Blocks['lib_evt_2'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Fish");
    this.appendDummyInput().appendField("fish");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtFish :: fish[ing]");
  }
};
Blockly.Blocks['lib_evt_3'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Jednostka Mikstura");
    this.appendValueInput("ARG1").appendField("jednostka mikstura efekt  (opcjonalnie) (potioneffecttypes) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) (potionactions) ");
    this.appendValueInput("ARG3").appendField(" (opcjonalnie) due do (potioncauses) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtEntityPotion :: entity potion effect [modif[y|ication]] [[of] %-potioneffecttypes%] [%-potionactions%] [due to %-potioncauses%]");
  }
};
Blockly.Blocks['lib_evt_4'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Breed");
    this.appendValueInput("ARG1").appendField(" breed (opcjonalnie) z (entitytypes) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtBreed :: [entity] breed[ing] [of %-entitytypes%]");
  }
};
Blockly.Blocks['lib_evt_5'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Gracz Input");
    this.appendValueInput("ARG1").appendField(" toggle z (inputkeys) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtPlayerInput :: [player] (toggle|toggling|1:press[ing]|2:release|2:releasing) of (%-inputkeys%|(an|any) input key)");
  }
};
Blockly.Blocks['lib_evt_6'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Piec");
    this.appendValueInput("ARG1").appendField("  smelt (opcjonalnie) z (przedmioty) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtFurnace :: [furnace] [ore] smelt[ed|ing] [of %-itemtypes%]");
  }
};
Blockly.Blocks['lib_evt_7'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Warzenie Fuel");
    this.appendDummyInput().appendField("brew consum").appendField(new Blockly.FieldDropdown([["e", "e"], ["ing", "ing"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" fuel (opcjonalnie) z (przedmioty) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtBrewingFuel :: brew[ing [stand]] consum(e|ing) fuel [of %-itemtypes%]");
  }
};
Blockly.Blocks['lib_evt_8'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Warzenie Start");
    this.appendDummyInput().appendField("brew start");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtBrewingStart :: brew[ing] start[ed|ing]");
  }
};
Blockly.Blocks['lib_evt_9'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Warzenie Complete");
    this.appendDummyInput().appendField("brew  (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z", "of"], ["na", "for"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (przedmioty) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtBrewingComplete :: brew[ing] [complet(e[d]|ion)|finish[ed]] [(of|for) %-itemtypes/potioneffecttypes%]");
  }
};
Blockly.Blocks['lib_evt_10'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Gracz Pick Przedmiot");
    this.appendDummyInput().appendField(" pick   przedmiot");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtPlayerPickItem :: [player] pick[ing] [of] [an|any] item");
  }
};
Blockly.Blocks['lib_evt_11'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Gracz Game Tryb Change");
    this.appendValueInput("ARG1").appendField(" gametryb change (opcjonalnie) do (tryb gry) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtPlayerGameModeChange :: [player] game[ ]mode change [to %gamemode%]");
  }
};
Blockly.Blocks['lib_evt_12'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Region Granica");
    this.appendDummyInput().appendField(":wejście   region");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtRegionBorder :: (:enter[ing]|leav(e|ing)|exit[ing]) [of] ([a] region|[[the] region] %-regions%)");
  }
};
Blockly.Blocks['lib_evt_13'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Healing");
    this.appendValueInput("ARG1").appendField("ulecz (opcjonalnie) z (entitydatas) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z", "from"], ["due do", "due to"], ["o", "by"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (healreasons) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtHealing :: heal[ing] [of %-entitydatas%] [(from|due to|by) %-healreasons%]");
  }
};
Blockly.Blocks['lib_evt_14'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Komenda");
    this.appendValueInput("ARG1").appendField("komenda (opcjonalnie) (teksty) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtCommand :: command [%-strings%]");
  }
};
Blockly.Blocks['lib_evt_15'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Simple Zdarzenia");
    this.appendDummyInput().appendField(" może build check");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("SimpleEvents :: [block] can build check");
  }
};
Blockly.Blocks['lib_evt_16'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Zadaj obrażenia");
    this.appendDummyInput().appendField("damag").appendField(new Blockly.FieldDropdown([["e", "e"], ["ing", "ing"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (opcjonalnie) z (entitydata) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) o (entitydata) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtDamage :: damag(e|ing) [of %-entitydata%] [by %-entitydata%]");
  }
};
Blockly.Blocks['lib_evt_17'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Jednostka Blok Change");
    this.appendDummyInput().appendField("Enderman/Sheep/Silverfish/Falling Blok");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtEntityBlockChange :: Enderman/Sheep/Silverfish/Falling Block");
  }
};
Blockly.Blocks['lib_evt_18'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Book Tabliczka");
    this.appendDummyInput().appendField("book tabliczka");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtBookSign :: book sign[ing]");
  }
};
Blockly.Blocks['lib_evt_19'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Latarnia Toggle");
    this.appendDummyInput().appendField("latarnia toggle");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtBeaconToggle :: beacon toggle");
  }
};
Blockly.Blocks['lib_evt_20'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Resource Pack Response");
    this.appendDummyInput().appendField("resource pack  response");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtResourcePackResponse :: resource pack [request] response");
  }
};
Blockly.Blocks['lib_evt_21'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Jednostka Shoot Bow");
    this.appendValueInput("ARG1").appendField("(entitydatas) ");
    this.appendDummyInput().appendField(" shoot ").appendField(new Blockly.FieldDropdown([["bow", "bow"], ["projectile", "projectile"]]), "CH1");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtEntityShootBow :: %entitydatas% shoot[ing] (bow|projectile)");
  }
};
Blockly.Blocks['lib_evt_22'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Leash");
    this.appendValueInput("ARG1").appendField(" leash (opcjonalnie) z (entitydatas) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtLeash :: [:player] [:un]leash[ing] [of %-entitydatas%]");
  }
};
Blockly.Blocks['lib_evt_23'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Skript");
    this.appendDummyInput().appendField("skript ").appendField(new Blockly.FieldDropdown([["start", "start"], ["load", "load"], ["enable", "enable"]]), "CH1");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtSkript :: (:server|skript) (start|load|enable)");
  }
};
Blockly.Blocks['lib_evt_24'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Move On");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["step", "step"], ["walk", "walk"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["on", "on"], ["over", "over"]]), "CH2");
    this.appendValueInput("ARG1").appendField(" (przedmioty) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtMoveOn :: (step|walk)[ing] (on|over) %*itemtypes%");
  }
};
Blockly.Blocks['lib_evt_25'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Pressure Plate");
    this.appendDummyInput().appendField("   plate");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtPressurePlate :: [step[ping] on] [a] [pressure] plate");
  }
};
Blockly.Blocks['lib_evt_26'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Real Czas");
    this.appendValueInput("ARG1").appendField("przy (times) ");
    this.appendDummyInput().appendField("  real czas");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtRealTime :: at %times% [in] real time");
  }
};
Blockly.Blocks['lib_evt_27'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Świat");
    this.appendDummyInput().appendField("świat sav").appendField(new Blockly.FieldDropdown([["e", "e"], ["ing", "ing"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (opcjonalnie) z (światy) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtWorld :: world sav(e|ing) [of %-worlds%]");
  }
};
Blockly.Blocks['lib_evt_28'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Doświadczenie Change");
    this.appendDummyInput().appendField(" poziom progress ").appendField(new Blockly.FieldDropdown([["change", "change"], ["update", "update"]]), "CH1");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtExperienceChange :: [player] (level progress|[e]xp|experience) (change|update|:increase|:decrease)");
  }
};
Blockly.Blocks['lib_evt_29'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Grow");
    this.appendValueInput("ARG1").appendField("grow (opcjonalnie) z 1:(treetypes) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtGrow :: grow[th] [of (1:%-treetypes%|2:%-itemtypes/blockdatas%)]");
  }
};
Blockly.Blocks['lib_evt_30'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Attempt Atak");
    this.appendDummyInput().appendField("atak attempt");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtAttemptAttack :: attack attempt");
  }
};
Blockly.Blocks['lib_evt_31'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Gracz Armor Change");
    this.appendDummyInput().appendField(" armor change");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtPlayerArmorChange :: [player] armo[u]r change[d]");
  }
};
Blockly.Blocks['lib_evt_32'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Script");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["load", "load"], ["init", "init"], ["enable", "enable"]]), "CH1");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtScript :: [:async] [script] (load|init|enable)");
  }
};
Blockly.Blocks['lib_evt_33'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Teleportuj");
    this.appendValueInput("ARG1").appendField("(opcjonalnie) (entitytypes) ");
    this.appendDummyInput().appendField(" teleportuj");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtTeleport :: [%entitytypes%] teleport[ing]");
  }
};
Blockly.Blocks['lib_evt_34'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Gracz Komenda Wyślij");
    this.appendDummyInput().appendField("wyślij   komenda list");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtPlayerCommandSend :: send[ing] [of [the]] [server] command[s] list");
  }
};
Blockly.Blocks['lib_evt_35'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Latarnia Efekt");
    this.appendValueInput("ARG1").appendField(" latarnia efekt (opcjonalnie) z (potioneffecttypes) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtBeaconEffect :: [:primary|:secondary] beacon effect [of %-potioneffecttypes%]");
  }
};
Blockly.Blocks['lib_evt_36'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Doświadczenie Stwórz");
    this.appendDummyInput().appendField("xp  stwórz");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtExperienceSpawn :: [e]xp[erience] [orb] spawn");
  }
};
Blockly.Blocks['lib_evt_37'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Plant Growth");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["plant", "plant"], ["crop", "crop"], ["blok", "block"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" grow (opcjonalnie) (przedmioty) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtPlantGrowth :: (plant|crop|block) grow[(th|ing)] [[of] %-itemtypes%]");
  }
};
Blockly.Blocks['lib_evt_38'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Portal");
    this.appendDummyInput().appendField(" portal");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtPortal :: [player] portal");
  }
};
Blockly.Blocks['lib_evt_39'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Jednostka");
    this.appendValueInput("ARG1").appendField("śmierć (opcjonalnie) z (entitydatas) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtEntity :: death [of %-entitydatas%]");
  }
};
Blockly.Blocks['lib_evt_40'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Poziom");
    this.appendDummyInput().appendField(" poziom ").appendField(new Blockly.FieldDropdown([["change", "change"], ["up", "up"], ["-1¦down", "-1¦down"]]), "CH1");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtLevel :: [player] level (change|1¦up|-1¦down)");
  }
};
Blockly.Blocks['lib_evt_41'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Move");
    this.appendValueInput("ARG1").appendField("(entitydata) ");
    this.appendDummyInput().appendField(" move");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtMove :: %entitydata% (move|walk|step|rotate:(turn[ing] around|rotate))");
  }
};
Blockly.Blocks['lib_evt_42'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Book Edit");
    this.appendDummyInput().appendField("book ").appendField(new Blockly.FieldDropdown([["edit", "edit"], ["change", "change"], ["write", "write"]]), "CH1");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtBookEdit :: book (edit|change|write)");
  }
};
Blockly.Blocks['lib_evt_43'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Pojazd Collision");
    this.appendDummyInput().appendField("pojazd collision (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z", "with"], ["z", "of"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  (przedmioty) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtVehicleCollision :: vehicle collision [(with|of) [a[n]] %-itemtypes/blockdatas/entitydatas%]");
  }
};
Blockly.Blocks['lib_evt_44'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Periodical");
    this.appendValueInput("ARG1").appendField("every (czas trwania) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtPeriodical :: every %timespan%");
  }
};
Blockly.Blocks['lib_evt_45'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: First Dołączenie");
    this.appendDummyInput().appendField("first ").appendField(new Blockly.FieldDropdown([["dołączenie", "join"], ["login", "login"]]), "CH1");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtFirstJoin :: first (join|login)");
  }
};
Blockly.Blocks['lib_evt_46'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Jednostka Transform");
    this.appendDummyInput().appendField("entit").appendField(new Blockly.FieldDropdown([["y", "y"], ["ies", "ies"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" transform (opcjonalnie) due do (transformreasons) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtEntityTransform :: (entit(y|ies)|%*-entitydatas%) transform[ing] [due to %-transformreasons%]");
  }
};
Blockly.Blocks['lib_evt_47'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Gracz Chunk Wejście");
    this.appendDummyInput().appendField(" wejście  chunk");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtPlayerChunkEnter :: [player] (enter[s] [a] chunk|chunk enter[ing])");
  }
};
Blockly.Blocks['lib_evt_48'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Jednostka Cel");
    this.appendDummyInput().appendField(" cel");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtEntityTarget :: [entity] target");
  }
};
Blockly.Blocks['lib_evt_49'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Spectate");
    this.appendDummyInput().appendField(" stop spectating (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z", "of"], ["z", "from"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (entitydatas) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtSpectate :: [player] stop spectating [(of|from) %-*entitydatas%]");
  }
};
Blockly.Blocks['lib_evt_50'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Pogoda Change");
    this.appendValueInput("ARG1").appendField("pogoda change (opcjonalnie) do (weathertypes) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtWeatherChange :: weather change [to %-weathertypes%]");
  }
};
Blockly.Blocks['lib_evt_51'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Przy Czas");
    this.appendValueInput("ARG1").appendField("przy (czas) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) w (światy) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtAtTime :: at %time% [in %worlds%]");
  }
};
Blockly.Blocks['lib_evt_52'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Harvest Blok");
    this.appendValueInput("ARG1").appendField("  harvest (opcjonalnie) z (przedmioty) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtHarvestBlock :: [player] [block|crop] harvest[ing] [of %-itemtypes/blockdatas%]");
  }
};
Blockly.Blocks['lib_evt_53'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Blok");
    this.appendValueInput("ARG1").appendField(" zniszczenie (opcjonalnie) (przedmioty) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtBlock :: [block] (break[ing]|1¦min(e|ing)) [[of] %-itemtypes/blockdatas%]");
  }
};
Blockly.Blocks['lib_evt_54'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Przedmiot");
    this.appendDummyInput().appendField("dispens").appendField(new Blockly.FieldDropdown([["e", "e"], ["ing", "ing"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (opcjonalnie) (przedmioty) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtItem :: dispens(e|ing) [[of] %-itemtypes%]");
  }
};
Blockly.Blocks['lib_evt_55'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Fajerwerk");
    this.appendDummyInput().appendField(" fajerwerk explod").appendField(new Blockly.FieldDropdown([["e", "e"], ["ing", "ing"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (opcjonalnie) colored (kolory) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtFirework :: [a] firework explo(d(e|ing)|sion) [colo[u]red %-colors%]");
  }
};
Blockly.Blocks['lib_evt_56'] = {
  init: function() {
    this.appendDummyInput().appendField("Zdarzenie: Kliknięcie");
    this.appendValueInput("ARG1").appendField("Kliknięciekliknięcie (opcjonalnie) on (entitydata) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z", "with"], ["używając", "using"], ["trzymając", "holding"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (przedmiot) ");
    this.appendDummyInput().appendField("kliknięcie ").appendField(new Blockly.FieldDropdown([["z", "with"], ["używając", "using"], ["trzymając", "holding"]]), "CH2");
    this.appendValueInput("ARG3").appendField(" (przedmiot) ");
    this.appendValueInput("ARG4").appendField(" on (entitydata) ");
    this.appendStatementInput('DO');
    this.setColour("#c0392b");
    this.setInputsInline(false);
    this.setTooltip("EvtClick :: Click[(:right|:left)(| |-)][mouse(| |-)]click[ing] [on %-entitydata/itemtype/blockdata%] [(with|using|holding) %-itemtype%][(:right|:left)(| |-)][mouse(| |-)]click[ing] (with|using|holding) %itemtype% on %entitydata/itemtype/blockdata%");
  }
};
Blockly.Blocks['lib_cond_57'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Scales Z Difficulty");
    this.appendValueInput("ARG1").appendField("(damagesources) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["does", "does"], ["do", "do"]]), "CH1");
    this.appendDummyInput().appendField(" skala zadaj obrażenia z difficulty");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondScalesWithDifficulty :: %damagesources% ((does|do) scale|scales) damage with difficulty");
  }
};
Blockly.Blocks['lib_cond_58'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Był Indirect");
    this.appendValueInput("ARG1").appendField("(damagesources) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["był", "was"], ["were", "were"]]), "CH1");
    this.appendDummyInput().appendField(" directly caused");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondWasIndirect :: %damagesources% (was|were) ([:in]directly caused|caused [:in]directly)");
  }
};
Blockly.Blocks['lib_cond_59'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest W Open Water");
    this.appendValueInput("ARG1").appendField(" w open water z (jednostki) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsInOpenWater :: [the] in open water[s] of %entities%");
  }
};
Blockly.Blocks['lib_cond_60'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Fishing Lure");
    this.appendDummyInput().appendField("lure zaklęcie bonus jest ").appendField(new Blockly.FieldDropdown([["applied", "applied"], ["active", "active"]]), "CH1");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondFishingLure :: lure enchantment bonus is (applied|active)");
  }
};
Blockly.Blocks['lib_cond_61'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Poisoned");
    this.appendValueInput("ARG1").appendField(" poisoned z (żywe jednostki) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsPoisoned :: [the] poisoned of %livingentities%");
  }
};
Blockly.Blocks['lib_cond_62'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Mikstura Instant");
    this.appendValueInput("ARG1").appendField(" instant z (potioneffecttypes) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsPotionInstant :: [the] instant of %potioneffecttypes%");
  }
};
Blockly.Blocks['lib_cond_63'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Ma Mikstura");
    this.appendValueInput("ARG1").appendField("(skriptpotioneffects) ");
    this.appendDummyInput().appendField(" ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondHasPotion :: %skriptpotioneffects% [active]");
  }
};
Blockly.Blocks['lib_cond_64'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Mikstura Ma Icon");
    this.appendValueInput("ARG1").appendField("  icon z (skriptpotioneffects) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondPotionHasIcon :: [the] ([an] icon|icons) of %skriptpotioneffects%");
  }
};
Blockly.Blocks['lib_cond_65'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Mikstura Ambient");
    this.appendValueInput("ARG1").appendField(" ambient z (skriptpotioneffects) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsPotionAmbient :: [the] ambient of %skriptpotioneffects%");
  }
};
Blockly.Blocks['lib_cond_66'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Mikstura Ma Cząsteczki");
    this.appendValueInput("ARG1").appendField(" cząsteczki z (skriptpotioneffects) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondPotionHasParticles :: [the] particles of %skriptpotioneffects%");
  }
};
Blockly.Blocks['lib_cond_67'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Equip Comp Dispensable");
    this.appendDummyInput().appendField("be dispensed");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondEquipCompDispensable :: be dispensed");
  }
};
Blockly.Blocks['lib_cond_68'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Equip Comp Swap Equipment");
    this.appendValueInput("ARG1").appendField(" swap equipment  z (equippablecomponents) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondEquipCompSwapEquipment :: [the] swap equipment [on right click|when right clicked] of %equippablecomponents%");
  }
};
Blockly.Blocks['lib_cond_69'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Equip Comp Zadaj obrażenia");
    this.appendValueInput("ARG1").appendField("(equippablecomponents) ");
    this.appendDummyInput().appendField(" will ").appendField(new Blockly.FieldDropdown([["lose durability", "lose durability"], ["be damaged", "be damaged"]]), "CH1");
    this.appendDummyInput().appendField(" on  injury");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondEquipCompDamage :: %equippablecomponents% will (lose durability|be damaged) (on [wearer['s]] injury|when [[the] wearer [is]] (hurt|injured|damaged))");
  }
};
Blockly.Blocks['lib_cond_70'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Equip Comp Shearable");
    this.appendValueInput("ARG1").appendField(" be sheared off  z (equippablecomponents) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondEquipCompShearable :: [the] be sheared off [of entities] of %equippablecomponents%");
  }
};
Blockly.Blocks['lib_cond_71'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Equip Comp Interact");
    this.appendDummyInput().appendField(" be ").appendField(new Blockly.FieldDropdown([["equipped", "equipped"], ["put", "put"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" on jednostki z (equippablecomponents) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondEquipCompInteract :: [the] be (equipped|put) on[to] entities of %equippablecomponents%");
  }
};
Blockly.Blocks['lib_cond_72'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Ma Persistent Data Tag");
    this.appendValueInput("ARG1").appendField("  data tag (teksty) ");
    this.appendValueInput("ARG2").appendField(" z (wartości) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondHasPersistentDataTag :: [the] [persistent] data tag[s] %strings% of %objects%");
  }
};
Blockly.Blocks['lib_cond_73'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest W Love");
    this.appendDummyInput().appendField(" w lov").appendField(new Blockly.FieldDropdown([["e", "e"], ["ing", "ing"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  z (żywe jednostki) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsInLove :: [the] in lov(e|ing) [state|mode] of %livingentities%");
  }
};
Blockly.Blocks['lib_cond_74'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Może Breed");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["breed", "breed"], ["be bred", "be bred"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (żywe jednostki) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondCanBreed :: [the] (breed|be bred) of %livingentities%");
  }
};
Blockly.Blocks['lib_cond_75'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Może Age");
    this.appendValueInput("ARG1").appendField(" age z (żywe jednostki) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondCanAge :: [the] (age|grow (up|old[er])) of %livingentities%");
  }
};
Blockly.Blocks['lib_cond_76'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Baby");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["child", "child"], ["baby", "baby"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (żywe jednostki) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsBaby :: [the] a (child|baby) of %livingentities%");
  }
};
Blockly.Blocks['lib_cond_77'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Adult");
    this.appendValueInput("ARG1").appendField("  adult z (żywe jednostki) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsAdult :: [the] [an] adult of %livingentities%");
  }
};
Blockly.Blocks['lib_cond_78'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Pressing Key");
    this.appendValueInput("ARG1").appendField("(gracze) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" pressing (inputkeys) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsPressingKey :: %players% (is|are) pressing %inputkeys%");
  }
};
Blockly.Blocks['lib_cond_79'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Lootable");
    this.appendValueInput("ARG1").appendField(" lootable z (bloki) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsLootable :: [the] lootable of %blocks/entities%");
  }
};
Blockly.Blocks['lib_cond_80'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Ma Loot Table");
    this.appendValueInput("ARG1").appendField("  loottable z (bloki) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondHasLootTable :: [the] [a] loot[ ]table of %blocks/entities%");
  }
};
Blockly.Blocks['lib_cond_81'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Warzenie Consume");
    this.appendDummyInput().appendField(" warzenie stojak will consume  fuel");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondBrewingConsume :: [the] brewing stand will consume [the] fuel");
  }
};
Blockly.Blocks['lib_cond_82'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Przedmiot Zaklęcie Glint");
    this.appendDummyInput().appendField("forced do  glint");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondItemEnchantmentGlint :: forced to [:not] glint");
  }
};
Blockly.Blocks['lib_cond_83'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Enchanted");
    this.appendValueInput("ARG1").appendField(" enchanted (opcjonalnie) z (enchantmenttypes) ");
    this.appendValueInput("ARG2").appendField("  z (przedmioty) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsEnchanted :: [the] enchanted [with %-enchantmenttypes% [or (1:(better|greater|higher|above)|2:(worse|lesser|lower|below))]] of %itemtypes%");
  }
};
Blockly.Blocks['lib_cond_84'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Tekst Wyświetlacz See Through Bloki");
    this.appendDummyInput().appendField(" widzialny through ").appendField(new Blockly.FieldDropdown([["bloki", "blocks"], ["walls", "walls"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (displays) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondTextDisplaySeeThroughBlocks :: [the] visible through (blocks|walls) of %displays%");
  }
};
Blockly.Blocks['lib_cond_85'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Tekst Wyświetlacz Ma Upuść Shadow");
    this.appendValueInput("ARG1").appendField(" (displays) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["ma", "has"], ["mają", "have"]]), "CH1");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["upuść", "drop"], ["tekst", "text"]]), "CH2");
    this.appendDummyInput().appendField(" shadow");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondTextDisplayHasDropShadow :: [[the] text of] %displays% (has|have) [a] (drop|text) shadow");
  }
};
Blockly.Blocks['lib_cond_86'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Responsive");
    this.appendValueInput("ARG1").appendField(" responsive z (jednostki) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsResponsive :: [the] (responsive|:unresponsive) of %entities%");
  }
};
Blockly.Blocks['lib_cond_87'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Ma Boss Bar Flaga");
    this.appendValueInput("ARG1").appendField("(bossbars) ");
    this.appendDummyInput().appendField("  darken sky");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondHasBossBarFlag :: %bossbars% [do[es]] darken[s] the sky");
  }
};
Blockly.Blocks['lib_cond_88'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Tagged");
    this.appendDummyInput().appendField(" tagged ").appendField(new Blockly.FieldDropdown([["as", "as"], ["z", "with"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (minecrafttags) ");
    this.appendValueInput("ARG2").appendField(" z (przedmioty) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsTagged :: [the] tagged (as|with) %minecrafttags% of %itemtypes/entities/entitydatas%");
  }
};
Blockly.Blocks['lib_cond_89'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Prop Cond Jest Empty");
    this.appendValueInput("ARG1").appendField(" empty z (wartości) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("PropCondIsEmpty :: [the] empty of %objects%");
  }
};
Blockly.Blocks['lib_cond_90'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Prop Cond Contains");
    this.appendValueInput("ARG1").appendField("(wartości) ");
    this.appendValueInput("ARG2").appendField(" contain (wartości) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("PropCondContains :: %objects% contain[1:s] %objects%");
  }
};
Blockly.Blocks['lib_cond_91'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Niewidzialny");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest niewidzialny");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsInvisible :: %livingentities% is (invisible|:visible)");
  }
};
Blockly.Blocks['lib_cond_92'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Uprawnienie");
    this.appendValueInput("ARG1").appendField("(commandsenders) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["ma", "has"], ["mają", "have"]]), "CH1");
    this.appendValueInput("ARG2").appendField("  uprawnienie (teksty) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondPermission :: %commandsenders% (has|have) [the] permission[s] %strings%");
  }
};
Blockly.Blocks['lib_cond_93'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest On Ground");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest on  ground");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsOnGround :: %entities% is on [the] ground");
  }
};
Blockly.Blocks['lib_cond_94'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Contains");
    this.appendValueInput("ARG1").appendField("(ekwipunki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["ma", "has"], ["mają", "have"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (przedmioty) ");
    this.appendDummyInput().appendField(" ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondContains :: %inventories% (has|have) %itemtypes% [in [(the[ir]|his|her|its)] inventory]");
  }
};
Blockly.Blocks['lib_cond_95'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Ticking");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest ticking");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsTicking :: %entities% is ticking");
  }
};
Blockly.Blocks['lib_cond_96'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Panda Jest Sneezing");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest sneezing");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondPandaIsSneezing :: %livingentities% is sneezing");
  }
};
Blockly.Blocks['lib_cond_97'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Minecraft Version");
    this.appendValueInput("ARG1").appendField("running  minecraft (tekst) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondMinecraftVersion :: running [(1¦below)] minecraft %string%");
  }
};
Blockly.Blocks['lib_cond_98'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Past Future");
    this.appendValueInput("ARG1").appendField("(dates) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" w past");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondPastFuture :: %dates% (is|are)[negated:(n't| not)] in the (past|:future)");
  }
};
Blockly.Blocks['lib_cond_99'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Empty");
    this.appendValueInput("ARG1").appendField("(ekwipunki) ");
    this.appendDummyInput().appendField(" jest empty");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsEmpty :: %inventories/slots/strings/numbered% is empty");
  }
};
Blockly.Blocks['lib_cond_100'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Leashed");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest leashed");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondLeashed :: %entities% is leashed");
  }
};
Blockly.Blocks['lib_cond_101'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Saddled");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest  saddled");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsSaddled :: %livingentities% is [:properly] saddled");
  }
};
Blockly.Blocks['lib_cond_102'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Playing Dead");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest playing dead");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsPlayingDead :: %livingentities% is playing dead");
  }
};
Blockly.Blocks['lib_cond_103'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Pathfinding");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendValueInput("ARG2").appendField(" jest pathfinding (opcjonalnie) do (żywa jednostka) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsPathfinding :: %livingentities% is pathfinding [to[wards] %-livingentity/location%]");
  }
};
Blockly.Blocks['lib_cond_104'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Komenda Blok Conditional");
    this.appendValueInput("ARG1").appendField("(bloki) ");
    this.appendDummyInput().appendField(" jest conditional");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsCommandBlockConditional :: %blocks% is [:un]conditional");
  }
};
Blockly.Blocks['lib_cond_105'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Enderman Stared Przy");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" ma been stared przy");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondEndermanStaredAt :: %livingentities% has been stared at");
  }
};
Blockly.Blocks['lib_cond_106'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Może See");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendValueInput("ARG2").appendField("  na (gracze) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondCanSee :: %entities% (is|are) [visible|:invisible] for %players%");
  }
};
Blockly.Blocks['lib_cond_107'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Czat Visibility");
    this.appendValueInput("ARG1").appendField("(gracz) ");
    this.appendDummyInput().appendField(" może see all wiadomości ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondChatVisibility :: %player% can see all messages [in chat]");
  }
};
Blockly.Blocks['lib_cond_108'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Fire Resistant");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" jest ").appendField(new Blockly.FieldDropdown([["fire resistant", "fire resistant"], ["resistant do fire", "resistant to fire"]]), "CH1");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsFireResistant :: %itemtypes% is (fire resistant|resistant to fire)");
  }
};
Blockly.Blocks['lib_cond_109'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Incendiary");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" incendiary");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIncendiary :: %entities% ((is|are) incendiary|cause[s] a[n] (incendiary|fiery) explosion)");
  }
};
Blockly.Blocks['lib_cond_110'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Flammable");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" jest flammable");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsFlammable :: %itemtypes% is flammable");
  }
};
Blockly.Blocks['lib_cond_111'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Loaded");
    this.appendValueInput("ARG1").appendField("chunk (directions) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) (lokalizacje) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" loaded");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsLoaded :: chunk[s] %directions% [%locations%] (is|are)[(1¦(n't| not))] loaded");
  }
};
Blockly.Blocks['lib_cond_112'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Panda Jest Rolling");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest rolling");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondPandaIsRolling :: %livingentities% is rolling");
  }
};
Blockly.Blocks['lib_cond_113'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Divisible O");
    this.appendValueInput("ARG1").appendField("(liczby) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" evenly divisible o (liczba) ");
    this.appendValueInput("ARG3").appendField(" (opcjonalnie) z  tolerance  (liczba) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsDivisibleBy :: %numbers% (is|are) evenly divisible by %number% [with [a] tolerance [of] %-number%]");
  }
};
Blockly.Blocks['lib_cond_114'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Valid");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest valid");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsValid :: %entities/scripts% is valid");
  }
};
Blockly.Blocks['lib_cond_115'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Sedated");
    this.appendValueInput("ARG1").appendField("(bloki) ");
    this.appendDummyInput().appendField(" jest sedated");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsSedated :: %blocks% is sedated");
  }
};
Blockly.Blocks['lib_cond_116'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Tooltip");
    this.appendValueInput("ARG1").appendField("  tooltip z (przedmioty) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" hidden");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondTooltip :: [the] [entire|:additional] tool[ ]tip[s] of %itemtypes% (is|are) (:shown|hidden)");
  }
};
Blockly.Blocks['lib_cond_117'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Zadaj obrażenia Przyczyna");
    this.appendDummyInput().appendField(" zadaj obrażenia ").appendField(new Blockly.FieldDropdown([["był", "was"], ["jest", "is"], ["ma", "has"]]), "CH1");
    this.appendDummyInput().appendField("0¦  ").appendField(new Blockly.FieldDropdown([["caused", "caused"], ["done", "done"], ["made", "made"]]), "CH2");
    this.appendValueInput("ARG1").appendField(" o (damagecause) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondDamageCause :: [the] damage (was|is|has)(0¦|1¦n('|o)t) [been] (caused|done|made) by %damagecause%");
  }
};
Blockly.Blocks['lib_cond_118'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Invulnerable");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest ").appendField(new Blockly.FieldDropdown([["invulnerable", "invulnerable"], ["invincible", "invincible"]]), "CH1");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsInvulnerable :: %entities% is (invulnerable|invincible)");
  }
};
Blockly.Blocks['lib_cond_119'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Może Latanie");
    this.appendValueInput("ARG1").appendField("(gracze) ");
    this.appendDummyInput().appendField(" może latanie");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondCanFly :: %players% can fly");
  }
};
Blockly.Blocks['lib_cond_120'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Strider Jest Shivering");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest shivering");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondStriderIsShivering :: %livingentities% is shivering");
  }
};
Blockly.Blocks['lib_cond_121'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Blocking");
    this.appendValueInput("ARG1").appendField("(gracze) ");
    this.appendDummyInput().appendField(" jest ").appendField(new Blockly.FieldDropdown([["blocking", "blocking"], ["defending", "defending"]]), "CH1");
    this.appendDummyInput().appendField(" ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsBlocking :: %players% is (blocking|defending) [with [a] shield]");
  }
};
Blockly.Blocks['lib_cond_122'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Panda Jest Scared");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest scared");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondPandaIsScared :: %livingentities% is scared");
  }
};
Blockly.Blocks['lib_cond_123'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Sleeping");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest sleeping");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsSleeping :: %livingentities% is sleeping");
  }
};
Blockly.Blocks['lib_cond_124'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Może Pick Up Przedmioty");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" może pickup przedmioty");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondCanPickUpItems :: %livingentities% can pick([ ]up items| items up)");
  }
};
Blockly.Blocks['lib_cond_125'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Z Typ");
    this.appendValueInput("ARG1").appendField("(itemstacks) ");
    this.appendValueInput("ARG2").appendField(" jest z typ (przedmioty) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsOfType :: %itemstacks/entities% is of type[s] %itemtypes/entitydatas%");
  }
};
Blockly.Blocks['lib_cond_126'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Ma Client Pogoda");
    this.appendValueInput("ARG1").appendField("(gracze) ");
    this.appendDummyInput().appendField(" ma  ").appendField(new Blockly.FieldDropdown([["client", "client"], ["custom", "custom"]]), "CH1");
    this.appendDummyInput().appendField(" pogoda ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondHasClientWeather :: %players% has [a] (client|custom) weather [set]");
  }
};
Blockly.Blocks['lib_cond_127'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Passable");
    this.appendValueInput("ARG1").appendField("(bloki) ");
    this.appendDummyInput().appendField(" jest passable");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsPassable :: %blocks% is passable");
  }
};
Blockly.Blocks['lib_cond_128'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Banned");
    this.appendValueInput("ARG1").appendField("(offlineplayers) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" banned");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsBanned :: %offlineplayers/strings% (is|are) banned");
  }
};
Blockly.Blocks['lib_cond_129'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Przedmiot Despawn");
    this.appendValueInput("ARG1").appendField("(itementities) ");
    this.appendDummyInput().appendField(" jest ").appendField(new Blockly.FieldDropdown([["despawn naturally", "despawn naturally"], ["naturally despawn", "naturally despawn"]]), "CH1");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondItemDespawn :: %itementities% is (despawn naturally|naturally despawn)");
  }
};
Blockly.Blocks['lib_cond_130'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Frozen");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest frozen");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsFrozen :: %entities% is frozen");
  }
};
Blockly.Blocks['lib_cond_131'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Dancing");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest dancing");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsDancing :: %livingentities% is dancing");
  }
};
Blockly.Blocks['lib_cond_132'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Persistent");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest persistent");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsPersistent :: %entities/blocks% is persistent");
  }
};
Blockly.Blocks['lib_cond_133'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Starts Ends Z");
    this.appendValueInput("ARG1").appendField("(teksty) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["start", "start"], ["end", "end"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" z (teksty) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondStartsEndsWith :: %strings% (start|1¦end)[s] with %strings%");
  }
};
Blockly.Blocks['lib_cond_134'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Goat Ma Horns");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" ma ").appendField(new Blockly.FieldDropdown([["any", "any"], ["a", "a"]]), "CH1");
    this.appendDummyInput().appendField(" horn");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondGoatHasHorns :: %livingentities% has ((any|a) horn|left:[a] left horn[s]|right:[a] right horn[s]|both:both horns)");
  }
};
Blockly.Blocks['lib_cond_135'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Resource Pack");
    this.appendDummyInput().appendField(" resource pack ").appendField(new Blockly.FieldDropdown([["był", "was"], ["jest", "is"], ["ma", "has"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  (resourcepackstate) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondResourcePack :: [the] resource pack (was|is|has) [been] %resourcepackstate%");
  }
};
Blockly.Blocks['lib_cond_136'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Sheared");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest ").appendField(new Blockly.FieldDropdown([["sheared", "sheared"], ["shorn", "shorn"]]), "CH1");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsSheared :: %livingentities% is (sheared|shorn)");
  }
};
Blockly.Blocks['lib_cond_137'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Climbing");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest climbing");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsClimbing :: %livingentities% is climbing");
  }
};
Blockly.Blocks['lib_cond_138'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Przedmiot W Hand");
    this.appendValueInput("ARG1").appendField("(opcjonalnie) (żywe jednostki) ");
    this.appendDummyInput().appendField(" ha").appendField(new Blockly.FieldDropdown([["s", "s"], ["ve", "ve"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (przedmioty) ");
    this.appendDummyInput().appendField(" w  hand");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondItemInHand :: [%livingentities%] ha(s|ve) %itemtypes% in [main] hand");
  }
};
Blockly.Blocks['lib_cond_139'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Ma Resource Pack");
    this.appendValueInput("ARG1").appendField("(gracze) ");
    this.appendDummyInput().appendField(" ma  resource pack ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondHasResourcePack :: %players% has [a] resource pack [(loaded|installed)]");
  }
};
Blockly.Blocks['lib_cond_140'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Eating");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest eating");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsEating :: %livingentities% is eating");
  }
};
Blockly.Blocks['lib_cond_141'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Custom Nazwa Widzialny");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField("' custom nazwa ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" widzialny");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsCustomNameVisible :: %entities%'[s] custom name[s] (is|are) visible");
  }
};
Blockly.Blocks['lib_cond_142'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Within Radius");
    this.appendValueInput("ARG1").appendField("(lokalizacje) ");
    this.appendValueInput("ARG2").appendField(" jest within (liczba) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["blok", "block"], ["metre", "metre"], ["meter", "meter"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["around", "around"], ["z", "of"]]), "CH2");
    this.appendValueInput("ARG3").appendField(" (lokalizacje) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondWithinRadius :: %locations% is within %number% (block|metre|meter)[s] (around|of) %locations%");
  }
};
Blockly.Blocks['lib_cond_143'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Latanie");
    this.appendValueInput("ARG1").appendField("(gracze) ");
    this.appendDummyInput().appendField(" jest latanie");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsFlying :: %players% is flying");
  }
};
Blockly.Blocks['lib_cond_144'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Czat Kolory");
    this.appendValueInput("ARG1").appendField("(gracze) ");
    this.appendDummyInput().appendField(" może see czat color");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondChatColors :: %players% can see chat colo[u]r[s|ing]");
  }
};
Blockly.Blocks['lib_cond_145'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Interactable");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" jest interactable");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsInteractable :: %itemtypes% is interactable");
  }
};
Blockly.Blocks['lib_cond_146'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Gliding");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest gliding");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsGliding :: %livingentities% is gliding");
  }
};
Blockly.Blocks['lib_cond_147'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Anchor Works");
    this.appendValueInput("ARG1").appendField("odrodzenie anchors  work w (światy) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondAnchorWorks :: respawn anchors [do[1:(n't| not)]] work in %worlds%");
  }
};
Blockly.Blocks['lib_cond_148'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Panda Jest On Back");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest on ").appendField(new Blockly.FieldDropdown([["its", "its"], ["their", "their"]]), "CH1");
    this.appendDummyInput().appendField(" back");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondPandaIsOnBack :: %livingentities% is on (its|their) back[s]");
  }
};
Blockly.Blocks['lib_cond_149'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Wearing");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendValueInput("ARG2").appendField(" jest wearing (przedmioty) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsWearing :: %livingentities% is wearing %itemtypes%");
  }
};
Blockly.Blocks['lib_cond_150'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Może Hold");
    this.appendValueInput("ARG1").appendField("(ekwipunki) ");
    this.appendValueInput("ARG2").appendField(" może hold (przedmioty) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondCanHold :: %inventories% (can hold|ha(s|ve) [enough] space (for|to hold)) %itemtypes%");
  }
};
Blockly.Blocks['lib_cond_151'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: AI");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" ma ").appendField(new Blockly.FieldDropdown([["ai", "ai"], ["artificial intelligence", "artificial intelligence"]]), "CH1");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondAI :: %livingentities% has (ai|artificial intelligence)");
  }
};
Blockly.Blocks['lib_cond_152'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Plugin Enabled");
    this.appendValueInput("ARG1").appendField("plugin (teksty) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" enabled");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsPluginEnabled :: plugin[s] %strings% (is|are) enabled");
  }
};
Blockly.Blocks['lib_cond_153'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Played Before");
    this.appendValueInput("ARG1").appendField("(offlineplayers) ");
    this.appendDummyInput().appendField("   odtwórz  ").appendField(new Blockly.FieldDropdown([["before", "before"], ["already", "already"]]), "CH1");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondPlayedBefore :: %offlineplayers% [(has|have|did)] [already] play[ed] [on (this|the) server] (before|already)");
  }
};
Blockly.Blocks['lib_cond_154'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Allay Może Duplicate");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" może ").appendField(new Blockly.FieldDropdown([["duplicate", "duplicate"], ["clone", "clone"]]), "CH1");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondAllayCanDuplicate :: %livingentities% can (duplicate|clone)");
  }
};
Blockly.Blocks['lib_cond_155'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Slime Chunk");
    this.appendValueInput("ARG1").appendField("(chunk) ");
    this.appendDummyInput().appendField(" jest  slime chunk");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsSlimeChunk :: %chunk% is ([a] slime chunk|slime chunks|slimey)");
  }
};
Blockly.Blocks['lib_cond_156'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Z Mob Spawner");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" z  spawner");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondFromMobSpawner :: %entities% (is|are) from a [mob] spawner");
  }
};
Blockly.Blocks['lib_cond_157'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Ringing");
    this.appendValueInput("ARG1").appendField("(bloki) ");
    this.appendDummyInput().appendField(" jest ringing");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsRinging :: %blocks% is ringing");
  }
};
Blockly.Blocks['lib_cond_158'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Cancelled");
    this.appendDummyInput().appendField(" zdarzenie jest anulujed");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondCancelled :: [the] event is cancel[l]ed");
  }
};
Blockly.Blocks['lib_cond_159'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Spawnable");
    this.appendValueInput("ARG1").appendField("(entitydatas) ");
    this.appendValueInput("ARG2").appendField(" jest spawnable (opcjonalnie) w  (świat) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsSpawnable :: %entitydatas% is spawnable [in [the [world]] %world%]");
  }
};
Blockly.Blocks['lib_cond_160'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Whitelisted");
    this.appendDummyInput().appendField(" serwer jest w whitelist tryb");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsWhitelisted :: [the] server (is|not:(isn't|is not)) (in white[ ]list mode|white[ ]listed)");
  }
};
Blockly.Blocks['lib_cond_161'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Wektor Normalized");
    this.appendValueInput("ARG1").appendField("(vectors) ");
    this.appendDummyInput().appendField(" jest normali").appendField(new Blockly.FieldDropdown([["s", "s"], ["z", "z"]]), "CH1");
    this.appendDummyInput().appendField("ed");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsVectorNormalized :: %vectors% is normali(s|z)ed");
  }
};
Blockly.Blocks['lib_cond_162'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Charging Fireball");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest charging  fireball");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsChargingFireball :: %livingentities% is charging [a] fireball");
  }
};
Blockly.Blocks['lib_cond_163'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Preferred Tool");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (wartość) ");
    this.appendValueInput("ARG3").appendField("'s preferred tool(przedmioty) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH2");
    this.appendDummyInput().appendField("  preferred tool ").appendField(new Blockly.FieldDropdown([["na", "for"], ["z", "of"]]), "CH3");
    this.appendValueInput("ARG4").appendField(" (wartość) ");
    this.appendValueInput("ARG5").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH4");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["n't", "n't"], ["nie", "not"]]), "CH5");
    this.appendValueInput("ARG6").appendField(" (wartość) ");
    this.appendValueInput("ARG7").appendField("'s preferred tool(przedmioty) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH6");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["n't", "n't"], ["nie", "not"]]), "CH7");
    this.appendDummyInput().appendField("  preferred tool ").appendField(new Blockly.FieldDropdown([["na", "for"], ["z", "of"]]), "CH8");
    this.appendValueInput("ARG8").appendField(" (wartość) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsPreferredTool :: %itemtypes% (is|are) %%'s preferred tool[s]%itemtypes% (is|are) [the|a] preferred tool[s] (for|of) %%%itemtypes% (is|are)(n't| not) %%'s preferred tool[s]%itemtypes% (is|are)(n't| not) [the|a] preferred tool[s] (for|of) %%");
  }
};
Blockly.Blocks['lib_cond_164'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Op");
    this.appendValueInput("ARG1").appendField("(offlineplayers) ");
    this.appendDummyInput().appendField(" jest  op");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsOp :: %offlineplayers% is [[a] server|an] op[erator][s]");
  }
};
Blockly.Blocks['lib_cond_165'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Alphanumeric");
    this.appendValueInput("ARG1").appendField("(teksty) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" alphanumeric");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondAlphanumeric :: %strings% (is|are) alphanumeric");
  }
};
Blockly.Blocks['lib_cond_166'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Matches");
    this.appendValueInput("ARG1").appendField("(teksty) ");
    this.appendValueInput("ARG2").appendField(" 1¦match (teksty) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondMatches :: %strings% (1¦match[es]|2¦do[es](n't| not) match) %strings%");
  }
};
Blockly.Blocks['lib_cond_167'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Resonating");
    this.appendValueInput("ARG1").appendField("(bloki) ");
    this.appendDummyInput().appendField(" jest resonating");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsResonating :: %blocks% is resonating");
  }
};
Blockly.Blocks['lib_cond_168'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Skript Komenda");
    this.appendValueInput("ARG1").appendField("(tekst) ");
    this.appendDummyInput().appendField(" jest  s").appendField(new Blockly.FieldDropdown([["k", "k"], ["c", "c"]]), "CH1");
    this.appendDummyInput().appendField("ript ").appendField(new Blockly.FieldDropdown([["komenda", "command"], ["cmd", "cmd"]]), "CH2");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsSkriptCommand :: %string% is [a] s(k|c)ript (command|cmd)");
  }
};
Blockly.Blocks['lib_cond_169'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Elytra Boost Consume");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["boosting", "boosting"], ["used", "used"]]), "CH1");
    this.appendDummyInput().appendField(" fajerwerk will be consumed");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondElytraBoostConsume :: [the] (boosting|used) firework will be consumed");
  }
};
Blockly.Blocks['lib_cond_170'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Jumping");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest jumping");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsJumping :: %livingentities% is jumping");
  }
};
Blockly.Blocks['lib_cond_171'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Left Handed");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest right-handed");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsLeftHanded :: %livingentities% is (:left|right)( |-)handed");
  }
};
Blockly.Blocks['lib_cond_172'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Script Loaded");
    this.appendValueInput("ARG1").appendField("script (opcjonalnie) (teksty) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" loaded");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondScriptLoaded :: script[s] [%-strings%] (is|are) loaded");
  }
};
Blockly.Blocks['lib_cond_173'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Pv P");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["jest PvP", "is PvP"], ["PvP jest", "PvP is"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" enabled (opcjonalnie) w (światy) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondPvP :: (is PvP|PvP is) enabled [in %worlds%]");
  }
};
Blockly.Blocks['lib_cond_174'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Ma Line Z Sight");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["ma", "has"], ["mają", "have"]]), "CH1");
    this.appendValueInput("ARG2").appendField("   line z sight do (jednostki) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondHasLineOfSight :: %livingentities% (has|have) [a] [direct] line of sight to %entities/locations%");
  }
};
Blockly.Blocks['lib_cond_175'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Leash Will Upuść");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["lead", "lead"], ["leash", "leash"]]), "CH1");
    this.appendDummyInput().appendField("  will ").appendField(new Blockly.FieldDropdown([["upuść", "drop"], ["be dropped", "be dropped"]]), "CH2");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondLeashWillDrop :: [the] (lead|leash) [item] (will|not:(won't|will not)) (drop|be dropped)");
  }
};
Blockly.Blocks['lib_cond_176'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Blok Redstone Powered");
    this.appendValueInput("ARG1").appendField("(bloki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" redstone powered");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsBlockRedstonePowered :: %blocks% (is|are) redstone powered");
  }
};
Blockly.Blocks['lib_cond_177'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Infinite");
    this.appendValueInput("ARG1").appendField("(potioneffects) ");
    this.appendDummyInput().appendField(" jest infinite");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsInfinite :: %potioneffects/timespans% is infinite");
  }
};
Blockly.Blocks['lib_cond_178'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Burning");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest ").appendField(new Blockly.FieldDropdown([["burning", "burning"], ["ignited", "ignited"], ["on fire", "on fire"]]), "CH1");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsBurning :: %entities% is (burning|ignited|on fire)");
  }
};
Blockly.Blocks['lib_cond_179'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Czat Filtering");
    this.appendValueInput("ARG1").appendField("(gracze) ");
    this.appendDummyInput().appendField(" ma ").appendField(new Blockly.FieldDropdown([["czat", "chat"], ["tekst", "text"]]), "CH1");
    this.appendDummyInput().appendField(" filtering ").appendField(new Blockly.FieldDropdown([["on", "on"], ["enabled", "enabled"]]), "CH2");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondChatFiltering :: %players% has (chat|text) filtering (on|enabled)");
  }
};
Blockly.Blocks['lib_cond_180'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Tamed");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest ").appendField(new Blockly.FieldDropdown([["tamed", "tamed"], ["domesticated", "domesticated"]]), "CH1");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsTamed :: %entities% is (tamed|domesticated)");
  }
};
Blockly.Blocks['lib_cond_181'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Ma Metadata");
    this.appendValueInput("ARG1").appendField("(metadataholders) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["ma", "has"], ["mają", "have"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" metadata  (teksty) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondHasMetadata :: %metadataholders% (has|have) metadata [(value|tag)[s]] %strings%");
  }
};
Blockly.Blocks['lib_cond_182'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Riptiding");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest riptiding");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsRiptiding :: %livingentities% is riptiding");
  }
};
Blockly.Blocks['lib_cond_183'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Ustaw");
    this.appendValueInput("ARG1").appendField("(wartości) ");
    this.appendDummyInput().appendField(" exist");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsSet :: %~objects% (exist[s]|(is|are) set)");
  }
};
Blockly.Blocks['lib_cond_184'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Stackable");
    this.appendValueInput("ARG1").appendField("(itemstacks) ");
    this.appendDummyInput().appendField(" jest stackable");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsStackable :: %itemstacks% is stackable");
  }
};
Blockly.Blocks['lib_cond_185'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Silent");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest silent");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsSilent :: %entities% is silent");
  }
};
Blockly.Blocks['lib_cond_186'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jednostka Jest W Liquid");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest w water");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondEntityIsInLiquid :: %entities% is in (water|lava|[a] bubble column|rain)");
  }
};
Blockly.Blocks['lib_cond_187'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Alive");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest ").appendField(new Blockly.FieldDropdown([["alive", "alive"], ["dead", "dead"]]), "CH1");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsAlive :: %entities% is (alive|1¦dead)");
  }
};
Blockly.Blocks['lib_cond_188'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Screaming");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest screaming");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsScreaming :: %livingentities% is screaming");
  }
};
Blockly.Blocks['lib_cond_189'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Charged");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest ").appendField(new Blockly.FieldDropdown([["charged", "charged"], ["powered", "powered"]]), "CH1");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsCharged :: %entities% is (charged|powered)");
  }
};
Blockly.Blocks['lib_cond_190'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jednostka Unload");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" może despawn ").appendField(new Blockly.FieldDropdown([["on chunk unload", "on chunk unload"], ["when far away", "when far away"]]), "CH1");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondEntityUnload :: %livingentities% can despawn (on chunk unload|when far away)");
  }
};
Blockly.Blocks['lib_cond_191'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Within");
    this.appendValueInput("ARG1").appendField("(lokalizacje) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" within (lokalizacja) ");
    this.appendValueInput("ARG3").appendField(" i (lokalizacja) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsWithin :: %locations% (is|are) within %location% and %location%");
  }
};
Blockly.Blocks['lib_cond_192'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Occluding");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" jest occluding");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsOccluding :: %itemtypes% is occluding");
  }
};
Blockly.Blocks['lib_cond_193'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Edible");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" jest edible");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsEdible :: %itemtypes% is edible");
  }
};
Blockly.Blocks['lib_cond_194'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Kucanie");
    this.appendValueInput("ARG1").appendField("(gracze) ");
    this.appendDummyInput().appendField(" jest kucanie");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsSneaking :: %players% is sneaking");
  }
};
Blockly.Blocks['lib_cond_195'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Fuel");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" jest  fuel");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsFuel :: %itemtypes% is [furnace] fuel");
  }
};
Blockly.Blocks['lib_cond_196'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Sprinting");
    this.appendValueInput("ARG1").appendField("(gracze) ");
    this.appendDummyInput().appendField(" jest sprinting");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsSprinting :: %players% is sprinting");
  }
};
Blockly.Blocks['lib_cond_197'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Compare");
    this.appendValueInput("ARG1").appendField("neither (wartości) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["greater", "greater"], ["more", "more"], ["higher", "higher"], ["bigger", "bigger"], ["larger", "larger"]]), "CH2");
    this.appendValueInput("ARG2").appendField(" than (wartości) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondCompare :: (1¦neither|) %objects% ((is|are)(|2¦(n't| not|4¦ neither)) ((greater|more|higher|bigger|larger) than|above)|\\>) %objects%");
  }
};
Blockly.Blocks['lib_cond_198'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jednostka Storage Jest Full");
    this.appendValueInput("ARG1").appendField(" jednostka storage z (bloki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" full");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondEntityStorageIsFull :: [the] entity storage of %blocks% (is|are) full");
  }
};
Blockly.Blocks['lib_cond_199'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Ma Scoreboard Tag");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendValueInput("ARG2").appendField(" ma  scoreboard tag (teksty) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondHasScoreboardTag :: %entities% has [the] score[ ]board tag[s] %strings%");
  }
};
Blockly.Blocks['lib_cond_200'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Szansa");
    this.appendValueInput("ARG1").appendField("szansa z (liczba) ");
    this.appendDummyInput().appendField("1: ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondChance :: chance of %number%(1:|) [fail:(fails|failed)]");
  }
};
Blockly.Blocks['lib_cond_201'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Will Hatch");
    this.appendDummyInput().appendField(" jajko ").appendField(new Blockly.FieldDropdown([["will nie", "will not"], ["won't", "won't"]]), "CH1");
    this.appendDummyInput().appendField(" hatch");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondWillHatch :: [the] egg (:will|will not|won't) hatch");
  }
};
Blockly.Blocks['lib_cond_202'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Dashing");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest dashing");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsDashing :: %livingentities% is dashing");
  }
};
Blockly.Blocks['lib_cond_203'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Lid State");
    this.appendValueInput("ARG1").appendField(" lid z (bloki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" open");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondLidState :: [the] lid[s] of %blocks% (is|are) (open[ed]|:close[d])");
  }
};
Blockly.Blocks['lib_cond_204'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Tameable");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest tameable");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsTameable :: %livingentities% is tameable");
  }
};
Blockly.Blocks['lib_cond_205'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Unbreakable");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" jest breakable");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsUnbreakable :: %itemtypes% is [:un]breakable");
  }
};
Blockly.Blocks['lib_cond_206'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Blok");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" jest  blok");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsBlock :: %itemtypes% is ([a] block|blocks)");
  }
};
Blockly.Blocks['lib_cond_207'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Ma Custom Model Data");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" ma  model data ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondHasCustomModelData :: %itemtypes% has [custom] model data [1:floats|2:flags|3:strings|4:colo[u]rs]");
  }
};
Blockly.Blocks['lib_cond_208'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Online");
    this.appendValueInput("ARG1").appendField("(offlineplayers) ");
    this.appendDummyInput().appendField(" jest online");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsOnline :: %offlineplayers% is (online|:offline|:connected)");
  }
};
Blockly.Blocks['lib_cond_209'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jednostka Jest Wet");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendDummyInput().appendField(" jest wet");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondEntityIsWet :: %entities% is wet");
  }
};
Blockly.Blocks['lib_cond_210'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Hand Raised");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField("'  hand ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" raised");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsHandRaised :: %livingentities%'[s] [:main] hand[s] (is|are) raised");
  }
};
Blockly.Blocks['lib_cond_211'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Date");
    this.appendValueInput("ARG1").appendField("(date) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["był", "was"], ["were", "were"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" more than (czas trwania) ");
    this.appendDummyInput().appendField(" ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondDate :: %date% (was|were)( more|(n't| not) less) than %timespan% [ago]");
  }
};
Blockly.Blocks['lib_cond_212'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Glowing Tekst");
    this.appendValueInput("ARG1").appendField("(bloki) ");
    this.appendDummyInput().appendField(" ma glowing tekst");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondGlowingText :: %blocks/itemtypes% has glowing text");
  }
};
Blockly.Blocks['lib_cond_213'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Swimming");
    this.appendValueInput("ARG1").appendField("(żywe jednostki) ");
    this.appendDummyInput().appendField(" jest swimming");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsSwimming :: %livingentities% is swimming");
  }
};
Blockly.Blocks['lib_cond_214'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Riding");
    this.appendValueInput("ARG1").appendField("(jednostki) ");
    this.appendValueInput("ARG2").appendField(" jest riding (opcjonalnie) (entitydatas) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsRiding :: %entities% is riding [%-entitydatas/entities%]");
  }
};
Blockly.Blocks['lib_cond_215'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Ma Przedmiot Odnowienie");
    this.appendValueInput("ARG1").appendField("(gracze) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["ma", "has"], ["mają", "have"]]), "CH1");
    this.appendDummyInput().appendField("  odnowienie ").appendField(new Blockly.FieldDropdown([["on", "on"], ["na", "for"]]), "CH2");
    this.appendValueInput("ARG2").appendField(" (przedmioty) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondHasItemCooldown :: %players% (has|have) [([an] item|a)] cooldown (on|for) %itemtypes%");
  }
};
Blockly.Blocks['lib_cond_216'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Odrodzenie Lokalizacja");
    this.appendDummyInput().appendField(" odrodzenie lokalizacja ").appendField(new Blockly.FieldDropdown([["był", "was"], ["jest", "is"]]), "CH1");
    this.appendDummyInput().appendField("  odrodzenie anchor");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondRespawnLocation :: [the] respawn location (was|is)[1:(n'| no)t] [a] (:bed|respawn anchor)");
  }
};
Blockly.Blocks['lib_cond_217'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Solid");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" jest solid");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsSolid :: %itemtypes% is solid");
  }
};
Blockly.Blocks['lib_cond_218'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Transparent");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" jest transparent");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsTransparent :: %itemtypes% is transparent");
  }
};
Blockly.Blocks['lib_cond_219'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Używając Feature");
    this.appendValueInput("ARG1").appendField("(script) ");
    this.appendValueInput("ARG2").appendField(" jest używając (teksty) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsUsingFeature :: %script% is using %strings%");
  }
};
Blockly.Blocks['lib_cond_220'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Ignition Process");
    this.appendValueInput("ARG1").appendField(" (żywe jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendDummyInput().appendField(" going do explode");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIgnitionProcess :: [creeper[s]] %livingentities% ((is|are)|1¦(isn't|is not|aren't|are not)) going to explode");
  }
};
Blockly.Blocks['lib_cond_221'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Może Build");
    this.appendValueInput("ARG1").appendField("(gracze) ");
    this.appendValueInput("ARG2").appendField(" może build (directions) ");
    this.appendValueInput("ARG3").appendField(" (lokalizacje) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondCanBuild :: %players% (can|(is|are) allowed to) build %directions% %locations%");
  }
};
Blockly.Blocks['lib_cond_222'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Region Contains");
    this.appendValueInput("ARG1").appendField(" (regiony) ");
    this.appendValueInput("ARG2").appendField(" contain (directions) ");
    this.appendValueInput("ARG3").appendField(" (lokalizacje) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondRegionContains :: [[the] region] %regions% contain[s] %directions% %locations%");
  }
};
Blockly.Blocks['lib_cond_223'] = {
  init: function() {
    this.appendDummyInput().appendField("Warunek: Jest Member");
    this.appendValueInput("ARG1").appendField("(offlineplayers) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" 0¦ member z  (regiony) ");
    this.setOutput(true, 'Boolean');
    this.setColour("#7a5ba5");
    this.setInputsInline(false);
    this.setTooltip("CondIsMember :: %offlineplayers% (is|are) (0¦[a] member|1¦[(the|an)] owner) of [[the] region] %regions%");
  }
};
Blockly.Blocks['lib_eff_224'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Odtwórz Efekt");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["odtwórz", "play"], ["show", "show"], ["draw", "draw"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (gameeffects) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) (directions) ");
    this.appendValueInput("ARG3").appendField(" (lokalizacje) ");
    this.appendValueInput("ARG4").appendField(" (opcjonalnie) as (gracz) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPlayEffect :: [:force] (play|show|draw) %gameeffects/particles% [%-directions% %locations%] [as %-player%]");
  }
};
Blockly.Blocks['lib_eff_225'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Pull Hooked Jednostka");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["reel", "reel"], ["pull", "pull"]]), "CH1");
    this.appendDummyInput().appendField(" w  hook jednostka");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPullHookedEntity :: (reel|pull) in [the] hook[ed] entity");
  }
};
Blockly.Blocks['lib_eff_226'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Fishing Lure");
    this.appendDummyInput().appendField("apply  lure zaklęcie bonus");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffFishingLure :: apply [the] lure enchantment bonus");
  }
};
Blockly.Blocks['lib_eff_227'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Mikstura Icon");
    this.appendDummyInput().appendField("icon");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPotionIcon :: icon[s]");
  }
};
Blockly.Blocks['lib_eff_228'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Mikstura Infinite");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["infinite", "infinite"], ["permanent", "permanent"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPotionInfinite :: (infinite|permanent)");
  }
};
Blockly.Blocks['lib_eff_229'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Apply Mikstura Efekt");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["apply", "apply"], ["grant", "grant"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (skriptpotioneffects) ");
    this.appendValueInput("ARG2").appendField(" do (żywe jednostki) ");
    this.appendValueInput("ARG3").appendField(" (opcjonalnie) na (czas trwania) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffApplyPotionEffect :: (apply|grant) %skriptpotioneffects% to %livingentities% [for %-timespan%]");
  }
};
Blockly.Blocks['lib_eff_230'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Poison");
    this.appendValueInput("ARG1").appendField("poison (żywe jednostki) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) na (czas trwania) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPoison :: poison %livingentities% [for %-timespan%]");
  }
};
Blockly.Blocks['lib_eff_231'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Mikstura Ambient");
    this.appendDummyInput().appendField("ambient");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPotionAmbient :: ambient");
  }
};
Blockly.Blocks['lib_eff_232'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Mikstura Cząsteczki");
    this.appendDummyInput().appendField("cząsteczki");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPotionParticles :: particles");
  }
};
Blockly.Blocks['lib_eff_233'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Wiadomość");
    this.appendValueInput("ARG1").appendField("wiadomość (wartości) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) do (odbiorcy) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffMessage :: (message|send [message[s]]) %objects% [to %audiences%]");
  }
};
Blockly.Blocks['lib_eff_234'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Action Bar");
    this.appendValueInput("ARG1").appendField("wyślij  actionbar  (wartość) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) do (odbiorcy) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffActionBar :: send [the] action[ ]bar [with text] %object% [to %audiences%]");
  }
};
Blockly.Blocks['lib_eff_235'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Broadcast");
    this.appendValueInput("ARG1").appendField("broadcast (wartości) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["do", "to"], ["w", "in"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (światy) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffBroadcast :: broadcast %objects% [(to|in) %-worlds%]");
  }
};
Blockly.Blocks['lib_eff_236'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Wyślij Title");
    this.appendValueInput("ARG1").appendField("wyślij title (wartość) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) z subtitle (wartość) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffSendTitle :: send title %object% [with subtitle %-object%]");
  }
};
Blockly.Blocks['lib_eff_237'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Reset Title");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["clear", "clear"], ["usuń", "delete"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  title (opcjonalnie) z (odbiorcy) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffResetTitle :: (clear|delete|:reset) [the] title[s] [of %audiences%]");
  }
};
Blockly.Blocks['lib_eff_238'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Equip Comp Interact");
    this.appendValueInput("ARG1").appendField("allow (equippablecomponents) ");
    this.appendDummyInput().appendField(" do be equipped on jednostki");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffEquipCompInteract :: allow %equippablecomponents% to be equipped on[to] entities");
  }
};
Blockly.Blocks['lib_eff_239'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Equip Comp Damageable");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["make", "make"], ["let", "let"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (equippablecomponents) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["lose durability", "lose durability"], ["be damaged", "be damaged"]]), "CH2");
    this.appendDummyInput().appendField(" on  injury");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffEquipCompDamageable :: (make|let) %equippablecomponents% (lose durability|be damaged) (on [wearer['s]] injury|when [[the] wearer [is]] (hurt|injured|damaged))");
  }
};
Blockly.Blocks['lib_eff_240'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Equip Comp Swap Equipment");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["allow", "allow"], ["force", "force"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (equippablecomponents) ");
    this.appendDummyInput().appendField(" do swap equipment ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffEquipCompSwapEquipment :: (allow|force) %equippablecomponents% to swap equipment [on right click|when right clicked]");
  }
};
Blockly.Blocks['lib_eff_241'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Equip Comp Shearable");
    this.appendValueInput("ARG1").appendField("allow (equippablecomponents) ");
    this.appendDummyInput().appendField(" do be sheared off ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffEquipCompShearable :: allow %equippablecomponents% to be sheared off [of entities]");
  }
};
Blockly.Blocks['lib_eff_242'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Equip Comp Dispensable");
    this.appendValueInput("ARG1").appendField("allow (equippablecomponents) ");
    this.appendDummyInput().appendField(" do be dispensed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffEquipCompDispensable :: allow %equippablecomponents% to be dispensed");
  }
};
Blockly.Blocks['lib_eff_243'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Świat Granica Expand");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["expand", "expand"], ["grow", "grow"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  (worldborders) ");
    this.appendValueInput("ARG2").appendField(" o (liczba) ");
    this.appendValueInput("ARG3").appendField(" (opcjonalnie) over  (czas trwania) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffWorldBorderExpand :: (expand|grow) [[the] (diameter|:radius) of] %worldborders% (by|:to) %number% [over [a period of] %-timespan%]");
  }
};
Blockly.Blocks['lib_eff_244'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Make Adult Lub Baby");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["baby", "baby"], ["child", "child"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffMakeAdultOrBaby :: make %livingentities% [a[n]] (:adult|baby|child)");
  }
};
Blockly.Blocks['lib_eff_245'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Allow Aging");
    this.appendValueInput("ARG1").appendField("lock age z (żywe jednostki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffAllowAging :: lock age of %livingentities%");
  }
};
Blockly.Blocks['lib_eff_246'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Breedable");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" breedable");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffBreedable :: make %livingentities% breedable");
  }
};
Blockly.Blocks['lib_eff_247'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Rotate");
    this.appendValueInput("ARG1").appendField("rotate (vectors) ");
    this.appendValueInput("ARG2").appendField(" around   -axis o (liczba) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffRotate :: rotate %vectors/quaternions/displays% around [the] [global] (:x|:y|:z)(-| )axis by %number%");
  }
};
Blockly.Blocks['lib_eff_248'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Generate Loot");
    this.appendDummyInput().appendField("generate  loot ").appendField(new Blockly.FieldDropdown([["z", "of"], ["używając", "using"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (loottable) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z", "with"], ["używając", "using"]]), "CH2");
    this.appendValueInput("ARG2").appendField(" (lootcontext) ");
    this.appendValueInput("ARG3").appendField(" w (ekwipunki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffGenerateLoot :: generate [the] loot (of|using) %loottable% [(with|using) %-lootcontext%] in %inventories%");
  }
};
Blockly.Blocks['lib_eff_249'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Warzenie Consume");
    this.appendDummyInput().appendField("make  warzenie stojak consume  fuel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffBrewingConsume :: make [the] brewing stand consume [its|the] fuel");
  }
};
Blockly.Blocks['lib_eff_250'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Zaklęcie");
    this.appendValueInput("ARG1").appendField("zaklęcie (przedmioty) ");
    this.appendValueInput("ARG2").appendField(" z (enchantmenttypes) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffEnchant :: enchant %~itemtypes% with %enchantmenttypes%");
  }
};
Blockly.Blocks['lib_eff_251'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Force Zaklęcie Glint");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["force", "force"], ["make", "make"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (przedmioty) ");
    this.appendDummyInput().appendField("   glint");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffForceEnchantmentGlint :: (force|make) %itemtypes% [to] [start] glint[ing]");
  }
};
Blockly.Blocks['lib_eff_252'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Teleportuj");
    this.appendValueInput("ARG1").appendField(" teleportuj (jednostki) ");
    this.appendValueInput("ARG2").appendField(" do (lokalizacja) ");
    this.appendValueInput("ARG3").appendField(" (opcjonalnie) retaining (teleportflags) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffTeleport :: [:force] teleport %entities% (to|%direction%) %location% [[while] retaining %-teleportflags%]");
  }
};
Blockly.Blocks['lib_eff_253'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Tekst Wyświetlacz See Through Bloki");
    this.appendValueInput("ARG1").appendField("make (displays) ");
    this.appendDummyInput().appendField(" widzialny through ").appendField(new Blockly.FieldDropdown([["bloki", "blocks"], ["walls", "walls"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffTextDisplaySeeThroughBlocks :: make %displays% visible through (blocks|walls)");
  }
};
Blockly.Blocks['lib_eff_254'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Tekst Wyświetlacz Upuść Shadow");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["apply", "apply"], ["dodaj", "add"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["upuść", "drop"], ["tekst", "text"]]), "CH2");
    this.appendValueInput("ARG1").appendField(" shadow do  (displays) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffTextDisplayDropShadow :: (apply|add) (drop|text) shadow to [[the] text of] %displays%");
  }
};
Blockly.Blocks['lib_eff_255'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Make Responsive");
    this.appendValueInput("ARG1").appendField("make (jednostki) ");
    this.appendDummyInput().appendField(" responsive");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffMakeResponsive :: make %entities% responsive");
  }
};
Blockly.Blocks['lib_eff_256'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Kick");
    this.appendValueInput("ARG1").appendField("kick (gracze) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) o powód z (textcomponent) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffKick :: kick %players% [(by reason of|because [of]|on account of|due to) %-textcomponent%]");
  }
};
Blockly.Blocks['lib_eff_257'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Ban");
    this.appendValueInput("ARG1").appendField("ban  (teksty) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) o powód z (textcomponent) ");
    this.appendValueInput("ARG3").appendField(" (opcjonalnie) na (czas trwania) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffBan :: ban [kick:and kick] %strings/offlineplayers% [(by reason of|because [of]|on account of|due to) %-textcomponent%] [for %-timespan%]");
  }
};
Blockly.Blocks['lib_eff_258'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Boss Bar Flagi");
    this.appendValueInput("ARG1").appendField("make (bossbars) ");
    this.appendDummyInput().appendField("  darken sky");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffBossBarFlags :: make %bossbars% [remove:(not|no longer)] darken the sky");
  }
};
Blockly.Blocks['lib_eff_259'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Register Tag");
    this.appendDummyInput().appendField("register  ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffRegisterTag :: register [a[n]] [custom]");
  }
};
Blockly.Blocks['lib_eff_260'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Leash");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["leash", "leash"], ["lead", "lead"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (jednostki) ");
    this.appendValueInput("ARG2").appendField(" do (jednostka) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffLeash :: (leash|lead) %entities% to %entity%");
  }
};
Blockly.Blocks['lib_eff_261'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Knockback");
    this.appendValueInput("ARG1").appendField("apply knockback do (żywe jednostki) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) (kierunek) ");
    this.appendDummyInput().appendField(" (opcjonalnie) z ").appendField(new Blockly.FieldDropdown([["strength", "strength"], ["force", "force"]]), "CH1");
    this.appendValueInput("ARG3").appendField(" (liczba) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffKnockback :: (apply knockback to|knock[back]) %livingentities% [%direction%] [with (strength|force) %-number%]");
  }
};
Blockly.Blocks['lib_eff_262'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Zombify");
    this.appendValueInput("ARG1").appendField("zombify (żywe jednostki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffZombify :: zombify %livingentities%");
  }
};
Blockly.Blocks['lib_eff_263'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Upuść");
    this.appendValueInput("ARG1").appendField("upuść (przedmioty) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) (directions) ");
    this.appendValueInput("ARG3").appendField(" (lokalizacje) ");
    this.appendDummyInput().appendField(" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffDrop :: drop %itemtypes/experiences% [%directions% %locations%] [(1¦without velocity)]");
  }
};
Blockly.Blocks['lib_eff_264'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Swing Hand");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" swing   hand");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffSwingHand :: make %livingentities% swing [their] [main] hand");
  }
};
Blockly.Blocks['lib_eff_265'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Shear");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffShear :: [:force]");
  }
};
Blockly.Blocks['lib_eff_266'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Jednostka Unload");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" despawn ").appendField(new Blockly.FieldDropdown([["on chunk unload", "on chunk unload"], ["when far away", "when far away"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffEntityUnload :: make %livingentities% despawn[able] (on chunk unload|when far away)");
  }
};
Blockly.Blocks['lib_eff_267'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Enforce Whitelist");
    this.appendDummyInput().appendField("enforce   whitelist");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffEnforceWhitelist :: [:un]enforce [the] [server] white[ ]list");
  }
};
Blockly.Blocks['lib_eff_268'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Screaming");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["start screaming", "start screaming"], ["scream", "scream"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffScreaming :: make %livingentities% (start screaming|scream)");
  }
};
Blockly.Blocks['lib_eff_269'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Fajerwerk Launch");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["launch", "launch"], ["deploy", "deploy"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  (fireworkeffects) ");
    this.appendValueInput("ARG2").appendField(" przy (lokalizacje) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["czas trwania", "duration"], ["power", "power"]]), "CH2");
    this.appendValueInput("ARG3").appendField(" (liczba) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffFireworkLaunch :: (launch|deploy) [[a] firework [with effect[s]]] %fireworkeffects% at %locations% [([with] (duration|power)|timed) %number%]");
  }
};
Blockly.Blocks['lib_eff_270'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Panda Sneezing");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" start:").appendField(new Blockly.FieldDropdown([["start sneezing", "start sneezing"], ["sneeze", "sneeze"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPandaSneezing :: make %livingentities% (start:(start sneezing|sneeze)|stop sneezing)");
  }
};
Blockly.Blocks['lib_eff_271'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Świat Load");
    this.appendValueInput("ARG1").appendField("load  świat (teksty) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) z environment (environment) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffWorldLoad :: load [the] world[s] %strings% [with environment %-environment%]");
  }
};
Blockly.Blocks['lib_eff_272'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Glowing Tekst");
    this.appendValueInput("ARG1").appendField("make (bloki) ");
    this.appendDummyInput().appendField(" mają glowing tekst");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffGlowingText :: make %blocks/itemtypes% have glowing text");
  }
};
Blockly.Blocks['lib_eff_273'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Push");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["push", "push"], ["thrust", "thrust"], ["pull", "pull"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (jednostki) ");
    this.appendValueInput("ARG2").appendField("  (kierunek) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["przy", "at"], ["z", "with"]]), "CH2");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["prędkość", "speed"], ["velocity", "velocity"], ["force", "force"]]), "CH3");
    this.appendValueInput("ARG3").appendField("  (liczba) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPush :: (push|thrust|pull) %entities% [along] %direction% [(at|with) [a] (speed|velocity|force) [of] %-number%]");
  }
};
Blockly.Blocks['lib_eff_274'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Tooltip");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["show", "show"], ["reveal", "reveal"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (przedmioty) ");
    this.appendDummyInput().appendField("'  tooltip");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffTooltip :: (show|reveal|:hide) %itemtypes%'[s] [entire|:additional] tool[ ]tip");
  }
};
Blockly.Blocks['lib_eff_275'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Fire Resistant");
    this.appendValueInput("ARG1").appendField("make (przedmioty) ");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["fire resistant", "fire resistant"], ["resistant do fire", "resistant to fire"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffFireResistant :: make %itemtypes% [:not] (fire resistant|resistant to fire)");
  }
};
Blockly.Blocks['lib_eff_276'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Anuluj Przedmiot Use");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["anuluj", "cancel"], ["interrupt", "interrupt"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  use z (żywe jednostki) ");
    this.appendDummyInput().appendField("'  przedmiot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffCancelItemUse :: (cancel|interrupt) [the] us[ag]e of %livingentities%'[s] [active|current] item");
  }
};
Blockly.Blocks['lib_eff_277'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Persistent");
    this.appendValueInput("ARG1").appendField("make (jednostki) ");
    this.appendDummyInput().appendField("  persist");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPersistent :: make %entities/blocks% [:not] persist[ent]");
  }
};
Blockly.Blocks['lib_eff_278'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Eating");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" stop eating");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffEating :: make %livingentities% (:start|stop) eating");
  }
};
Blockly.Blocks['lib_eff_279'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Make Say");
    this.appendValueInput("ARG1").appendField("make (gracze) ");
    this.appendValueInput("ARG2").appendField(" say (teksty) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffMakeSay :: make %players% (say|send [the] message[s]) %strings%");
  }
};
Blockly.Blocks['lib_eff_280'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Explode Creeper");
    this.appendValueInput("ARG1").appendField("instantly explode  (żywe jednostki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffExplodeCreeper :: instantly explode [creeper[s]] %livingentities%");
  }
};
Blockly.Blocks['lib_eff_281'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Make Latanie");
    this.appendValueInput("ARG1").appendField("force (gracze) ");
    this.appendDummyInput().appendField(" do  latanie");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffMakeFly :: force %players% to [(start|1¦stop)] fly[ing]");
  }
};
Blockly.Blocks['lib_eff_282'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Niewidzialny");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["niewidzialny", "invisible"], ["nie widzialny", "not visible"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffInvisible :: make %livingentities% (invisible|not visible)");
  }
};
Blockly.Blocks['lib_eff_283'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Ignite");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["ignite", "ignite"], ["ustaw fire do", "set fire to"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (jednostki) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) na (czas trwania) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffIgnite :: (ignite|set fire to) %entities% [for %-timespan%]");
  }
};
Blockly.Blocks['lib_eff_284'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Open Book");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["open", "open"], ["show", "show"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" book (przedmiot) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["do", "to"], ["na", "for"]]), "CH2");
    this.appendValueInput("ARG2").appendField(" (gracze) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffOpenBook :: (open|show) book %itemtype% (to|for) %players%");
  }
};
Blockly.Blocks['lib_eff_285'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Clear Jednostka Storage");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["clear", "clear"], ["empty", "empty"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["stored jednostki", "stored entities"], ["jednostka storage", "entity storage"]]), "CH2");
    this.appendValueInput("ARG1").appendField(" z (bloki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffClearEntityStorage :: (clear|empty) the (stored entities|entity storage) of %blocks%");
  }
};
Blockly.Blocks['lib_eff_286'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Return");
    this.appendValueInput("ARG1").appendField("return (wartości) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffReturn :: return %objects%");
  }
};
Blockly.Blocks['lib_eff_287'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Toggle Flight");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["allow", "allow"], ["enable", "enable"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["latanie", "fly"], ["flight", "flight"]]), "CH2");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["na", "for"], ["do", "to"]]), "CH3");
    this.appendValueInput("ARG1").appendField(" (gracze) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffToggleFlight :: (allow|enable) (fly|flight) (for|to) %players%");
  }
};
Blockly.Blocks['lib_eff_288'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Komenda");
    this.appendValueInput("ARG1").appendField("   komenda (teksty) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) o (commandsenders) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffCommand :: [execute] [the] [bungee:bungee[cord]] command[s] %strings% [by %-commandsenders%]");
  }
};
Blockly.Blocks['lib_eff_289'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Strider Shivering");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" start shivering");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffStriderShivering :: make %livingentities% start shivering");
  }
};
Blockly.Blocks['lib_eff_290'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Force Atak");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendValueInput("ARG2").appendField(" atak (jednostki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffForceAttack :: make %livingentities% attack %entities%");
  }
};
Blockly.Blocks['lib_eff_291'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Equip");
    this.appendValueInput("ARG1").appendField("equip (opcjonalnie) (żywe jednostki) ");
    this.appendValueInput("ARG2").appendField(" z (przedmioty) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffEquip :: equip [%livingentities%] with %itemtypes%");
  }
};
Blockly.Blocks['lib_eff_292'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Jednostka Visibility");
    this.appendValueInput("ARG1").appendField("hide (jednostki) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z", "from"], ["na", "for"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (gracze) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffEntityVisibility :: hide %entities% [(from|for) %-players%]");
  }
};
Blockly.Blocks['lib_eff_293'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Handedness");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" right-handed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffHandedness :: make %livingentities% (:left|right)( |-)handed");
  }
};
Blockly.Blocks['lib_eff_294'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Dancing");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["start dancing", "start dancing"], ["dance", "dance"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) (kierunek) ");
    this.appendValueInput("ARG3").appendField(" (lokalizacja) ");
    this.appendValueInput("ARG4").appendField(" (opcjonalnie) czas trwania:na (czas trwania) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffDancing :: make %livingentities% (start dancing|dance) [%-direction% %-location%] [timespan:for %-timespan%]");
  }
};
Blockly.Blocks['lib_eff_295'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Feed");
    this.appendValueInput("ARG1").appendField("feed  (gracze) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) o (liczba) ");
    this.appendDummyInput().appendField(" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffFeed :: feed [the] %players% [by %-number% [beef[s]]]");
  }
};
Blockly.Blocks['lib_eff_296'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Make Jajko Hatch");
    this.appendDummyInput().appendField("make  jajko  hatch");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffMakeEggHatch :: make [the] egg [:not] hatch");
  }
};
Blockly.Blocks['lib_eff_297'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Panda On Back");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" get off ").appendField(new Blockly.FieldDropdown([["its", "its"], ["their", "their"]]), "CH1");
    this.appendDummyInput().appendField(" back");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPandaOnBack :: make %livingentities% get (:on|off) (its|their) back[s]");
  }
};
Blockly.Blocks['lib_eff_298'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Lightning");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["create", "create"], ["strike", "strike"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" lightning1¦efekt (directions) ");
    this.appendValueInput("ARG2").appendField(" (lokalizacje) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffLightning :: (create|strike) lightning(1¦[ ]effect|) %directions% %locations%");
  }
};
Blockly.Blocks['lib_eff_299'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Insert Jednostka Storage");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["dodaj", "add"], ["insert", "insert"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (żywe jednostki) ");
    this.appendDummyInput().appendField(" do  ").appendField(new Blockly.FieldDropdown([["stored jednostki", "stored entities"], ["jednostka storage", "entity storage"]]), "CH2");
    this.appendValueInput("ARG2").appendField(" z (blok) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffInsertEntityStorage :: (add|insert) %livingentities% [in[ ]]to [the] (stored entities|entity storage) of %block%");
  }
};
Blockly.Blocks['lib_eff_300'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Incendiary");
    this.appendValueInput("ARG1").appendField("make (jednostki) ");
    this.appendDummyInput().appendField("  incendiary");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffIncendiary :: make %entities% [(1¦not)] incendiary");
  }
};
Blockly.Blocks['lib_eff_301'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Toggle Może Pick Up Przedmioty");
    this.appendValueInput("ARG1").appendField("allow (żywe jednostki) ");
    this.appendDummyInput().appendField(" do pickup przedmioty");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffToggleCanPickUpItems :: allow %livingentities% to pick([ ]up items| items up)");
  }
};
Blockly.Blocks['lib_eff_302'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Wyjście");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["wyjście", "exit"], ["stop", "stop"]]), "CH1");
    this.appendDummyInput().appendField(" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffExit :: (exit|stop) [trigger]");
  }
};
Blockly.Blocks['lib_eff_303'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Pojazd");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["make", "make"], ["let", "let"], ["force", "force"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (jednostki) ");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["ride", "ride"], ["mount", "mount"]]), "CH2");
    this.appendValueInput("ARG2").appendField("  (jednostka) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffVehicle :: (make|let|force) %entities% [to] (ride|mount) [(in|on)] %entity/entitydata%");
  }
};
Blockly.Blocks['lib_eff_304'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Sprinting");
    this.appendValueInput("ARG1").appendField("make (gracze) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["start sprinting", "start sprinting"], ["sprint", "sprint"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffSprinting :: make %players% (start sprinting|sprint)");
  }
};
Blockly.Blocks['lib_eff_305'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Odtwórz Dźwięk");
    this.appendValueInput("ARG1").appendField("odtwórz dźwięk (teksty) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPlaySound :: play sound[s] %strings%");
  }
};
Blockly.Blocks['lib_eff_306'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Upuść Leash");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["force", "force"], ["allow", "allow"]]), "CH1");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["lead", "lead"], ["leash", "leash"]]), "CH2");
    this.appendDummyInput().appendField("  do upuść");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffDropLeash :: (force|allow) [the] (lead|leash) [item] to drop");
  }
};
Blockly.Blocks['lib_eff_307'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Keep Ekwipunek");
    this.appendDummyInput().appendField("keep  ").appendField(new Blockly.FieldDropdown([["ekwipunek", "inventory"], ["przedmioty", "items"]]), "CH1");
    this.appendDummyInput().appendField(" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffKeepInventory :: keep [the] (inventory|items) [(1:and [e]xp[erience][s] [point[s]])]");
  }
};
Blockly.Blocks['lib_eff_308'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Invulnerability");
    this.appendValueInput("ARG1").appendField("make (jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["invulnerable", "invulnerable"], ["invincible", "invincible"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffInvulnerability :: make %entities% (invulnerable|invincible)");
  }
};
Blockly.Blocks['lib_eff_309'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Stop Serwer");
    this.appendDummyInput().appendField("stop  serwer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffStopServer :: (stop|shut[ ]down) [the] server");
  }
};
Blockly.Blocks['lib_eff_310'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Wyślij Resource Pack");
    this.appendValueInput("ARG1").appendField("wyślij  resource pack  (tekst) ");
    this.appendValueInput("ARG2").appendField(" do (gracze) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffSendResourcePack :: send [the] resource pack [from [[the] URL]] %string% to %players%");
  }
};
Blockly.Blocks['lib_eff_311'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Pv P");
    this.appendValueInput("ARG1").appendField("enable PvP (opcjonalnie) w (światy) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPvP :: enable PvP [in %worlds%]");
  }
};
Blockly.Blocks['lib_eff_312'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Przedmiot Despawn");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["prevent", "prevent"], ["disallow", "disallow"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (itementities) ");
    this.appendDummyInput().appendField(" z ").appendField(new Blockly.FieldDropdown([["naturally despawning", "naturally despawning"], ["despawning naturally", "despawning naturally"]]), "CH2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffItemDespawn :: (prevent|disallow) %itementities% from (naturally despawning|despawning naturally)");
  }
};
Blockly.Blocks['lib_eff_313'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Sort");
    this.appendValueInput("ARG1").appendField("sort (wartości) ");
    this.appendDummyInput().appendField("  (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["o", "by"], ["based on", "based on"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (wyra enie) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffSort :: sort %~objects% [in (:descending|ascending) order] [(by|based on) <.+>]");
  }
};
Blockly.Blocks['lib_eff_314'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Lid State");
    this.appendDummyInput().appendField("open  lid ").appendField(new Blockly.FieldDropdown([["z", "of"], ["na", "for"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (bloki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffLidState :: (open|:close) [the] lid[s] (of|for) %blocks%");
  }
};
Blockly.Blocks['lib_eff_315'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Wakeup Sleep");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendValueInput("ARG2").appendField(" start sleeping (opcjonalnie) (kierunek) ");
    this.appendValueInput("ARG3").appendField(" (lokalizacja) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffWakeupSleep :: make %livingentities% (start sleeping|[go to] sleep) [%-direction% %-location%]");
  }
};
Blockly.Blocks['lib_eff_316'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Change");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["dodaj", "add"], ["daj", "give"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (wartości) ");
    this.appendValueInput("ARG2").appendField(" do (wartości) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffChange :: (add|give) %objects% to %~objects%");
  }
};
Blockly.Blocks['lib_eff_317'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Transform");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["transform", "transform"], ["map", "map"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (wartości) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["używając", "using"], ["z", "with"]]), "CH2");
    this.appendValueInput("ARG2").appendField(" (wyra enie) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffTransform :: (transform|map) %~objects% (using|with) <.+>");
  }
};
Blockly.Blocks['lib_eff_318'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Tree");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["grow", "grow"], ["create", "create"], ["generate", "generate"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" tree (opcjonalnie) z typ (treetype) ");
    this.appendValueInput("ARG2").appendField(" (directions) ");
    this.appendValueInput("ARG3").appendField(" (lokalizacje) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffTree :: (grow|create|generate) tree [of type %treetype%] %directions% %locations%");
  }
};
Blockly.Blocks['lib_eff_319'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Load Serwer Icon");
    this.appendDummyInput().appendField("load  serwer icon ").appendField(new Blockly.FieldDropdown([["z", "from"], ["z", "of"]]), "CH1");
    this.appendValueInput("ARG1").appendField("    (tekst) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffLoadServerIcon :: load [the] server icon (from|of) [the] [image] [file] %string%");
  }
};
Blockly.Blocks['lib_eff_320'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Copy");
    this.appendValueInput("ARG1").appendField("copy (wartości) ");
    this.appendValueInput("ARG2").appendField(" do (wartości) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffCopy :: copy %~objects% [in]to %~objects%");
  }
};
Blockly.Blocks['lib_eff_321'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Op");
    this.appendValueInput("ARG1").appendField("op (offlineplayers) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffOp :: [de[-]]op %offlineplayers%");
  }
};
Blockly.Blocks['lib_eff_322'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Charge");
    this.appendValueInput("ARG1").appendField("make (jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["charged", "charged"], ["powered", "powered"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffCharge :: make %entities% [un:(un|not |non[-| ])](charged|powered)");
  }
};
Blockly.Blocks['lib_eff_323'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Goat Horns");
    this.appendValueInput("ARG1").appendField("usuń  left horn z (żywe jednostki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffGoatHorns :: remove [the] (left horn[s]|right:right horn[s]|both:both horns) of %livingentities%");
  }
};
Blockly.Blocks['lib_eff_324'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Tame");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["tame", "tame"], ["domesticate", "domesticate"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (jednostki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffTame :: [:un](tame|domesticate) %entities%");
  }
};
Blockly.Blocks['lib_eff_325'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Replace");
    this.appendValueInput("ARG1").appendField("replace  (teksty) ");
    this.appendValueInput("ARG2").appendField(" w (teksty) ");
    this.appendValueInput("ARG3").appendField(" z (tekst) ");
    this.appendDummyInput().appendField(" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffReplace :: replace [(all|every)|first:[the] first] %strings% in %strings% with %string% [case:with case sensitivity]");
  }
};
Blockly.Blocks['lib_eff_326'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Log");
    this.appendValueInput("ARG1").appendField("log (teksty) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["do", "to"], ["w", "in"]]), "CH1");
    this.appendValueInput("ARG2").appendField("  (teksty) ");
    this.appendDummyInput().appendField(" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffLog :: log %strings% [(to|in) [file[s]] %-strings%] [with [the|a] severity [of] (1:warning|2:severe)]");
  }
};
Blockly.Blocks['lib_eff_327'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Enderman Teleportuj");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["randomly teleportuj", "randomly teleport"], ["teleportuj randomly", "teleport randomly"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffEndermanTeleport :: make %livingentities% (randomly teleport|teleport randomly)");
  }
};
Blockly.Blocks['lib_eff_328'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Goat Ram");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendValueInput("ARG2").appendField(" ram (żywa jednostka) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffGoatRam :: make %livingentities% ram %livingentity%");
  }
};
Blockly.Blocks['lib_eff_329'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Run");
    this.appendValueInput("ARG1").appendField("run (executable) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) arguments:z args (wartości) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffRun :: run %executable% [arguments:with arg[ument]s %-objects%]");
  }
};
Blockly.Blocks['lib_eff_330'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Kolor Przedmioty");
    this.appendValueInput("ARG1").appendField("dye (przedmioty) ");
    this.appendValueInput("ARG2").appendField(" (kolor) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffColorItems :: (dye|colo[u]r|paint) %itemtypes% %color%");
  }
};
Blockly.Blocks['lib_eff_331'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Open Ekwipunek");
    this.appendValueInput("ARG1").appendField("close (gracze) ");
    this.appendDummyInput().appendField("' ekwipunek ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffOpenInventory :: close %players%'[s] inventory [view]");
  }
};
Blockly.Blocks['lib_eff_332'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Warden Disturbance");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendValueInput("ARG2").appendField(" sense  disturbance (kierunek) ");
    this.appendValueInput("ARG3").appendField(" (lokalizacja) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffWardenDisturbance :: make %livingentities% sense [a] disturbance %direction% %location%");
  }
};
Blockly.Blocks['lib_eff_333'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Look");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["force", "force"], ["make", "make"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (żywe jednostki) ");
    this.appendDummyInput().appendField("  face ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffLook :: (force|make) %livingentities% [to] (face [towards]|look [(at|towards)])");
  }
};
Blockly.Blocks['lib_eff_334'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Anuluj Upuszcza");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["anuluj", "cancel"], ["clear", "clear"], ["usuń", "delete"]]), "CH1");
    this.appendDummyInput().appendField("  upuszcza ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffCancelDrops :: (cancel|clear|delete) [the] drops [of (items:items|xp:[e]xp[erience][s])]");
  }
};
Blockly.Blocks['lib_eff_335'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Connect");
    this.appendValueInput("ARG1").appendField("connect (gracze) ");
    this.appendValueInput("ARG2").appendField(" do   (tekst) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffConnect :: connect %players% to [proxy|bungeecord] [server] %string%");
  }
};
Blockly.Blocks['lib_eff_336'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Komenda Blok Conditional");
    this.appendValueInput("ARG1").appendField("make komenda blok (bloki) ");
    this.appendDummyInput().appendField(" conditional");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffCommandBlockConditional :: make command block[s] %blocks% [not:(un|not )]conditional");
  }
};
Blockly.Blocks['lib_eff_337'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Elytra Boost Consume");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["prevent", "prevent"], ["disallow", "disallow"]]), "CH1");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["boosting", "boosting"], ["used", "used"]]), "CH2");
    this.appendDummyInput().appendField(" fajerwerk z being consumed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffElytraBoostConsume :: (prevent|disallow) [the] (boosting|used) firework from being consumed");
  }
};
Blockly.Blocks['lib_eff_338'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Apply Bone Meal");
    this.appendValueInput("ARG1").appendField("apply (opcjonalnie) (liczba) ");
    this.appendValueInput("ARG2").appendField(" bonemeal (opcjonalnie) do (bloki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffApplyBoneMeal :: apply [%-number%] bone[ ]meal[s] [to %blocks%]");
  }
};
Blockly.Blocks['lib_eff_339'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Panda Rolling");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" start:").appendField(new Blockly.FieldDropdown([["start rolling", "start rolling"], ["roll", "roll"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPandaRolling :: make %livingentities% (start:(start rolling|roll)|stop rolling)");
  }
};
Blockly.Blocks['lib_eff_340'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Exception Debug");
    this.appendDummyInput().appendField("przyczyna exception");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffExceptionDebug :: cause exception");
  }
};
Blockly.Blocks['lib_eff_341'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Ring");
    this.appendValueInput("ARG1").appendField("ring (bloki) ");
    this.appendValueInput("ARG2").appendField("  (opcjonalnie) (kierunek) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffRing :: ring %blocks% [from [the]] [%-direction%]");
  }
};
Blockly.Blocks['lib_eff_342'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Suppress Typ Hints");
    this.appendDummyInput().appendField("suppress  typ hints");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffSuppressTypeHints :: [stop:un]suppress [local variable] type hints");
  }
};
Blockly.Blocks['lib_eff_343'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Suppress Warnings");
    this.appendDummyInput().appendField(" suppress   warning");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffSuppressWarnings :: [local[ly]] suppress [the] () warning[s]");
  }
};
Blockly.Blocks['lib_eff_344'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Anuluj Zdarzenie");
    this.appendDummyInput().appendField("anuluj  zdarzenie");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffCancelEvent :: cancel [the] event");
  }
};
Blockly.Blocks['lib_eff_345'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Delay");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["wait", "wait"], ["halt", "halt"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  (czas trwania) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("Delay :: (wait|halt) [for] %timespan%");
  }
};
Blockly.Blocks['lib_eff_346'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Zdrowie");
    this.appendValueInput("ARG1").appendField("zadaj obrażenia (żywe jednostki) ");
    this.appendValueInput("ARG2").appendField(" o (liczba) ");
    this.appendDummyInput().appendField(" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffHealth :: damage %livingentities/itemtypes/slots% by %number% [heart[s]]");
  }
};
Blockly.Blocks['lib_eff_347'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Allay Może Duplicate");
    this.appendValueInput("ARG1").appendField("allow (żywe jednostki) ");
    this.appendDummyInput().appendField(" do ").appendField(new Blockly.FieldDropdown([["duplicate", "duplicate"], ["clone", "clone"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffAllayCanDuplicate :: allow %livingentities% to (duplicate|clone)");
  }
};
Blockly.Blocks['lib_eff_348'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Release Jednostka Storage");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["release", "release"], ["evict", "evict"]]), "CH1");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["stored jednostki", "stored entities"], ["jednostka storage", "entity storage"]]), "CH2");
    this.appendValueInput("ARG1").appendField(" z (bloki) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) na (czas trwania) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffReleaseEntityStorage :: (release|evict) [the] (stored entities|entity storage) of %blocks% [for %-timespan%]");
  }
};
Blockly.Blocks['lib_eff_349'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Allay Duplicate");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["duplicate", "duplicate"], ["clone", "clone"]]), "CH1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffAllayDuplicate :: make %livingentities% (duplicate|clone)");
  }
};
Blockly.Blocks['lib_eff_350'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Hide Gracz Z Serwer List");
    this.appendValueInput("ARG1").appendField("hide (gracze) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["w", "in"], ["on", "on"], ["z", "from"]]), "CH1");
    this.appendDummyInput().appendField("  serwer list");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffHidePlayerFromServerList :: hide %players% (in|on|from) [the] server list");
  }
};
Blockly.Blocks['lib_eff_351'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Continue");
    this.appendDummyInput().appendField("continue ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffContinue :: continue [this loop|[the] [current] loop]");
  }
};
Blockly.Blocks['lib_eff_352'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Custom Nazwa");
    this.appendDummyInput().appendField("hide  ").appendField(new Blockly.FieldDropdown([["custom", "custom"], ["wyświetlacz", "display"]]), "CH1");
    this.appendValueInput("ARG1").appendField("nazwa z (jednostki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffCustomName :: (:show|hide) [the] (custom|display)[ ]name of %entities%");
  }
};
Blockly.Blocks['lib_eff_353'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Zabij");
    this.appendValueInput("ARG1").appendField("zabij (jednostki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffKill :: kill %entities%");
  }
};
Blockly.Blocks['lib_eff_354'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Świat Save");
    this.appendValueInput("ARG1").appendField("save  (światy) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffWorldSave :: save [[the] world[s]] %worlds%");
  }
};
Blockly.Blocks['lib_eff_355'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Explosion");
    this.appendDummyInput().appendField("  explosion ").appendField(new Blockly.FieldDropdown([["z", "of"], ["z", "with"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["force", "force"], ["strength", "strength"], ["power", "power"]]), "CH2");
    this.appendValueInput("ARG1").appendField(" (liczba) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) (directions) ");
    this.appendValueInput("ARG3").appendField(" (lokalizacje) ");
    this.appendDummyInput().appendField(" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffExplosion :: [(create|make)] [an] explosion (of|with) (force|strength|power) %number% [%directions% %locations%] [(1¦with fire)]");
  }
};
Blockly.Blocks['lib_eff_356'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Silence");
    this.appendValueInput("ARG1").appendField("silence (jednostki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffSilence :: silence %entities%");
  }
};
Blockly.Blocks['lib_eff_357'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Pathfind");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["pathfind", "pathfind"], ["move", "move"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" do (żywa jednostka) ");
    this.appendValueInput("ARG3").appendField(" (opcjonalnie) przy prędkość (liczba) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPathfind :: make %livingentities% (pathfind|move) to[wards] %livingentity/location% [at speed %-number%]");
  }
};
Blockly.Blocks['lib_eff_358'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Blok Update");
    this.appendValueInput("ARG1").appendField("update (bloki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["as", "as"], ["do be", "to be"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (blockdata) ");
    this.appendDummyInput().appendField(" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffBlockUpdate :: update %blocks% (as|to be) %blockdata% [physics:without [neighbo[u]r[ing]|adjacent] [physics] update[s]]");
  }
};
Blockly.Blocks['lib_eff_359'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Anuluj Odnowienie");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["anuluj", "cancel"], ["ignore", "ignore"]]), "CH1");
    this.appendDummyInput().appendField("    odnowienie");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffCancelCooldown :: (cancel|ignore) [the] [current] [command] cooldown");
  }
};
Blockly.Blocks['lib_eff_360'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Gracz Info Visibility");
    this.appendDummyInput().appendField("hide  gracz  info ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPlayerInfoVisibility :: hide [all] player [related] info[rmation] [(in|on|from) [the] server list]");
  }
};
Blockly.Blocks['lib_eff_361'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Zniszczenie Naturally");
    this.appendValueInput("ARG1").appendField("zniszczenie (bloki) ");
    this.appendValueInput("ARG2").appendField("  (opcjonalnie) używając (przedmiot) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffBreakNaturally :: break %blocks% [naturally] [using %-itemtype%]");
  }
};
Blockly.Blocks['lib_eff_362'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Playing Dead");
    this.appendValueInput("ARG1").appendField("make (żywe jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["start playing", "start playing"], ["odtwórz", "play"]]), "CH1");
    this.appendDummyInput().appendField(" dead");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffPlayingDead :: make %livingentities% (start playing|play) dead");
  }
};
Blockly.Blocks['lib_eff_363'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Odrodzenie");
    this.appendValueInput("ARG1").appendField("force (gracze) ");
    this.appendDummyInput().appendField(" do odrodzenie");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffRespawn :: force %players% to respawn");
  }
};
Blockly.Blocks['lib_eff_364'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Toggle");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["open", "open"], ["turn on", "turn on"], ["activate", "activate"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (bloki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffToggle :: (open|turn on|activate) %blocks%");
  }
};
Blockly.Blocks['lib_eff_365'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Do If");
    this.appendValueInput("ARG1").appendField("(wyra enie) ");
    this.appendValueInput("ARG2").appendField(" if (wyra enie) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffDoIf :: <.+> if <.+>");
  }
};
Blockly.Blocks['lib_eff_366'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Wyślij Blok Change");
    this.appendValueInput("ARG1").appendField("make (gracze) ");
    this.appendValueInput("ARG2").appendField(" see (lokalizacje) ");
    this.appendValueInput("ARG3").appendField(" as (przedmiot) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffSendBlockChange :: make %players% see %locations% as %itemtype/blockdata%");
  }
};
Blockly.Blocks['lib_eff_367'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Stop Dźwięk");
    this.appendValueInput("ARG1").appendField("stop all:all dźwięk (opcjonalnie) w  (soundcategory) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z playing do", "from playing to"], ["na", "for"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (gracze) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffStopSound :: stop (all:all sound[s]|sound[s] %-strings%) [(in [the]|from) %-soundcategory%] [(from playing to|for) %players%]");
  }
};
Blockly.Blocks['lib_eff_368'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Script File");
    this.appendDummyInput().appendField("1:").appendField(new Blockly.FieldDropdown([["enable", "enable"], ["load", "load"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" script  (tekst) ");
    this.appendDummyInput().appendField(" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffScriptFile :: (1:(enable|load)|2:reload|3:disable|4:unload) script [file|named] %string% [print:with errors]");
  }
};
Blockly.Blocks['lib_eff_369'] = {
  init: function() {
    this.appendDummyInput().appendField("Efekt: Detonate");
    this.appendValueInput("ARG1").appendField("detonate (jednostki) ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b5651d");
    this.setInputsInline(false);
    this.setTooltip("EffDetonate :: detonate %entities%");
  }
};
Blockly.Blocks['lib_expr_370'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Absorbed Bloki");
    this.appendDummyInput().appendField(" absorbed bloki");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAbsorbedBlocks :: [the] absorbed blocks");
  }
};
Blockly.Blocks['lib_expr_371'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Active Przedmiot");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["raised", "raised"], ["active", "active"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["tool", "tool"], ["przedmiot", "item"], ["weapon", "weapon"]]), "CH2");
    this.appendValueInput("ARG1").appendField(" z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprActiveItem :: [the] (raised|active) (tool|item|weapon) of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_372'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Affected Jednostki");
    this.appendDummyInput().appendField(" affected jednostki");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAffectedEntities :: [the] affected entities");
  }
};
Blockly.Blocks['lib_expr_373'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Age");
    this.appendValueInput("ARG1").appendField("  age z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAge :: [the] [:max[imum]] age of %blocks/entities%");
  }
};
Blockly.Blocks['lib_expr_374'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: AI");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["ai", "ai"], ["artificial intelligence", "artificial intelligence"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAI :: [the] (ai|artificial intelligence) of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_375'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Allay Jukebox");
    this.appendValueInput("ARG1").appendField(" cel jukebox z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAllayJukebox :: [the] target jukebox of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_376'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: All Banned Entries");
    this.appendDummyInput().appendField(" banned gracze");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAllBannedEntries :: [all [[of] the]|the] banned (players|ips:(ips|ip addresses))");
  }
};
Blockly.Blocks['lib_expr_377'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: All Komendy");
    this.appendDummyInput().appendField("   komendy");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAllCommands :: [(all|the|all [of] the)] [registered] [(1¦script)] commands");
  }
};
Blockly.Blocks['lib_expr_378'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: All Groups");
    this.appendDummyInput().appendField("all groups");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAllGroups :: all groups");
  }
};
Blockly.Blocks['lib_expr_379'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: All Persistent Data Keys");
    this.appendValueInput("ARG1").appendField("  data  keys z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAllPersistentDataKeys :: [all [[of] the]] [persistent] data [tag] keys of %objects%");
  }
};
Blockly.Blocks['lib_expr_380'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Alphabet List");
    this.appendValueInput("ARG1").appendField("alphabetically sorted (teksty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAlphabetList :: alphabetically sorted %strings%");
  }
};
Blockly.Blocks['lib_expr_381'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Altitude");
    this.appendValueInput("ARG1").appendField(" altitude z (lokalizacje) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAltitude :: [the] altitude[s] of %locations%");
  }
};
Blockly.Blocks['lib_expr_382'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Amount");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["amount", "amount"], ["liczba", "number"], ["size", "size"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (numbered) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAmount :: [the] (amount|number|size) of %numbered%");
  }
};
Blockly.Blocks['lib_expr_383'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Amount Z Przedmioty");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["amount", "amount"], ["liczba", "number"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (przedmioty) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["w", "in"], ["z", "of"]]), "CH2");
    this.appendValueInput("ARG2").appendField(" (ekwipunki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAmountOfItems :: [the] (amount|number) of %itemtypes% (in|of) %inventories%");
  }
};
Blockly.Blocks['lib_expr_384'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Angle");
    this.appendValueInput("ARG1").appendField("(liczba) ");
    this.appendDummyInput().appendField("  deg");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAngle :: %number% [in] deg[ree][s]");
  }
};
Blockly.Blocks['lib_expr_385'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Kowadło Napraw Koszt");
    this.appendValueInput("ARG1").appendField("    napraw koszt z (ekwipunki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAnvilRepairCost :: [the] [anvil] [item] [:max[imum]] repair cost of %inventories%");
  }
};
Blockly.Blocks['lib_expr_386'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Kowadło Tekst");
    this.appendDummyInput().appendField(" kowadło  ").appendField(new Blockly.FieldDropdown([["rename", "rename"], ["tekst", "text"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" input z (ekwipunki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAnvilText :: [the] anvil [inventory] (rename|text) input of %inventories%");
  }
};
Blockly.Blocks['lib_expr_387'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Any Z");
    this.appendValueInput("ARG1").appendField("any  z  (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAnyOf :: (any [one]|one) of [the] %objects%");
  }
};
Blockly.Blocks['lib_expr_388'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Applied Efekt");
    this.appendDummyInput().appendField(" applied  efekt");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAppliedEffect :: [the] applied [beacon] effect");
  }
};
Blockly.Blocks['lib_expr_389'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Applied Zaklęcia");
    this.appendDummyInput().appendField(" applied zaklęcies");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAppliedEnchantments :: [the] applied enchant[ment]s");
  }
};
Blockly.Blocks['lib_expr_390'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: ARGB");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["wartość", "value"], ["component", "component"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (kolory) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprARGB :: [the] (:alpha|:red|:green|:blue) (value|component) of %colors%");
  }
};
Blockly.Blocks['lib_expr_391'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Argument");
    this.appendDummyInput().appendField(" last arg");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprArgument :: [the] last arg[ument]");
  }
};
Blockly.Blocks['lib_expr_392'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Arithmetic");
    this.appendDummyInput().appendField("ConstantConditions");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprArithmetic :: ConstantConditions");
  }
};
Blockly.Blocks['lib_expr_393'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Armor Change Przedmiot");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["old", "old"], ["unequipped", "unequipped"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" armor przedmiot z (new equipped armo u r przedmiot) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprArmorChangeItem :: [the] (old|unequipped) armo[u]r item of %(new|equipped) armo[u]r item%");
  }
};
Blockly.Blocks['lib_expr_394'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Armor Slot");
    this.appendValueInput("ARG1").appendField(" (equipmentslots) ");
    this.appendValueInput("ARG2").appendField("  z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprArmorSlot :: [the] (%-*equipmentslots%|[the] armo[u]r[s]) [item:item[s]] of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_395'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Arrow Knockback Strength");
    this.appendValueInput("ARG1").appendField(" arrow knockback strength z (projectiles) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprArrowKnockbackStrength :: [the] arrow knockback strength of %projectiles%");
  }
};
Blockly.Blocks['lib_expr_396'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Arrow Pierce Poziom");
    this.appendValueInput("ARG1").appendField(" arrow pierce poziom z (projectiles) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprArrowPierceLevel :: [the] arrow pierce level of %projectiles%");
  }
};
Blockly.Blocks['lib_expr_397'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Arrows Stuck");
    this.appendValueInput("ARG1").appendField(" arrow stuck w (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprArrowsStuck :: [number of] arrow[s] stuck in %livingentities%");
  }
};
Blockly.Blocks['lib_expr_398'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Attached Blok");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["attached", "attached"], ["hit", "hit"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" blok z (projectiles) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAttachedBlock :: [the] (attached|hit) block[multiple:s] of %projectiles%");
  }
};
Blockly.Blocks['lib_expr_399'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Atak Odnowienie");
    this.appendValueInput("ARG1").appendField(" atak odnowienie z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAttackCooldown :: [the] attack cooldown of %players%");
  }
};
Blockly.Blocks['lib_expr_400'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Attacked");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["attacked", "attacked"], ["damaged", "damaged"], ["victim", "victim"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (opcjonalnie) (wyra enie) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAttacked :: [the] (attacked|damaged|victim) [<(.+)>]");
  }
};
Blockly.Blocks['lib_expr_401'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Attacker");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["attacker", "attacker"], ["damager", "damager"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprAttacker :: [the] (attacker|damager)");
  }
};
Blockly.Blocks['lib_expr_402'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Balance");
    this.appendValueInput("ARG1").appendField(" money z (offlineplayers) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBalance :: [the] (money|balance|[bank] account) of %offlineplayers%");
  }
};
Blockly.Blocks['lib_expr_403'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Banner Przedmiot");
    this.appendValueInput("ARG1").appendField(" (bannerpatterntypes) ");
    this.appendDummyInput().appendField(" przedmiot");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBannerItem :: [a[n]] %*bannerpatterntypes% item[s]");
  }
};
Blockly.Blocks['lib_expr_404'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Banner Patterns");
    this.appendValueInput("ARG1").appendField(" banner pattern z (itemstacks) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBannerPatterns :: [all [[of] the]|the] banner pattern[s] of %itemstacks/itemtypes/slots/blocks%");
  }
};
Blockly.Blocks['lib_expr_405'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Barter Upuszcza");
    this.appendDummyInput().appendField("  barter upuszcza");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBarterDrops :: [the] [piglin] barter[ing] drops");
  }
};
Blockly.Blocks['lib_expr_406'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Barter Input");
    this.appendDummyInput().appendField("  barter input");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBarterInput :: [the] [piglin] barter[ing] input");
  }
};
Blockly.Blocks['lib_expr_407'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Latarnia Efekty");
    this.appendValueInput("ARG1").appendField(" secondary  efekt z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBeaconEffects :: [the] (:primary|secondary) [beacon] effect of %blocks%");
  }
};
Blockly.Blocks['lib_expr_408'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Latarnia Range");
    this.appendValueInput("ARG1").appendField(" latarnia  range z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBeaconRange :: [the] beacon [effect] range of %blocks%");
  }
};
Blockly.Blocks['lib_expr_409'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Latarnia Tier");
    this.appendValueInput("ARG1").appendField(" latarnia tier z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBeaconTier :: [the] beacon tier of %blocks%");
  }
};
Blockly.Blocks['lib_expr_410'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Bed");
    this.appendValueInput("ARG1").appendField("  bed  z (offlineplayers) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBed :: [the] [(safe:(safe|valid)|(unsafe|invalid))] bed[s] [location[s]] of %offlineplayers%");
  }
};
Blockly.Blocks['lib_expr_411'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ul Flower");
    this.appendValueInput("ARG1").appendField(" cel flower z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBeehiveFlower :: [the] target flower of %blocks%");
  }
};
Blockly.Blocks['lib_expr_412'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ul Miód Poziom");
    this.appendValueInput("ARG1").appendField("  miód poziom z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBeehiveHoneyLevel :: [the] [max:max[imum]] honey level of %blocks%");
  }
};
Blockly.Blocks['lib_expr_413'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Biome");
    this.appendValueInput("ARG1").appendField(" biome (opcjonalnie) z (lokalizacje) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBiome :: [the] biome [(of|%direction%) %locations%]");
  }
};
Blockly.Blocks['lib_expr_414'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Blok");
    this.appendDummyInput().appendField(" blok");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBlock :: [the] [event-]block");
  }
};
Blockly.Blocks['lib_expr_415'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Blok Data");
    this.appendValueInput("ARG1").appendField(" blokdata z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBlockData :: [the] block[ ]data of %blocks/displays/entities%");
  }
};
Blockly.Blocks['lib_expr_416'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Blok Hardness");
    this.appendValueInput("ARG1").appendField("  hardness z (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBlockHardness :: [the] [block] hardness of %itemtypes%");
  }
};
Blockly.Blocks['lib_expr_417'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Bloki");
    this.appendValueInput("ARG1").appendField(" bloki (kierunek) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) (lokalizacje) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBlocks :: [(all [[of] the]|the)] blocks %direction% [%locations%]");
  }
};
Blockly.Blocks['lib_expr_418'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Bloki W Region");
    this.appendDummyInput().appendField(" bloki ").appendField(new Blockly.FieldDropdown([["w", "in"], ["z", "of"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  (regiony) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBlocksInRegion :: [(all|the)] blocks (in|of) [[the] region[s]] %regions%");
  }
};
Blockly.Blocks['lib_expr_419'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Blok Dźwięk");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["1:zniszczenie", "1:break"], ["2:fall", "2:fall"], ["3:hit", "3:hit"], ["4:postawienie", "4:place"], ["5:step", "5:step"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" dźwięk z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBlockSound :: [the] (1:break|2:fall|3:hit|4:place|5:step) sound[s] of %blocks/blockdatas/itemtypes%");
  }
};
Blockly.Blocks['lib_expr_420'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Blok Sphere");
    this.appendValueInput("ARG1").appendField(" bloki w radius (liczba) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z", "of"], ["around", "around"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (lokalizacja) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBlockSphere :: [(all [[of] the]|the)] blocks in radius %number% [(of|around) %location%]");
  }
};
Blockly.Blocks['lib_expr_421'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Book Author");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["author", "author"], ["writer", "writer"], ["publisher", "publisher"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBookAuthor :: [the] [book] (author|writer|publisher) of %itemtypes%");
  }
};
Blockly.Blocks['lib_expr_422'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Book Pages");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["pages", "pages"], ["content", "content"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBookPages :: [all [[of] the]|the] [book] (pages|content) of %itemtypes%");
  }
};
Blockly.Blocks['lib_expr_423'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Book Title");
    this.appendDummyInput().appendField(" book ").appendField(new Blockly.FieldDropdown([["nazwa", "name"], ["title", "title"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBookTitle :: [the] book (name|title) of %itemtypes%");
  }
};
Blockly.Blocks['lib_expr_424'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Boss Bar Z Jednostka");
    this.appendValueInput("ARG1").appendField(" bossbar z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBossBarFromEntity :: [the] boss[ ]bar of %entities%");
  }
};
Blockly.Blocks['lib_expr_425'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Boss Bar Z Key");
    this.appendDummyInput().appendField(" bossbar ").appendField(new Blockly.FieldDropdown([["z", "from"], ["z", "with"]]), "CH1");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["id", "id"], ["key", "key"]]), "CH2");
    this.appendValueInput("ARG1").appendField(" (teksty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBossBarFromKey :: [the] boss[ ]bar[s] (from|with) [the] (id|key)[s] %strings%");
  }
};
Blockly.Blocks['lib_expr_426'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zniszczenie Prędkość");
    this.appendValueInput("ARG1").appendField(" zniszczenie prędkość (opcjonalnie) z (bloki) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) na (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBreakSpeed :: [the] break speed[s] [of %blocks%] [for %players%]");
  }
};
Blockly.Blocks['lib_expr_427'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Breeding Family");
    this.appendDummyInput().appendField(" breeding mother");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBreedingFamily :: [the] breeding mother");
  }
};
Blockly.Blocks['lib_expr_428'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Warzenie Fuel Poziom");
    this.appendDummyInput().appendField(" warzenie  fuel ").appendField(new Blockly.FieldDropdown([["poziom", "level"], ["amount", "amount"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBrewingFuelLevel :: [the] brewing [stand] fuel (level|amount) of %blocks%");
  }
};
Blockly.Blocks['lib_expr_429'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Warzenie Results");
    this.appendDummyInput().appendField(" warzenie results");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBrewingResults :: [the] brewing results");
  }
};
Blockly.Blocks['lib_expr_430'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Warzenie Slot");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["ingredient", "ingredient"], ["fuel", "fuel"], ["mikstura", "potion"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" slot z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBrewingSlot :: [the] (ingredient|fuel|potion) slot of %blocks%");
  }
};
Blockly.Blocks['lib_expr_431'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Warzenie Czas");
    this.appendValueInput("ARG1").appendField("  warzenie czas z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBrewingTime :: [the] [current|remaining] brewing time of %blocks%");
  }
};
Blockly.Blocks['lib_expr_432'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Broadcast Wiadomość");
    this.appendDummyInput().appendField(" broadcast-wiadomość");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBroadcastMessage :: [the] broadcast(-|[ed] )message");
  }
};
Blockly.Blocks['lib_expr_433'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Brushable Przedmiot");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["brushable", "brushable"], ["buried", "buried"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" przedmiot z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprBrushableItem :: [the] (brushable|buried) item of %blocks%");
  }
};
Blockly.Blocks['lib_expr_434'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Carrying Blok Data");
    this.appendDummyInput().appendField(" carr").appendField(new Blockly.FieldDropdown([["ied", "ied"], ["ying", "ying"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" blok z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCarryingBlockData :: [the] carr(ied|ying) block[[ ]data] of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_435'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Caught Errors");
    this.appendDummyInput().appendField(" last caught  errors");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCaughtErrors :: [the] last caught [run[ ]time] errors");
  }
};
Blockly.Blocks['lib_expr_436'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Causing Jednostka");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["causing", "causing"], ["responsible", "responsible"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" jednostka z (damagesources) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCausingEntity :: [the] (causing|responsible) entity of %damagesources%");
  }
};
Blockly.Blocks['lib_expr_437'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Character Z Codepoint");
    this.appendDummyInput().appendField("character ").appendField(new Blockly.FieldDropdown([["z", "from"], ["przy", "at"], ["z", "with"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" codepoint (integer) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCharacterFromCodepoint :: character (from|at|with) code([ ]point| position) %integer%");
  }
};
Blockly.Blocks['lib_expr_438'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Characters");
    this.appendDummyInput().appendField("  characters ").appendField(new Blockly.FieldDropdown([["between", "between"], ["z", "from"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (tekst) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["i", "and"], ["do", "to"]]), "CH2");
    this.appendValueInput("ARG2").appendField(" (tekst) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCharacters :: [(all [[of] the]|the)] [:alphanumeric] characters (between|from) %string% (and|to) %string%");
  }
};
Blockly.Blocks['lib_expr_439'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Charges");
    this.appendValueInput("ARG1").appendField("  charge z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCharges :: [the] [:max[imum]] charge[s] of %blocks%");
  }
};
Blockly.Blocks['lib_expr_440'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Czat Format");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["wiadomość", "message"], ["czat", "chat"]]), "CH1");
    this.appendDummyInput().appendField(" format");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprChatFormat :: [the] (message|chat) format[ting]");
  }
};
Blockly.Blocks['lib_expr_441'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Czat Wiadomość");
    this.appendDummyInput().appendField(" wiadomość");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprChatMessage :: [the] [chat( |-)]message");
  }
};
Blockly.Blocks['lib_expr_442'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Czat Recipients");
    this.appendDummyInput().appendField(" recipients");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprChatRecipients :: [the] [chat( | -)]recipients");
  }
};
Blockly.Blocks['lib_expr_443'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Chest Ekwipunek");
    this.appendDummyInput().appendField("  chest ekwipunek ").appendField(new Blockly.FieldDropdown([["named", "named"], ["z nazwa", "with name"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (textcomponent) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) z (liczba) ");
    this.appendDummyInput().appendField(" row");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprChestInventory :: [a] [new] chest inventory (named|with name) %textcomponent% [with %-number% row[s]]");
  }
};
Blockly.Blocks['lib_expr_444'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Chunk");
    this.appendValueInput("ARG1").appendField(" chunk z (lokalizacje) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprChunk :: [(all [[of] the]|the)] chunk[s] (of|%-directions%) %locations%");
  }
};
Blockly.Blocks['lib_expr_445'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Clicked");
    this.appendDummyInput().appendField(" ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprClicked :: [the] ()");
  }
};
Blockly.Blocks['lib_expr_446'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Client View Odległość");
    this.appendValueInput("ARG1").appendField(" client view odległość z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprClientViewDistance :: [the] client view distance[s] of %players%");
  }
};
Blockly.Blocks['lib_expr_447'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Cmd Odnowienie Info");
    this.appendDummyInput().appendField(" remaining  ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCmdCooldownInfo :: [the] remaining [time] [of [the] (cooldown|wait) [(of|for) [the] [current] command]]");
  }
};
Blockly.Blocks['lib_expr_448'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Codepoint");
    this.appendValueInput("ARG1").appendField("  codepoint z (teksty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCodepoint :: [the] [unicode|character] code([ ]point| position) of %strings%");
  }
};
Blockly.Blocks['lib_expr_449'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Colored");
    this.appendValueInput("ARG1").appendField("color-(teksty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprColored :: [negated:(un|non)[-]](colo[u]r-|colo[u]red )%strings%");
  }
};
Blockly.Blocks['lib_expr_450'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Kolor Z Hex Code");
    this.appendDummyInput().appendField(" color ").appendField(new Blockly.FieldDropdown([["z", "from"], ["z", "of"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" hex code (teksty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprColorFromHexCode :: [the] colo[u]r[s] (from|of) hex[adecimal] code[s] %strings%");
  }
};
Blockly.Blocks['lib_expr_451'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Kolor Z");
    this.appendValueInput("ARG1").appendField(" color z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprColorOf :: [the] colo[u]r[s] of %blocks/itemtypes/entities/fireworkeffects/potioneffecttypes/displays/bossbars%");
  }
};
Blockly.Blocks['lib_expr_452'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Komenda");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["full", "full"], ["complete", "complete"], ["whole", "whole"]]), "CH1");
    this.appendDummyInput().appendField(" komenda");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCommand :: [the] (full|complete|whole) command");
  }
};
Blockly.Blocks['lib_expr_453'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Komenda Blok Komenda");
    this.appendValueInput("ARG1").appendField("  komenda z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCommandBlockCommand :: [the] [command[ ]block] command of %blocks/entities%");
  }
};
Blockly.Blocks['lib_expr_454'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Komenda Info");
    this.appendValueInput("ARG1").appendField(" main komenda  (opcjonalnie) z (opcjonalnie) komenda (teksty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCommandInfo :: [the] main command [label|name] [of [[the] command[s] %-strings%]]");
  }
};
Blockly.Blocks['lib_expr_455'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Komenda Nadawca");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["nadawca", "sender"], ["executor", "executor"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCommandSender :: [command['s]] (sender|executor)");
  }
};
Blockly.Blocks['lib_expr_456'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Compass Cel");
    this.appendValueInput("ARG1").appendField(" compass cel z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCompassTarget :: [the] compass target of %players%");
  }
};
Blockly.Blocks['lib_expr_457'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Config");
    this.appendDummyInput().appendField("  config");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprConfig :: [the] [skript] config");
  }
};
Blockly.Blocks['lib_expr_458'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Consumed Przedmiot");
    this.appendDummyInput().appendField(" consumed przedmiot");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprConsumedItem :: [the] consumed item");
  }
};
Blockly.Blocks['lib_expr_459'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Coordinate");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["x", "x"], ["y", "y"], ["z", "z"]]), "CH1");
    this.appendValueInput("ARG1").appendField("-coord z (lokalizacje) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCoordinate :: [the] (0¦x|1¦y|2¦z)(-| )(coord[inate]|pos[ition]|loc[ation])[s] of %locations%");
  }
};
Blockly.Blocks['lib_expr_460'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Created Zadaj obrażenia Źródło");
    this.appendDummyInput().appendField("created zadaj obrażenia źródło");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCreatedDamageSource :: created damage source");
  }
};
Blockly.Blocks['lib_expr_461'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Creeper Max Fuse Ticks");
    this.appendValueInput("ARG1").appendField("  max fuse tick z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCreeperMaxFuseTicks :: [the] [creeper] max[imum] fuse tick[s] of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_462'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Current Input Keys");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["inputs", "inputs"], ["input keys", "input keys"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCurrentInputKeys :: [the] [current] (inputs|input keys) of %players%");
  }
};
Blockly.Blocks['lib_expr_463'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Cursor Slot");
    this.appendValueInput("ARG1").appendField(" cursor slot z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCursorSlot :: [the] cursor slot of %players%");
  }
};
Blockly.Blocks['lib_expr_464'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Custom Model Data");
    this.appendValueInput("ARG1").appendField("  model data z (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprCustomModelData :: [the] [custom] model data of %itemtypes%");
  }
};
Blockly.Blocks['lib_expr_465'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zadaj obrażenia");
    this.appendDummyInput().appendField(" zadaj obrażenia");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDamage :: [the] damage");
  }
};
Blockly.Blocks['lib_expr_466'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zadaj obrażenia Przyczyna");
    this.appendDummyInput().appendField("zadaj obrażenia przyczyna");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDamageCause :: damage cause");
  }
};
Blockly.Blocks['lib_expr_467'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Damaged Przedmiot");
    this.appendValueInput("ARG1").appendField("(przedmiot) ");
    this.appendDummyInput().appendField(" z ").appendField(new Blockly.FieldDropdown([["zadaj obrażenia", "damage"], ["data", "data"]]), "CH1");
    this.appendValueInput("ARG2").appendField("  (liczba) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDamagedItem :: %itemtype% with (damage|data) [value] %number%");
  }
};
Blockly.Blocks['lib_expr_468'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zadaj obrażenia Lokalizacja");
    this.appendValueInput("ARG1").appendField(" zadaj obrażenia lokalizacja z (damagesources) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDamageLocation :: [the] damage location of %damagesources%");
  }
};
Blockly.Blocks['lib_expr_469'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zadaj obrażenia Typ");
    this.appendValueInput("ARG1").appendField(" zadaj obrażenia typ z (damagesources) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDamageType :: [the] damage type of %damagesources%");
  }
};
Blockly.Blocks['lib_expr_470'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Date Ago Later");
    this.appendValueInput("ARG1").appendField("(czas trwania) ");
    this.appendDummyInput().appendField(" ago");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDateAgoLater :: %timespan% (ago|in the past|before [the] [date] %-date%)");
  }
};
Blockly.Blocks['lib_expr_471'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Śmierć Wiadomość");
    this.appendDummyInput().appendField(" śmierć-wiadomość");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDeathMessage :: [the] death( |-)message");
  }
};
Blockly.Blocks['lib_expr_472'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Debug Info");
    this.appendValueInput("ARG1").appendField(" debug info z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDebugInfo :: [the] debug info[rmation] of %objects%");
  }
};
Blockly.Blocks['lib_expr_473'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Default Wartość");
    this.appendValueInput("ARG1").appendField("(wartości) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["otherwise", "otherwise"], ["?", "?"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDefaultValue :: %objects% (otherwise|?) %objects%");
  }
};
Blockly.Blocks['lib_expr_474'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Dequeued Queue");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["de", "de"], ["un", "un"]]), "CH1");
    this.appendValueInput("ARG1").appendField("queued (queue) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDequeuedQueue :: (de|un)queued %queue%");
  }
};
Blockly.Blocks['lib_expr_475'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Difference");
    this.appendDummyInput().appendField("difference ").appendField(new Blockly.FieldDropdown([["between", "between"], ["z", "of"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (wartość) ");
    this.appendValueInput("ARG2").appendField(" i (wartość) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDifference :: difference (between|of) %object% and %object%");
  }
};
Blockly.Blocks['lib_expr_476'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Difficulty");
    this.appendDummyInput().appendField(" difficult").appendField(new Blockly.FieldDropdown([["y", "y"], ["ies", "ies"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (światy) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDifficulty :: [the] difficult(y|ies) of %worlds%");
  }
};
Blockly.Blocks['lib_expr_477'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Direct Jednostka");
    this.appendValueInput("ARG1").appendField(" direct jednostka z (damagesources) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDirectEntity :: [the] direct entity of %damagesources%");
  }
};
Blockly.Blocks['lib_expr_478'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Kierunek");
    this.appendValueInput("ARG1").appendField("(opcjonalnie) (liczba) ");
    this.appendDummyInput().appendField("  w  ").appendField(new Blockly.FieldDropdown([["kierunek", "direction"], ["horizontal kierunek", "horizontal direction"], ["facing", "facing"], ["horizontal facing", "horizontal facing"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" z (jednostka) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDirection :: [%-number% [(block|met(er|re))[s]]] in [the] (0¦direction|1¦horizontal direction|2¦facing|3¦horizontal facing) of %entity/block%");
  }
};
Blockly.Blocks['lib_expr_479'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wyświetlacz Billboard");
    this.appendValueInput("ARG1").appendField(" billboard  z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDisplayBillboard :: [the] bill[ |-]board[ing] [setting] of %displays%");
  }
};
Blockly.Blocks['lib_expr_480'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wyświetlacz Brightness");
    this.appendValueInput("ARG1").appendField("  light  override z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDisplayBrightness :: [the] [:block|:sky] (light [level]|brightness) override[s] of %displays%");
  }
};
Blockly.Blocks['lib_expr_481'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wyświetlacz Glow Override");
    this.appendValueInput("ARG1").appendField(" glow color override z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDisplayGlowOverride :: [the] glow[ing] colo[u]r[s] override[s] of %displays%");
  }
};
Blockly.Blocks['lib_expr_482'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wyświetlacz Height Width");
    this.appendValueInput("ARG1").appendField(" wyświetlacz width z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDisplayHeightWidth :: [the] display (:height|width) of %displays%");
  }
};
Blockly.Blocks['lib_expr_483'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wyświetlacz Interpolation");
    this.appendValueInput("ARG1").appendField(" interpolation czas trwania z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDisplayInterpolation :: [the] interpolation (:delay|duration)[s] of %displays%");
  }
};
Blockly.Blocks['lib_expr_484'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wyświetlacz Shadow");
    this.appendValueInput("ARG1").appendField(" shadow strength z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDisplayShadow :: [the] shadow (:radius|strength) of %displays%");
  }
};
Blockly.Blocks['lib_expr_485'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wyświetlacz Teleportuj Czas trwania");
    this.appendValueInput("ARG1").appendField(" teleportuj czas trwania z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDisplayTeleportDuration :: [the] teleport[ation] duration[s] of %displays%");
  }
};
Blockly.Blocks['lib_expr_486'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wyświetlacz Transformation Rotation");
    this.appendValueInput("ARG1").appendField(" right  rotation z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDisplayTransformationRotation :: [the] (:left|right) [transformation] rotation of %displays%");
  }
};
Blockly.Blocks['lib_expr_487'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wyświetlacz Transformation Skala Przesunięcie");
    this.appendValueInput("ARG1").appendField(" wyświetlacz przesunięcie z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDisplayTransformationScaleTranslation :: [the] (display|[display] transformation) (:scale|translation) of %displays%");
  }
};
Blockly.Blocks['lib_expr_488'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wyświetlacz View Range");
    this.appendDummyInput().appendField("  view ").appendField(new Blockly.FieldDropdown([["range", "range"], ["radius", "radius"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDisplayViewRange :: [the] [display] view (range|radius) of %displays%");
  }
};
Blockly.Blocks['lib_expr_489'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Odległość");
    this.appendValueInput("ARG1").appendField(" odległość between (lokalizacja) ");
    this.appendValueInput("ARG2").appendField(" i (lokalizacja) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDistance :: [the] distance between %location% and %location%");
  }
};
Blockly.Blocks['lib_expr_490'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Domestication");
    this.appendValueInput("ARG1").appendField("  domestication poziom z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDomestication :: [the] [:max[imum]] domestication level of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_491'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Upuszcza");
    this.appendDummyInput().appendField(" upuszcza");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDrops :: [the] drops");
  }
};
Blockly.Blocks['lib_expr_492'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Upuszcza Z Blok");
    this.appendValueInput("ARG1").appendField(" upuszcza z (bloki) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["używając", "using"], ["z", "with"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (przedmiot) ");
    this.appendValueInput("ARG3").appendField(" (opcjonalnie) 1¦as (jednostka) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDropsOfBlock :: [(all|the|all [of] the)] drops of %blocks% [(using|with) %-itemtype% [(1¦as %-entity%)]]");
  }
};
Blockly.Blocks['lib_expr_493'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Duplicate Odnowienie");
    this.appendDummyInput().appendField(" duplicat").appendField(new Blockly.FieldDropdown([["e", "e"], ["ing", "ing"], ["ion", "ion"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" cooldown  z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDuplicateCooldown :: [the] (duplicat(e|ing|ion)|clon(e|ing)) cool[ ]down [time] of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_494'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Durability");
    this.appendValueInput("ARG1").appendField(" zadaj obrażenia  z (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDurability :: [the] (damage[s] [value[s]]|1:durabilit(y|ies)) of %itemtypes/itemstacks/slots%");
  }
};
Blockly.Blocks['lib_expr_495'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Dusted Stage");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["dust", "dust"], ["brush", "brush"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" wartość z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprDustedStage :: [the] [:max[imum]] (dust|brush)[ed|ing] (value|stage|progress[ion]) of %blocks/blockdatas%");
  }
};
Blockly.Blocks['lib_expr_496'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Jajko");
    this.appendDummyInput().appendField(" jajko");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEgg :: [thrown] egg");
  }
};
Blockly.Blocks['lib_expr_497'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Element");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["first", "first"], ["1:last", "1:last"]]), "CH1");
    this.appendDummyInput().appendField(" element  ").appendField(new Blockly.FieldDropdown([["z", "of"], ["w", "in"]]), "CH2");
    this.appendValueInput("ARG1").appendField(" (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprElement :: [the] (first|1:last) element [out] (of|in) %objects%");
  }
};
Blockly.Blocks['lib_expr_498'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Enchanting Exp Koszt");
    this.appendDummyInput().appendField("  xp koszt");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEnchantingExpCost :: [the] [displayed] ([e]xp[erience]|enchanting) cost");
  }
};
Blockly.Blocks['lib_expr_499'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zaklęcie Przedmiot");
    this.appendDummyInput().appendField(" zaklęcie przedmiot");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEnchantItem :: [the] enchant[:ed] item");
  }
};
Blockly.Blocks['lib_expr_500'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zaklęcie Bonus");
    this.appendDummyInput().appendField(" zaklęcie bonus");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEnchantmentBonus :: [the] enchant[ment] bonus");
  }
};
Blockly.Blocks['lib_expr_501'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zaklęcie Hint");
    this.appendDummyInput().appendField(" zaklęcie hint");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEnchantmentHint :: [the] enchant[ment] hint");
  }
};
Blockly.Blocks['lib_expr_502'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zaklęcie Poziom");
    this.appendValueInput("ARG1").appendField("  poziom z (zaklęcia) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["on", "on"], ["z", "of"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEnchantmentLevel :: [the] [enchant[ment]] level[s] of %enchantments% (on|of) %itemtypes%");
  }
};
Blockly.Blocks['lib_expr_503'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zaklęcie Offer");
    this.appendDummyInput().appendField(" zaklęcie offers");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEnchantmentOffer :: [all [[of] the]|the] enchant[ment] offers");
  }
};
Blockly.Blocks['lib_expr_504'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zaklęcie Offer Koszt");
    this.appendValueInput("ARG1").appendField("  koszt z (enchantmentoffers) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEnchantmentOfferCost :: [the] [enchant[ment]] cost of %enchantmentoffers%");
  }
};
Blockly.Blocks['lib_expr_505'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zaklęcia");
    this.appendValueInput("ARG1").appendField(" zaklęcia z (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEnchantments :: [the] enchantments of %itemtypes%");
  }
};
Blockly.Blocks['lib_expr_506'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ender Chest");
    this.appendValueInput("ARG1").appendField(" enderchest z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEnderChest :: [the] ender[ ]chest[s] of %players%");
  }
};
Blockly.Blocks['lib_expr_507'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Jednostki");
    this.appendValueInput("ARG1").appendField(" (entitydatas) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["w", "in"], ["z", "of"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" świat (światy) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEntities :: [(all [[of] the]|the)] %*entitydatas% [(in|of) (world[s] %-worlds%|1:%-worlds/chunks%)]");
  }
};
Blockly.Blocks['lib_expr_508'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Jednostka");
    this.appendValueInput("ARG1").appendField(" (wyra enie) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEntity :: [the] [event-]<.+>");
  }
};
Blockly.Blocks['lib_expr_509'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Jednostka Attribute");
    this.appendValueInput("ARG1").appendField(" (attributetype) ");
    this.appendValueInput("ARG2").appendField("  attribute  z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEntityAttribute :: [the] %attributetype% [(1:(total|final|modified))] attribute [value] of %entities%");
  }
};
Blockly.Blocks['lib_expr_510'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Jednostka Przedmiot Use Czas");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["przedmiot", "item"], ["tool", "tool"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" use czas z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEntityItemUseTime :: [the] [elapsed|:remaining] (item|tool) us[ag]e time of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_511'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Jednostka Owner");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["owner", "owner"], ["tamer", "tamer"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEntityOwner :: [the] (owner|tamer) of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_512'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Jednostka Size");
    this.appendValueInput("ARG1").appendField(" jednostka size z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEntitySize :: [the] entity size of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_513'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Jednostka Snapshot");
    this.appendValueInput("ARG1").appendField(" jednostka snapshot z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEntitySnapshot :: [the] entity snapshot of %entities/entitydatas%");
  }
};
Blockly.Blocks['lib_expr_514'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Jednostka Dźwięk");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["zadaj obrażenia", "damage"], ["hurt", "hurt"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" dźwięk z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEntitySound :: [the] (damage|hurt) sound[s] of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_515'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Jednostka Storage Jednostka Count");
    this.appendValueInput("ARG1").appendField("   jednostka count z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEntityStorageEntityCount :: [the] [max:max[imum]] [stored] entity count of %blocks%");
  }
};
Blockly.Blocks['lib_expr_516'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Equip Comp Camera Overlay");
    this.appendValueInput("ARG1").appendField(" camera overlay z (equippablecomponents) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEquipCompCameraOverlay :: [the] camera overlay of %equippablecomponents%");
  }
};
Blockly.Blocks['lib_expr_517'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Equip Comp Jednostki");
    this.appendValueInput("ARG1").appendField(" allowed jednostki z (equippablecomponents) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEquipCompEntities :: [the] allowed entities of %equippablecomponents%");
  }
};
Blockly.Blocks['lib_expr_518'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Equip Comp Equip Dźwięk");
    this.appendValueInput("ARG1").appendField(" equip dźwięk z (equippablecomponents) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEquipCompEquipSound :: [the] equip sound of %equippablecomponents%");
  }
};
Blockly.Blocks['lib_expr_519'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Equip Comp Model");
    this.appendDummyInput().appendField(" equipped ").appendField(new Blockly.FieldDropdown([["model", "model"], ["asset", "asset"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["key", "key"], ["id", "id"]]), "CH2");
    this.appendValueInput("ARG1").appendField(" z (equippablecomponents) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEquipCompModel :: [the] equipped (model|asset) (key|id) of %equippablecomponents%");
  }
};
Blockly.Blocks['lib_expr_520'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Equip Comp Shear Dźwięk");
    this.appendValueInput("ARG1").appendField(" shear dźwięk z (equippablecomponents) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEquipCompShearSound :: [the] shear[ed [off]] sound of %equippablecomponents%");
  }
};
Blockly.Blocks['lib_expr_521'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Equip Comp Slot");
    this.appendValueInput("ARG1").appendField(" equipment slot z (equippablecomponents) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEquipCompSlot :: [the] equipment slot of %equippablecomponents%");
  }
};
Blockly.Blocks['lib_expr_522'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Equippable Component");
    this.appendValueInput("ARG1").appendField(" equippable component z (sloty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEquippableComponent :: [the] equippable component[s] of %slots/itemtypes%");
  }
};
Blockly.Blocks['lib_expr_523'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zdarzenie Expression");
    this.appendValueInput("ARG1").appendField(" zdarzenie-(wyra enie) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEventExpression :: [the] event-<.+>");
  }
};
Blockly.Blocks['lib_expr_524'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Evt Initiator");
    this.appendDummyInput().appendField(" initiator");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEvtInitiator :: [the] [event-]initiator[( |-)inventory]");
  }
};
Blockly.Blocks['lib_expr_525'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Exact Przedmiot");
    this.appendValueInput("ARG1").appendField(" exact przedmiot z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprExactItem :: [the] exact item[s] of %blocks%");
  }
};
Blockly.Blocks['lib_expr_526'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Except");
    this.appendValueInput("ARG1").appendField("(wartości) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["except", "except"], ["excluding", "excluding"], ["nie including", "not including"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprExcept :: %objects% (except|excluding|not including) %objects%");
  }
};
Blockly.Blocks['lib_expr_527'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Exhaustion");
    this.appendValueInput("ARG1").appendField(" exhaustion z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprExhaustion :: [the] exhaustion of %players%");
  }
};
Blockly.Blocks['lib_expr_528'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Doświadczenie");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["spawned", "spawned"], ["dropped", "dropped"]]), "CH1");
    this.appendDummyInput().appendField(" xp ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprExperience :: [the] (spawned|dropped|) [e]xp[erience] [orb[s]]");
  }
};
Blockly.Blocks['lib_expr_529'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Doświadczenie Odnowienie");
    this.appendValueInput("ARG1").appendField(" doświadczenie  odnowienie z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprExperienceCooldown :: [the] (experience|[e]xp) [pickup|collection] cooldown of %players%");
  }
};
Blockly.Blocks['lib_expr_530'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Doświadczenie Odnowienie Change Powód");
    this.appendDummyInput().appendField("doświadczenie odnowienie change ").appendField(new Blockly.FieldDropdown([["powód", "reason"], ["przyczyna", "cause"], ["typ", "type"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprExperienceCooldownChangeReason :: (experience|[e]xp) cooldown change (reason|cause|type)");
  }
};
Blockly.Blocks['lib_expr_531'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Exploded Bloki");
    this.appendDummyInput().appendField(" exploded bloki");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprExplodedBlocks :: [the] exploded blocks");
  }
};
Blockly.Blocks['lib_expr_532'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Explosion Blok Yield");
    this.appendDummyInput().appendField("  blok ").appendField(new Blockly.FieldDropdown([["yield", "yield"], ["amount", "amount"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprExplosionBlockYield :: [the] [explosion['s]] block (yield|amount)");
  }
};
Blockly.Blocks['lib_expr_533'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Explosion Yield");
    this.appendDummyInput().appendField(" explosion ").appendField(new Blockly.FieldDropdown([["yield", "yield"], ["radius", "radius"], ["size", "size"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprExplosionYield :: [the] explosion (yield|radius|size)");
  }
};
Blockly.Blocks['lib_expr_534'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Explosive Yield");
    this.appendDummyInput().appendField(" explosive ").appendField(new Blockly.FieldDropdown([["yield", "yield"], ["radius", "radius"], ["size", "size"], ["power", "power"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprExplosiveYield :: [the] explosive (yield|radius|size|power) of %entities%");
  }
};
Blockly.Blocks['lib_expr_535'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Eye Lokalizacja");
    this.appendValueInput("ARG1").appendField(" head  z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprEyeLocation :: [the] (head|eye[s]) [location[s]] of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_536'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Facing");
    this.appendValueInput("ARG1").appendField(" horizontal facing z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFacing :: [the] (1¦horizontal|) facing of %livingentities/blocks%");
  }
};
Blockly.Blocks['lib_expr_537'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Fall Odległość");
    this.appendDummyInput().appendField(" fall ").appendField(new Blockly.FieldDropdown([["odległość", "distance"], ["height", "height"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFallDistance :: [the] fall[en] (distance|height) of %entities%");
  }
};
Blockly.Blocks['lib_expr_538'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Fertilized Bloki");
    this.appendDummyInput().appendField("  fertilized bloki");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFertilizedBlocks :: [all] [the] fertilized blocks");
  }
};
Blockly.Blocks['lib_expr_539'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Filter");
    this.appendValueInput("ARG1").appendField("(wartości) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["where", "where"], ["that match", "that match"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" \\(opcjonalnie) (wyra enie) ");
    this.appendDummyInput().appendField("\\");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFilter :: %objects% (where|that match) \\[<.+>\\]");
  }
};
Blockly.Blocks['lib_expr_540'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Final Zadaj obrażenia");
    this.appendDummyInput().appendField(" final zadaj obrażenia");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFinalDamage :: [the] final damage");
  }
};
Blockly.Blocks['lib_expr_541'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Fire Ticks");
    this.appendDummyInput().appendField("  burn ").appendField(new Blockly.FieldDropdown([["czas", "time"], ["czas trwania", "duration"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFireTicks :: [the] [:max[imum]] (burn[ing]|fire) (time|duration) of %entities%");
  }
};
Blockly.Blocks['lib_expr_542'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Fajerwerk Efekt");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["flickering", "flickering"], ["trailing", "trailing"], ["flickering trailing", "flickering trailing"], ["trailing flickering", "trailing flickering"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (fireworktype) ");
    this.appendValueInput("ARG2").appendField("  colored (kolory) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFireworkEffect :: (1¦|2¦flickering|3¦trailing|4¦flickering trailing|5¦trailing flickering) %fireworktype% [firework [effect]] colo[u]red %colors%");
  }
};
Blockly.Blocks['lib_expr_543'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: First Empty Slot");
    this.appendValueInput("ARG1").appendField(" first empty slot w (ekwipunki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFirstEmptySlot :: [the] first empty slot[s] in %inventories%");
  }
};
Blockly.Blocks['lib_expr_544'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Fishing Approach Angle");
    this.appendDummyInput().appendField("min:min fish approach angle");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFishingApproachAngle :: (min:min[imum]|max[imum]) fish[ing] approach[ing] angle");
  }
};
Blockly.Blocks['lib_expr_545'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Fishing Bite Czas");
    this.appendDummyInput().appendField("fish bit").appendField(new Blockly.FieldDropdown([["e", "e"], ["ing", "ing"]]), "CH1");
    this.appendDummyInput().appendField("  czas");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFishingBiteTime :: fish[ing] bit(e|ing) [wait] time");
  }
};
Blockly.Blocks['lib_expr_546'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Fishing Hook");
    this.appendDummyInput().appendField("fish ").appendField(new Blockly.FieldDropdown([["hook", "hook"], ["bobber", "bobber"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFishingHook :: fish[ing] (hook|bobber)");
  }
};
Blockly.Blocks['lib_expr_547'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Fishing Hook Jednostka");
    this.appendDummyInput().appendField(" hook jednostka");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFishingHookEntity :: [the] hook[ed] entity");
  }
};
Blockly.Blocks['lib_expr_548'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Fishing Wait Czas");
    this.appendDummyInput().appendField("min:min fish wait czas");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFishingWaitTime :: (min:min[imum]|max[imum]) fish[ing] wait[ing] time");
  }
};
Blockly.Blocks['lib_expr_549'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Flight Tryb");
    this.appendDummyInput().appendField(" fly ").appendField(new Blockly.FieldDropdown([["tryb", "mode"], ["state", "state"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFlightMode :: [the] fl(y[ing]|ight) (mode|state) of %players%");
  }
};
Blockly.Blocks['lib_expr_550'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Food Exhaustion");
    this.appendValueInput("ARG1").appendField(" food exhaustion z (damagesources) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFoodExhaustion :: [the] food exhaustion of %damagesources%");
  }
};
Blockly.Blocks['lib_expr_551'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Food Poziom");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["food", "food"], ["hunger", "hunger"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (opcjonalnie) z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFoodLevel :: [the] (food|hunger)[[ ](level|met(er|re)|bar)] [of %players%]");
  }
};
Blockly.Blocks['lib_expr_552'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Format Date");
    this.appendValueInput("ARG1").appendField("(dates) ");
    this.appendDummyInput().appendField(" formatted  (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z", "with"], ["as", "as"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (tekst) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFormatDate :: %dates% formatted [human-readable] [(with|as) %-string%]");
  }
};
Blockly.Blocks['lib_expr_553'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Freeze Ticks");
    this.appendValueInput("ARG1").appendField(" freeze czas z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFreezeTicks :: [the] freeze time of %entities%");
  }
};
Blockly.Blocks['lib_expr_554'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Z UUID");
    this.appendValueInput("ARG1").appendField("gracz z (uuids) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFromUUID :: [:offline[ ]]player[s] from %uuids%");
  }
};
Blockly.Blocks['lib_expr_555'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Funkcja");
    this.appendValueInput("ARG1").appendField(" funkcja  (tekst) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["w", "in"], ["z", "from"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (script) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFunction :: [the|a] function [named] %string% [(in|from) %-script%]");
  }
};
Blockly.Blocks['lib_expr_556'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Piec Zdarzenie Przedmioty");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["fuel", "fuel"], ["smelted", "smelted"], ["result", "result"]]), "CH1");
    this.appendDummyInput().appendField(" przedmiot");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFurnaceEventItems :: [the] (fuel|smelted|result) item");
  }
};
Blockly.Blocks['lib_expr_557'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Piec Slot");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["fuel", "fuel"], ["input", "input"], ["result", "result"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" slot z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFurnaceSlot :: [the] (fuel|input|result) slot of %blocks%");
  }
};
Blockly.Blocks['lib_expr_558'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Piec Czas");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["cook", "cook"], ["burn", "burn"], ["fuel", "fuel"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" czas z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprFurnaceTime :: [the] (cook|burn|fuel) time of %blocks%");
  }
};
Blockly.Blocks['lib_expr_559'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Game Efekt Z Data");
    this.appendDummyInput().appendField("Could nie obtain required data na ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprGameEffectWithData :: Could not obtain required data for ");
  }
};
Blockly.Blocks['lib_expr_560'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Game Tryb");
    this.appendValueInput("ARG1").appendField(" gametryb z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprGameMode :: [the] game[ ]mode of %players%");
  }
};
Blockly.Blocks['lib_expr_561'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Game Rule");
    this.appendValueInput("ARG1").appendField(" gamerule (gamerule) ");
    this.appendValueInput("ARG2").appendField(" z (światy) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprGameRule :: [the] gamerule %gamerule% of %worlds%");
  }
};
Blockly.Blocks['lib_expr_562'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Gliding State");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["gliding", "gliding"], ["glider", "glider"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprGlidingState :: [the] (gliding|glider) [state] of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_563'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Glowing");
    this.appendValueInput("ARG1").appendField(" glowing z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprGlowing :: [the] glowing of %entities%");
  }
};
Blockly.Blocks['lib_expr_564'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Gravity");
    this.appendValueInput("ARG1").appendField(" gravity z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprGravity :: [the] gravity of %entities%");
  }
};
Blockly.Blocks['lib_expr_565'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Group");
    this.appendValueInput("ARG1").appendField(" group z (offlineplayers) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprGroup :: [the] group[plural:s] of %offlineplayers%");
  }
};
Blockly.Blocks['lib_expr_566'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Hanging");
    this.appendDummyInput().appendField(" hanging jednostka");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHanging :: [the] hanging (entity|:remover)");
  }
};
Blockly.Blocks['lib_expr_567'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Hash");
    this.appendValueInput("ARG1").appendField("(teksty) ");
    this.appendDummyInput().appendField(" hash z :").appendField(new Blockly.FieldDropdown([["MD5", "MD5"], ["SHA-256", "SHA-256"], ["SHA-384", "SHA-384"], ["SHA-512", "SHA-512"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHash :: %strings% hash[ed] with (:(MD5|SHA-256|SHA-384|SHA-512))");
  }
};
Blockly.Blocks['lib_expr_568'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Hatching Liczba");
    this.appendDummyInput().appendField(" hatching liczba");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHatchingNumber :: [the] hatching number");
  }
};
Blockly.Blocks['lib_expr_569'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Hatching Typ");
    this.appendDummyInput().appendField(" hatching jednostka ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHatchingType :: [the] hatching entity [type]");
  }
};
Blockly.Blocks['lib_expr_570'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ulecz Amount");
    this.appendDummyInput().appendField(" ulecz amount");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHealAmount :: [the] heal[ing] amount");
  }
};
Blockly.Blocks['lib_expr_571'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ulecz Powód");
    this.appendDummyInput().appendField("regen ").appendField(new Blockly.FieldDropdown([["powód", "reason"], ["przyczyna", "cause"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHealReason :: (regen|health regain|heal[ing]) (reason|cause)");
  }
};
Blockly.Blocks['lib_expr_572'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Zdrowie");
    this.appendValueInput("ARG1").appendField(" zdrowie z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHealth :: [the] health of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_573'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Hex Code");
    this.appendValueInput("ARG1").appendField(" hex code z (kolory) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHexCode :: [the] hex[adecimal] code of %colors%");
  }
};
Blockly.Blocks['lib_expr_574'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Hidden Gracze");
    this.appendDummyInput().appendField(" hidden gracze ").appendField(new Blockly.FieldDropdown([["z", "of"], ["na", "for"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHiddenPlayers :: [(all [[of] the]|the)] hidden players (of|for) %players%");
  }
};
Blockly.Blocks['lib_expr_575'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Hostname");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["host", "host"], ["domain", "domain"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHostname :: [the] (host|domain)[ ][name]");
  }
};
Blockly.Blocks['lib_expr_576'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Hotbar Button");
    this.appendDummyInput().appendField(" hotbar button");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHotbarButton :: [the] hotbar button");
  }
};
Blockly.Blocks['lib_expr_577'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Hotbar Slot");
    this.appendValueInput("ARG1").appendField("  hotbar slot z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHotbarSlot :: [the] [([current:currently] selected|current:current)] hotbar slot[s] of %players%");
  }
};
Blockly.Blocks['lib_expr_578'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Hover List");
    this.appendDummyInput().appendField("   ").appendField(new Blockly.FieldDropdown([["hover", "hover"], ["sample", "sample"]]), "CH1");
    this.appendDummyInput().appendField("  list");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHoverList :: [the] [custom] [player|server] (hover|sample) ([message] list|message)");
  }
};
Blockly.Blocks['lib_expr_579'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Humidity");
    this.appendDummyInput().appendField(" humidit").appendField(new Blockly.FieldDropdown([["y", "y"], ["ies", "ies"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprHumidity :: [the] humidit(y|ies) of %blocks%");
  }
};
Blockly.Blocks['lib_expr_580'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Indices");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["indexes", "indexes"], ["indices", "indices"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprIndices :: [(the|all [[of] the])] (indexes|indices) of %~objects%");
  }
};
Blockly.Blocks['lib_expr_581'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Indices Z Wartość");
    this.appendValueInput("ARG1").appendField("  position z  (teksty) ");
    this.appendValueInput("ARG2").appendField(" w (tekst) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprIndicesOfValue :: [the] [1:first|2:last|3:all] (position[mult:s]|mult:indices|index[mult:es]) of [[the] value] %strings% in %string%");
  }
};
Blockly.Blocks['lib_expr_582'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Input");
    this.appendDummyInput().appendField("input");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprInput :: input");
  }
};
Blockly.Blocks['lib_expr_583'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Interaction Dimensions");
    this.appendValueInput("ARG1").appendField(" interaction height z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprInteractionDimensions :: [the] interaction (height|:width)[s] of %entities%");
  }
};
Blockly.Blocks['lib_expr_584'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ekwipunek");
    this.appendDummyInput().appendField(" inventor").appendField(new Blockly.FieldDropdown([["y", "y"], ["ies", "ies"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (inventoryholders) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprInventory :: [the] inventor(y|ies) of %inventoryholders/itemtypes%");
  }
};
Blockly.Blocks['lib_expr_585'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ekwipunek Action");
    this.appendDummyInput().appendField("ekwipunek action");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprInventoryAction :: inventory action");
  }
};
Blockly.Blocks['lib_expr_586'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ekwipunek Close Powód");
    this.appendDummyInput().appendField(" ekwipunek clos").appendField(new Blockly.FieldDropdown([["e", "e"], ["ing", "ing"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["powód", "reason"], ["przyczyna", "cause"]]), "CH2");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprInventoryCloseReason :: [the] inventory clos(e|ing) (reason|cause)");
  }
};
Blockly.Blocks['lib_expr_587'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ekwipunek Info");
    this.appendValueInput("ARG1").appendField("¦holder z (ekwipunki) ");
    this.appendValueInput("ARG2").appendField("(ekwipunki) ");
    this.appendDummyInput().appendField("' ¦holder");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprInventoryInfo :: (¦holder[s]|¦[amount of] rows|¦[amount of] slots) of %inventories%%inventories%'[s] (¦holder[s]|¦[amount of] rows|¦[amount of] slots)");
  }
};
Blockly.Blocks['lib_expr_588'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ekwipunek Slot");
    this.appendValueInput("ARG1").appendField(" slot (liczby) ");
    this.appendValueInput("ARG2").appendField(" z (ekwipunek) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprInventorySlot :: [the] slot[s] %numbers% of %inventory%");
  }
};
Blockly.Blocks['lib_expr_589'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Inverse");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["inverse", "inverse"], ["opposite", "opposite"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (booleans) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprInverse :: [the] (inverse|opposite)[s] of %booleans%");
  }
};
Blockly.Blocks['lib_expr_590'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: IP");
    this.appendValueInput("ARG1").appendField("IP z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprIP :: IP[s][( |-)address[es]] of %players%");
  }
};
Blockly.Blocks['lib_expr_591'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmiot");
    this.appendDummyInput().appendField("przedmiot");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItem :: item");
  }
};
Blockly.Blocks['lib_expr_592'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmiot Amount");
    this.appendDummyInput().appendField(" przedmiot ").appendField(new Blockly.FieldDropdown([["amount", "amount"], ["size", "size"], ["liczba", "number"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (sloty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItemAmount :: [the] item[[ ]stack] (amount|size|number) of %slots/itemtypes/itemstacks%");
  }
};
Blockly.Blocks['lib_expr_593'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmiot Comp Copy");
    this.appendValueInput("ARG1").appendField("  component copy z (itemcomponents) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItemCompCopy :: [the|a[n]] [item] component copy of %itemcomponents%");
  }
};
Blockly.Blocks['lib_expr_594'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmiot Odnowienie");
    this.appendValueInput("ARG1").appendField("  odnowienie z (przedmioty) ");
    this.appendValueInput("ARG2").appendField(" na (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItemCooldown :: [the] [item] cooldown of %itemtypes% for %players%");
  }
};
Blockly.Blocks['lib_expr_595'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmiot Wyświetlacz Transform");
    this.appendValueInput("ARG1").appendField(" przedmiot  transform z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItemDisplayTransform :: [the] item [display] transform of %displays%");
  }
};
Blockly.Blocks['lib_expr_596'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmiot Flagi");
    this.appendValueInput("ARG1").appendField(" przedmiot flagi z (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItemFlags :: [the] item flags of %itemtypes%");
  }
};
Blockly.Blocks['lib_expr_597'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmiot Z Jednostka");
    this.appendValueInput("ARG1").appendField(" przedmiot  z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItemOfEntity :: [the] item [inside] of %entities%");
  }
};
Blockly.Blocks['lib_expr_598'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmiot Owner");
    this.appendValueInput("ARG1").appendField(" uuid z   przedmiot owner (opcjonalnie) z (itementities) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItemOwner :: [the] uuid of [the] [dropped] item owner [of %itementities%]");
  }
};
Blockly.Blocks['lib_expr_599'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmioty");
    this.appendDummyInput().appendField(" bloks");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItems :: [all [[of] the]|the] block[[ ]type]s");
  }
};
Blockly.Blocks['lib_expr_600'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmioty W");
    this.appendValueInput("ARG1").appendField(" przedmioty w  (ekwipunki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItemsIn :: [all [[of] the]] items ([with]in|of|contained in|out of) [1:inventor(y|ies)] %inventories%");
  }
};
Blockly.Blocks['lib_expr_601'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmiot Thrower");
    this.appendValueInput("ARG1").appendField(" uuid z   przedmiot thrower (opcjonalnie) z (itementities) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItemThrower :: [the] uuid of [the] [dropped] item thrower [of %itementities%]");
  }
};
Blockly.Blocks['lib_expr_602'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmiot Z Custom Model Data");
    this.appendValueInput("ARG1").appendField("(przedmiot) ");
    this.appendValueInput("ARG2").appendField(" z  model data (liczby) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItemWithCustomModelData :: %itemtype% with [custom] model data %numbers/booleans/strings/colors%");
  }
};
Blockly.Blocks['lib_expr_603'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmiot Z Zaklęcie Glint");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" z  glint");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItemWithEnchantmentGlint :: %itemtypes% with[:out] [enchant[ment]] glint");
  }
};
Blockly.Blocks['lib_expr_604'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Przedmiot Z Tooltip");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendDummyInput().appendField(" z  tooltip");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprItemWithTooltip :: %itemtypes% with[:out] [entire|:additional] tool[ ]tip[s]");
  }
};
Blockly.Blocks['lib_expr_605'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Dołączenie Wiadomość");
    this.appendDummyInput().appendField(" dołączenie-wiadomość");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprJoinMessage :: [the] (join|log[ ]in)( |-)message");
  }
};
Blockly.Blocks['lib_expr_606'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Dołączenie Split");
    this.appendValueInput("ARG1").appendField("concat (teksty) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z", "with"], ["używając", "using"], ["o", "by"]]), "CH1");
    this.appendValueInput("ARG2").appendField("  (tekst) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprJoinSplit :: (concat[enate]|join) %strings% [(with|using|by) [[the] delimiter] %-string%]");
  }
};
Blockly.Blocks['lib_expr_607'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Keyed");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["keyed", "keyed"], ["indexed", "indexed"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprKeyed :: (keyed|indexed) %~objects%");
  }
};
Blockly.Blocks['lib_expr_608'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Key Z Boss Bar");
    this.appendDummyInput().appendField(" bossbar ").appendField(new Blockly.FieldDropdown([["key", "key"], ["id", "id"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (bossbars) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprKeyOfBossBar :: [the] boss[ ]bar (key|id) of %bossbars%");
  }
};
Blockly.Blocks['lib_expr_609'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Kick Wiadomość");
    this.appendDummyInput().appendField(" kick-wiadomość");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprKickMessage :: [the] kick( |-)message");
  }
};
Blockly.Blocks['lib_expr_610'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Language");
    this.appendDummyInput().appendField("   ").appendField(new Blockly.FieldDropdown([["language", "language"], ["locale", "locale"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLanguage :: [the] [([currently] selected|current)] [game] (language|locale) [setting] of %players%");
  }
};
Blockly.Blocks['lib_expr_611'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Last Attacker");
    this.appendValueInput("ARG1").appendField(" last attacker z (jednostka) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLastAttacker :: [the] last attacker of %entity%");
  }
};
Blockly.Blocks['lib_expr_612'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Last Zadaj obrażenia");
    this.appendValueInput("ARG1").appendField(" last zadaj obrażenia z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLastDamage :: [the] last damage of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_613'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Last Zadaj obrażenia Przyczyna");
    this.appendDummyInput().appendField(" last zadaj obrażenia ").appendField(new Blockly.FieldDropdown([["przyczyna", "cause"], ["powód", "reason"], ["typ", "type"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLastDamageCause :: [the] last damage (cause|reason|type) of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_614'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Last Śmierć Lokalizacja");
    this.appendValueInput("ARG1").appendField("  śmierć lokalizacja z (offlineplayers) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLastDeathLocation :: [the] [last] death location[s] of %offlineplayers%");
  }
};
Blockly.Blocks['lib_expr_615'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Last Interaction Date");
    this.appendDummyInput().appendField(" last ").appendField(new Blockly.FieldDropdown([["date", "date"], ["czas", "time"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  (jednostki) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["were", "were"], ["był", "was"]]), "CH2");
    this.appendDummyInput().appendField(" attacked");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLastInteractionDate :: [the] last (date|time)[s] [that|when] %entities% (were|was) (attacked|1:interacted with|2:clicked [on])");
  }
};
Blockly.Blocks['lib_expr_616'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Last Interaction Gracz");
    this.appendValueInput("ARG1").appendField(" last gracz do atak (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLastInteractionPlayer :: [the] last player[s] to (attack|1:interact with|2:click [on]) %entities%");
  }
};
Blockly.Blocks['lib_expr_617'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Last Loaded Serwer Icon");
    this.appendDummyInput().appendField("  loaded serwer icon");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLastLoadedServerIcon :: [the] [last[ly]] loaded server icon");
  }
};
Blockly.Blocks['lib_expr_618'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Last Login Czas");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["last", "last"], ["first", "first"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" login z (offlineplayers) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLastLoginTime :: [the] (1¦last|2¦first) login of %offlineplayers%");
  }
};
Blockly.Blocks['lib_expr_619'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Last Resource Pack Response");
    this.appendValueInput("ARG1").appendField("  resource pack response z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLastResourcePackResponse :: [the] [last] resource pack response[s] of %players%");
  }
};
Blockly.Blocks['lib_expr_620'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Last Spawned Jednostka");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["0:spawned", "0:spawned"], ["1:shot", "1:shot"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (entitydata) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLastSpawnedEntity :: [the] [last[ly]] (0:spawned|1:shot) %*entitydata%");
  }
};
Blockly.Blocks['lib_expr_621'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Leash Holder");
    this.appendValueInput("ARG1").appendField(" leash holder z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLeashHolder :: [the] leash holder[s] of %entities%");
  }
};
Blockly.Blocks['lib_expr_622'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Length");
    this.appendValueInput("ARG1").appendField(" length z (teksty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLength :: [the] length of %strings%");
  }
};
Blockly.Blocks['lib_expr_623'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Poziom");
    this.appendValueInput("ARG1").appendField("  poziom z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLevel :: [the] [xp|exp[erience]] level of %players%");
  }
};
Blockly.Blocks['lib_expr_624'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Poziom Progress");
    this.appendValueInput("ARG1").appendField(" poziom progress z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLevelProgress :: [the] level progress of %players%");
  }
};
Blockly.Blocks['lib_expr_625'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Light Poziom");
    this.appendValueInput("ARG1").appendField("lightpoziom (opcjonalnie) z (lokalizacja) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLightLevel :: [(1¦sky|1¦sun|2¦block)[ ]]light[ ]level [(of|%direction%) %location%]");
  }
};
Blockly.Blocks['lib_expr_626'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Lokalizacja");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["lokalizacja", "location"], ["position", "position"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLocation :: [the] [event-](location|position)");
  }
};
Blockly.Blocks['lib_expr_627'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Lokalizacja Przy");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["lokalizacja", "location"], ["position", "position"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  (opcjonalnie) \\](liczba) ");
    this.appendValueInput("ARG2").appendField(", (liczba) ");
    this.appendValueInput("ARG3").appendField(",  (liczba) ");
    this.appendValueInput("ARG4").appendField(" (opcjonalnie) (świat) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLocationAt :: [the] (location|position) [at] [\\(][x[ ][=[ ]]]%number%, [y[ ][=[ ]]]%number%, [and] [z[ ][=[ ]]]%number%[\\)] [[(in|of) [[the] world]] %world%]");
  }
};
Blockly.Blocks['lib_expr_628'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Lokalizacja Z Wektor");
    this.appendValueInput("ARG1").appendField("(wektor) ");
    this.appendValueInput("ARG2").appendField(" do lokalizacja w (świat) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLocationFromVector :: %vector% to location in %world%");
  }
};
Blockly.Blocks['lib_expr_629'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Lokalizacja Z");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["lokalizacja", "location"], ["position", "position"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (lokalizacja) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLocationOf :: (location|position) of %location%");
  }
};
Blockly.Blocks['lib_expr_630'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Lokalizacja Wektor Przesunięcie");
    this.appendValueInput("ARG1").appendField("(lokalizacja) ");
    this.appendValueInput("ARG2").appendField(" przesunięcie o  (vectors) ");
    this.appendDummyInput().appendField(" ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLocationVectorOffset :: %location% offset by [[the] vectors] %vectors% [facingrelative:using local axes]");
  }
};
Blockly.Blocks['lib_expr_631'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Pętla Iteration");
    this.appendDummyInput().appendField(" pętla-").appendField(new Blockly.FieldDropdown([["counter", "counter"], ["iteration", "iteration"]]), "CH1");
    this.appendValueInput("ARG1").appendField("(opcjonalnie) -(liczba) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLoopIteration :: [the] loop(-| )(counter|iteration)[-%-*number%]");
  }
};
Blockly.Blocks['lib_expr_632'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Pętla Wartość").appendField(new Blockly.FieldTextInput("# Countdown"), 'CODE');
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setTooltip("ExprLoopValue");
  }
};
Blockly.Blocks['lib_expr_633'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Loot");
    this.appendDummyInput().appendField(" loot");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLoot :: [the] loot");
  }
};
Blockly.Blocks['lib_expr_634'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Loot Context");
    this.appendDummyInput().appendField("lootcontext");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLootContext :: loot[ ]context");
  }
};
Blockly.Blocks['lib_expr_635'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Loot Context Jednostka");
    this.appendValueInput("ARG1").appendField(" looted jednostka z (lootcontexts) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLootContextEntity :: [the] looted entity of %lootcontexts%");
  }
};
Blockly.Blocks['lib_expr_636'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Loot Context Lokalizacja");
    this.appendValueInput("ARG1").appendField(" loot  lokalizacja z (lootcontexts) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLootContextLocation :: [the] loot[ing] [context] location of %lootcontexts%");
  }
};
Blockly.Blocks['lib_expr_637'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Loot Context Looter");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["looter", "looter"], ["looting gracz", "looting player"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (lootcontexts) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLootContextLooter :: [the] (looter|looting player) of %lootcontexts%");
  }
};
Blockly.Blocks['lib_expr_638'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Loot Context Luck");
    this.appendValueInput("ARG1").appendField(" loot  luck  z (lootcontexts) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLootContextLuck :: [the] loot[ing] [context] luck [value|factor] of %lootcontexts%");
  }
};
Blockly.Blocks['lib_expr_639'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Loot Przedmioty");
    this.appendValueInput("ARG1").appendField(" loot z (loottables) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z", "with"], ["używając", "using"]]), "CH1");
    this.appendValueInput("ARG2").appendField("  (lootcontext) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLootItems :: [the] loot of %loottables% [(with|using) [[loot] context] %-lootcontext%]");
  }
};
Blockly.Blocks['lib_expr_640'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Loot Table");
    this.appendValueInput("ARG1").appendField(" loottable z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLootTable :: [the] loot[ ]table[s] of %entities/blocks%");
  }
};
Blockly.Blocks['lib_expr_641'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Loot Table Z Tekst");
    this.appendValueInput("ARG1").appendField(" loottable (teksty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLootTableFromString :: [the] loot[ ]table[s] %strings%");
  }
};
Blockly.Blocks['lib_expr_642'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Loot Table Seed");
    this.appendValueInput("ARG1").appendField(" loot seed z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLootTableSeed :: [the] loot[[ ]table] seed[s] of %entities/blocks%");
  }
};
Blockly.Blocks['lib_expr_643'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Love Czas");
    this.appendValueInput("ARG1").appendField(" love czas z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLoveTime :: [the] love[d] time of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_644'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Lowest Highest Solid Blok");
    this.appendDummyInput().appendField(" highest  blok ").appendField(new Blockly.FieldDropdown([["przy", "at"], ["z", "of"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (lokalizacje) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprLowestHighestSolidBlock :: [the] (highest|:lowest) [solid] block (at|of) %locations%");
  }
};
Blockly.Blocks['lib_expr_645'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Max Durability");
    this.appendDummyInput().appendField(" max durabilit").appendField(new Blockly.FieldDropdown([["y", "y"], ["ies", "ies"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMaxDurability :: [the] max[imum] (durabilit(y|ies)|damage) of %itemtypes/itemstacks/slots%");
  }
};
Blockly.Blocks['lib_expr_646'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Max Freeze Ticks");
    this.appendValueInput("ARG1").appendField(" max freeze czas z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMaxFreezeTicks :: [the] max[imum] freeze time of %entities%");
  }
};
Blockly.Blocks['lib_expr_647'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Max Zdrowie");
    this.appendValueInput("ARG1").appendField(" max zdrowie z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMaxHealth :: [the] max[imum] health of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_648'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Max Przedmiot Use Czas");
    this.appendDummyInput().appendField(" max  us").appendField(new Blockly.FieldDropdown([["e", "e"], ["age", "age"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["czas", "time"], ["czas trwania", "duration"]]), "CH2");
    this.appendValueInput("ARG1").appendField(" z (itemstacks) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMaxItemUseTime :: [the] max[imum] [item] us(e|age) (time|duration) of %itemstacks%");
  }
};
Blockly.Blocks['lib_expr_649'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Max Minecart Prędkość");
    this.appendDummyInput().appendField(" max minecart ").appendField(new Blockly.FieldDropdown([["prędkość", "speed"], ["velocity", "velocity"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMaxMinecartSpeed :: [the] max[imum] minecart (speed|velocity) of %entities%");
  }
};
Blockly.Blocks['lib_expr_650'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Max Gracze");
    this.appendDummyInput().appendField("  max gracz ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMaxPlayers :: [the] [1:(real|default)|2:(fake|shown|displayed)] max[imum] player[s] [count|amount|number|size]");
  }
};
Blockly.Blocks['lib_expr_651'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Max Stack");
    this.appendValueInput("ARG1").appendField(" max stack z (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMaxStack :: [the] max[imum] stack[[ ]size] of %itemtypes/inventories%");
  }
};
Blockly.Blocks['lib_expr_652'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Me");
    this.appendDummyInput().appendField("me");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMe :: me");
  }
};
Blockly.Blocks['lib_expr_653'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Members Z Region");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["all", "all"], ["the", "the"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" 0¦members z  (regiony) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMembersOfRegion :: (all|the|) (0¦members|1¦owner[s]) of [[the] region[s]] %regions%");
  }
};
Blockly.Blocks['lib_expr_654'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Memory");
    this.appendDummyInput().appendField("  :free ").appendField(new Blockly.FieldDropdown([["memory", "memory"], ["ram", "ram"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMemory :: [the] [server] (:free|max:max[imum]|total) (memory|ram)");
  }
};
Blockly.Blocks['lib_expr_655'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Mending Napraw Amount");
    this.appendDummyInput().appendField("  napraw amount");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMendingRepairAmount :: [the] [mending] repair amount");
  }
};
Blockly.Blocks['lib_expr_656'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Metadata");
    this.appendValueInput("ARG1").appendField("metadata  (teksty) ");
    this.appendValueInput("ARG2").appendField(" z (metadataholders) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMetadata :: metadata [(value|tag)[s]] %strings% of %metadataholders%");
  }
};
Blockly.Blocks['lib_expr_657'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Middle Z Lokalizacja");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["middle", "middle"], ["center", "center"]]), "CH1");
    this.appendValueInput("ARG1").appendField("  z (lokalizacja) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMiddleOfLocation :: [the] (middle|center) [point] of %location%");
  }
};
Blockly.Blocks['lib_expr_658'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Midpoint");
    this.appendDummyInput().appendField(" midpoint ").appendField(new Blockly.FieldDropdown([["z", "of"], ["between", "between"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (wartość) ");
    this.appendValueInput("ARG2").appendField(" i (wartość) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMidpoint :: [the] mid[-]point (of|between) %object% and %object%");
  }
};
Blockly.Blocks['lib_expr_659'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Minecart Derailed Latanie Velocity");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["derailed", "derailed"], ["latanie", "flying"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" velocity z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMinecartDerailedFlyingVelocity :: [the] [minecart] (1¦derailed|2¦flying) velocity of %entities%");
  }
};
Blockly.Blocks['lib_expr_660'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Min Max Zaklęcie Poziom");
    this.appendValueInput("ARG1").appendField(" min zaklęcie poziom z (zaklęcia) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMinMaxEnchantmentLevel :: [the] ((:max|min)[imum]|starting) enchant[ment] level of %enchantments%");
  }
};
Blockly.Blocks['lib_expr_661'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Moon Phase");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["lunar", "lunar"], ["moon", "moon"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" phase z (światy) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMoonPhase :: [the] (lunar|moon) phase[s] of %worlds%");
  }
};
Blockly.Blocks['lib_expr_662'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: MOTD");
    this.appendDummyInput().appendField("  MOTD");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprMOTD :: [the] [1:default|2:shown|2:displayed] (MOTD|message of [the] day)");
  }
};
Blockly.Blocks['lib_expr_663'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Nazwa");
    this.appendValueInput("ARG1").appendField(" nazwa z (offlineplayers) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprName :: [the] name[s] of %offlineplayers/entities/nameds/inventories%");
  }
};
Blockly.Blocks['lib_expr_664'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Named");
    this.appendValueInput("ARG1").appendField("(przedmiot) ");
    this.appendValueInput("ARG2").appendField(" named (textcomponent) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprNamed :: %itemtype/inventorytype% (named|with name[s]) %textcomponent%");
  }
};
Blockly.Blocks['lib_expr_665'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Nearest Jednostka");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["nearest", "nearest"], ["closest", "closest"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (entitydatas) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) do (jednostka) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprNearestEntity :: [the] (nearest|closest) %*entitydatas% [[relative] to %entity/location%]");
  }
};
Blockly.Blocks['lib_expr_666'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: New Banner Pattern");
    this.appendValueInput("ARG1").appendField(" (bannerpatterntype) ");
    this.appendValueInput("ARG2").appendField(" colored (kolor) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprNewBannerPattern :: [a] %bannerpatterntype% colo[u]red %color%");
  }
};
Blockly.Blocks['lib_expr_667'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: No Zadaj obrażenia Ticks");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["invulnerability", "invulnerability"], ["invincibility", "invincibility"], ["no zadaj obrażenia", "no damage"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" tick z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprNoDamageTicks :: [the] (invulnerability|invincibility|no damage) tick[s] of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_668'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: No Zadaj obrażenia Czas");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["invulnerability", "invulnerability"], ["invincibility", "invincibility"], ["no zadaj obrażenia", "no damage"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" czas z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprNoDamageTime :: [the] (invulnerability|invincibility|no damage) time[[ ]span] of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_669'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Node");
    this.appendValueInput("ARG1").appendField(" node (tekst) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["z", "of"], ["w", "in"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (node) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprNode :: [the] node %string% (of|in) %node%");
  }
};
Blockly.Blocks['lib_expr_670'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Now");
    this.appendDummyInput().appendField("now");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprNow :: now");
  }
};
Blockly.Blocks['lib_expr_671'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Liczba Z Characters");
    this.appendDummyInput().appendField("liczba z uppercase char").appendField(new Blockly.FieldDropdown([["acters", "acters"], ["s", "s"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" w (tekst) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprNumberOfCharacters :: number of upper[ ]case char(acters|s) in %string%");
  }
};
Blockly.Blocks['lib_expr_672'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Liczby");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["liczby", "numbers"], ["integers", "integers"], ["decimals", "decimals"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["between", "between"], ["z", "from"]]), "CH2");
    this.appendValueInput("ARG1").appendField(" (liczba) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["i", "and"], ["do", "to"]]), "CH3");
    this.appendValueInput("ARG2").appendField(" (liczba) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprNumbers :: [(all [[of] the]|the)] (numbers|1¦integers|2¦decimals) (between|from) %number% (and|to) %number%");
  }
};
Blockly.Blocks['lib_expr_673'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Offline Gracze");
    this.appendDummyInput().appendField(" offlinegracze");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprOfflinePlayers :: [(all [[of] the]|the)] offline[ ]players");
  }
};
Blockly.Blocks['lib_expr_674'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Online Gracze Count");
    this.appendDummyInput().appendField("   gracz ").appendField(new Blockly.FieldDropdown([["count", "count"], ["amount", "amount"], ["liczba", "number"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprOnlinePlayersCount :: [the] [(1:(real|default)|2:(fake|shown|displayed))] [online] player (count|amount|number)");
  }
};
Blockly.Blocks['lib_expr_675'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: On Screen Kick Wiadomość");
    this.appendDummyInput().appendField(" on-screen kick wiadomość");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprOnScreenKickMessage :: [the] on-screen kick message");
  }
};
Blockly.Blocks['lib_expr_676'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Opened Ekwipunek");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["current", "current"], ["open", "open"], ["top", "top"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" ekwipunek (opcjonalnie) z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprOpenedInventory :: [the] (current|open|top) inventory [of %players%]");
  }
};
Blockly.Blocks['lib_expr_677'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ops");
    this.appendDummyInput().appendField("  ops");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprOps :: [all [[of] the]|the] [server] [:non(-| )]op[erator]s");
  }
};
Blockly.Blocks['lib_expr_678'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Panda Gene");
    this.appendValueInput("ARG1").appendField(" hidden gene z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPandaGene :: [the] (:main|hidden) gene[s] of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_679'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Parse");
    this.appendValueInput("ARG1").appendField("(tekst) ");
    this.appendValueInput("ARG2").appendField(" parsed as (classinfo) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprParse :: %string% parsed as (%-*classinfo%|\"<.*>\")");
  }
};
Blockly.Blocks['lib_expr_680'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Parse Error");
    this.appendDummyInput().appendField("   error");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprParseError :: [the] [last] [parse] error");
  }
};
Blockly.Blocks['lib_expr_681'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Cząsteczka Count");
    this.appendValueInput("ARG1").appendField(" cząsteczka count z (cząsteczki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprParticleCount :: [the] particle count of %particles%");
  }
};
Blockly.Blocks['lib_expr_682'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Cząsteczka Distribution");
    this.appendValueInput("ARG1").appendField(" cząsteczka distribution z (cząsteczki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprParticleDistribution :: [the] particle distribution of %particles%");
  }
};
Blockly.Blocks['lib_expr_683'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Cząsteczka Przesunięcie");
    this.appendValueInput("ARG1").appendField(" cząsteczka przesunięcie z (cząsteczki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprParticleOffset :: [the] particle offset of %particles%");
  }
};
Blockly.Blocks['lib_expr_684'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Cząsteczka Prędkość");
    this.appendValueInput("ARG1").appendField(" cząsteczka prędkość  z (cząsteczki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprParticleSpeed :: [the] (particle speed [value]|extra value) of %particles%");
  }
};
Blockly.Blocks['lib_expr_685'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Cząsteczka Z Data");
    this.appendDummyInput().appendField("unchecked");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprParticleWithData :: unchecked");
  }
};
Blockly.Blocks['lib_expr_686'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Cząsteczka Z Przesunięcie");
    this.appendValueInput("ARG1").appendField("(cząsteczki) ");
    this.appendValueInput("ARG2").appendField(" z  przesunięcie  (wektor) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprParticleWithOffset :: %particles% with [an] offset [of] %vector%");
  }
};
Blockly.Blocks['lib_expr_687'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Cząsteczka Z Prędkość");
    this.appendValueInput("ARG1").appendField("(cząsteczki) ");
    this.appendValueInput("ARG2").appendField(" z  cząsteczka prędkość   (liczba) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprParticleWithSpeed :: %particles% with ([a] particle speed [value]|[an] extra value) [of] %number%");
  }
};
Blockly.Blocks['lib_expr_688'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Passenger");
    this.appendValueInput("ARG1").appendField(" passenger z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPassenger :: [the] passenger[s] of %entities%");
  }
};
Blockly.Blocks['lib_expr_689'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Pathfinding Lokalizacja");
    this.appendDummyInput().appendField(" pathfinding cel lokalizacja");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPathfindingLocation :: [the] path[ ]finding target location");
  }
};
Blockly.Blocks['lib_expr_690'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Pathfinding Cel");
    this.appendDummyInput().appendField(" pathfinding cel ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPathfindingTarget :: [the] path[ ]finding target [entity]");
  }
};
Blockly.Blocks['lib_expr_691'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Percent");
    this.appendValueInput("ARG1").appendField("(liczba) ");
    this.appendValueInput("ARG2").appendField("percent z (liczby) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPercent :: %number%(| percent) of %numbers%");
  }
};
Blockly.Blocks['lib_expr_692'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Uprawnienia");
    this.appendDummyInput().appendField(" uprawnienia ").appendField(new Blockly.FieldDropdown([["z", "from"], ["z", "of"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPermissions :: [(all [[of] the]|the)] permissions (from|of) %players%");
  }
};
Blockly.Blocks['lib_expr_693'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Persistent Data");
    this.appendValueInput("ARG1").appendField("  (opcjonalnie) (classinfo) ");
    this.appendDummyInput().appendField("  data ").appendField(new Blockly.FieldDropdown([["wartość", "value"], ["tag", "tag"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (tekst) ");
    this.appendValueInput("ARG3").appendField(" z (chunks) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPersistentData :: [the] [persistent] [%-*classinfo%] [:list] data (value|tag) %string% of %chunks/worlds/entities/blocks/itemtypes/offlineplayers%");
  }
};
Blockly.Blocks['lib_expr_694'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Picked Przedmiot");
    this.appendDummyInput().appendField(" picked ").appendField(new Blockly.FieldDropdown([["przedmiot", "item"], ["1:blok", "1:block"], ["2:jednostka", "2:entity"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPickedItem :: [the] picked (item|1:block|2:entity)");
  }
};
Blockly.Blocks['lib_expr_695'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Pickup Delay");
    this.appendValueInput("ARG1").appendField(" pickup delay z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPickupDelay :: [the] pick[ ]up delay of %entities%");
  }
};
Blockly.Blocks['lib_expr_696'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ping");
    this.appendValueInput("ARG1").appendField(" ping z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPing :: [the] ping of %players%");
  }
};
Blockly.Blocks['lib_expr_697'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Plain");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["plain", "plain"], ["unmodified", "unmodified"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (przedmiot) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPlain :: [a[n]] (plain|unmodified) %itemtype%");
  }
};
Blockly.Blocks['lib_expr_698'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Gracz Czat Completions");
    this.appendValueInput("ARG1").appendField("  czat completion z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPlayerChatCompletions :: [the] [custom] chat completion[s] of %players%");
  }
};
Blockly.Blocks['lib_expr_699'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Gracz List Header Footer");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["gracz", "player"], ["tab", "tab"]]), "CH1");
    this.appendValueInput("ARG1").appendField("list header  z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPlayerListHeaderFooter :: [the] (player|tab)[ ]list (header|:footer) [text|message] of %players%");
  }
};
Blockly.Blocks['lib_expr_700'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Gracz List Nazwa");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["gracz", "player"], ["tab", "tab"]]), "CH1");
    this.appendValueInput("ARG1").appendField("list nazwa z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPlayerListName :: [the] (player|tab)[ ]list name[s] of %players%");
  }
};
Blockly.Blocks['lib_expr_701'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Gracz List Priority");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["gracz", "player"], ["tab", "tab"]]), "CH1");
    this.appendValueInput("ARG1").appendField("list priority z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPlayerListPriority :: [the] (player|tab)[ ]list priority of %players%");
  }
};
Blockly.Blocks['lib_expr_702'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Gracz Protocol Version");
    this.appendValueInput("ARG1").appendField(" protocol version z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPlayerProtocolVersion :: [the] protocol version of %players%");
  }
};
Blockly.Blocks['lib_expr_703'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Plugins");
    this.appendDummyInput().appendField("  plugins");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPlugins :: [(all [[of] the]|the)] [loaded] plugins");
  }
};
Blockly.Blocks['lib_expr_704'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Portal");
    this.appendDummyInput().appendField(" portal bloki");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPortal :: [the] portal['s] blocks");
  }
};
Blockly.Blocks['lib_expr_705'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Portal Odnowienie");
    this.appendValueInput("ARG1").appendField(" portal odnowienie z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPortalCooldown :: [the] portal cooldown of %entities%");
  }
};
Blockly.Blocks['lib_expr_706'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Mikstura Amplifier");
    this.appendValueInput("ARG1").appendField("  amplifier z (skriptpotioneffects) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPotionAmplifier :: [the] ([potion] amplifier|potion tier|potion level)[s] of %skriptpotioneffects%");
  }
};
Blockly.Blocks['lib_expr_707'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Mikstura Czas trwania");
    this.appendValueInput("ARG1").appendField("  czas trwania z (skriptpotioneffects) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPotionDuration :: [the] ([potion] duration|potion length)[s] of %skriptpotioneffects%");
  }
};
Blockly.Blocks['lib_expr_708'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Mikstura Efekt");
    this.appendValueInput("ARG1").appendField("  (potioneffecttypes) ");
    this.appendValueInput("ARG2").appendField("  efekt z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPotionEffect :: [the] [:active|:hidden|both:(active and hidden|hidden and active)] %potioneffecttypes% [potion] effect[s] of %entities/itemtypes%");
  }
};
Blockly.Blocks['lib_expr_709'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Mikstura Efekty");
    this.appendValueInput("ARG1").appendField("  mikstura efekty z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPotionEffects :: [the] [:active|:hidden|both:(active and hidden|hidden and active)] potion effects of %entities/itemtypes%");
  }
};
Blockly.Blocks['lib_expr_710'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Mikstura Efekt Typ Category");
    this.appendValueInput("ARG1").appendField(" mikstura  category z (potioneffecttypes) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPotionEffectTypeCategory :: [the] potion [effect [type]] category of %potioneffecttypes%");
  }
};
Blockly.Blocks['lib_expr_711'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prefix Suffix");
    this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldDropdown([["1:prefix", "1:prefix"], ["2:suffix", "2:suffix"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPrefixSuffix :: [the] [chat] (1:prefix|2:suffix) of %players%");
  }
};
Blockly.Blocks['lib_expr_712'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Projectile Critical State");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["projectile", "projectile"], ["arrow", "arrow"]]), "CH1");
    this.appendDummyInput().appendField(" critical ").appendField(new Blockly.FieldDropdown([["state", "state"], ["ability", "ability"], ["tryb", "mode"]]), "CH2");
    this.appendValueInput("ARG1").appendField(" z (projectiles) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprProjectileCriticalState :: [the] (projectile|arrow) critical (state|ability|mode) of %projectiles%");
  }
};
Blockly.Blocks['lib_expr_713'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Projectile Force");
    this.appendDummyInput().appendField(" projectile force");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprProjectileForce :: [the] projectile force");
  }
};
Blockly.Blocks['lib_expr_714'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Protocol Version");
    this.appendDummyInput().appendField("   protocol version ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprProtocolVersion :: [the] [server] [(sent|required|fake)] protocol version [number]");
  }
};
Blockly.Blocks['lib_expr_715'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Pushed Bloki");
    this.appendDummyInput().appendField(" moved bloki");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprPushedBlocks :: [the] moved blocks");
  }
};
Blockly.Blocks['lib_expr_716'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Quaternion Axis Angle");
    this.appendValueInput("ARG1").appendField(" rotation angle z (quaternions) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprQuaternionAxisAngle :: [the] rotation (angle|:axis) of %quaternions%");
  }
};
Blockly.Blocks['lib_expr_717'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Queue");
    this.appendDummyInput().appendField("  queue (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z", "of"], ["z", "with"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprQueue :: [a] [new] queue [(of|with) %-objects%]");
  }
};
Blockly.Blocks['lib_expr_718'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Queue Start End");
    this.appendValueInput("ARG1").appendField(" end z (queue) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprQueueStartEnd :: [the] (:start|end) of %queue%");
  }
};
Blockly.Blocks['lib_expr_719'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wyjście Wiadomość");
    this.appendDummyInput().appendField(" wyjście-wiadomość");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprQuitMessage :: [the] (quit|leave|log[ ]out)( |-)message");
  }
};
Blockly.Blocks['lib_expr_720'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wyjście Powód");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["wyjście", "quit"], ["disconnect", "disconnect"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["przyczyna", "cause"], ["powód", "reason"]]), "CH2");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprQuitReason :: (quit|disconnect) (cause|reason)");
  }
};
Blockly.Blocks['lib_expr_721'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Losowy");
    this.appendValueInput("ARG1").appendField(" losowy (classinfo) ");
    this.appendValueInput("ARG2").appendField("  z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRandom :: [a] random %*classinfo% [out] of %objects%");
  }
};
Blockly.Blocks['lib_expr_722'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Losowy Character");
    this.appendValueInput("ARG1").appendField("(opcjonalnie) |(integer) ");
    this.appendDummyInput().appendField(" losowy  character ").appendField(new Blockly.FieldDropdown([["z", "from"], ["between", "between"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (tekst) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["do", "to"], ["i", "and"]]), "CH2");
    this.appendValueInput("ARG3").appendField(" (tekst) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRandomCharacter :: [a|%-integer%] random [:alphanumeric] character[s] (from|between) %string% (to|and) %string%");
  }
};
Blockly.Blocks['lib_expr_723'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Losowy Liczba");
    this.appendValueInput("ARG1").appendField("(opcjonalnie) |(integer) ");
    this.appendDummyInput().appendField(" losowy liczba ").appendField(new Blockly.FieldDropdown([["z", "from"], ["between", "between"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (liczba) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["do", "to"], ["i", "and"]]), "CH2");
    this.appendValueInput("ARG3").appendField(" (liczba) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRandomNumber :: [a|%-integer%] random (:integer|number)[s] (from|between) %number% (to|and) %number%");
  }
};
Blockly.Blocks['lib_expr_724'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Losowy UUID");
    this.appendDummyInput().appendField(" losowy uuid");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRandomUUID :: [a] random uuid");
  }
};
Blockly.Blocks['lib_expr_725'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Raw Nazwa");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["raw", "raw"], ["minecraft", "minecraft"], ["vanilla", "vanilla"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" nazwa z (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRawName :: (raw|minecraft|vanilla) name[s] of %itemtypes%");
  }
};
Blockly.Blocks['lib_expr_726'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Raw Tekst");
    this.appendValueInput("ARG1").appendField("raw (teksty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRawString :: raw %strings%");
  }
};
Blockly.Blocks['lib_expr_727'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Readied Arrow");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["readied", "readied"], ["selected", "selected"], ["drawn", "drawn"]]), "CH1");
    this.appendDummyInput().appendField(" bow");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprReadiedArrow :: [the] (readied|selected|drawn) (:arrow|bow)");
  }
};
Blockly.Blocks['lib_expr_728'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Recursive");
    this.appendValueInput("ARG1").appendField("recursive (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRecursive :: recursive %~objects%");
  }
};
Blockly.Blocks['lib_expr_729'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Recursive Size");
    this.appendDummyInput().appendField(" recursive ").appendField(new Blockly.FieldDropdown([["amount", "amount"], ["liczba", "number"], ["size", "size"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRecursiveSize :: [the] recursive (amount|number|size) of %objects%");
  }
};
Blockly.Blocks['lib_expr_730'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Redstone Blok Power");
    this.appendValueInput("ARG1").appendField(" redstone power z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRedstoneBlockPower :: [the] redstone power of %blocks%");
  }
};
Blockly.Blocks['lib_expr_731'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Reduce");
    this.appendValueInput("ARG1").appendField("(wartości) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["reduced", "reduced"], ["folded", "folded"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["do", "to"], ["z", "with"], ["o", "by"]]), "CH2");
    this.appendValueInput("ARG2").appendField(" \\(opcjonalnie) (wyra enie) ");
    this.appendDummyInput().appendField("\\");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprReduce :: %objects% (reduced|folded) (to|with|by) \\[<.+>\\]");
  }
};
Blockly.Blocks['lib_expr_732'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Reduced Wartość");
    this.appendDummyInput().appendField(" reduced wartość");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprReducedValue :: [the] reduced value");
  }
};
Blockly.Blocks['lib_expr_733'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Region");
    this.appendDummyInput().appendField("region");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRegion :: [event-]region");
  }
};
Blockly.Blocks['lib_expr_734'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Regiony Przy");
    this.appendValueInput("ARG1").appendField(" regions (kierunek) ");
    this.appendValueInput("ARG2").appendField(" (lokalizacje) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRegionsAt :: [the] region(1¦s|) %direction% %locations%");
  }
};
Blockly.Blocks['lib_expr_735'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Remaining Air");
    this.appendValueInput("ARG1").appendField(" remaining air z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRemainingAir :: [the] remaining air of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_736'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Repeat");
    this.appendValueInput("ARG1").appendField("(teksty) ");
    this.appendValueInput("ARG2").appendField(" repeated (integer) ");
    this.appendDummyInput().appendField(" czas");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRepeat :: %strings% repeated %integer% time[s]");
  }
};
Blockly.Blocks['lib_expr_737'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Replace");
    this.appendValueInput("ARG1").appendField("(teksty) ");
    this.appendValueInput("ARG2").appendField(" where  (teksty) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["jest", "is"], ["są", "are"]]), "CH1");
    this.appendValueInput("ARG3").appendField(" replaced z (tekst) ");
    this.appendDummyInput().appendField(" ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprReplace :: %strings% where [(first:[the] first instance[s]|all instances) of] %strings% (is|are) replaced with %string% [regex:using regex|case:with case sensitivity]");
  }
};
Blockly.Blocks['lib_expr_738'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Resolved Component");
    this.appendValueInput("ARG1").appendField("(textcomponents) ");
    this.appendValueInput("ARG2").appendField(" resolved na (commandsender) ");
    this.appendDummyInput().appendField(" ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprResolvedComponent :: %textcomponents% resolved for %commandsender% [bypass:(bypassing|ignoring) required permissions]");
  }
};
Blockly.Blocks['lib_expr_739'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Resonating Czas");
    this.appendDummyInput().appendField(" resonat").appendField(new Blockly.FieldDropdown([["e", "e"], ["ing", "ing"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" czas z (blok) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprResonatingTime :: [the] resonat(e|ing) time of %block%");
  }
};
Blockly.Blocks['lib_expr_740'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Odrodzenie Lokalizacja");
    this.appendDummyInput().appendField(" odrodzenie lokalizacja");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRespawnLocation :: [the] respawn location");
  }
};
Blockly.Blocks['lib_expr_741'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Odrodzenie Powód");
    this.appendDummyInput().appendField("odrodzenie powód");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRespawnReason :: respawn[ing] reason");
  }
};
Blockly.Blocks['lib_expr_742'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Result");
    this.appendValueInput("ARG1").appendField(" result z  (executable) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) arguments:z args (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprResult :: [the] result[plural:s] of [running|executing] %executable% [arguments:with arg[ument]s %-objects%]");
  }
};
Blockly.Blocks['lib_expr_743'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Reversed List");
    this.appendValueInput("ARG1").appendField("reversed (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprReversedList :: reversed %objects%");
  }
};
Blockly.Blocks['lib_expr_744'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ringing Czas");
    this.appendValueInput("ARG1").appendField(" ring czas z (blok) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRingingTime :: [the] ring[ing] time of %block%");
  }
};
Blockly.Blocks['lib_expr_745'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Rotate");
    this.appendValueInput("ARG1").appendField("(quaternions) ");
    this.appendValueInput("ARG2").appendField(" rotated around   -axis o (liczba) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRotate :: %quaternions/vectors% rotated around [the] [global] (:x|:y|:z)(-| )axis by %number%");
  }
};
Blockly.Blocks['lib_expr_746'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Round");
    this.appendValueInput("ARG1").appendField(" round down (liczby) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprRound :: [a|the] (round[ed] down|floored) %numbers%");
  }
};
Blockly.Blocks['lib_expr_747'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Saturation");
    this.appendValueInput("ARG1").appendField(" saturation z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSaturation :: [the] saturation of %players%");
  }
};
Blockly.Blocks['lib_expr_748'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Scoreboard Tags");
    this.appendValueInput("ARG1").appendField(" scoreboard tags z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprScoreboardTags :: [(all [[of] the]|the)] scoreboard tags of %entities%");
  }
};
Blockly.Blocks['lib_expr_749'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Script");
    this.appendDummyInput().appendField("  script");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprScript :: [the] [current] script");
  }
};
Blockly.Blocks['lib_expr_750'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Scripts");
    this.appendDummyInput().appendField(" scripts");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprScripts :: [all [[of] the]|the] scripts");
  }
};
Blockly.Blocks['lib_expr_751'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Scripts Old");
    this.appendDummyInput().appendField(" scripts ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprScriptsOld :: [all [of the]|the] scripts [1:without ([subdirectory] paths|parents)]");
  }
};
Blockly.Blocks['lib_expr_752'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Sea Poziom");
    this.appendValueInput("ARG1").appendField(" sea poziom z (światy) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSeaLevel :: [the] sea level of %worlds%");
  }
};
Blockly.Blocks['lib_expr_753'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Sea Pickles");
    this.appendValueInput("ARG1").appendField("   pickles z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSeaPickles :: [the] [:(min|max)[imum]] [sea] pickle(s| (count|amount)) of %blocks%");
  }
};
Blockly.Blocks['lib_expr_754'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Sec Blank Equip Comp");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["blank", "blank"], ["empty", "empty"]]), "CH1");
    this.appendDummyInput().appendField(" equippable component");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSecBlankEquipComp :: a (blank|empty) equippable component");
  }
};
Blockly.Blocks['lib_expr_755'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Sec Create Boss Bar");
    this.appendValueInput("ARG1").appendField("  (opcjonalnie) (kolor) ");
    this.appendDummyInput().appendField(" bossbar (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z title", "with title"], ["titled", "titled"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (textcomponent) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSecCreateBossBar :: [a] [new] [%-color%] boss[ ]bar [(with title|titled) %-textcomponent%]");
  }
};
Blockly.Blocks['lib_expr_756'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Sec Create Loot Context");
    this.appendValueInput("ARG1").appendField(" loot context (kierunek) ");
    this.appendValueInput("ARG2").appendField(" (lokalizacja) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSecCreateLootContext :: [a] loot context %direction% %location%");
  }
};
Blockly.Blocks['lib_expr_757'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Sec Create Świat Granica");
    this.appendDummyInput().appendField("  światgranica");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSecCreateWorldBorder :: a [virtual] world[ ]border");
  }
};
Blockly.Blocks['lib_expr_758'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Sec Zadaj obrażenia Źródło");
    this.appendDummyInput().appendField(" custom zadaj obrażenia źródło (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["z", "with"], ["używając", "using"]]), "CH1");
    this.appendValueInput("ARG1").appendField("   (damagetype) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSecDamageSource :: [a] custom damage source [(with|using) [the|a] [damage type [of]] %-damagetype%]");
  }
};
Blockly.Blocks['lib_expr_759'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Sec Mikstura Efekt");
    this.appendValueInput("ARG1").appendField("  mikstura efekt z (potioneffecttype) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) (liczba) ");
    this.appendValueInput("ARG3").appendField(" (opcjonalnie) na (czas trwania) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSecPotionEffect :: [a[n]] [:ambient] potion effect of %potioneffecttype% [[of tier] %-number%] [for %-timespan%]");
  }
};
Blockly.Blocks['lib_expr_760'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Seed");
    this.appendDummyInput().appendField(" seed ").appendField(new Blockly.FieldDropdown([["z", "from"], ["z", "of"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (światy) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSeed :: [the] seed[s] (from|of) %worlds%");
  }
};
Blockly.Blocks['lib_expr_761'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Sent Komendy");
    this.appendDummyInput().appendField("   komenda list");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSentCommands :: [the] [sent] [server] command[s] list");
  }
};
Blockly.Blocks['lib_expr_762'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Serwer Icon");
    this.appendDummyInput().appendField("   icon");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprServerIcon :: [the] [(1¦(default)|2¦(shown|sent))] [server] icon");
  }
};
Blockly.Blocks['lib_expr_763'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ustawia");
    this.appendValueInput("ARG1").appendField(" (classinfo) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSets :: [all [[of] the]|the|every] %*classinfo%");
  }
};
Blockly.Blocks['lib_expr_764'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Shooter");
    this.appendValueInput("ARG1").appendField(" shooter (opcjonalnie) z (projectile) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprShooter :: [the] shooter [of %projectile%]");
  }
};
Blockly.Blocks['lib_expr_765'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Shuffled List");
    this.appendValueInput("ARG1").appendField("shuffled (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprShuffledList :: shuffled %objects%");
  }
};
Blockly.Blocks['lib_expr_766'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tabliczka Tekst");
    this.appendValueInput("ARG1").appendField("line (integer) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) z (blok) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSignText :: line %integer% [of %block%]");
  }
};
Blockly.Blocks['lib_expr_767'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Simulation Odległość");
    this.appendDummyInput().appendField("simulation odległość");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSimulationDistance :: simulation distance[s]");
  }
};
Blockly.Blocks['lib_expr_768'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Skript Mikstura Efekt");
    this.appendDummyInput().appendField("  efekt");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSkriptPotionEffect :: [created] [potion] effect");
  }
};
Blockly.Blocks['lib_expr_769'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Czaszka");
    this.appendValueInput("ARG1").appendField(" czaszka z (offlineplayers) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSkull :: [the] skull of %offlineplayers%");
  }
};
Blockly.Blocks['lib_expr_770'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Czaszka Owner");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["head", "head"], ["czaszka", "skull"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" owner z (sloty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSkullOwner :: [the] (head|skull) owner of %slots/itemtypes/itemstacks/blocks%");
  }
};
Blockly.Blocks['lib_expr_771'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Czaszka Tekstura");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["czaszka", "skull"], ["head", "head"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" tekstura z (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSkullTexture :: [the] (skull|head) texture of %itemtypes%");
  }
};
Blockly.Blocks['lib_expr_772'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Slot Index");
    this.appendValueInput("ARG1").appendField("  index z (sloty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSlotIndex :: [the] [raw:(raw|unique)] index of %slots%");
  }
};
Blockly.Blocks['lib_expr_773'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Sorted List");
    this.appendValueInput("ARG1").appendField("sorted (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSortedList :: sorted %objects%");
  }
};
Blockly.Blocks['lib_expr_774'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Źródło Blok");
    this.appendDummyInput().appendField(" źródło blok");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSourceBlock :: [the] source block");
  }
};
Blockly.Blocks['lib_expr_775'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Źródło Lokalizacja");
    this.appendValueInput("ARG1").appendField(" źródło lokalizacja z (damagesources) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSourceLocation :: [the] source location of %damagesources%");
  }
};
Blockly.Blocks['lib_expr_776'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Stwórz");
    this.appendValueInput("ARG1").appendField(" stwórz  (opcjonalnie) z (światy) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSpawn :: [the] spawn[s] [(point|location)[s]] [of %worlds%]");
  }
};
Blockly.Blocks['lib_expr_777'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Stwórz Jajko Jednostka");
    this.appendValueInput("ARG1").appendField(" stwórz jajko jednostka z (itemstacks) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSpawnEggEntity :: [the] spawn egg entity of %itemstacks/itemtypes/slots%");
  }
};
Blockly.Blocks['lib_expr_778'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Spawner Typ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["spawner", "spawner"], ["jednostka", "entity"], ["creature", "creature"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" typ z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSpawnerType :: [the] (spawner|entity|creature) type[s] of %blocks%");
  }
};
Blockly.Blocks['lib_expr_779'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Stwórz Powód");
    this.appendDummyInput().appendField("stwórz powód");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSpawnReason :: spawn[ing] reason");
  }
};
Blockly.Blocks['lib_expr_780'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Spectator Cel");
    this.appendValueInput("ARG1").appendField("spectator cel (opcjonalnie) z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSpectatorTarget :: spectator target [of %-players%]");
  }
};
Blockly.Blocks['lib_expr_781'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prędkość");
    this.appendValueInput("ARG1").appendField(" 0¦walkprędkość z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSpeed :: [the] (0¦walk[ing]|1¦fl(y[ing]|ight))[( |-)]speed of %players%");
  }
};
Blockly.Blocks['lib_expr_782'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Stored Zaklęcia");
    this.appendValueInput("ARG1").appendField(" stored zaklęcies z (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprStoredEnchantments :: [the] stored enchant[ment]s of %itemtypes%");
  }
};
Blockly.Blocks['lib_expr_783'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tekst Case");
    this.appendValueInput("ARG1").appendField("(teksty) ");
    this.appendDummyInput().appendField(" w ").appendField(new Blockly.FieldDropdown([["upper", "upper"], ["lower", "lower"]]), "CH1");
    this.appendDummyInput().appendField("case");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprStringCase :: %strings% in (0¦upper|1¦lower)[ ]case");
  }
};
Blockly.Blocks['lib_expr_784'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tekst Kolor");
    this.appendValueInput("ARG1").appendField(" tekst color  z (teksty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprStringColor :: [all [[of] the]|the] string colo[u]r[s] [code:code[s]] of %strings%");
  }
};
Blockly.Blocks['lib_expr_785'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Subnode Wartość");
    this.appendValueInput("ARG1").appendField(" (classinfo) ");
    this.appendValueInput("ARG2").appendField(" wartość  (tekst) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["z", "from"], ["w", "in"]]), "CH1");
    this.appendValueInput("ARG3").appendField(" (node) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSubnodeValue :: [the] %*classinfo% value [at] %string% (from|in) %node%");
  }
};
Blockly.Blocks['lib_expr_786'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Substring");
    this.appendValueInput("ARG1").appendField(" part z (teksty) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["between", "between"], ["z", "from"]]), "CH1");
    this.appendDummyInput().appendField(" ind").appendField(new Blockly.FieldDropdown([["ex", "ex"], ["ices", "ices"]]), "CH2");
    this.appendValueInput("ARG2").appendField(" (liczba) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["i", "and"], ["do", "to"]]), "CH3");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["index", "index"], ["character", "character"]]), "CH4");
    this.appendValueInput("ARG3").appendField(" (liczba) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprSubstring :: [the] (part|sub[ ](text|string)) of %strings% (between|from) (ind(ex|ices)|character[s]|) %number% (and|to) (index|character|) %number%");
  }
};
Blockly.Blocks['lib_expr_787'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tablisted Gracze");
    this.appendValueInput("ARG1").appendField(" tablist gracze z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTablistedPlayers :: [the] (tablist[ed]|listed) players of %players%");
  }
};
Blockly.Blocks['lib_expr_788'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tag");
    this.appendValueInput("ARG1").appendField(" tag (teksty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTag ::   tag %strings%");
  }
};
Blockly.Blocks['lib_expr_789'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tag Contents");
    this.appendDummyInput().appendField(" tag ").appendField(new Blockly.FieldDropdown([["contents", "contents"], ["wartości", "values"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (minecrafttag) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTagContents :: [the] tag (contents|values) of %minecrafttag%");
  }
};
Blockly.Blocks['lib_expr_790'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tag Key");
    this.appendValueInput("ARG1").appendField("  key z (minecrafttags) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTagKey :: [the] [namespace[d]] key[s] of %minecrafttags%");
  }
};
Blockly.Blocks['lib_expr_791'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tags Z");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTagsOf :: [all [[of] the]|the]");
  }
};
Blockly.Blocks['lib_expr_792'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tags Z Typ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTagsOfType :: [all [[of] the]|the]");
  }
};
Blockly.Blocks['lib_expr_793'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tamer");
    this.appendDummyInput().appendField(" tamer");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTamer :: [the] tamer");
  }
};
Blockly.Blocks['lib_expr_794'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Cel");
    this.appendValueInput("ARG1").appendField(" cel(opcjonalnie) (entitydata) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) z (żywe jednostki) ");
    this.appendValueInput("ARG3").appendField("  (opcjonalnie)  raysize  (liczba) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTarget :: [the] target[[ed] %-*entitydata%] [of %livingentities%] [blocks:ignoring blocks] [[with|at] [a] ray[ ]size [of] %-number%]");
  }
};
Blockly.Blocks['lib_expr_795'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Targeted Blok");
    this.appendValueInput("ARG1").appendField("  cel blok (opcjonalnie) z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTargetedBlock :: [the] [actual:(actual[ly]|exact)] target[ed] block[s] [of %livingentities%]");
  }
};
Blockly.Blocks['lib_expr_796'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Teleportuj Przyczyna");
    this.appendDummyInput().appendField("teleportuj ").appendField(new Blockly.FieldDropdown([["przyczyna", "cause"], ["powód", "reason"], ["typ", "type"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTeleportCause :: teleport (cause|reason|type)");
  }
};
Blockly.Blocks['lib_expr_797'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Temperature");
    this.appendValueInput("ARG1").appendField(" temperature z (bloki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTemperature :: [the] temperature[s] of %blocks%");
  }
};
Blockly.Blocks['lib_expr_798'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Ternary");
    this.appendValueInput("ARG1").appendField("(wartości) ");
    this.appendValueInput("ARG2").appendField(" if (wyra enie) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["otherwise", "otherwise"], ["else", "else"]]), "CH1");
    this.appendValueInput("ARG3").appendField(" (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTernary :: %objects% if <.+>[,] (otherwise|else) %objects%");
  }
};
Blockly.Blocks['lib_expr_799'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tekst Wyświetlacz Alignment");
    this.appendValueInput("ARG1").appendField(" tekst alignment z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTextDisplayAlignment :: [the] text alignment[s] of %displays%");
  }
};
Blockly.Blocks['lib_expr_800'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tekst Wyświetlacz Line Width");
    this.appendValueInput("ARG1").appendField(" line width z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTextDisplayLineWidth :: [the] line width of %displays%");
  }
};
Blockly.Blocks['lib_expr_801'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tekst Wyświetlacz Opacity");
    this.appendValueInput("ARG1").appendField("   opacity z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTextDisplayOpacity :: [the] [display] [text] opacity of %displays%");
  }
};
Blockly.Blocks['lib_expr_802'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tekst Z");
    this.appendValueInput("ARG1").appendField(" tekst z (displays) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTextOf :: [the] text[s] of %displays%");
  }
};
Blockly.Blocks['lib_expr_803'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Czas");
    this.appendValueInput("ARG1").appendField(" czas (opcjonalnie) w (światy) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTime :: [the] time[s] [([with]in|of) %worlds%]");
  }
};
Blockly.Blocks['lib_expr_804'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Czas Lived");
    this.appendDummyInput().appendField(" czas ").appendField(new Blockly.FieldDropdown([["alive", "alive"], ["lived", "lived"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTimeLived :: [the] time (alive|lived) of %entities%");
  }
};
Blockly.Blocks['lib_expr_805'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Czas Played");
    this.appendValueInput("ARG1").appendField(" czas played z (offlineplayers) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTimePlayed :: [the] (time played|play[ ]time) of %offlineplayers%");
  }
};
Blockly.Blocks['lib_expr_806'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Times");
    this.appendValueInput("ARG1").appendField("(liczba) ");
    this.appendDummyInput().appendField(" czas");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTimes :: %number% time[s]");
  }
};
Blockly.Blocks['lib_expr_807'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Czas Since");
    this.appendValueInput("ARG1").appendField(" czas since (dates) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTimeSince :: [the] time since %dates%");
  }
};
Blockly.Blocks['lib_expr_808'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Czas trwania Details");
    this.appendDummyInput().appendField(" :").appendField(new Blockly.FieldDropdown([["tick", "tick"], ["second", "second"], ["minute", "minute"], ["hour", "hour"], ["day", "day"], ["week", "week"], ["month", "month"], ["year", "year"]]), "CH1");
    this.appendValueInput("ARG1").appendField("s z (timespans) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTimespanDetails :: [the] (:(tick|second|minute|hour|day|week|month|year))s of %timespans%");
  }
};
Blockly.Blocks['lib_expr_809'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Czas State");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["former", "former"], ["past", "past"], ["old", "old"]]), "CH1");
    this.appendValueInput("ARG1").appendField("   (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTimeState :: [the] (former|past|old) [state] [of] %~objects%");
  }
};
Blockly.Blocks['lib_expr_810'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Tool");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["tool", "tool"], ["held przedmiot", "held item"], ["weapon", "weapon"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (opcjonalnie) z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTool :: [the] (tool|held item|weapon) [of %livingentities%]");
  }
};
Blockly.Blocks['lib_expr_811'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Total Doświadczenie");
    this.appendValueInput("ARG1").appendField("  doświadczenie z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTotalExperience :: [the] [total] experience of %entities%");
  }
};
Blockly.Blocks['lib_expr_812'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: TPS");
    this.appendDummyInput().appendField("tps z  last  minute");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTPS :: tps from [the] last ([1] minute|1[ ]m[inute])");
  }
};
Blockly.Blocks['lib_expr_813'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Transform");
    this.appendValueInput("ARG1").appendField("(wartości) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["transformed", "transformed"], ["mapped", "mapped"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["używając", "using"], ["z", "with"]]), "CH2");
    this.appendValueInput("ARG2").appendField(" \\(opcjonalnie) (wyra enie) ");
    this.appendDummyInput().appendField("\\");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTransform :: %objects% (transformed|mapped) (using|with) \\[<.+>\\]");
  }
};
Blockly.Blocks['lib_expr_814'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Transform Powód");
    this.appendDummyInput().appendField(" transform ").appendField(new Blockly.FieldDropdown([["przyczyna", "cause"], ["powód", "reason"], ["typ", "type"]]), "CH1");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTransformReason :: [the] transform[ing] (cause|reason|type)");
  }
};
Blockly.Blocks['lib_expr_815'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Typ Z");
    this.appendValueInput("ARG1").appendField(" typ z (entitydatas) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprTypeOf :: [the] type of %entitydatas/itemtypes/inventories/potioneffects/blockdatas/enchantmenttypes%");
  }
};
Blockly.Blocks['lib_expr_816'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Unbreakable");
    this.appendValueInput("ARG1").appendField("breakable (przedmioty) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprUnbreakable :: [:un]breakable %itemtypes%");
  }
};
Blockly.Blocks['lib_expr_817'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Unix Date");
    this.appendValueInput("ARG1").appendField(" unix date z (liczby) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprUnixDate :: [the] unix date of %numbers%");
  }
};
Blockly.Blocks['lib_expr_818'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Unix Ticks");
    this.appendValueInput("ARG1").appendField(" unix timestamp z (dates) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprUnixTicks :: [the] unix timestamp of %dates%");
  }
};
Blockly.Blocks['lib_expr_819'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Unleash Powód");
    this.appendDummyInput().appendField(" unleash powód");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprUnleashReason :: [the] unleash[ing] reason");
  }
};
Blockly.Blocks['lib_expr_820'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: UUID");
    this.appendValueInput("ARG1").appendField(" uuid z (offlineplayers) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprUUID :: [the] uuid[s] of %offlineplayers/worlds/entities%");
  }
};
Blockly.Blocks['lib_expr_821'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wartość");
    this.appendValueInput("ARG1").appendField(" (classinfo) ");
    this.appendValueInput("ARG2").appendField(" wartość z (valued) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprValue :: [the] %*classinfo% value of %valued%");
  }
};
Blockly.Blocks['lib_expr_822'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wartość Within");
    this.appendValueInput("ARG1").appendField(" (classinfo) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["within", "within"], ["w", "in"]]), "CH1");
    this.appendValueInput("ARG2").appendField(" (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprValueWithin :: [the] (%-*classinfo%|value[:s]) (within|in) %~objects%");
  }
};
Blockly.Blocks['lib_expr_823'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Angle Between");
    this.appendValueInput("ARG1").appendField(" angle between  (wektor) ");
    this.appendValueInput("ARG2").appendField(" i (wektor) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorAngleBetween :: [the] angle between [[the] vectors] %vector% and %vector%");
  }
};
Blockly.Blocks['lib_expr_824'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Between Lokalizacje");
    this.appendDummyInput().appendField(" wektor ").appendField(new Blockly.FieldDropdown([["z", "from"], ["between", "between"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (lokalizacja) ");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["do", "to"], ["i", "and"]]), "CH2");
    this.appendValueInput("ARG2").appendField(" (lokalizacja) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorBetweenLocations :: [the] vector (from|between) %location% (to|and) %location%");
  }
};
Blockly.Blocks['lib_expr_825'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Cross Product");
    this.appendValueInput("ARG1").appendField("(wektor) ");
    this.appendValueInput("ARG2").appendField(" cross (wektor) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorCrossProduct :: %vector% cross %vector%");
  }
};
Blockly.Blocks['lib_expr_826'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Cylindrical");
    this.appendValueInput("ARG1").appendField("  cylindrical wektor   (liczba) ");
    this.appendValueInput("ARG2").appendField(",  (liczba) ");
    this.appendValueInput("ARG3").appendField(",  (liczba) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorCylindrical :: [a] [new] cylindrical vector [from|with] [radius] %number%, [yaw] %number%(,[ and]| and) [height] %number%");
  }
};
Blockly.Blocks['lib_expr_827'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Dot Product");
    this.appendValueInput("ARG1").appendField("(wektor) ");
    this.appendValueInput("ARG2").appendField(" dot (wektor) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorDotProduct :: %vector% dot %vector%");
  }
};
Blockly.Blocks['lib_expr_828'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Z Kierunek");
    this.appendValueInput("ARG1").appendField("wektor  (directions) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorFromDirection :: vector[s] [from] %directions%");
  }
};
Blockly.Blocks['lib_expr_829'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Z XYZ");
    this.appendValueInput("ARG1").appendField("  wektor  (liczba) ");
    this.appendValueInput("ARG2").appendField(",(liczba) ");
    this.appendValueInput("ARG3").appendField(",(liczba) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorFromXYZ :: [a] [new] vector [(from|at|to)] %number%,[ ]%number%(,[ ]| and )%number%");
  }
};
Blockly.Blocks['lib_expr_830'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Z Yaw I Pitch");
    this.appendDummyInput().appendField("  wektor ").appendField(new Blockly.FieldDropdown([["z", "from"], ["z", "with"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" yaw (liczba) ");
    this.appendValueInput("ARG2").appendField(" i pitch (liczba) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorFromYawAndPitch :: [a] [new] vector (from|with) yaw %number% and pitch %number%");
  }
};
Blockly.Blocks['lib_expr_831'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Length");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["wektor", "vector"], ["standard", "standard"], ["normal", "normal"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" length z (vectors) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorLength :: [the] (vector|standard|normal) length[s] of %vectors%");
  }
};
Blockly.Blocks['lib_expr_832'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Normalize");
    this.appendDummyInput().appendField("normali").appendField(new Blockly.FieldDropdown([["z", "z"], ["s", "s"]]), "CH1");
    this.appendValueInput("ARG1").appendField("e (wektor) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorNormalize :: normali(z|s)e[d] %vector%");
  }
};
Blockly.Blocks['lib_expr_833'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Z Lokalizacja");
    this.appendDummyInput().appendField(" wektor ").appendField(new Blockly.FieldDropdown([["z", "of"], ["z", "from"], ["do", "to"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (lokalizacja) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorOfLocation :: [the] vector (of|from|to) %location%");
  }
};
Blockly.Blocks['lib_expr_834'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Projection");
    this.appendValueInput("ARG1").appendField(" projection  (wektor) ");
    this.appendValueInput("ARG2").appendField(" on (wektor) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorProjection :: [vector] projection [of] %vector% on[to] %vector%");
  }
};
Blockly.Blocks['lib_expr_835'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Losowy");
    this.appendDummyInput().appendField(" losowy wektor");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorRandom :: [a] random vector");
  }
};
Blockly.Blocks['lib_expr_836'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Spherical");
    this.appendValueInput("ARG1").appendField("  spherical wektor   (liczba) ");
    this.appendValueInput("ARG2").appendField(",  (liczba) ");
    this.appendValueInput("ARG3").appendField(",  (liczba) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorSpherical :: [a] [new] spherical vector [(from|with)] [radius] %number%, [yaw] %number%(,[ and]| and) [pitch] %number%");
  }
};
Blockly.Blocks['lib_expr_837'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Wektor Squared Length");
    this.appendValueInput("ARG1").appendField(" squared length z (vectors) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVectorSquaredLength :: [the] squared length[s] of %vectors%");
  }
};
Blockly.Blocks['lib_expr_838'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Pojazd");
    this.appendValueInput("ARG1").appendField(" pojazd z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVehicle :: [the] vehicle[s] of %entities%");
  }
};
Blockly.Blocks['lib_expr_839'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Velocity");
    this.appendDummyInput().appendField(" velocit").appendField(new Blockly.FieldDropdown([["y", "y"], ["ies", "ies"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVelocity :: [the] velocit(y|ies) of %entities/directionalparticles%");
  }
};
Blockly.Blocks['lib_expr_840'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Version");
    this.appendDummyInput().appendField("0¦bukkit-version");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVersion :: (0¦[craft]bukkit|1¦minecraft|2¦skript)( |-)version");
  }
};
Blockly.Blocks['lib_expr_841'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Version Tekst");
    this.appendDummyInput().appendField("  version ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVersionString :: [the] [shown|custom] version [string|text]");
  }
};
Blockly.Blocks['lib_expr_842'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: View Odległość");
    this.appendValueInput("ARG1").appendField(" view odległość z (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprViewDistance :: [the] view distance[s] of %players/worlds%");
  }
};
Blockly.Blocks['lib_expr_843'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Villager Poziom");
    this.appendValueInput("ARG1").appendField(" villager poziom z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVillagerLevel :: [the] villager (level|:experience) of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_844'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Villager Profession");
    this.appendValueInput("ARG1").appendField(" villager profession z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVillagerProfession :: [the] villager profession of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_845'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Villager Typ");
    this.appendValueInput("ARG1").appendField(" villager typ z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprVillagerType :: [the] villager type of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_846'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Warden Angry Przy");
    this.appendValueInput("ARG1").appendField(" most angered jednostka z (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWardenAngryAt :: [the] most angered entity of %livingentities%");
  }
};
Blockly.Blocks['lib_expr_847'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Warden Jednostka Anger");
    this.appendValueInput("ARG1").appendField(" anger poziom  (żywe jednostki) ");
    this.appendValueInput("ARG2").appendField(" towards (żywe jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWardenEntityAnger :: [the] anger level [of] %livingentities% towards %livingentities%");
  }
};
Blockly.Blocks['lib_expr_848'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Pogoda");
    this.appendDummyInput().appendField(" pogoda (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["w", "in"], ["z", "of"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" (gracze) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWeather :: [the] weather [(in|of) %players/worlds%]");
  }
};
Blockly.Blocks['lib_expr_849'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Whether");
    this.appendValueInput("ARG1").appendField("whether (wyra enie) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWhether :: whether <.+>");
  }
};
Blockly.Blocks['lib_expr_850'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Whitelist");
    this.appendDummyInput().appendField(" whitelist");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWhitelist :: [the] white[ ]list");
  }
};
Blockly.Blocks['lib_expr_851'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Z Fire Resistance");
    this.appendValueInput("ARG1").appendField("(przedmiot) ");
    this.appendDummyInput().appendField(" z fireresistance");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWithFireResistance :: %itemtype% with[:out] fire[ ]resistance");
  }
};
Blockly.Blocks['lib_expr_852'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Z Przedmiot Flagi");
    this.appendValueInput("ARG1").appendField("(przedmioty) ");
    this.appendValueInput("ARG2").appendField(" z  przedmiot flaga (itemflags) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWithItemFlags :: %itemtypes% with [the] item flag[s] %itemflags%");
  }
};
Blockly.Blocks['lib_expr_853'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Z Yaw Pitch");
    this.appendValueInput("ARG1").appendField("(lokalizacje) ");
    this.appendValueInput("ARG2").appendField(" z    (liczba) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWithYawPitch :: %locations% with [a] (:yaw|:pitch) [of] %number%");
  }
};
Blockly.Blocks['lib_expr_854'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Świat");
    this.appendValueInput("ARG1").appendField(" świat (opcjonalnie) z (lokalizacje) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWorld :: [the] world [of %locations/entities/chunk%]");
  }
};
Blockly.Blocks['lib_expr_855'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Świat Granica");
    this.appendValueInput("ARG1").appendField(" światgranica z (światy) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWorldBorder :: [the] world[ ]border of %worlds/players%");
  }
};
Blockly.Blocks['lib_expr_856'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Świat Granica Center");
    this.appendDummyInput().appendField(" światgranica ").appendField(new Blockly.FieldDropdown([["center", "center"], ["middle", "middle"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (worldborders) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWorldBorderCenter :: [the] world[ ]border (center|middle) of %worldborders%");
  }
};
Blockly.Blocks['lib_expr_857'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Świat Granica Zadaj obrażenia Amount");
    this.appendValueInput("ARG1").appendField(" światgranica zadaj obrażenia amount z (worldborders) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWorldBorderDamageAmount :: [the] world[ ]border damage amount of %worldborders%");
  }
};
Blockly.Blocks['lib_expr_858'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Świat Granica Zadaj obrażenia Buffer");
    this.appendValueInput("ARG1").appendField(" światgranica zadaj obrażenia buffer z (worldborders) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWorldBorderDamageBuffer :: [the] world[ ]border damage buffer of %worldborders%");
  }
};
Blockly.Blocks['lib_expr_859'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Świat Granica Size");
    this.appendDummyInput().appendField(" światgranica ").appendField(new Blockly.FieldDropdown([["size", "size"], ["diameter", "diameter"]]), "CH1");
    this.appendValueInput("ARG1").appendField(" z (worldborders) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWorldBorderSize :: [the] world[ ]border (size|diameter|:radius) of %worldborders%");
  }
};
Blockly.Blocks['lib_expr_860'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Świat Granica Warning Odległość");
    this.appendValueInput("ARG1").appendField(" światgranica warning odległość z (worldborders) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWorldBorderWarningDistance :: [the] world[ ]border warning distance of %worldborders%");
  }
};
Blockly.Blocks['lib_expr_861'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Świat Granica Warning Czas");
    this.appendValueInput("ARG1").appendField(" światgranica warning czas z (worldborders) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWorldBorderWarningTime :: [the] world[ ]border warning time of %worldborders%");
  }
};
Blockly.Blocks['lib_expr_862'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Świat Environment");
    this.appendValueInput("ARG1").appendField("  environment z (światy) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWorldEnvironment :: [the] [world] environment of %worlds%");
  }
};
Blockly.Blocks['lib_expr_863'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Świat Z Nazwa");
    this.appendValueInput("ARG1").appendField(" świat  (tekst) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWorldFromName :: [the] world [(named|with name)] %string%");
  }
};
Blockly.Blocks['lib_expr_864'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Światy");
    this.appendDummyInput().appendField(" światy");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprWorlds :: [(all [[of] the]|the)] worlds");
  }
};
Blockly.Blocks['lib_expr_865'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: X Z");
    this.appendValueInput("ARG1").appendField("(liczba) ");
    this.appendValueInput("ARG2").appendField(" z (itemstacks) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprXOf :: %number% of %itemstacks/itemtypes/entitytypes/particles%");
  }
};
Blockly.Blocks['lib_expr_866'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: XYZ Component");
    this.appendDummyInput().appendField("  ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprXYZComponent :: [vector|quaternion] (:w|:x|:y|:z) [component[s]]");
  }
};
Blockly.Blocks['lib_expr_867'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Yaw Pitch");
    this.appendValueInput("ARG1").appendField(" pitch z (jednostki) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("ExprYawPitch :: [the] (:yaw|pitch) of %entities/locations/vectors%");
  }
};
Blockly.Blocks['lib_expr_868'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: My Expression");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("MyExpression :: [the]");
  }
};
Blockly.Blocks['lib_expr_869'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prop Expr Amount");
    this.appendValueInput("ARG1").appendField(" amount z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("PropExprAmount :: [the] amount[:s] of %objects%");
  }
};
Blockly.Blocks['lib_expr_870'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prop Expr Custom Nazwa");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["wyświetlacz", "display"], ["nick", "nick"], ["czat", "chat"], ["custom", "custom"]]), "CH1");
    this.appendValueInput("ARG1").appendField("nazwa z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("PropExprCustomName :: [the] (display|nick|chat|custom)[ ]name[s] of %objects%");
  }
};
Blockly.Blocks['lib_expr_871'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prop Expr Nazwa");
    this.appendValueInput("ARG1").appendField(" nazwa z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("PropExprName :: [the] name[s] of %objects%");
  }
};
Blockly.Blocks['lib_expr_872'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prop Expr Liczba");
    this.appendValueInput("ARG1").appendField(" liczba z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("PropExprNumber :: [the] number[:s] of %objects%");
  }
};
Blockly.Blocks['lib_expr_873'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prop Expr Progress");
    this.appendValueInput("ARG1").appendField(" progress z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("PropExprProgress :: [the] progress of %objects%");
  }
};
Blockly.Blocks['lib_expr_874'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prop Expr Skala");
    this.appendValueInput("ARG1").appendField(" skala z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("PropExprScale :: [the] scale[s] of %objects%");
  }
};
Blockly.Blocks['lib_expr_875'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prop Expr Size");
    this.appendValueInput("ARG1").appendField(" size z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("PropExprSize :: [the] size[:s] of %objects%");
  }
};
Blockly.Blocks['lib_expr_876'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prop Expr Style");
    this.appendValueInput("ARG1").appendField(" style z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("PropExprStyle :: [the] style[s] of %objects%");
  }
};
Blockly.Blocks['lib_expr_877'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prop Expr Title");
    this.appendValueInput("ARG1").appendField(" title z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("PropExprTitle :: [the] title[s] of %objects%");
  }
};
Blockly.Blocks['lib_expr_878'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prop Expr Wartość Z");
    this.appendValueInput("ARG1").appendField(" (opcjonalnie) (classinfo) ");
    this.appendValueInput("ARG2").appendField(" wartość z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("PropExprValueOf :: [the] [%-*classinfo%] value of %objects%");
  }
};
Blockly.Blocks['lib_expr_879'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prop Expr Viewers");
    this.appendValueInput("ARG1").appendField(" viewer z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("PropExprViewers :: [the] viewer[s] of %objects%");
  }
};
Blockly.Blocks['lib_expr_880'] = {
  init: function() {
    this.appendDummyInput().appendField("Wzorzec: Prop Expr WXYZ");
    this.appendValueInput("ARG1").appendField(" - z (wartości) ");
    this.setOutput(true, null);
    this.setColour("#3f9b93");
    this.setInputsInline(false);
    this.setTooltip("PropExprWXYZ :: [the] (:x|:y|:z|:w)( |-)[component[s]|coord[inate][s]|dep:(pos[ition[s]]|loc[ation][s])] of %objects%");
  }
};
Blockly.Blocks['lib_sec_881'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Catch Errors");
    this.appendDummyInput().appendField("catch  error");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("SecCatchErrors :: catch [run[ ]time] error[s]");
  }
};
Blockly.Blocks['lib_sec_882'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Sec Stwórz");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["stwórz", "spawn"], ["summon", "summon"]]), "CH1");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("EffSecSpawn :: (spawn|summon)");
  }
};
Blockly.Blocks['lib_sec_883'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Filter");
    this.appendValueInput("ARG1").appendField("filter (wartości) ");
    this.appendDummyInput().appendField(" do match ");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("SecFilter :: filter %~objects% to match [:any|all]");
  }
};
Blockly.Blocks['lib_sec_884'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Dopóki");
    this.appendValueInput("ARG1").appendField(" dopóki (wyra enie) ");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("SecWhile :: [:do] while <.+>");
  }
};
Blockly.Blocks['lib_sec_885'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Pętla");
    this.appendValueInput("ARG1").appendField("pętla (wartości) ");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("SecLoop :: loop %objects%");
  }
};
Blockly.Blocks['lib_sec_886'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Sec Shoot");
    this.appendValueInput("ARG1").appendField("shoot (entitydatas) ");
    this.appendValueInput("ARG2").appendField(" (opcjonalnie) z (żywe jednostki) ");
    this.appendDummyInput().appendField(" (opcjonalnie) ").appendField(new Blockly.FieldDropdown([["przy", "at"], ["z", "with"]]), "CH1");
    this.appendDummyInput().appendField(" ").appendField(new Blockly.FieldDropdown([["prędkość", "speed"], ["velocity", "velocity"]]), "CH2");
    this.appendValueInput("ARG3").appendField(" (liczba) ");
    this.appendValueInput("ARG4").appendField(" (opcjonalnie) (kierunek) ");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("EffSecShoot :: shoot %entitydatas% [from %livingentities/locations%] [(at|with) (speed|velocity) %-number%] [%-direction%]");
  }
};
Blockly.Blocks['lib_sec_887'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Conditional");
    this.appendDummyInput().appendField("else");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("SecConditional :: else");
  }
};
Blockly.Blocks['lib_sec_888'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Na");
    this.appendValueInput("ARG1").appendField("na   (wartość) ");
    this.appendValueInput("ARG2").appendField(" w (wartości) ");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("SecFor :: (for [each]|loop) [value] %~object% in %objects%");
  }
};
Blockly.Blocks['lib_sec_889'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Auto Reload");
    this.appendDummyInput().appendField("auto reload ");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("StructAutoReload :: auto[matically] reload [(this|the) script]");
  }
};
Blockly.Blocks['lib_sec_890'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Aliasy");
    this.appendDummyInput().appendField("aliasy");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("StructAliases :: aliases");
  }
};
Blockly.Blocks['lib_sec_891'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Zdarzenie");
    this.appendValueInput("ARG1").appendField("  (wyra enie) ");
    this.appendDummyInput().appendField(" ");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("StructEvent :: [on] [:uncancelled|:cancelled|any:(any|all)] <.+> [priority:with priority (:(lowest|low|normal|high|highest|monitor))]");
  }
};
Blockly.Blocks['lib_sec_892'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Funkcja");
    this.appendValueInput("ARG1").appendField(" funkcja (wyra enie) ");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("StructFunction :: [:local] function <.+>");
  }
};
Blockly.Blocks['lib_sec_893'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Opcje");
    this.appendDummyInput().appendField("opcje");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("StructOptions :: options");
  }
};
Blockly.Blocks['lib_sec_894'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Zmienne");
    this.appendDummyInput().appendField("zmienne");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("StructVariables :: variables");
  }
};
Blockly.Blocks['lib_sec_895'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Używając");
    this.appendValueInput("ARG1").appendField("używając  (wyra enie) ");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("StructUsing :: using [[the] experiment] <.+>");
  }
};
Blockly.Blocks['lib_sec_896'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Komenda");
    this.appendDummyInput().appendField("usage");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("StructCommand :: usage");
  }
};
Blockly.Blocks['lib_sec_897'] = {
  init: function() {
    this.appendDummyInput().appendField("Sekcja: Example");
    this.appendDummyInput().appendField("example");
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2f6f4f");
    this.setInputsInline(false);
    this.setTooltip("StructExample :: example");
  }
};
