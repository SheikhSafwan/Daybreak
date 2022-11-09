//=============================================================================
// STV_LookOnlyLeftRight.js
//=============================================================================

/*:
 * @plugindesc v1.0 - STV_LookOnlyLeftRight
 * || This plugin will change reduce the possible look directions
 * to Left and Right.
 * @author SkottyTV
 *
 * @help
 *
 * ////////////////////////////////////////////////////////////////////////////
 * ----------------------------- Terms of Usage: ------------------------------
 * ////////////////////////////////////////////////////////////////////////////
 
 * Feel free to use this Plugin in 1. Non-Commercial Games, 2. Commercial Games
 * However it would be nice to give proper Credits to "SkottyTV"
 * Also a free copy of your Game would be a nice move :)
 * 
 * Have Fun And Enjoy! :)
 *
 *
 *
 * ////////////////////////////////////////////////////////////////////////////
 * --------------------------------- Updates:----------------------------------
 * ////////////////////////////////////////////////////////////////////////////
 * 
 * Update v1.0
 * - Basic Functionality
 *
 * 
 */


// ----------------------------------------------------------------------------------------------------------------------------
// Movement
// ----------------------------------------------------------------------------------------------------------------------------
    Game_CharacterBase.prototype.setDirection = function(d) {
        if (!this.isDirectionFixed() && d) {
            if (d == 2 || d == 8) d = this._direction;
            this._direction = d;
        }
        this.resetStopCount();
    };