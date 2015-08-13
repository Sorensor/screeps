//Declare creep types
var creepTypes = {
    harvester: {body: [global.WORK, global.CARRY, global.MOVE], role: 'harvester'},
    builder: {body: [global.WORK, global.WORK, global.CARRY, global.MOVE], role: 'builder'},
    guard: {body: [global.ATTACK, global.ATTACK, global.MOVE, global.MOVE], role: 'guard'}
};

//Basic queues
var desiredChildrenDefault = {
    harvester: 3,
    builder: 3,
    guard: 3
}

//basic spawner AI
module.exports.baseQueue = function ()
{
    for (var spawn in Game.spawns)
    {
        spawn = Game.getObjectById(spawn);

        if (spawn.memory.active == false)
        {
            break;
        }

        if (spawn.memory.curChildren == undefined)
        {
            spawn.memory.curChildren = {
                harvester: [],
                builder: [],
                guard: []
            };
        }

        if (spawn.memory.desChildren == undefined)
        {
            spawn.memory.desChildren = desiredChildrenDefault;
        }


        if (spawn.spawning == null)
        {
            for (var creepType in spawn.memory.desChildren)
            {
                if (spawn.memory.curChildren[creepType].length < spawn.memory.desChildren[creepType])
                {
                    var maxAttempts = 100;
                    var pass = -16;
                    for (var ii = 0; (pass == -16 && ii < maxAttempts); ii++)
                    {
                        var creepName = spawn.id + creepType + ii;
                        pass = spawn.createCreep(creepTypes[creepType].body, creepName, creepTypes[creepType].role);
                        if (pass == creepName)
                        {
                            spawn.memory.curChildren[creepType].push(creepName);
                        }
                    }
                }
            }
        }
    }

}

//spawn.memory.curChildren
//spawn.memory.desChildren
//spawn.memory.active
//