//=============================================================================
// SilvSkillGem_Support_poison.js
// Version: 1.01
//=============================================================================
/*:
 * @plugindesc v1.01 + Silv SG Support poison. Support-addon for "Silvers Skill Gem". <SilvAddon_PoisonState>
 * @author Silver
 *
 * @param Poison State ID
 * @desc The ID of the Poison-State in the Database. [F9] > States
 * @default 4
 *
 * @param Suffix Name
 * @desc Suffix name
 * @default [P]
 *
 * @help
 *
 * Adds the Poison State Support Materia: <sg_support_type:poison>
 *
 *--------------------------------------
 * Version History:
 *--------------------------------------
 * v1.01 (30 January 2016)
 * - Fixed some minor errors like the dependency-check.
 * - Removed 2 debug lines.
 *
 * v1.00 (30 January 2016)
 * - First Release.
 *
 */
 
// Imported
var Imported = Imported || {};
Imported.Silv_SG_Addon_poison = 1.01;

// Parameters
var Silv = Silv || {};
Silv.SG_Addon_PoisonState = Silv.SG_Addon_PoisonState || {};
Silv.Parameters = $plugins.filter(function(p) { return p.description.contains('<SilvAddon_PoisonState>'); })[0].parameters;
Silv.SG_Addon_PoisonState.StateID = parseInt(Silv.Parameters['Poison State ID']);
Silv.SG_Addon_PoisonState.SuffixName = Silv.Parameters['Suffix Name'];
 
// Dependencies
if (!('Silv_SG_Core' in Imported) || (Imported.Silv_SG_Core < 1.00)) { throw new Error('ERROR: "Silvers SkillGems Suppport Poison Addon" requires "Silvers Skill Gems Core" v1.00 or higher. It must be placed above this plugin.'); }
if (!('Silv_SG_Addon_Basics' in Imported) || (Imported.Silv_SG_Addon_Basics < 1.00)) { throw new Error('ERROR: "Silvers Support Poison Addon" requires "Silvers Suppotr Basics Addon" v1.00 or higher. It must be placed above this plugin.'); }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Support Materia
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// <sg_support_type:poison>
Silv.SG.Support.poison = function(actor, skill)
{
	// Only apply this support-gem if the skill does not already apply poison
	if ($dataSkills[skill.id].effects.filter(function(e) { return ((e.code === 21) && (e.dataId === Silv.SG_Addon_PoisonState.StateID)); }).length === 0)
	{
		// Apply the poison attack state
		var state = {code:21, dataId:Silv.SG_Addon_PoisonState.StateID, value1:1, value2:0};
		$dataSkills[skill.id].effects.push(state);
		
		// Increase skill-cost
		skill.mpCost *= 1.3;
		skill.tpCost *= 1.3;
		
		// Add the suffix (note: this is optional)
		var suffix = { name:Silv.SG_Addon_PoisonState.SuffixName, eval_condition:'Silv.SG.SupportHelper.skillAppliesState(' + skill.id + ' , ' + Silv.SG_Addon_PoisonState.StateID + ')' };
		skill.suffixes.push(suffix);
	}
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the end of this awesome script!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////































