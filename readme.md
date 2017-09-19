**Project steps:**

~~Create basic page structure~~

~~Create and style side panels~~

~~Create and add general page styling~~

~~Devise unit type interaction mechanics~~

~~Devise mechanic calculations~~

~~Add layout styling for instruction main component~~

~~Add layout styling for selection comp~~

~~Add layout styling for statistics and results~~

~~Add object model js for unit stats~~

~~Add selection js click events~~

~~Add basic layout styling for attacks~~

~~Add repeating turn mechanics~~

Add combat effect mechanics

Add unit death

Add end of game 

**My MVP is complete as the core mechanics exist**

Add stats non-select error and repeat

Add confirmation of confirmation button click (change list to text)

Add icons for different unit types

Add player names for board page

Add confirm move animation

Add show moves page within stats 

Upgrade combat page

------------------------------------------------------------------

Interaction mechanics:


Swordsmen	+50% 	v Spearmen

Spearmen	+100% 	v Horsemen

Horsemen	+50% 	v Swords&bowmen

bowmen 		+100% 	if unattacked

bowmen		-50% 	if attacked

------------------------------------------------------------------

mechanic calculations:

dmg = std(12) * yourHealth * dmgMultiplier * outnumMultiplier

outnumMultiplier is the bonus from multiple attacks

if attackers n^(1/2)

if defenders n^(2/3)

