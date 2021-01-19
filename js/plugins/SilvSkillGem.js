//=============================================================================
// SilvSkillGem.js
// Version: 1.04
//=============================================================================
/*:
 * @plugindesc v1.04 SilvSkillGem. <SilvSkillGem>
 * @author Silver
 * @param -- General --
 *
 * @param Skill Gem Name
 * @desc The name of the gems
 * @default Materia
 *
 * @param Enemy Skill Learning Text
 * @desc The text to display when learning a skill in combat with an enemy-skill-gem. The text between # will be replaced.
 * @default #actor_name# learned skill "#skill_name#" from #attacker_name#.
 *
 * @param -- Core --
 *
 * @param Gem Type ID
 * @desc The armor_type_id (database > types > armor types
 * @default 7
 *
 * @param Skill-Gem Sub Type ID
 * @desc The armor_type_id (database > types > equipment types
 * @default 6
 *
 * @param Support-Gem Sub Type ID
 * @desc The armor_type_id (database > types > equipment types
 * @default 7
 *
 * @param Special-Gem Sub Type ID
 * @desc The armor_type_id (database > types > equipment types
 * @default 8
 *
 * @param Universal Colors
 * @desc List of colors that accept all other colors in their socket or if it's a gem it will fit into all sockets.
 * @default white
 *
 * @param -- Defaults --
 *
 * @param Default Gem Rank Count
 * @desc How many ranks a gem can have
 * @default 5
 *
 * @param Default Rank XP
 * @desc How much xp is required for each rank by default (first rank has obviously no xp-requirement)
 * @default 1000 3000 5000 10000 15000
 *
 * @param Default Skill Color
 * @desc default color to use when no color notetag is found
 * @default white
 *
 * @param Default Rank Multiplier
 * @desc How much bonus is added to the stats for higher gem-ranks
 * @default 0.2
 *
 * @param Default Gem Birth
 * @desc By default, do gems give birth to a new clean lvl 1 copy of themselves upon reaching max rank? true/false
 * @default true
 *
 * @param -- Colors --
 *
 * @param Extra Color 1
 * @desc Format: color_name color_character color_frame_index.  Example: teal t 8
 * @default <unused>
 *
 * @param Extra Color 2
 * @desc Format: color_name color_character color_frame_index.  Example: teal t 8
 * @default <unused>
 *
 * @param Extra Color 3
 * @desc Format: color_name color_character color_frame_index.  Example: teal t 8
 * @default <unused>
 *
 * @param Extra Color 4
 * @desc Format: color_name color_character color_frame_index.  Example: teal t 8
 * @default <unused>
 *
 * @param Extra Color 5
 * @desc Format: color_name color_character color_frame_index.  Example: teal t 8
 * @default <unused>
 *
 * @param Extra Color 6
 * @desc Format: color_name color_character color_frame_index.  Example: teal t 8
 * @default <unused>
 *
 * @param -- Misc --
 *
 * @param Gem XP Gain
 * @desc In % (0-100). If you set a value of 30. Then the gem would only receive 30% of the xp the actor get's
 * @default 10
 *
 * @param Extend Item-Menu
 * @desc Removes the gems from the armor-category and adds a new category equal to the "Skill Gem Name" parameter. true/false
 * @default true
 *
 * @param Max Gem-Rank Text
 * @desc The text to display instead of the xp when a gem reached maximum level (only applicable if SilvSkillGem_Scene.js is also active)
 * @default Max Rank Reached!
 *
 * @param Max Rank XP-Value
 * @desc Value between 0.0 and 1.0. A value of 1.0 means that the xp-bar is shown as fully filled when it reached max-rank. (only applicable if SilvSkillGem_Scene.js is also active)
 * @default 1.0
 *
 * @param Birth SFX
 * @desc The name of the SFX to play when a gem gives birth to another. Use the value "None" to disable
 * @default PowerUp
 *
 * @param Learn Enemy Skill SFX
 * @desc The name of the SFX to play when a gem learns an enemy skill. Use the value "None" to disable
 * @default PowerUp
 *
 * @param Link Character
 * @desc The character used in weapon&armor notetags that represents a link between two sockets.
 * @default =
 *
 * @param Max Sockets
 * @desc The maximum allowed sockets per item. It's recommended to leave this at 8.
 * @default 8
 *
 * @param Left Socket Link Image Index
 * @desc The 0-based-frame-index for "sockets.png" that represents the image of a link on the left side.
 * @default 0
 *
 * @param Right Socket Link Image Index
 * @desc The 0-based-frame-index for "sockets.png" that represents the image of a link on the right side.
 * @default 1
 *
 * @help
 *
 *--------------------------------------
 * Installation instructions
 *--------------------------------------
 *
 * Download the following plugins and put them in your plugin directory. Then add them to the Plugin Manager [F10] in this order:
 * - YEP_ItemCore
 * - YEP_MainMenuManager         (optional)
 * - SilvBattleCommand           (optional)
 * - SilvSkillGem
 * - SilvSkillGem_Scene          (optional but HIGHLY recommended)
 * - SilvSkillGem_Support_Basics (optional)
 * - <Any Support Gem Addons go here>
 *
 * Now add the Materia-images to your project folder:
 * <your project>/img/skill_gems/EquipSocketsSkin.png
 * <your project>/img/skill_gems/Orbs.png
 * <your project>/img/skill_gems/Sockets.png
 * <your project>/img/skill_gems/Stars.png
 *
 * For more instructions see the RPG Maker forums topic.
 *
 *--------------------------------------
 * Armor (gem) items in the database
 *--------------------------------------
 * - Set the "Armor Type" to match the "Gem Type ID"-parameter
 * - Set the "Equipment Type" to match either the "Skill" "Support" or "Special"  "-Gem Sub Type ID"-parameter
 * - Add Parameter-Traits ([F9] > Armors > Traits section in top-right > Add new trait > Param-tab-page (2nd one) > Parameter
 *	 These traits will be added to the player upon equipping that gem and removed when equipping that gem.
 * - The "Parameter Changes" section also works for gems. They are added when that gem is equipped and removed when that gem is unequipped.
 *
 *--------------------------------------
 * Armor (gem) Notetags
 *--------------------------------------
 * <sg_color:color_string>
 * <sg_skill_id:number>             // Use -1 to disable (ONLY for special-gems!)
 * <sg_support_type:support_type>   // support_type must have a Silv.SG.Support function matching this type. OR use the value: none. Example: <sg_support_type:none>
 * <sg_max_rank:value>              // Optional. Sets the max rank this gem can become. By default gems start at rank 0.
 * <sg_rank_xp: value value value > // Optional. 1 value for each possible rank -1 (-1 because the first rank does not require xp, each gem starts on the first rank)
 * <sg_rank_stat_multi:value>       // Optional. A gem has by default 20% base-stat-bonus per rank. This ONLY applies to flat-stat-bonuses. %-based bonuses (added through traits) are NOT increased by rank.
 * <sg_unique_per_actor>            // Optional. Marks this gem as unique. Any actor may only have one of these gems equipped at any point in time.
 * <sg_unique_per_lgroup>           // Optional. Marks this gem as unique per linked group. So each group of linked sockets may only have one of these gems equipped at any point in time.
 * <sg_is_command>                  // Optional. Marks this gem as a command-gem. Only works if the gem actually gives the actor an active skill.
 * <sg_birth_enabled:boolean>       // Optional. true/false. Overrides the parameter "Default Gem Birth".
 *
 * Marks this gem as an enemy-skill-gem. This means that it will learn enemy skills used. But only the ones listed in this notetag.
 * <sg_learns_enemy_skills:learnable skill id's>
 * Example of a gem that can learn skills 3, 4 and 5: <sg_learns_enemy_skills:3 4 5>
 *
 * Example skill gem:
 * <sg_color:red>
 * <sg_skill_id:9 null 10 null 11>
 * <sg_rank_stat_multi:0.3>
 *
 * Example support gem:
 * <sg_color:white>
 * <sg_support_type:all>
 *
 * Example special gem:
 * <sg_color:white>
 * <sg_support_type:training>
 *
 *--------------------------------------
 * Yanfly's Main Menu Manager Setup (optional)
 *--------------------------------------
 *
 * 1. Download & Install YEP_MainMenuManager.js
 * 2. Configure the parameters as follow:
 * Menu 21 Name: 'Equip ' + Silv.SG.Name
 * Menu 21 Symbol: silvGems
 * Menu 21 Show: true
 * Menu 21 Enabled: true
 * Menu 21 Main Bind: this.commandPersonal.bind(this)
 * Menu 21 Actor Bind: SceneManager.push(Scene_SG)
 *
 *--------------------------------------
 * Plugin Commands (not case sensitive)
 *--------------------------------------
 * SG Unequip Actor <actor_id>
 * Unequips all gems for the specified actor.
 * Example: SG Unequip Actor 1
 *
 * SG Unequip Party
 * Unequips all gems for all actors currently in the party.
 *
 * SG Unequip All
 * Unequips all gems for ALL actors in the entire game. Including actors not in the current party.
 *
 * SG ShowEquipScene <actor_id>
 * Shows the Gem-Equip Scene for the specified actor.
 * Example: SG ShowEquipScene 1
 *
 * SG AddXP Actor <actor_id> <exp amount>
 * Adds XP to the specified actor and also adds xp to all equipped gems (taking into account the xp-modifiers and such for gems).
 * Example: SG AddXP Actor 1 1000
 *
 * SG AddXP Party <exp amount>
 * Adds XP to the entire party and also adds xp to all equipped gems (taking into account the xp-modifiers and such for gems).
 * Example: SG AddXP Party 1000
 *
 * SG AddXP AllActors <exp amount>
 * Adds XP to all actors and also adds xp to all equipped gems (taking into account the xp-modifiers and such for gems).
 * Example: SG AddXP AllActors 1000
 *
 *--------------------------------------
 * Compatibility
 *--------------------------------------
 *
 * Compatible with at least the following plugins:
 * - YEP_SkillCore.js
 * - YEP_CoreEngine.js
 * - YEP_EquipCore.js
 * - YEP_ItemCore.js (=required plugin!)
 * - YEP_BattleEngineCore.js
 * - YEP_MainMenuManager.js
 *
 * Overwritten methods:
 * - Window_EquipItem.prototype.updateHelp()
 *
 *--------------------------------------
 * Remarks
 *--------------------------------------
 *
 * - Equipped gem xp is not altered when setting the party/actor xp through the "Change Exp" command. This is intended. To manually add exp to both the actor(s) and their equipped gems use one of the following script-calls:
 *     $gameActors._data[1].gainExp(1000); // For actor with id 1
 *     $gameActors._data.removeEmpty().forEach(function(a) { a.gainExp(1000); }); // For all actors
 *     $gameParty._actors.forEach(function(actorID) { $gameActors._data[actorID].gainExp(1000); }); // For all actors currently in the party
 * - Command gems are not affected by support- or special-gems. This is intended.
 * - There are more configurable settings than just the parameters (colors, max-sockets, etc.). But I do not support changing those settings.
 *
 *--------------------------------------
 * FAQ
 *--------------------------------------
 * Q: How to add "Enemy Skill Materia" (aka "Blue Magic")?
 * A: Create a new Special-Gem (in the Armors database) and apply the following notetags (change values 10 & 16 to the skills you want the gem to ne able learn):
 * <sg_support_type:none>
 * <sg_color:yellow>
 * <sg_learns_enemy_skills:10, 16>
 * <sg_unique_per_actor>
 *
 * Q: When equipping gems the stats are slightly randomized? Example: I equip a gem with +100 max-hp. But the actor get's between 100-105 max-hp randomly every time.
 * A: Open the plugin menu [F10]. Open "Yanfly's Item Core" and change the "Random Variance" parameter (by default it's set to 5) to 0.
 *
 * Q: Why are my command-gems not affected by my linked support-gems?
 * A: Because that is intended behaviour.
 *
 * Q: How to report a bug?
 * A: 1. Make sure you are not in fullscreen (press [F4] to switch) and press [F8] to show the console. I need that data.
 *    2. Also report the error message in the game-window itself (if any). Screenshot it if you must.
 *    3. Post that data on the RPG Maker forums in the topic for this Plugin.
 *
 *--------------------------------------
 * Features
 *--------------------------------------
 *
 * - Adds sockets to items that can be socketed with gems. This is pretty much a 'materia-system'.
 * - Each gem gains xp and has a custom amount of ranks & xp requirement.
 * - Gems reproduce themselves when reaching max-rank.
 * - Build-in gemtypes: skill, support, special. Note that skill- & special-types can also be a command-subtype.
 * - These gems can give stats, skills, passive-skills, support-skills, command-skills as you see fit.
 * - Optional socket&gem colors. Including a color that matches all colors (defaults to white).
 * - Supports custom addon-plugins for additional support-gems.
 * - Comes with a scene for equipping and unequipping the gems.
 * - Compatible with "Yanfly's Main Menu Manager".
 * - Lots of customizable options.
 * - Compatible with changing an actors class.
 *
 *--------------------------------------
 * Version History:
 *--------------------------------------
 * v1.04 (4 February 2016)
 * - Gems (each gem no matter the type) can now learn skills.
 * - Added a new armor-notetag to support learning enemy skills: <sg_learns_enemy_skills: skill_ids>
 *
 * v1.03 (2 February 2016) [Parameters Changed]
 * - Added new parameters.
 * - Changed the locations of some of the colors in their images and added color-parameters for up to 6 custom colors and added the new color "green".
 * - Added 4 new plugin commands.
 *
 * v1.02 (31 January 2016) [Parameters Changed]
 * - Removed the UniqueSkills plugin and merged it with this plugin.
 * - Removed the Lodash script entirely.
 * - Added more parameters.
 * - Added more colors.
 * - Gems can now be flagged as 'unique per link group'.
 *
 * v1.01 (30 January 2016)
 * - First Public Release.
 * - Fixed a bug that caused the command-gems to not give the user the new skills upon ranking up.
 *
 * v1.00 (12 December 2015)
 * - First Internal Release.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
// SilvUnqiqueSkills
// Version: 1.01
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Imported = Imported || {};
Imported.Silv_UniqueSkills = 1.01;
var Silv = Silv || {};
Silv.UniqSkill = Silv.SG || {};
Silv.UniqSkill.StoredSkills = [];

Silv.Utils = Silv.Utils || {};
Silv.Utils.DeepClone = function(originalObject)
{
	return JSON.parse(JSON.stringify(originalObject));
};

// This method also includes the 'edges'. So (0).clamp(0,2) would return 0.
Number.prototype.clamp = function(min, max)
{
	return Math.min(Math.max(this, min), max);
};

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

//========================================
Silv.UniqSkill.getNextSkillID = function()
{
	var newSkillID = 1;
	while((typeof $dataSkills[newSkillID] !== 'undefined')) { newSkillID++; }
	return newSkillID;
};

Silv.UniqSkill.getUnique = function(original_skill_id)
{
	var originalSkill = $dataSkills[original_skill_id];
	if ((typeof originalSkill === 'undefined') || (originalSkill === null)) { throw new Error('"original_skill_id" can\'t be null or undefined. Got: ' + typeof originalSkill); }
	var newSkill = Silv.Utils.DeepClone(originalSkill); // var newSkill = _.cloneDeep(originalSkill);
	newSkill.id = Silv.UniqSkill.getNextSkillID();
	$dataSkills[newSkill.id] = newSkill;
	this.StoredSkills[newSkill.id] = newSkill; // optional line
	return newSkill;
};

Silv.UniqSkill.deleteBySkillID = function(skill_id)
{
	$dataSkills[skill_id] = null;
	delete $dataSkills[skill_id];
	this.CompactDataSkills(); // because deleting is not enough, the length still remains the same and causes undefined values to take the place of the deleted-value.
	Silv.UniqSkill.StoredSkills[skill_id] = null;
};

// Removes the undefined-values at the end of the $dataSkills.
// When unequipping a skill-gem, a skill is deleted, but the $dataSkills keeps an undefined-value for the deleted skill. New skills automatically fill
// up the lowest undefined-id's in $dataSkills. But at the end if could leave behind some undefined-values if more gems were removed than added.
// This causes a compatibility issue with Yanfly's SkillCore-plugin because he blindly loops the $dataSkills without checking for undefined-values in DataManager.processSkillNotetags(group)
// So that's why this method is required.
Silv.UniqSkill.CompactDataSkills = function()
{
	while (typeof $dataSkills[$dataSkills.length - 1] === 'undefined')
	{
		$dataSkills.length--;
	}
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #Saving & #Loading #Save
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Silv.AddAlias('unqiqueSkills_DataManager_makeSaveContents', DataManager.makeSaveContents);
DataManager.makeSaveContents = function()
{
	contents = Silv.Alias.unqiqueSkills_DataManager_makeSaveContents.apply(this, arguments);
	contents.uniqSkills = Silv.UniqSkill.StoredSkills;
	return contents;
};

Silv.AddAlias('unqiqueSkills_DataManager_extractSaveContents', DataManager.extractSaveContents);
DataManager.extractSaveContents = function(contents)
{	
	Silv.UniqSkill.StoredSkills = contents.uniqSkills;
	for (var i=0; i< Silv.UniqSkill.StoredSkills.length; i++)
	{
		if (Silv.UniqSkill.StoredSkills[i] !== null) { $dataSkills[i] = Silv.UniqSkill.StoredSkills[i]; }
	}
	// For compatibility with Yanfly's skill-core script
	if (Imported.YEP_SkillCore)	{ this.processSkillNotetags($dataSkills); }
	
	Silv.Alias.unqiqueSkills_DataManager_extractSaveContents.apply(this, arguments);
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the end of SilvUniqueSkills
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SilvSkillGem
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Imported
Imported.Silv_SG_Core = 1.04;

// Dependencies
if (!('Silv_UniqueSkills'  in Imported)) { throw new Error('ERROR: Silvers SkillGems requires Silvers UniqueSkills.'); }
if (!('YEP_ItemCore'       in Imported)) { throw new Error('ERROR: Silvers SkillGems requires "Yanfly Engine Plugins - Item Core". It must be placed above this plugin.'); }
if (!('SILV_BattleCommand' in Imported)) { console.log('Warning: Silvers SkillGems could not find "Silvers Battle Command". This is fine as long as no Command Gems are used.'); }

// Get Plugin #Parameters
Silv.Plugins = Silv.Plugins || {};
Silv.Parameters = $plugins.filter(function(p) { return p.description.contains('<SilvSkillGem>'); })[0].parameters;
Silv.SG = Silv.SG || {};
// General
Silv.SG.Name                     = Silv.Parameters['Skill Gem Name'];
Silv.SG.EnemySkillLearningText   = Silv.Parameters['Enemy Skill Learning Text'];
// Core
Silv.SG.SG_ID                    = parseInt(Silv.Parameters['Gem Type ID']);
Silv.SG.ArmorSubTypeID_Skill     = parseInt(Silv.Parameters['Skill-Gem Sub Type ID']);
Silv.SG.ArmorSubTypeID_Support   = parseInt(Silv.Parameters['Support-Gem Sub Type ID']);
Silv.SG.ArmorSubTypeID_Special   = parseInt(Silv.Parameters['Special-Gem Sub Type ID']);
Silv.SG.UniversalColors          = Silv.Parameters['Universal Colors'].split(' ');
// Defaults
Silv.SG.DefaultGemRankCnt        = parseInt(Silv.Parameters['Default Gem Rank Count']);
Silv.SG.DefaultGemRankXP         = Silv.Parameters['Default Rank XP'].split(' ');
Silv.SG.DefaultSkillColor        = Silv.Parameters['Default Skill Color'].toLowerCase();
Silv.SG.DefaultRankMulti         = parseFloat(Silv.Parameters['Default Rank Multiplier']);
Silv.SG.DefaultGemBirthEnabled   = Silv.Parameters['Default Gem Birth'].toLowerCase() === 'true';
// Misc
Silv.SG.GemXPGain                = parseFloat(Silv.Parameters['Gem XP Gain']) / 100.0;
Silv.SG.ExtendItemMenu           = Silv.Parameters['Extend Item-Menu'].toLowerCase() === 'true';
Silv.SG.MaxRankText              = Silv.Parameters['Max Gem-Rank Text'];
Silv.SG.MaxRankValue             = parseFloat(Silv.Parameters['Max Rank XP-Value']);
Silv.SG.BirthSFXObject           = (Silv.Parameters['Birth SFX'].toLowerCase() === 'none') ? null : { name:Silv.Parameters['Birth SFX'], pan:0, pitch:100, volume:90 };
Silv.SG.LearnedEnemySkillSFXObj  = (Silv.Parameters['Learn Enemy Skill SFX'].toLowerCase() === 'none') ? null : { name:Silv.Parameters['Learn Enemy Skill SFX'], pan:0, pitch:100, volume:90 };
Silv.SG.LinkCharacter            = Silv.Parameters['Link Character'];
Silv.SG.MaxSockets               = parseInt(Silv.Parameters['Max Sockets']);
Silv.SG.SocketLinkImageIdx_Left  = parseInt(Silv.Parameters['Left Socket Link Image Index']);;
Silv.SG.SocketLinkImageIdx_Right = parseInt(Silv.Parameters['Right Socket Link Image Index']);;

// After Care & Sanity Checks
(function()
{
	if (Silv.SG.DefaultGemRankXP.length < Silv.SG.DefaultGemRankCnt) { throw new Error('"Default Rank XP"-parameter length (' + Silv.SG.DefaultGemRankXP.length + ' must be equal or bigger than the "Default Gem Rank Count"-Parameter (' + Silv.SG.DefaultGemRankCnt + ').'); } // Sanity check
	// if (Silv.SG.DefaultGemRankXP.length < (Silv.SG.DefaultGemRankCnt -1)) { throw new Error('Expected at least a length of Silv.SG.DefaultGemRankXP.length >= ' + (Silv.SG.DefaultGemRankCnt -1) + '. Got: ' + Silv.SG.DefaultGemRankXP.length + '.'); }
	for (var i=0; i<Silv.SG.DefaultGemRankXP.length; i++) { Silv.SG.DefaultGemRankXP[i] = parseInt(Silv.SG.DefaultGemRankXP[i]); }
})();

// The keys from here are the ones that will be used inside the weapon&armor notetags to determine socket-color.
Silv.SG.SocketColorTable = 
{
	'0': 'white',
	w: 'white',
	l: 'black',
	r: 'red',
	b: 'blue',
	y: 'yellow',
	g: 'green',
	p: 'purple',
	c: 'cyan',
	n: 'brown'
};

// This table is used to translate color-names (the ones from SocketColorTable) to image-frames.
Silv.SG.SocketColorImageTable = 
{
	white:  2,
	black:  3,
	red:    4,
	blue:   5,
	yellow: 6,
	green:  7,
	purple: 8,
	cyan:   9,
	brown:  10
};

// Colors
(function()
{
	for(var i=1; i<=6; i++)
	{
		var value = Silv.Parameters['Extra Color ' + i.toString()].toLowerCase().split(' '); // Example: teal t 8
		if (value.length === 3)
		{
			if (typeof Silv.SG.SocketColorTable[value[1]] !== 'undefined') { console.log(Silv.SG.SocketColorTable); throw new Error('Color "' + value[1] + '" already exists in SocketColorTable.'); } // Sanity Check
			Silv.SG.SocketColorTable[value[1]] = value[0];
			
			if (typeof Silv.SG.SocketColorImageTable[value[0]] !== 'undefined') { console.log(Silv.SG.SocketColorImageTable); throw new Error('Color "' + value[0] + '" already exists in SocketColorImageTable.'); } // Sanity Check
			Silv.SG.SocketColorImageTable[value[0]] = parseInt(value[2]);
		}
	}
})();

// Contains the list of all gems tagged as an enemy-skill-gem
Silv.SG.EnemySkillGemBaseIDs = [];

// Contains a list of functions for&from all the support gems.
Silv.SG.Support = {};
// Helper functions for the support gems.
Silv.SG.SupportHelper = {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #Utilities (SilvSkillGem)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
ImageManager.loadSG = function(filename, hue)
{
    return this.loadBitmap('img/skill_gems/', filename, hue, false);
};

// Returns the sum of all elements between 2 arrays
Array.prototype.sumArray = function(otherArray)
{
    var sum = [];
    if (otherArray != null && this.length == otherArray.length)
	{
        for (var i = 0; i < otherArray.length; i++)
		{
            sum.push(this[i] + otherArray[i]);
        }
    }

    return sum;
};

// Returns the sum of all elements in this array
Array.prototype.sum = function()
{
	return this.reduce(add, 0);
	function add(a, b) { return a + b; }
};

// Removes empty-, undefined- and null values from the array.
// Does not alter the original array.
Array.prototype.removeEmpty = function()
{
	return this.filter(function(e){ return e != undefined; }); // IMPORTANT NOTE: use != and NOT !== in this particular case. Otherwise the null-values would still remain!
};

// Example:
// var test = [ {id:1}, {id:2}, {id:3} ]
// test.getItemByPropertyVal('id', 1); // 1
// test.getItemByPropertyVal('id', 5); // false
// Note: can also be used to check if an item in the array exists
Array.prototype.getItemByPropertyVal = function(property, propertyValue)
{
	for(var i=0; i<this.length; i++)
	{
		if (this[i][property] === propertyValue) { return this[i]; }
	}
	return null;
};

Silv.isValid = function(value)
{
	if ((value === undefined) || (value === null)) { return false; }
	if ((typeof value === 'number') && isNaN(value)) { throw new Error('Received NaN-value.'); }
	return true;
};

Silv.SG.isUniversalColor = function(color)
{
	return (Silv.SG.UniversalColors.indexOf(color) > -1);
};

Silv.SG.getSocketImageIndex = function(colorStr)
{
	var socketImgIdx = Silv.SG.SocketColorImageTable[colorStr];
	if (typeof socketImgIdx === 'undefined') { throw new Error('Table problem? colorStr: ' + colorStr); }
	return socketImgIdx;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RangeContainer
// var test = new RangeContainer(0, 0, 5, true, true);
// Public methods:
//   setValue(Number)
//   incrementValue(Number)
//   setMinValue(Number)
//   setMaxValue(Number)
// Public properties:
//   length
//   value & getValue
//   maxValueReached
//   minValue
//   maxValue
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function RangeContainer() { this.initialize.apply(this, arguments); }

Object.defineProperty(RangeContainer.prototype, "length",          { get: function () { return this._maxValue - this._minValue; } });
Object.defineProperty(RangeContainer.prototype, "value",           { get: function () { return this._value; } });
Object.defineProperty(RangeContainer.prototype, "getValue",        { get: function () { return this._value; } });
Object.defineProperty(RangeContainer.prototype, "maxValueReached", { get: function () { return this._maxValueReached; } });
Object.defineProperty(RangeContainer.prototype, "minValue",        { get: function () { return this._minValue; } });
Object.defineProperty(RangeContainer.prototype, "maxValue",        { get: function () { return this._maxValue; } });

RangeContainer.prototype.initialize = function(initialValue, min, max, clampMin, clampMax)
{
	this._minValue = min;
	this._maxValue = max;
	this._clampMinValue = clampMin;	
	this._clampMaxValue = clampMax;
	this.setValue(initialValue);
};

RangeContainer.prototype._clamp = function()
{
	if (     this._clampMaxValue && (this._value > this._maxValue)) { this._value = this._maxValue; }
	else if (this._clampMinValue && (this._value < this._minValue)) { this._value = this._minValue; }
};

RangeContainer.prototype._calcMaxValueReached = function()
{
	this._maxValueReached = (this._value >= this._maxValue);
};

RangeContainer.prototype.setValue = function(newValue)
{
	this._value = newValue;
	this._clamp();
	this._calcMaxValueReached();
};

RangeContainer.prototype.incrementValue = function(incrementation)
{
	this.setValue(this._value + incrementation);
};

RangeContainer.prototype.setMinValue = function(newMinValue)
{
	this._minValue = newMinValue;
	this._clamp();
};

RangeContainer.prototype.setMaxValue = function(newMaxValue)
{
	this._maxValue = newMaxValue;
	this._clamp();
	this._calcMaxValueReached();
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// XP_Helper #XP
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function XP_Helper() { this.initialize.apply(this, arguments); }
// Inheritance
XP_Helper.prototype = Object.create(RangeContainer.prototype);
// Constructor
XP_Helper.prototype.constructor = XP_Helper;
// Properties
Object.defineProperty(XP_Helper.prototype, "xp_overflow",              { get: function () { return this._xp_overflow; } });
Object.defineProperty(XP_Helper.prototype, "xp_totalRequiredThisRank", { get: function () { return this.xpPerLevelArray[this.value]; } });
Object.defineProperty(XP_Helper.prototype, "xp_gainedThisLevel",       { get: function () { return this._xpGainedThisLevel; } });
Object.defineProperty(XP_Helper.prototype, "xp_toNextLevelPerc",       { get: function () { return this._xpToNextLevelPerc; } });

XP_Helper.prototype.initialize = function(initialValue, min, max, clampMin, clampMax, xpPerLevelArray)
{
	// Initialize parent-object
	RangeContainer.prototype.initialize.call(this, initialValue, min, max, clampMin, clampMax);
	
	// Array containing all the required XP per level. So each element in this array contains how much XP THAT SPECIFIC level requires before leveling up. So [100, 200, 500] means that you would reach max lvl at 800 xp.
	this.xpPerLevelArray = xpPerLevelArray;
	
	// The amount of XP required from min-level to max-level
	this._xpMax = 0;
	xpPerLevelArray.forEach(function(element) { this._xpMax += element; }, this);
	
	// Total XP amassed
	this._xpTotal = 0;
	
	// How much XP there is over the maximum limit
	this._xp_overflow = 0;
	
	// The amount of XP there already is for getting towards the next level.
	this._xpGainedThisLevel = 0;
	
	// How much XP is still required until reaching the next level
	this._xpLeftForNextLvl = this.xpPerLevelArray[this.value];
	
	// How far the player is in acquiring the next level in % (0.0 - 1.0)
	this._xpToNextLevelPerc = (this.maxValueReached) ? Silv.SG.MaxRankValue : 0.0;
	
	// How many level-ups the last XP-gain caused.
	this.lvl_upsToProcess = 0;
};
	
XP_Helper.prototype.gainXP = function(xp_gained)
{
	var maxLvlsToGain = this.maxValue - this.value + 1; // +1 because ranks start at 0
	this.lvl_upsToProcess = 0;

	if (maxLvlsToGain > 0)
	{
		this._xpTotal += xp_gained;
		this._xpLeftForNextLvl -= xp_gained;
	
		// Leveling up
		while ((this._xpLeftForNextLvl < 0) && (this.lvl_upsToProcess <= maxLvlsToGain))
		{
			this.lvl_upsToProcess++;
			this._xpLeftForNextLvl += this.xpPerLevelArray[this.value + this.lvl_upsToProcess];
		}

		if (this.lvl_upsToProcess === maxLvlsToGain)
		{
			this._xpGainedThisLevel = null;
			this._xpLeftForNextLvl = null;
			this._xpToNextLevelPerc = Silv.SG.MaxRankValue;
		}
		else
		{
			var futureRank = this.value + this.lvl_upsToProcess;
			this._xpGainedThisLevel = this.xpPerLevelArray[futureRank] - this._xpLeftForNextLvl;
			this._xpToNextLevelPerc = this._xpGainedThisLevel / parseFloat(this.xpPerLevelArray[futureRank]);
		}
	}
	else
	{
		this._xpTotal += xp_gained;
	}
	
	// Calculate XP-overflow
	this._xp_overflow = Math.max(0, this._xpTotal - this._xpMax);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Skill Gem Socket
// Also sockets sadly can not have a direct reference to each other (when linked) because Object to Deep error from RPG Maker... STUPID RPG MAKER!.. so instead we work with socket-id's...
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function SG_Socket() { this.initialize.apply(this, arguments); }
SG_Socket.prototype.constructor = SG_Socket;

SG_Socket.prototype.initialize = function(id, socketColor)
{
	this.id = id;
	this.socketColor = socketColor;
	this.socketColorImgIdx = Silv.SG.getSocketImageIndex(socketColor);
	this.linkedSocketLeft = null;
	this.linkedSocketRight = null;
	this.socketed_SG = null; // the skill-gem that is in this socket or null if none
};

SG_Socket.prototype.calcLinkedSockets = function(allSockets)
{
	this.linkedSockets = [];
	var i;
	
	if (this.linkedSocketLeft !== null)
	{
		i = this.linkedSocketLeft;
		this.linkedSockets.push(i);
		
		while ((i > 0) && allSockets[i].linkedSocketLeft !== null)
		{
			i--;
			this.linkedSockets.push(i);
		}
	}
	
	if (this.linkedSocketRight !== null)
	{
		i = this.linkedSocketRight;
		this.linkedSockets.push(i);
		
		while ((i < (allSockets.length - 1)) && (allSockets[i].linkedSocketRight !== null))
		{
			i++;
			this.linkedSockets.push(i);
		}
	}
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EquippedSocket (the one the gameActors will be storing)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function EquippedSocket() { this.initialize.apply(this, arguments); }
EquippedSocket.prototype.constructor = EquippedSocket;

// itemID is from $dataArmors, NOT from $dataItems!
EquippedSocket.prototype.initialize = function(itemID, baseItemId, socketIdx, color)
{
	this.itemID = itemID;
	this.baseItemId = baseItemId; // id pointing to the original item. Say we have 4 fire-gems with armor-id 50 in the database. baseItemId is then 50.
	this.socketIdx = socketIdx;
	this.color = color;
	this.socketColorImgIdx = Silv.SG.getSocketImageIndex(color);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Item SG (stored in $dataItems, $dataArmors, $dataWeapons)
// Note: this class is persistent through saving&loading including any modifications to it.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Item_SG() { this.initialize.apply(this, arguments); }
Item_SG.prototype.constructor = Item_SG;

// allowed values for the gemType-parameter: -1, Silv.SG.ArmorSubTypeID_Skill, Silv.SG.ArmorSubTypeID_Support or Silv.SG.ArmorSubTypeID_Special
Item_SG.prototype.initialize = function(meta, gemType) // I can't pass the actual item itself because having a reference back to item causes an "Object too Deep" error in RPG Maker because circular references not allowed, not even indirectly by storing database & item_id separately (some exceptions apply)
{
	this.activeSkill_IDs = [];
	this.gemType = gemType;
	this.initSockets(meta);
	this.initGem(meta);
};

// Anything added here will be the same for all gems with the same armor_id. To add uniquq-stuff, add it to the ItemManager.setNewIndependentItem() instead.
Item_SG.prototype.initGem = function(meta)
{
	// Set default value
	this.xpData = null;
	
	// Color
	('sg_color' in meta) ? this.setGemColor(meta.sg_color) : this.setGemColor(Silv.SG.DefaultSkillColor);
	
	// Set XP Modifiers
	this.resetXPModifiers();
	
	// Rank stat multiplier
	('sg_rank_stat_multi' in meta) ? this.rankMulti = parseFloat(meta.sg_rank_stat_multi) : this.rankMulti = Silv.SG.DefaultRankMulti;
	
	// Unique Per Actor
	this.isUniquePerActor = ('sg_unique_per_actor' in meta);
	
	// Unique Per Linked Group
	this.isUniquePerLinkedGroup = ('sg_unique_per_lgroup' in meta);
	
	// Owner
	this.owner = null;
	
	// Command
	this.isCommand = (('sg_is_command' in meta) && (this.gemType !== Silv.SG.ArmorSubTypeID_Support));
	
	// Gem Birth
	if ('sg_birth_enabled' in meta)
	{
		this.givesBirth = meta.sg_unique_per_actor === 'true';
	}
	else
	{
		this.givesBirth = Silv.SG.DefaultGemBirthEnabled;
	}
	
	// sub-type
	if ((this.gemType === Silv.SG.ArmorSubTypeID_Skill) || (this.gemType === Silv.SG.ArmorSubTypeID_Support) ||  (this.gemType === Silv.SG.ArmorSubTypeID_Special))
	{
		this.isGem = true;
		
		// Sanity check (skills can't have sockets)
		if (this.hasSockets)
		{
			console.log('Full Meta:');
			console.log(meta);
			throw new Error("An item has sockets AND is also a gem... That's not possible. meta: " + meta);
		}
		
		// Process Meta depending on gem-type
		this.processSkillAndSpecialMeta(meta);
		this.processSupportAndSpecialMeta(meta);
	}
	else
	{
		// This is not a gem
		this.gemType = null;
		this.isGem = false;
		this.skills = null;
		this.support_type = null;
		this.isUniquePerActor = false;
		this.isCommand = false;
		this.rankMulti = 0;
	}
	
	// LearnedSkills
	this.learnedSkills = [];
	
	// The skills that this gem can learn
	if ('sg_learns_enemy_skills' in meta)
	{
		this.learnableSkills = meta.sg_learns_enemy_skills.split(' ');
		for (var i=0; i<this.learnableSkills.length; i++) { this.learnableSkills[i] = parseInt(this.learnableSkills[i]); }
		this.autoLearnSkills = true;
	}
	else
	{
		this.learnableSkills = [];
		this.autoLearnSkills = false;
	}
};

Item_SG.prototype.hasLearnableSkills = function()
{
	return (this.learnableSkills.length > 0);
};

Item_SG.prototype.setGemColor = function(color)
{
	this.gemColor = color;
	this.gemColorIsUniversal = Silv.SG.isUniversalColor(color);
};

Item_SG.prototype.multiplyTraits = function(params)
{
	var multipliedTraits = params.slice(0); // clone array
	for (var traitIdx=0; traitIdx<multipliedTraits.length; traitIdx++)
	{
		multipliedTraits[traitIdx] += this.rankMulti * (this.xpData.value * multipliedTraits[traitIdx]);
	}
	return multipliedTraits;
};

Item_SG.prototype.processSkillAndSpecialMeta = function(meta)
{
	if ((this.gemType === Silv.SG.ArmorSubTypeID_Skill) || (this.gemType === Silv.SG.ArmorSubTypeID_Special))
	{
		this.skills = [];
		if ('sg_skill_id' in meta)
		{
			var splitted = meta.sg_skill_id.split(' ');
			for (var i=0; i<splitted.length; i++)
			{
				var splitValue = splitted[i];
				if (splitValue != 'null')
				{
					var value = parseInt(splitValue);
					if (value < 1) { console.log(meta); throw new Error('Can not add a skill_id to a gem with a value < 1. Received value: ' + value + '. Meta was printed to log.'); } // Sanity check
					this.skills.push(value);
				}
				else
				{
					this.skills.push(null);
				}
			}
		}
		
		// Sanity check, regular skill-gems must have at least 1 skill
		if ((this.gemType === Silv.SG.ArmorSubTypeID_Skill) && (this.skills.length === 0))
		{
			console.log('Full Meta:');
			console.log(meta);
			throw new Error('Gemtype: ' + this.gemType + ' was found but it had no "skill_id" tag. Full "meta" was logged to console.');
		}
	}
};

Item_SG.prototype.processSupportAndSpecialMeta = function(meta) // Note: also processes special-gems.
{
	this.skills = this.skills || [];
	if ((this.gemType === Silv.SG.ArmorSubTypeID_Support) || (this.gemType === Silv.SG.ArmorSubTypeID_Special))
	{
		if ('sg_support_type' in meta)
		{
			this.support_type = meta.sg_support_type;
		}
		else
		{
			console.log('Full Meta:');
			console.log(meta);
			throw new Error(this.gemType +'-gem was found but it had no "sg_support_type" tag. Full "meta" was logged to console.');
		}
	}
};

Item_SG.prototype.getSocket = function(socketID)
{
	return this.sockets[socketID];
};

Item_SG.prototype.initSockets = function(meta)
{
	this.sockets = [];
	var socketID = 0;

	// Process notetag
	if ('sg_sockets' in meta)
	{
		var socketsStr = meta.sg_sockets.toLowerCase().split(' ');
		for (var i=0; i < socketsStr.length; i++)
		{
			var linkedData = socketsStr[i];
			if (linkedData.length == 1) // single unlinked socket
			{
				this.addSocket(socketID, linkedData);
				socketID++;
			}
			else // process two or more linked sockets
			{
				var lastAddedSocket = null;
				var nextSocketIsBackwardsLinked = false;
				while(linkedData.length > 0)
				{
					// process character by character
					var c = linkedData[0];
					// Remove first character from string
					linkedData = linkedData.slice(1, linkedData.length);
					
					if (c === Silv.SG.LinkCharacter) // '='
					{
						// Process link
						nextSocketIsBackwardsLinked = true;
					}
					else // 0 or color-character
					{
						var newSocket = null;
						if (nextSocketIsBackwardsLinked)
						{
							newSocket = this.addSocket(socketID, c);
							socketID++;
							lastAddedSocket.linkedSocketRight = newSocket.id;
							newSocket.linkedSocketLeft = lastAddedSocket.id;
							lastAddedSocket = newSocket;
						}
						else // Should only occur for the first item in the linkedData. Like the first zero in this string: 0=0=0=0
						{
							lastAddedSocket = this.addSocket(socketID, c);
							socketID++;
						}
						nextSocketIsBackwardsLinked = false;
					}
				}
			}
		}
	}
	
	this.socketCnt = this.sockets.length;
	this.hasSockets = (this.sockets.length > 0);
	
	// Calculate what sockets are linked to what
	if (this.hasSockets)
	{
		for (var socketIdx=0; socketIdx<this.sockets.length; socketIdx++) { this.sockets[socketIdx].calcLinkedSockets(this.sockets); }
	}
};

Item_SG.prototype.addSocket = function(index, meta_character)
{
	var newSocket = new SG_Socket(index, Silv.SG.SocketColorTable[meta_character]);
	this.sockets.push(newSocket);
	return newSocket;
};
//------------------------------------------------------------------------------------------------------------------------------------
// #XP & #Ranking Up
//------------------------------------------------------------------------------------------------------------------------------------

Item_SG.prototype.gainXP = function(xp_amount)
{
	this.xpData.gainXP(this.actualXPGained(xp_amount));
	
	while (this.xpData.lvl_upsToProcess > 0)
	{
		this.onRankUp(this.xpData.value, this.xpData.value + 1);
		this.xpData.lvl_upsToProcess--;
	}
};

Item_SG.prototype.actualXPGained = function(gained_base_xp)
{
	return gained_base_xp * Silv.SG.GemXPGain * ((this.xp_modifiers.length > 0) ? this.xp_modifiers.sum() - this.xp_modifiers.length + 1 : 1); // because adding 1.01 + 1.02 would make 2.03. But we want 1.03. So that's why we substract the length + 1 from it.
};

Item_SG.prototype.resetXPModifiers = function()
{
	this.xp_modifiers = [];
};

Item_SG.prototype.rankProgressStr = function()
{
	if (!this.xpData.maxValueReached)
	{
		return parseInt(this.xpData.xp_gainedThisLevel) + ' / ' + parseInt(this.xpData.xp_totalRequiredThisRank);
	}
	else
	{
		return Silv.SG.MaxRankText;
	}
};

Item_SG.prototype.xpToNextRankPerc = function()
{
	return this.xpData.xp_toNextLevelPerc;
};

// Note: when multiple gems rank up during the same update-cycle, that the recalculateSkills() skills is called for each gem that ranked up. This is not very efficient.
Item_SG.prototype.onRankUp = function(oldRank, newRank)
{
	this.xpData.setValue(newRank);
	this.setActiveSkill_ids();

	if (this.owner !== null)
	{
		this.owner.recalculateSkills();
		
		if (this.isCommand)
		{
			this.owner.removeCommand_SG(this.armorID);
			this.owner.addCommand_SG(this.armorID, this.activeSkill_IDs);
		}
	}
	
	if (newRank === this.xpData.maxValue) { this.onMaxRankReached(); }
};

Item_SG.prototype.onMaxRankReached = function()
{
	if (this.givesBirth)
	{
		// Add the new gem to the party's inventory
		$gameParty.gainItem($dataArmors[this.armorBaseID], 1);
		
		// SFX
		if (Silv.SG.BirthSFXObject !== null) { AudioManager.playStaticSe(Silv.SG.BirthSFXObject); }
	}
};

//------------------------------------------------------------------------------------------------------------------------------------
// Skills
//------------------------------------------------------------------------------------------------------------------------------------
Item_SG.prototype.alreadyHasLearnedSkill = function(skill_id)
{
	return ((this.skills.indexOf(skill_id) > -1) || (this.learnedSkills.getItemByPropertyVal('id', skill_id)));
};

// Note you will have to call recalculateSkills() on the actor before the player actually learns them after calling this method.
// Returns true if a new skill was added, otherwise returns false.
Item_SG.prototype.learnSkill = function(skill_id, requiredRank, showInEquip)
{
	// Default parameter values
	if (typeof requiredRank === 'undefined') { requiredRank = 0; }
	if (typeof showInEquip === 'undefined') { showInEquip = false; }

	// Don't add it if this gem already possesses this skill, instead only update it's properties
	if (this.alreadyHasLearnedSkill(skill_id))
	{
		var learnedSkill = this.learnedSkills.getItemByPropertyVal('id', skill_id);
		learnedSkill.requiredRank = requiredRank;
		learnedSkill.showInEquip = showInEquip;
		return false;
	}
	else
	{	
		// Add it to the learned skills
		this.learnedSkills.push({
			id:skill_id,
			requiredRank:requiredRank,
			showInEquip:showInEquip
		});
		
		// If the skill was not on the list of learnable skill then add it now
		if (!~this.learnableSkills.indexOf(skill_id)) { this.learnableSkills.push(skill_id); }
		
		// Refresh active skill ID's (because the new skill may already meet the conditions for being available)
		this.setActiveSkill_ids();
		return true;
	}
};

// Adds null values to the this.skills if it has less than the amount of ranks for this skill
Item_SG.prototype.fillSkills = function()
{
	if (!this.isGem) { return; }
	if (this.xpData.maxValue === -1) { throw new Error('fillSkills() can only be called after the ItemManager.setNewGem() processed this Item_SG.'); } // Sanity check
	while (this.skills.length < this.xpData.maxValue) { this.skills.push(null); }
};

Item_SG.prototype.setActiveSkill_ids = function()
{	
	this.activeSkill_IDs = [];

	// This method can obviously only be applied to gems. And only to gems that actually have skills (so no support gems).
	if (!this.isGem || (this.gemType == Silv.SG.ArmorSubTypeID_Support)) { return; }
	
	// Sanity check
	if (this.skills === null) { throw new Error('Item_SG.skills is null.'); }
	
	// Do not set an active skill for a special-gem that has no skills.
	if ((this.gemType == Silv.SG.ArmorSubTypeID_Special) && (this.skills.length === 0)) { return; }

	for (var rankIdx=0; rankIdx<=this.xpData.value; rankIdx++)
	{
		var skill_id = this.skills[rankIdx];
		
		// It's possible for a gem to have more ranks than asigned skill-id's. So there is no more reason to continue looping if all the skill-id's have already been processed.
		if (typeof skill_id === 'undefined') { break; }
		
		// Only add if not null and don't add duplicate skills (wouldn't make any sense).
		if ((skill_id !== null) && (this.activeSkill_IDs.indexOf(skill_id) === -1)) { this.activeSkill_IDs.push(skill_id); }
	}
	
	// Check activation of learned skills
	for (var learnedSkillIdx=0; learnedSkillIdx<this.learnedSkills.length; learnedSkillIdx++)
	{
		var learnedSkill = this.learnedSkills[learnedSkillIdx];
		if (learnedSkill.requiredRank <= this.xpData.value) { this.activeSkill_IDs.push(learnedSkill.id); }
	}
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Window EquipItem
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Below overwrite is required because the tempActor is not allowed to use the same skills as the player
Window_EquipItem.prototype.updateHelp = function() {
    Window_ItemList.prototype.updateHelp.call(this);
    if (this._actor && this._statusWindow) {
        var actor = JsonEx.makeDeepCopy(this._actor);
		actor.recalculateSkills(false);
        actor.forceChangeEquip(this._slotId, this.item());
        this._statusWindow.setTempActor(actor);
    }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Game #Party
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The next 2 methods are the same as Game_Party.prototype.gainItem. Why duplicate them? Because we don't want plugins like the ItemLog to notify the player that they gained an item while we might simply just have unequipped a skill-gem instead.
// Maybe never remove the skillgem from the inventory? just mark it as equipped? YES that's it.
Game_Party.prototype.gainItemUnnoticed = function(item, amount, includeEquip)
{
    var container = this.itemContainer(item);
    if (container) {
        var lastNumber = this.numItems(item);
        var newNumber = lastNumber + amount;
        container[item.id] = newNumber.clamp(0, this.maxItems(item));
        if (container[item.id] === 0) {
            delete container[item.id];
        }
        if (includeEquip && newNumber < 0) {
            this.discardMembersEquip(item, -newNumber);
        }
        $gameMap.requestRefresh();
    }
};

Game_Party.prototype.loseItemUnnoticed = function(item, amount, includeEquip)
{
    this.gainItemUnnoticed(item, -amount, includeEquip);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Game #Actor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------------------------------------------------------------------
// Retrieval functions
//------------------------------------------------------------------------------------------------------------------------------------
// Use no baseItemId-parameter to return all equipped gems
Game_Actor.prototype.getAllEquippedGemsByBaseId = function(baseItemId)
{
	var allGems = [];
	var equips = this.equips();
	for (var equipSlotIdx=0; equipSlotIdx<equips.length; equipSlotIdx++) // Loop through equip slots
	{
		for (var socketIdx=0; socketIdx<Silv.SG.MaxSockets; socketIdx++) // Loop through the equipSockets
		{
			var equippedSocket = this.sg.equippedSG[equipSlotIdx][socketIdx];
			if (equippedSocket !== null) // if it's null, that means that there is no gem equipped in this slot. Or perhaps this index (or even item) has no socket at this index at all. So skip it.
			{
				var gem = $dataArmors[equippedSocket.itemID];
				if ((typeof baseItemId === 'undefined') || (gem.baseItemId === baseItemId)) { allGems.push(gem); }
			}
		}
	}
	
	return allGems;
};

// baseItemIds must be an array containing the base-ID's of the gems (armors) to check
Game_Actor.prototype.getAllEquippedGemsByBaseIds = function(baseItemIds)
{
	var allGems = [];
	var equips = this.equips();
	for (var equipSlotIdx=0; equipSlotIdx<equips.length; equipSlotIdx++) // Loop through equip slots
	{
		for (var socketIdx=0; socketIdx<Silv.SG.MaxSockets; socketIdx++) // Loop through the equipSockets
		{
			var equippedSocket = this.sg.equippedSG[equipSlotIdx][socketIdx];
			if (equippedSocket !== null) // if it's null, that means that there is no gem equipped in this slot. Or perhaps this index (or even item) has no socket at this index at all. So skip it.
			{
				var gem = $dataArmors[equippedSocket.itemID];
				for (var id_idx=0; id_idx<baseItemIds.length; id_idx++)
				{
					var id = baseItemIds[id_idx];
					if ((gem.baseItemId === id)) { allGems.push(gem); }
				}
			}
		}
	}
	
	return allGems;
};

Game_Actor.prototype.getAllEquippedGems = function()
{
	return this.getAllEquippedGemsByBaseId();
};

// Returns null if no gems is equipped there
Game_Actor.prototype.getEquippedGem = function(equipSlotIdx, socketIdx)
{
	return this.sg.equippedSG[equipSlotIdx][socketIdx];
};

Game_Actor.prototype.hasEquippedGem = function(baseItemId)
{
	// Loop through all equipped gems and check for a matching id
	var equips = this.equips();
	for (var equipSlotIdx=0; equipSlotIdx<equips.length; equipSlotIdx++) // Loop through equip slots
	{
		for (var socketIdx=0; socketIdx<Silv.SG.MaxSockets; socketIdx++) // Loop through the equipSockets
		{
			var equippedSocket = this.sg.equippedSG[equipSlotIdx][socketIdx];
			if (equippedSocket !== null) // if it's null, that means that there is no gem equipped in this slot. Or perhaps this index (or even item) has no socket at this index at all. So skip it.
			{
				if (equippedSocket.baseItemId == baseItemId) { return true; }
			}
		}
		
	}
	return false;
};

// Returns true if any OTHER (so not the socket that was passed as a parameter itself) socket contains this gem.
Game_Actor.prototype.hasEquippedGemInLinkGroup = function(baseItemId, equipSlotIdx, socketIdx)
{
	// Retrieve the array that contains all sockets directly/indirectly linked to this socket excluding this socket itself.
	var linkedSocketIDs = this.getSocket(equipSlotIdx, socketIdx).linkedSockets;
	
	// Can't use a forEach-loop below because a return inside the forEach will only return the value to this function. Because the forEach basically uses an anonymous function. See: http://stackoverflow.com/questions/7209794/why-does-this-foreach-return-undefined-when-using-a-return-statement
	for(var i=0; i<linkedSocketIDs.length; i++)
	{
		var linkedSocketIdx = linkedSocketIDs[i];
		var gemInSocket = this.sg.equippedSG[equipSlotIdx][linkedSocketIdx];
		if ((gemInSocket !== null) && gemInSocket.baseItemId === baseItemId) { return true; }
	}
	
	// No matching gem was found in a linked socket. So return false.
	return false;
};

Game_Actor.prototype.socketIsEmpty = function(equipSlotIdx, socketIdx)
{
	return this.getSocket(equipSlotIdx, socketIdx) === null;
};

// Returns the socket of an equipped-item
// Returns null if no weapon/armor is equipped in the specific slot
// Returns null if the equipment has no sockets.
Game_Actor.prototype.getSocket = function(equipmentIdx, socketIdx)
{
	var slotItem = null;
	var equippedItem = this._equips[equipmentIdx];
	
	if (equippedItem)
	{
		if (equippedItem._dataClass == 'weapon')
		{
			slotItem = $dataWeapons[equippedItem._itemId];
		}
		else // armor
		{
			slotItem = $dataArmors[equippedItem._itemId];
		}
		
		if (!slotItem || (!slotItem.sg.hasSockets)) { return null; } // Can't return socket if the actor has no item equipped in this slot. Also can't return socket if item has no sockets
		return slotItem.sg.sockets[socketIdx];
	}
	else
	{
		return null;
	}
};

//------------------------------------------------------------------------------------------------------------------------------------
// Action functions
//------------------------------------------------------------------------------------------------------------------------------------
// Learn all equipped gems of a type a skill
// Note that gemBaseItemIds must be typeof Array
Game_Actor.prototype.gemByTypeLearnsSkill = function(gemBaseItemIds, skill_id, requiredRank, showInEquip)
{
	if (!this.isActor()) { console.log(this); throw new Error('Game_Actor.gemByTypeLearnsSkill() can only be called on actors. Current object was printed to console.'); } // Sanity Check
	
	var aSkillWasLearned = false;
	var gems = this.getAllEquippedGemsByBaseIds(gemBaseItemIds);
	for (gemIdx=0; gemIdx<gems.length; gemIdx++)
	{
		var gem = gems[gemIdx];
		if (!gem.sg.alreadyHasLearnedSkill(skill_id)) // This extra if-check is not required. But if the skill was already learned it now prevents overwriting the requiredRank & showInEquip
		{
			if (gem.sg.learnSkill(skill_id, requiredRank, showInEquip)) { aSkillWasLearned = true; }
		}
	}
	
	this.recalculateSkills();
	return aSkillWasLearned;
};

// Note that the stat bonuses are automaticall saved&loaded because they are inside the Game_Actor class.
Game_Actor.prototype.clearStatBonuses = function()
{
	this.statBonuses_flat = [0, 0, 0, 0, 0, 0, 0, 0];
	this.statBonuses_perc = [0, 0, 0, 0, 0, 0, 0, 0];
};

Game_Actor.prototype.calcStatBonuses = function()
{
	// Reset stat bonuses
	this.clearStatBonuses();
	
	// Loop through all equipped gems and apply their stat bonusses
	var equips = this.equips();
	for (var equipSlotIdx=0; equipSlotIdx<equips.length; equipSlotIdx++) // Loop through equip slots
	{
		for (var socketIdx=0; socketIdx<Silv.SG.MaxSockets; socketIdx++) // Loop through the equipSockets
		{
			var equippedSocket = this.sg.equippedSG[equipSlotIdx][socketIdx];
			if (equippedSocket !== null) // if it's null, that means that there is no gem equipped in this slot. Or perhaps this index (or even item) has no socket at this index at all. So skip it.
			{
				var gem = $dataArmors[equippedSocket.itemID];
				// Add flat values
				this.statBonuses_flat = this.statBonuses_flat.sumArray(gem.sg.multiplyTraits(gem.params));
				
				// Add %-values
				for (var traitIdx=0; traitIdx<gem.traits.length; traitIdx++)
				{
					var trait = gem.traits[traitIdx];
					if (trait.code == 21) // 21 means: parameter
					{
						this.statBonuses_perc[trait.dataId] = trait.value;
					}
				}
			}
		}
	}
};

// Note that because this.sg.equippedSG uses the equips() indices,  changing the actors equipment-slots can bug. Changing-class however has been handled already (unequips all gems automatically)
// To prevent the above: first call unequipAllSG() (before changing the actors equi[-types), then call initSG() again after changing the actor like that.
Game_Actor.prototype.initSG = function()
{
	this.sg = {};
	this.sg.skillsFromGems = [];
	this.sg.equippedSG = {}; // This variable contains the data with the sockets-contents. Or null if the socket is empty.
	var equips = this.equips();
	for (var equipSlotIdx=0; equipSlotIdx<equips.length; equipSlotIdx++)
	{
		this.sg.equippedSG[equipSlotIdx] = { 0:null, 1:null, 2:null, 3:null, 4:null, 5:null, 6:null, 7:null };
	}
};

// Deletes the gem-skills from the database and from the stored-location. Does NOT unlearn the skills so make sure to unlearn them before or after calling this method. Otherwise the actor will have references to skills that no longer exist.
Game_Actor.prototype.deleteAllGemSkills = function()
{
	for (var i=0; i<this.sg.skillsFromGems.length; i++)
	{
		var skill_id = this.sg.skillsFromGems[i];
		Silv.UniqSkill.deleteBySkillID(skill_id);
	}
	this.sg.skillsFromGems.length = 0; // Clear array
};

// itemID = the id from $dataItems, not from $dataArmors.
// sg_color_str: examples of valid params: 'white', 'yellow', 'blue', etc
Game_Actor.prototype.equipSG = function(equipSlotIdx, socketIdx, item, removeGemFromParty, deleteOldSkills, processCommand)
{
	// Default parameter values
	if (typeof removeGemFromParty === 'undefined') { removeGemFromParty = true; }
	if (typeof deleteOldSkills    === 'undefined') { deleteOldSkills = true; }
	if (typeof processCommand     === 'undefined') { processCommand = true; }
	
	// Sanity checks
	if (equipSlotIdx === -1) { throw new Error("equipSlotIdx can't be -1"); }
	if (Silv.SG.SocketColorImageTable[item.sg.gemColor] === undefined) { throw new Error('Invalid color-string. gemColor: ' + item.sg.gemColor + '. Item.id: ' + item.id); }
	
	// var socket = this.sg.equippedSG[equipSlotIdx][socketIdx]; // Can't use this line because of how JavaScript treats pass by reference...
	
	// If there already was a gem in the socket, be sure to put it back in the inventory before putting the new one in it
	if (this.sg.equippedSG[equipSlotIdx][socketIdx] !== null)
	{
		var oldGemItem = $dataArmors[this.sg.equippedSG[equipSlotIdx][socketIdx].itemID];
		$gameParty.gainItemUnnoticed(oldGemItem, 1, false);
		
		// Command
		if (processCommand && oldGemItem.sg.isCommand) { this.removeCommand_SG(oldGemItem.id); }
	}
		
	// Put the new gem into the socket
	this.sg.equippedSG[equipSlotIdx][socketIdx] = new EquippedSocket(item.id, item.baseItemId, socketIdx, item.sg.gemColor);
	// Remove the newly socketed gem from the inventory
	if (removeGemFromParty) { $gameParty.loseItemUnnoticed(item, 1, false); }
	// Set this actor as it's new owner
	item.sg.owner = this;
	
	// Command
	if (processCommand && item.sg.isCommand) { this.addCommand_SG(item.id, item.sg.activeSkill_IDs); }
	
	this.onGemsChanged(deleteOldSkills);
};

Game_Actor.prototype.onGemsChanged = function(deleteOldSkills) // or possibly changed
{
	this.recalculateSkills(deleteOldSkills);
	this.calcStatBonuses();
};

Game_Actor.prototype.addCommand_SG = function(armorID, skill_IDs)
{
	skill_IDs.forEach(function(skillID)
	{
		Silv.BattleCmd.addSkillCmd(this._actorId, skillID, $dataSkills[skillID].name, ['is_sg_cmd', armorID] );
	}, this);
};

Game_Actor.prototype.removeCommand_SG = function(armorID)
{
	var oldLength = Silv.BattleCmd.CustomCmdList.length;
	Silv.BattleCmd.CustomCmdList = Silv.BattleCmd.CustomCmdList.filter(function(obj)
	{
		return ((obj.tag[0] === 'is_sg_cmd') && (obj.tag[1] !== armorID));
	});
	
	// Return true if a removal was performed.
	return (oldLength !== Silv.BattleCmd.CustomCmdList.length);
};

// Returns true if a gem was unequipped
Game_Actor.prototype.unEquipSG = function(equipSlotIdx, socketIdx, addGemToParty, deleteOldSkills, processCommand)
{
	// Default parameter values
	if (typeof addGemToParty      === 'undefined') { addGemToParty = true; }
	if (typeof deleteOldSkills    === 'undefined') { deleteOldSkills = true; }
	if (typeof processCommand     === 'undefined') { processCommand = true; }
	
	var unequippedSG = this.sg.equippedSG[equipSlotIdx][socketIdx];
	if (unequippedSG !== null) // can't unequip that which is already unequipped so check if it's not null.
	{
		// Unequip it
		this.sg.equippedSG[equipSlotIdx][socketIdx] = null;
		
		// Reset ownership
		this.sg.owner = null;
		
		// Reset XP Modifiers
		$dataArmors[unequippedSG.itemID].sg.resetXPModifiers();
		
		// Add the SG back to the inventory
		if (addGemToParty) { $gameParty.gainItemUnnoticed($dataArmors[unequippedSG.itemID], 1, false); }
		
		// Recalculate skills and return that the unequipping was successful
		this.onGemsChanged(deleteOldSkills);
		
		// Remove any possible commands
		if (processCommand && $dataArmors[unequippedSG.itemID].sg.isCommand) { this.removeCommand_SG(unequippedSG.itemID); }
		
		return true;
	}
	else
	{
		// There was nothing to unequip
		return false;
	}
};

// Removes all gems from the specified equipment-slot, if an item is equipped in that slot that is.
Game_Actor.prototype.unequipGemsFromEquippedItem = function(equipSlotIdx, addGemToParty)
{
	addGemToParty = addGemToParty || true;
	for (var socketIdx=0; socketIdx<Silv.SG.MaxSockets; socketIdx++) { this.unEquipSG(equipSlotIdx, socketIdx, addGemToParty); }
};

// Removes all gems from all items
Game_Actor.prototype.unequipAllSG = function(addGemToParty)
{
	addGemToParty = addGemToParty || true;
	
	var equips = this.equips();
	for (var equipSlotIdx=0; equipSlotIdx<equips.length; equipSlotIdx++)
	{
		this.unequipGemsFromEquippedItem(equipSlotIdx, addGemToParty);
	}
	
	this.onGemsChanged();
};

/* #RecalculateSkills
This is basically what happens in this method:
1. Removes all player skills.
2. Restores the default-player skills (from actor&class)
3. Loops through all equipped gems.
	3.1. If the gem is a skill- or special-gem:
		3.1.1. check if it has linked support- or special-gems.
			3.1.1.1. If 3.1.1 is true, process the skill with the modifications from the linked support- or special-gems.
	3.2. if 3.1 is true, add the skill to the player.
*/
Game_Actor.prototype.recalculateSkills = function(deleteOldSkills)
{
	deleteOldSkills = deleteOldSkills || true;
	
	// Clear all cloned skill-data. Otherwise equipping & unequipping a skill-gem rapidly would fill up the database with unused clones. Not to mention that they serve no purpose anymore anyway so better delete them.
	if (deleteOldSkills) { this.deleteAllGemSkills(); }
	
	// First apply the default skills
	this.initSkills();
	
	// loop through all sockets in all equip-slots, if it's a skill-gem OR a special gem, then loop all of it's linked sockets and check for other special gems and linked sockets.
	var equips = this.equips();
	for (var equipSlotIdx=0; equipSlotIdx<equips.length; equipSlotIdx++) // Loop through equip slots
	{
		for (var socketIdx=0; socketIdx<Silv.SG.MaxSockets; socketIdx++) // Loop through the equipSockets
		{
			var equippedSocket = this.sg.equippedSG[equipSlotIdx][socketIdx];
			if (equippedSocket !== null) // if it's null, that means that there is no gem equipped in this slot. Or perhaps this index (or even item) has no socket at this index at all. So skip it.
			{
				// Loop through all linked sockets
				var gem = $dataArmors[equippedSocket.itemID];
				// Reset the XP modifiers for this gem
				gem.sg.resetXPModifiers();
				
				// Check if it's a skill- or special-gem and make sure that it is not a command-gem
				if (!gem.sg.isCommand && ((gem.sg.gemType === Silv.SG.ArmorSubTypeID_Skill) || (gem.sg.gemType === Silv.SG.ArmorSubTypeID_Special)))
				{
					// Loop through all active skills
					for (var activeSkillIdx=0; activeSkillIdx<gem.sg.activeSkill_IDs.length; activeSkillIdx++)
					{
						// Retrieve the original skill and create a new skill
						var original_skill_id = gem.sg.activeSkill_IDs[activeSkillIdx];
						
						// Sanity check
						if (!original_skill_id) {console.log(gem.sg.activeSkill_IDs); throw new Error('original_skill_id is (0-value is also not allowed): ' + original_skill_id + '. The gem was printed to the console.'); }
						
						var newSkill = Silv.UniqSkill.getUnique(original_skill_id);
						newSkill.suffixes = [];
					
						// Loop through all these sockets
						var equippedItem = equips[equipSlotIdx];
						var equippedItemSG_Sockets = equippedItem.sg.sockets;
						
						// Loop through all the linked sockets of this socket.
						for (var linkedSocketArrayIdx=0; linkedSocketArrayIdx<equippedItemSG_Sockets[socketIdx].linkedSockets.length; linkedSocketArrayIdx++)
						{
							var linkedSocketID = equippedItemSG_Sockets[socketIdx].linkedSockets[linkedSocketArrayIdx]; // equippedItemSG_Sockets[socketIdx].linkedSockets contains the list of all the linked sockets for socket: equippedItemSG_Sockets[i]
							if (linkedSocketID !== socketIdx) // if these 2 would be equal, then the linked-socket would be the same as the skill- or special-gem we are trying to find support gems for... So skip it if they are equal
							{
								var linkedSocket = this.sg.equippedSG[equipSlotIdx][linkedSocketID];
								if (linkedSocket !== null) // skip linked sockets with no gem in them.
								{
									var linkedGem = $dataArmors[linkedSocket.itemID];
									// Only process linked support- & special gems for this skill- or special gem.
									if ((linkedGem.sg.gemType === Silv.SG.ArmorSubTypeID_Support) || (linkedGem.sg.gemType === Silv.SG.ArmorSubTypeID_Special))
									{
										//console.log('linking ' + linkedGem.sg.support_type + ' to ' + newSkill.id + '(' + newSkill.name + ')');
										// #Support #linking: All the checks passed. We found a support- or special-gem that is linked to a skill- or special-gem. So process it's support-function
										var supportFunction = Silv.SG.Support[linkedGem.sg.support_type];
										if (supportFunction !== undefined)
										{
											supportFunction(this, newSkill, gem);
										}
										else
										{
											throw new Error('Missing support-function in Silv.SG.Support. Expected function was: Silv.SG.Support.' + linkedGem.sg.support_type + '().');
										}
									}
								}
							}
						}
						
						// Make the actor learn the new skill
						this.learnSkill(newSkill.id);
						// Store the new skill id so we can easily delete all of the actor's skills that were gained through gems.
						this.sg.skillsFromGems.push(newSkill.id);
					}
				}
			}
		}
	}

	// Apply suffixes to skills
	this.applySkillSuffixes();
};

