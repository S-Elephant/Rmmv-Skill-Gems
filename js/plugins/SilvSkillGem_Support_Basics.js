//=============================================================================
// SilvSkillGem_Support_Basics.js
// Version: 1.01
//=============================================================================
/*:
 * @plugindesc v1.01 + Silv SG Support Basics. Support-addon for "Silvers Skill Gem". <SilvAddon_Basics>
 * @author Silver
 *
 * @param All Suffix Name
 * @desc Suffix name for the All Support Gem.
 * @default [All]
 *
 * @param One Suffix Name
 * @desc Suffix name for the All Support Gem.
 * @default [One]
 *
 * @param Guard Suffix Name
 * @desc Suffix name for the All Support Gem.
 * @default [G]
 *
 * @param Guard State ID
 * @desc The ID of the Guard-State in the Database. [F9] > States
 * @default 2
 *
 * @help
 *
 * Adds the following support-gem notetags:
 * <sg_support_type:none>
 * <sg_support_type:all>
 * <sg_support_type:one>
 * <sg_support_type:guard>
 * <sg_support_type:training>
 * 
 * Suffixes are optional. In fact, everything except for the function itself is optional. The function can be totally empty but the support-gem then wouldn't do anything.
 *
 *
 *--------------------------------------
 * Version History:
 *--------------------------------------
 *
 * v1.01 (30 January 2016)
 * - First Public Release.
 * - Added the guard support gem.
 *
 * v1.00 (18 December 2015)
 * - First Internal Release.
 *
 */
 
// Imported
var Imported = Imported || {};
Imported.Silv_SG_Addon_Basics = 1.01;
 
// Parameters
var Silv = Silv || {};
Silv.SG_Addon_Basics = Silv.SG_Addon_Basics || {};
Silv.Parameters = $plugins.filter(function(p) { return p.description.contains('<SilvAddon_Basics>'); })[0].parameters;
Silv.SG_Addon_Basics.All_SuffixName   = Silv.Parameters['All Suffix Name'];
Silv.SG_Addon_Basics.One_SuffixName   = Silv.Parameters['One Suffix Name'];
Silv.SG_Addon_Basics.Guard_SuffixName = Silv.Parameters['Guard Suffix Name'];
Silv.SG_Addon_Basics.Guard_StateID    = parseInt(Silv.Parameters['Guard State ID']);

// Dependencies
if (!('Silv_SG_Core' in Imported) || (Imported.Silv_SG_Core < 1.00)) { throw new Error('ERROR: "Silvers SkillGems Suppport Basics Addon" requires "Silvers Skill Gems Core" v1.00 or higher. It must be placed above this plugin.'); }

// What comes after "Silv.SG.Support." must match the notetag in the support-materia (in the RM database)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Support Materia
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// <sg_support_type:none> // Use this notetag for special-gems that have no support-ability.
Silv.SG.Support.none = function() {	/* Do nothing. */ };

// <sg_support_type:all>
Silv.SG.Support.all = function(actor, skill, gem)
{
	// if-statement prevents the mp&tp-cost increases when multiple all-gems are added or if the skill already had an all-scope.
	if (!Silv.SG.SupportHelper.skillHasScope_All(skill))
	{
		skill.scope = Silv.SG.SupportHelper.scopeToAll(skill.scope);
		skill.mpCost *= 2;
		skill.tpCost *= 2;
		skill.damage.formula = '(' + skill.damage.formula + ') * 0.8';
	}
	
	var suffix = { name:Silv.SG_Addon_Basics.All_SuffixName, eval_condition:'Silv.SG.SupportHelper.skillHasScope_All(skill)' };
	skill.suffixes.push(suffix);
};

// <sg_support_type:one>
Silv.SG.Support.one = function(actor, skill, gem)
{
	skill.scope = Silv.SG.SupportHelper.scopeToOne(skill.scope);
	skill.mpCost *= 0.9;
	skill.tpCost *= 0.9;
	skill.damage.formula = '(' + skill.damage.formula + ') * 1.1';
	
	var suffix = { name:Silv.SG_Addon_Basics.One_SuffixName, eval_condition:'!Silv.SG.SupportHelper.skillHasScope_All(skill)' };
	skill.suffixes.push(suffix);
};

// <sg_support_type:guard>
Silv.SG.Support.guard = function(actor, skill, gem)
{
	var stateSubStr = 'a.addState(' + Silv.SG_Addon_Basics.Guard_StateID + ')';
	
	// Only apply if it does not already have this state
	if (!~skill.damage.formula.indexOf(stateSubStr))
	{
		skill.damage.formula = stateSubStr + '; ' + skill.damage.formula;
		skill.suffixes.push( { name:Silv.SG_Addon_Basics.Guard_SuffixName, eval_condition:'true' } );
	}
};

// <sg_support_type:training>
Silv.SG.Support.training = function(actor, skill, gem)
{
	gem.sg.xp_modifiers.push(1.1);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Helper functions
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Scope:
 0: None
 1: 1 Enemy
 2: All Enemies
 3: 1 Random Enemy
 4: 2 Random Enemies
 5: 3 Random Enemies
 6: 4 Random Enemies
 7: 1 Ally
 8: All Allies
 9: 1 Ally (Dead)
10: All Allies (Dead)
11: The User
*/

// Returns true if the scope is set to all, false otherwise. Note that a scope of like "2 enemies" does NOT count as ALL and will return false.
Silv.SG.SupportHelper.skillHasScope_All = function(skill)
{
	return ((skill.scope == 2) || (skill.scope == 8) || (skill.scope == 10));
};

// Change scope from 1 to all. Returns the new scope.
Silv.SG.SupportHelper.scopeToAll = function(scope)
{
	if ((scope >= 1) && (scope <= 6)) { return 2; }
	if ((scope == 7) || (scope == 8) || (scope == 11)) { return 8; }
	if (scope == 9) { return 10; }
	
	return scope;
};

// Change scope from all to 1. Returns the new scope.
Silv.SG.SupportHelper.scopeToOne = function(scope)
{
	if (scope == 2) { return 1; }
	if ((scope >= 4) && (scope <= 6)) { return 1; }
	if (scope == 8) { return 7; }
	if (scope == 10) { return 9; }
	
	return scope;
};

// Returns true if the skill applies the specified state
Silv.SG.SupportHelper.skillAppliesState = function(skill_id, state_id)
{
	return ($dataSkills[skill_id].effects.filter(function(e) { return ((e.code === 21) && (e.dataId === state_id)); } ).length > 0);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the end of this awesome script!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////































