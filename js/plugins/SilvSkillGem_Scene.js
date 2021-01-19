//=============================================================================
// SilvSkillGem_Scene.js
// Version: 1.03
//=============================================================================
/*:
 * @plugindesc v1.03 SilvSkillGem Scene. For equipping/unequipping skill gems. <SilvSkillGem_Scene>
 * @author Silver
 *
 * @param -- Core --
 *
 * @param Unequip ID
 * @desc The Armor-ID of the item that'll function as the Unequip-button in the Equip-Scene.
 * @default 48
 *
 * @param -- Menu Sizing --
 *
 * @param Character Info Window Height
 * @desc Height of the character info window
 * @default 256
 *
 * @param Character Info Window Status X
 * @desc The x-location of the character-status in the Character Info Window.
 * @default 200
 *
 * @param Character Info Window Show Basic Status 1
 * @desc Show the actor's name, level and icons?
 * @default true
 *
 * @param Character Info Window Show Basic Status 2
 * @desc Show the actor's class, HP and MP?
 * @default true
 *
 * @param Info Width
 * @desc Width of the info window
 * @default 340
 *
 * @param Skill Gems List Width
 * @desc Width of the skillgem list window
 * @default 256
 *
 * @param Skill Gems List Scale
 * @desc The scale of the items inside of the skillgem list window. 1.0 = 100%.
 * @default 1.0
 *
 * @param Skill Gems List Padding Bounds
 * @desc The minimum & maximum padding for the items inside of the skillgem list window.
 * @default 5 18
 *
 * @param Equip-Window Font Size
 * @desc The fontsize for the equipment names in the equipment window.
 * @default 28
 *
 * @param Equip-Window Padding
 * @desc The equipment window's padding value.
 * @default 18
 *
 * @param Equip-Window Icon Offset X
 * @desc The icon x-offset of the equipment window it's icons. This also determines the equipment name x-offset
 * @default 138
 *
 * @param Equip-Window Show Slot-names
 * @desc Show the equipment-slot names?
 * @default true
 *
 * @param Equip-Window Show Icons
 * @desc Show the equipment-slot icons?
 * @default true
 *
 * @param Equip-Window Show Item Names
 * @desc Show the equipment names?
 * @default true
 *
 * @param Enable Default Resolution Support
 * @desc Enable this to automatically configure (will override some settings) the parameters to support the default RPG Maker MV resolution. By default the parameters are optimized for 1280x720.
 * @default false
 *
 * @param -- Visuals --
 *
 * @param Info Window Caption Color
 * @desc The color of captions in the info window in Scene_SG
 * @default #66FFFF
 *
 * @param Stat Info Color Positive
 * @desc The color of stat-values for the actor when they are positive
 * @default #33CC00
 *
 * @param Stat Info Color Negative
 * @desc The color of stat-values for the actor when they are negative
 * @default #C00000
 *
 * @param Character window Horizontal Line Color
 * @desc The color of the horizontal line in the character info window.
 * @default #FFFFFF
 *
 * @param Slot Background Color
 * @desc The color of the background which have the sockets drawn on top of them.
 * @default #000000
 *
 * @param Slot Background Opacity
 * @desc The opacity of the background which have the sockets drawn on top of them. Use a value between 0-255.
 * @default 128
 *
 * @param -- Strings --
 *
 * @param Unequip Description
 * @desc #name# will be replaced by the "Skill Gem Name"-parameter value from the plugin SilvSkillGem.js.
 * @default Unequip selected #name#.
 *
 * @param Support Gem Text
 * @desc The text to display instead of the list of skills for support gems. #name# will be replaced by the "Skill Gem Name"-parameter value from the plugin SilvSkillGem.js.
 * @default Support #name#
 *
 * @param Stat Bonuses Header Text
 * @desc The Stat Bonuses Header Text.
 * @default Stat Bonuses:
 *
 * @param Gem w/o Skills Text
 * @desc The text to display instead of the list of skills when the gem has no active skills at all (but is not a support gem).
 * @default None
 *
 * @param No Stat Bonuses Text
 * @desc The text to display when a gem gives no stat bonuses at all.
 * @default None
 *
 * @param Stat Changes Header Text
 * @desc The stat-changes header text.
 * @default Stat Changes:
 *
 * @param Exp To Next Level Text
 * @desc The "Exp To Next Level" text.
 * @default Experience to next level:
 *
 * @param Skills Header Text
 * @desc The Skills Header Text
 * @default Skills:
 *
 * @param Learnable Skills Header Text
 * @desc The Skills Header Text
 * @default Learnable Skills:
 *
 * @param Commands Header Text
 * @desc The Commands Header Text
 * @default Commands:
 *
 * @param Null Skill Text
 * @desc Text to display when there is no skill for a particular gem-rank.
 * @default -
 *
 * @param Selected Info Prefix
 * @desc Text to display when highlighting a gem in a socket. #name# will be replaced by the "Skill Gem Name"-parameter value from the plugin SilvSkillGem.js.
 * @default Selected:
 *
 * @param Selected Info When Empty
 * @desc Text to display when highlighting an empty socket. #name# will be replaced by the "Skill Gem Name"-parameter value from the plugin SilvSkillGem.js.
 * @default There's no #name# in selected socket.
 *
 * @param Param Length
 * @desc The length of each parameter-string. Strings shorter than this length will obtain trailing spaces until it meets this length.
 * @default 11
 *
 * @param Max HP
 * @default Max HP:
 * @param Max MP
 * @default Max MP:
 * @param Attack
 * @default Attack:
 * @param Defense
 * @default Defense:
 * @param M-Attack
 * @default M-Attack:
 * @param M-Defense
 * @default M-Defense:
 * @param Agility
 * @default Agility:
 * @param Luck
 * @default Luck:
 *
 * @param -- Input --
 *
 * @param Item Window Disable Pageup & Pagedown
 * @desc Disable the pageup and pagedown keys for the item window? true/false
 * @default true
 *
 * @param Scroll Info Window Up
 * @desc The (RPG Maker MV) key-string for scrolling the info window contents up.
 * @default pagedown
 *
 * @param Scroll Info Window Down
 * @desc The (RPG Maker MV) key-string for scrolling the info window contents down.
 * @default pageup
 *
 * @param Info Window Scroll Speed
 * @desc The scrollspeed for the info window.
 * @default 3
 *
 * @param Reset Scroll Between Items
 * @desc Reset the scroll when the selected item in the item window changed? true/false
 * @default true
 *
 * @param -- Advanced --
 *
 * @param Slot Size
 * @desc The size of each slot in the scene (default the images are 32x32).
 * @default 32
 *
 * @param Slot Size Background Spacing
 * @desc The y-offset between each slot.
 * @default 4
 *
 *--------------------------------------
 * Version History:
 *--------------------------------------
 * v1.03 (04 February 2016) [Parameters Changed]
 * - Merged the Sockets.png and Orbs.png into one image called Gems.png.
 * - Added extra parameters for supporting RPG Maker MV's default resolution. By default the parameters are configured for 1280x720.
 *   Either configure the parameters manually or use the new parameter "Enable Default Resolution Support".
 * - The info window can now be scrolled vertically (default keys: pageup & pagedown).
 * - Fixed a display glitch when a gem was limited to just 1 rank. It would show an empty XP-gauge instead of a filled one.
 *
 * v1.02 (02 February 2016) [Parameters Changed]
 * - The info window now shows the highlighted gem in the equipped slot info.
 * - Added more parameters.
 * - Fixed a bug: when the cursor was over an empty socket it would still display the info from the previous socket.
 *
 * v1.01 (31 January 2016) [Parameters Changed]
 * - Added the important "Unequip ID"-parameter.
 * - Added lot's of extra parameters.
 * - Gems can now be flagged as 'unique per link group'.
 *
 * v1.00 (30 January 2016)
 * - First Public Release.
 *
 * v1.00 (12 December 2015)
 * - First Internal Release.
 *
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
 
// Imported
var Imported = Imported || {};
Imported.Silv_SG_Scene = 1.03;
 
// Dependencies
if (!('Silv_SG_Core' in Imported) || (Imported.Silv_SG_Core < 1.00)) { throw new Error('ERROR: Silvers SkillGems_Scene requires Silvers SkillGem v1.00 or higher. It must be placed above this plugin.'); }

// Get Plugin #Parameters
var Silv = Silv || {};
Silv.Parameters = $plugins.filter(function(p) { return p.description.contains('<SilvSkillGem_Scene>'); })[0].parameters;
Silv.SG_Scene = Silv.SG_Scene || {};
// Core
Silv.SG_Scene.UnEquipItem_ID           = parseInt(Silv.Parameters['Unequip ID']);
// Menu Sizing
Silv.SG_Scene.CharacterInfoHeight      = parseInt(Silv.Parameters['Character Info Window Height']);
Silv.SG_Scene.CharacterInfoStatus_X    = parseInt(Silv.Parameters['Character Info Window Status X']);
Silv.SG_Scene.CharacterInfoShowStatus1 = Silv.Parameters['Character Info Window Show Basic Status 1'].toLowerCase() === 'true';
Silv.SG_Scene.CharacterInfoShowStatus2 = Silv.Parameters['Character Info Window Show Basic Status 2'].toLowerCase() === 'true';
Silv.SG_Scene.InfoWidth                = parseInt(Silv.Parameters['Info Width']);
Silv.SG_Scene.ItemListWidth            = parseInt(Silv.Parameters['Skill Gems List Width']);
Silv.SG_Scene.ItemListScale            = parseFloat(Silv.Parameters['Skill Gems List Scale']);
Silv.SG_Scene.ItemListPaddingMin       = parseInt(Silv.Parameters['Skill Gems List Padding Bounds'].split(' ')[0]);
Silv.SG_Scene.ItemListPaddingMax       = parseInt(Silv.Parameters['Skill Gems List Padding Bounds'].split(' ')[1]);
Silv.SG_Scene.EquipWindowFontSize      = parseInt(Silv.Parameters['Equip-Window Font Size']);
Silv.SG_Scene.EquipWindowPadding       = parseInt(Silv.Parameters['Equip-Window Padding']);
Silv.SG_Scene.EquipWindowIconOffset_X  = parseInt(Silv.Parameters['Equip-Window Icon Offset X']);
Silv.SG_Scene.EquipWindowDrawSlotNames = Silv.Parameters['Equip-Window Show Slot-names'].toLowerCase() === 'true';
Silv.SG_Scene.EquipWindowDrawIcons     = Silv.Parameters['Equip-Window Show Icons'].toLowerCase() === 'true';
Silv.SG_Scene.EquipWindowDrawItemNames = Silv.Parameters['Equip-Window Show Item Names'].toLowerCase() === 'true';
Silv.SG_Scene.DefaultResolutionEnabled = Silv.Parameters['Enable Default Resolution Support'].toLowerCase() === 'true';
if (Silv.SG_Scene.DefaultResolutionEnabled)
{
	Silv.SG_Scene.CharacterInfoStatus_X    = 50;
	Silv.SG_Scene.CharacterInfoShowStatus1 = false;
	Silv.SG_Scene.ItemListWidth            = 128;
	Silv.SG_Scene.ItemListScale            = 0.5;
	Silv.SG_Scene.ItemListPaddingMax       = 9;
	Silv.SG_Scene.EquipWindowIconOffset_X  = 0;
	Silv.SG_Scene.EquipWindowDrawSlotNames = false;
	Silv.SG_Scene.EquipWindowDrawItemNames = false;
}
// Visuals
Silv.SG_Scene.InfoWindowCaptionColor   = Silv.Parameters['Info Window Caption Color'];
Silv.SG_Scene.StatInfoColorPositive    = Silv.Parameters['Stat Info Color Positive'];
Silv.SG_Scene.StatInfoColorNegative    = Silv.Parameters['Stat Info Color Negative'];
Silv.SG_Scene.CharwindowHorLineColor   = Silv.Parameters['Character window Horizontal Line Color'];
Silv.SG_Scene.SlotBGColor              = Silv.Parameters['Slot Background Color'];
Silv.SG_Scene.SlotBGOpacity            = parseInt(Silv.Parameters['Slot Background Opacity']);
// Strings
Silv.SG_Scene.UnequipDesc              = Silv.Parameters['Unequip Description'].replace('#name#', Silv.SG.Name);
Silv.SG_Scene.SupportText              = Silv.Parameters['Support Gem Text'].replace('#name#', Silv.SG.Name);
Silv.SG_Scene.StatBonusHeaderText      = Silv.Parameters['Stat Bonuses Header Text'];
Silv.SG_Scene.NoSkillsText             = Silv.Parameters['Gem w/o Skills Text'];
Silv.SG_Scene.NoStatBonusText          = Silv.Parameters['No Stat Bonuses Text'];
Silv.SG_Scene.StatChangesText          = Silv.Parameters['Stat Changes Header Text'];
Silv.SG_Scene.ExpToNextLevelText       = Silv.Parameters['Exp To Next Level Text'];
Silv.SG_Scene.SkillsHeaderText         = Silv.Parameters['Skills Header Text'];
Silv.SG_Scene.LearnableSkillsHeaderText= Silv.Parameters['Learnable Skills Header Text'];
Silv.SG_Scene.CommandsHeaderText       = Silv.Parameters['Commands Header Text'];
Silv.SG_Scene.NullSkillText            = Silv.Parameters['Null Skill Text'];
Silv.SG_Scene.SelInfoText              = Silv.Parameters['Selected Info Prefix'].replace('#name#', Silv.SG.Name);
if (Silv.SG_Scene.SelInfoText[Silv.SG_Scene.SelInfoText.length - 1] !== ' ') { Silv.SG_Scene.SelInfoText += ' '; } // Enforce this string to end with a space-character.
Silv.SG_Scene.SelInfoTextEmptySocket   = Silv.Parameters['Selected Info When Empty'].replace('#name#', Silv.SG.Name);

Silv.SG_Scene.ParamLength              = parseInt(Silv.Parameters['Param Length']);
Silv.SG_Scene.Params                   = [];
Silv.SG_Scene.Params.push(Silv.Parameters['Max HP']);
Silv.SG_Scene.Params.push(Silv.Parameters['Max MP']);
Silv.SG_Scene.Params.push(Silv.Parameters['Attack']);
Silv.SG_Scene.Params.push(Silv.Parameters['Defense']);
Silv.SG_Scene.Params.push(Silv.Parameters['M-Attack']);
Silv.SG_Scene.Params.push(Silv.Parameters['M-Defense']);
Silv.SG_Scene.Params.push(Silv.Parameters['Agility']);
Silv.SG_Scene.Params.push(Silv.Parameters['Luck']);
Silv.SG_Scene.Params = Silv.SG_Scene.Params.map(function(p){
	if (p[p.length-1] !== ' ') { p += ' '; } // Add trailing space
	while (p.length < Silv.SG_Scene.ParamLength) { p = ' ' + p; } // If applicable, add leading space(s)
	return p;
});
// Input
Silv.SG_Scene.ItemWinDisablePageUpDown = Silv.Parameters['Item Window Disable Pageup & Pagedown'].toLowerCase() === 'true';
Silv.SG_Scene.InfoWindowScrollKeyUp    = Silv.Parameters['Scroll Info Window Up'];
Silv.SG_Scene.InfoWindowScrollKeyDown  = Silv.Parameters['Scroll Info Window Down'];
Silv.SG_Scene.InfoWindowScrollSpeed    = parseInt(Silv.Parameters['Info Window Scroll Speed']);
Silv.SG_Scene.InfoWinAutoResetScroll   = Silv.Parameters['Reset Scroll Between Items'].toLowerCase() === 'true';
// Advanced
Silv.SG_Scene.SlotSize                 = parseInt(Silv.Parameters['Slot Size']);
Silv.SG_Scene.SlotBGSpacing            = parseInt(Silv.Parameters['Slot Size Background Spacing']);

// Non-Parameters
Silv.SG_Scene.ActiveActor    = null; // The actor for whom to equip/unequip the materia. Also use $gameActors and NOT $dataActors to fill this variable!
Silv.SG_Scene.UnEquipItem_DB = '$dataArmors'; // Must be a string

// Alias
Silv.Alias = Silv.Alias || {};
if (!Silv.AddAlias)
{
	Silv.AddAlias = function(alias, original_method)
	{
		if (Silv.Alias[alias]) { throw new Error('Alias already exists: ' + alias); }
		Silv.Alias[alias] = original_method;
	};
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Utilities
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.allValuesEqual = function(match)
{
	if (match)
	{
		for(var i = 1; i < this.length; i++)
		{
			if (this[i] != match) { return false; }
		}
	}
	else
	{
		for(var i = 1; i < this.length; i++)
		{
			if (this[i] !== this[0]) { return false; }
		}
	}
    return true;
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #Scene_SG
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene_SG
//
// The scene class of the debug screen.

function Scene_SG() { this.initialize.apply(this, arguments); }

Scene_SG.prototype = Object.create(Scene_MenuBase.prototype);
Scene_SG.prototype.constructor = Scene_SG;

Scene_SG.prototype.initialize = function()
{
	this.silv = {}; // For storing variables
	this.silv.selEquipIdx = -1;
	this.silv.selEquipSocketIdx = -1;
	this.silv.selSocket = null;
	this.silv.selGem = null;
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_SG.prototype.create = function()
{
    Scene_MenuBase.prototype.create.call(this);
	
	this.itemWindowWidth = Silv.SG_Scene.ItemListWidth;
	this.createAllWindows();
    this.equipWindow.activate();
};
//------------------------------------------------------------------------------------------------------------------------------------
// #Create Windows
//------------------------------------------------------------------------------------------------------------------------------------
Scene_SG.prototype.createAllWindows = function()
{
	this.createCharacterInfoWindow(); // top
	this.createEquipWindow();         // left
	this.createItemWindow();          // bottom-center, contains list of skill gems
	this.createInfoWindow();          // right
	this.createEquipSlotsWindow();    // overlayed on top of the equip-window. IMPORTANT: MUST be placed AFTER the createEquipWindow() or it will be displayed underneath it (and is thus not visible)	
};

Scene_SG.prototype.createCharacterInfoWindow = function()
{
    this.characterInfoWindow = new Window_SG_CharacterInfo(Graphics.width - Silv.SG_Scene.InfoWidth);
    this.addWindow(this.characterInfoWindow);
};

Scene_SG.prototype.createItemWindow = function()
{
    this.itemWindow = new Window_SG_List(this.equipWindow.width, this.characterInfoWindow.y + this.characterInfoWindow.height, this.characterInfoWindow);
    this.itemWindow.setHandler('ok',     this.onListOk.bind(this));
    this.itemWindow.setHandler('cancel', this.onListCancel.bind(this));
    this.addWindow(this.itemWindow);
};

Scene_SG.prototype.createInfoWindow = function()
{
    this.infoWindow = new Window_SG_Info(Silv.SG_Scene.InfoWidth);
    this.addWindow(this.infoWindow);
	this.itemWindow.infoWindow = this.infoWindow;
};

Scene_SG.prototype.createEquipWindow = function()
{
    this.equipWindow = new Window_SG_Equip(this.characterInfoWindow.y + this.characterInfoWindow.height, Graphics.width - this.itemWindowWidth - Silv.SG_Scene.InfoWidth, Graphics.height - this.characterInfoWindow.height);
    this.equipWindow.setHandler('ok',       this.onEquipOk.bind(this));
    this.equipWindow.setHandler('cancel',   this.popScene.bind(this));
    this.addWindow(this.equipWindow);
};

Scene_SG.prototype.createEquipSlotsWindow = function()
{
	this.equipSlotsWindow = new Window_SG_EquipSlots(Graphics.width - this.itemWindowWidth - this.infoWindow.width, Silv.SG_Scene.SlotSize);
	this.equipSlotsWindow.setHandler('ok',       this.onEquipSlotsOk.bind(this));
    this.equipSlotsWindow.setHandler('cancel',   this.onEquipSlotsCancel.bind(this));
	this.addChild(this.equipSlotsWindow); //this.addWindow(this.equipSlotsWindow); // Do NOT use addWindow (It will 'bug'. Yay once more for poor RPG Maker Design...)
};

//------------------------------------------------------------------------------------------------------------------------------------
// #Binding Methods
// Window order: equipSlots -> equipSockets -> ItemList --> and back to equipSlots (unless cancelled)
//------------------------------------------------------------------------------------------------------------------------------------
Scene_SG.prototype.onEquipOk = function()
{	
	this.equipSlotsWindow.socketCnt = this.equipWindow.selItemsocketCnt;
	this.equipSlotsWindow.setGeometry(this.equipWindow.getOverlayGeomRect());
	this.equipSlotsWindow.select(this.silv.selEquipSocketIdx);
	this.itemWindow.refresh();
	this.equipSlotsWindow.visible = true;
	this.equipSlotsWindow.activate();	
	
	// This code must be placed AFTER the equipSlotsWindow-code above.
	this.equipWindow.select(-1);
};

Scene_SG.prototype.onEquipSlotsOk = function()
{
	if (Window_SG_List.lastIndex != -1)
	{
		this.itemWindow.select(Math.min(this.itemWindow.maxItems(), Window_SG_List.lastIndex));
	}
	else
	{
		this.itemWindow.select(0);
	}
	this.itemWindow.unequipEnabled = !Silv.SG_Scene.ActiveActor.socketIsEmpty(this.silv.selEquipIdx, this.equipSlotsWindow.index());
	this.itemWindow.activate();
};

Scene_SG.prototype.onListOk = function()
{
	if (this.itemWindow.index() > 0) // -1 = no selection and 0 = <remove skill-gem>
	{
		var item = this.itemWindow.item();
		Silv.SG_Scene.ActiveActor.equipSG(this.silv.selEquipIdx, this.silv.selEquipSocketIdx, item);
		this.itemListOkSuccess();
	}
	else
	{
		var wasUnequipped = Silv.SG_Scene.ActiveActor.unEquipSG(this.silv.selEquipIdx, this.silv.selEquipSocketIdx);		
		if (!wasUnequipped)
		{
			this.itemWindow.activate();
			SoundManager.playBuzzer();
		}
		else
		{
			this.itemListOkSuccess();
		}
	}
};

Scene_SG.prototype.itemListOkSuccess = function()
{
	// A skill-gem may have been added/removed from the list so it must get new data and it must be refreshed
	this.itemWindow.setData();
	this.itemWindow.refresh();
	
	// Refresh is required because a gem was added/removed to/from a socket.
	this.equipWindow.refresh();
	// Refresh the character info window because the player-stats might have changed.
	this.characterInfoWindow.refresh();
	
	// Clear gem-info
	this.infoWindow.clearInfo();
	
	this.onEquipSlotsCancel();
	
	this.itemWindow.select(-1);
};

Scene_SG.prototype.onEquipSlotsCancel = function()
{
	this.equipSlotsWindow.visible = false;
	this.equipWindow.select(this.silv.selEquipIdx);
	this.equipWindow.activate();
};

Scene_SG.prototype.onListCancel = function()
{
	this.itemWindow.select(-1);
    this.equipSlotsWindow.activate();
	
	// Clear gem-info
	this.infoWindow.clearInfo();
};

Scene_SG.prototype.popScene = function()
{
    Scene_Base.prototype.popScene.call(this);
	
	// Clean up
	this.removeWindow(this.infoWindow);
	this.removeWindow(this.itemWindow);
	this.removeWindow(this.equipWindow);
	this.removeWindow(this.equipSlotsWindow);
	Silv.SG_Scene.ActiveActor = null;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene Menu (For: Yanfly's Main #Menu Manager)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This alias is required for compatibility with Yanfly's Main Menu Manager.
Silv.AddAlias('sgScene_Window_MenuStatus_processOk', Window_MenuStatus.prototype.processOk);
Window_MenuStatus.prototype.processOk = function()
{
	Silv.SG_Scene.ActiveActor = $gameParty.members()[this.index()];
	Silv.Alias.sgScene_Window_MenuStatus_processOk.apply(this, arguments);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #Windows
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------------------------------------------------------------------
// Character Info Window
//------------------------------------------------------------------------------------------------------------------------------------
function Window_SG_CharacterInfo() { this.initialize.apply(this, arguments); }

Window_SG_CharacterInfo.prototype = Object.create(Window_Base.prototype);
Window_SG_CharacterInfo.prototype.constructor = Window_SG_CharacterInfo;

Window_SG_CharacterInfo.prototype.initialize = function(width)
{
    Window_Base.prototype.initialize.call(this, 0, 0, width, Silv.SG_Scene.CharacterInfoHeight);
	this.descText = '';
    this.refresh();
	
	var preload_bmp = ImageManager.loadFace(Silv.SG_Scene.ActiveActor.faceName());
	preload_bmp.addLoadListener(function() { this.refresh(); }.bind(this));
};

Window_SG_CharacterInfo.prototype.refresh = function()
{
	if (Silv.SG_Scene.ActiveActor === null) { throw new Error('ERROR Silv.SG_Scene.ActiveActor is null.'); }
    this.contents.clear();
	this.render();
};

//---------------------------------------------------------------
// #render/#draw Character Info Window
//---------------------------------------------------------------
Window_SG_CharacterInfo.prototype.render = function()
{
	var actor = Silv.SG_Scene.ActiveActor;

	this.drawActorFace(actor, 0, 0, 144, 144);
	this.drawActorSimpleStatus(actor, Silv.SG_Scene.CharacterInfoStatus_X, 0, 200);
	
	this.drawHorizontalLine(0, 150, 2, Silv.SG_Scene.CharwindowHorLineColor);
	
	this.renderDesc();
};

Window_SG_CharacterInfo.prototype.drawActorSimpleStatus = function(actor, x, y, width)
{
    var lineHeight = this.lineHeight();
    var x2 = x + 180;
    var width2 = 200;
	if (Silv.SG_Scene.CharacterInfoShowStatus1)
	{
		this.drawActorName(actor, x, y);
		this.drawActorLevel(actor, x, y + lineHeight * 1);
		this.drawActorIcons(actor, x, y + lineHeight * 2);
	}
	if (Silv.SG_Scene.CharacterInfoShowStatus2)
	{
		this.drawActorClass(actor, x2, y);
		this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
		this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
	}
};

Window_SG_CharacterInfo.prototype.renderDesc = function()
{
	if (this.descText === '') { return; }
	this.drawText(this.descText, 0, 172, this.contents.width, 0);
};

Window_SG_CharacterInfo.prototype.drawHorizontalLine = function(x, y, thickness, color)
{
	this.contents.fillRect(x, y, Graphics.width - x, thickness, color);
};

Window_SG_CharacterInfo.prototype.setDescription = function(newText)
{
	this.descText = newText;
	this.refresh();
};

//------------------------------------------------------------------------------------------------------------------------------------
// Window_SG_List
//------------------------------------------------------------------------------------------------------------------------------------
function Window_SG_List() { this.initialize.apply(this, arguments); }

Window_SG_List.prototype = Object.create(Window_Selectable.prototype);
Window_SG_List.prototype.constructor = Window_SG_List;

Window_SG_List.lastTopRow = 0;
Window_SG_List.lastIndex = -1;

Window_SG_List.prototype.initialize = function(x, y, descWindow)
{
	this.infoWindow = null;
	this.unequipEnabled = false;
	this.descWindow = descWindow;
	this.setData();
	
    var width = Silv.SG_Scene.ItemListWidth;
    var height = Graphics.height - y;
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.setTopRow(Window_SG_List.lastTopRow);
    this.select(Window_SG_List.lastIndex);
	this.refresh();
};

Window_SG_List.prototype.standardPadding = function()
{
	return (18 * Silv.SG_Scene.ItemListScale).clamp(Silv.SG_Scene.ItemListPaddingMin, Silv.SG_Scene.ItemListPaddingMax);
};

Window_SG_List.prototype.lineHeight = function()
{
    return 36 * Silv.SG_Scene.ItemListScale;
};

Window_SG_List.prototype.standardFontSize = function()
{
    return 28 * Silv.SG_Scene.ItemListScale;
};

// Needed to add if-statements to the pageup and pagedown
Window_SG_List.prototype.processCursorMove = function()
{
	if (this.isCursorMovable())
	{
        var lastIndex = this.index();
        if (Input.isRepeated('down')) {
            this.cursorDown(Input.isTriggered('down'));
        }
        if (Input.isRepeated('up')) {
            this.cursorUp(Input.isTriggered('up'));
        }
        if (Input.isRepeated('right')) {
            this.cursorRight(Input.isTriggered('right'));
        }
        if (Input.isRepeated('left')) {
            this.cursorLeft(Input.isTriggered('left'));
        }
        if (!Silv.SG_Scene.ItemWinDisablePageUpDown && !this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
            this.cursorPagedown();
        }
        if (!Silv.SG_Scene.ItemWinDisablePageUpDown && !this.isHandled('pageup') && Input.isTriggered('pageup')) {
            this.cursorPageup();
        }
        if (this.index() !== lastIndex) {
            SoundManager.playCursor();
        }
    }
}

Window_SG_List.prototype.setData = function()
{
	this._data = $gameParty.allItems().filter(function(item)
	{
        return (DataManager.isArmor(item) && (item.atypeId == Silv.SG.SG_ID));
    });
	
	// Add the first unequip-item (which is a special case)
	var item = window[Silv.SG_Scene.UnEquipItem_DB][Silv.SG_Scene.UnEquipItem_ID];
	item.sg = new Item_SG(item.meta, -1);
	this._data.unshift(item);
};

Window_SG_List.prototype.windowWidth = function()
{
    return Graphics.width - this.x;
};

Window_SG_List.prototype.windowHeight = function()
{
    return Graphics.height - this.y;
};

Window_SG_List.prototype.select = function(index)
{
	Window_Selectable.prototype.select.call(this, index);
    if (this.descWindow !== null)
	{
		if (index === 0)
		{
			this.descWindow.setDescription(Silv.SG_Scene.UnequipDesc);
		}
		else
		{
			var selectedItem = this._data[index];
			if (Silv.isValid(selectedItem))
			{
				this.descWindow.setDescription(selectedItem.description);
			}
			else
			{
				this.descWindow.setDescription('');
			}
		}
	}
	
	if (this.infoWindow !== null)
	{
		var item = this.item();
		if (item === 'unequip')
		{
			this.infoWindow.item = item;
		}
		else if (item === null) 
		{
			this.infoWindow.item = null;
			this.infoWindow.skills = null;
		}
		else
		{
			this.infoWindow.item = item;
			this.infoWindow.skills = item.sg.skills;
		}
		
		// Refresh the info window
		if (Silv.SG_Scene.InfoWinAutoResetScroll) {	this.infoWindow.scrollValue = 0; }
		this.infoWindow.refresh();
		this.infoWindow.updateArrowVisibility(); // Must be called AFTER calling the refresh() on this window
	}
	
	if (index != -1) { Window_SG_List.lastIndex = index; }
};

Window_SG_List.prototype.item = function()
{
	var index = this.index();
	switch(index)
	{
		case -1:
			return null;
		case 0:
			return 'unequip';
		default: 
			var item = this._data[index];
			if (typeof item === 'undefined') { throw new Error('item is undefined (' + item + '). The index (' + index + ') is most likely outside of the this._data.length (' + this._data.length + ') boundary.'); } // Sanity check
			return item;
	}
};

Window_SG_List.prototype.maxItems = function()
{
    return this._data.length;
};

Window_SG_List.prototype.refresh = function()
{
	Window_Selectable.prototype.refresh.call(this);
	if (this.contents)
	{	
		this.createContents();
		this.drawAllItems();
	}
};

Window_SG_List.prototype.drawItem = function(index)
{
    var rect = this.itemRectForText(index);
	(!this.isItemEnabled(index)) ? this.contents.paintOpacity = 128 : this.contents.paintOpacity = 255;
	this.drawIcon(this._data[index].iconIndex, rect.x, rect.y);
    this.drawText(this._data[index].name, rect.x + Window_Base._iconWidth * Silv.SG_Scene.ItemListScale + 2, rect.y, rect.width);
};

Window_SG_List.prototype.drawIcon = function(iconIndex, x, y)
{
    var bitmap = ImageManager.loadSystem('IconSet');
    var sw = Window_Base._iconWidth;
    var sh = Window_Base._iconHeight;
    var sx = iconIndex % 16 * sw;
    var sy = Math.floor(iconIndex / 16) * sh;
    var dw = Window_Base._iconWidth * Silv.SG_Scene.ItemListScale;
    var dh = Window_Base._iconHeight * Silv.SG_Scene.ItemListScale;
    this.contents.blt(bitmap, sx, sy, sw, sh, x, y, dw, dh);
};

Window_SG_List.prototype.isCancelTriggered = function()
{
    return Window_Selectable.prototype.isCancelTriggered();
};

Window_SG_List.prototype.processOk = function()
{
    if (this.isCurrentItemEnabled()) {
        SoundManager.playEquip(); // Replaced sfx
        this.updateInputData();
        this.deactivate();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

Window_SG_List.prototype.isItemEnabled = function(index)
{
	if (SceneManager._scene.equipWindow.active) { return false; }
	
	if (index === 0)
	{
		return this.unequipEnabled;
	}
	else
	{
		var item = this._data[index];
		if (SceneManager._scene.silv.selSocket === null)
		{
			return false;
		}
		else
		{
			// Is unique per actor
			var itemIsSameAs_equippedSelectedGem = (SceneManager._scene.silv.selGem !== null) && (SceneManager._scene.silv.selGem.baseItemId === item.baseItemId); // Get variable containing the result of whether or not the gem selected in the equipSlots-window is of the same type as the current item. Because if they are the same, the current-item should not be processed as a unique. Because replacing a unique with the same unique should be allowed.
			if ((!itemIsSameAs_equippedSelectedGem) && item.sg.isUniquePerActor && Silv.SG_Scene.ActiveActor.hasEquippedGem(item.baseItemId)) { return false; } // Only allow 1 uniqueActor-gem per actor
			
			// Is unique per group of linked gems
			if ((!itemIsSameAs_equippedSelectedGem) && item.sg.isUniquePerLinkedGroup && Silv.SG_Scene.ActiveActor.hasEquippedGemInLinkGroup(item.baseItemId, SceneManager._scene.silv.selEquipIdx, SceneManager._scene.silv.selEquipSocketIdx)) { return false; }
			
			// Sanity check
			if (!Silv.isValid(item)) { throw new Error('Item is invalid: ' + item + ' for index: ' + index + '.'); }
			
			// Is either the gem or the socket an universal color?
			if (Silv.SG.isUniversalColor(SceneManager._scene.silv.selSocket.socketColor) || item.sg.gemColorIsUniversal) { return true; } // Always accept universal colors (with the exception of double uniques of course)
			// Match colors
			return (SceneManager._scene.silv.selSocket.socketColor === item.sg.gemColor);
		}
	}
	
	return true;
};

// This override forces the index to always be within the range of the this._data. Otherwise it would start returning undefined values.
// This would otherwise go bad when the LAST materia on the list get's equipped and then the user returns to the list (but the index is now on an item that has been deleted and is now outside of the this._data boundary.
Window_SG_List.prototype.index = function()
{
	if (this._index < this._data.length)
	{
		return this._index;
	}
	else
	{
		return this._data.length - 1;
	}
};

Window_SG_List.prototype.isCurrentItemEnabled = function()
{
	return this.isItemEnabled(this.index());
};

Window_SG_List.prototype.processCancel = function() {
    Window_Selectable.prototype.processCancel.call(this);
    Window_SG_List.lastTopRow = this.topRow();
    if (this.index() != -1) { Window_SG_List.lastIndex = this.index(); }
};

//------------------------------------------------------------------------------------------------------------------------------------
// Equip Slots Window
//------------------------------------------------------------------------------------------------------------------------------------
function Window_SG_EquipSlots() { this.initialize.apply(this, arguments); }

Window_SG_EquipSlots.prototype = Object.create(Window_Selectable.prototype);
Window_SG_EquipSlots.prototype.constructor = Window_SG_EquipSlots;

Window_SG_EquipSlots.prototype.initialize = function(width, height)
{
	this.socketCnt = 0; // this line is required! Because this variable may NOT be undefined before calling the parent initialize() method!
	Window_Selectable.prototype.initialize.call(this, 100, 100, width, height);
    this.visible = false;
	this.select(0);
};

Window_SG_EquipSlots.prototype.loadWindowskin = function()
{
    this.windowskin = ImageManager.loadSG('EquipSocketsSkin');
};

Window_SG_EquipSlots.prototype.maxCols = function()
{
    return Silv.SG.MaxSockets;
};

Window_SG_EquipSlots.prototype.spacing = function()
{
    return 0;
};

Window_SG_EquipSlots.prototype.maxItems = function()
{
    return this.socketCnt;
};

Window_SG_EquipSlots.prototype.standardPadding = function()
{
    return 0;
};

Window_SG_EquipSlots.prototype.setGeometry = function(rect)
{
	this.x = rect.x;
	this.y = rect.y;
	this.width = rect.width;
	this.height = rect.height;
	
	this.createContents();
	this.refresh();
};

Window_SG_EquipSlots.prototype.select = function(index)
{
	Window_Selectable.prototype.select.call(this, index);
	SceneManager._scene.silv.selEquipSocketIdx = index;
	
	if ((SceneManager._scene.silv.selEquipIdx === -1) || (index === -1))
	{
		SceneManager._scene.silv.selSocket = null;
		SceneManager._scene.silv.selGem = null;
	}
	else
	{
		SceneManager._scene.silv.selSocket = Silv.SG_Scene.ActiveActor.getSocket(SceneManager._scene.silv.selEquipIdx, SceneManager._scene.silv.selEquipSocketIdx);
		SceneManager._scene.silv.selGem = Silv.SG_Scene.ActiveActor.getEquippedGem(SceneManager._scene.silv.selEquipIdx, SceneManager._scene.silv.selEquipSocketIdx);
		if (SceneManager._scene.silv.selSocket === undefined) { throw Error('Silv.SG_Scene.ActiveActor.getSocket(' + SceneManager._scene.silv.selEquipIdx + ', ' + SceneManager._scene.silv.selEquipSocketIdx + ') returned undefined.'); }
		
		// Render Info
		SceneManager._scene.infoWindow.clearInfo();
		if (SceneManager._scene.silv.selGem !== null) { this.showGemInfo(SceneManager._scene.silv.selGem); }
	}
	
	SceneManager._scene.itemWindow.refresh();
	
	if (SceneManager._scene.characterInfoWindow && SceneManager._scene.silv.selGem)
	{
		SceneManager._scene.characterInfoWindow.setDescription(Silv.SG_Scene.SelInfoText + $dataArmors[SceneManager._scene.silv.selGem.itemID].name);
	}
	else
	{
		SceneManager._scene.characterInfoWindow.setDescription(Silv.SG_Scene.SelInfoTextEmptySocket);
	}
		
};

Window_SG_EquipSlots.prototype.showGemInfo = function(item)
{
	dbItem = $dataArmors[item.itemID];
	SceneManager._scene.infoWindow.render(dbItem, dbItem.sg, dbItem.sg.skills, false);
};

//------------------------------------------------------------------------------------------------------------------------------------
// Equip Window
//------------------------------------------------------------------------------------------------------------------------------------
function Window_SG_Equip() { this.initialize.apply(this, arguments); }

Window_SG_Equip.prototype = Object.create(Window_Selectable.prototype);
Window_SG_Equip.prototype.constructor = Window_SG_Equip;

Window_SG_Equip.prototype.initialize = function(y, width, height)
{
	Window_Selectable.prototype.initialize.call(this, 0, y, width, height);
	this.slotOffset_x = this.contents.width - (Silv.SG.MaxSockets * Silv.SG_Scene.SlotSize) - 10;
	this.slotBGWidth = Silv.SG_Scene.SlotSize * Silv.SG.MaxSockets;
	
	this._actor = Silv.SG_Scene.ActiveActor; // This line must be called BEFORE the preloading!
	this.bmpGems = ImageManager.loadSG('Gems');
	this.bmpGems.addLoadListener(function() { this.onFinishPreloading(); }.bind(this));
	// var preload_bmp2 = ImageManager.loadSG('Orbs');
	// preload_bmp2.addLoadListener(function() { this.onFinishPreloading(); }.bind(this));
	
	this.selItemsocketCnt = 0;
    this.refresh();
	
	if (this.maxItems() > 0) { this.select(0); }
};

Window_SG_Equip.prototype.standardFontSize = function()
{
    return Silv.SG_Scene.EquipWindowFontSize;
};

Window_SG_Equip.prototype.standardPadding = function()
{
    return Silv.SG_Scene.EquipWindowPadding;
};

Window_SG_Equip.prototype.getOverlayGeomRect = function()
{
	var geomRect = this.itemRectForText(this.index());
	geomRect.x += this.x + this.standardPadding() + this.slotOffset_x;
	geomRect.y += this.y + this.standardPadding();
	geomRect.width = this.slotBGWidth;
	return geomRect;
};

Window_SG_Equip.prototype.onFinishPreloading = function()
{
	if (this.maxItems() > 0) { this.select(0); }
	this.refresh();
	SceneManager._scene.silv.selEquipIdx = 0;
};

Window_SG_Equip.prototype.isEnabled = function(index)
{
	var slotItem = this.getSlotItem(index);
	if (slotItem === null) { return false; }
	else { return this.getSlotItem(index).sg.hasSockets; }
};

Window_SG_Equip.prototype.isCurrentItemEnabled = function()
{
	// Note: do NOT use a one-line if-statement (expression ? true : false) because JavaScript bugs when putting 2 return-statements in one line. Has to do with this utterly retarded language not being strict and attempting to mess around with auto-semicolons...
	if (this.index() == -1) { return false; }
	else { return this.isEnabled(this.index()); }
};

Window_SG_Equip.prototype.update = function()
{
    Window_Selectable.prototype.update.call(this);
    if (this._itemWindow)
	{
        this._itemWindow.setSlotId(this.index());
    }
};

Window_SG_Equip.prototype.activate = function()
{
    Window_Base.prototype.activate.call(this);
	SceneManager._scene.itemWindow.refresh();
};

Window_SG_Equip.prototype.maxItems = function()
{
    return this._actor ? this._actor.equipSlots().length * this.maxCols() : 0;
};

Window_SG_Equip.prototype.item = function()
{
    return this._actor ? this._actor.equips()[this.index()] : null;
};

Window_SG_Equip.prototype.slotName = function(index)
{
    var slots = this._actor.equipSlots();
    return this._actor ? $dataSystem.equipTypes[slots[index]] : '';
};

Window_SG_Equip.prototype.getSlotItem = function(index)
{
	var slotItem = null;
	
	var equippedItem = Silv.SG_Scene.ActiveActor._equips[index];
	if (equippedItem !== undefined)
	{
		var itemID = equippedItem._itemId;	
		if (itemID > 0)
		{
			if (Silv.SG_Scene.ActiveActor._equips[index]._dataClass == 'weapon')
			{
				slotItem = $dataWeapons[itemID];
			}
			else // armor
			{
				slotItem = $dataArmors[itemID];
			}
		}
	}
	
	return slotItem;
};

Window_SG_Equip.prototype.onIndexChanged = function(oldIdx, newIdx)
{
	if (oldIdx !== -1)
	{
		SceneManager._scene.silv.selEquipSocketIdx = 0;
	}
};

Window_SG_Equip.prototype.select = function(index)
{
	if (this.index() !== index) { this.onIndexChanged(this.index(), index); }
	Window_Selectable.prototype.select.call(this, index);
	
	var slotItem = this.getSlotItem(index);
	if (slotItem !== null)
	{
		this.selItemsocketCnt = this.getSlotItem(index).sg.socketCnt;
	}
	else
	{
		this.selItemsocketCnt  = 0;
	}
	
	if (index !== -1) { SceneManager._scene.silv.selEquipIdx = index; }
};

//---------------------------------------------------------------
// #Render/#Draw
//---------------------------------------------------------------
Window_SG_Equip.prototype.drawItem = function(index)
{
	if (!this.bmpGems.isReady()) { return; }
		
	var isDrawingSelectedItem = (this.index() == index);
	
	// Draw Equipment Type
	var rect = this.itemRectForText(index);
	this.changeTextColor(this.systemColor());
	this.changePaintOpacity(this.isEnabled(index));
	if (Silv.SG_Scene.EquipWindowDrawSlotNames) { this.drawText(this.slotName(index), rect.x, rect.y, Silv.SG_Scene.EquipWindowIconOffset_X, this.lineHeight()); }
	this.drawItemName(this._actor.equips()[index], rect.x + Silv.SG_Scene.EquipWindowIconOffset_X, rect.y);
	this.changePaintOpacity(true);
	
	// Draw Slot background
	this.contents.paintOpacity = Silv.SG_Scene.SlotBGOpacity; 
	this.contents.fillRect(rect.x + this.slotOffset_x, rect.y + Silv.SG_Scene.SlotBGSpacing, this.slotBGWidth, rect.height - (Silv.SG_Scene.SlotBGSpacing * 2), Silv.SG_Scene.SlotBGColor);
	this.contents.paintOpacity = 255;

	// Draw Slots
	if (Silv.SG_Scene.ActiveActor._equips[index]._itemId > 0) // Don't bother to draw slots for slots that have no item equipped at all
	{
		var slotItem = this.getSlotItem(index);
		if (slotItem.sg.hasSockets)
		{
			for(var socketIdx=0; socketIdx<slotItem.sg.socketCnt; socketIdx++)
			{
				var slot = slotItem.sg.sockets[socketIdx];
				var slot_draw_x = rect.x + this.slotOffset_x + socketIdx * Silv.SG_Scene.SlotSize;
				
				// Draw Link(s) if applicable
				if (slot.linkedSocketLeft !== null)
				{
					this.drawEquipSlot(Silv.SG.SocketLinkImageIdx_Left, slot_draw_x, rect.y);
				}
				if (slot.linkedSocketRight !== null)
				{
					this.drawEquipSlot(Silv.SG.SocketLinkImageIdx_Right, slot_draw_x, rect.y);
				}
				
				// Draw Socket
				this.drawEquipSlot(slot.socketColorImgIdx, slot_draw_x, rect.y);
				
				// Draw socketed gem (if applicable)
				var equippedSocket = Silv.SG_Scene.ActiveActor.sg.equippedSG[index][socketIdx];
				if (equippedSocket !== null)
				{
					this.drawEquipSlot(equippedSocket.socketColorImgIdx + (this.bmpGems.width / Silv.SG_Scene.SlotSize) - 1, slot_draw_x, rect.y);
				}
			}
		}
	}
};

Window_SG_Equip.prototype.drawItemName = function(item, x, y, width)
{
    width = width || 312;
    if (item)
	{
        this.resetTextColor();
		var iconBoxWidth = 0;
        if (Silv.SG_Scene.EquipWindowDrawIcons)
		{
			this.drawIcon(item.iconIndex, x + 2, y + 2);
			iconBoxWidth = Window_Base._iconWidth + 4;
		}
        if (Silv.SG_Scene.EquipWindowDrawItemNames) { this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth); }
    }
};

Window_SG_Equip.prototype.drawEquipSlot = function(iconIndex, x, y)
{	
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    this.contents.blt(this.bmpGems, sx, sy, pw, ph, x, y);
};

//------------------------------------------------------------------------------------------------------------------------------------
// Window_SG_Info
//------------------------------------------------------------------------------------------------------------------------------------
function Window_SG_Info() { this.initialize.apply(this, arguments); }

Window_SG_Info.prototype = Object.create(Window_Base.prototype);
Window_SG_Info.prototype.constructor = Window_SG_Info;
Window_SG_Info.prototype.STAT_CHANGES_Y_EXTRA_OFFSET_Y = 25;
Window_SG_Info.prototype.STAT_FONT_SIZE = 20;
Window_SG_Info.prototype.FLAT_STATS_X = 35;
Window_SG_Info.prototype.PERC_STATS_X = 190;
Window_SG_Info.prototype.PARAM_CNT = 8;

Object.defineProperty(Window_SG_Info.prototype, 'scrollValue', {
	get: function () { return this._scrollValue; },
	set: function (value)
	{
		this._scrollValue = value.clamp(this.scrollValueMin, this.scrollValueMax);
		this.updateArrowVisibility();
	}
});

Window_SG_Info.prototype.initialize = function(width)
{
    Window_Base.prototype.initialize.call(this, Graphics.width - width, 0, width, Graphics.height);
	
	this.starBmp = ImageManager.loadSG('Stars');
	this.starBmp.addLoadListener(function() { this.onFinishPreLoad(); }.bind(this));

	this.starSize = this.starSize || { w:48, h:48 };
	this.item = null;
	this.skills = null;
	this._scrollValue = 0;
	this.scrollValueMin = 0;
	this.scrollValueMax = 0;
    this.refresh();
};

Window_SG_Info.prototype.updateArrowVisibility = function()
{
	this.upArrowVisible = (this.scrollValue < this.scrollValueMax);
	this.downArrowVisible = (this.scrollValue > this.scrollValueMin);
};

Window_SG_Info.prototype.textPadding = function()
{
    return 0;
};

Window_SG_Info.prototype.onFinishPreLoad = function()
{
	this.starSize = { w:(this.starBmp.width / 3), h:this.starBmp.height };
	this.refresh();
};

Window_SG_Info.prototype.lineHeight = function()
{
    return this.contents.fontSize;
};

Window_SG_Info.prototype.standardFontSize = function()
{
    return 22;
};

Window_SG_Info.prototype.refresh = function()
{
	if (this.contents)
	{
		this.contents.clear();
		if (this.item) { this.render(this.item, this.item.sg, this.skills, true); }
	}
};

Window_SG_Info.prototype.clearInfo = function()
{
	this.contents.clear();
};

Window_SG_Info.prototype.update = function()
{
    Window_Base.prototype.update.call(this);
	
	var oldScrollValue = this.scrollValue;
	if (Input.isPressed(Silv.SG_Scene.InfoWindowScrollKeyUp)) { this.scrollValue += Silv.SG_Scene.InfoWindowScrollSpeed; }
	else if (Input.isPressed(Silv.SG_Scene.InfoWindowScrollKeyDown)) { this.scrollValue -= Silv.SG_Scene.InfoWindowScrollSpeed; }
	if (oldScrollValue !== this.scrollValue) { this.refresh(); }
};
//------------------------------------------------------------------------------------------------------------------------------------
// #Rendering / #Drawing of Gem Info
//------------------------------------------------------------------------------------------------------------------------------------
Window_SG_Info.prototype.renderName = function(item, y)
{
	this.contents.fontSize = 26;
	this.drawText(item.name, 0, y, this.contents.width, 'center');
	this.contents.fontSize = this.contents.fontSize;
};

Window_SG_Info.prototype.renderRankStars = function(gem, y)
{
	var starOffset_x = (this.contents.width / 2) - ((gem.xpData.maxValue + 1) * this.starSize.w) / 2; // "gem.xpData.maxValue + 1" +1  because it starts at 0.
	var halfStarDrawn = false;
	for (var starIdx=0; starIdx<=gem.xpData.maxValue; starIdx++)
	{
		var sx = 0; // black star
		if (starIdx <= gem.xpData.value)
		{
			sx = 2 * this.starSize.w; // yellow star
		}
		else if ((gem.xpData.xp_toNextLevelPerc >= 0.5) && !halfStarDrawn)
		{
			sx = this.starSize.w; // half a star
			halfStarDrawn = true;
		}
		
		this.contents.blt(this.starBmp, sx, 0, this.starSize.w, this.starSize.h, starOffset_x + starIdx * this.starSize.w, y);
	}
};

Window_SG_Info.prototype.renderXP = function(gem, caption_y, xpGauge_y)
{
	this.contents.fontSize = 18;
	this.changeTextColor(Silv.SG_Scene.InfoWindowCaptionColor);
	this.drawText(Silv.SG_Scene.ExpToNextLevelText, 0, caption_y, this.contents.width, 'left');
	this.resetTextColor();
	
	// Gauge
	// console.log(0, xpGauge_y, this.contents.width, gem.xpData.xp_toNextLevelPerc, '#FFCC00', '#33CC00');
	this.drawGauge(0, xpGauge_y, this.contents.width, gem.xpData.xp_toNextLevelPerc, '#FFCC00', '#33CC00');
	this.drawText(gem.rankProgressStr(), 0, xpGauge_y, this.contents.width, 'center');
};

Window_SG_Info.prototype.renderSkills = function(gem, skills, skills_y, stats_y)
{
	var lh = this.lineHeight();
	// Do nothing if this gem has no regular skills, but DOES HAVE learnable skills.
	var hasSkills = (gem.skills.removeEmpty().length !== 0);
	if (!hasSkills && gem.hasLearnableSkills()) { return stats_y - lh; }

	// Render header
	this.changeTextColor(Silv.SG_Scene.InfoWindowCaptionColor);
	this.drawText((gem.isCommand) ? Silv.SG_Scene.CommandsHeaderText : Silv.SG_Scene.SkillsHeaderText, (gem.isCommand) ? 0 : 10, skills_y, this.contents.width, 'left');
	this.resetTextColor();
	
	if (!hasSkills)
	{
		if (gem.gemType === Silv.SG.ArmorSubTypeID_Support)
		{
			this.drawText(Silv.SG_Scene.SupportText, 85, skills_y, this.contents.width, 'left');	
			stats_y += lh;
		}
		else
		{
			this.drawText(Silv.SG_Scene.NoSkillsText, 85, skills_y, this.contents.width, 'left');	
			stats_y += lh;
		}
	}
	else
	{
		var originalPaintOpacity = this.contents.paintOpacity;
		for (var skillIdx=0; skillIdx<skills.length; skillIdx++)
		{
			var skillName;
			if (skills[skillIdx] === null)
			{
				skillName = Silv.SG_Scene.NullSkillText;
			}
			else
			{
				skillName = $dataSkills[skills[skillIdx]].name;
			}
			this.contents.paintOpacity = (skillIdx <= gem.xpData.value) ? originalPaintOpacity : 128;
			this.drawText(skillName, 85, skills_y + lh * skillIdx, this.contents.width, 'left');	
			stats_y += lh;
		}
		this.contents.paintOpacity = originalPaintOpacity;
	}
	
	return stats_y;
};

Window_SG_Info.prototype.renderLearnableSkills = function(gem, skills, stats_y)
{
	// Do nothing if this gem has no learnable skills
	if (!gem.hasLearnableSkills()) { return stats_y; }
	
	// Render header
	this.changeTextColor(Silv.SG_Scene.InfoWindowCaptionColor);
	var lh = this.lineHeight();

	this.drawText(Silv.SG_Scene.LearnableSkillsHeaderText, 10, stats_y, this.contents.width, 'left');
	stats_y += 5;
	this.resetTextColor();
	
	var columnLeft_X = 0;
	var maxTextWidth = this.contents.width / 2;
	var columnRight_X = maxTextWidth;
	var originalPaintOpacity = this.contents.paintOpacity;
	
	var column = columnLeft_X;
	for (var learnableSkillsIdx=0; learnableSkillsIdx<gem.learnableSkills.length; learnableSkillsIdx++)
	{
		var skill_id = gem.learnableSkills[learnableSkillsIdx];
		
		// Increase y every 2 increments
		if (learnableSkillsIdx % 2 === 0) { stats_y += lh; }
		
		// Draw Text
		this.contents.paintOpacity = (gem.learnedSkills.getItemByPropertyVal('id', skill_id)) ? originalPaintOpacity : 128;
		this.drawText($dataSkills[skill_id].name, column, stats_y, maxTextWidth, 'center');
		// Swap active column
		column = (column === columnLeft_X) ? columnRight_X : columnLeft_X;
	}
	this.contents.paintOpacity = originalPaintOpacity;
	
	return stats_y + lh + 20;
};

Window_SG_Info.prototype.renderStatBonuses = function(item, stats_y)
{
	var statChanges_y = null;
	
	// Stat caption
	this.changeTextColor(Silv.SG_Scene.InfoWindowCaptionColor);
	this.contents.fontSize = 22;
	this.drawText(Silv.SG_Scene.StatBonusHeaderText, 0, stats_y, this.contents.width, 'left');
	this.resetTextColor();
	stats_y += this.lineHeight() + 10;
	
	// Stat %-values
	var statPercs = {};
	for (var traitIdx=0; traitIdx<item.traits.length; traitIdx++)
	{
		var trait = item.traits[traitIdx];
		if (trait.code == 21) // 21 == parameter
		{
			statPercs[trait.dataId] = {};
			
			statPercs[trait.dataId].color = this.normalColor();
			var sign = '';
			if (trait.value > 0)      { statPercs[trait.dataId].color = Silv.SG_Scene.StatInfoColorPositive; sign = '+'; }
			else if (trait.value < 0) { statPercs[trait.dataId].color = Silv.SG_Scene.StatInfoColorNegative; sign = '-'; }

			statPercs[trait.dataId].text = '(' + sign + String(parseInt(trait.value * 100)) + '%)';
		}
	}
	
	// Stat flat values (params)
	this.contents.fontSize = this.STAT_FONT_SIZE;
	var drawnParamsCnt = 0;
	for (var paramIdx=0; paramIdx<item.params.length; paramIdx++)
	{
		var paramValue = item.params[paramIdx];
		if ((paramValue !== 0) || (statPercs[paramIdx])) // skip 0-values
		{
			var statPerc = statPercs[paramIdx];
			var stat_line_y = stats_y + this.lineHeight() * drawnParamsCnt;
			statChanges_y = stat_line_y + this.lineHeight() + this.STAT_CHANGES_Y_EXTRA_OFFSET_Y;
			
			// Name
			var paramName = Silv.SG_Scene.Params[paramIdx];
			this.drawText(paramName, this.FLAT_STATS_X, stat_line_y, this.contents.width, 'left');

			// Value
			if (paramValue > 0)
			{
				this.changeTextColor(Silv.SG_Scene.StatInfoColorPositive);
				paramValue = '+' + String(paramValue);
			}
			else if (paramValue < 0) { this.changeTextColor(Silv.SG_Scene.StatInfoColorNegative); }
			this.drawText(paramValue, this.FLAT_STATS_X + this.textWidth(paramName), stat_line_y, this.contents.width, 'left');

			// Draw %-value (if applicable)
			if (statPerc)
			{
				this.changeTextColor(statPerc.color);
				this.drawText(statPerc.text, this.PERC_STATS_X, stat_line_y, this.contents.width, 'left');
			}
			
			this.resetTextColor();
			drawnParamsCnt++;
		}
	}
	if (drawnParamsCnt === 0)
	{
		this.drawText(Silv.SG_Scene.NoStatBonusText, this.FLAT_STATS_X, stats_y, this.contents.width, 'left');
		statChanges_y = stats_y + this.lineHeight() + this.STAT_CHANGES_Y_EXTRA_OFFSET_Y;
	}
	
	return statChanges_y;
};

Window_SG_Info.prototype.renderStatChanges = function(item, statChanges_y)
{
	// Stat changes caption
	this.changeTextColor(Silv.SG_Scene.InfoWindowCaptionColor);
	this.contents.fontSize = 22;
	this.drawText(Silv.SG_Scene.StatChangesText, 0, statChanges_y, this.contents.width, 'left');
	this.resetTextColor();
	var lh = this.lineHeight();
	statChanges_y += lh + 5;
	
	// Create a deep-clone (tempActor) of the current actor
	var tempActor = JsonEx.makeDeepCopy(Silv.SG_Scene.ActiveActor);

	// Equip the gem to the tempActor
	var selGem_EquipSlotIdx = SceneManager._scene.silv.selEquipIdx;
	var selGem_SocketIdx = SceneManager._scene.equipSlotsWindow.index();
	tempActor.recalculateSkills(false); // generate a new set of skills for this actor without deleting it's references to the old one? FUCK I DUNNO...
	tempActor.equipSG(selGem_EquipSlotIdx, selGem_SocketIdx, JsonEx.makeDeepCopy(item), false, false, false);
	
	// Draw the stat changes
	this.contents.fontSize = this.STAT_FONT_SIZE;
	for (var paramIdx=0; paramIdx<this.PARAM_CNT; paramIdx++)
	{
		var delta = tempActor.param(paramIdx) - Silv.SG_Scene.ActiveActor.param(paramIdx);
		
		var statChangeColor = this.normalColor();
		var sign = '';
		if (delta > 0)      { statChangeColor = Silv.SG_Scene.StatInfoColorPositive; sign = '+'; }
		else if (delta < 0) { statChangeColor = Silv.SG_Scene.StatInfoColorNegative; sign = ''; }
					
		// Draw param name
		var paramName = Silv.SG_Scene.Params[paramIdx];
		this.drawText(paramName, this.FLAT_STATS_X, statChanges_y + lh * paramIdx, this.contents.width, 'left');
		// Draw stat delta
		this.changeTextColor(statChangeColor);
		this.drawText(sign + delta, this.FLAT_STATS_X + this.textWidth(paramName), statChanges_y + lh * paramIdx, this.contents.width, 'left');
		this.resetTextColor();
	}
	
	// Unequip the equipped item for the temp-actor to free up
	tempActor.unEquipSG(selGem_EquipSlotIdx, selGem_SocketIdx, false, false, false);
	
	// Clean up (not required but this illustrates & forces that this clone is no longer used)
	tempActor = null;
	
	// Reset Font Settings
	this.resetFontSettings();
	
	// Return the y-value for the minimum-scroll-value
	return statChanges_y + lh * this.PARAM_CNT;
};

Window_SG_Info.prototype.render = function(item, gem, skills, includeStatChanges)
{
	if (item === 'unequip')
	{
		this.drawText(Silv.SG_Scene.UnequipDesc, 0, 0, this.contents.width, 'center');
		this.upArrowVisible = this.downArrowVisible = false;
		this.scrollValueMin = 0;
	}
	else
	{
		//--------------------------------------------------
		// y-coordinates
		//--------------------------------------------------
		var name_y = this.scrollValue;
		var star_y = name_y + this.lineHeight() + 4;
		var xpCaption_y = star_y + this.starSize.h + 6;
		var xpGauge_y = xpCaption_y + 24;
		var skills_y = xpGauge_y + this.lineHeight() + 4;
		var stats_y = skills_y + 24;
		//--------------------------------------------------
		// Render the sections
		//--------------------------------------------------
		this.renderName(item, name_y);
		this.renderRankStars(gem, star_y);
		this.renderXP(gem, xpCaption_y, xpGauge_y);
		stats_y = this.renderSkills(gem, skills, skills_y, stats_y);
		stats_y = this.renderLearnableSkills(gem, skills, stats_y);
		var statChanges_y = this.renderStatBonuses(item, stats_y);
		if (includeStatChanges)
		{
			this.scrollValueMin = -this.renderStatChanges(item, statChanges_y);
		}
		else
		{
			this.scrollValueMin = -statChanges_y;
		}
		this.scrollValueMin += this.contents.height + this.scrollValue; // Note that the + and - are inverted because this is the minimum value (which is negative). That's why these 2 values are added instead of subtracted.
	}
};

Window_SG_Info.prototype.drawGauge = function(x, y, width, rate, color1, color2)
{
    var fillW = Math.floor(width * rate);
	var height = 16;
    this.contents.fillRect(x, y, width, height, this.gaugeBackColor());
    this.contents.gradientFillRect(x, y, fillW, height, color1, color2);
};

Window_SG_Info.prototype.drawArrowRight = function(x, y)
{
	var textWidth = this.textWidth('\u2192' + ' ');
	this.changeTextColor(this.systemColor());
    this.drawText('\u2192', x, y, textWidth, 'center');
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene Base
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Omg why does RPG Maker not have this method by default...
Scene_Base.prototype.removeWindow = function(window)
{
	var index = this.children.indexOf(window);
	if (index > -1) { this.children.splice(index, 1); }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the end of this awesome script!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////