Game_Actor.prototype.applySkillSuffixes = function()
{
	for (var skillIdx=0; skillIdx<this.sg.skillsFromGems.length; skillIdx++)
	{
		var skill = $dataSkills[this.sg.skillsFromGems[skillIdx]];
		var suffixStr = '';
		for (var suffixIdx=0; suffixIdx<skill.suffixes.length; suffixIdx++)
		{
			var suffix = skill.suffixes[suffixIdx];
			if (eval(suffix.eval_condition) && (suffixStr.indexOf(suffix.name) == -1))
			{
				suffixStr += ' ' + suffix.name;
			}
		}
		skill.name += suffixStr;
	}
};

//------------------------------------------------------------------------------------------------------------------------------------
// Aliases
//------------------------------------------------------------------------------------------------------------------------------------

Silv.AddAlias('sg_Game_Actor_changeClass', Game_Actor.prototype.changeClass);
Game_Actor.prototype.changeClass = function(classId, keepExp)
{
	this.unequipAllSG();
	Silv.Alias.sg_Game_Actor_changeClass.apply(this, arguments);
	this.initSG();
};

Silv.AddAlias('sg_Game_Actor_setup', Game_Actor.prototype.setup);
Game_Actor.prototype.setup = function(actorId)
{
	this.clearStatBonuses();
    Silv.Alias.sg_Game_Actor_setup.apply(this, arguments);
	this.initSG();
	this.calcStatBonuses();
};

