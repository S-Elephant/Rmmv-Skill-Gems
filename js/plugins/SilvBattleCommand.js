//=============================================================================
// SilvBattleCommand.js
// Version: 1.00
//=============================================================================
/*:
 * @plugindesc v1.00 Allows users to add custom commands (or skills) to the command-window. <SilvBattleCommand>
 * @author Silver
 *
 * @param -- General --
 *
 * @param Command 1
 * @desc 'name'<s>symbol<s>function<s>enabled<s>ext
 *
 * @param Command 2
 * @desc 'name'<s>symbol<s>function<s>enabled<s>ext
 *
 * @param Command 3
 * @desc 'name'<s>symbol<s>function<s>enabled<s>ext
 *
 * @param Command 4
 * @desc 'name'<s>symbol<s>function<s>enabled<s>ext
 *
 * @param Command 5
 * @desc 'name'<s>symbol<s>function<s>enabled<s>ext
 *
 * @param Command 6
 * @desc 'name'<s>symbol<s>function<s>enabled<s>ext
 *
 * @param Command 7
 * @desc 'name'<s>symbol<s>function<s>enabled<s>ext
 *
 * @param Command 8
 * @desc 'name'<s>symbol<s>function<s>enabled<s>ext
 *
 * @param Command 9
 * @desc 'name'<s>symbol<s>function<s>enabled<s>ext
 *
 * @param Command 10
 * @desc 'name'<s>symbol<s>function<s>enabled<s>ext
 *
 * @help
 *--------------------------------------
 * Plugin Commands (not case sensitive):
 *--------------------------------------
 * BattleCmd AddSkill actor_id skill_id command_name tag
 * Note: "command_name" & "tag" are optional. Underscores are replaced with spaces.
 * Example: BattleCmd AddSkill 1 9 Awesome_Fire myCustomTag
 *
 * BattleCmd RemoveSkillByName skill_name // note: parameter "skill_name" is case sensitive.
 * Example: BattleCmd Awesome_Fire
 *
 * BattleCmd RemoveSkillByTag tag // note: parameter "tag" is case sensitive.
 * Example: BattleCmd myCustomTag
 *
 *--------------------------------------
 * Parameter Explanation:
 *--------------------------------------
 * Example for adding skills 1:
 * <skill> -1, 9 // Adds the fire-magic as a skill-command for all actors.
 * <skill> 1, 9 // Adds the fire-magic as a skill-command to actor with an actor-id of 1.
 *
 * Example for adding custom commands:
 * -1<s>Silver's Special<s>'SilversUniqueString'<s>this.commandAttack.bind(this)<s>true<s>null
 * Note that the last 2 parameters are optional and default to true and null respectively.
 * Note that the enabled-parameter is an eval.
 *
 *--------------------------------------
 * Script Call Explanation:
 *--------------------------------------
 * Example usage:
 * Silv.BattleCmd.addCustomCmd(-1, 'Silvers Special', 'SilversUniqueString', 'this.commandAttack.bind(this)'); // -1 adds it to all actors
 *
 * Example usage 2:
 * Silv.BattleCmd.addSkillCmd(1, 9); // Adds the fire skill to actor with actor-id 1. Use -1 to add it to all actors
 *
 *--------------------------------------
 * Features:
 *--------------------------------------
 * - Commands can be shared by the entire party or only for a specific actor.
 * - Has separate commands for adding skills.
 * - Maintains a public-list of all added commands with an optional tag-parameter. This makes removing all/specific commands very easy.
 * - Has no plugin dependencies.
 *--------------------------------------
 * Version History:
 *--------------------------------------
 * v1.00 (30 January 2016)
 * - First Public Release.
 *
 */
// Imported
var Imported = Imported || {};
Imported.SILV_BattleCommand = 1.00;

// #Parameters
var Silv = Silv || {};
Silv.BattleCmd = Silv.BattleCmd || {};
Silv.BattleCmd.Parameters = $plugins.filter(function(p) { return p.description.contains('<SilvBattleCommand>'); })[0].parameters;

// Non-Parameters
Silv.BattleCmd.CustomCmdList = []; // Contains all the custom command container-objects.

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
// Code
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Silv.BattleCmd.addCustomCmd = function(actorID, name, symbol, functionEval, enabled, ext)
{
    if (enabled === undefined) { enabled = true; }
    if (ext === undefined) { ext = null; }
	
	var newCmdContainer = { actorID:actorID, name:name, symbol:symbol, functionEval:functionEval, enabled:enabled, ext:ext };
	Silv.BattleCmd.CustomCmdList.push(newCmdContainer);
	
	return newCmdContainer;
};

// The optional tag-parameter is for custom use. Like maybe another plugin wants to know what commands it added and it can use the tag-parameter for this.
Silv.BattleCmd.addSkillCmd = function(actorID, skillID, name, tag)
{
	if ((typeof name === 'undefined') || (name === null)) { name = $dataSkills[skillID].name; }
	
	var newCmdContainer =
	{
		actorID:actorID,
		name:name,
		symbol:'skill' + $dataSkills[skillID].name,
		functionEval:'this.useSkillCmd.bind(this)',
		enabled:'this.actorMeetsSkillConditions(' + skillID + ')',
		ext:skillID,
		tag:tag
	};
	Silv.BattleCmd.CustomCmdList.push(newCmdContainer);
	
	return newCmdContainer;
};

