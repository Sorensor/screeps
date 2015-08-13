module.exports.harvestClosest = function(harvesters)
{
    for (var creep in harvesters)
    {
        creep = Game.creeps[creep];


        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            creep.moveTo(sources[0]);
            creep.harvest(sources[0]);
        }
        else {
            creep.moveTo(creep.memory.home);
            creep.transferEnergy(creep.memory.home)
        }
    }
}