// Hook into the equip-changing in order to automatically unequip all gems when changing gear or when unequipping gear
Silv.AddAlias('sg_Game_Actor_changeEquip', Game_Actor.prototype.changeEquip);
Game_Actor.prototype.changeEquip = function(slotId, item)
{
	this.unequipGemsFromEquippedItem(slotId);
	Silv.Alias.sg_Game_Actor_changeEquip.apply(this, arguments);
};

//------------------------------------------------------------------------------------------------------------------------------------
// #Stats #Traits: For changing max_hp, max_mp, etc. 
//------------------------------------------------------------------------------------------------------------------------------------
// For adding constant-values
Silv.AddAlias('sg_Game_Actor_paramBase', Game_Actor.prototype.paramBase);
Game_Actor.prototype.paramBase = function(paramId)
{
	var retVal = Silv.Alias.sg_Game_Actor_paramBase.apply(this, arguments);
	retVal += this.statBonuses_flat[paramId];
    return retVal;
};
// For adding %-values
Silv.AddAlias('sg_Game_Actor_paramRate', Game_Actor.prototype.paramRate);
Game_Actor.prototype.paramRate = function(paramId)
{
    var retVal = Silv.Alias.sg_Game_Actor_paramRate.apply(this, arguments);
	retVal += this.statBonuses_perc[paramId];
    return retVal;
};