// removes all battle-commands that contain the specified tag.
Silv.BattleCmd.removeCmdsByTag = function(tag)
{
	Silv.BattleCmd.CustomCmdList = Silv.BattleCmd.CustomCmdList.filter(function(obj) { return obj.tag !== tag; });
};

// Note: case sensitive
Silv.BattleCmd.removeCmdsByName = function(name)
{
	Silv.BattleCmd.CustomCmdList = Silv.BattleCmd.CustomCmdList.filter(function(obj) { return obj.name !== name; });
};

// removes all battle-commands that do NOT contain the specified tag. Sorry for the long name :P.
Silv.BattleCmd.removeCmdsThatDontHaveThisTag = function(tag)
{
	Silv.BattleCmd.CustomCmdList = Silv.BattleCmd.CustomCmdList.filter(function(obj) { return obj.tag === tag; });
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene Battle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Silv.AddAlias('battleCmd_Scene_Battle_createActorCommandWindow', Scene_Battle.prototype.createActorCommandWindow);
Scene_Battle.prototype.createActorCommandWindow = function()
{
	Silv.Alias.battleCmd_Scene_Battle_createActorCommandWindow.apply(this, arguments);
	
	Silv.BattleCmd.CustomCmdList.forEach(function(cmd)
	{
		this._actorCommandWindow.setHandler(cmd.symbol, eval(cmd.functionEval));
	}, this);
};

Scene_Battle.prototype.useSkillCmd = function()
{
	var skill = $dataSkills[this._actorCommandWindow.currentExt()];
	var action = BattleManager.inputtingAction();
	action.setSkill(skill.id);
	BattleManager.actor().setLastBattleSkill(skill);
	this.onSelectAction();
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Window Actor Command
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Silv.AddAlias('battleCmd_Window_ActorCommand_makeCommandList', Window_ActorCommand.prototype.makeCommandList);
Window_ActorCommand.prototype.makeCommandList = function()
{
	Silv.Alias.battleCmd_Window_ActorCommand_makeCommandList.apply(this, arguments);
    if (this._actor)
	{
		this.addCustomCommands();
	}
};

Window_ActorCommand.prototype.actorMeetsSkillConditions = function(skillID)
{
	var skill = $dataSkills[skillID];
    return skill && this._actor.meetsUsableItemConditions(skill) && this._actor.canPaySkillCost(skill);
};

Window_ActorCommand.prototype.addCustomCommands = function()
{
	Silv.BattleCmd.CustomCmdList.forEach(function(cmd)
	{
		if ((cmd.actorID === -1) || (cmd.actorID === this._actor._actorId))
		{
			this.addCommand(cmd.name, cmd.symbol, eval(cmd.enabled), cmd.ext);
		}
	}, this);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Data Manager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Silv.AddAlias('battleCmd_DataManager_onLoad', DataManager.onLoad);
DataManager.onLoad = function(object)
{
	Silv.Alias.battleCmd_DataManager_onLoad.apply(this, arguments);
	
	if (object === $dataSkills)
	{
		for (var cmdIdx=1; cmdIdx<=10; cmdIdx++)
		{
			var param = Silv.BattleCmd.Parameters['Command ' + cmdIdx];
			if (param)
			{
				if (param.substr(0, 7) === '<skill>')
				{
					// Add a skill
					Silv.BattleCmd.addSkillCmd(parseInt(param.split(' ')[1]), parseInt(param.split(' ')[2]));
				}
				else // Add a custom command instead
				{
					var paramSplit = param.split('<s>'); // actor_id, name, symbol, function, enabled, ext
					
					var enabled = false;
					if (paramSplit.length >= 5)
					{
						if (paramSplit[4].toLowerCase() === 'true')
						{
							enabled = true;
						}
						else
						{
							enabled = paramSplit[4];
						}
					}

					var ext = (paramSplit.length >= 6) ? paramSplit[5] : null;
					
					Silv.BattleCmd.addCustomCmd(parseInt(paramSplit[0]), paramSplit[1], paramSplit[2], paramSplit[3], enabled, ext);
				}
			}
		}
	}
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #Plugin Command
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Silv.AddAlias('battleCmd_Game_Interpreter_pluginCommand', Game_Interpreter.prototype.pluginCommand);
Game_Interpreter.prototype.pluginCommand = function(command, args)
{
	Silv.Alias.battleCmd_Game_Interpreter_pluginCommand.apply(this, arguments);
	if (command.toLowerCase() == 'battlecmd') { Silv.BattleCmd.PluginCommand(command, args); }
};

Silv.BattleCmd.PluginCommand = function(cmd, args)
{
	switch(args[0].toLowerCase())
	{
		case 'addskill':
			var name = args[3];
			if (typeof name !== 'undefined') { name.replace('_', ' '); }
			Silv.BattleCmd.addSkillCmd(parseInt(args[1]), parseInt(args[2]), name, args[4]);
			break;
		case 'removeskillbytag':
			Silv.BattleCmd.removeCmdsByTag(args[1]);
			break;
		case 'removeskillbyname':
			Silv.BattleCmd.removeCmdsByName(args[1]);
			break;
		default:
			throw new Error('BattleCommand, unknown Plugin Command: ' + args[0]);
	}
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the end of this awesome script!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////