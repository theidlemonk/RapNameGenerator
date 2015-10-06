/** 
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

function Generator() {
    /* Name Arrays: Customize names to change possible output */
    this.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist', ];
    this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];
}

Generator.prototype.generateName = function(actualName) {
    var firstname = this.getRandomName(this.first_names);
    var lastname = this.getRandomName(this.last_names);
    var maybeMiddle = Math.floor((Math.random() * 2) + 0) == 0 ? actualName + " " : "";
    return firstname + " " + maybeMiddle + lastname;
}

Generator.prototype.getRandomPosition = function(array) {
    return Math.floor((Math.random() * array.length) + 0);
}

Generator.prototype.getRandomName = function(names) {
        return names[this.getRandomPosition(names)];
}
    //Add your codez here


$(document).ready(function() {

    var engine = new Generator;
    var name = engine.generateName("Tirth");
    console.log(name);

});
