**Project steps:**

~~Add unit type interaction mechanics~~
~~Add mechanic calculations~~
Add boilerplate for instruction main component
Add boilerplate for selection comp
Add boilerplate for statistics and results
Add object model js for unit stats
Add selection js click events
Add basic boilerplate for attacks
Add icons for different unit types

Interaction mechanics:
Swordsmen	+50% 	v Spearmen
Spearmen	+100% 	v Horsemen
Horsemen	+50% 	v Swords&bowmen
bowmen 		+100% 	if unattacked
bowmen		-50% 	if attacked

mechanic calculations:

dmg = std(10) * yourHealth/enmyHealth * dmgMultiplier * outnumMultiplier
outnumMultiplier is the bonus from multiple attacks
if attackers n^(1/2)
if defenders n^(2/3)

