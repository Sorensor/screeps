//Base includes
var factory = require('factory');
var harvester = require('harvester');

//Hack in harvesters
var harvesters = [];
for (var creep in Game.creeps)
{
    creep = Game.creeps[creep];
    if (creep.memory.role == 'harvester')
    {
        harvesters.push(creep);
    }
}

//Base AI
factory.baseQueue();

//Creep AI
harvester