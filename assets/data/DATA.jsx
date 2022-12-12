const data= [
  {
    "year": "1540",
    "location": "Northern Mexico",
    "date": "February 23",
    "description": "Spanish conquistador Francisco Vázquez de Coronado embarks on an expedition into the unexplored territory north of colonized Mexico to search for the fabled Seven Cities of Gold. The voyage lasts more than two years, during which Coronado travels through much of the American Southwest and as far north as present-day Kansas. His party is the first to document the geography and indigenous peoples of significant portions of the West.",
    "media": { 
      "img": require('../images/1500-Coronado.jpg'),
      "alt": "Coronado Sets Out to the North, by American artist Frederic Remington"
    }
  },
  {
    "year": "1579",
    "location": "Drakes Bay, California",
    "date": "June 17",
    "description": "English explorer Francis Drake lands his expedition on the Pacific coast of North America in present-day Drakes Bay, California, claiming all of the land not already under Spanish control for the English Crown.",
    "media": { 
      "img": require("../images/1579-Drakes_Bay_CA.jpg"),
      "alt": "Drake's landing in California, engraving published 1590 by Theodor de Bry"
    }
  },
  {
    "year": "1598",
    "location": "Rio Grande River, New Mexico",
    "date": "April",
    "description": "Spanish explorer Juan de Oñate establishes Nuevo México in the region around the upper Rio Grande as the northernmost province of New Spain, serving as its first colonial governor.",
    "media": { 
      "img": require("../images/1598-Juan_de_Onate.jpg"),
      "alt": "Equestrian Statue of Juan De Onate at the Onate Monument Center, Alcalde, NM"
    }
  },
  {
    "year": "1607",
    "location": "Santa Fe, New Mexico",
    "date": "",
    "description": "Spanish colonists establish the city of Santa Fe in the province of Santa Fe de Nuevo México.",
    "media": { 
      "img": require("../images/1607-Flag_of_Santa_Fe.png"),
      "alt": "Flag of Santa Fé de Nuevo México"
    }
  },
  {
    "year": "1610",
    "location": "Santa Fe, New Mexico",
    "date": "",
    "description": "The Palace of the Governors is built in Santa Fe, the new capital of Nuevo México. Today it is the oldest continuously occupied public building in the United States.",
    "media": { 
      "img": require("../images/1610-Palace_of_the_Governors_at_night.jpg"),
      "alt": "Night view of The Palace of the Governors, reflecting the Christmas lights of Santa Fe Plaza in Santa Fe, New Mexico"
    }
  },
  {
    "year": "1680",
    "location": "New Mexico",
    "date": "August 10",
    "description": "An alliance of Puebloans coordinated by Popé initiates a mass revolt against Spanish colonists occupying what is now northern New Mexico in an effort to abolish European influence in the area. More than 400 people are killed and the Spanish are unable to reconquer Santa Fe for another 12 years.",
    "media": { 
      "img": require("../images/1680-Po_Pay.png"),
      "alt": "A statue of Po' Pay at the U.S. Capitol Building Visitor Center in Washington, D.C."
    }
  },
  {
    "year": "1692",
    "location": "Santa Fe, New Mexico",
    "date": "",
    "description": "Santa Fe is formally repossessed by the Spanish after Diego de Vargas negotiates a peace with the Pueblo Indians. The following six years witness a difficult reinstatement of Spanish and Franciscan rule over the Pueblos, including another revolt in 1696, which is successfully countered by De Vargas and his forces.",
    "media": { 
      "img": require("../images/1692-Diego_deVargas.jpeg"),
      "alt": "Oil on canvas portrait of Diego de Vargas, by Julio Barrera, from the collection of the Palace of the Governors"
    }
  },
  {
    "year": "1718",
    "location": "The Alamo, Spanish Texas",
    "date": "May 1",
    "description": "The Misión San Antonio de Valero, later known as The Alamo, is founded in Spanish Texas to undermine French claims in the area. Four days later, the Presidio San Antonio de Béxar is established nearby to protect the new town of San Antonio de Béxar.",
    "media": { 
      "img": require("../images/1718-The_Alamo.jpg"),
      "alt": "A postcard painting of The Alamo"
    }
  },
  {
    "year": "1743",
    "location": "Fort Pierre, French Louisiana (current day South Dakota)",
    "date": "March 30",
    "description": "François and Louis-Joseph Gaultier de La Vérendrye, on expedition west from Quebec, bury an inscribed lead plate near present-day Fort Pierre, South Dakota, claiming the area for France." 
  },
  {
    "year": "1759",
    "location": "Red River, Spanish Texas",
    "date": "October 7",
    "description": "A Spanish attack on a fortified Indian village along the Red River in what is now Texas is repulsed and defeated by allied Wichita, Comanche, and Tonkawa tribes.",
    "media": { 
      "img": require("../images/1759-Wichita_Indian_Village.jpg"),
      "alt": "The Wichita were farming Indians who lived in beehive-shaped houses thatched with grass and surrounded by extensive maize fields; they were skilled farmers who traded agricultural products to nomadic tribes in exchange for meat."
    }
  },
  {
    "year": "1762",
    "location": "French Louisiana",
    "date": "November 13",
    "description": "France transfers all of its territory west of the Appalachian Mountains to Spain in a secret treaty, Treaty of Fontainebleau, just months prior to the negotiations that end the French and Indian War.",
    "media": { 
      "img": require("../images/1762-Treaty_of_Fontainebleau.png"),
      "alt": "Map showing British territorial gains in North America following the Treaty of Paris in pink, and Spanish territorial gains after the Treaty of Fontainebleau in yellow"
    }
  },
  {
    "year": "1769",
    "location": "San Diego, Las Californias",
    "date": "July 16",
    "description": "Spanish Franciscans, led by friar Junípero Serra, establish Mission San Diego de Alcalá in Las Californias. By 1823, the missionaries successfully plant a series of 20 more missions along the coast of what becomes the Spanish province of Alta California. These missions bring European culture to the indigenous peoples of California, but also enable a serious decline of from one-third to one-half of the indigenous population there during the Mission period.",
    "media": { 
      "img": require("../images/1769-Primitive_Plow.jpg"),
      "alt": "Indigenous farmers preparing a field for planting near Mission San Diego de Alcalá, drawing by A.B. Dodge, 1920"
    }
  },
  {
    "year": "1775",
    "location": "Tuscón, Spanish Arizona",
    "date": "August 20",
    "description": "A company of Spanish soldiers establishes a site for the Presidio San Agustín del Tucsón in what is now Tucson, Arizona.",
    "media": { 
      "img": require("../images/1775-Presidio_sketch.jpg"),
      "alt": "A sketch from Tom Sheridan’s Los Tucsonenses shows the Presidio San Agustín del Tucsón's enclosed space of approximately 11 acres"
    }
  },
  {
    "year": "1776",
    "location": "Old Spanish Trail",
    "date": "July 29",
    "description": "Two Franciscan priests lead the Domínguez–Escalante expedition west from Santa Fe in an attempt to find an overland route to the Spanish Catholic mission in Monterey. Though they fail to reach Las Californias, they explore previously unknown areas of the Colorado Plateau, become the first Europeans to enter the Great Basin, and establish the eastern section of what will later become the Old Spanish Trail.",
    "media": { 
      "img": require("../images/1776-Escalante.png"),
      "alt": "Father Escalante Discovers Utah Valley, by E. Keith Eddington"
    }
  },
  {
    "year": "1779",
    "location": "Pueblo County, Spanish Colorado",
    "date": "September 3",
    "description": "Comanche Indian leader Cuerno Verde is killed in combat with Spanish forces led by Juan Bautista de Anza in what is now Pueblo County, Colorado.",
    "media": { 
      "img": require("../images/1779-Juan_Bautista_de_Anza.jpg"),
      "alt": "Portrait of Juan Bautista de Anza, by Fray Orci, 1774, Mexico City)"
    }
  },
  {
    "year": "1783",
    "location": "The Treaty of Paris",
    "date": "September 3",
    "description": "The Treaty of Paris is signed by Great Britain and the United States of America, ending the American Revolutionary War and establishing the United States as an independent country.",
    "media": { 
      "img": require("../images/1783-Treaty_of_Paris.jpg"),
      "alt": "Treaty of Paris, by Benjamin West, 1783; depicts the American delegation at the Treaty of Paris (left to right): John Jay, John Adams, Benjamin Franklin, Henry Laurens, and William Temple Franklin; the British delegation refused to pose, and the painting was never completed"
    }
  },
  {
    "year": "1792",
    "location": "Seattle, British Pacific Northwest",
    "date": "May 19",
    "description": "Captain George Vancouver's expedition drops anchor near present-day Seattle and proceeds to name Puget Sound, Mount Rainier, Vashon Island, and Restoration Point. Vancouver and his expedition are the first Europeans to explore the area, claiming it for the British Crown, along with much of the Pacific Northwest coast, including Vancouver Island and the Columbia River.",
    "media": { 
      "img": require("../images/1792-Vancouver_Rainier.jpg"),
      "alt": "'Mount Rainier from the south Part of Admiralty Inlet'; the mountain was first sighted by Vancouver during his exploration of Puget Sound in the spring of 1792"
    }
  },
  {
    "year": "1800",
    "location": "French Louisiana",
    "date": "October 1",
    "description": "Under pressure from Napoléon Bonaparte, the Kingdom of Spain transfers the colony of Louisiana back to the French Republic with the secret Third Treaty of San Ildefonso." 
  },
  {
    "year": "1803",
    "location": "Louisiana Territory",
    "date": "April 1",
    "description": "The United States agrees to buy the colony of La Louisiane from the French Republic for the price of $15 million ($350 million in 2022 USD when adjusted for inflation).",
    "media": { 
      "img": require("../images/1803-Louisiana_Purchase.jpg"),
      "alt": "Louisiana and the Louisiana Purchase, Government Printing Office, 1912, Map No. 4"
    }
  },
  {
    "year": "1803",
    "location": "The Louisiana Purchase",
    "date": "December 20",
    "description": "The United States officially takes control of Louisiana, an enormous area of imprecise boundaries extending from the Mississippi River west to the Rocky Mountains, more than doubling the land area of the new nation." 
  },
  {
    "year": "1804",
    "location": "St. Charles, Missouri",
    "date": "May 14",
    "description": "The Lewis and Clark expedition sets out to explore and chart the territory acquired in the Louisiana Purchase. Officially titled the Corps of Discovery, the party canoes up the Missouri River from Saint Charles, spending the winter at Fort Mandan on Indian territory in what is now North Dakota.",
    "media": { 
      "img": require("../images/1804-Fort_Mandan.jpg"),
      "alt": "Reconstruction of Fort Mandan, Lewis and Clark Memorial Park, North Dakota"
    }
  },
  {
    "year": "1805",
    "location": "Astoria, Oregon",
    "date": "November 7",
    "description": "Lewis and Clark sight the Pacific Ocean for the first time, near the mouth of the Columbia River. The expedition winters at Fort Clatsop on the south side of the river, near present-day Astoria, Oregon.",
    "media": { 
      "img": require("../images/1805-Lewis_and_Clark_Columbia.jpg"),
      "alt": "Corps of Discovery meet Chinooks on the Lower Columbia, October 1805, by Charles Marion Russel c. 1905"
    }
  },
  {
    "year": "1806",
    "location": "St. Louis, Missouri",
    "date": "July 15",
    "description": "A U.S. Army reconnaissance expedition under the command of Lieutenant Zebulon Pike departs Fort Bellefontaine near Saint Louis to explore the southern Louisiana Territory.",
    "media": { 
      "img": require("../images/1806-Zebulon_Pike.jpg"),
      "alt": "Portrait of American General and explorer Zebulon Pike, by Charles Wilson Peale"
    }
  },
  {
    "year": "1806",
    "location": "St. Louis, Missouri",
    "date": "September 23",
    "description": "Lewis and Clark return to Saint Louis after a journey of nearly 6,000 total miles; in the past two and a half years, the party has made contact with over 70 Indian tribes and produced 140 maps, as well as documented more than 200 new plant and animal species.",
    "media": { 
      "img": require("../images/1806-Lewis_and_Clark.jpg"),
      "alt": "Lewis and Clark"
    }
  },
  {
    "year": "1807",
    "location": "Santa Fe, New Mexico",
    "date": "February 26",
    "description": "Spanish cavalrymen arrest the Pike Expedition in the province of Santa Fe de Nuevo México (now southern Colorado).",
    "media": { 
      "img": require("../images/1807-Pike_Entering_Santa_Fe.jpg"),
      "alt": "Zebulon Pike Entering Santa Fe, by Frederic Remington"
    }
  },
  {
    "year": "1808",
    "location": "New York, New York",
    "date": "April 6",
    "description": "German immigrant John Jacob Astor incorporates his American Fur Company.",
    "media": { 
      "img": require("../images/1808-John_Jacob_Astor.jpg"),
      "alt": "Portrait of John Jacob Astor, by John Wesley Jarvis"
    }
  },
  {
    "year": "1808",
    "location": "Sibley, Missouri",
    "date": "November 10",
    "description": "The Treaty of Fort Clark is signed, in which the Osage Nation cedes all of its territory east of Fort Clark and north of the Arkansas River to the United States.",
    "media": { 
      "img": require("../images/1808-Treaty_of_Fort_Clark.png"),
      "alt": "Mural depicting the Treaty of Fort Clark, at the Missouri State Capitol, Jefferson City, Missouri"
    }
  },
  {
    "year": "1810",
    "location": "Mexico City, Mexico",
    "date": "September 16",
    "description": "Mexican priest Miguel Hidalgo y Costilla proclaims the independence of Mexico from the Kingdom of Spain.",
    "media": { 
      "img": require("../images/1810-Miguel_Hidalgo_y_Costilla.png"),
      "alt": "Portrait of Miguel Hidalgo"
    }
  },
  {
    "year": "1811",
    "location": "Astoria, Oregon",
    "date": "May 1",
    "description": "Fort Astoria is established by John Jacob Astor's Pacific Fur Company at the mouth of the Columbia River. It is the first American settlement on the Pacific coast.",
    "media": { 
      "img": require("../images/1811-Fort_Astoria_1813.jpg"),
      "alt": "Fort Astoria in 1813"
    }
  },
  {
    "year": "1811",
    "location": "Vancouver, British Columbia, Canada",
    "date": "June 15",
    "description": "Most of the crew of the Tonquin, one of Astor's ships trading on Vancouver Island, is massacred by Tla-o-qui-aht Indians after the captain insults a chief. The ship is scuttled the following day in a magazine explosion that kills at least 100 natives.",
    "media": { 
      "img": require("../images/1811-Tonquin.png"),
      "alt": "The Tonquin being attacked off the shore of Vancouver Island in 1811"
    }
  },
  {
    "year": "1812",
    "location": "Sonoma County, California",
    "date": "March 1",
    "description": "Fort Ross is established by Russian traders on the California coast as the hub of the southernmost colony in Russian America.",
    "media": { 
      "img": require("../images/1812-Fort_Ross.jpg"),
      "alt": "A view of Fort Ross in 1828, by A. B. Duhaut-Cilly, from the archives of the Fort Ross Historical Society"
    }
  },
  {
    "year": "1812",
    "location": "New Orleans, Louisiana",
    "date": "April 30",
    "description": "Louisiana is admitted as the 18th U.S. state, and the first to include land west of the Mississippi River. It is also the first state organized from the Louisiana Purchase territory, the rest of which is soon renamed the Missouri Territory.",
    "media": { 
      "img": require("../images/1812-Louisiana_State_Seal.png"),
      "alt": "The Great Seal of the State of Louisiana"
    }
  },
  {
    "year": "1812",
    "location": "Pembina, North Dakota",
    "date": "September 4",
    "description": "Scottish and Irish settlers led by Miles Macdonell formally take possession of the Red River Colony. They construct Fort Daer near present-day Pembina, North Dakota, which becomes the first permanent European-American settlement in the Dakotas.",
    "media": { 
      "img": require("../images/1812-Miles_MacDonell.jpg"),
      "alt": "A sketch portrait of Miles Macdonnell (1767 – 28 June 1828), the first Governor of the Red River Colony (or, Assiniboia), a 19th-century Scottish settlement located in present-day Manitoba and North Dakota"
    }
  },
  {
    "year": "1812",
    "location": "South Pass City, Wyoming",
    "date": "October 21",
    "description": "Carrying word of the fate of the Tonquin to Saint Louis, seven men of the Pacific Fur Company, led by Robert Stuart, become the first European Americans to cross the Great Continental Divide at South Pass, in present-day Wyoming. Later in the century, the pass will be used by half a million westward migrants as part of the main route of several emigrant trails.",
    "media": { 
      "img": require("../images/1812-Continental_Divide.png"),
      "alt": "The Continental Divide in North America in red, among other major hydrological divides"
    }
  },
  {
    "year": "1813",
    "location": "San Antonia, Texas",
    "date": "March 29",
    "description": "During the Mexican War of Independence, a joint expedition of Mexican and American filibusters penetrates deep into Spanish Texas and defeats a Royalist army outside San Antonio de Béxar at the Battle of Rosillo Creek. Provincial governor Manuel María de Salcedo is executed five days later." 
  },
  {
    "year": "1817",
    "location": "Arkansas Country",
    "date": "December 25",
    "description": "Construction begins on a frontier military post known as Fort Smith in what is now Arkansas.",
    "media": { 
      "img": require("../images/1817-Fort_Smith.jpg"),
      "alt": "The remains of the foundation of the first fort built at Fort Smith, which was replaced by the second fort in 1838, both forts are part of the Fort Smith National Historic Site in Fort Smith, Arkansas"
    }
  },
  {
    "year": "1818",
    "location": "Washington, D.C. and London, England",
    "date": "October 20",
    "description": "The Treaty of 1818 establishes the 49th parallel from Lake of the Woods west to the Rocky Mountains as the boundary between the United States and British North America.",
    "media": { 
      "img": require("../images/1818-Treaty_of_1818.png"),
      "alt": "A map of US territorial acquisitions, the Treaty of 1818 involved the green and blue areas at the top of the map along the present day Canada-US border"
    }
  },
  {
    "year": "1819",
    "location": "Arkansas",
    "date": "March 2",
    "description": "The Arkansas Territory is organized.",
    "media": { 
      "img": require("../images/1819-Arkansas_Territory.png"),
      "alt": "The Great Seal of the Territory of Arkansas"
    }
  },
  {
    "year": "1819",
    "location": "Council Bluff, Nebraska",
    "date": "September 17",
    "description": "Intending to build forts along the Missouri River, a U.S. Army expedition led by Colonel Henry Atkinson and Major Stephen Harriman Long arrives by paddle steamer at Council Bluff on the river's west bank, in present-day Nebraska. It establishes what later becomes Fort Atkinson, the first Army outpost in the region, but the expedition stalls there over the winter and collapses entirely in the spring.",
    "media": { 
      "img": require("../images/1819-Long_meets_the_Pawnee.jpg"),
      "alt": "Major Long (left) meets with the Pawnees at Council Bluff, Nebraska, 1819"
    }
  },
  {
    "year": "1820",
    "location": "Missouri",
    "date": "March 5",
    "description": "Congress passes the Missouri Compromise, prohibiting slavery in the unorganized territory north of 36.5° latitude and west of the Mississippi River, except within the boundaries of the proposed state of Missouri, while permitting the admission of Maine as a free state. Largely devised by Speaker of the House Henry Clay of Kentucky, it is a landmark agreement in the debate over slavery in the West.",
    "media": { 
      "img": require("../images/1820-James_Tallmadge.jpg"),
      "alt": "New York Congressional Representative James Tallmadge Jr., the author of the antislavery amendment to Missouri statehood"
    }
  },
  {
    "year": "1820",
    "location": "Colorado and the Great Plains",
    "date": "May 1",
    "description": "Major Stephen H. Long leads a scientific expedition up the Platte River, along the Front Range of the Rocky Mountains, south to the Arkansas and Canadian rivers, and finally east to present-day Fort Smith, Arkansas. Among the first expeditions to bring American artists and scientists into the West, the party includes painter Samuel Seymour, artist-naturalist Titian Peale, and physician Edwin James, who leads the first recorded ascent of Pikes Peak. Long's report, published in 1823, promotes the idea of the Great Plains as the 'Great American Desert'.",
    "media": { 
      "img": require("../images/1820-Prairie_Dog-Titian_Ramsay_Peale.jpg"),
      "alt": "Prairie Dog, by Titian Ramsay Peale, c. 1819–1821"
    }
  },
  {
    "year": "1821",
    "location": "Louisiana Purchase",
    "date": "February 22",
    "description": "The Adams–Onís Treaty takes effect exactly two years after its initial signing, defining a new border between the territory of New Spain and the United States and further securing American claims to the Louisiana Purchase and the Oregon Country.",
    "media": { 
      "img": require("../images/1821-Adams_Onis_map.png"),
      "alt": "A map of the Adams-Onís Treaty lines, showing the official acquisition of Florida by the United States"
    }
  },
  {
    "year": "1821",
    "location": "St. Charles, Missouri",
    "date": "August 10",
    "description": "Missouri is admitted as the 24th U.S. state.",
    "media": { 
      "img": require("../images/1821-Missouri_State_Seal.png"),
      "alt": "The Great Seal of the State of Missouri"
    }
  },
  {
    "year": "1821",
    "location": "Mexico City, Mexico and Madrid, Spain",
    "date": "August 24",
    "description": "The Kingdom of Spain finally recognizes the independence of Mexico with the signing of the Treaty of Córdoba, ending the Mexican War of Independence.",
    "media": { 
      "img": require("../images/1821-Treaty_of_Cordoba.jpg"),
      "alt": "The Treaty of Cordoba, signaling Mexico's official independence from Spain and ending the Mexican War of Independence"
    }
  },
  {
    "year": "1821",
    "location": "The Santa Fe Trail",
    "date": "September 1",
    "description": "William Becknell and a party of frontier traders leave New Franklin, Missouri bound for Santa Fe. The Becknell route will become the Santa Fe Trail.",
    "media": { 
      "img": require("../images/1821-Santa_Fe_Trail.jpg"),
      "alt": "Arrival of the caravan at Santa Fe, lithograph published c. 1844"
    }
  },
  {
    "year": "1822",
    "location": "St. Louis, Missouri",
    "date": "March 6",
    "description": "William Henry Ashley and Andrew Henry place an advertisement in the Missouri Republican for one hundred 'enterprising young men' to join a trapping expedition to the upper Missouri River. The respondents comprise 'Ashley's Hundred' many of whom, including Jedediah Smith, Jim Bridger, Hugh Glass, and Jim Beckwourth, earn reputations as famous explorers and mountain men.",
    "media": { 
      "img": require("../images/1822-James_Beckwourth.jpg"),
      "alt": "James Pierson 'Bloody Arm' Beckwourth (born Beckwith, April 26, 1798 or 1800 – October 29, 1866 or 1867), was an American mountain man, fur trader, and explorer"
    }
  },
  {
    "year": "1824",
    "location": "Washinton, DC and Moscow, Russia",
    "date": "April 17",
    "description": "The Russo-American Treaty of 1824 is signed, formally transferring Russian claims in the Pacific Northwest south of 54°40′ N latitude (what Americans had known as the Oregon Country, encompassing present day Washington and Oregon) to the United States.",
    "media": { 
      "img": require("../images/1824-Russo_American_Treaty.png"),
      "alt": "The Oregon Country/Columbia District stretched from 42°N to 54°40′N"
    }
  },
  {
    "year": "1824",
    "location": "Oklahoma",
    "date": "April 21",
    "description": "Fort Gibson is established near the confluence of the Grand River and the Arkansas River in present-day Oklahoma.",
    "media": { 
      "img": require("../images/1824-Fort_Gibson.jpg"),
      "alt": "Fort Gibson, c. 1875"
    }
  },
  {
    "year": "1824",
    "location": "Coahuila y Tejas, Mexican Texas",
    "date": "July 7",
    "description": "The first of 297 pioneer families and partnerships known as the 'Old Three Hundred' are granted land titles in American empresario Stephen F. Austin's colony in Coahuila y Tejas. They are the first American settlers of Mexican Texas under a recently reformed Mexican law.",
    "media": { 
      "img": require("../images/1824-Stephen_Austin.jpg"),
      "alt": "Marble sculpture of Stephen F. Austin, by Elisabet Ney, 1903, at the Texas State Capitol in Austin, Texas"
    }
  },
  {
    "year": "1827",
    "location": "Independence, Missouri",
    "date": "March 29",
    "description": "The town of Independence, Missouri is founded. In later years it becomes a common point of departure for pioneers journeying west on the emigrant trails." 
  },
  {
    "year": "1827",
    "location": "Fort Leavenworth, Kansas",
    "date": "May 8",
    "description": "Colonel Henry Leavenworth founds a U.S. Army cantonment later known as Fort Leavenworth above the confluence of the Little Platte and the Missouri River in present-day Kansas.",
    "media": { 
      "img": require("../images/1827-Henry_Leavenworth.jpg"),
      "alt": "Portrait of Henry Leavenworth"
    }
  },
  {
    "year": "1828",
    "location": "Oregon Country",
    "date": "July 14",
    "description": "Trapper, explorer, and mountain man Jedediah Smith and his party are attacked by Umpqua Indians in Oregon Country. Smith and three others are the only survivors.",
    "media": { 
      "img": require("../images/1828-Jeddediah_Smith.jpg"),
      "alt": "Jedediah Smith's party crossing the burning Mojave Desert during the 1826 trek to California by Frederic Remington"
    }
  },
  {
    "year": "1829",
    "location": "Old Spanish Trail",
    "date": "November 7",
    "description": "A merchant caravan led by Antonio Armijo embarks from Abiquiú, New Mexico and successfully reaches San Gabriel, California 86 days later, becoming the first to travel the length of the Old Spanish Trail.",
    "media": { 
      "img": require("../images/1829-Old_Spanish_Trail.png"),
      "alt": "Timeline: Early exploration of the Old Spanish Trail, from the National Park Service; Armijo Route is the grey 'dot-dash-dot' line originating in Abiquiu, New Mexico"
    }
  },
  {
    "year": "1830",
    "location": "Mexico D.F., Mexico",
    "date": "April 6",
    "description": "The Law of April 6, 1830 is passed by the Mexican government, which increases tariffs on American goods entering Mexico, cancels unfulfilled colonization contracts, and bans any further immigration from the United States to Mexican Texas." 
  },
  {
    "year": "1830",
    "location": "Oklahoma",
    "date": "May 28",
    "description": "The Indian Removal Act is signed into law by President Andrew Jackson, authorizing the U.S. government to negotiate the removal of Native American tribes of the southeastern United States to federal territory in what is now Oklahoma.",
    "media": { 
      "img": require("../images/1830-Andrew_Jackson.jpg"),
      "alt": "President Andrew Jackson (March 15, 1767 – June 8, 1845) was an American lawyer, planter, general, and statesman who served as the seventh president of the United States; he called for an American Indian Removal Act in his first (1829) State of the Union address"
    }
  },
  {
    "year": "1831",
    "location": "Washington, DC and Mexico City, Mexico",
    "date": "",
    "description": "Mexico ratifies the boundaries with the United States originally established by the Adams–Onís Treaty." 
  },
  {
    "year": "1832",
    "location": "California Trail",
    "date": "May 1",
    "description": "The Bonneville Expedition departs Missouri with 110 men. Over the next two years, the party explores several major river systems in present-day Wyoming, Idaho, Oregon, and Washington, and establishes an overland route to California that will later become the California Trail.",
    "media": { 
      "img": require("../images/1832-Benjamin_Louis_Eulalie_de_Bonneville.jpg"),
      "alt": "Benjamin Louis Eulalie de Bonneville (April 14, 1796 – June 12, 1878) was an American officer in the United States Army, fur trapper, and explorer in the American West"
    }
  },
  {
    "year": "1832",
    "location": "Velasco, Texas",
    "date": "June 25",
    "description": "Texian insurgents under John Austin capture Fort Velasco from Mexican infantry under Colonel Domingo de Ugartechea at the Battle of Velasco, the first true military conflict between Anglo-American settlers of Mexican Texas and the Mexican federal government." 
  },
  {
    "year": "1832",
    "location": "Pierre's Hole, Idaho",
    "date": "July17",
    "description": "Attendees of the annual fur trapper's rendezvous, the largest yet of its kind, clash with local Indians at the Battle of Pierre's Hole.",
    "media": { 
      "img": require("../images/1832-Fur_Trappers_Rendevouz.jpg"),
      "alt": "A typical scene at the Annual Fur Trappers Convention"
    }
  },
  {
    "year": "1833",
    "location": "Arkansas River, Colorado",
    "date": "May 1",
    "description": "Frontier trader William Bent establishes Bent's Fort on the north bank of the Arkansas River, along the Santa Fe Trail.",
    "media": { 
      "img": require("../images/1833-Bents_Fort.jpg"),
      "alt": "Bent's Old Fort National Historic Site in La Junta, Colorado "
    }
  },
  {
    "year": "1834",
    "location": "Laramie, Wyoming",
    "date": "",
    "description": "Fort Laramie is founded by William Sublette in what is now eastern Wyoming as a private fur-trading post named Fort William.",
    "media": { 
      "img": require("../images/1834-Fort_Laramie.jpg"),
      "alt": "Fort William, the first Fort Laramie, as it looked prior to 1840, painted from memory by Alfred Jacob Miller"
    }
  },
  {
    "year": "1834",
    "location": "Snake River, Idaho",
    "date": "July 31",
    "description": "Fort Hall is established on the Snake River in present-day Idaho.",
    "media": { 
      "img": require("../images/1834-Fort_Hall_Replica.jpeg"),
      "alt": "Replica of the first Fort Hall in Pocatello, ID"
    }
  },
  {
    "year": "1835",
    "location": "Fort Vasquez, Denver, Colorado",
    "date": "May 1",
    "description": "Frontier traders Louis Vasquez and Andrew Sublette establish Fort Vasquez on the South Platte River, 35 miles northeast of present-day Denver, Colorado.",
    "media": { 
      "img": require("../images/1835-Fort_Vasquez.jpeg"),
      "alt": "Fort Vasquez in Platteville, Colorado"
    }
  },
  {
    "year": "1835",
    "location": "Gonzales, Texas",
    "date": "October 2",
    "description": "The Texas Revolution begins when a Texian militia successfully defends against the confiscation of a cannon by Mexican soldiers at the Battle of Gonzales.",
    "media": { 
      "img": require("../images/1835-Come_And_Take_It_Mural.jpg"),
      "alt": "Museum mural of Texian soldiers fighting in the Battle of Gonzales, which was referred to as the 'Lexington of Texas' because it was the first battle of the Texas Revolution"
    }
  },
  {
    "year": "1835",
    "location": "Mexico D.F., Mexico",
    "date": "October 23",
    "description": "The Mexican Constitution of 1824 is repealed, abolishing the former federalist system of government and replacing it with a provisional centralist system under President-General Antonio López de Santa Anna. The move further alienates Anglo-American settlers in Mexican Texas.",
    "media": { 
      "img": require("../images/1835-Antonio_Lopez_de_Santa_Anna.png"),
      "alt": "Antonio de Padua María Severino López de Santa Anna y Pérez de Lebrón (21 February 1794 – 21 June 1876), usually known as Santa Anna or López de Santa Anna, was a Mexican politician and general"
    }
  },
  {
    "year": "1835",
    "location": "San Antonio, Texas",
    "date": "December 10",
    "description": "The two-month Siege of Béxar culminates in the surrender of the last remaining Mexican garrison in Texas, under Martín Perfecto de Cos, to the Texian Army under Edward Burleson. Santa Anna immediately prepares to march overland to recapture San Antonio.",
    "media": { 
      "img": require("../images/1835-Ed_Burleson.jpg"),
      "alt": "Edward Burleson (December 15, 1798 – December 26, 1851) was the third vice president of the Republic of Texas"
    }
  },
  {
    "year": "1836",
    "location": "Washington, D.C.",
    "date": "February 25",
    "description": "Samuel Colt is granted a patent for his invention of a 'revolving gun'. Colt firearms eventually become widely used in the West.",
    "media": { 
      "img": require("../images/1836-Colt_Paterson_Belt_2nd_Model.jpg"),
      "alt": "Colt Paterson 2nd belt model"
    }
  },
  {
    "year": "1836",
    "location": "The Alamo, San Antonio, Texas",
    "date": "March 6",
    "description": "Following a 13-day siege, Mexican troops under Santa Anna storm the Alamo Mission in San Antonio, killing all but a handful of its more than 200 Texian defenders, including Jim Bowie and Davy Crockett.",
    "media": { 
      "img": require("../images/1836-David_Crockett.jpg"),
      "alt": "Portrait of David Crockett, by Chester Harding c. 1834"
    }
  },
  {
    "year": "1836",
    "location": "Goliad, Texas",
    "date": "March 27",
    "description": "More than 450 captured Texian soldiers are executed by the Mexican army at the Goliad massacre.",
    "media": { 
      "img": require("../images/1836-Goliad_Executions.jpg"),
      "alt": "Goliad Executions, by Norman Price, from Texas State Archives And Library Commission"
    }
  },
  {
    "year": "1836",
    "location": "Pasadena, Texas",
    "date": "April 21",
    "description": "Texians under General Sam Houston surprise and defeat the Mexican army at the Battle of San Jacinto, ending the Texas Revolution.",
    "media": { 
      "img": require("../images/1836-The_Battle_of_San_Jacinto.jpg"),
      "alt": "The Battle of San Jacinto, by Henry Arthur McArdle c. 1895"
    }
  },
  {
    "year": "1836",
    "location": "Velasco, Texas",
    "date": "May 2",
    "description": "Texians declare the independence of the Republic of Texas from Mexico. On May 14, they force captured General Antonio López de Santa Anna to sign the Treaties of Velasco, though Mexico never ratifies these treaties.",
    "media": { 
      "img": require("../images/1836-Washington_on_the_Brazos_Monument.jpg"),
      "alt": "Replica of the building at Washington-on-the-Brazos where the Texas Declaration was signed; an inscription reads: 'Here a Nation was born.'"
    }
  },
  {
    "year": "1836",
    "location": "Little Rock, Arkansas",
    "date": "June 15",
    "description": "Arkansas is admitted as the 25th U.S. state.",
    "media": { 
      "img": require("../images/1836-Arkansas_State_Seal.png"),
      "alt": "The Great Seal of the State of Arkansas"
    }
  },
  {
    "year": "1837",
    "location": "Fort Leavenworth, Kansas",
    "date": "February 15",
    "description": "The Platte Purchase is approved, adding more than 3,000 square miles of former Indian lands to the northwest corner of the state of Missouri in direct violation of the Missouri Compromise.",
    "media": { 
      "img": require("../images/1837-Platte_Purchase.png"),
      "alt": "The Platte Purchase region (highlighted in red)"
    }
  },
  {
    "year": "1838",
    "location": "Kansas City, Missouri",
    "date": "September 15",
    "description": "Rural landowners clash with immigrant Mormons near Kansas City, Missouri in a series of violent episodes later called the Mormon War, eventually forcing their complete expulsion from the state.",
    "media": { 
      "img": require("../images/1838-Danites_Charge.jpg"),
      "alt": "'Charge of the Danites' in the 1838 Mormon War"
    }
  },
  {
    "year": "1839",
    "location": "Tyler, Texas",
    "date": "July 15",
    "description": "Militia forces of the Republic of Texas win a decisive victory over Cherokee and Delaware Indians at the Battle of the Neches, the main engagement of the Cherokee War of 1838–1839." 
  },
  {
    "year": "1840",
    "location": "San Antonio, Texas",
    "date": "March 19",
    "description": "In the Council House Fight, a delegation of 33 Comanche chiefs and warriors is slaughtered by Texan militiamen while attempting to negotiate the return of captive white settlers at a peace conference in San Antonio.",
    "media": { 
      "img": require("../images/1840-San_Antonio_Plaza.jpg"),
      "alt": "The Plaza and the Council House in San Antonio, Texas"
    }
  },
  {
    "year": "1840",
    "location": "Belleview, Iowa",
    "date": "April 1",
    "description": "Political rivalries in the river town of Bellevue, Iowa Territory culminate in a shootout in front of the town hotel that leaves seven people dead.",
    "media": { 
      "img": require("../images/1840-Bellevue_Iowa_in_1848.png"),
      "alt": "Illustration of Bellevue, Iowa viewed from the Mississippi in 1848"
    }
  },
  {
    "year": "1841",
    "location": "Sacramento, California",
    "date": "June 18",
    "description": "Swiss pioneer John Sutter receives title to nearly 50,000 acres of land surrounding the confluence of the Sacramento and American rivers in the Mexican province of Alta California, upon which he founds a colony he names 'New Helvetia'. In December, Sutter purchases the Russian settlement at Fort Ross and uses its building materials to construct a fort on the site of present-day Sacramento.",
    "media": { 
      "img": require("../images/1841-Johann_August_Sutter.jpg"),
      "alt": "John Augustus Sutter (February 23, 1803 – June 18, 1880), born Johann August Sutter and known in Spanish as Don Juan Sutter, was a Swiss immigrant of Mexican and American citizenship, known for establishing Sutter's Fort in the area that would eventually become Sacramento, California, the state's capital"
    }
  },
  {
    "year": "1842",
    "location": "San Antonio, Texas",
    "date": "March 5",
    "description": "Mexican troops led by Ráfael Vásquez invade Texas and occupy San Antonio, but are chased back across the Rio Grande two days later." 
  },
  {
    "year": "1842",
    "location": "San Antonio, Texas",
    "date": "September 18",
    "description": "Texas Rangers under Matthew Caldwell repulse the final Mexican invasion of the Republic of Texas, under Adrián Woll, in the Battle of Salado Creek. Simultaneously, a separate Texian company approaching Woll's army from the rear is overwhelmed and massacred." 
  },
  {
    "year": "1842",
    "location": "Ciudad Mier, Tamaulipas, Mexico",
    "date": "December 25",
    "description": "The Battle of Mier results when a Texan militia invades the Mexican border town of Ciudad Mier, Tamaulipas. The heavily outnumbered Texans are forced to surrender and more than 200 men are taken prisoner.",
    "media": { 
      "img": require("../images/1842-Battle_of_Mier.jpg"),
      "alt": "Map for the Battle of Mier, Mexico in 1842"
    }
  },
  {
    "year": "1843",
    "location": "Ciudad Mier, Tamaulipas, Mexico",
    "date": "March 25",
    "description": "Seventeen Texan prisoners of war are executed by the Mexican army after drawing beans in a random lottery, as punishment for their participation in a raid on the town of Ciudad Mier several months earlier.",
    "media": { 
      "img": require("../images/1843-The_Drawing_of_the_Black_Bean.jpg"),
      "alt": "The Mier Expedition - The Drawing of the Black Bean, by Frederic Remington"
    }
  },
  {
    "year": "1843",
    "location": "Champoeg, Oregon",
    "date": "May 2",
    "description": "The Champoeg Meetings culminate with a motion to organize what will become the Provisional Government of Oregon, the first locally administered European-American body of government in the Oregon Country.",
    "media": { 
      "img": require("../images/1843-Joseph_Meek.png"),
      "alt": "Joe Meek appeals for the American Flag, at Champoeg, May 2, 1843"
    }
  },
  {
    "year": "1843",
    "location": "Oregon City, Oregon",
    "date": "September 15",
    "description": "Missionary Marcus Whitman accompanies the first major wagon train west along the final leg of the Oregon Trail, establishing the viability of the route for later immigrants.",
    "media": { 
      "img": require("../images/1843-Oregon_Trail.jpg"),
      "alt": "The Oregon Trail"
    }
  },
  {
    "year": "1844",
    "location": "Oregon City, Oregon",
    "date": "",
    "description": "Oregon City, the western terminus of the Oregon Trail, becomes the first incorporated U.S. city west of the Rocky Mountains.",
    "media": { 
      "img": require("../images/1844-Oregon_City.jpg"),
      "alt": "A painting of Oregon City, by John Mix Stanley c. 1850–52"
    }
  },
  {
    "year": "1844",
    "location": "Lake Tahoe, California",
    "date": "November 25",
    "description": "The Stephens-Townsend-Murphy Party pioneers the first wagon route across the Sierra Nevada on the California Trail.",
    "media": { 
      "img": require("../images/1844-Elisha_Stephens.jpg"),
      "alt": "Elisha Stephens (1804 - September 9, 1887) was a blacksmith and trapper who was born in South Carolina"
    }
  },
  {
    "year": "1845",
    "location": "St. Louis, Missouri",
    "date": "June 1",
    "description": "John C. Frémont's third expedition with 55 men and Kit Carson as guide leaves St. Louis to 'map the source of the Arkansas River' but continues to the Sacramento Valley.",
    "media": { 
      "img": require("../images/1845-John_Charles_Fremont.png"),
      "alt": "Portrait of John Charles Frémont, by William Smith Jewett"
    }
  },
  {
    "year": "1845",
    "location": "Austin, Texas",
    "date": "June 23",
    "description": "The Republic of Texas accepts a joint resolution of the U.S. Congress to annex Texas to the United States. Mexico does not recognize the annexation." 
  },
  {
    "year": "1845",
    "location": "Washington, DC",
    "date": "July 1",
    "description": "The phrase 'manifest destiny' first appears in the Democratic Review in an essay by John L. O'Sullivan urging the annexation of Texas. The concept does not become widely popular until O'Sullivan later uses the same phrase while addressing the subject of the Oregon Country.",
    "media": { 
      "img": require("../images/1845-Manifest_Destiny.jpg"),
      "alt": "American Progress, by John Gast c. 1872, is an allegorical representation of the modernization of the new west; Columbia, a personification of the United States, is shown leading civilization westward with the American settlers; she is shown bringing light from east to west, stringing telegraph wire, holding a book, and highlighting different stages of economic activity and evolving forms of transportation"
    }
  },
  {
    "year": "1845",
    "location": "Oregon City, Oregon",
    "date": "December 19",
    "description": "The 'Lash Law' bans blacks from living in the Oregon Territory." 
  },
  {
    "year": "1845",
    "location": "Austin, Texas",
    "date": "December 29",
    "description": "The United States admits the Republic of Texas to the Union as the slave State of Texas. The boundaries of the state remain undefined.",
    "media": { 
      "img": require("../images/1845-Texas_State_Seal.png"),
      "alt": "The Great Seal of the State of Texas"
    }
  },
  {
    "year": "1846",
    "location": "Oregon City, Oregon",
    "date": "February 5",
    "description": "The Oregon Spectator becomes the first American newspaper published west of the Rocky Mountains.",
    "media": { 
      "img": require("../images/1846-Oregon_Spectator.png"),
      "alt": "Oregon Spectator newspaper cover from 1846"
    }
  },
  {
    "year": "1846",
    "location": "Brownsville, Texas",
    "date": "April 25",
    "description": "The first skirmish of the Mexican–American War takes place on the Rio Grande near present-day Brownsville, Texas.",
    "media": { 
      "img": require("../images/1846-Thornton_Skirmish.jpg"),
      "alt": "Rancho de Carricitos, the site of the Thornton skirmish"
    }
  },
  {
    "year": "1846",
    "location": "Washington, DC",
    "date": "May 13",
    "description": "The United States under President James K. Polk declares war on Mexico, formally commencing the Mexican–American War.",
    "media": { 
      "img": require("../images/1846-James_K_Polk.jpg"),
      "alt": "Daguerrotype of United States president James Knox Polk (November 2, 1795 – June 15, 1849) was the 11th president of the United States"
    }
  },
  {
    "year": "1846",
    "location": "Sonoma, California",
    "date": "June 14",
    "description": "In the Bear Flag Revolt, American insurgents led by William B. Ide seize the Sonoma Barracks from Mexican officers and declare their intention to found an independent republic in northern Alta California. The so-called 'Bear Flag Republic' lasts just 25 days, after which it is subsumed into American military efforts to control California.",
    "media": { 
      "img": require("../images/1846-William_B_Ide.png"),
      "alt": "William Brown Ide (March 28, 1796 – December 19 or 20, 1852) was an American pioneer who headed the short-lived California Republic in 1846"
    }
  },
  {
    "year": "1846",
    "location": "Washington, DC",
    "date": "June 15",
    "description": "The Oregon Treaty resolves a decades-long dispute over possession of the Oregon Country by extending the original boundary between the United States and British North America further west to the Pacific Ocean, with Vancouver Island being retained in its entirety by the British." 
  },
  {
    "year": "1846",
    "location": "Santa Fe, New Mexico",
    "date": "August 15",
    "description": "Troops under the command of General Stephen W. Kearny seize the territorial capital of Santa Fe for the United States with little resistance.",
    "media": { 
      "img": require("../images/1846-Stephen_W_Kearny.jpg"),
      "alt": "Brigadier-General Stephen Watts Kearny (August 30, 1794 – October 31, 1848) was one of the foremost antebellum frontier officers of the United States Army"
    }
  },
  {
    "year": "1846",
    "location": "San Diego, California",
    "date": "December 6",
    "description": "Kearny's Army of the West engages Mexican lancers east of San Diego at the Battle of San Pasqual.",
    "media": { 
      "img": require("../images/1846-San_Pasqual.jpg"),
      "alt": "Battle of San Pasqual, by Colonel Charles Waterhouse, US Marine Corp Reserves"
    }
  },
  {
    "year": "1846",
    "location": "Las Cruces, New Mexico",
    "date": "December 25",
    "description": "American forces under Colonel Alexander W. Doniphan defeat Mexican regulars at the Battle of El Brazito.",
    "media": { 
      "img": require("../images/1846-Battle_of_El_Brazito.jpg"),
      "alt": "Plan of the Battle of Brazito"
    }
  },
  {
    "year": "1846",
    "location": "Iowa City, Iowa",
    "date": "December 28",
    "description": "Iowa is admitted as the 29th U.S. state.",
    "media": { 
      "img": require("../images/1846-Iowa_State_Seal.png"),
      "alt": "The Great Seal of the State of Iowa"
    }
  },
  {
    "year": "1847",
    "location": "Taos, New Mexico",
    "date": "January 19",
    "description": "Governor Charles Bent of the New Mexico Territory is assassinated and scalped during the Taos Revolt.",
    "media": { 
      "img": require("../images/1847-Charles_Bent.jpg"),
      "alt": "Charles Bent (November 11, 1799 – January 19, 1847) was an American businessman and politician who served as the first civilian United States governor of the New Mexico Territory, newly acquired by the Military Governor, Stephen Watts Kearny, in September 1846"
    }
  },
  {
    "year": "1847",
    "location": "Donner Pass, California",
    "date": "February 31",
    "description": "The first of three relief missions arrives to rescue survivors of the Donner Party, who have been snowbound in California's Sierra Nevada mountains for more than three months.",
    "media": { 
      "img": require("../images/1847-Patrick_Breen_Diary.jpg"),
      "alt": "The 28th page of Patrick Breen's diary, recording his observations in late February 1847, including 'Mrs Murphy said here yesterday that thought she would Commence on Milt & eat him. I dont that she has done so yet, it is distressing.' [sic]"
    }
  },
  {
    "year": "1847",
    "location": "Salt Lake City, Utah",
    "date": "July 24",
    "description": "Brigham Young and his vanguard company of Mormons first arrive in the Salt Lake Valley in present-day Utah." 
  },
  {
    "year": "1847",
    "location": "Walla Walla, Washington",
    "date": "November 29",
    "description": "Fifteen Oregon missionaries, including mission founders Marcus and Narcissa Whitman, are murdered and 54 others taken hostage by a party of Cayuse Indians who accuse Whitman of deliberately poisoning Indians in his medical care during an outbreak of measles. The massacre sparks the Cayuse War.",
    "media": { 
      "img": require("../images/1847-Murder_of_Rev_Dr_Whitman.png"),
      "alt": "A dramatic depiction of the murder of Reverend Dr. Marcus Whitman"
    }
  },
  {
    "year": "1848",
    "location": "Columbia, California",
    "date": "January 24",
    "description": "James W. Marshall discovers gold at Sutter's Mill near Coloma, California, precipitating the California Gold Rush.",
    "media": { 
      "img": require("../images/1848-Gullgraver_1850_California.jpg"),
      "alt": "A forty-niner panning for gold in California"
    }
  },
  {
    "year": "1848",
    "location": "Guadalupe Hidalgo, Mexico",
    "date": "February 2",
    "description": "The United States and Mexico sign the Treaty of Guadalupe Hidalgo, ending the Mexican–American War. The agreement results in the cession of nearly all of the present-day Southwest, including California, to the U.S., as well as the designation of the Rio Grande as the boundary between Texas and Mexico.",
    "media": { 
      "img": require("../images/1848-Mexican_Cession.png"),
      "alt": "Shown is the area Mexico ceded to the United States in 1848, minus Texan claims; the Mexican Cession consisted of the present-day U.S. states of California, Nevada, Utah, most of Arizona, the western half of New Mexico, the western quarter of Colorado, and the southwest corner of Wyoming"
    }
  },
  {
    "year": "1849",
    "location": "San Francisco, California",
    "date": "February 28",
    "description": "Regular steamboat service between the east and west coasts of the United States begins with the arrival of the SS California in San Francisco.",
    "media": { 
      "img": require("../images/1849-SS_California.jpg"),
      "alt": "SS California, the first ship of the Pacific Mail Steamship Company; this ship was used between Panama and San Francisco between 1848 and 1894, when she was wrecked off the coast of Peru"
    }
  },
  {
    "year": "1850",
    "location": "Washington, DC",
    "date": "January 29",
    "description": "Responding to questions of how to accommodate slavery in the western territories, Henry Clay proposes a series of measures to preserve the Union that come to be called the Compromise of 1850.",
    "media": { 
      "img": require("../images/1850-Henry_Clay_Senate.jpg"),
      "alt": "The United States Senate, A.D. 1850 (engraving by Peter F. Rothermel): Henry Clay takes the floor of the Old Senate Chamber; Vice President Millard Fillmore presides as John C. Calhoun (to the right of the Speaker's chair) and Daniel Webster (seated to the left of Clay) look on"
    }
  },
  {
    "year": "1850",
    "location": "Chicago, Illinois",
    "date": "February 1",
    "description": "The Pinkerton National Detective Agency is founded.",
    "media": { 
      "img": require("../images/1850-Pinkerton.jpg"),
      "alt": "'We Never Sleep' - the original logo of the Pinkerton National Detective Agency"
    }
  },
  {
    "year": "1850",
    "location": "Provo, Utah",
    "date": "February 8",
    "description": "The Nauvoo Legion, under orders from Brigham Young, attacks Timpanogos Indians over land disputes near Fort Utah.",
    "media": { 
      "img": require("../images/1850-Nauvoo_Legion.png"),
      "alt": "Joseph Mustering the Nauvoo Legion, by C.C.A. Christensen"
    }
  },
  {
    "year": "1850",
    "location": "Los Angeles, California",
    "date": "April 4",
    "description": "The city of Los Angeles, California is incorporated.",
    "media": { 
      "img": require("../images/1850-Los_Angeles.png"),
      "alt": "Panoramic view of Los Angeles Plaza and Old Plaza Church circa 1869, the two gas lamps seen on the corners of the Plaza were the first streetlights installed in Los Angeles, California, photo courtesy Power and Light"
    }
  },
  {
    "year": "1850",
    "location": "San Francisco, California",
    "date": "April 15",
    "description": "The city of San Francisco, California is incorporated.",
    "media": { 
      "img": require("../images/1850-San_Francisco.jpg"),
      "alt": "Panorama view from near present Ina Coolbrith Park to Telegraph Hill, San Francisco c. 1855"
    }
  },
  {
    "year": "1850",
    "location": "Western Arizona",
    "date": "April 16",
    "description": "The California territorial government sends a military expedition to attack hostile Yuma Indians along the Colorado River in retaliation for the Glanton Massacre earlier in the year, sparking the Yuma War." 
  },
  {
    "year": "1850",
    "location": "Oregon City, Oregon",
    "date": "June 3",
    "description": "Five Cayuse tribesmen are hanged in Oregon City for their participation in the Whitman massacre." 
  },
  {
    "year": "1850",
    "location": "San Jose, California",
    "date": "September 9",
    "description": "California is admitted as the 31st U.S. state.",
    "media": { 
      "img": require("../images/1850-California_State_Seal.png"),
      "alt": "The Great Seal of the State of California"
    }
  },
  {
    "year": "1850",
    "location": "Washington, DC, New Mexico and Utah",
    "date": "September 9",
    "description": "The New Mexico Territory and Utah Territory are organized by order of Congress.",
    "media": { 
      "img": require("../images/1850-NM_UT_Territories.png"),
      "alt": "The Territorial Coat of Arms for New Mexico and Utah"
    }
  },
  {
    "year": "1850",
    "location": "Washington, DC and Oregon",
    "date": "September 27",
    "description": "The Donation Land Claim Act takes effect to promote homestead settlement in the Oregon Territory." 
  },
  {
    "year": "1850",
    "location": "Washington, DC and Fillmore, Utah",
    "date": "September 29",
    "description": "President Millard Fillmore appoints Brigham Young the first governor of the Utah Territory.",
    "media": { 
      "img": require("../images/1850-Brigham_Young.jpg/"),
      "alt": "Brigham Young (June 1, 1801 – August 29, 1877) was an American religious leader and politician"
    }
  },
  {
    "year": "1851",
    "location": "Terre Haute, Indiana",
    "date": "",
    "description": "The phrase 'Go West, young man' first appears in an editorial by Indiana newspaper writer John B.L. Soule in the Terre Haute Express. The saying is later popularized by Horace Greeley, editor of the New-York Tribune.",
    "media": { 
      "img": require("../images/1851-Horace_Greeley.jpg"),
      "alt": "Horace Greeley (February 3, 1811 – November 29, 1872) was an American newspaper editor and publisher who was the founder and editor of the New-York Tribune; he is attributed with the saying 'Go West, young man'"
    }
  },
  {
    "year": "1851",
    "location": "Rochester, New York",
    "date": "",
    "description": "Western Union is founded as The New York and Mississippi Valley Printing Telegraph Company.",
    "media": { 
      "img": require("../images/1851-Western_Union.jpg"),
      "alt": "Samuel Morse Demonstrates his newly invented telegraph, c. 1838"
    }
  },
  {
    "year": "1851",
    "location": "Portland, Oregon",
    "date": "January 23",
    "description": "The flip of a coin determines whether a new city in Oregon is named after Boston, Massachusetts, or Portland, Maine, with Portland winning." 
  },
  {
    "year": "1851",
    "location": "Gila Bend, Arizona",
    "date": "February 18",
    "description": "A family of Brewsterite pioneers traveling a southern route to California is massacred by Indians on the banks of the Gila River in what is now Arizona. Thirteen-year-old Olive Oatman and her eight-year-old sister Mary Ann are abducted and enslaved, Mary Ann died of starvation.",
    "media": { 
      "img": require("../images/1851-Olive_Oatman.jpg"),
      "alt": "Olive Oatman 1838–1903, albumen silver print, by Benjamin F. Powelson c. 1863; the blue tattoo on her face was to make her more recognizable to her captors, she was the first known white woman with a Native tattoo on record"
    }
  },
  {
    "year": "1851",
    "location": "Washington, DC",
    "date": "February 27",
    "description": "Congress passes the Appropriation Bill for Indian Affairs, which allocates funds to move western Native American tribes on to permanent reservations enclosed and protected by the federal government. The act sets the precedent for modern reservations in the United States." 
  },
  {
    "year": "1851",
    "location": "Yosemite Valley, California",
    "date": "March 27",
    "description": "Mariposa Battalion, led by James D. Savage, are the first reported non-natives to enter California's Yosemite Valley.",
    "media": { 
      "img": require("../images/1851-Yosemite_Valley.jpg"),
      "alt": "The First Picture of Yosemite Valley, sketch by Thomas Ayres c. 1855"
    }
  },
  {
    "year": "1851",
    "location": "Watrous, New Mexico",
    "date": "July 26",
    "description": "Fort Union is established in the New Mexico Territory.",
    "media": { 
      "img": require("../images/1851-Fort_Union.jpeg"),
      "alt": "Ruins of Fort Union, at the Fort Union National Monument in Watrous, New Mexico"
    }
  },
  {
    "year": "1851",
    "location": "Guernsey, Wyoming",
    "date": "September 17",
    "description": "The Treaty of Fort Laramie (1851) is negotiated between the United States government and representatives of ten Native American tribes of the Great Plains, including the Lakota, Crow, and Cheyenne. The tribes agree to provide safe passage for westward migrants and permit the construction of roads and forts in their territories in return for an annuity of $50,000 for fifty years.",
    "media": { 
      "img": require("../images/1851-Washakie.jpg"),
      "alt": "Washakie (c. 1804/1810 – February 20, 1900), a prominent Shoshoni chief; holding a catlinite pipe"
    }
  },
  {
    "year": "1851",
    "location": "Seattle, Washington",
    "date": "November 13",
    "description": "The Denny Party lands at Alki Point, the first settlers of what will become Seattle, Washington.",
    "media": { 
      "img": require("../images/1851-Denny_Party.jpg"),
      "alt": "Alki Point viewed from Elliott Bay, where the Denny Party made their initial land claims. Seattle, Washington"
    }
  },
  {
    "year": "1852",
    "location": "New York, New York",
    "date": "March 18",
    "description": "The Wells Fargo company is founded to provide express and banking services to California.",
    "media": { 
      "img": require("../images/1852-Wells_Fargo.jpg"),
      "alt": "The Wells Fargo stage stop in Black Canyon City, Arizona, built in 1872"
    }
  },
  {
    "year": "1853",
    "location": "San Francisco, California",
    "date": "March 1",
    "description": "Levi Strauss arrives in San Francisco and opens a store supplying goods and clothing to Gold Rush miners.",
    "media": { 
      "img": require("../images/1853-Levi_Strauss.jpg"),
      "alt": "The original Levi's factory, at 14-16 Battery Street in San Francisco, California"
    }
  },
  {
    "year": "1853",
    "location": "Washington, DC and Olympia, Washington",
    "date": "March 2",
    "description": "The Washington Territory is organized from a portion of the Oregon Territory.",
    "media": { 
      "img": require("../images/1853-Washington_Territory_Seal.png"),
      "alt": "The Great Seal of the Territory of Washington"
    }
  },
  {
    "year": "1853",
    "location": "Junction City, Kansas",
    "date": "June 27",
    "description": "Fort Riley is established in what is now Kansas.",
    "media": { 
      "img": require("../images/1853-Fort_Riley_Custer_House.jpg"),
      "alt": "Constructed in 1855 of native limestone, the Custer House is one of two surviving sets of quarters from Fort Riley's establishment; it depicts military life on the Western frontier and features displays that show the living conditions of a typical military family"
    }
  },
  {
    "year": "1853",
    "location": "Dallas, Oregon",
    "date": "July 13",
    "description": "In the case of Holmes v. Ford, a decision of the Oregon Territorial Supreme Court reaffirms that slavery is illegal in the Oregon Territory, concluding the last challenge of abolitionist law by pro-slavery elements living in Oregon." 
  },
  {
    "year": "1853",
    "location": "Sevier Lake, Utah",
    "date": "October 26",
    "description": "Paiute Indians attack U.S. Army Captain John W. Gunnison and his party of 37 soldiers and railroad surveyors near Sevier Lake, Utah.",
    "media": { 
      "img": require("../images/1853-John_Williams_Gunnison.jpeg"),
      "alt": "Portrait of John Williams Gunnison"
    }
  },
  {
    "year": "1853",
    "location": "Southern Arizona and New Mexico",
    "date": "December 30",
    "description": "The United States and Mexico agree to the Gadsden Purchase, transferring portions of southern Arizona and New Mexico to the U.S.",
    "media": { 
      "img": require("../images/1853-Gadsden_Purchase.png"),
      "alt": "Map showing the area of the Gadsden Purchase (highlighted in yellow)"
    }
  },
  {
    "year": "1854",
    "location": "Baja California and Sonora, Mexico",
    "date": "February 13",
    "description": "The Mexican army forces would-be conqueror William Walker and his mercenary troops to retreat to Sonora.",
    "media": { 
      "img": require("../images/1854-William_Walker.jpg"),
      "alt": "'General' William Walker (May 8, 1824 – September 12, 1860) was an American physician, lawyer, journalist, and mercenary"
    }
  },
  {
    "year": "1854",
    "location": "Marshall, TX and New Orleans, LA",
    "date": "February 14",
    "description": "Texas is linked by telegraph with the rest of the country when a connection between New Orleans and Marshall, Texas is completed." 
  },
  {
    "year": "1854",
    "location": "Washington, DC",
    "date": "May 30",
    "description": "The Kansas–Nebraska Act becomes law, creating the Kansas Territory and Nebraska Territory. A provision that settlers will vote on the legality of slavery in the new territories effectively rescinds the Missouri Compromise of 1820 and touches off an epidemic of violence and electoral fraud beginning the next year.",
    "media": { 
      "img": require("../images/1854-Kansas_Nebraska_Act.jpg"),
      "alt": "J.H. Colton’s map of Nebraska and Kansas, 1855"
    }
  },
  {
    "year": "1854",
    "location": "Omaha, Nebraska",
    "date": "July 4",
    "description": "Omaha City is founded in the Nebraska Territory.",
    "media": { 
      "img": require("../images/1854-Omaha_Nebraska.jpg"),
      "alt": "Looking Northwest from 13th and Farnam Streets in Omaha, Nebraska in 1860; the territorial capitol is visitble on the hill in background"
    }
  },
  {
    "year": "1854",
    "location": "Lingle, Wyoming",
    "date": "August 19",
    "description": "An argument over a stray cow precipitates the Grattan massacre, in which 30 U.S. Army soldiers and an interpreter are killed in retaliation for the shooting of Chief Conquering Bear of the Lakota Sioux." 
  },
  {
    "year": "1854",
    "location": "Sacramento, California",
    "date": "December 19",
    "description": "Jonathan R. Davis, a veteran of the Mexican–American War and a gold rush prospector, single-handedly kills eleven armed immigrant outlaws near Sacramento, California using two revolvers and a Bowie knife." 
  },
  {
    "year": "1855",
    "location": "Minneapolis, Minnesota",
    "date": "January 23",
    "description": "The first permanent bridge across the Mississippi River opens for traffic in Minneapolis, Minnesota.",
    "media": { 
      "img": require("../images/1855-Hennepin_Bridge.jpg"),
      "alt": "The first Louis Henneping Bridge in 1855 (it has been replaced three times, the current (fourth) Hennepin Bridge was built in 1990)"
    }
  },
  {
    "year": "1855",
    "location": "Garden County, Nebraska",
    "date": "September 2-3",
    "description": "U.S. Army detachments under Brigadier General William S. Harney defeat a band of Brulé Lakota led by Little Thunder at the Battle of Ash Hollow in present-day Garden County, Nebraska, a punitive expedition for the Grattan massacre.",
    "media": { 
      "img": require("../images/1855-Battle_of_Ash_Hollow.jpg"),
      "alt": "An 1878 depiction of the Battle of Ash Hollow"
    }
  },
  {
    "year": "1856",
    "location": "Seattle, Washington",
    "date": "January 26",
    "description": "In the Puget Sound War, the Battle of Seattle is fought when an alliance of local Indians attacks pioneer settlements in the Washington Territory.",
    "media": { 
      "img": require("../images/1856-Battle_of_Seattle.jpg"),
      "alt": "Battle of Seattle, by Emily Inez Denny"
    }
  },
  {
    "year": "1856",
    "location": "Dallas, Texas",
    "date": "February 2",
    "description": "The city of Dallas is incorporated in Texas.",
    "media": { 
      "img": require("../images/1856-Dallas.jpg"),
      "alt": "One of the oldest photographs of Dallas, Texas from 1872; at the time of it's incorporation in 1856 the city had less than 600 free residents and most of the original city burned down in 1860"
    }
  },
  {
    "year": "1856",
    "location": "Lawrence, Kansas",
    "date": "May 21",
    "description": "The predominantly abolitionist town of Lawrence, Kansas is ransacked and looted by a pro-slavery militia.",
    "media": { 
      "img": require("../images/1856-Lawrence_Kansas.jpg"),
      "alt": "Ruins of Free State Hotel after the Sacking of Lawrence, image from State Historical Society of Missouri"
    }
  },
  {
    "year": "1856",
    "location": "Kansas",
    "date": "May 24",
    "description": "Outraged at the sacking of Lawrence, abolitionist John Brown and a party of Free-Staters murder five pro-slavery activists in rural Kansas Territory in the Pottawatomie massacre. In the three months of retaliatory raids and murders that follow, more than two dozen people are killed, marking the bloodiest episode of the Bleeding Kansas era.",
    "media": { 
      "img": require("../images/1856-John_Brown.jpg"),
      "alt": "John Brown (May 9, 1800 – December 2, 1859) was an American abolitionist leader"
    }
  },
  {
    "year": "1857",
    "location": "Sonora, Mexico",
    "date": "April 1",
    "description": "In the midst of Mexico's Reform War, former California Senator Henry A. Crabb leads a filibustering expedition into Sonora to aid Mexican rebels fighting government forces. The rebels turn on the Americans after they cross the border and Crabb's entire army is executed." 
  },
  {
    "year": "1857",
    "location": "Pima, Arizona",
    "date": "September 1",
    "description": "The Battle of Pima Butte, in what is now Arizona, is the last major battle fought solely between indigenous peoples in North America.",
    "media": { 
      "img": require("../images/1857-Pima_Butte.jpg"),
      "alt": "Two Mohave warriors, by Timothy H. O'Sullivan c 1871"
    }
  },
  {
    "year": "1857",
    "location": "Utah",
    "date": "September 11",
    "description": "Nearly 120 emigrants passing through the Utah Territory are massacred by a combined force of Mormon militiamen and Paiute Indians during the hysteria of the Utah War." 
  },
  {
    "year": "1858",
    "location": "Seattle, Washington",
    "date": "February 19",
    "description": "Chief Leschi, a leader of the Nisqually people, is hanged by the territorial government of Washington after being wrongfully convicted of killing a colonel during the Puget Sound War.",
    "media": { 
      "img": require("../images/1858-Chief_Leschi.png"),
      "alt": "Portrait of Nisqually Chief Leschi (1808-1858), by Raphael Coombs c. 1894, courtesy Washington State Historical Society"
    }
  },
  {
    "year": "1858",
    "location": "South Dakota",
    "date": "April 19",
    "description": "The Yankton Treaty, signed by the Yankton Sioux, cedes most of what is now eastern South Dakota to the United States.",
    "media": { 
      "img": require("../images/1858-Yankton_Treaty.jpeg"),
      "alt": "Treaty of 1858 monument in Charles Mix County, South Dakota"
    }
  },
  {
    "year": "1858",
    "location": "St. Paul, Minnesota",
    "date": "May 11",
    "description": "Minnesota is admitted as the 32nd U.S. state.",
    "media": { 
      "img": require("../images/1858-Minnesota_State_Seal.png"),
      "alt": "The Great Seal of the State of Minnesota"
    }
  },
  {
    "year": "1858",
    "location": "Texas Panhandle",
    "date": "May 12",
    "description": "An army of Texas Rangers and Indian allies under the command of John Salmon Ford engages Comanche warriors in a series of battles after attacking villages in the Canadian River valley, the final actions of the Antelope Hills expedition.",
    "media": { 
      "img": require("../images/1858-John_Ford.jpg"),
      "alt": "Capt. John Salmon 'Rip' Ford (May 26, 1815 – November 3, 1897) was a member of the Republic of Texas Congress and later of the State Senate, and mayor of Brownsville, Texas"
    }
  },
  {
    "year": "1858",
    "location": "Colorado",
    "date": "July 1",
    "description": "Gold is discovered in the Front Range of the Rocky Mountains. The resulting gold rush draws nearly 100,000 people to the Pike's Peak Country of present-day Colorado over the next three years.",
    "media": { 
      "img": require("../images/1858-Pikes_Peak.jpg"),
      "alt": "Gold prospectors in what was then the 'Pikes Peak' region of western Kansas Territory (present day Colorado) c. 1858"
    }
  },
  {
    "year": "1859",
    "location": "Nevada",
    "date": "May 1",
    "description": "The Comstock Lode, the first major discovery of silver ore in the country, provokes a silver rush in present-day Nevada that funds boomtowns including Virginia City and Gold Hill. Over the next 30 years, hundreds of mines extract more than $320 million in gold and silver from the region, making millionaires of investors such as George Hearst and the Bonanza Kings.",
    "media": { 
      "img": require("../images/1859-Comstock_Lode.jpg"),
      "alt": "'Mining on the Comstock', depicting the headframes and mills of the various mines, and mining technology used at Comstock, most prominently the method of square-set timbering developed there to work the veins"
    }
  },
  {
    "year": "1859",
    "location": "Salem, Oregon",
    "date": "February 14",
    "description": "Oregon is admitted as the 33rd U.S. state.",
    "media": { 
      "img": require("../images/1859-Oregon_State_Seal.png"),
      "alt": "The Great Seal of the State of Oregon"
    }
  },
  {
    "year": "1859",
    "location": "Brownsville, Texas",
    "date": "September 28",
    "description": "Mexican folk hero Juan Cortina and a large posse seize control of Brownsville, Texas in one of the major actions of the First Cortina War. His motivation is the legal abuses perpetrated by Texan authorities against ethnic Mexicans. The occupation only lasts two days, but the Cortina Troubles continue for another two years.",
    "media": { 
      "img": require("../images/1859-Juan_Cortina.jpg"),
      "alt": "Juan Nepomuceno Cortina Goseacochea (May 16, 1824 – October 30, 1894), also known by his nicknames Cheno Cortina, the Red Robber of the Rio Grande and the Rio Grande Robin Hood, was a Mexican rancher, politician, military leader, outlaw and folk hero"
    }
  },
  {
    "year": "1860",
    "location": "Humboldt County, California",
    "date": "February 26",
    "description": "Hundreds of Wiyot people are massacred by white settlers along the coast of what is now Humboldt County, California.",
    "media": { 
      "img": require("../images/1860-Wiyot_map.png"),
      "alt": "Map of Wiyot dialects and villages"
    },
    "coords":
      [
        {
          "lat": "40.7450° N",
          "lng": "123.8695° W"
        }
      ]
    
  },
  {
    "year": "1860",
    "location": "The Pony Express Route",
    "date": "April 14",
    "description": "The Pony Express completes its first westbound and eastbound deliveries between St. Joseph, Missouri and San Francisco, California.",
    "media": { 
      "img": require("../images/1860-Pony_Express.jpg"),
      "alt": "Pony Express postmark, 1860, westbound"
    },
    "coords": [
      {
        "lat": "",
        "lng": ""
      }
    ]
  },
  {
    "year": "1860",
    "location": "Pease River, Texas",
    "date": "December 18",
    "description": "Texas Rangers under Lawrence Sullivan 'Sul' Ross attack a Comanche camp at the Battle of Pease River, where they discover Cynthia Ann Parker 24 years after her kidnapping.",
    "media": { 
      "img": require("../images/1860-Cynthia_Ann_Parker.jpg"),
      "alt": "Cynthia Ann Parker and her daughter in 1861, after being saved at Pease River; a picture which was famous all over the United States"
    },
    "coords": ""
  },
  {
    "year": "1861",
    "location": "Topeka, Kansas",
    "date": "January 29",
    "description": "Kansas is admitted to the Union as the 34th U.S. state, and a free state.",
    "media": { 
      "img": require("../images/1861-Kansas_State_Seal.png"),
      "alt": "The Great Seal of the State of Kansas"
    },
    "coords": ""
  },
  {
    "year": "1861",
    "location": "Arizona and New Mexico",
    "date": "February 1",
    "description": "A series of hostilities involving U.S. Army Lt. George Nicholas Bascom and Chiricahua Apache chief Cochise triggers the Chiricahua Wars, which remain a central conflict in Arizona and New Mexico for the next 25 years.",
    "media": { 
      "img": require("../images/1861-Cochise.png"),
      "alt": "Bronze bust of Cochise, by Betty Butts, at the Fort Bowie National Historic Site in Bowie, Arizona"
    },
    "coords": ""
  },
  {
    "year": "1861",
    "location": "Austin, Texas",
    "date": "February 1",
    "description": "A convention of the Texas legislature votes to secede from the Union.",
    "media": { 
      "img": require("../images/1861-TX_Rebel_Flag.png"),
      "alt": "The Texas Rebel Flag, during the Civil War Texas was a part of the Confederate States of America"
    },
    "coords": ""
  },
  {
    "year": "1861",
    "location": "Colorado City, Colorado",
    "date": "February 28",
    "description": "Colorado is organized as a U.S. territory.",
    "media": { 
      "img": require("../images/1861-Colorado_Territory.jpg"),
      "alt": "The Territorial Coat of Arms for Colorado"
    },
    "coords": ""
  },
  {
    "year": "1861",
    "location": "Carson City, NV and Yankton, SD",
    "date": "March 2",
    "description": "The Nevada Territory and Dakota Territory are organized.",
    "media": { 
      "img": require("../images/1861-Nevada_Dakota_Territory.png"),
      "alt": "The Territorial Coats of Arms for Nevada and Dakota"
    },
    "coords": ""
  },
  {
    "year": "1861",
    "location": "Austin, Texas",
    "date": "March 16",
    "description": "Governor of Texas Sam Houston is evicted from office for refusing to take an oath of loyalty to the Confederate States of America.",
    "media": { 
      "img": require("../images/1861-Sam_Houston.jpg"),
      "alt": "Sam Houston (March 2, 1793 – July 26, 1863), the 7th Governor of Texas, was an American general and statesman who played an important role in the Texas Revolution"
    },
    "coords": ""
  },
  {
    "year": "1861",
    "location": "Mesilla, New Mexico",
    "date": "March 28",
    "description": "The southern half of the New Mexico Territory nominally joins the Confederacy as the Provisional Confederate Territory of Arizona.",
    "media": { 
      "img": require("../images/1861-NM_Sibley_Flag.png"),
      "alt": "The Sibley Flag, flown by the Army of New Mexico during the Civil War, New Mexico was a part of the Confederate States of America"
    },
    "coords": ""
  },
  {
    "year": "1861",
    "location": "Mesilla, New Mexico",
    "date": "July 25",
    "description": "250 Confederate troops led by John R. Baylor engage Union forces under Isaac Lynde at Mesilla, New Mexico, resulting in Lynde's troops retreating into the Organ Mountains, toward Fort Stanton. Lynde is relieved of duty after abandoning his post.",
    "media": { 
      "img": require("../images/1861-John_Baylor.png"),
      "alt": "John R. Baylor (July 27, 1822 - February 6, 1894) was a US Indian agent, publisher and editor, politician, and a senior officer of the Confederate States Army"
    },
    "coords": ""
  },
  {
    "year": "1861",
    "location": "New Mexico",
    "date": "September 2",
    "description": "A small Confederate patrol from Fort Stanton is ambushed by Mescalero Apache warriors in New Mexico's Gallinas Mountains.",
    "media": { 
      "img": require("../images/1861-Fort_Stanton_Apache.png"),
      "alt": "Apache bowman, waiting for an ambush"
    },
    "coords": ""
  },
  {
    "year": "1861",
    "location": "Fort Bridger, Wyoming",
    "date": "October 24",
    "description": "The first transcontinental telegraph line is completed near Fort Bridger in present-day Wyoming, the result of an effort by Hiram Sibley and Western Union to connect California to the telegraph networks of the east. The ability to instantaneously send messages from coast to coast immediately makes the Pony Express obsolete.",
    "media": { 
      "img": require("../images/1861-Pacific_Telegraph_Route.jpg"),
      "alt": "Route of the first transcontinental telegraph"
    },
    "coords": ""
  },
  {
    "year": "1862",
    "location": "Southern California",
    "date": "January 1",
    "description": "Months of record precipitation in the far west culminate in the Great Flood of 1862, which turns California's Central Valley into an inland sea and causes millions of dollars in property damage.",
    "media": { 
      "img": require("../images/1862-Great_Flood.jpg"),
      "alt": "Lithograph of K Street in the city of Sacramento, California — during the Great Flood of 1862; the flood affected the Western United States, from Oregon through California, and Idaho through New Mexico"
    },
    "coords": ""
  },
  {
    "year": "1862",
    "location": "New Mexico",
    "date": "February 1",
    "description": "Confederate forces under Brigadier General Henry Hopkins Sibley and Colonel Thomas Green undertake one of the most ambitious military operations of the American Civil War when they begin the New Mexico Campaign. Their goals include seizing the Colorado gold fields and securing roads by which to invade California and Mexico.",
    "media": { 
      "img": require("../images/1862-Henry_Hopkins_Sibley.jpg"),
      "alt": "Henry Hopkins Sibley (May 25, 1816 - August 23, 1886) was a career officer in the United States Army, who commanded a Confederate cavalry brigade in the Civil War"
    },
    "coords": ""
  },
  {
    "year": "1862",
    "location": "Socorra County, New Mexico",
    "date": "February 20",
    "description": "The Battle of Valverde is fought at a ford of Valverde Creek in present-day New Mexico, resulting in a Confederate victory.",
    "media": { 
      "img": require("../images/1862-Battle_of_Valverde.jpg"),
      "alt": "A soldiers sketch of the Battle of Valverde"
    },
    "coords": ""
  },
  {
    "year": "1862",
    "location": "San Miguel County, New Mexico",
    "date": "March 26",
    "description": "The Battle of Glorieta Pass, sometimes called the 'Gettysburg of the West', is fought in the Sangre de Cristo Mountains between Confederate cavalry forces and Union volunteers from Colorado and New Mexico. It marks a turning point in the New Mexico Campaign in favor of the Union.",
    "media": { 
      "img": require("../images/1862-Glorietta_Pass.png"),
      "alt": "Battle of Glorieta Pass - Pigeon's Ranch, by Roy Andersen"
    },
    "coords": ""
  },
  {
    "year": "1862",
    "location": "Yuma County, Arizona",
    "date": "March 30",
    "description": "The Battle of Stanwix Station is fought at a Butterfield Overland Mail stagecoach stop 80 miles east of Yuma, Arizona between Capt. William P. Calloway of the California Column and Confederate 2nd Lt. Jack Swilling.",
    "media": { 
      "img": require("../images/1862-Jack_Swilling.jpg"),
      "alt": "Jack Swilling with his Apache ward Guillermo Swilling, c. 1875"
    },
    "coords": ""
  },
  {
    "year": "1862",
    "location": "Pinal County, Arizona",
    "date": "April 15",
    "description": "The Battle of Picacho Pass is fought between the 1st California Cavalry under Union Lt. James Barrett and a detachment of Arizona Confederates led by Sgt. Henry Holmes. It is often cited as the westernmost battle of the American Civil War, occurring 50 miles northwest of Tucson.",
    "media": { 
      "img": require("../images/1862-Picacho_Peak.jpeg"),
      "alt": "Photo taken of the south face of Picacho Peak, Arizona"
    },
    "coords": ""
  },
  {
    "year": "1862",
    "location": "Benson, Arizona",
    "date": "May 5",
    "description": "Confederate Sgt. Sam Ford and his men are ambushed by Apache warriors led by Cochise in the Dragoon Mountains, near present-day Benson, Arizona, at the First Battle of Dragoon Springs.",
    "coords": ""
  },
  {
    "year": "1862",
    "location": "Cochise County, Arizona",
    "date": "May 9",
    "description": "The Second Battle of Dragoon Springs is fought in retaliation for the deaths of the four Confederates killed at the Apache ambush four days earlier. Rebels under Capt. Sherod Hunter take back the cattle stolen by Cochise and his warriors and kill five Apaches.",
    "coords": ""
  },
  {
    "year": "1862",
    "location": "Washington, DC",
    "date": "May 20",
    "description": "The Homestead Act of 1862 is signed into law by President Abraham Lincoln. It aims to encourage settlement in the West by simplifying the process of land acquisition: homesteaders need only claim, occupy for five years, and improve a minimum of 160 acres of unappropriated land to be granted full ownership. Alternatively, settlers have the option of purchasing the land outright after six months of residency.",
    "media": { 
      "img": require("../images/1862-Homestead_Certificate.jpg"),
      "alt": "Certificate of homestead in Nebraska, given under the Homestead Act of 1862"
    },
    "coords": ""
  },
  {
    "year": "1862",
    "location": "Bowie, Arizona",
    "date": "July 15",
    "description": "140 Union troops from the California Column are ambushed by 500 Apaches under Mangas Coloradas and Cochise at the Battle of Apache Pass in Arizona's Chiricahua Mountains. It is one of the first battles in which the United States Army is able to effectively use artillery against Indians. Fort Bowie is built near the site following the battle.",
    "media": { 
      "img": require("../images/1862-Fort_Bowie_in_1886.jpg"),
      "alt": "A photograph of Fort Bowie in 1886, courtesy National Park Service"
    },
    "coords": ""
  },
  {
    "year": "1862",
    "location": "Neuces River, Texas",
    "date": "August 10",
    "description": "More than 30 people are killed when a group of Unionist German Texan settlers fleeing the Texas Hill Country for Mexico is attacked by a Confederate detachment along the Nueces River.",
    "media": { 
      "img": require("../images/1862-German_Texans.jpg"),
      "alt": "Unionists throughout the Confederate States, including Germans, resisted the imposition of conscription in 1862"
    },
    "coords": ""
  },
  {
    "year": "1862",
    "location": "Minnesota",
    "date": "August 17",
    "description": "The Dakota War of 1862 begins when a Sioux hunting party slaughters five white settlers and the tribal council decides to attack white settlements throughout the Minnesota River valley.",
    "media": { 
      "img": require("../images/1862-Dakota_War.jpg"),
      "alt": "Attack on New Ulm, by Anton Gag c. 1904"
    },
    "coords": ""
  },
  {
    "year": "1862",
    "location": "Minnesota",
    "date": "November 5",
    "description": "More than 300 Santee Sioux in Minnesota are sentenced to hang for the rape and murder of white settlers.",
    "media": { 
      "img": require("../images/1862-Mankato_Hanging.jpg"),
      "alt": "Drawing of an 1862 mass hanging in Mankato, Minnesota"
    },
    "coords": ""
  },
  {
    "year": "1863",
    "location": "Beatrice, Nebraska",
    "date": "January 1",
    "description": "Daniel Freeman submits the first claim under the Homestead Act of 1862 for land near Beatrice, Nebraska.",
    "media": { 
      "img": require("../images/1863-Daniel_Freeman_Homestead_Application.jpg"),
      "alt": ""
    },
    "coords": "Daniel Freeman's Homestead Application"
  },
  {
    "year": "1863",
    "location": "New Mexico",
    "date": "January 18",
    "description": "Chiricahua Apache leader Mangas Coloradas is captured, tortured, and killed by U.S. Army sentries after meeting with Brigadier General Joseph Rodman West to call for peace.",
    "media": { 
      "img": require("../images/1863-Mangas_Coloradas_Autopsy.jpg"),
      "alt": "Drawing of Skull of Mangas Coloradas after being tortured, from 1873 book 'Human Science' p. 1196 by Orson Squire Fowler"
    },
    "coords": ""
  },
  {
    "year": "1863",
    "location": "Preston, Idaho",
    "date": "January 29",
    "description": "Colonel Patrick Edward Connor leads his troops to fight Shoshone Indians in present-day Idaho, resulting in the Bear River Massacre.",
    "media": { 
      "img": require("../images/1863-Chief_Sagwitch_and_Beawoachee.jpg"),
      "alt": "Massacre survivor Chief Sagwitch and spouse Beawoachee, c. 1875"
    },
    "coords": ""
  },
  {
    "year": "1863",
    "location": "Fort Whipple, Arizona",
    "date": "February 24",
    "description": "The Arizona Territory is organized from a portion of the New Mexico Territory.",
    "media": { 
      "img": require("../images/1863-Arizona_Territory.jpg"),
      "alt": "The Official Seal of the Territory of Arizona"
    },
    "coords": ""
  },
  {
    "year": "1863",
    "location": "Lewiston, Idaho",
    "date": "March 4",
    "description": "Idaho is organized as a U.S. territory.",
    "media": { 
      "img": require("../images/1863-Idaho_Territory.jpg"),
      "alt": "The Territorial Coat of Arms for Idaho"
    },
    "coords": ""
  },
  {
    "year": "1863",
    "location": "Lawrence, Kansas",
    "date": "August 21",
    "description": "Confederate guerrillas led by William Quantrill set fire to the pro-Union town of Lawrence, Kansas and kill nearly 200 civilians in the Lawrence massacre. Quantrill claims his motive was revenge for the Sacking of Osceola several years earlier.",
    "media": { 
      "img": require("../images/1863-Battle_of_Lawrence.png"),
      "alt": "Print showing Rebel troops killing the citizens of Lawrence, Kansas, and setting fire to the buildings"
    },
    "coords": ""
  },
  {
    "year": "1863",
    "location": "Lawrence County, Missouri",
    "date": "August 25",
    "description": "In the aftermath of the Lawrence massacre, Union General Thomas Ewing Jr. issues General Order No. 11, which forces the expulsion of all residents who cannot prove their allegiance to the Union from four counties in rural western Missouri.",
    "media": { 
      "img": require("../images/1863-Order_No_11.jpg"),
      "alt": "General Order No. 11, by George Caleb Bingham; in this famous propaganda work General Thomas Ewing is seated on a horse watching the Red Legs (the Red Legs were a secretive paramilitary organisation of abolitionist fighters on the western union border)"
    },
    "coords": ""
  },
  {
    "year": "1864",
    "location": "Bozemon Trail, Montana",
    "date": "",
    "description": "John Bozeman leads a group of about 2,000 settlers along the Bozeman Trail, a new cutoff route connecting the Oregon Trail with the gold fields of southwestern Montana, which he and John Jacobs had blazed the previous year.",
    "media": { 
      "img": require("../images/1864-John_Bozeman.jpeg"),
      "alt": "John Merin Bozeman (January 1835 – April 20, 1867) was a pioneer and frontiersman in the American West who helped establish the Bozeman Trail through Wyoming Territory into the gold fields of southwestern Montana Territory in the early 1860s"
    },
    "coords": ""
  },
  {
    "year": "1864",
    "location": "Canyon De Chelly, Arizona",
    "date": "January 1",
    "description": "Colonel Kit Carson accepts the surrender of most of the Navajo nation after the final two years of the bloody Navajo Wars.",
    "media": { 
      "img": require("../images/1864-Kit_Carson.jpg"),
      "alt": "Colonel Christopher Houston 'Kit' Carson (December 24, 1809 – May 23, 1868) was an American frontiersman, fur trapper, wilderness guide, Indian agent, and U.S. Army officer"
    },
    "coords": ""
  },
  {
    "year": "1864",
    "location": "Bannack, Montana",
    "date": "May 26",
    "description": "Montana is organized as a U.S. territory.",
    "media": { 
      "img": require("../images/1864-Montana_Territory.jpg"),
      "alt": "The Territorial Coat of Arms for Montana"
    },
    "coords": ""
  },
  {
    "year": "1864",
    "location": "South Park, Colorado",
    "date": "July 1",
    "description": "Outlaw Jim Reynolds and his gang plunder and rob settlements in the South Park Basin of the Colorado Territory in an attempt to loot the gold mines of the region to support the fledgling Confederacy.",
    "media": { 
      "img": require("../images/1864-Jim_Reynolds.jpg"),
      "alt": "Depiction of The Reynolds Gang robbing a stagecoach in South Park, Colorado"
    },
    "coords": ""
  },
  {
    "year": "1864",
    "location": "Centralia, Missouri",
    "date": "September 27",
    "description": "Pro-Confederate bushwhackers led by William 'Bloody Bill' Anderson capture and execute 24 unarmed Union soldiers at a rail depot in Centralia, Missouri.",
    "media": { 
      "img": require("../images/1864-Bloody_Bill_Anderson.jpg"),
      "alt": "William T. 'Bloody Bill' Anderson (c. 1840 - October 27, 1864) was an American soldier who was one of the deadliest and most notorious Confederate guerrilla leaders in the American Civil War"
    },
    "coords": ""
  },
  {
    "year": "1864",
    "location": "Kansas City, Missouri",
    "date": "October 23",
    "description": "Union General Samuel R. Curtis' Army of the Border decisively defeats Confederate General Sterling Price's Army of Missouri at the Battle of Westport, near Kansas City. The battle ends the last major Confederate offensive west of the Mississippi River. The largest engagement in the Trans-Mississippi Theater, with over 30,000 men involved, it is sometimes called the 'Gettysburg of the West'.",
    "media": { 
      "img": require("../images/1864-Samuel_Curtis.jpg"),
      "alt": "General Samuel Ryan Curtis (February 3, 1805 - December 26, 1866) was an American military officer and one of the first Republicans elected to Congress"
    },
    "coords": ""
  },
  {
    "year": "1864",
    "location": "Kansas and Missouri",
    "date": "October 25",
    "description": "In consecutive engagements only hours apart, Union cavalry under Alfred Pleasonton pursue and defeat Confederate forces under Sterling Price at Marais des Cygnes, Mine Creek, and Marmiton River as they retreat through Kansas and Missouri.",
    "media": { 
      "img": require("../images/1864-Price_Raid.jpg"),
      "alt": "Confederate cavalry during Price's Raid, by Samuel J. Reader c. 1865"
    },
    "coords": ""
  },
  {
    "year": "1864",
    "location": "Carson City, Nevada",
    "date": "October 31",
    "description": "Nevada is admitted as the 36th U.S. state.",
    "media": { 
      "img": require("../images/1864-Nevada_State_Seal.png"),
      "alt": "The Great Seal of the State of Nevada"
    },
    "coords": ""
  },
  {
    "year": "1864",
    "location": "Sand Creek, Colorado",
    "date": "November 29",
    "description": "Colonel John Chivington and his volunteer militia massacre a peaceful Cheyenne village near Sand Creek in the Colorado Territory, in what is later called the Sand Creek massacre.",
    "media": { 
      "img": require("../images/1864-Sand_Creek.jpg"),
      "alt": "Mochi, a Southern Cheyenne in Black Kettle's camp; she became a warrior after her experiences at the Sand Creek massacre"
    },
    "coords": ""
  },
  {
    "year": "1865",
    "location": "Sonoita, Arizona",
    "date": "February 17",
    "description": "Fort Buchanan is overrun and destroyed by Chiricahua warriors in the Arizona Territory.",
    "media": { 
      "img": require("../images/1865-Fort_Buchanan_ruins_in_1914.jpg"),
      "alt": "US Army Captain John H. Cady at the ruins of Fort Buchanan in Arizona c. 1914"
    },
    "coords": ""
  },
  {
    "year": "1865",
    "location": "Brownsville, Texas",
    "date": "May 12",
    "description": "The Battle of Palmito Ranch is fought near Brownsville, Texas. It is the final armed engagement of the American Civil War.",
    "media": { 
      "img": require("../images/1865-John_J._Williams_last_soldier_to_die.jpg"),
      "alt": "John J. Williams (1843 - May 13, 1865), the presumed last soldier to die in the American Civil War"
    },
    "coords": ""
  },
  {
    "year": "1865",
    "location": "Doaksville, Choctaw Nation, Oklahoma",
    "date": "June 23",
    "description": "Stand Watie, a Cherokee cavalry commander in the Confederate Army, becomes the last Confederate general to surrender to Union forces, at Doaksville in the Indian Territory.",
    "media": { 
      "img": require("../images/1865-Stand_Watie.jpg"),
      "alt": "Isaac Stand Watie Degataga (December 12, 1806 - September 9, 1871) was the last Confederate general to surrender in the Civil War"
    },
    "coords": ""
  },
  {
    "year": "1865",
    "location": "Springfield, Missouri",
    "date": "July 21",
    "description": "'Wild Bill' Hickok kills gambler Davis Tutt in a shootout in Springfield, Missouri. The confrontation is sensationalized in Harper's Magazine, making Hickok a household name. It is often considered the archetypal one-on-one quick-draw duel, which later becomes a popular image of the Old West.",
    "media": { 
      "img": require("../images/1865-Wild_Bill_Hickok.png"),
      "alt": "James Butler 'Wild Bill' Hickok (May 27, 1837 – August 2, 1876) was a folk hero of the American Old West known for his life on the frontier as a soldier, scout, lawman, gambler, showman, and actor, and for his involvement in many famous gunfights"
    },
    "coords": ""
  },
  {
    "year": "1866",
    "location": "Liberty, Missouri",
    "date": "February 13",
    "description": "Ex-Confederate bushwhackers Frank and Jesse James rob their first bank, the Clay County Savings Association in Liberty, Missouri.",
    "media": { 
      "img": require("../images/1866-Jesse_and_Frank_James.png"),
      "alt": "Jesse and Frank James"
    },
    "coords": ""
  },
  {
    "year": "1866",
    "location": "Western US",
    "date": "May 1",
    "description": "The period of the great cattle drives begins when Texas ranchers drive more than 260,000 head of cattle to assorted markets. Some travel east to Louisiana, where the animals are shipped to Cairo, Illinois and St. Louis; others travel west to Fort Sumner, New Mexico and Denver, inaugurating the Goodnight-Loving Trail. But the vast majority follow the Shawnee Trail north to Kansas City or Sedalia, Missouri.",
    "media": { 
      "img": require("../images/1866-Cowboy_in_1902.jpg"),
      "alt": "Cattle herd and cowboy, c. 1902"
    },
    "coords": ""
  },
  {
    "year": "1866",
    "location": "Fort Phil Kearny, Wyoming",
    "date": "December 21",
    "description": "Captain William J. Fetterman and 80 soldiers of the U.S. 2nd Cavalry and 18th Infantry regiments are ambushed and wiped out by Lakota, Cheyenne, and Arapaho warriors near Fort Phil Kearny, Wyoming. A fort built the next year, Fort Fetterman, is named in his honor.",
    "media": { 
      "img": require("../images/1866-Red_Cloud.jpg"),
      "alt": "Red Cloud (1822 – December 10, 1909) the Oglala Lakota leader and victor of the 'Fetterman Fight' in 1866"
    },
    "coords": ""
  },
  {
    "year": "1867",
    "location": "Lincoln, Nebraska",
    "date": "March 1",
    "description": "Nebraska is admitted as the 37th U.S. state.",
    "media": { 
      "img": require("../images/1867-Nebraska_State_Seal.png"),
      "alt": "The Great Seal of the State of Nebraska"
    },
    "coords": ""
  },
  {
    "year": "1867",
    "location": "Washington, DC",
    "date": "March 30",
    "description": "The United States purchases Alaska from the Russian Empire for $7.2 million.",
    "media": { 
      "img": require("../images/1867-Alaska_Purchase.jpg"),
      "alt": "With this check, the United States completed the purchase of almost 600,000 square miles of land from the Russian Government; this treasury warrant issued on August 1, 1868, at the Sub-Treasury Building at 26 Wall Street, New York, New York, transferred $7.2 million to Russian Minister to the United States Edouard de Stoeckl; the purchase price of the 49th state was less than two cents an acre; the original document is located in the National Archives, Records of the Accounting Officers of the Department of Treasury"
    },
    "coords": ""
  },
  {
    "year": "1867",
    "location": "Kent, Ohio",
    "date": "June 25",
    "description": "Lucien B. Smith of Kent, Ohio is issued the first patent for barbed wire fencing, an invention which revolutionizes cattle ranching on the open prairies of the West.",
    "media": { 
      "img": require("../images/1867-Barbed_Wire.jpeg"),
      "alt": "A close-up view of a barbed wire"
    },
    "coords": ""
  },
  {
    "year": "1867",
    "location": "Banner, Wyoming",
    "date": "August 2",
    "description": "In the Wagon Box Fight, a small party of U.S. Army soldiers and civilians near Fort Phil Kearny, armed with new rapid-fire breech-loading rifles and encircled by a wall of wagon boxes, manages to hold off hundreds of Lakota warriors led by Red Cloud and Crazy Horse.",
    "media": { 
      "img": require("../images/1867-Crazy_Horse.jpg"),
      "alt": "Alleged photo of Crazy Horse (c. 1840 – September 5, 1877) in 1877, he was a Lakota war leader of the Oglala band in the 19th century"
    },
    "coords": ""
  },
  {
    "year": "1867",
    "location": "Sitka, Alaska",
    "date": "October 18",
    "description": "At a ceremony in Sitka, Alaska, Russian soldiers officially transfer Alaska to the U.S. Army on Castle Hill. It is organized on the same day into the Department of Alaska, to be administered by the Army.",
    "media": { 
      "img": require("../images/1867-Illustration_of_Castle_Hill_in_1827.jpg"),
      "alt": "1827 illustration of Castle Hill in Russian-controlled Sitka; the hilltop building was an imposing fortification on a hill overlooking the water and Tlingit areas; on October 18, 1867, the Russian flag was lowered on Castle Hill, home of Alaska's Russian governors, the American flag was raised, and a brief exchange of statements completed the transfer of Alaska to the United States"
    },
    "coords": ""
  },
  {
    "year": "1867",
    "location": "Medicine Lodge, Kansas",
    "date": "October 28",
    "description": "The Medicine Lodge Treaty is signed between the U.S. government and several southern Plains Indian tribes, requiring that the tribes relocate to the Indian Territory.",
    "media": { 
      "img": require("../images/1867-Council_at_Medicine_Lodge_Creek.png"),
      "alt": "Council at Medicine Lodge Creek, by J. Howland, originally printed in Harper's Weekly; depicts the council between representatives of the U.S. government and the Kiowa and Comanche tribes at Medicine Creek Lodge, Kansas, in 1867; at this council the Kiowa, Comanche, Plains Apache, Cheyenne and Arapaho tribes signed three successive treaties with the United States government, collectively known as the Medicine Lodge treaty"
    },
    "coords": ""
  },
  {
    "year": "1868",
    "location": "Laramie, Wyoming",
    "date": "April 29",
    "description": "The Treaty of Fort Laramie (1868) is signed between the United States and several bands of Lakota, Dakota, and Arapaho Indians. It results in the abandonment of U.S. military outposts along the Bozeman Trail, the indefinite closure of the Powder River Country and western South Dakota to white settlement, and the end of Red Cloud's War.",
    "media": { 
      "img": require("../images/1868-Laramie_Treaty.jpg"),
      "alt": "The signing of a peace treaty by William T. Sherman and the Sioux at Fort Laramie, Wyoming"
    },
    "coords": ""
  },
  {
    "year": "1868",
    "location": "Cheyenne, Wyoming",
    "date": "July 25",
    "description": "Wyoming is organized as a U.S. territory.",
    "media": { 
      "img": require("../images/1868-Wyoming_Territory.jpg"),
      "alt": "The Territorial Coat of Arms for Wyoming"
    },
    "coords": ""
  },
  {
    "year": "1868",
    "location": "Oklahoma",
    "date": "November 27",
    "description": "The Battle of Washita River is fought when Lt. Col. George Armstrong Custer's 7th Cavalry Regiment attacks a winter encampment of Southern Cheyenne Indians on the Washita River in what is now western Oklahoma. Chief Black Kettle, leader of the Cheyenne, is killed.",
    "media": { 
      "img": require("../images/1868-Battle_of_Washita_River.jpg"),
      "alt": "The Seventh U.S. Cavalry charging into Black Kettle's village at daylight, November 27, 1868, wood engraving c. 1868"
    },
    "coords": ""
  },
  {
    "year": "1869",
    "location": "Lawton, Oklahoma",
    "date": "January 8",
    "description": "Fort Sill is established by General Philip H. Sheridan in the Indian Territory, near present-day Lawton, Oklahoma.",
    "media": { 
      "img": require("../images/1869-Philip_Sheridan.jpg"),
      "alt": "Philip Henry Sheridan (March 6, 1831 - August 5, 1888) was a career United States Army officer and a Union general in the American Civil War"
    },
    "coords": ""
  },
  {
    "year": "1869",
    "location": "Promontory, Utah",
    "date": "May 10",
    "description": "Leland Stanford drives the Golden Spike to join the rails of the Central Pacific and Union Pacific railroads at a special ceremony in Promontory Summit, Utah Territory, completing the First Transcontinental Railroad.",
    "media": { 
      "img": require("../images/1869-East_and_West_Shaking_hands_at_the_laying_of_last_rail_Union_Pacific_Railroad.jpg"),
      "alt": "The Golden Spike ceremony joining the Union Pacific Railroad with the Central Pacific Railroad"
    },
    "coords": ""
  },
  {
    "year": "1869",
    "location": "The Green River and The Colorado River",
    "date": "May 24",
    "description": "John Wesley Powell and nine others embark on a scientific expedition that charts more than 930 mi (1,500 km) of the Green River and Colorado River through the canyon country of Wyoming, Colorado, Utah, and Arizona. Powell and his crew become the first recorded white men to travel the length of the Grand Canyon. They reach the mouth of the Virgin River in present-day Nevada on August 30.",
    "media": { 
      "img": require("../images/1869-John_Wesley_Powell.jpg"),
      "alt": "John Wesley Powell (March 24, 1834 - September 23, 1902)was an American geologist, U.S. Army soldier, explorer of the American West, professor at Illinois Wesleyan University, and 2nd Director of the United States Geological Survey"
    },
    "coords": ""
  },
  {
    "year": "1869",
    "location": "Deer Trail, Colorado",
    "date": "July 4",
    "description": "The world's first documented competitive rodeo is held in the town of Deer Trail in the Colorado Territory.",
    "media": { 
      "img": require("../images/1869-Deer_Trail.jpg"),
      "alt": "The First Rodeo in Deer Trail, Colorado, photo courtesy Arapahoe County, Colorado"
    },
    "coords": ""
  },
  {
    "year": "1869",
    "location": "Cheyenne, Wyoming",
    "date": "December 10",
    "description": "Wyoming becomes the first U.S. territory to grant women the right to vote.",
    "media": { 
      "img": require("../images/1869-Loiusa_Swain.png"),
      "alt": "In 1870, Louisa Swain was one of the first women to vote in Wyoming Territory. She lived and voted in Laramie, Wyoming"
    },
    "coords": ""
  },
  {
    "year": "1870",
    "location": "San Francisco, California",
    "date": "",
    "description": "Bret Harte's The Luck of Roaring Camp and Other Sketches, a collection of stories based on his years as a San Francisco journalist, is published.",
    "media": { 
      "img": require("../images/1870-Bret_Harte.jpg"),
      "alt": "Bret Harte (born Francis Brett Hart; August 25, 1836 – May 5, 1902) was an American short story writer and poet best remembered for short fiction featuring miners, gamblers, and other romantic figures of the California Gold Rush"
    },
    "coords": ""
  },
  {
    "year": "1870",
    "location": "Abilene, Kansas",
    "date": "",
    "description": "William 'Hurricane Bill' Martin, a notorious outlaw in Kansas, begins rustling cattle southeast of Abilene before he and his gang are driven off by a posse from Marion.",
    "coords": ""
  },
  {
    "year": "1870",
    "location": "Colfax County, New Mexico",
    "date": "",
    "description": "Settling in the New Mexico Territory, gunfighter Robert Clay Allison purchases a ranch in Colfax County. According to local newspapers, Allison is reported to have killed as many as fifteen men in gunfights during this time.",
    "media": { 
      "img": require("../images/1870-Robert_Clay_Allison.jpg"),
      "alt": "Robert A. Clay Allison (September 2, 1841 – July 1, 1887) was a cattle rancher, cattle broker, and sometimes gunfighter of the American Old West, his grave marker reads 'He never killed a man that did not need killing'"
    },
    "coords": ""
  },
  {
    "year": "1870",
    "location": "Western Plains, USA",
    "date": "",
    "description": "With the growing railroad industry and cattle boom, buffalo hunters begin moving onto the Great Plains. In less than ten years, the buffalo population is dramatically reduced, and the animal remains an endangered species for much of the next century.",
    "media": { 
      "img": require("../images/1870-American_Bison.jpg"),
      "alt": "An American Plains Bison, photo courtesy US Department of Agriculture"
    },
    "coords": ""
  },
  {
    "year": "1870",
    "location": "Salt Lake City",
    "date": "",
    "description": "The Utah Territorial Assembly, supported by Brigham Young, grants women the right to vote. Over the next several decades, this provides Mormons with an added margin of political power.",
    "media": { 
      "img": require("../images/1870-Utah_womens_suffrage.png"),
      "alt": "Members of the executive committee of the national suffragists’ convention and prominent local suffragists snapped this photo with Senator Reed Smoot in August 1915 outside of the Hotel Utah, after meeting with him to ensure his support for a federal women’s suffrage amendment in the next Congress, photo courtesy of the National Women's Party"
    },
    "coords": ""
  },
  {
    "year": "1870",
    "location": "Missouri",
    "date": "January 1",
    "description": "Shortly after leaving the post of sheriff of Ellis County, Kansas, 'Wild Bill' Hickok travels to Missouri and eventually resumes his duties as a U.S. Marshal.",
    "media": { 
      "img": require("../images/1870-Wild_Bill.jpg"),
      "alt": "Wild Bill Hickock"
    },
    "coords": ""
  },
  {
    "year": "1870",
    "location": "Marias River, Montana",
    "date": "January 23",
    "description": "More than 200 men, women, and children belonging to a friendly band of Piegan Blackfeet Indians are mistakenly attacked and massacred by a U.S. Army command on the Marias River in the Montana Territory.",
    "coords": ""
  },
  {
    "year": "1870",
    "location": "Austin, Texas",
    "date": "March 30",
    "description": "Texas is readmitted to the Union following the Civil War.",
    "media": { 
      "img": require("../images/1870-Texas_State_Seal.png"),
      "alt": "The Great Seal of the State of Texas"
    },
    "coords": ""
  },
  {
    "year": "1870",
    "location": "Abilene, Kansas",
    "date": "May 1",
    "description": "With the emergence of Abilene, Kansas as a major stopover for cattle ranchers, the town trustees attempt to curb the violence brought by the beginning of the cattle season by banning guns within town limits. This proves extremely unpopular and unenforceable, as Texas cowboys make a habit of shooting up ordinance posters and tear down the city's first jailhouse; violence continues in the city until the appointment of Tom 'Bear River' Smith as city marshal on June 4.",
    "media": { 
      "img": require("../images/1870-Thomas_J_Smith.jpg"),
      "alt": "Thomas James 'Bear River' Smith (June 12, 1830 – November 2, 1870) was a lawman in the American Old West and briefly marshal of cattle town Abilene, Kansas; he was killed and nearly decapitated in the line of duty"
    },
    "coords": ""
  },
  {
    "year": "1870",
    "location": "Hays, Kansas",
    "date": "July 17",
    "description": "'Wild Bill' Hickok is involved in a shootout with several members of the U.S. 7th Cavalry Regiment in Hays City after killing one trooper and wounding another.",
    "coords": ""
  },
  {
    "year": "1870",
    "location": "Abilene, Kansas",
    "date": "November 2",
    "description": "Abilene City Marshal Tom 'Bear River' Smith is killed while serving an arrest warrant near the town.",
    "coords": ""
  },
  {
    "year": "1871",
    "location": "Dimmit County, Texas",
    "date": "",
    "description": "John K. 'King' Fisher is hired by settlers of the Pendencia River country in Dimmit County, Texas to protect their livestock and other property. It is during this time that Fisher becomes known as a skilled gunfighter.",
    "media": { 
      "img": require("../images/1871-King_Fisher.jpg"),
      "alt": "John King Fisher (October 1853 – March 11, 1884) was a gunslinger from the U.S. state of Texas during the heyday of the American Old West"
    },
    "coords": ""
  },
  {
    "year": "1871",
    "location": "Marina, California",
    "date": "January 1",
    "description": "After a long illness, U.S. Army Captain John Barry is forced into retirement. While stationed at Fort Ord, Barry attempts to improve relations between the United States and the Apaches, as well as encourages the enlistment of scouts to combat renegade Apaches.",
    "coords": ""
  },
  {
    "year": "1871",
    "location": "Dallas, Texas",
    "date": "February 16",
    "description": "John Younger kills Captain S.W. Nichols in a gunfight in Dallas, Texas.",
    "coords": ""
  },
  {
    "year": "1871",
    "location": "Clifton, Arizona",
    "date": "February 23",
    "description": "While heading an Apache-hunting force near present-day Clifton, Arizona, John M. Bullard is shot and killed when he approaches a wounded Apache warrior.",
    "coords": ""
  },
  {
    "year": "1871",
    "location": "Kansas",
    "date": "February 28",
    "description": "'Handsome Jack' John Ledford, an outlaw-turned-hotel-owner involved in counterfeiting and horse theft in Kansas and the Indian Territory, is killed in a shootout with a group of U.S. Army soldiers led by scout Lee Stewart and U.S. Marshal Jack Bridges, who claimed to have a warrant for his arrest.",
    "coords": ""
  },
  {
    "year": "1871",
    "location": "Cañon de Chelly, Arizona",
    "date": "March 16",
    "description": "Death of Navajo chieftain Barboncito (Hastin Daagii).",
    "media": { 
      "img": require("../images/1871-Barboncito.jpg"),
      "alt": "Navajo War Chief Barboncito or Hastiin Dághaaʼ (c. 1820 – 1871) was a Navajo political and spiritual leader"
    },
    "coords": ""
  },
  {
    "year": "1871",
    "location": "Abilene, Kansas",
    "date": "April 15",
    "description": "'Wild Bill' Hickok succeeds Tom 'Bear River' Smith as city marshal of Abilene, Kansas and remains in the position until December 13.",
    "media": { 
      "img": require("../images/1871-Wild_Bill_Abilene.jpg"),
      "alt": "Wild Bill Hickock"
    },
    "coords": ""
  },
  {
    "year": "1871",
    "location": "Camp Grant, Arizona",
    "date": "April 28",
    "description": "In what becomes known as the Camp Grant Massacre, over 100 Apache women and children are killed by a mob of Mexicans and Papago Indians led by several Tucson businessmen, including D.A. Bennett and Sam Hughes. Bennett and several others are indicted in December, though all are acquitted.",
    "media": { 
      "img": require("../images/1871-Camp_Grant.jpg"),
      "alt": "Photograph by John Karl Hillers showing Camp Grant, Arizona in 1870"
    },
    "coords": ""
  },
  {
    "year": "1871",
    "location": "Abilene, Kansas",
    "date": "June 14",
    "description": "Thomas Carson, reportedly a nephew of Kit Carson, is appointed to the Abilene police force under City Marshal 'Wild Bill' Hickok. After an incident with gunfighter John Wesley Hardin over Hardin's insistence on wearing his gun in public, Carson is hired briefly as deputy in Newton, Kansas before returning to Abilene in November. Carson and Deputy John W. 'Brocky Jack' Norton are fired from the police force on November 27 after assaulting a bartender.",
    "media": { 
      "img": require("../images/1871-John_Wesley_Hardin.png"),
      "alt": "John Wesley Hardin (May 26, 1853 – August 19, 1895) was an American Old West outlaw, gunfighter, and controversial folk icon was harassed by Abilene Police Officer Thomas Carson, resulting in Carson's removal from the town police force; Carson moved to a neighboring town to contiue working as a lawman, he was later rehired in Abilene and moved back, but was fired again shortly after for assaulting another local resident"
    },
    "coords": ""
  },
  {
    "year": "1871",
    "location": "Corydon, Iowa",
    "date": "June 30",
    "description": "Shortly after robbing a nearby bank, Jesse James addresses a crowd at a political rally in Corydon, Iowa.",
    "media": { 
      "img": require("../images/1871-Young_Jesse_James.jpg"),
      "alt": "Jesse James as a young man"
    },
    "coords": ""
  },
  {
    "year": "1871",
    "location": "Abilene, Kansas",
    "date": "October 5",
    "description": "Professional gambler Phil Coe is involved in a shootout with Abilene City Marshal 'Wild Bill' Hickok after Hickok attempts to censor a painting of a bull with abnormally large genitals in Coe's saloon. Deputy Mike Williams is killed when Hickok accidentally shoots him, and Coe dies from his wounds four days later.",
    "coords": ""
  },
  {
    "year": "1872",
    "location": "Washington, DC",
    "date": "",
    "description": "William F. 'Buffalo Bill' Cody, a scout for the U.S. 5th Cavalry Regiment, is awarded the Medal of Honor. Later that year, he and fellow scout John 'Texas Jack' Omohundro appear on stage for the first time, portraying themselves in 'Scouts of the Prairie'.",
    "media": { 
      "img": require("../images/1872-Buffalo_Bill_Cody.jpg"),
      "alt": "William Frederick 'Buffalo Bill' Cody (February 26, 1846 – January 10, 1917) was an American soldier, bison hunter, and showman"
    },
    "coords": ""
  },
  {
    "year": "1872",
    "location": "Ellsworth, Kansas",
    "date": "",
    "description": "Ellsworth, Kansas succeeds Abilene as the northern stopping point on the Old Texas cattle trail.",
    "media": { 
      "img": require("../images/1872-Cattle_trails.jpg"),
      "alt": "Map of major cattle trails with the Great Western Trail"
    },
    "coords": ""
  },
  {
    "year": "1872",
    "location": "Santa Fe Railroad",
    "date": "",
    "description": "Following the completion of the Santa Fe Railroad across the border of the Colorado Territory, the use of the Santa Fe Trail begins to decline, although Dodge City remains a major cattle town for the next decade. The Santa Fe Railroad also completes a rail line at Wichita, Kansas, causing a major population boom in the town over the next several years.",
    "media": { 
      "img": require("../images/1872-Santa_Fe_Railroad.jpg"),
      "alt": "A promotional brochure for the Santa Fe Railway's Scott Special passenger train"
    },
    "coords": ""
  },
  {
    "year": "1872",
    "location": "Yellowstone National Park",
    "date": "March 1",
    "description": "Yellowstone is designated America's first national park by President Ulysses S. Grant.",
    "media": { 
      "img": require("../images/1872-Yellowstone.jpg"),
      "alt": "Detailed pictorial map of Yellowstone National Park from 1904"
    },
    "coords": ""
  },
  {
    "year": "1872",
    "location": "Klamath County, Oregon",
    "date": "November 29",
    "description": "The Battle of Lost River results when the U.S. 1st Cavalry Regiment tries to force a band of Modoc Indians under Captain Jack to return to the Klamath Reservation in southern Oregon. In the subsequent Modoc War, a party of 53 Modoc warriors entrenched in the Lava Beds of northern California manages to hold off hundreds of U.S. soldiers for more than five months.",
    "media": { 
      "img": require("../images/1872-Lost_River.jpg"),
      "alt": "The Modoc War -- Soldiers Recovering the Bodies of the Slain, wood engraving published in Harper's Weekly, May 3, 1873"
    },
    "coords": ""
  },
  {
    "year": "1872",
    "location": "Arizona",
    "date": "December 28",
    "description": "U.S. Army cavalry under George Crook begin a campaign into Arizona's Tonto Basin by defeating the occupants of a Yavapai stronghold at the Battle of Salt River Canyon, part of the Yavapai War.",
    "coords": ""
  },
  {
    "year": "1873",
    "location": "Hartford, Connecticut",
    "date": "",
    "description": "The Colt Single Action Army revolver is first manufactured. It later becomes known as 'The Gun That Won the West'.",
    "media": { 
      "img": require("../images/1873-Colt_Single_Action.jpg"),
      "alt": "First Generation Colt Single Action Army Revolver"
    },
    "coords": ""
  },
  {
    "year": "1873",
    "location": "Washington, DC",
    "date": "March 3",
    "description": "Designed to encourage the cultivation of timber on the treeless Great Plains, the Timber Culture Act is signed into law by President Ulysses S. Grant. A follow-up to the Homestead Act of 1862, it permits homesteaders to claim 160 acres of public land on which they have planted and maintained at least 40 acres of timber for a minimum of 10 years.",
    "media": { 
      "img": require("../images/1873-Ulysses_S_Grant.jpg"),
      "alt": "Ulysses S. Grant (born Hiram Ulysses Grant; April 27, 1822 – July 23, 1885) was an American military officer and politician who served as the 18th president of the United States"
    },
    "coords": ""
  },
  {
    "year": "1873",
    "location": "Tonto Basin, Arizona",
    "date": "March 27",
    "description": "A combined force of U.S. Army soldiers and Apache Scouts wins another major victory over Yavapai and Tonto Apache warriors at the Battle of Turret Peak in central Arizona.",
    "media": { 
      "img": require("../images/1873-Apache_Scouts.jpg"),
      "alt": "Apache Scouts at Ft. Apache, Arizona Territory"
    },
    "coords": ""
  },
  {
    "year": "1873",
    "location": "Adair, Iowa",
    "date": "July 21",
    "description": "The James–Younger Gang commits the first train robbery in the history of the West by derailing a locomotive of the Rock Island Line west of Adair, Iowa and stealing $3,000 from the express safe and passengers on board.",
    "media": { 
      "img": require("../images/1873-James_Younger_Train_Derail.jpeg"),
      "alt": "The Rock Island Train, derailed during a robbery by the James-Younger Gang; although the Engineer was killed in the wreck and several other people were wounded, the gang did not harm any passengers and only stole from men, leving women and children alone with their belongings"
    },
    "coords": ""
  },
  {
    "year": "1873",
    "location": "Smith County, Kansas",
    "date": "December 1",
    "description": "'My Western Home', a poem by Dr. Brewster M. Higley, is first published in an issue of the Smith County Pioneer. It is set to music by Daniel E. Kelley and evolves into the classic western folk song 'Home on the Range', which is later adopted as the state song of Kansas.",
    "coords": ""
  },
  {
    "year": "1873",
    "location": "Kingston, California",
    "date": "December 26",
    "description": "Californio bandido Tiburcio Vásquez and his gang loot the town of Kingston in Fresno County, California.",
    "media": { 
      "img": require("../images/1873-Tiburcio_Vasquez.jpg"),
      "alt": "Tiburcio Vásquez (April 11, 1835 – March 19, 1875) was a Californio bandido who was active in California from 1854 to 1874; the Vasquez Rocks, 40 miles (64 km) north of Los Angeles, were one of his many hideouts and are named after him"
    },
    "coords": ""
  },
  {
    "year": "1874",
    "location": "Lincoln County, New Mexico",
    "date": "",
    "description": "Outlaws Ceberiano and Reymundo Aguilar are killed during the Harrold War of Lincoln County, New Mexico.",
    "coords": ""
  },
  {
    "year": "1874",
    "location": "St. Clair County, Missouri",
    "date": "March 17",
    "description": "John Younger is killed when he and his brother Jim assault two undercover Pinkerton detectives and a local sheriff in St. Clair County, Missouri.",
    "media": { 
      "img": require("../images/1874-John_Younger.jpg"),
      "alt": "John Harrison Younger (1851 – March 17, 1874) was an American outlaw, the brother of Cole, Jim and Bob; he was briefly a member of the James-Younger Gang, a band of outlaws that also included the famous Jesse James"
    },
    "coords": ""
  },
  {
    "year": "1874",
    "location": "Adobe Walls, Texas",
    "date": "June 27",
    "description": "While occupying an old trading post in the Texas panhandle, 28 bison hunters including 21-year-old Bat Masterson are besieged by 700 Comanche warriors at the Second Battle of Adobe Walls.",
    "media": { 
      "img": require("../images/1874-Billy_Dixon.jpg"),
      "alt": "William 'Billy' Dixon (September 25, 1850 – March 9, 1913), civilian reciepient of the Congressional Medal of Honor and credited by the US Army with an officialy confirmed sniper kill during the Second Battle of Adobe Walls from a distance of 1,538 yards, just under 9/10 of a mile, an international record shot that stood for 93 years until the Vietnam War in 1967"
    },
    "coords": ""
  },
  {
    "year": "1874",
    "location": "Morton County, South Dakota",
    "date": "July 1",
    "description": "An expedition led by Lt. Col. George Armstrong Custer embarks from Fort Abraham Lincoln to explore the previously uncharted Black Hills of present-day South Dakota. The expedition discovers placer gold, prompting a gold rush which draws thousands of settlers to the region over the next few years and thereby antagonizes the native Sioux inhabitants.",
    "media": { 
      "img": require("../images/1874-Custers_wagon_train.jpg"),
      "alt": "Custer's wagon train passing through Castle Creek Valley during the Black Hills Expedition of 1874"
    },
    "coords": ""
  },
  {
    "year": "1874",
    "location": "Canyon, Texas",
    "date": "September 28",
    "description": "The 4th U.S. Cavalry under Col. Ranald S. Mackenzie routs a large camp of Cheyenne, Comanche, and Kiowa Indians taking refuge in Palo Duro Canyon in the Texas panhandle.",
    "media": { 
      "img": require("../images/1874-Randall_S_Mackenzie.jpg"),
      "alt": "Major General Ranald Slidell 'Bad Hand' Mackenzie (July 27, 1840 – January 19, 1889) was a career United States Army officer and general in the Union Army during the American Civil War"
    },
    "coords": ""
  },
  {
    "year": "1874",
    "location": "DeKalb, Illinois",
    "date": "November 24",
    "description": "Joseph Glidden patents a type of barbed wire he calls 'The Winner', which becomes one of the most popular types in the country. His design is modified from a version patented by Henry B. Rose that was displayed at a county fair in Glidden's hometown of DeKalb, Illinois.",
    "coords": ""
  },
  {
    "year": "1874",
    "location": "Muncie, Kansas",
    "date": "December 8",
    "description": "The James–Younger Gang robs a train on the Kansas Pacific Railroad near Muncie, Kansas, stealing $30,000.",
    "coords": ""
  },
  {
    "year": "1875",
    "location": "Kearney, Missouri",
    "date": "January 25",
    "description": "Pinkerton agents throw an incendiary device into Jesse James' family home in Kearney, Missouri, killing James' 9-year-old half-brother and badly wounding his mother.",
    "media": { 
      "img": require("../images/1875-Jesse_James.png"),
      "alt": "A portrait of Jesse James; photo courtesy of the Library of Congress"
    },
    "coords": ""
  },
  {
    "year": "1875",
    "location": "New Mexico",
    "date": "August 8",
    "description": "Jermin Aguirre is killed near the San Augin Ranch in the New Mexico Territory.",
    "coords": ""
  },
  {
    "year": "1875",
    "location": "Tamaulipas, Mexico",
    "date": "November 19",
    "description": "The Las Cuevas War is fought when Texas Rangers commanded by Leander McNelly engage Mexican militia in Tamaulipas in an attempt to return stolen cattle to U.S. territory.",
    "media": { 
      "img": require("../images/1875-Leander_McNelly.jpg"),
      "alt": "Captain Leander H. McNelly (March 12, 1844 - September 4, 1877) was a Confederate officer and Texas Ranger captain"
    },
    "coords": ""
  },
  {
    "year": "1876",
    "location": "Dodge City, Kansas",
    "date": "",
    "description": "After being wounded in the hip during a gunfight in Sweetwater, Texas, Bat Masterson agrees to become assistant city marshal of Dodge City, Kansas.",
    "media": { 
      "img": require("../images/1876-Bat_Masterson.jpg"),
      "alt": "Bartholemew William Barclay 'Bat' Masterson (November 26, 1853 – October 25, 1921) was a U.S. Army scout, lawman, professional gambler, and journalist known for his exploits in the 19th and early 20th-century American Old West"
    },
    "coords": ""
  },
  {
    "year": "1876",
    "location": "Dakota Territory",
    "date": "March 17",
    "description": "When Sioux leaders Sitting Bull and Crazy Horse refuse to comply with the United States government's order to leave the Black Hills of the Dakota Territory, an expeditionary force commanded by General George Crook directs Colonel Joseph J. Reynolds to attack a Cheyenne encampment at the Battle of Powder River, thereby beginning the Great Sioux War.",
    "media": { 
      "img": require("../images/1876-Chief_Sitting_Bull.jpg"),
      "alt": "Sitting Bull (Lakota: Tȟatȟáŋka Íyotake [tˣaˈtˣə̃ka ˈi.jɔtakɛ]) (c. 1831 – December 15, 1890) was a Hunkpapa Lakota leader who led his people during years of resistance against United States government policies"
    },
    "coords": ""
  },
  {
    "year": "1876",
    "location": "Montana",
    "date": "June 17",
    "description": "General George Crook's forces are defeated by Crazy Horse at the Battle of the Rosebud. The defeat convinces Crook to withdraw from his planned offensive and await reinforcements.",
    "media": { 
      "img": require("../images/1876-Battle_of_Rosebud.jpg"),
      "alt": "The Sioux charging Colonel Royall's detachment of Cavalry, June 17th, 1876, wood engraving"
    },
    "coords": ""
  },
  {
    "year": "1876",
    "location": "Montana",
    "date": "June 25",
    "description": "While leading an attack into a Sioux village in the Montana Territory, the U.S. 7th Cavalry Regiment under Brig. Gen. George Armstrong Custer is ambushed and massacred by over 2,000 Lakota and Cheyenne warriors led by Sitting Bull and Crazy Horse at the Battle of the Little Bighorn.",
    "media": { 
      "img": require("../images/1876-George_Armstrong_Custer.jpg"),
      "alt": "General George Armstrong Custer (December 5, 1839 – June 25, 1876) was a United States Army officer and cavalry commander in the American Civil War and the American Indian Wars"
    },
    "coords": ""
  },
  {
    "year": "1876",
    "location": "Denver, Colorado",
    "date": "August 1",
    "description": "Colorado is admitted as the 38th U.S. state.",
    "media": { 
      "img": require("../images/1876-Colorado_State_Seal.png"),
      "alt": "The Great Seal of the State of Colorado"
    },
    "coords": ""
  },
  {
    "year": "1876",
    "location": "Deadwood, Dakota Territory",
    "date": "August 2",
    "description": "'Wild Bill' Hickok is shot and killed by Jack McCall during a poker game in Deadwood, Dakota Territory.",
    "media": { 
      "img": require("../images/1876-Wild_Bill_Death.jpg"),
      "alt": "James Butler Hickok (May 27, 1837 – August 2, 1876), better known as 'Wild Bill' Hickok, was a folk hero of the American Old West known for his life on the frontier as a soldier, scout, lawman, gambler, showman, and actor, and for his involvement in many famous gunfights"
    },
    "coords": ""
  },
  {
    "year": "1876",
    "location": "Northfield, Minnesota",
    "date": "September 7",
    "description": "Several members of the James–Younger Gang, including Cole Younger, are captured after the failed robbery of the First National Bank leads to a gunfight with bank employees and local residents in Northfield, Minnesota.",
    "media": { 
      "img": require("../images/1876-Cole_Younger.jpg"),
      "alt": "Portrait photograph taken of Thomas Coleman 'Cole' Younger while he was a prisoner at the Minnesota State Prison c. 1889"
    },
    "coords": ""
  },
  {
    "year": "1876",
    "location": "Dakota Territory",
    "date": "September 9",
    "description": "In the first U.S. Army victory since the disaster at the Little Bighorn, a punitive expedition led by George Crook destroys an Oglala Lakota village led by Chief American Horse at the Battle of Slim Buttes in present-day South Dakota.",
    "media": { 
      "img": require("../images/1876-George_Crook.jpg"),
      "alt": "General George R. Crook (September 8, 1828 – March 21, 1890) was a career United States Army officer, most noted for his distinguished service during the American Civil War and the Indian Wars; during the 1880s, the Apache nicknamed Crook Nantan Lupan, which means 'Grey Wolf'"
    },
    "coords": ""
  },
  {
    "year": "1877",
    "location": "Fort Robinson, Nebraska",
    "date": "May 5",
    "description": "Crazy Horse surrenders to the U.S. Army at the Red Cloud Agency near Fort Robinson, Nebraska.",
    "media": { 
      "img": require("../images/1877-Crazy_Horse_Surrender.jpg"),
      "alt": "Crazy Horse and his people on their way from Camp Sheridan to surrender to General Crook at Red Cloud Agency"
    },
    "coords": ""
  },
  {
    "year": "1877",
    "location": "Idaho Territory",
    "date": "June 17",
    "description": "Anticipating retaliation for recent crimes against white settlers and reluctant to move to a reservation, about 600 Nez Perce Indians led by Chief Joseph, Ollokot, and White Bird begin a long retreat from western Idaho with the U.S. Army in pursuit. They defeat their pursuers at the Battle of White Bird Canyon, and the Nez Perce War begins.",
    "media": { 
      "img": require("../images/1877-Chief_Joseph.jpg"),
      "alt": "Chief Joseph (March 3, 1840 - September 21, 1904) was a leader of the Wal-lam-wat-kain (Wallowa) band of Nez Perce, a Native American tribe of the interior Pacific Northwest region of the United States, in the latter half of the 19th century"
    },
    "coords": ""
  },
  {
    "year": "1877",
    "location": "Montana",
    "date": "August 9",
    "description": "The Battle of the Big Hole is fought in the Montana Territory between the Nez Perce and U.S. soldiers under Col. John Gibbon.",
    "media": { 
      "img": require("../images/1877-Battle_of_the_Big_Hole.jpg"),
      "alt": "This photo of Chief Joseph and Brigadier General John Gibbon was taken at Lake Chelan in 1889, shortly before Chief Joseph visited Vancouver Barracks, 12 years after fighting against each other at the Battle of the Big Hole"
    },
    "coords": ""
  },
  {
    "year": "1877",
    "location": "Fort Grant, Arizona",
    "date": "August 17",
    "description": "At 17 years old, Henry McCarty, later known as 'Billy the Kid', shoots his first man, Frank 'Windy' Cahill, after Cahill wrestles him to the ground at a saloon near Fort Grant, Arizona. Cahill dies the following day.",
    "media": { 
      "img": require("../images/1877-Billy_the_Kid_(left)_Croquet.jpeg"),
      "alt": "Photograph purporting to show Henry 'Billy the Kid' McCarty (left) playing croquet in 1878"
    },
    "coords": ""
  },
  {
    "year": "1877",
    "location": "Fort Robinson, Nebraska",
    "date": "September 5",
    "description": "Four months after his surrender, Oglala war leader Crazy Horse is fatally stabbed with a bayonet by a U.S. Army soldier while allegedly resisting imprisonment at Fort Robinson.",
    "media": { 
      "img": require("../images/1877-Crazy_Horse_Memorial.jpg"),
      "alt": "The Crazy Horse Memorial in Crazy Horse, South Dakota"
    },
    "coords": ""
  },
  {
    "year": "1877",
    "location": "Big Springs, Nebraska",
    "date": "September 18",
    "description": "A gang led by Sam Bass robs a Union Pacific train of more than $60,000 ($1.4 million adjusted for inflation to 2020 value) while it is stopped at a remote water station near present-day Big Springs, Nebraska.",
    "media": { 
      "img": require("../images/1877-Sam_Bass.jpeg"),
      "alt": "Sam Bass (July 21, 1851 - July 21 1878) was a 19th-century American train robber, outlaw, and outlaw gang leader"
    },
    "coords": ""
  },
  {
    "year": "1877",
    "location": "Arizona",
    "date": "September 21",
    "description": "Prospector Ed Schieffelin files his first mining claim after discovering silver ore on a high plateau between the San Pedro River and the Dragoon Mountains in southeastern Arizona Territory. He names his stake 'Tombstone'.",
    "media": { 
      "img": require("../images/1877-Ed-Schieffelin.jpg"),
      "alt": "Ed Schieffelin (1847 - May 12, 1897) was an Indian scout and prospector who discovered silver in the Arizona Territory, which led to the founding of Tombstone, Arizona"
    },
    "coords": ""
  },
  {
    "year": "1877",
    "location": "Montana",
    "date": "October 5",
    "description": "Cornered at the Battle of Bear Paw, just 40 miles south of the Canadian border in the Montana Territory, Chief Joseph and his dwindling band of Nez Perce surrender to the U.S. Army under Generals Oliver O. Howard and Nelson A. Miles, ending the Nez Perce War.",
    "media": { 
      "img": require("../images/1877-Howard_and_Miles.png"),
      "alt": "Oliver O. Howard (November 8, 1830 - October 26, 1909), left.  Nelson A. Miles (August 8, 1839 - May 15, 1925), right"
    },
    "coords": ""
  },
  {
    "year": "1877",
    "location": "San Elizario, Texas",
    "date": "December 17",
    "description": "In the San Elizario Salt War, years of legal conflict over the application of individual mineral rights to traditionally community-held salt lakes near the Guadalupe Mountains reach a climax when a detachment of Texas Rangers surrenders to a popular army of Tejano citizens following a four-day siege in the town of San Elizario, Texas. More than a dozen people are killed in the exchange.",
    "media": { 
      "img": require("../images/1877-San_Elizaro_Rangers.jpg"),
      "alt": "Three of the surrendering Texas Rangers at San Elizario, c. 1878; photo of Texas Rangers Andy and Tom Zickefoose, with an unidentified man in the middle"
    },
    "coords": ""
  },
  {
    "year": "1878",
    "location": "Lincoln County, New Mexico",
    "date": "February 18",
    "description": "A young Billy the Kid watches as his boss, New Mexico rancher John Tunstall, is murdered in cold blood by Sheriff William J. Brady and his posse, whose members include gunman Charles Wolz, beginning the Lincoln County War.",
    "media": { 
      "img": require("../images/1878-Torreon_Lincoln_County.jpg"),
      "alt": "The Torreon, where Murphy's sharpshooters were stationed"
    },
    "coords": ""
  },
  {
    "year": "1878",
    "location": "Leadville, Colorado",
    "date": "February 18",
    "description": "The town of Leadville is incorporated in Colorado.  Today, it still remains as the highest altitude incorporated place in the United States, at over 10,000 ft elevation.",
    "media": { 
      "img": require("../images/1878-Leadville.jpg"),
      "alt": "Leadville, Colorado in 1879, courtesy of Western Mining History"
    },
    "coords": ""
  },
  {
    "year": "1878",
    "location": "Cimarron, New Mexico",
    "date": "June 18",
    "description": "Nick Worthington, a well-known outlaw throughout New Mexico and Colorado, is killed by residents of Cimarron, New Mexico after killing several men and stealing horses.",
    "coords": ""
  },
  {
    "year": "1878",
    "location": "Lincoln, New Mexico",
    "date": "July 15",
    "description": "The Battle of Lincoln takes place over five days in Lincoln, New Mexico. Alexander McSween, former partner of John Tunstall, is shot and killed on July 19, along with gunman Francisco Zamora.",
    "media": { 
      "img": require("../images/1878-Lewis_Wallace.jpg"),
      "alt": "Lew Wallace (April 10, 1827 - February 15, 1905), 11th Governor of New Mexico Territory, negotiated peace between local residents and corrupt local officials in the Lincoln County War"
    },
    "coords": ""
  },
  {
    "year": "1879",
    "location": "New Mexico and Arizona Territories",
    "date": "",
    "description": "Ike and Billy Clanton enlist William 'Curly Bill' Brocius and Johnny Ringo as they begin cattle rustling in the New Mexico and Arizona Territories.",
    "media": { 
      "img": require("../images/1879-Billy_Clanton_Tombstone_Shootout.jpg"),
      "alt": "Tom McLaury, Frank McLaury and Billy Clanton (left to right) lie dead after the gunfight at the O.K. Corral, this is the only known photo of 19 year-old Billy"
    },
    "coords": ""
  },
  {
    "year": "1879",
    "location": "Chicago, Illinois",
    "date": "January",
    "description": "Captain Marcus Reno, the highest-ranking officer to have survived the Battle of the Little Bighorn, is brought before a general court-martial but is acquitted of cowardice.",
    "media": { 
      "img": require("../images/1879-The_Custer_Fight.jpg"),
      "alt": "Lithograph showing the Battle of Little Bighorn from the Indian side, by Charles Marion Russell"
    },
    "coords": ""
  },
  {
    "year": "1879",
    "location": "Dodge City, Kansas",
    "date": "April 5",
    "description": "Gambler Frank Loving kills Levi Richardson in a gunfight at the Long Branch Saloon in Dodge City, Kansas.",
    "media": { 
      "img": require("../images/1879-Long_Branch_Saloon.jpg"),
      "alt": "Inside the Long Branch Saloon, c. 1880"
    },
    "coords": ""
  },
  {
    "year": "1879",
    "location": "Western Colorado",
    "date": "September 29",
    "description": "In the White River War, Nathan Meeker and ten employees of the White River Indian Agency in western Colorado are massacred by Ute Indians when Meeker wires for military assistance in suppressing a perceived uprising. The Utes besiege a U.S. Army detachment in the Battle of Milk Creek until it is relieved by troops under Col. Wesley Merritt on October 5.",
    "media": { 
      "img": require("../images/1879-Chief_Ouray_and_Chipeta.jpg"),
      "alt": "Chief Ouray (1833 – August 24, 1880) and Chipeta (or White Singing Bird) (1843 or 1844 – August 1924) was a Native American chief of the Tabeguache (Uncompahgre) band of the Ute tribe"
    },
    "coords": ""
  },
  {
    "year": "1880",
    "location": "Fort Worth, Texas",
    "date": "",
    "description": "George Alford is sentenced to five years imprisonment for murdering a sheriff in Fort Worth, Texas.",
    "coords": ""
  },
  {
    "year": "1880",
    "location": "Las Vegas, New Mexico",
    "date": "March 2",
    "description": "James Allen kills James Moorehead after ordering eggs in a tavern in Las Vegas, New Mexico and, after escaping from prison for Moorehead's murder, is killed by a posse.",
    "coords": ""
  },
  {
    "year": "1880",
    "location": "Tombstone, Arizona",
    "date": "May 1",
    "description": "The Tombstone Epitaph prints its first issue in Tombstone, Arizona. It remains the oldest continuously published newspaper in the state.",
    "media": { 
      "img": require("../images/1880-Tombstone_Epitaph.jpg"),
      "alt": "Tombstone Epitaph Building in Tombstone, Arizona"
    },
    "coords": ""
  },
  {
    "year": "1880",
    "location": "Hanford, California",
    "date": "May 11",
    "description": "A dispute over land titles between settlers of California's San Joaquin Valley and the Southern Pacific Railroad leaves seven people dead in what is later called the Mussel Slough Tragedy.",
    "media": { 
      "img": require("../images/1880-Mussel_Slough.jpg"),
      "alt": "'The Retribution Comet' – Editorial cartoon published in The Wasp, July 8, 1881, depicting a comet with a skull about to strike railroad tycoons Leland Stanford and Collis Potter Huntington, shown robbing the graves of the Mussel Slough victims"
    },
    "coords": ""
  },
  {
    "year": "1880",
    "location": "Fort Sumner, New Mexico",
    "date": "December 19",
    "description": "Tom O'Folliard, best friend of Billy the Kid, is shot and killed by members of Pat Garrett's posse in Fort Sumner, New Mexico.",
    "media": { 
      "img": require("../images/1880-Tom_O'Folliard.jpg"),
      "alt": "Tom O'Folliard (1858 – December 19, 1880) was the best friend of outlaw William 'Billy the Kid' Bonney who were both members of the Regulators during the Lincoln County War"
    },
    "coords": ""
  },
  {
    "year": "1880",
    "location": "Stinking Springs, New Mexico",
    "date": "December 23",
    "description": "Charlie Bowdre, a member of Billy the Kid's gang, is shot and killed by members of Pat Garrett's posse at Stinking Springs, New Mexico.",
    "media": { 
      "img": require("../images/1880-Charlie_Bowdre.jpg"),
      "alt": "Charles Bowdre (1848 – December 23, 1880) was an American cowboy and outlaw; he was an associate of Billy the Kid and member of his gang"
    },
    "coords": ""
  },
  {
    "year": "1880",
    "location": "Socorro, New Mexico",
    "date": "December 24",
    "description": "Abran Baca kills A.M. Conklin in Socorro, New Mexico with several other outlaws, though he is acquitted the following year.",
    "coords": ""
  },
  {
    "year": "1881",
    "location": "Phoenix, Arizona",
    "date": "February 5",
    "description": "The city of Phoenix is incorporated in the Arizona Territory.",
    "media": { 
      "img": require("../images/1881-Phoenix.jpg"),
      "alt": "Aerial lithograph of Phoenix from 1885"
    },
    "coords": ""
  },
  {
    "year": "1881",
    "location": "El Paso, Texas",
    "date": "April 14",
    "description": "A gunfight involving El Paso, Texas Marshal Dallas Stoudenmire results in what witnesses recall as 'four dead in five seconds'.",
    "media": { 
      "img": require("../images/1881-Dallas_Stoudenmire.jpg"),
      "alt": "Dallas Stoudenmire (December 11, 1845 – September 18, 1882) was an American Old West gunfighter and lawman who had a deadly reputation in his day and was involved in several gunfights; he gained fame for a brief gunfight that was later dubbed the 'Four Dead in Five Seconds Gunfight.'"
    },
    "coords": ""
  },
  {
    "year": "1881",
    "location": "Fort Sumner, New Mexico",
    "date": "July 14",
    "description": "Billy the Kid is shot and killed by Sheriff Pat Garrett in Fort Sumner, New Mexico. He is buried the next day between his friends Tom O'Folliard and Charlie Bowdre in the town's old military cemetery.",
    "media": { 
      "img": require("../images/1881-Billy_the_Kid.jpg"),
      "alt": "Billy the Kid (born Henry McCarty; September 17 or November 23, 1859 – July 14, 1881), also known by the pseudonym William H. Bonney, was an outlaw and gunfighter of the American Old West, who killed eight men before he was shot and killed at the age of 21"
    },
    "coords": ""
  },
  {
    "year": "1881",
    "location": "Dakota Territory",
    "date": "August 5",
    "description": "Crow Dog, a Lakota subchief on the Great Sioux Reservation, shoots and kills Chief Spotted Tail. Though the matter is settled by tribal custom, Crow Dog is sentenced to death under the laws of the Dakota Territory, only to be freed by a decision of the U.S. Supreme Court.",
    "media": { 
      "img": require("../images/1881-Spotted_Tail.jpg"),
      "alt": "Spotted Tail (Siŋté Glešká Siouan: [sɪ̃ˈte glɛˈʃka]; pronounced gleh-shka; birth name T'at'aŋka Napsíca 'Jumping Buffalo' Siouan: [t'at'ə̃ka naˈpsit͡ʃa]); born c. 1823 – died August 5, 1881) was a Brulé Lakota tribal chief"
    },
    "coords": ""
  },
  {
    "year": "1881",
    "location": "Tombstone, Arizona",
    "date": "October 26",
    "description": "The Gunfight at the O.K. Corral takes place in the street behind a saloon in Tombstone, Arizona, pitting the Earps and Doc Holliday against Ike and Billy Clanton, Frank and Tom McLaury, and Billy Claiborne. Billy Clanton and the McLaurys are killed, and Virgil and Morgan Earp, along with Holliday, are wounded.",
    "media": { 
      "img": require("../images/1881-Doc_Holliday.jpg"),
      "alt": "John Henry 'Doc' Holliday (August 14, 1851 – November 8, 1887) was an American gambler, gunfighter, and dentist"
    },
    "coords": ""
  },
  {
    "year": "1881",
    "location": "San Jose, California",
    "date": "December 13",
    "description": "San Jose, California becomes the first city west of the Rocky Mountains with civic electric lighting when a 237-foot-tall moonlight tower is illuminated downtown.",
    "media": { 
      "img": require("../images/1881-San_Jose.jpg"),
      "alt": "A postcard depicting the San Jose Moontower; the design of the Eiffel Tower, in Paris, France, was inspired by the San Jose Moontower"
    },
    "coords": ""
  },
  {
    "year": "1882",
    "location": "Tombstone, Arizona",
    "date": "March 18",
    "description": "Morgan Earp is shot and killed while playing billiards in Tombstone, Arizona. His assassination is linked to his involvement in the Gunfight at the O.K. Corral.",
    "media": { 
      "img": require("../images/1882-Morgan_Earp.jpg"),
      "alt": "Morgan Seth Earp (April 24, 1851 – March 18, 1882) was an American sheriff and lawman; he served as Tombstone, Arizona's Special Policeman when he helped his brothers Virgil and Wyatt, as well as Doc Holliday, confront the outlaw Cochise County Cowboys in the Gunfight at the O.K. Corral"
    },
    "coords": ""
  },
  {
    "year": "1882",
    "location": "Iron Springs, Arizona",
    "date": "March 24",
    "description": "Outlaw William 'Curly Bill' Brocius is shot and killed by Wyatt Earp at Iron Springs in southeastern Arizona.",
    "media": { 
      "img": require("../images/1882-Curly_Bill_Brocius.jpg"),
      "alt": "William Brocius (c. 1845 – March 24, 1882), better known as Curly Bill Brocius, was an American gunman, rustler and an outlaw Cowboy in the Cochise County area of the Arizona Territory during the late 1870s and early 1880s"
    },
    "coords": ""
  },
  {
    "year": "1882",
    "location": "St. Joseph, Missouri",
    "date": "April 3",
    "description": "Jesse James is shot in the back of the head by Robert Ford, a new recruit to his gang, at his home in St. Joseph, Missouri.",
    "media": { 
      "img": require("../images/1882-Robert_Ford.jpg"),
      "alt": "Robert Newton Ford (January 31, 1862 – June 8, 1892) was an American outlaw best known for his assassination of Jesse James on April 3, 1882"
    },
    "coords": ""
  },
  {
    "year": "1882",
    "location": "Trinidad, Colorado",
    "date": "April 16",
    "description": "John Allen mortally wounds Frank Loving during a shootout in Trinidad, Colorado.",
    "coords": ""
  },
  {
    "year": "1882",
    "location": "Washington, D.C.",
    "date": "May 6",
    "description": "President Chester A. Arthur signs the Chinese Exclusion Act, which effects a near-complete ban on Chinese immigration and naturalization in the United States. The law is especially significant for the burgeoning railroad and mining industries in the West, which had previously relied largely on low-wage Chinese labor. Though the original act is set to expire in ten years, it is renewed in 1892 and again in 1902.",
    "media": { 
      "img": require("../images/1882-Chester_Alan_Arthur.jpg"),
      "alt": "Chester Alan Arthur (October 5, 1829 – November 18, 1886) was an American lawyer and politician who served as the 21st president of the United States"
    },
    "coords": ""
  },
  {
    "year": "1882",
    "location": "Big Dry Wash, Arizona",
    "date": "July 17",
    "description": "U.S. cavalry under Adna R. Chaffee and Andrew W. Evans pursue and defeat warriors of the White Mountain Apache tribe at the Battle of Big Dry Wash in the Arizona Territory.",
    "coords": ""
  },
  {
    "year": "1882",
    "location": "Tombstone, Arizona",
    "date": "November 14",
    "description": "'Buckskin' Frank Leslie shoots and kills outlaw Billy Claiborne while bartending at the Oriental Saloon in Tombstone, Arizona.",
    "media": { 
      "img": require("../images/1882-Buckskin_and_Claiborne.png"),
      "alt": "Buckskin Franklyn Leslie (March 18, 1842 – after 1920), on the left; Billy Claiborne (1860 – November 14, 1882), on the right"
    },
    "coords": ""
  },
  {
    "year": "1883",
    "location": "Independence Creek, Montana",
    "date": "January 12",
    "description": "The Southern section of the second transcontinental railroad line is completed.",
    "media": { 
      "img": require("../images/1883-Southern_Pacific.jpg"),
      "alt": "A Southern Pacific train at Los Angeles' Arcade Depot in 1891"
    },
    "coords": ""
  },
  {
    "year": "1883",
    "location": "Montana",
    "date": "September 8",
    "description": "The Northern Pacific Railroad is completed near Independence Creek in western Montana Territory, connecting St. Paul, Minnesota with the Washington Territory.",
    "media": { 
      "img": require("../images/1883-Northern_Pacific_Railway.jpeg"),
      "alt": "The line encouraged people to make their homes in the Pacific Northwest by having an 'immigration agent' and offering special excursion trains for prospective buyers during the winter months"
    },
    "coords": ""
  },
  {
    "year": "1883",
    "location": "Bisbee, Arizona",
    "date": "December 8",
    "description": "In the Bisbee massacre, five outlaws rob a general store in Bisbee, Arizona and kill four people in the process.",
    "coords": ""
  },
  {
    "year": "1884",
    "location": "San Antonio, Texas",
    "date": "March 11",
    "description": "Former lawmen Ben Thompson and John King Fisher are ambushed and killed by enemies of Thompson at the Jack Harris Vaudeville Saloon and Theater in San Antonio, Texas.",
    "media": { 
      "img": require("../images/1884-Thompson_and_King.png"),
      "alt": "Ben Thompson (November 2, 1843 – March 11, 1884), on the left; John King Fisher (October 1853 – March 11, 1884), on the right"
    },
    "coords": ""
  },
  {
    "year": "1884",
    "location": "Dodge City, Kansas",
    "date": "April 10",
    "description": "Lawman William 'Bill' Tilghman is appointed city marshal of Dodge City, Kansas.",
    "media": { 
      "img": require("../images/1884-William_Tilghman.jpg"),
      "alt": "William Matthew Tilghman Jr. (July 4, 1854 – November 1, 1924) was a career lawman, gunfighter, and politician in Kansas and Oklahoma during the late 19th century"
    },
    "coords": ""
  },
  {
    "year": "1884",
    "location": "District of Alaska",
    "date": "May 17",
    "description": "The Department of Alaska is organized into the District of Alaska.",
    "media": { 
      "img": require("../images/1884-District_of_Alaska_Seal.png"),
      "alt": "The Official Seal of the District of Alaska"
    },
    "coords": ""
  },
  {
    "year": "1884",
    "location": "Reserve, New Mexico",
    "date": "December 1",
    "description": "A 36-hour standoff begins in the town of Reserve, New Mexico when a posse of Texan cowboys confronts lawman Elfego Baca for having arrested an intoxicated cowboy.",
    "media": { 
      "img": require("../images/1884-Elfebo_Baca.png"),
      "alt": "Elfego Baca (February 10, 1865 – August 27, 1945) was a gunman, lawman, lawyer, and politician in New Mexico; during the later years of the New Mexico Territory frontier he became an American folk hero"
    },
    "coords": ""
  },
  {
    "year": "1885",
    "location": "Rock Springs, Wyoming",
    "date": "September 2",
    "description": "Years of racial tension, aggravated by labor unrest over the preferential hiring of Chinese immigrants for very low wages, come to a head in the Rock Springs massacre, which leaves at least 28 Chinese coal miners dead at the hands of white miners in the town of Rock Springs, Wyoming. The riot touches off a wave of anti-Chinese violence across the country.",
    "media": { 
      "img": require("../images/1885-Rock_Springs.jpg"),
      "alt": "'The Massacre of the Chinese at Rock Springs, Wyoming': Illustration of the 1885 riot and massacre of Chinese-American coal miners, by white miners, wood engraving from Harper's Weekly: Harper's Weekly, Vol. 29"
    },
    "coords": ""
  },
  {
    "year": "1886",
    "location": "Coeur d’Alene, Idaho",
    "date": "",
    "description": "Jack Langrishe, a popular western entertainer, is elected justice in Coeur d’Alene, Idaho.",
    "media": { 
      "img": require("../images/1886-Jack_Langrishe.jpg"),
      "alt": "John Sewell 'Jack' Langrishe (September 24, 1825 – December 12, 1895), popularly known as the 'Comedian of the Frontier', was an Irish-American actor and impresario who travelled extensively throughout the American West and later in life became one of the first State Senators of Idaho"
    },
    "coords": ""
  },
  {
    "year": "1886",
    "location": "Parral, Mexico",
    "date": "February 18",
    "description": "Dave Rudabaugh, a former member of Billy the Kid's Dodge City Gang, is reportedly captured and decapitated by townspeople after terrorizing the village of Parral, Mexico.",
    "coords": ""
  },
  {
    "year": "1886",
    "location": "Tascosa, Texas",
    "date": "March 21",
    "description": "The 'Big Fight' takes place in Tascosa, Texas, when three ex-members of Pat Garrett's 'Home Rangers' are killed by rival ranch hands and gunmen.",
    "coords": ""
  },
  {
    "year": "1886",
    "location": "Fort Fred Steele, Wyoming",
    "date": "August 7",
    "description": "Fort Fred Steele, used to protect railroads from local Native American tribes in the Wyoming Territory, is closed.",
    "coords": ""
  },
  {
    "year": "1886",
    "location": "Fort Duchesne, Utah",
    "date": "August 20",
    "description": "Fort Duchesne is officially opened by Major Frederick William Benteen in the Utah Territory.",
    "media": { 
      "img": require("../images/1886-Frederick_W_Benteen.jpg"),
      "alt": "Frederick William Benteen (August 24, 1834 – June 22, 1898) was a military officer who first fought during the American Civil War"
    },
    "coords": ""
  },
  {
    "year": "1886",
    "location": "Fort Grant, Arizona",
    "date": "September 4",
    "description": "Apache renegade Geronimo surrenders to forces under General Nelson Miles and is taken into custody at Fort Grant, Arizona. His surrender is often considered the end of the Apache Wars.",
    "media": { 
      "img": require("../images/1886-Goyaale.jpg"),
      "alt": "Geronimo (Mescalero-Chiricahua: Goyaałé, Athabaskan pronunciation: [kòjàːɬɛ́], lit. 'the one who yawns'; June 16, 1829 – February 17, 1909) was a prominent leader and medicine man from the Bedonkohe band of the Ndendahe Apache people"
    },
    "coords": ""
  },
  {
    "year": "1886",
    "location": "Bellevue, Texas",
    "date": "December 1",
    "description": "Brothers Jim and Rube Burrow rob their first train in Bellevue, Texas.",
    "media": { 
      "img": require("../images/1886-Rube_Burrow.jpg"),
      "alt": "Reuben Houston 'Rube' Burrow (December 11, 1855 – October 9, 1890) was an infamous train-robber and outlaw in the Southern and Southwestern United States"
    },
    "coords": ""
  },
  {
    "year": "1887",
    "location": "Great Plains",
    "date": "January 1",
    "description": "The extremely harsh winter of 1886–87 devastates the American cattle industry, leading to the end of the open range era. As a result, cattle ranching is completely reorganized and the period of the great cattle drives is over.",
    "media": { 
      "img": require("../images/1887-Great_Plains.jpg"),
      "alt": "Waiting for a Chinook, by Charles Marion Russell; overgrazing and harsh winters were factors that brought an end to the age of the Open Range"
    },
    "coords": ""
  },
  {
    "year": "1887",
    "location": "Washington, D.C.",
    "date": "February 8",
    "description": "The Dawes Act is signed into law by President Grover Cleveland, permitting the federal government to divide communal Native American lands into privately owned allotments and to grant United States citizenship to individual allottees. Intended as a way to modernize the reservation system and assimilate Native Americans into mainstream society, the act forces the sale and redistribution of nearly 90 million acres of Indian lands in the West to white settlers and commercial interests over the next five decades.",
    "media": { 
      "img": require("../images/1887-Grover_Cleveland.jpg"),
      "alt": "Stephen Grover Cleveland (March 18, 1837 – June 24, 1908) was an American lawyer and politician who served as the 22nd and 24th president of the United States"
    },
    "coords": ""
  },
  {
    "year": "1887",
    "location": "Fort Worth, Texas",
    "date": "February 8",
    "description": "Luke Short kills former Fort Worth, Texas Marshal Jim Courtright in a gunfight on the streets of Fort Worth. The shooting is ruled self-defense, since Courtright drew his pistol first.",
    "media": { 
      "img": require("../images/1887-Short_and_Courtright.png"),
      "alt": "Luke Lamar Short (January 22, 1854 – September 8, 1893), on the left; Timothy Isaiah Courtright (1848 – February 8, 1887), also known as 'Longhair Jim' or 'Big Jim' Courtright, on the right"
    },
    "coords": ""
  },
  {
    "year": "1888",
    "location": "Dakota Territory, Nebraska, and Kansas",
    "date": "January 12",
    "description": "A severe winter storm known as the Schoolhouse Blizzard kills more than 235 people across a vast area of the Great Plains including the Dakota Territory, Nebraska, and Kansas.",
    "media": { 
      "img": require("../images/1888-Schoolhouse_Blizzard.jpg"),
      "alt": "Scenes and Incidents from the Recent Terrible Blizzard in Dakota on January 12, 1888; published in Frank Leslie's Weekly"
    },
    "coords": ""
  },
  {
    "year": "1888",
    "location": "Cliff Palace of Mesa Verde, Colorado",
    "date": "December 18",
    "description": "Richard Wetherill and his brother-in-law discover the Cliff Palace of Mesa Verde in southwestern Colorado.",
    "media": { 
      "img": require("../images/1888-Mesa_Verde.jpg"),
      "alt": "Cliff Palace in 1891"
    },
    "coords": ""
  },
  {
    "year": "1889",
    "location": "Cimarron, Kansas",
    "date": "January 12",
    "description": "During the Gray County War, a shootout erupts in Cimarron, Kansas when a party led by Bill Tilghman raids the Old Gray County Courthouse in an attempt to bring the county records to the neighboring town of Ingalls.",
    "media": { 
      "img": require("../images/1889-Old_Gray_Courthouse.jpg"),
      "alt": "The old Gray County Courthouse in Cimarron, Kansas"
    },
    "coords": ""
  },
  {
    "year": "1889",
    "location": "Oklahoma",
    "date": "February 3",
    "description": "Belle Starr is murdered in Oklahoma.",
    "media": { 
      "img": require("../images/1889-Belle_Starr.jpg"),
      "alt": "Myra Maybelle Shirley Reed Starr (February 5, 1848 – February 3, 1889), better known as Belle Starr, was an American outlaw who gained national notoriety after her violent death"
    },
    "coords": ""
  },
  {
    "year": "1889",
    "location": "Oklahoma",
    "date": "April 22",
    "description": "An estimated 50,000 homesteaders rush to claim nearly two million acres of unoccupied land appropriated for public settlement from ceded Native American territory in what is now central Oklahoma. It is the first of several major land runs in the region.",
    "media": { 
      "img": require("../images/1889-Land_Rush_Oklahoma.jpg"),
      "alt": "Postcard depicting the land rush in Oklahoma, 1889"
    },
    "coords": ""
  },
  {
    "year": "1889",
    "location": "Fort Thomas, Arizona",
    "date": "May 11",
    "description": "U.S. Army paymaster Joseph W. Wham and his escort of eleven Buffalo Soldiers are ambushed and robbed of more than $28,000 in gold and silver coins by a posse of bandits on the road to Fort Thomas, Arizona Territory. The bandits are never captured.",
    "media": { 
      "img": require("../images/1889-Buffalo_Soldiers.jpg"),
      "alt": "Buffalo soldiers of the 25th Infantry, some wearing buffalo robes, Ft. Keogh, Montana, 1890"
    },
    "coords": ""
  },
  {
    "year": "1889",
    "location": "Seattle, Washington",
    "date": "June 6",
    "description": "The Great Seattle Fire destroys the entire central business district in Seattle, Washington Territory, eventually burning 25 city blocks and costing the city nearly $20 million.",
    "media": { 
      "img": require("../images/1889-Seattle_fire.jpg"),
      "alt": "Looking toward Elliott Bay, Seattle from the burned-over district"
    },
    "coords": ""
  },
  {
    "year": "1889",
    "location": "Telluride, Colorado",
    "date": "June 24",
    "description": "Outlaw Butch Cassidy robs his first bank in Telluride, Colorado before fleeing to the remote hideout of Robbers Roost.",
    "media": { 
      "img": require("../images/1889-Butch_Cassidy.png"),
      "alt": "Robert LeRoy Parker (April 13, 1866 – November 7, 1908), better known as Butch Cassidy"
    },
    "coords": ""
  },
  {
    "year": "1889",
    "location": "The States of North and South Dakota",
    "date": "November 2",
    "description": "North Dakota and South Dakota are admitted as the 39th and 40th U.S. states.",
    "media": { 
      "img": require("../images/1889-Dakota_State_Seals.png"),
      "alt": "Each of The Great Seals of the States of North and South Dakota"
    },
    "coords": ""
  },
  {
    "year": "1889",
    "location": "Globe, Arizona",
    "date": "November 2",
    "description": "Eight imprisoned Apache renegades, including the Apache Kid, murder two sheriffs and escape into the desert during a prisoner transfer near Globe, Arizona.",
    "media": { 
      "img": require("../images/1889-The_Apache_Kid.jpg"),
      "alt": "Haskay-bay-nay-ntayl (c. 1860 – in or after 1894), better known as the Apache Kid"
    },
    "coords": ""
  },
  {
    "year": "1889",
    "location": "Helena, Montana",
    "date": "November 8",
    "description": "Montana is admitted as the 41st U.S. state.",
    "media": { 
      "img": require("../images/1889-Montana_State_Seal.png"),
      "alt": "The Great Seal of the State of Montana"
    },
    "coords": ""
  },
  {
    "year": "1889",
    "location": "Olympia, Washington",
    "date": "November 11",
    "description": "Washington is admitted as the 42nd U.S. state.",
    "media": { 
      "img": require("../images/1889-Washington_State_Seal.png"),
      "alt": "The Great Seal of the State of Washington"
    },
    "coords": ""
  },
  {
    "year": "1890",
    "location": "Washington, D.C.",
    "date": "June 1",
    "description": "Data collected for the Eleventh United States Census indicate that the spread of the population into unsettled areas has resulted in the disappearance of the American frontier. The U.S. Census Bureau declares that it will no longer monitor westward migration in the country.",
    "media": { 
      "img": require("../images/1890-States_post_Census.png"),
      "alt": "A map of the states and territories at the time of the 1890 United States Census"
    },
    "coords": ""
  },
  {
    "year": "1890",
    "location": "Boise, Idaho",
    "date": "July 3",
    "description": "Idaho is admitted as the 43rd U.S. state.",
    "media": { 
      "img": require("../images/1890-Idaho_State_Seal.png"),
      "alt": "The Great Seal of the State of Idaho"
    },
    "coords": ""
  },
  {
    "year": "1890",
    "location": "Cheyenna, Wyoming",
    "date": "July 10",
    "description": "Wyoming is admitted as the 44th U.S. state.",
    "media": { 
      "img": require("../images/1890-Wyoming_State_Seal.png"),
      "alt": "The Great Seal of the State of Wyoming"
    },
    "coords": ""
  },
  {
    "year": "1890",
    "location": "Wounded Knee Creek, South Dakota",
    "date": "December 29",
    "description": "More than 200 men, women, and children of the Lakota Sioux are killed at Wounded Knee Creek on the Pine Ridge Indian Reservation in South Dakota when the U.S. 7th Cavalry Regiment under Colonel James W. Forsyth attempts to confiscate their weapons.",
    "media": { 
      "img": require("../images/1890-Survivors_of_Wounded_Knee_Massacre.jpg"),
      "alt": "Survivors of Wounded Knee Massacre, 1891; (Title: What's left of Big Foot's band); by John C. Grabill"
    },
    "coords": ""
  },
  {
    "year": "1892",
    "location": "Powder River Country, Wyoming",
    "date": "April 8",
    "description": "In the most violent episode of the Johnson County War, wealthy cattle barons of the Wyoming Stock Growers Association and hired mercenaries invade the Powder River Country to persecute local ranchers on allegations of cattle rustling. A series of deadly stand-offs ensues before President Benjamin Harrison orders the 6th Cavalry Regiment to intervene. The conflict forces a reorganization of the cattle industry in Wyoming and becomes one of the most well-known range wars in the history of the West.",
    "media": { 
      "img": require("../images/1892-Johnson_County_Invaders.png"),
      "alt": "Johnson County War Invaders, photo courtesy the Wyoming State Library"
    },
    "coords": ""
  },
  {
    "year": "1892",
    "location": "Tempe, Arizona",
    "date": "August 2",
    "description": "Tom Graham, the last male member of the Graham family, is killed by Edwin Tewksbury in Tempe, Arizona, concluding the Pleasant Valley War.",
    "coords": ""
  },
  {
    "year": "1892",
    "location": "Coffeyville, Kansas",
    "date": "October 5",
    "description": "Four members of the Dalton Gang are killed in a shootout with the townspeople while trying to rob two banks at the same time in Coffeyville, Kansas.",
    "media": { 
      "img": require("../images/1892-Dalton_Gang_memento_mori.jpg"),
      "alt": "Memento Mori of the Dalton Gang; Left to right: Bill Power, Bob Dalton, Grat Dalton, Dick Broadwell"
    },
    "coords": ""
  },
  {
    "year": "1893",
    "location": "Butte, Montana",
    "date": "May 15",
    "description": "Provoked by the previous year's strike in Coeur d'Alene, coal miners establish the Western Federation of Miners in Butte, Montana.",
    "media": { 
      "img": require("../images/1893-Cour-dAlene.png"),
      "alt": "Newspaper illustration showing the town of Wardner, in the heart of Coeur d'Alenes; the Bunker Hill and Sullivan mines are in the side hill at the upper hand of the picture, and the Bunker Hill mill, which was blown up is the one from which smoke is rising"
    },
    "coords": ""
  },
  {
    "year": "1893",
    "location": "Visalia, California",
    "date": "June 11",
    "description": "Following a ten-month manhunt, local train robbers John Sontag and Chris Evans are wounded during a shootout with a posse of lawmen on a ranch north of Visalia, California. Both outlaws are eventually captured, and Sontag dies of his wounds three weeks later.",
    "media": { 
      "img": require("../images/1893-Evans_Sontag.png"),
      "alt": "John Sontag (May 27, 1861 – July 3, 1893), on the left, was an outlaw of the American West known for train robberies; Christopher Evans (February 19, 1847 – February 9, 1917), on the right, was an American farmer and teamster turned outlaw, he was the leader of the Evans-Sontag Gang"
    },
    "coords": ""
  },
  {
    "year": "1893",
    "location": "Tres Jacales, Mexico",
    "date": "June 30",
    "description": "Captain Frank Jones is killed when he and a party of Texas Rangers searching for a gang of Mexican cattle rustlers are ambushed near the border town of Tres Jacales.",
    "coords": ""
  },
  {
    "year": "1893",
    "location": "Ingalls, Oklahoma",
    "date": "September 1",
    "description": "Three deputy U.S. Marshals and two civilians are killed in a shootout with members of the Doolin–Dalton Gang in the town of Ingalls, Oklahoma Territory. All of the outlaws manage to escape.",
    "media": { 
      "img": require("../images/1893-Dalton_Gang.jpg"),
      "alt": "Dalton Gang Wanted Poster"
    },
    "coords": ""
  },
  {
    "year": "1893",
    "location": "Denver, Colorado",
    "date": "November 7",
    "description": "Women in Colorado are granted the right to vote.",
    "media": { 
      "img": require("../images/1893-Colorado_Womens_Suffrage.jpg"),
      "alt": "Men and women outside a polling station in Colorado 1893"
    },
    "coords": ""
  },
  {
    "year": "1894",
    "location": "New Orleans, LA to Los Angeles, CA",
    "date": "November 1",
    "description": "Sunset Limited service opened on the second transcontinental route by Southern Pacific Railroad.",
    "media": { 
      "img": require("../images/1894-Sunset_Limited.jpeg"),
      "alt": "The train when it ran between New Orleans and San Francisco"
    },
    "coords": ""
  },
  {
    "year": "1895",
    "location": "El Paso, Texas",
    "date": "August 19",
    "description": "Outlaw John Wesley Hardin is shot and killed by John Selman at the Acme Saloon in El Paso, Texas.",
    "media": { 
      "img": require("../images/1895-John_Wesley_Hardin.png"),
      "alt": "John Wesley Hardin (May 26, 1853 – August 19, 1895) was an American Old West outlaw, gunfighter, and controversial folk icon; Hardin often got into trouble with the law from an early age, he killed his first man at the age of 15, claiming he did so in self-defense"
    },
    "coords": ""
  },
  {
    "year": "1896",
    "location": "Salt Lake City, Utah",
    "date": "January 4",
    "description": "Utah is admitted as the 45th U.S. state.",
    "media": { 
      "img": require("../images/1896-Utah_State_Seal.png"),
      "alt": "The Great Seal of the State of Utah"
    }
  },
  {
    "year": "1896",
    "location": "Eureka Springs, Arkansas",
    "date": "January 15",
    "description": "Bill Tilghman single-handedly captures wanted gang leader Bill Doolin at a bathhouse in Eureka Springs, Arkansas and returns him to the Oklahoma Territory. Doolin escapes from prison on July 5.",
    "media": { 
      "img": require("../images/1896-Bill_Tilghman.jpg"),
      "alt": "Bill Tilghman posing with his Winchester rifle in a scene from the 1915 film The Passing of the Oklahoma Outlaws"
    }
  },
  {
    "year": "1896",
    "location": "Nogales, Sonora, Mexico",
    "date": "August 12",
    "description": "An uprising of Yaqui Indians and Mexican revolutionaries, angered by the policies of Mexican President Porfirio Díaz, storms the customhouse in Nogales, Sonora on the U.S.–Mexico border. Detachments of both federal armies manage to disperse the rebels over the next several days.",
    "media": { 
      "img": require("../images/1896-Uprising_of_Yaqui_Indians_Remington.jpg"),
      "alt": "Uprising of the Yaqui Indians - Yaqui warriors in retreat, by Frederic Remington"
    }
  },
  {
    "year": "1896",
    "location": "Montpelier, Idaho",
    "date": "August 13",
    "description": "Butch Cassidy, Elzy Lay, Harvey 'Kid Curry' Logan, and Bob Meeks rob a bank in Montpelier, Idaho.",
    "coords": ""
  },
  {
    "year": "1896",
    "location": "Crush, Texas",
    "date": "September 15",
    "description": "A staged train wreck designed as a publicity stunt for the Missouri-Kansas-Texas Railroad unexpectedly causes simultaneous boiler explosions that kill at least two spectators and result in numerous other injuries.",
    "media": { 
      "img": require("../images/1896-Crush_Texas_Train_Explosion.jpg"),
      "alt": "The explosion of a train boiler, during a staged train wreck in Crush, Texas"
    }
  },
  {
    "year": "1897",
    "location": "Bartlesville, Oklahoma",
    "date": "April 15",
    "description": "Crude oil is discovered for the first time in the Indian Territory, near present-day Bartlesville, Oklahoma.",
    "media": { 
      "img": require("../images/1897-Bartlesville_Gusher.jpg"),
      "alt": "Discovery 1 Oil Well, gushing oil"
    }
  },
  {
    "year": "1898",
    "location": "Skagway, District of Alaska",
    "date": "July 8",
    "description": "The Shootout on Juneau Wharf occurs in Skagway, District of Alaska when crime boss Soapy Smith and Frank H. Reid are shot during an argument. Smith is killed immediately and Reid dies 12 days later.",
    "media": { 
      "img": require("../images/1898-Soapy_Smith_Skagway_Alaska.jpg"),
      "alt": "Jefferson Randolph 'Soapy' Smith II (November 2, 1860 – July 8, 1898) was an American con artist and gangster in the American frontier; pictured at a bar in Skagway Alaska"
    }
  },
  {
    "year": "1898",
    "location": "Omaha, Nebraska",
    "date": "August 31",
    "description": "At least 500 members of 35 different American Indian tribes attend the Indian Congress in Omaha, Nebraska, the largest gathering of its kind to date.",
    "media": { 
      "img": require("../images/1898-Indian_Congress_Indian_Parade.jpg"),
      "alt": "Members of the Indian Congress march in a parade through Omaha, Nebraska"
    }
  },
  {
    "year": "1899",
    "location": "Arizona",
    "date": "May 30",
    "description": "Pearl Hart and a companion rob a stagecoach traveling between Globe and Florence in the Arizona Territory. The pair is tracked down and arrested a few days later.",
    "media": { 
      "img": require("../images/1899-Pearl_Hart.jpg"),
      "alt": "Pearl Hart (born Pearl Taylor; 1871–1955) was a Canadian-born outlaw of the American Old West; pictured sitting in a jail cell"
    }
  },
  {
    "year": "1899",
    "location": "Wilcox, Wyoming",
    "date": "June 2",
    "description": "Butch Cassidy and his Wild Bunch rob an Overland Flyer passenger train near Wilcox, Wyoming, resulting in a massive but ultimately futile manhunt.",
    "media": { 
      "img": require("../images/1899-Wild_Bunch.jpg"),
      "alt": "The Wild Bunch gang poses for a picture"
    }
  },
  {
    "year": "1900",
    "location": "Scofield, Utah",
    "date": "May 1",
    "description": "A dust explosion at the Winter Quarters Mine near Scofield, Utah kills at least 200 coal miners in the Scofield Mine disaster, the deadliest mining accident in American history to date.",
    "media": { 
      "img": require("../images/1900-Scofield_Mine.jpeg"),
      "alt": "The entrance to the Scofield Mine"
    }
  },
  {
    "year": "1901",
    "location": "Beaumont, Texas",
    "date": "January 10",
    "description": "An oil well on the Spindletop dome near Beaumont, Texas strikes crude oil, becoming the first major gusher in the state and triggering the Texas oil boom.",
    "media": { 
      "img": require("../images/1901-Spindletop_Gusher.jpg"),
      "alt": "A postcard drawing of Spindletop gushing oil"
    }
  },
  {
    "year": "1901",
    "location": "USA to Buenos Aires, Argentina",
    "date": "February 20",
    "description": "Butch Cassidy, Harry 'The Sundance Kid' Longabaugh, and Etta Place depart the United States for Buenos Aires, Argentina aboard a British steamer.",
    "media": { 
      "img": require("../images/1901-Sundance_Kid_and_Wife.jpg"),
      "alt": "Harry Alonzo 'The Sundance Kid' Longabaugh (1867 – November 7, 1908) and his wife, Etta Place (c. 1878 - disappeared in 1909)"
    }
  },
  {
    "year": "1903",
    "location": "San Francisco, CA to New York, NY",
    "date": "May 23",
    "description": "Horatio Nelson Jackson and Sewall K. Crocker depart San Francisco in a two-cylinder Winton motor car. They arrive in New York City on July 26, becoming the first people to cross the continent in an automobile.",
    "media": { 
      "img": require("../images/1903-Horatio_Jackson_Nelson.jpg"),
      "alt": "Horatio Nelson Jackson (March 25, 1872 – January 14, 1955) was an American physician and automobile pioneer; pictured driving the Winton motor car during the first transcontinental automobile trip"
    }
  },
  {
    "year": "1903",
    "location": "Cheyenne, Wyoming",
    "date": "November 20",
    "description": "Legendary gunman Tom Horn is hung in Cheyenne, Wyoming for the disputed killing of 14-year-old sheepherder Willie Nickell in 1901. His trial and hanging mark the waning of the power of the cattle barons in Wyoming.",
    "media": { 
      "img": require("../images/1903-Tom_Horn.jpg"),
      "alt": "Thomas Horn Jr., (November 21, 1860 – November 20, 1903) was an American scout, cowboy, soldier, range detective, and Pinkerton agent in the 19th-century and early 20th-century American Old West; pictured inspecting a rope"
    }
  },
  {
    "year": "1905",
    "location": "Las Vegas, Nevada",
    "date": "May 15",
    "description": "The city of Las Vegas is founded in Nevada.",
    "media": { 
      "img": require("../images/1905-Las_Vegas.jpg"),
      "alt": "The streets of Las Vegas, Nevada in 1905"
    }
  },
  {
    "year": "1905",
    "location": "Caldwell, Idaho",
    "date": "December 30",
    "description": "Former Idaho Governor Frank Steunenberg is wounded by a bomb in his home in Caldwell, Idaho and dies a short time later. An investigation suggests the assassination was motivated by prior labor unrest in Idaho's mining communities.",
    "media": { 
      "img": require("../images/1905-Frank_Steunenberg.jpg"),
      "alt": "Frank Steunenberg (August 8, 1861 – December 30, 1905) was the fourth governor of the State of Idaho, serving from 1897 until 1901; he was assassinated in 1905 by one-time union member Harry Orchard, who was also a paid informant for the Cripple Creek Mine Owners' Association"
    }
  },
  {
    "year": "1906",
    "location": "San Francisco, California",
    "date": "April 18",
    "description": "An earthquake and resulting fires devastate the city of San Francisco and neighboring communities, killing at least 3,000 people and leaving nearly three-fourths of the Bay Area's population homeless.",
    "media": { 
      "img": require("../images/1906-San_Francisco_Earthquake.jpg"),
      "alt": "Collapsed buildings in San Francisco, California after the earthquake of 1906"
    }
  },
  {
    "year": "1907",
    "location": "Oklahoma City, Oklahoma",
    "date": "November 16",
    "description": "Oklahoma is admitted as the 46th U.S. state.",
    "media": { 
      "img": require("../images/1907-Oklahoma_State_Seal.png"),
      "alt": "The Great Seal of the State of Oklahoma"
    }
  },
  {
    "year": "1908",
    "location": "Las Cruces, New Mexico",
    "date": "February 29",
    "description": "Pat Garrett, known for killing Billy the Kid, is murdered under mysterious circumstances near Las Cruces, New Mexico Territory.",
    "media": { 
      "img": require("../images/1908-Pat_Garrett.jpg"),
      "alt": "Patrick Floyd Jarvis Garrett (June 5, 1850 – February 29, 1908) was an American Old West lawman, bartender and customs agent known for killing Billy the Kid"
    }
  },
  {
    "year": "1908",
    "location": "San Vicente, Bolivia",
    "date": "November 7",
    "description": "Butch Cassidy and the Sundance Kid are reportedly found dead following a shootout with police in the town of San Vicente, Bolivia.",
    "media": { 
      "img": require("../images/1908-Butch_Cassidy.jpg"),
      "alt": "Robert LeRoy Parker (April 13, 1866 – November 7, 1908), better known as Butch Cassidy, was an American train and bank robber and the leader of a gang of criminal outlaws known as the 'Wild Bunch' in the Old West"
    }
  },
  {
    "year": "1912",
    "location": "Santa Fe, New Mexico",
    "date": "January 6",
    "description": "New Mexico is admitted as the 47th U.S. state.",
    "media": { 
      "img": require("../images/1912-New_Mexico_State_Seal.png"),
      "alt": "The Great Seal of the State of New Mexico"
    }
  },
  {
    "year": "1912",
    "location": "Phoenix, Arizona",
    "date": "February 14",
    "description": "Arizona is admitted as the 48th U.S. state. It is the last state to be admitted to the Union during the Old West era.",
    "media": { 
      "img": require("../images/1912-Arizona_State_Seal.png"),
      "alt": "The Great Seal of the State of Arizona"
    }
  },
  {
    "year": "1912",
    "location": "Juneau, Alaska",
    "date": "August 24",
    "description": "The District of Alaska is organized into the Territory of Alaska.",
    "media": { 
      "img": require("../images/1912-Territory_of_Alaska.png"),
      "alt": "A map of the Territory of Alaska from The Alaska Steampship Company"
    }
  },
  {
    "year": "1916",
    "location": "Jarbidge Canyon, Nevada",
    "date": "December 5",
    "description": "The last stagecoach robbery in American history occurs at Jarbidge Canyon, Nevada, when Ben Kuhl and his two accomplices hold up a U.S. Post Office Department stagecoach, shoot the driver, and steal $4,000 in cash. The criminals are captured without incident soon after.",
    "media": { 
      "img": require("../images/1916-Ben_Kuhl_Jarbridge_Canyon.jpg"),
      "alt": "Ben E. Kuhl (1884 – paroled 1945, date of death unknown, possibly 1945) was, in 1916, the last known stage coach robber in the United States; pictured in his mugshot after the stagecoach robbery"
    }
  },
  {
    "year": "1959",
    "location": "Juneau, Alaska",
    "date": "January 6",
    "description": "Alaska is admitted as the 49th U.S. state, marking the complete political incorporation of continental U.S. western territorial acquisitions.",
    "media": { 
      "img": require("../images/1959-Alaska_State_Seal.png"),
      "alt": "The Great Seal of the State of Alaska"
    },
  }
 ];

 export default data