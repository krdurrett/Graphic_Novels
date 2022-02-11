const express = require('express')
const res = require('express/lib/response')
const app = express()

app.set('port', process.env.PORT || 3001)
app.use(express.json())
app.locals.title = 'Graphic Novels'
app.locals.novels = [
  { id: 1, title: 'Saga', main_characters: ['Alana', 'Marko', 'Hazel', 'Izabel', 'Klara', 'Prince Robot IV', 'The Will', 'Sophie', 'Gwendolyn'], plot_synopsis: 'Husband and wife, Alana and Marko, from long-warring extraterrestrial races, flee authorities from both sides of a galactic war as they struggle to care for their daughter, Hazel, who is born in the beginning of the series, and who occasionally narrates the series as an unseen adult.', writers: ['Brian K Vaughn'], artists: ['Fiona Staples'], publisher: 'Image', genres: ['space opera', 'fantasy'], images: ['https://images-na.ssl-images-amazon.com/images/I/71a2KfLjetL.jpg', 'https://cdn.theatlantic.com/thumbor/OTWMfvsscntIDaUWaqmhP1hkSGk=/0x15:1440x765/960x500/media/img/mt/2014/11/saga/original.jpg', 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/60728/DIG014382_3._SX360_QL80_TTD_.jpg'], amazon_link: 'https://www.amazon.com/Saga-Compendium-Brian-K-Vaughan/dp/153431346X/ref=asc_df_153431346X/?tag=hyprod-20&linkCode=df0&hvadid=366433089512&hvpos=&hvnetw=g&hvrand=1996310599172148908&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-715522572154&psc=1&tag=&ref=&adgrpid=78795691880&hvpone=&hvptwo=&hvadid=366433089512&hvpos=&hvnetw=g&hvrand=1996310599172148908&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-715522572154' },
  { id: 2, title: 'Preacher', main_characters: ['Jesse Custer', 'Tulip O\'Hare', 'Cassidy', 'Saint of Killers', 'Herr Starr', 'God', 'Arseface'], plot_synopsis: 'Preacher is a supernatural, twisted and darkly comedic drama that follows a West Texas preacher named Jesse Custer, who is inhabited by a mysterious entity that causes him to develop a highly unusual power. Jesse, his badass ex-girlfriend Tulip and an Irish vagabond named Cassidy come together and when they do, they are thrust into a crazy world populated by a cast of characters from Heaven, Hell and everywhere in between.', writers: ['Garth Ennis'], artists: ['Steve Dillon', 'Glenn Fabry'], publisher: 'Vertigo', genres: ['satire', 'supernatural', 'action'], images: ['https://images-na.ssl-images-amazon.com/images/I/91uAu98GHnL.jpg', 'https://static01.nyt.com/images/2016/10/24/arts/24DILLON2-obit/24DILLON2-obit-articleLarge.jpg?quality=75&auto=webp&disable=upscale', 'https://www.cnet.com/a/img/resize/70a2eb242d75d2df530445307245586e004c54fe/hub/2016/05/20/6a63f3f5-0fe4-4d3a-9e42-9645f9a242cf/preacher-comic-you-got-it-hero-image.png?auto=webp&width=1092'], amazon_link: 'https://www.amazon.com/Preacher-Book-One-Garth-Ennis/dp/1401240453/ref=asc_df_1401240453/?tag=hyprod-20&linkCode=df0&hvadid=312172698449&hvpos=&hvnetw=g&hvrand=9067637565703239417&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-434938355181&psc=1'},
  { id: 3, title: 'Y: The Last Man', main_characters: ['Yorick Brown', 'Agent 355', 'Dr. Allison Mann', 'Ampersand'], plot_synopsis: 'On July 17, 2002, all living mammals with a Y chromosome—including embryos and sperm—simultaneously die, with the exception of a young amateur escape artist named Yorick Brown and his Capuchin monkey, Ampersand. Many women die as a secondary effect of male deaths, such as plane crashes. Society is plunged into chaos as infrastructures collapse, and the surviving women everywhere try to cope with the loss of men, and the belief that, barring a rapid, major scientific breakthrough or other extraordinary event, humanity is doomed to extinction.', writers: ['Brian K Vaughn'], artists: ['Pia Guerra', 'Goran Sudzuka', 'Paul Chadwick', 'Jose Marzan'], publisher: 'Vertigo', genres: ['post-apocalytptic', 'science fiction'], images: ['https://cdn.vox-cdn.com/thumbor/fGniaslvHCoLSkUZQw9d5Fkv_LI=/0x0:1900x900/1200x0/filters:focal(0x0:1900x900):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/4160778/GalleryComics_V_1900x900_20140900_y-last-man-book-1-sc_53b2fefccffe08.24374787.0.jpg', 'https://www.looper.com/img/gallery/the-untold-truth-of-y-the-last-man/its-exactly-what-it-sounds-like-1630630527.jpg', 'https://comicvine.gamespot.com/a/uploads/scale_small/0/4053/120053-9419-109485-1-y-the-last-man.jpg'], amazon_link: 'https://www.amazon.com/Y-Last-Man-Book-One/dp/140125151X/ref=asc_df_140125151X/?tag=hyprod-20&linkCode=df0&hvadid=312186710579&hvpos=&hvnetw=g&hvrand=763570080779348264&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-435486471808&psc=1&tag=&ref=&adgrpid=62860525140&hvpone=&hvptwo=&hvadid=312186710579&hvpos=&hvnetw=g&hvrand=763570080779348264&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-435486471808'},
  { id: 4, title: 'The Boys', main_characters: ['Billy Butcher', 'Hughie Campbell', 'Homelander/John', 'Starlight/Annie', 'Queen Maeve/Maggie', 'A-Train/Reggie', 'The Deep/Kevin', 'Frenchie/Serge', 'The Female/Kimiko', 'Black Noir', 'Madelyn Stillwell', 'Stormfront/Liberty/Klara'], plot_synopsis: 'The story follows a small clandestine CIA squad, informally known as "The Boys", led by Billy Butcher and comprising Mother\'s Milk, the Frenchman, the Female, and new addition "Wee" Hughie Campbell, who are charged with monitoring the superhero community, often leading to gruesome confrontations and dreadful results; in parallel, a key subplot follows Annie "Starlight" January, a young and naive superhero who joins the Seven, the most prestigious and corrupted superhero group in the world and The Boys\' most powerful enemies.', writers: ['Garth Ennis'], artists: ['Darick Robertson', 'Peter Snejbjerg', 'John Higgins', 'Carlos Ezquerra', 'Richard Clark', 'Russ Braun'], publisher: 'Dynamite', genres: ['superhero'], images: ['https://images-na.ssl-images-amazon.com/images/I/71eTWI8nsIL.jpg', 'https://www.dynamite.com/images/TNBoysVol5TPBCovTemp.jpg', 'https://www.dynamite.com/previews/C72513029057101011/TheBoysBecky0101091ExcluEliteRobertsonBlkVirg.jpg'], amazon_link: 'https://www.amazon.com/Boys-Omnibus-Vol-TPB/dp/1524108596/ref=asc_df_1524108596/?tag=hyprod-20&linkCode=df0&hvadid=343221106029&hvpos=&hvnetw=g&hvrand=12122245185488405439&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-679879199904&psc=1&tag=&ref=&adgrpid=67797266143&hvpone=&hvptwo=&hvadid=343221106029&hvpos=&hvnetw=g&hvrand=12122245185488405439&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-679879199904'},
  { id: 5, title: 'Transmetropolitan', main_characters: ['Spider Jerusalem', 'Yelena Rossini', 'Channon Yarrow', 'Mitchell Royce'], plot_synopsis: 'Transmetropolitan chronicles the battles of Spider Jerusalem, infamous renegade gonzo journalist of the future. Spider Jerusalem dedicates himself to fighting the corruption and abuse of power of two successive United States presidents.', writers: ['Warren Ellis'], artists: ['Darick Robertson'], publisher: 'Vertigo', genres: ['cyberpunk', 'science fiction', 'black comedy'], images: ['https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Series/2725/2725._SX270_CLs%7C270,270%7Ccu/cmx-cu-sash-lg.png%7C0,0,271,271%20158,158,112,112_QL80_TTD_.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9wQT1CwGknXfngshkB8apdwCw32LCuZzvQ&usqp=CAU', 'https://images.booksense.com/images/248/231/9781401231248.jpg'], amazon_link: 'https://www.amazon.com/Transmetropolitan-Book-One-Warren-Ellis/dp/1401287956/ref=asc_df_1401287956/?tag=hyprod-20&linkCode=df0&hvadid=266185224220&hvpos=&hvnetw=g&hvrand=5191185843885123726&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-587292426388&psc=1'},
  { id: 6, title: 'Watchmen', main_characters: ['Adrian Veidt/Ozymandias', 'Daniel Dreiberg/Nightowl', 'Edward Blake/The Comedian', 'Dr. Jon Osterman/Doctor Manhattan', 'Laurie Juspeczyk/Silk Spectre II', 'Walter Kovacs/Rorschach'], plot_synopsis: 'Watchmen depicts an alternate history in which superheroes emerged in the 1940s and 1960s and their presence changed history so that the United States won the Vietnam War and the Watergate scandal was never exposed.', writers: ['Alan Moore'], artists: ['Dave Gibbons', 'John Higgins'], publisher: 'DC', genres: ['superhero'], images: ['https://images-na.ssl-images-amazon.com/images/I/41chVzBhJiL._SX317_BO1,204,203,200_.jpg', 'https://tvwriter.com/wp-content/uploads/2018/12/watchmen-hbo-tv-series.jpg', 'https://qph.fs.quoracdn.net/main-qimg-abca44df2a5899c2de5a264fe8e2b0ce-lq'], amazon_link: 'https://www.amazon.com/Watchmen-2019-Alan-Moore/dp/1779501129/ref=asc_df_1779501129/?tag=hyprod-20&linkCode=df0&hvadid=366433089512&hvpos=&hvnetw=g&hvrand=16105100762460197621&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-794542662614&psc=1&tag=&ref=&adgrpid=78795691880&hvpone=&hvptwo=&hvadid=366433089512&hvpos=&hvnetw=g&hvrand=16105100762460197621&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-794542662614'},
  { id: 7, title: 'Sin City', main_characters: ['Marv', 'John Hartigan', 'Gail', 'Dwight McCarthy', 'Nancy Callahan', 'The Roark Family', 'Wallace', 'Miho'], plot_synopsis: 'A series of neo-noir comics that tell the story of Basin City aka Sin City', writers: ['Frank Miller'], artists: ['Frank Miller'], publisher: 'Dark Horse', genres: ['crime fiction', 'neo-noir', 'thriller'], images: ['https://upload.wikimedia.org/wikipedia/en/d/da/Sin_City_Hard_Goodbye.jpg', 'https://storage.googleapis.com/hipcomic/p/88e9ecd28e0d28018b5b22a0dae78ce8-800.jpg', 'https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/07/Sin-City-Comics-Feature.jpeg?q=50&fit=crop&w=960&h=500&dpr=1.5'], amazon_link: 'https://www.amazon.com/Frank-Millers-Sin-City-Goodbye/dp/1506722822/ref=asc_df_1506722822/?tag=hyprod-20&linkCode=df0&hvadid=509217856928&hvpos=&hvnetw=g&hvrand=1967045705491258721&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-1323943886141&psc=1'},
  { id: 8, title: 'Scott Pilgrim', main_characters: ['Scott Pilgrim', 'Ramona Flowers', 'Wallace Wells', 'Knives Chau', 'Stephen Stills', 'Kim Pine', 'Young Neil'], plot_synopsis: 'The series is about Scott Pilgrim, a slacker and part-time musician who lives in Toronto, Ontario, and plays bass in a band. He falls in love with American delivery girl Ramona Flowers, but must defeat her seven evil exes in order to date her in peace.', writers: ['Bryan Lee O\'Malley'], artists: ['Bryan Lee O\'Malley'], publisher: 'Oni Press', genres: ['action', 'fantasy', 'romantic comedy', 'drama'], images: ['https://www.hollywoodreporter.com/wp-content/uploads/2018/07/scott_pilgrim_-_publicity_-_h_2018.jpg', 'https://static.wikia.nocookie.net/scottpilgrim/images/a/ab/ScottPilgrimvol5.jpg/revision/latest/top-crop/width/360/height/450?cb=20100621043214', 'https://sportshub.cbsistatic.com/i/2021/03/18/55387fd1-9635-40eb-9934-70b9880eb5f6/scott-pilgrim-comic-1236658.jpg'], amazon_link: 'https://www.amazon.com/Collection-Pilgrims-Precious-Infinite-Together/dp/B00O13WVQI/ref=asc_df_B00O13WVQI/?tag=hyprod-20&linkCode=df0&hvadid=312674999652&hvpos=&hvnetw=g&hvrand=12212341573091984072&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-454328862601&psc=1'},
  { id: 9, title: '100 Bullets', main_characters: ['Agent Graves', 'Mr. Shepherd', 'The Minutemen', 'Dizzy Cordova', 'Loop Hughes'], plot_synopsis: 'The core concept of 100 Bullets is based on the question of people willing to act on the desire of violent revenge if given the means, opportunity, and a reasonable chance to succeed. Many of the first issues involve the mysterious Agent Graves approaching someone who has been a victim of a terrible wrong.', writers: ['Brian Azzarello'], artists: ['Eduardo Risso', 'Dave Johnson'], publisher: 'Vertigo', genres: ['crime'], images: ['https://images-na.ssl-images-amazon.com/images/I/910Vyi0QT1L.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmPM2COFueBmz8XlAaz7Ski7S2g0lyNtsbi-2MS0k8fLe9lB2H1bZJ5rQErYXgQnhSLo&usqp=CAU', 'https://i.ytimg.com/vi/wi6uoAdCwig/hqdefault.jpg'], amazon_link: 'https://www.amazon.com/100-Bullets-Omnibus-Vol-1/dp/1779507429/ref=asc_df_1779507429/?tag=hyprod-20&linkCode=df0&hvadid=475772680074&hvpos=&hvnetw=g&hvrand=6818933258911294679&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-918946190568&psc=1'},
  { id: 10, title: 'The Walking Dead', main_characters: ['Rick Grimes', 'Lori Grimes', 'Carl Grimes', 'Shane', 'Andrea', 'Amy', 'Jim', 'Glenn', 'Dale', 'Carol', 'Sophia', 'Maggie Greene', 'Hershel Greene', 'Michonne'], plot_synopsis: 'A group of survivors, led by former police officer Rick Grimes, travel in search of a safe and secure home. As the world overrun by the dead takes its toll on the survivors, their interpersonal conflicts present a greater danger to their continuing survival than the walkers that roam the country.', writers: ['Robert Kirkman'], artists: ['Tony Moore', 'Charlie Adlard'], publisher: 'Image', genres: ['post-apocalyptic'], images: ['https://images-na.ssl-images-amazon.com/images/I/91ocDr+A7kL.jpg', 'https://assets.skybound.com/wp-content/uploads/2020/07/17101509/twddeluxe.jpg', 'https://static3.srcdn.com/wordpress/wp-content/uploads/2020/06/Walking-Dead-comic-characters-still-alive-TV-series.jpg'], amazon_link: ''},
  { id: 11, title: 'Paper Girls', main_characters: ['Erin Tieng', 'MacKenzie Coyle', 'Karina J', 'Tiffany Quilkin'], plot_synopsis: 'Erin Tieng, a new resident of Stony Stream, is a recently hired paper delivery girl. While out delivering newspapers in the early hours of the morning of November 1, 1988, Erin meets Mac, KJ, and Tiffany, a group of friends and fellow paper girls who invite Erin to join them. The girls are soon attacked by a group of teenagers; one of the teens steals a walkie-talkie from Tiffany. The girls subsequently chase the group to a construction house and find what appears to be a time machine in the basement. They are then struck by mysterious energy emanating from the machine. The girls learn that the teenagers are time travelers from the distant future, who are engaged in an ongoing war with a group known as the "Old-Timers" (known as "The Battle of the Ages"). At the center of this conflict is the question of whether or not the past can and should be changed by future time travelers.', writers: ['Brian K Vaughn'], artists: ['Cliff Chiang'], publisher: 'Image', genres: ['mystery', 'science fiction'], images: ['https://media.wired.com/photos/5926b3eaf3e2356fd800a29c/master/w_2560%2Cc_limit/PaperGirls_TA.jpg', 'https://i2.wp.com/www.comicsbeat.com/wp-content/uploads/2021/07/PaperGirlsOmnibus-1.jpg?fit=1200%2C650&ssl=1', 'https://images-na.ssl-images-amazon.com/images/I/91OT3wr49cL.jpg'], amazon_link: 'https://www.amazon.com/Paper-Girls-Complete-Brian-Vaughan/dp/1534319999/ref=asc_df_1534319999/?tag=hyprod-20&linkCode=df0&hvadid=509217856928&hvpos=&hvnetw=g&hvrand=17383489054576907805&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-1268663300580&psc=1'},
  { id: 12, title: 'The Sandman', main_characters: ['Dream of the Endless'], plot_synopsis: 'The Sandman tells the story of Dream, who is the personification of all dreams and stories. In 1988 Dream escapes and spends the remaining issues trying to regain control of the world of Dreaming and the powers he once possessed.', writers: ['Neil Gaiman'], artists: ['Sam Kieth', 'Mike Dringenberg', 'Chris Bachalo'], publisher: 'DC', genres: ['dark fantasy', 'horror', 'superhero'], images: ['https://cdn.vox-cdn.com/thumbor/UDirwN3Oxk1dEkOERSOQnLkOjgI=/0x0:1084x568/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21946787/Locke___Key_Sandman_Hell___Gone__3_.jpg', 'https://www.cnet.com/a/img/xTB8GeNYC6XhTWBholwlj7QuQDk=/940x0/2019/10/29/96ab248f-afe9-4b2a-8185-5c0d22ed85ac/sandman2.jpg', 'https://i2.wp.com/thegameofnerds.com/wp-content/uploads/2021/09/Sandman-ComingSoondotnet-1.jpg?fit=1280%2C720'], amazon_link: 'https://www.amazon.com/Sandman-Vol-Preludes-Nocturnes-Anniversary/dp/1401284779/ref=asc_df_1401284779/?tag=hyprod-20&linkCode=df0&hvadid=312172698449&hvpos=&hvnetw=g&hvrand=17664890164903773894&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-524161246506&psc=1'},
  { id: 13, title: 'Demo', main_characters: [], plot_synopsis: 'Twelve stories of conflicted teens grappling with love, loss, and the joy of finding your own way in life. ', writers: ['Brian Wood'], artists: ['Becky Cloonan'], publisher: 'Vertigo', genres: ['drama', 'supernatural'], images: ['https://static.tvtropes.org/pmwiki/pub/images/demo__the_waking_life_of_angel_by_stabstabstab.jpg'], amazon_link: ''},
  { id: 14, title: 'Batman: The Dark Knight Returns', main_characters: ['Batman', 'James Gordon', 'Carrie Kelley', 'Two-Face', 'Mutants', 'Joker', 'Superman'], plot_synopsis: 'The story of one man\'s journey to discovering his true self and finding comfort within it. Conflicted throughout most of his life, Bruce Wayne\'s mission never changes. Almost without volition, Bruce Wayne is sucked back into the lifestyle and calling he had given up decades earlier.', writers: ['Frank Miller'], artists: ['Frank Miller'], publisher: 'DC', genres: ['noir', 'superhero'], images: ['https://images-na.ssl-images-amazon.com/images/I/917wsCEYSML.jpg', 'https://cdn.vox-cdn.com/thumbor/UkxnjFPU-tbJX2uLeJ-lHGhjw4Q=/74x0:884x608/1400x1050/filters:focal(74x0:884x608):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49187111/960.0.0.jpg', 'https://cdn.mos.cms.futurecdn.net/jF7WEhm3sfcySD7iYRd9zX-320-80.jpg'], amazon_link: 'https://www.amazon.com/Batman-Dark-Knight-Master-Race/dp/1401284310/ref=asc_df_1401284310/?tag=hyprod-20&linkCode=df0&hvadid=312142102243&hvpos=&hvnetw=g&hvrand=9101176939788961678&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-526747485045&psc=1'},
  { id: 15, title: 'Locke & Key', main_characters: ['Nina Locke', 'Tyler Locke', 'Kinsey Locke', 'Bode Locke', 'Lucas Carvaggio', 'Jackie Veda', 'Duncan Locke', 'Rendell Locke', 'Sam Lessner', 'Scott Kavanaugh'], plot_synopsis: 'The story of the Locke siblings, Tyler, Kinsey, and little Bode, who, along with their mother, return to their ancestral home of Keyhouse following their father\'s gruesome murder.', writers: ['Joe Hill'], artists: ['Gabriel Rodriguez'], publisher: 'IDW', genres: ['horror', 'contemporary fantasy'], images: ['http://thenerdsofcolor.files.wordpress.com/2013/12/lk006.jpg', 'https://static.wikia.nocookie.net/lockekey/images/a/a9/Lady_in_the_Well.jpg/revision/latest/scale-to-width-down/1200?cb=20210415000853', 'https://www.gamespot.com/a/uploads/scale_medium/171/1712892/3631238-21.png'], amazon_link: 'https://www.amazon.com/Locke-Key-Vol-Welcome-Lovecraft/dp/1600103847/ref=asc_df_1600103847/?tag=hyprod-20&linkCode=df0&hvadid=312172698449&hvpos=&hvnetw=g&hvrand=4962274324788979683&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-434871579335&psc=1'},
  { id: 16, title: 'Persepolis', main_characters: ['Marjane', 'Mrs. Satrapi', 'Mr. Satrapi', 'Grandmother', 'Uncle Anoosh', 'Mehridia', 'Khosro'], plot_synopsis: 'An autobiographical series of bande dessinées (French comics) by Marjane Satrapi that depicts her childhood up to her early adult years in Iran and Austria during and after the Islamic Revolution.', writers: ['Marjane Satrapi'], artists: ['Marjane Satrapi'], publisher: 'L\'Association', genres: ['autobiographical'], images: ['https://upload.wikimedia.org/wikipedia/en/1/10/Persepolis-books1and2-covers.jpg', 'https://www.awn.com/sites/default/files/styles/large_featured/public/image/featured/3524-persepolis-motion.jpg?itok=cWcQVFaO', 'https://i.pinimg.com/736x/0b/0e/6b/0b0e6b920b4e0dd30285460cab3634a8--marjane-satrapi-persepolis.jpg'], amazon_link: 'https://www.amazon.com/Persepolis-v-1-2/dp/0224080393/ref=asc_df_0224080393/?tag=hyprod-20&linkCode=df0&hvadid=266454336160&hvpos=&hvnetw=g&hvrand=16483730965447142451&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-562700826466&psc=1'},
]

app.get('/', (request, response) => {
  response.send('Oh hey graphic novel lover')
})

app.get('/api/v1/novels', (request, response) => {
  const novels = app.locals.novels

  response.status(200).json({ novels })
})

app.get('/api/v1/novels/:id', (request, response) => {
  const { id } = request.params
  const novel = app.locals.novels.find(novel => novel.id === parseInt(id))
  if (!novel) {
    return response.status(404).json({
      message: `No novel found with id of #${id}.`
    })
  }

  response.status(200).json({ novel })
})

app.post('/api/v1/novels', (request, response) => {
  const id = Date.now()
  const novel = request.body
 
  for (let requiredParameter of ['title', 'main_characters', 'plot_synopsis', 'writers', 'artists', 'publisher', 'genres', 'images']) {
    if (!novel[requiredParameter]) {
      response
        .status(422)
        .send({ error: `Expected format: { title: <String>, main_characters: <Array>, plot_synopsis: <String>, writers: <Array>, artists: <Array>, publisher: <String>, genres: <Array>, images: <Array>}. You're missing a "${requiredParameter}" property`})
    }
  }

  if (typeof main_characters !== 'array') {
    return res.status(422).json({
      message: `Invalid main_characters type. Must be an array`
    })
  }

  if (typeof writers !== 'array') {
    return res.status(422).json({
      message: `Invalid writers type. Must be an array`
    })
  }

  if (typeof artists !== 'array') {
    return res.status(422).json({
      message: `Invalid artists type. Must be an array`
    })
  }

  if (typeof genres !== 'array') {
    return res.status(422).json({
      message: `Invalid genres type. Must be an array`
    })
  }

  if (typeof images !== 'array') {
    return res.status(422).json({
      message: `Invalid images type. Must be an array`
    })
  }

  const { title, main_characters, plot_synopsis, writers, artists, publisher, genres, images } = novel
  app.locals.novels.push({ id, title, main_characters, plot_synopsis, writers, artists, publisher, genres, images })
  response.status(201).json({ id, title, main_characters, plot_synopsis, writers, artists, publisher, genres, images })
})

app.delete('/api/v1/novels/:id', (request, response) => {
  const { id } = request.params
  const { novels } = app.locals
  const novelToDelete = novels.find(novel => novel.id === parseInt(id))

  if (!novelToDelete) {
    return response.status(404).json({
      message: `No novel found with id of #${id}.`
    })
  }

  app.locals.novels = novels.filter(novel => novel.id !== parseInt(id))

  response.status(200).json({
    message: `Novel #${id} has been deleted`
  })
})

app.patch('/api/v1/novels/:id', (request, response) => {
  const { id } = request.params
  const { novels } = app.locals 
  const novel = novels.find(novel => novel.id === parseInt(id))

  for (let requiredParameter of ['images']) {
    if (!request.body[requiredParameter]) {
      response
        .status(422)
        .send({ error: `Expected format: { images: <STRING>}. You're missing a "${requiredParameter}" property`})
    }
  }

  if (!novel) {
    return response.status(404).json({
      message: `No novel found with id of #${id}.`
    })
  }

  novel.images.push(request.body.images)
  novel.amazon_link = request.body.amazon_link

  response.status(200).json(novel)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})