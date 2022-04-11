// to practice generating/manipulating big objects for rarity generation
// most likely there is a better way to do this but I could use the practice

const refObj = [
"race" = {
    "Orc": {
        "racetype": "outsiders",
    },
    
},
"racetype" = {
    "outsiders" : {
        "possible": ["Orc", "Yuan-Ti", "Dwarf"],
            "class": {
                "common": ["Slave"],
                "uncommon": ["Commoner"],
                "rare": ["Gentry/Order"],
                "forbidden": ["Low Noble", "High Noble"]
                }
    },
    "mundane" : {
        "possible": ["Human", "Halfling", "Half-Elf"],
            "class": {
                "common": ["Commoner"],
                "uncommon": ["Slave", "Gentry/Order"],
                "rare": ["Low Noble", "High Noble"],
                "forbidden": []
            }
    },
    "Exotic" : {
        "possible": ["Elf", ""]
    }


}

]