//------------------------------------------------------------------------------------------------------------------------------------
// Leveling Gems
//------------------------------------------------------------------------------------------------------------------------------------
Silv.AddAlias('sg_Game_Actor_gainExp', Game_Actor.prototype.gainExp);
Game_Actor.prototype.gainExp = function(exp)
{
	Silv.Alias.sg_Game_Actor_gainExp.apply(this, arguments);
	this.addXPToEquippedGems(exp);
};

Game_Actor.prototype.addXPToEquippedGems = function(base_xp_amount)
{
	var equips = this.equips();
	for (var equipSlotIdx=0; equipSlotIdx<equips.length; equipSlotIdx++) // Loop through equip slots
	{
		for (var socketIdx=0; socketIdx<Silv.SG.MaxSockets; socketIdx++) // Loop through the equipSockets
		{
			var equippedItem = this.sg.equippedSG[equipSlotIdx];
			if (typeof equippedItem !== 'undefined') // This extra check is required because when the actor changes class, this method is called and some of the equipped items may be undefined.
			{
				var equippedSocket = equippedItem[socketIdx];
				if (equippedSocket !== null) // if it's null, that means that there is no gem equipped in this slot. Or perhaps this index (or even item) has no socket at this index at all. So skip it.
				{
					var gem = $dataArmors[equippedSocket.itemID].sg;
					gem.gainXP(base_xp_amount);
				}
			}
		}
	}
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Game Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Silv.AddAlias('sg_Game_Action_executeDamage', Game_Action.prototype.executeDamage);
Game_Action.prototype.executeDamage = function(target, value)
{
	Silv.Alias.sg_Game_Action_executeDamage.apply(this, arguments);
	this.processEnemySkillGems(target, value);
};

Game_Action.prototype.processEnemySkillGems = function(target, value)
{
	if (target.isActor())
	{
		var attacker = this.subject();
		var item = this.item();
		
		// Learn this skill to all equipped gems that can learn this skill
		if (target.gemByTypeLearnsSkill(Silv.SG.EnemySkillGemBaseIDs, item.id))
		{
			// Play SFX if applicable
			if (Silv.SG.LearnedEnemySkillSFXObj !== null) { AudioManager.playStaticSe(Silv.SG.LearnedEnemySkillSFXObj); }
			
			// Add a display message showing the player that a skill was learned
			$gameMessage.add(Silv.SG.EnemySkillLearningText.replace('#actor_name#', target.name()).replace('#skill_name#', item.name).replace('#attacker_name#', attacker.name()));
		}
	};
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Item Manager (from Yanfly ItemCore)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Silv.AddAlias('sg_ItemManager_setNewIndependentItem', ItemManager.setNewIndependentItem);
ItemManager.setNewIndependentItem = function(baseItem, newItem)
{
	Silv.Alias.sg_ItemManager_setNewIndependentItem.apply(this, arguments);
	this.setNewGem(baseItem, newItem);
};

// Note: This code can NOT be added to the SG_Item.initialize(). Because any code added there is the same for each gem of the same baseType. But we require gems to have unique xp and such so thus this code was added here.
ItemManager.setNewGem = function(baseItem, newItem)
{
	if (newItem.sg === undefined) { throw new Error('item has no sg for baseItem with id: ' + baseItem.id); }
	
	newItem.sg.armorBaseID = newItem.baseItemId;
	newItem.sg.armorID = newItem.id;
	// newItem.sg.xpTotal = 0;
	// newItem.xpToNextRankPerc = 0;
	
	// Calculate xp required for each rank and put it in an array
	var rankXPs;
	if ('sg_rank_xp' in baseItem.meta)
	{
		var xpPerRank = baseItem.meta.sg_rank_xp.split(' ');
		for (var i=0; i<xpPerRank.length; i++) { xpPerRank[i] = parseInt(xpPerRank[i]); }
		rankXPs = xpPerRank;
	}
	else
	{
		rankXPs = Silv.SG.DefaultGemRankXP;
	}
	
	if ('sg_max_rank' in baseItem.meta)
	{
		var maxrank = parseInt(baseItem.meta.sg_max_rank);
		if (maxrank < 1 ) { throw new Error('Notetag "sg_max_rank" is not allowed to be smaller than 1. Received value: ' + maxrank +' for gem with id: ' + newItem.baseItemId + '. Please check your Database and fix the notetag-value for this armor/gem.'); } // Sanity Check
		newItem.sg.xpData = new XP_Helper(0, 0, maxrank - 1, true, true, rankXPs); // -1 because ranks start at 0.
	}
	else
	{
		newItem.sg.xpData = new XP_Helper(0, 0, Silv.SG.DefaultGemRankCnt - 1, true, true, rankXPs); // -1 because ranks start at 0.
	}
	
	// newItem.sg.setXPToNextRank();
	newItem.sg.fillSkills();
	newItem.sg.setActiveSkill_ids();
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Data Manager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add the sg-class to each item, armor & weapon
DataManager.processSG_sockets_db = function(database_str)
{
	var db = window[database_str];
	for (var i=1; i < db.length; i++)
	{
		var item = db[i];
		if (item) { item.sg = new Item_SG(item.meta, item.etypeId); }
	}
};
	
// DataManager.processActors = function()
// {
	// for (var actorIdx=1; actorIdx<$dataActors.length; actorIdx++)
	// {
		// var dActor = $dataActors[actorIdx];
		// if(dActor !== null)
		// {
			// dActor.sg = {};
		// }
	// }
// };

Silv.AddAlias('sg_DataManager_onLoad', DataManager.onLoad);
DataManager.onLoad = function(object)
{
	Silv.Alias.sg_DataManager_onLoad.apply(this, arguments);
	if (object === $dataItems)
	{
		DataManager.processSG_sockets_db('$dataItems');
	}
	else if (object === $dataWeapons)
	{
		DataManager.processSG_sockets_db('$dataWeapons');
	}
	else if (object === $dataArmors)
	{
		DataManager.processSG_sockets_db('$dataArmors');
		
		// Store which gem-types are marked as an enemy-skill-gem
		for (var armorIdx=0; armorIdx<$dataArmors.length; armorIdx++)
		{
			var armor = $dataArmors[armorIdx];
			if ((armor !== null) && (armor.sg.autoLearnSkills))
			{
				Silv.SG.EnemySkillGemBaseIDs.push(armor.id);
			}
		}
	}
};

DataManager.isGem = function(item)
{
	return item && item.sg.isGem;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Adds the Gem-category to the default Item-menu.
// Window ItemCategory & Window ItemList
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (Silv.SG.ExtendItemMenu)
{
	Silv.AddAlias('sg_Window_ItemCategory_makeCommandList', Window_ItemCategory.prototype.makeCommandList);
	Window_ItemCategory.prototype.makeCommandList = function()
	{
		Silv.Alias.sg_Window_ItemCategory_makeCommandList.apply(this, arguments);
		
		var gemsItem = { name:Silv.SG.Name, symbol:'silvGem', enabled:true, ext:null };
		this._list.splice(3, 0, gemsItem);
	};

	Silv.AddAlias('sg_Window_ItemList_includes', Window_ItemList.prototype.includes);
	Window_ItemList.prototype.includes = function(item)
	{
		if (this._category === 'silvGem') { return DataManager.isGem(item); }
		
		return Silv.Alias.sg_Window_ItemList_includes.apply(this, arguments);
	};
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #Plugin Command
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function()
{
	Silv.AddAlias('sg_Game_Interpreter_pluginCommand', Game_Interpreter.prototype.pluginCommand);
	Game_Interpreter.prototype.pluginCommand = function(command, args)
	{
		Silv.Alias.sg_Game_Interpreter_pluginCommand.apply(this, arguments);
		if (command.toLowerCase() === 'sg') { skillGemPluginCommand(command, args); }
	};

	function skillGemPluginCommand(cmd, args)
	{
		switch(args[0].toLowerCase())
		{
			case 'addxp':
				switch(args[1].toLowerCase())
				{
					case 'actor': // sg AddXP Actor 1 1000
						$gameActors._data[parseInt(args[2])].gainExp(parseInt(args[3]));
						break;
					case 'party': // sg AddXP Party 1000
						$gameParty._actors.forEach(function(actorID) { $gameActors._data[actorID].gainExp(parseInt(args[2])); });
						break;
					case 'allactors': // sg AddXP AllActors 1000
						$gameActors._data.removeEmpty().forEach(function(a) { a.gainExp(parseInt(args[2])); });
						break;
					default:
					console.log(args);
					throw new Error('Skill Gem Core: unknown Plugin Command for command "' + args[0] + '": ' + args[1] + '. Full list of received arguments was printed to the console.');
				}
				break;
			case 'unequip':
				switch(args[1].toLowerCase())
				{
					case 'actor': // Unequip all gems for the specified actor
						var actor = $gameActors.actor(parseInt(args[2]));
						if (actor) { actor.unequipAllSG(); }
						break;
					case 'party': // Unequip all gems for the entire party
						for (var i=0; i<$gameParty._actors.length; i++)
						{
							var actor = $gameActors.actor($gameParty._actors[i]);
							if (actor) { actor.unequipAllSG(); }
						}
						break;
					case 'all':
						$gameActors._data.forEach(function(actor) { if (actor) { actor.unequipAllSG(); } })
						break;
					default:
						console.log(args);
						throw new Error('Skill Gem Core: unequip has an unknown 2nd command: ' + args[2] + '. Full list of received arguments was printed to the console.');
				}
				break;
			case 'showequipscene':
				if (typeof args[1] === 'undefined') { throw new Error('Command "SG ShowEquipScene" did not receive an argument for the actorID.'); } // Sanity Check
				Silv.SG.ShowMateriaEquipScene(parseInt(args[1]));
				break;
			default:
				console.log(args);
				throw new Error('Skill Gem Core: unknown Plugin Command: ' + args[0] + '. Full list of received arguments was printed to the console.');
		}
	}
})();

Silv.SG.ShowMateriaEquipScene = function(actorID)
{
	Silv.SG_Scene.ActiveActor = $gameActors._data[actorID];
	if (!Silv.SG_Scene.ActiveActor) { throw new Error('No valid actor found (' + Silv.SG_Scene.ActiveActor + ') for actor with id: ' + actorID); }
	SceneManager.push(Scene_SG);
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the end of this awesome script!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////