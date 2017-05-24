angular.module('LoLServices', [])
.factory('Champs', [function(){
    var champsInfo = {
        "data": {
            "1": {
                "blurb": "There have always been those within Noxus who did not agree with the evils perpetrated by the Noxian High Command. The High Command had just put down a coup attempt from the self-proclaimed Crown Prince Raschallion, and a crackdown on any form of...",
                "title": "the Dark Child",
                "id": 1,
                "key": "Annie",
                "name": "Annie"
            },
            "2": {
                "blurb": "Most men would say that death is a thing to be feared; none of those men would be Olaf. The Berserker lives only for the roar of a battle cry and the clash of steel. Spurred on by his hunger for glory and the looming curse of a forgettable death, Olaf...",
                "title": "the Berserker",
                "id": 2,
                "key": "Olaf",
                "name": "Olaf"
            },
            "3": {
                "blurb": "Outside the gleaming city of Demacia, the stone colossus Galio keeps vigilant watch. Built as a bulwark against enemy mages, he often stands motionless for decades until the presence of powerful magic stirs him to life. Once activated, Galio makes the...",
                "title": "the Colossus",
                "id": 3,
                "key": "Galio",
                "name": "Galio"
            },
            "4": {
                "blurb": "Twisted Fate is an infamous card sharp and swindler who has gambled and charmed his way across much of the known world, earning the enmity and admiration of the rich and foolish alike. He rarely takes things seriously, greeting each day with a mocking...",
                "title": "the Card Master",
                "id": 4,
                "key": "TwistedFate",
                "name": "Twisted Fate"
            },
            "5": {
                "blurb": "Death is inevitable, one can only avoid defeat. Whenever Jarvan III, the king of Demacia, delivers one of his rallying speeches from the glinting marble balcony atop the Royal Palace, Xin Zhao is at his side. Coined the Seneschal of Demacia...",
                "title": "the Seneschal of Demacia",
                "id": 5,
                "key": "XinZhao",
                "name": "Xin Zhao"
            },
            "6": {
                "blurb": "There are warriors who become great for their strength, cunning, or skill with arms. Others simply refuse to die. Urgot, once a great soldier of Noxus, may constitute a case in support of the latter. Prone to diving headlong into enemy battle lines...",
                "title": "the Headsman's Pride",
                "id": 6,
                "key": "Urgot",
                "name": "Urgot"
            },
            "7": {
                "blurb": "Every city has its dark side, even one whose reputation is already of a questionable hue. Noxus - though its name is already invoked with a mixture of reverence and revulsion - is no exception to this simple truth. Deep within the winding dungeons that...",
                "title": "the Deceiver",
                "id": 7,
                "key": "Leblanc",
                "name": "LeBlanc"
            },
            "8": {
                "blurb": "There is a temple hidden in the mountains between Noxus and the Tempest Flats, where the secrets of an ancient and terrifying sorcery are kept. The area surrounding the temple is littered with the exsanguinated corpses of those who have mistakenly...",
                "title": "the Crimson Reaper",
                "id": 8,
                "key": "Vladimir",
                "name": "Vladimir"
            },
            "9": {
                "blurb": "For nearly twenty years, Fiddlesticks has stood alone in the easternmost summoning chamber of the Institute of War. Only the burning emerald light of his unearthly gaze pierces the musty darkness of his dust-covered home. It is here that the Harbinger...",
                "title": "the Harbinger of Doom",
                "id": 9,
                "key": "Fiddlesticks",
                "name": "Fiddlesticks"
            },
            "10": {
                "blurb": "In a world far away where an ancient war still rages, Kayle was a great hero - the strongest of an immortal race committed to destroying evil wherever it could be found. For ten thousand years, Kayle fought tirelessly for her people, wielding her...",
                "title": "The Judicator",
                "id": 10,
                "key": "Kayle",
                "name": "Kayle"
            },
            "11": {
                "blurb": "Through the ancient martial art of Wuju, Master Yi has tempered his body and sharpened his mind until thought and action have become one. Though he chooses to enter into violence as a last resort, the grace and speed with which he wields his blade...",
                "title": "the Wuju Bladesman",
                "id": 11,
                "key": "MasterYi",
                "name": "Master Yi"
            },
            "12": {
                "blurb": "As the mightiest warrior to ever emerge from the Minotaur tribes of the Great Barrier, Alistar defended his tribe from Valoran's many dangers; that is, until the coming of the Noxian army. Alistar was lured from his village by the machinations of Keiran...",
                "title": "the Minotaur",
                "id": 12,
                "key": "Alistar",
                "name": "Alistar"
            },
            "13": {
                "blurb": "Take care with this world. What is made can be unmade. Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with a boundless constitution and a...",
                "title": "the Rune Mage",
                "id": 13,
                "key": "Ryze",
                "name": "Ryze"
            },
            "14": {
                "blurb": "BLOOD. SMELL IT. WANT. ACHING. NEED! CLOSE NOW. THEY COME. NO CHAINS? FREE! KILL! IN REACH. YES! DIE! DIE! Gone. Too quick. No fight. More. I want... more. A voice? Unfamiliar. I see him. The Grand...",
                "title": "The Undead Juggernaut",
                "id": 14,
                "key": "Sion",
                "name": "Sion"
            },
            "15": {
                "blurb": "I don't care what face is on your coin, as long as it pays. Sivir is a renowned fortune hunter and mercenary captain who plies her trade in the deserts of Shurima. Armed with her legendary jeweled crossblade, she has fought and won countless...",
                "title": "the Battle Mistress",
                "id": 15,
                "key": "Sivir",
                "name": "Sivir"
            },
            "16": {
                "blurb": "A healer gifted with the magic of the stars, Soraka holds all living creatures close to her heart. She was once a celestial being, but she sacrificed her immortality and entered the world of mortals. So long as evil threatens life in Valoran, Soraka...",
                "title": "the Starchild",
                "id": 16,
                "key": "Soraka",
                "name": "Soraka"
            },
            "17": {
                "blurb": "Teemo is a legend among his yordle brothers and sisters in Bandle City. As far as yordles are concerned, there is something just slightly off about him. While Teemo enjoys the companionship of other yordles, he also insists on frequent solo missions in...",
                "title": "the Swift Scout",
                "id": 17,
                "key": "Teemo",
                "name": "Teemo"
            },
            "18": {
                "blurb": "Greatness comes in all shapes and sizes, as proven by this diminutive, cannon-wielding yordle. In a world fraught with turmoil, Tristana refuses to back down from any challenge. She represents the pinnacle of martial proficiency, unwavering courage, and...",
                "title": "the Yordle Gunner",
                "id": 18,
                "key": "Tristana",
                "name": "Tristana"
            },
            "19": {
                "blurb": "Warwick is a monster who hunts the gray alleys of Zaun. Transformed by agonizing experiments, his body is fused with an intricate system of chambers and pumps, machinery filling his veins with alchemical rage. Bursting out of the shadows, he preys upon...",
                "title": "the Uncaged Wrath of Zaun",
                "id": 19,
                "key": "Warwick",
                "name": "Warwick"
            },
            "20": {
                "blurb": "Sometimes bonds of friendship become stronger than even bonds of blood. When those bonds link a fearless boy to a fearsome Yeti, the bond becomes a force to be reckoned with. Given the responsibility of taming a terrifying beast, Nunu forged a...",
                "title": "the Yeti Rider",
                "id": 20,
                "key": "Nunu",
                "name": "Nunu"
            },
            "21": {
                "blurb": "The bigger the risk, the bigger the bounty. Beauty and danger: There are few who can match Miss Fortune in either. One of Bilgewater's most infamous bounty hunters, she built her legend upon a swathe of bullet-riddled corpses and captured...",
                "title": "the Bounty Hunter",
                "id": 21,
                "key": "MissFortune",
                "name": "Miss Fortune"
            },
            "22": {
                "blurb": "With each arrow she fires from her ancient ice-enchanted bow, Ashe proves she is a master archer. She chooses each target carefully, waits for the right moment, and then strikes with power and precision. It is with this same vision and focus that she...",
                "title": "the Frost Archer",
                "id": 22,
                "key": "Ashe",
                "name": "Ashe"
            },
            "23": {
                "blurb": "Fueled by his unbridled fury and rage, Tryndamere cuts his way through the tundra, mastering the art of battle by challenging the Freljord's greatest warriors. The wrathful barbarian seeks revenge on the one who decimated his clan and strikes down all...",
                "title": "the Barbarian King",
                "id": 23,
                "key": "Tryndamere",
                "name": "Tryndamere"
            },
            "24": {
                "blurb": "It is seldom the case where a champion is defined by his actions after joining the League of Legends rather than before. Such is the case with Jax, for whom the argument could be made that he is the most prolific tournament fighter currently at the...",
                "title": "Grandmaster at Arms",
                "id": 24,
                "key": "Jax",
                "name": "Jax"
            },
            "25": {
                "blurb": "There is a world far away populated by graceful and beautiful winged beings gifted with immortality, where an ancient conflict still rages. Like so many conflicts, this war split families. One side proclaimed themselves as beings of perfect order and...",
                "title": "Fallen Angel",
                "id": 25,
                "key": "Morgana",
                "name": "Morgana"
            },
            "26": {
                "blurb": "In the wastelands of Urtistan, there was once a great city. It perished long ago in a terrible Rune War, like most of the lands below the Great Barrier. Nevertheless, one man survived: a sorcerer named Zilean. Being obsessed with time, it was only...",
                "title": "the Chronokeeper",
                "id": 26,
                "key": "Zilean",
                "name": "Zilean"
            },
            "27": {
                "blurb": "Singed descended from a long line of Zaun's revered chemists. Even in his youth, his talent for concocting potions far outstripped that of his peers, and he quickly distinguished himself from his less extraordinary chemist compatriots. It came as no...",
                "title": "the Mad Chemist",
                "id": 27,
                "key": "Singed",
                "name": "Singed"
            },
            "28": {
                "blurb": "Swift and lethal, Evelynn is one of the most deadly - and expensive - assassins in all of Runeterra. Able to merge with the shadows at will, she patiently stalks her prey, waiting for the right moment to strike. While Evelynn is clearly not entirely...",
                "title": "the Widowmaker",
                "id": 28,
                "key": "Evelynn",
                "name": "Evelynn"
            },
            "29": {
                "blurb": "H.I.V.E. Incident Report Code Violation: Industrial Homicide Casefile Status: Unsolved Investigating Agent: Rol, P. Team responded to report of suspicious character, criminal activity; proceeded to Sump Works, Sector 90TZ. Sector 90TZ...",
                "title": "the Plague Rat",
                "id": 29,
                "key": "Twitch",
                "name": "Twitch"
            },
            "30": {
                "blurb": "Death is not the end of the journey, it is just the beginning... The harbinger of oblivion, Karthus is an undying spirit whose haunting songs are a prelude to the horror of his nightmarish appearance. The living fear the eternity of undeath...",
                "title": "the Deathsinger",
                "id": 30,
                "key": "Karthus",
                "name": "Karthus"
            },
            "31": {
                "blurb": "There is a place between dimensions, between worlds. To some it is known as the Outside, to others it is the Unknown. To those that truly know, however, it is called the Void. Despite its name, the Void is not an empty place, but rather the home of...",
                "title": "the Terror of the Void",
                "id": 31,
                "key": "Chogath",
                "name": "Cho'Gath"
            },
            "32": {
                "blurb": "Solitude can be lonelier than death. A lonely and melancholy soul from ancient Shurima, Amumu roams the world in search of a friend. Cursed by an ancient spell, he is doomed to remain alone forever, as his touch is death and his affection...",
                "title": "the Sad Mummy",
                "id": 32,
                "key": "Amumu",
                "name": "Amumu"
            },
            "33": {
                "blurb": "OK. Idolized by many, dismissed by some, mystifying to all, the curious being, Rammus, is an enigma. Protected by a spiked shell, Rammus inspires increasingly disparate theories on his origin wherever he goes - from demigod, to sacred oracle...",
                "title": "the Armordillo",
                "id": 33,
                "key": "Rammus",
                "name": "Rammus"
            },
            "34": {
                "blurb": "Anivia is a being of the coldest winter, a mystical embodiment of ice magic, and an ancient protector of the Freljord. She commands all the power and fury of the land itself, calling the snow and bitter wind to defend her home from those who would harm...",
                "title": "the Cryophoenix",
                "id": 34,
                "key": "Anivia",
                "name": "Anivia"
            },
            "35": {
                "blurb": "Most would say that death isn't funny. It isn't, unless you're Shaco - then it's hysterical. He is Valoran's first fully functioning homicidal comic; he jests until someone dies, and then he laughs. The figure that has come to be known as the Demon...",
                "title": "the Demon Jester",
                "id": 35,
                "key": "Shaco",
                "name": "Shaco"
            },
            "36": {
                "blurb": "Beware the Madman of Zaun. In his eyes, you are already dead. It is said that the man now known as Dr. Mundo was born without any sort of conscience. Instead, he had an unquenchable desire to inflict pain through experimentation. By the time...",
                "title": "the Madman of Zaun",
                "id": 36,
                "key": "DrMundo",
                "name": "Dr. Mundo"
            },
            "37": {
                "blurb": "Sona has no memories of her true parents. As an infant, she was found abandoned on the doorstep of an Ionian adoption house, nestled atop an ancient instrument in an exquisite case of unknown origins. She was an unusually well-behaved child, always...",
                "title": "Maven of the Strings",
                "id": 37,
                "key": "Sona",
                "name": "Sona"
            },
            "38": {
                "blurb": "There is a place between dimensions and between worlds. To some it is known as the Outside, to others it is the Unknown. To most, however, it is called the Void. Despite its name, the Void is not an empty place, but rather the home of unspeakable things...",
                "title": "the Void Walker",
                "id": 38,
                "key": "Kassadin",
                "name": "Kassadin"
            },
            "39": {
                "blurb": "The sword flourishes, as though painting with blood. The Ionians have developed some of the most breathtaking and deadly martial arts in all of Runeterra - just one manifestation of their pursuit of enlightenment. The most remarkable blade...",
                "title": "the Will of the Blades",
                "id": 39,
                "key": "Irelia",
                "name": "Irelia"
            },
            "40": {
                "blurb": "There are those sorcerers who give themselves over to the primal powers of nature, forgoing the learned practice of magic. Such a sorceress is Janna, who first learned magic as an orphan growing up amidst the chaos that is the city-state of Zaun. Janna...",
                "title": "the Storm's Fury",
                "id": 40,
                "key": "Janna",
                "name": "Janna"
            },
            "41": {
                "blurb": "I was cutting throats and sinking Noxian war galleys when you were still pissing your britches, boy. You don't want to take me on. As unpredictable as he is brutal, the dethroned reaver king known as Gangplank is feared far and wide. Where he...",
                "title": "the Saltwater Scourge",
                "id": 41,
                "key": "Gangplank",
                "name": "Gangplank"
            },
            "42": {
                "blurb": "When Heimerdinger and his yordle colleagues migrated to Piltover, they embraced science as a way of life, and they immediately made several groundbreaking contributions to the techmaturgical community. What yordles lack in stature, they make up for with...",
                "title": "the Daring Bombardier",
                "id": 42,
                "key": "Corki",
                "name": "Corki"
            },
            "43": {
                "blurb": "Karma is a woman of indomitable will and unbound spiritual power. She is the soul of Ionia made manifest and an inspiring presence on the battlefield, shielding her allies and turning back her foes. A strong leader torn between tradition and revolution...",
                "title": "the Enlightened One",
                "id": 43,
                "key": "Karma",
                "name": "Karma"
            },
            "44": {
                "blurb": "The best weapons are beautiful. Taric is the Aspect of the Protector, wielding incredible power as Runeterra's guardian of life, love, and beauty. Shamed by a dereliction of duty and exiled from his homeland Demacia, Taric ascended Mount...",
                "title": "the Shield of Valoran",
                "id": 44,
                "key": "Taric",
                "name": "Taric"
            },
            "45": {
                "blurb": "To most, thoughts of yordles do not conjure images to be feared. The easygoing half-pint race, though fierce, is often regarded with some degree of joviality. Their high-pitched voices and naturally cute forms inspire something of a protective instinct...",
                "title": "the Tiny Master of Evil",
                "id": 45,
                "key": "Veigar",
                "name": "Veigar"
            },
            "48": {
                "blurb": "Trundle is a hulking and devious troll with a mischievous streak. There is nothing he can't beat into submission and bend to his will, not even the ice itself. With his massive, frozen club, he chills his enemies to the core and runs them through with...",
                "title": "the Troll King",
                "id": 48,
                "key": "Trundle",
                "name": "Trundle"
            },
            "50": {
                "blurb": "The earliest account of Swain's existence comes from a Noxian infirmary doctor's notes. According to them, Swain limped into the ward without cry or complaint; his right leg was snapped in half, with bone protruding from the skin. A small, scowling bird...",
                "title": "the Master Tactician",
                "id": 50,
                "key": "Swain",
                "name": "Swain"
            },
            "51": {
                "blurb": "Go ahead, run. I'll give you a five minute head start. One of the reasons Piltover is known as the City of Progress is because it has an extraordinarily low crime rate. This hasn't always been the case; brigands and thieves of all sorts used...",
                "title": "the Sheriff of Piltover",
                "id": 51,
                "key": "Caitlyn",
                "name": "Caitlyn"
            },
            "53": {
                "blurb": "Zaun is a place where both magic and science have gone awry, and the unchecked nature of experimentation has taken its toll. However, Zaun's lenient restrictions allow their researchers and inventors the leeway to push the bounds of science at an...",
                "title": "the Great Steam Golem",
                "id": 53,
                "key": "Blitzcrank",
                "name": "Blitzcrank"
            },
            "54": {
                "blurb": "There is a world of perfect harmony, where all are part of the whole. The Monolith is the essence of all creation, and its denizens are but singular pieces of it. It is beautiful in its symmetry, and in its almost complete lack of uncertainty. The rocky...",
                "title": "Shard of the Monolith",
                "id": 54,
                "key": "Malphite",
                "name": "Malphite"
            },
            "55": {
                "blurb": "Driven by an intense killer instinct, Katarina uses her talents as an assassin for the glory of Noxus, and the continued elevation of her family. While her fervor drives her to ever-greater feats, it can sometimes lead her astray. From childhood...",
                "title": "the Sinister Blade",
                "id": 55,
                "key": "Katarina",
                "name": "Katarina"
            },
            "56": {
                "blurb": "Before Nocturne, people believed that dreams were figments of their imagination, meaningless images that flashed through the mind when one slept. This belief was put to the test when a rash of sleep-related incidents started afflicting summoners of the...",
                "title": "the Eternal Nightmare",
                "id": 56,
                "key": "Nocturne",
                "name": "Nocturne"
            },
            "57": {
                "blurb": "All around me are empty husks, soulless and unafraid... but I will bring them fear. Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical cataclysm...",
                "title": "the Twisted Treant",
                "id": 57,
                "key": "Maokai",
                "name": "Maokai"
            },
            "58": {
                "blurb": "Blood and vengeance. Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the armies of Shurima to countless victories. However, after the empire's...",
                "title": "the Butcher of the Sands",
                "id": 58,
                "key": "Renekton",
                "name": "Renekton"
            },
            "59": {
                "blurb": "There is only one truth, and you will find it at the point of my lance. As the royal family of Demacia for centuries, members of the Lightshield line have spent their lives waging war against any who opposed Demacian ethics. It is said that...",
                "title": "the Exemplar of Demacia",
                "id": 59,
                "key": "JarvanIV",
                "name": "Jarvan IV"
            },
            "60": {
                "blurb": "Beauty is power too, and can strike swifter than any sword. Elise is a deadly predator who dwells in a shuttered, lightless palace, deep in the Immortal Bastion of Noxus. Once she was mortal, the mistress of a once-powerful house, but the...",
                "title": "the Spider Queen",
                "id": 60,
                "key": "Elise",
                "name": "Elise"
            },
            "61": {
                "blurb": "There once was a Piltovian man named Corin Reveck who had a daughter named Orianna, whom he loved more than anything else in the world. Though Orianna had incredible talent for dancing, she was deeply fascinated by the champions of the League of Legends...",
                "title": "the Lady of Clockwork",
                "id": 61,
                "key": "Orianna",
                "name": "Orianna"
            },
            "62": {
                "blurb": "During the chaos of the Rune Wars, an enormous runestone was lost deep within the Plague Jungles. It remained there, untouched for centuries, emanating a potent magic which infused nearby wildlife with sentience and vitality. A group of monkeys who were...",
                "title": "the Monkey King",
                "id": 62,
                "key": "MonkeyKing",
                "name": "Wukong"
            },
            "63": {
                "blurb": "In a faraway place known as Lokfar there was a seafaring marauder called Kegan Rodhe. As was his people's way, Kegan sailed far and wide with his fellows, stealing treasures from those unlucky enough to catch their attention. To some, he was a monster;...",
                "title": "the Burning Vengeance",
                "id": 63,
                "key": "Brand",
                "name": "Brand"
            },
            "64": {
                "blurb": "As a young teen, Lee Sin was intent on becoming a summoner. His will and dedication were unmatched by any of his peers, and his skill drew the attention of Reginald Ashram, the League's High Councilor at the time. While studying at the Arcanum Majoris...",
                "title": "the Blind Monk",
                "id": 64,
                "key": "LeeSin",
                "name": "Lee Sin"
            },
            "67": {
                "blurb": "The world is not always as civilized as people might think. There are still those who would follow the blackest paths of magic and become corrupted by the darker powers that flow through Runeterra. Shauna Vayne knows this fact well. As a young...",
                "title": "the Night Hunter",
                "id": 67,
                "key": "Vayne",
                "name": "Vayne"
            },
            "68": {
                "blurb": "Ugh, it's gonna take forever to scrape your face off my suit! Even amongst yordles, Rumble was always the runt of the litter. As such, he was used to being bullied. In order to survive, he had to be scrappier and more resourceful than his...",
                "title": "the Mechanized Menace",
                "id": 68,
                "key": "Rumble",
                "name": "Rumble"
            },
            "69": {
                "blurb": "Cassiopeia is a terrifying creature - half woman, half snake - whose slightest glance brings death. The youngest daughter of one of Noxus' most influential families, she was once a beautiful and cunning temptress capable of manipulating the hardest...",
                "title": "the Serpent's Embrace",
                "id": 69,
                "key": "Cassiopeia",
                "name": "Cassiopeia"
            },
            "72": {
                "blurb": "We are one. We cannot be shattered. Skarner is an immense crystalline scorpion from a hidden valley in Shurima. Part of the ancient Brackern race, Skarner and his kin are known for their great wisdom and deep connection to the land, as their...",
                "title": "the Crystal Vanguard",
                "id": 72,
                "key": "Skarner",
                "name": "Skarner"
            },
            "74": {
                "blurb": "From the Journal of Professor Cecil B. Heimerdinger 10.14 09:15 Current meteorological conditions in Bandle City seem optimal. Atmospheric pressure is ideal for today's experiments! Running a fifth trial for my...",
                "title": "the Revered Inventor",
                "id": 74,
                "key": "Heimerdinger",
                "name": "Heimerdinger"
            },
            "75": {
                "blurb": "What was fallen will be great again. Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and peerless...",
                "title": "the Curator of the Sands",
                "id": 75,
                "key": "Nasus",
                "name": "Nasus"
            },
            "76": {
                "blurb": "There are few dwellers, let alone champions, residing in the blasted and dangerous lands that lie south of the Great Barrier. Much of that world still bears the scars of past Runes Wars, especially the mysterious Kumungu Jungle. There are long-forgotten...",
                "title": "the Bestial Huntress",
                "id": 76,
                "key": "Nidalee",
                "name": "Nidalee"
            },
            "77": {
                "blurb": "Udyr is more than a man; he is a vessel for the untamed power of four primal animal spirits. When tapping into the spirits' bestial natures, Udyr can harness their unique strengths: the tiger grants him speed and ferocity, the turtle resilience, the...",
                "title": "the Spirit Walker",
                "id": 77,
                "key": "Udyr",
                "name": "Udyr"
            },
            "78": {
                "blurb": "I'm no hero. Just a yordle with a hammer. Runeterra has no shortage of valiant champions, but few are as tenacious as Poppy. Bearing a hammer twice the length of her body, this determined yordle has spent untold years searching for the ''Hero...",
                "title": "Keeper of the Hammer",
                "id": 78,
                "key": "Poppy",
                "name": "Poppy"
            },
            "79": {
                "blurb": "The only thing more important to Gragas than fighting is drinking. His unquenchable thirst for stronger ale has led him in search of the most potent and unconventional ingredients to toss in his still. Impulsive and unpredictable, this rowdy carouser...",
                "title": "the Rabble Rouser",
                "id": 79,
                "key": "Gragas",
                "name": "Gragas"
            },
            "80": {
                "blurb": "Bring forth one true champion, or a hundred more like you, and then we shall have a battle that will be spoken of until the end of time. The peerless warrior known as Pantheon is a nigh-unstoppable paragon of battle. He was born among the...",
                "title": "the Artisan of War",
                "id": 80,
                "key": "Pantheon",
                "name": "Pantheon"
            },
            "81": {
                "blurb": "The intrepid young adventurer Ezreal has explored some of the most remote and abandoned locations on Runeterra. During an expedition to the buried ruins of ancient Shurima, he recovered an amulet of incredible mystical power. Likely constructed to be...",
                "title": "the Prodigal Explorer",
                "id": 81,
                "key": "Ezreal",
                "name": "Ezreal"
            },
            "82": {
                "blurb": "All things must die... and yet I live on. The baleful revenant Mordekaiser is among the most terrifying and hateful spirits haunting the Shadow Isles. He has existed for countless centuries, shielded from true death by necromantic sorcery and...",
                "title": "the Iron Revenant",
                "id": 82,
                "key": "Mordekaiser",
                "name": "Mordekaiser"
            },
            "83": {
                "blurb": "These isles… How they scream. The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting corpses and shrieking spirits that...",
                "title": "Shepherd of Souls",
                "id": 83,
                "key": "Yorick",
                "name": "Yorick"
            },
            "84": {
                "blurb": "There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou and...",
                "title": "the Fist of Shadow",
                "id": 84,
                "key": "Akali",
                "name": "Akali"
            },
            "85": {
                "blurb": "There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou and...",
                "title": "the Heart of the Tempest",
                "id": 85,
                "key": "Kennen",
                "name": "Kennen"
            },
            "86": {
                "blurb": "Throughout Valoran, the resolve of Demacia's military is alternately celebrated or despised, but always respected. Their ''zero tolerance'' moral code is strictly upheld by civilians and soldiers alike. In combat, this means Demacian troops may not make...",
                "title": "The Might of Demacia",
                "id": 86,
                "key": "Garen",
                "name": "Garen"
            },
            "89": {
                "blurb": "If you would shine like a sun, first you must burn like one. Imbued with the fire of the sun, Leona is a warrior templar of the Solari who defends Mount Targon with her Zenith Blade and Shield of Daybreak. Her skin shimmers with starfire...",
                "title": "the Radiant Dawn",
                "id": 89,
                "key": "Leona",
                "name": "Leona"
            },
            "90": {
                "blurb": "Many men have gone mad beneath the glare of the Shurima sun, but it was during the night's chilling embrace that Malzahar relinquished his sanity. Malzahar was born a seer, blessed with the gift of prophecy. His talent, though unrefined, promised to be...",
                "title": "the Prophet of the Void",
                "id": 90,
                "key": "Malzahar",
                "name": "Malzahar"
            },
            "91": {
                "blurb": "The three deadliest blademasters in all of Valoran are bound to the house of Du Couteau: my father, myself, and Talon. Challenge us, if you dare. Katarina Du Couteau Talon's earliest memories are the darkness of Noxus' underground...",
                "title": "the Blade's Shadow",
                "id": 91,
                "key": "Talon",
                "name": "Talon"
            },
            "92": {
                "blurb": "There is a place between war and murder in which our demons lurk. In Noxus, any citizen may rise to power regardless of race, gender, or social standing - strength is all that matters. It was with committed faith in this ideal that Riven...",
                "title": "the Exile",
                "id": 92,
                "key": "Riven",
                "name": "Riven"
            },
            "96": {
                "blurb": "If that's just hungry, I don't want to see angry. When the prophet Malzahar was reborn in Icathia, he was led there by an ominous voice which thereafter anchored itself to his psyche. From within, this voice bestowed upon him terrible purpose...",
                "title": "the Mouth of the Abyss",
                "id": 96,
                "key": "KogMaw",
                "name": "Kog'Maw"
            },
            "98": {
                "blurb": "The Eye is blind to fear, to hate, to love - to all things that would sway equilibrium. Leader of a secret clan of mystic warriors, Shen serves as the Eye of Twilight, entrusted to enforce equilibrium in the world. Longing to remain free from...",
                "title": "the Eye of Twilight",
                "id": 98,
                "key": "Shen",
                "name": "Shen"
            },
            "99": {
                "blurb": "Born to the prestigious Crownguards, the paragon family of Demacian service, Luxanna was destined for greatness. She grew up as the family's only daughter, and she immediately took to the advanced education and lavish parties required of families as...",
                "title": "the Lady of Luminosity",
                "id": 99,
                "key": "Lux",
                "name": "Lux"
            },
            "101": {
                "blurb": "A lifetime as a slave has prepared me for eternity as your master. Xerath is an Ascended Magus of ancient Shurima, a being of arcane energy writhing in the broken shards of a magical sarcophagus. For millennia, he was trapped beneath the...",
                "title": "the Magus Ascendant",
                "id": 101,
                "key": "Xerath",
                "name": "Xerath"
            },
            "102": {
                "blurb": "A half-breed born from the union between dragon and human, Shyvana searched all her life for belonging. Persecution forged her into a brutal warrior, and those who dare stand against Shyvana face the fiery beast lurking just beneath her skin...",
                "title": "the Half-Dragon",
                "id": 102,
                "key": "Shyvana",
                "name": "Shyvana"
            },
            "103": {
                "blurb": "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for her...",
                "title": "the Nine-Tailed Fox",
                "id": 103,
                "key": "Ahri",
                "name": "Ahri"
            },
            "104": {
                "blurb": "Malcolm Graves is a wanted man in every realm, city and empire he has visited. Tough, strong-willed, and above all, relentless, through his life of crime he has amassed (then invariably lost) a small fortune.",
                "title": "the Outlaw",
                "id": 104,
                "key": "Graves",
                "name": "Graves"
            },
            "105": {
                "blurb": "Centuries ago, an ancient water-dwelling race built a hidden city beneath a mountain in the sea. Though these creatures had their enemies, the city was an impenetrable fortress, and, in the safety it provided, they grew complacent. Fizz, however...",
                "title": "the Tidal Trickster",
                "id": 105,
                "key": "Fizz",
                "name": "Fizz"
            },
            "106": {
                "blurb": "The unforgiving northern reaches of the Freljord are home to the Ursine, a fierce and warlike race that has endured the barren tundra for thousands of years. Their leader is a furious adversary who commands the force of lightning to strike fear within...",
                "title": "the Thunder's Roar",
                "id": 106,
                "key": "Volibear",
                "name": "Volibear"
            },
            "107": {
                "blurb": "On every wall of his den, the trophy hunter Rengar mounts the heads, horns, claws, and fangs of the most lethal creatures in Valoran. Though his collection is extensive, he remains unsatisfied, tirelessly seeking greater game. He takes time with every...",
                "title": "the Pridestalker",
                "id": 107,
                "key": "Rengar",
                "name": "Rengar"
            },
            "110": {
                "blurb": "The life of an arrow is fleeting, built of nothing but direction and intent. For his incomparable skill with the bow and his unquestioned sense of honor, Varus was chosen to be the warden of a sacred Ionian temple. The temple was built to...",
                "title": "the Arrow of Retribution",
                "id": 110,
                "key": "Varus",
                "name": "Varus"
            },
            "111": {
                "blurb": "Once, Nautilus was a sailor commissioned by the Institute of War to explore the uncharted reaches of the Guardian's Sea. This expedition took him deep into unknown waters where he and his crew found a vast section of black oozing liquid that none of the...",
                "title": "the Titan of the Depths",
                "id": 111,
                "key": "Nautilus",
                "name": "Nautilus"
            },
            "112": {
                "blurb": "Early in life, Viktor discovered his passion for science and invention, particularly in the field of mechanical automation. He attended Zaun's prestigious College of Techmaturgy and led the team that constructed Blitzcrank - a scientific breakthrough...",
                "title": "the Machine Herald",
                "id": 112,
                "key": "Viktor",
                "name": "Viktor"
            },
            "113": {
                "blurb": "Sejuani was weaned on hardship and reared on barbarity. Where others succumbed to the harshness of the Freljord, she was tempered by it until pain became power, hunger an encouragement, and frost an ally in culling the weak. Through her ordeals, she...",
                "title": "Fury of the North",
                "id": 113,
                "key": "Sejuani",
                "name": "Sejuani"
            },
            "114": {
                "blurb": "I have come to kill you for the sake of honor. And though you possess none, still you die. The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and cunning mind as she is for the speed of her bluesteel rapier. Born...",
                "title": "the Grand Duelist",
                "id": 114,
                "key": "Fiora",
                "name": "Fiora"
            },
            "115": {
                "blurb": "Ziggs was born with a talent for tinkering, but his chaotic, hyperactive nature was unusual among yordle scientists. Aspiring to be a revered inventor like Heimerdinger, he rattled through ambitious projects with manic zeal, emboldened by both his...",
                "title": "the Hexplosives Expert",
                "id": 115,
                "key": "Ziggs",
                "name": "Ziggs"
            },
            "117": {
                "blurb": "Perhaps more than any other champion in the League, Lulu marches to the beat of her own drum. During her youth in Bandle City, she spent most of her time wandering alone in the forest or lost in a daydream. It wasn't that she was antisocial; the...",
                "title": "the Fae Sorceress",
                "id": 117,
                "key": "Lulu",
                "name": "Lulu"
            },
            "119": {
                "blurb": "Unlike his brother Darius, victory in battle was never enough for Draven. He craved recognition, acclaim, and glory. He first sought greatness in the Noxian military, but his flair for the dramatic went severely underappreciated. Thirsting for a method...",
                "title": "the Glorious Executioner",
                "id": 119,
                "key": "Draven",
                "name": "Draven"
            },
            "120": {
                "blurb": "Break their ranks and ride them down without mercy. Crush the living and feast on their terror. Hecarim is an armored colossus who charges from the Shadow Isles at the head of a deathly host of spectral horsemen to hunt the living. A...",
                "title": "the Shadow of War",
                "id": 120,
                "key": "Hecarim",
                "name": "Hecarim"
            },
            "121": {
                "blurb": "A vicious Void predator, Kha'Zix infiltrated Valoran to devour the land's most promising creatures. With each kill he absorbs his prey's strength, evolving to grow more powerful. Kha'Zix hungers most to conquer and consume Rengar, the one beast he...",
                "title": "the Voidreaver",
                "id": 121,
                "key": "Khazix",
                "name": "Kha'Zix"
            },
            "122": {
                "blurb": "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened warrior. Orphaned at a young age, Darius had to fight to keep himself and his younger brother alive. By the time he joined the military, he had already...",
                "title": "the Hand of Noxus",
                "id": 122,
                "key": "Darius",
                "name": "Darius"
            },
            "126": {
                "blurb": "Armed with wit, charm, and his signature transforming hammer, Jayce lives to protect his native Piltover. Long before his nation called him a hero, however, he was a promising young inventor. When Piltover commissioned him to study a rare arcane crystal...",
                "title": "the Defender of Tomorrow",
                "id": 126,
                "key": "Jayce",
                "name": "Jayce"
            },
            "127": {
                "blurb": "Lissandra's magic twists the pure power of ice into something dark and terrible. With the force of her black ice, she does more than freeze - she impales and crushes those who oppose her. To the terrified denizens of the north, she is known only as...",
                "title": "the Ice Witch",
                "id": 127,
                "key": "Lissandra",
                "name": "Lissandra"
            },
            "131": {
                "blurb": "I am the light coursing in the soul of the moon. Bearing her crescent moonblade, Diana fights as a warrior of the Lunari, a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night...",
                "title": "Scorn of the Moon",
                "id": 131,
                "key": "Diana",
                "name": "Diana"
            },
            "133": {
                "blurb": "Quinn and Valor are an elite ranger team. With crossbow and claw, they undertake their nation's most dangerous missions deep within enemy territory, from swift reconnaissance to lethal strikes. The pair's unbreakable bond is deadly on the battlefield...",
                "title": "Demacia's Wings",
                "id": 133,
                "key": "Quinn",
                "name": "Quinn"
            },
            "134": {
                "blurb": "Born with immense magical potential, Syndra loves nothing more than exercising the incredible power at her command. With each passing day, her mastery of magical force grows more potent and devastating. Refusing any notion of balance or restraint...",
                "title": "the Dark Sovereign",
                "id": 134,
                "key": "Syndra",
                "name": "Syndra"
            },
            "136": {
                "blurb": "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his...",
                "title": "The Star Forger",
                "id": 136,
                "key": "AurelionSol",
                "name": "Aurelion Sol"
            },
            "143": {
                "blurb": "Longing to take control of her fate, the ancient, dying plant Zyra transferred her consciousness into a human body for a second chance at life. Centuries ago, she and her kind dominated the Kumungu Jungle, using thorns and vines to consume any animal...",
                "title": "Rise of the Thorns",
                "id": 143,
                "key": "Zyra",
                "name": "Zyra"
            },
            "150": {
                "blurb": "The jungle does not forgive blindness. Every broken branch tells a story. I've hunted every creature this jungle has to offer. I was certain there were no challenges left here, but now there is something new. Each track is the size of a tusklord;...",
                "title": "the Missing Link",
                "id": 150,
                "key": "Gnar",
                "name": "Gnar"
            },
            "154": {
                "blurb": "Zac is the product of a Zaun experiment to manufacture a hexchem-engineered supersoldier - the Zaun Amorphous Combatant. Combining brute strength with limitless flexibility, he is a versatile juggernaut: a creative fighter who bounces over obstacles and...",
                "title": "the Secret Weapon",
                "id": 154,
                "key": "Zac",
                "name": "Zac"
            },
            "157": {
                "blurb": "Yasuo is a man of resolve, an agile swordsman who wields the wind itself to cut down his foes. This once-proud warrior has been disgraced by a false accusation and forced into a desperate fight for survival. With the world turned against him, he will do...",
                "title": "the Unforgiven",
                "id": 157,
                "key": "Yasuo",
                "name": "Yasuo"
            },
            "161": {
                "blurb": "I pass into the sudden glare. Blink. Blink, blink, blink. My eyes adjust and evaluate the landscape before me. There's a scurrying. I look down to find a small, white creature standing on its hind legs, sniffing at my body. It intrigues me...",
                "title": "the Eye of the Void",
                "id": 161,
                "key": "Velkoz",
                "name": "Vel'Koz"
            },
            "163": {
                "blurb": "Taliyah is a nomadic mage from Shurima who weaves stone with energetic enthusiasm and raw determination. Torn between teenage wonder and adult responsibility, she has crossed nearly all of Valoran on a journey to learn the true nature of her growing...",
                "title": "the Stoneweaver",
                "id": 163,
                "key": "Taliyah",
                "name": "Taliyah"
            },
            "164": {
                "blurb": "Weaponized to execute outside the boundaries of the law, Camille Ferros is an elegant and elite operative who ensures the commerce of the Piltover machine with its Zaunite underbelly runs smoothly. Raised among manners and money, she is the Principal...",
                "title": "the Steel Shadow",
                "id": 164,
                "key": "Camille",
                "name": "Camille"
            },
            "201": {
                "blurb": "Would you like a bedtime story? Grandma, I\'m too old for that. You\'re never too old to be told a story. The girl reluctantly crawls into bed and waits, knowing she won\'t win this battle. A bitter wind howls outside...",
                "title": "the Heart of the Freljord",
                "id": 201,
                "key": "Braum",
                "name": "Braum"
            },
            "202": {
                "blurb": "Art requires a certain...cruelty. Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council, the serial killer now works as their cabal's assassin...",
                "title": "the Virtuoso",
                "id": 202,
                "key": "Jhin",
                "name": "Jhin"
            },
            "203": {
                "blurb": "Tell me again, little Lamb, which things are ours to take? All things, Dear Wolf. Separate, but never parted, Kindred represents the twin essences of death. Lamb's arrow offers a swift release for those who accept their fate. Wolf hunts...",
                "title": "The Eternal Hunters",
                "id": 203,
                "key": "Kindred",
                "name": "Kindred"
            },
            "222": {
                "blurb": "Jinx lives to wreak havoc without a thought for the consequences, leaving a trail of mayhem and panic in her wake. A manic and impulsive criminal, she despises nothing more than boredom, and gleefully brings her own volatile brand of pandemonium to the...",
                "title": "the Loose Cannon",
                "id": 222,
                "key": "Jinx",
                "name": "Jinx"
            },
            "223": {
                "blurb": "The whole world's a river, and I'm its king. Tahm Kench travels Runeterra's waterways, feeding his insatiable appetite with the misery of the unsuspecting. The singularly charming gourmand savors every moment of his victims' suffering.  A deal...",
                "title": "the River King",
                "id": 223,
                "key": "TahmKench",
                "name": "Tahm Kench"
            },
            "236": {
                "blurb": "Lucian wields relic weapons imbued with ancient power and stands a stalwart guardian against the undead. His cold conviction never wavers, even in the face of the maddening horrors he destroys beneath his hail of purifying fire. Lucian walks alone on a...",
                "title": "the Purifier",
                "id": 236,
                "key": "Lucian",
                "name": "Lucian"
            },
            "238": {
                "blurb": "Zed is the first ninja in 200 years to unlock the ancient, forbidden ways. He defied his clan and master, casting off the balance and discipline that had shackled him all his life. Zed now offers power to those who embrace knowledge of the shadows, and...",
                "title": "the Master of Shadows",
                "id": 238,
                "key": "Zed",
                "name": "Zed"
            },
            "240": {
                "blurb": "A sane man would run . . . but I ain't the runnin' kind! A warrior as fearless as he is ornery, Kled is a popular folk hero in Noxus. Embodying the furious bravado of his nation, he is an icon beloved by the empire's soldiers, distrusted by...",
                "title": "the Cantankerous Cavalier",
                "id": 240,
                "key": "Kled",
                "name": "Kled"
            },
            "245": {
                "blurb": "A prodigy from the rough streets of Zaun, Ekko manipulates time to spin any situation to his advantage. Using his own invention, the Zero-Drive, he explores the branching possibilities of reality. As well as experimenting with multi-dimensional...",
                "title": "the Boy Who Shattered Time",
                "id": 245,
                "key": "Ekko",
                "name": "Ekko"
            },
            "254": {
                "blurb": "To Vi, every problem is just another brick wall to punch through with her gigantic hextech gauntlets. Though she grew up on the wrong side of the law, Vi now uses her criminal know-how to serve Piltover's police force. Vi's brash attitude, abrasive...",
                "title": "the Piltover Enforcer",
                "id": 254,
                "key": "Vi",
                "name": "Vi"
            },
            "266": {
                "blurb": "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's seemingly...",
                "title": "the Darkin Blade",
                "id": 266,
                "key": "Aatrox",
                "name": "Aatrox"
            },
            "267": {
                "blurb": "Nami channels the primal energies of the ocean, harnessing its mystical restorative properties and commanding the raw power of the tides themselves. Though many doubted her, Nami had the bravery and determination to take on a dangerous quest when no one...",
                "title": "the Tidecaller",
                "id": 267,
                "key": "Nami",
                "name": "Nami"
            },
            "268": {
                "blurb": "Shurima was once the glory of Runeterra. I will make it so again. Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his...",
                "title": "the Emperor of the Sands",
                "id": 268,
                "key": "Azir",
                "name": "Azir"
            },
            "412": {
                "blurb": "The mind is a wondrous thing to tear apart. Sadistic and cunning, Thresh is a restless spirit who prides himself on tormenting mortals and breaking them with slow, excruciating inventiveness. His victims suffer far beyond the point of death...",
                "title": "the Chain Warden",
                "id": 412,
                "key": "Thresh",
                "name": "Thresh"
            },
            "420": {
                "blurb": "I'm not big on sermons. Broken bones teach better lessons. Illaoi\'s powerful physique is dwarfed only by her indomitable faith. As the prophet of the Great Kraken, she uses a huge, golden idol to rip her foes' spirits from their bodies and...",
                "title": "the Kraken Priestess",
                "id": 420,
                "key": "Illaoi",
                "name": "Illaoi"
            },
            "421": {
                "blurb": "The largest and fiercest of her species, Rek'Sai is a merciless predator that tunnels through the earth to ambush and devour her prey. Her insatiable hunger has laid waste to entire regions of the once-great Shuriman empire. Merchants, traders and armed...",
                "title": "the Void Burrower",
                "id": 421,
                "key": "RekSai",
                "name": "Rek'Sai"
            },
            "427": {
                "blurb": "Ivern Bramblefoot, known to many as the Green Father, is a peculiar half man, half tree who roams Runeterra's forests, cultivating life everywhere he goes. He knows the secrets of the natural world, and holds deep friendships with all things that grow...",
                "title": "the Green Father",
                "id": 427,
                "key": "Ivern",
                "name": "Ivern"
            },
            "429": {
                "blurb": "When wronged, we seek justice. When hurt, we strike back. When betrayed, the Spear of Vengeance strikes! A specter of wrath and retribution, Kalista is the undying spirit of vengeance, an armored nightmare summoned from the Shadow Isles to...",
                "title": "the Spear of Vengeance",
                "id": 429,
                "key": "Kalista",
                "name": "Kalista"
            },
            "432": {
                "blurb": "Bard travels through realms beyond the imagination of mortal beings. Some of Valoran's greatest scholars have spent their lives trying to understand the mysteries he embodies. This enigmatic spirit has been given many names throughout the history of...",
                "title": "the Wandering Caretaker",
                "id": 432,
                "key": "Bard",
                "name": "Bard"
            },
            "497": {
                "blurb": "As mercurial as he is charming, Rakan is an infamous vastayan troublemaker and the greatest battle-dancer in Lhotlan tribal history. To the humans of the Ionian highlands, his name has long been synonymous with wild festivals, uncontrollable parties...",
                "title": "The Charmer",
                "id": 497,
                "key": "Rakan",
                "name": "Rakan"
            },
            "498": {
                "blurb": "Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way. Xayah fights alongside her partner and lover, Rakan, to...",
                "title": "the Rebel",
                "id": 498,
                "key": "Xayah",
                "name": "Xayah"
            }
        },
        "version": "7.10.1",
        "type": "champion"
    }

    
    return {
        getChamps: function(){
            return champsInfo
        }
    }

}]);

