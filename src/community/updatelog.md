---
title: Update Log
icon: calendar
order: 4
category:
  - Help
tag:
  - Update-Log

editLink: false
prev: false
next: false
comment: false
---

::: details 2.2 Optimization content
1. The model adds the recognition of the conveyor belt. The map search algorithm is redesigned. The core of the train can automatically find the road normally
2. Optimized the movement speed of the mode 2, 3, and 4 on the second floor, and shorten the overall process
3. The full model will give priority to finding two teammates, and increase the selection of the emblem in an appropriate amount to ensure that they will not be killed. Fun
4. Independent judgment of some events
5. Optimized the steering design that needs to be running in the battle stage
6. Fix the bug of some scripts running
:::

::: details 2.1 Optimization content
1. Model selection increases the choice of performance banking together
2. The combat module is independent, adding the judgment of the joint technology, the judgment of the current battlefield character
3. Added the fighting logic of some characters, and the corresponding logic will be called according to needs during the battle.
4. Reduce the probability of partial grid when searching for the search path
5. Fix a few bugs
:::

:::: details 2.0 Optimization content
1. Change the logic of automatic road search for the lattice, and make a certain adaptation of high difficult maps. The customs clearance mode will give priority to finding a teammate to deal with the BOSS battle
2. Operating mode to increase the deposit model of the zero bank, which is convenient to remove the zero bank points
3. Increase the bomb function (the first enemy that will be blown up, whether to unlock the bomb needs to be changed in the parameter configuration, the default `unlocked`)
4. Increase the battle map search (the map that needs to run the map will automatically find monsters)
5. Battle increased dosage anti -judgment
6. New DIY combat logic function, you can design the combat logic pseudo code in the configuration file (the project provides a default combat logic)
7. Choose the selection of the Minghui to increase the custom type selection (the configuration parameter can be modified)
::: warning Warning
The road search is mainly optimized for the old capital trains, and other maps still have the probability of hitting the wall)
::::