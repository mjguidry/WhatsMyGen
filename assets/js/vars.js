var gen_names =
    [
        "Lost",
        "Greatest",
        "Silent",
        "Boomer",
        "GenX",
        "Millennial",
        "GenZ"
    ];
var tier_names =
    [
        "First",
        "Middle",
        "Young"
    ];

var BOG = {
    "lost-first": {
        0: {
            "name": "William Faulkner (1897)",
            "link": "http://en.wikipedia.org/wiki/William_Faulkner",
            "sig": 87.40999277555456,
            "img": "/WhatsMyGen/images/William_Faulkner_(1897).jpg"
        },
        1: {
            "name": "F. Scott Fitzgerald (1896)",
            "link": "http://en.wikipedia.org/wiki/F._Scott_Fitzgerald",
            "sig": 86.6055212512591,
            "img": "/WhatsMyGen/images/F._Scott_Fitzgerald_(1896).jpg"
        },
        2: {
            "name": "John Ford (1894)",
            "link": "http://en.wikipedia.org/wiki/John_Ford",
            "sig": 85.73210498838317,
            "img": "/WhatsMyGen/images/John_Ford_(1894).jpg"
        },
        3: {
            "name": "Martha Graham (1894)",
            "link": "http://en.wikipedia.org/wiki/Martha_Graham",
            "sig": 84.56954026240162,
            "img": "/WhatsMyGen/images/Martha_Graham_(1894).jpg"
        },
        4: {
            "name": "Henry Cowell (1897)",
            "link": "http://en.wikipedia.org/wiki/Henry_Cowell",
            "sig": 84.36638135386599,
            "img": "/WhatsMyGen/images/Henry_Cowell_(1897).jpg"
        },
        5: {
            "name": "Babe Ruth (1895)",
            "link": "http://en.wikipedia.org/wiki/Babe_Ruth",
            "sig": 80.55964175513259,
            "img": "/WhatsMyGen/images/Babe_Ruth_(1895).jpg"
        },
        6: {
            "name": "Josef von Sternberg (1894)",
            "link": "http://en.wikipedia.org/wiki/Josef_von_Sternberg",
            "sig": 80.31303801711134,
            "img": "/WhatsMyGen/images/Josef_von_Sternberg_(1894).jpg"
        },
        7: {
            "name": "J. Edgar Hoover (1895)",
            "link": "http://en.wikipedia.org/wiki/J._Edgar_Hoover",
            "sig": 79.85515956735831,
            "img": "/WhatsMyGen/images/J._Edgar_Hoover_(1895).jpg"
        },
        8: {
            "name": "Allen Dulles (1893)",
            "link": "http://en.wikipedia.org/wiki/Allen_Dulles",
            "sig": 79.80959953540551,
            "img": "/WhatsMyGen/images/Allen_Dulles_(1893).jpg"
        },
        9: {
            "name": "Frank Capra (1897)",
            "link": "http://en.wikipedia.org/wiki/Frank_Capra",
            "sig": 79.60846378944593,
            "img": "/WhatsMyGen/images/Frank_Capra_(1897).jpg"
        },
    },
    "lost-middle": {
        0: {
            "name": "Ernest Hemingway (1899)",
            "link": "http://en.wikipedia.org/wiki/Ernest_Hemingway",
            "sig": 89.34967316949077,
            "img": "/WhatsMyGen/images/Ernest_Hemingway_(1899).jpg"
        },
        1: {
            "name": "Walt Disney (1901)",
            "link": "http://en.wikipedia.org/wiki/Walt_Disney",
            "sig": 88.58271161673139,
            "img": "/WhatsMyGen/images/Walt_Disney_(1901).jpg"
        },
        2: {
            "name": "Louis Armstrong (1901)",
            "link": "http://en.wikipedia.org/wiki/Louis_Armstrong",
            "sig": 87.63860128566694,
            "img": "/WhatsMyGen/images/Louis_Armstrong_(1901).jpg"
        },
        3: {
            "name": "George Gershwin (1898)",
            "link": "http://en.wikipedia.org/wiki/George_Gershwin",
            "sig": 87.33018847317213,
            "img": "/WhatsMyGen/images/George_Gershwin_(1898).jpg"
        },
        4: {
            "name": "Duke Ellington (1899)",
            "link": "http://en.wikipedia.org/wiki/Duke_Ellington",
            "sig": 87.16364915026914,
            "img": "/WhatsMyGen/images/Duke_Ellington_(1899).jpg"
        },
        5: {
            "name": "John Steinbeck (1902)",
            "link": "http://en.wikipedia.org/wiki/John_Steinbeck",
            "sig": 86.87289856421371,
            "img": "/WhatsMyGen/images/John_Steinbeck_(1902).jpg"
        },
        6: {
            "name": "Aaron Copland (1900)",
            "link": "http://en.wikipedia.org/wiki/Aaron_Copland",
            "sig": 85.95069429891709,
            "img": "/WhatsMyGen/images/Aaron_Copland_(1900).jpg"
        },
        7: {
            "name": "Ansel Adams (1902)",
            "link": "http://en.wikipedia.org/wiki/Ansel_Adams",
            "sig": 84.72523345589674,
            "img": "/WhatsMyGen/images/Ansel_Adams_(1902).jpg"
        },
        8: {
            "name": "Bob Hope (1903)",
            "link": "http://en.wikipedia.org/wiki/Bob_Hope",
            "sig": 81.99249648503371,
            "img": "/WhatsMyGen/images/Bob_Hope_(1903).jpg"
        },
        9: {
            "name": "Bing Crosby (1903)",
            "link": "http://en.wikipedia.org/wiki/Bing_Crosby",
            "sig": 81.73628544023877,
            "img": "/WhatsMyGen/images/Bing_Crosby_(1903).jpg"
        },
    },
    "lost-young": {
        0: {
            "name": "Lyndon B. Johnson (1908)",
            "link": "http://en.wikipedia.org/wiki/Lyndon_B._Johnson",
            "sig": 91.27961477109453,
            "img": "/WhatsMyGen/images/Lyndon_B._Johnson_(1908).jpg"
        },
        1: {
            "name": "John Wayne (1907)",
            "link": "http://en.wikipedia.org/wiki/John_Wayne",
            "sig": 87.40082480205005,
            "img": "/WhatsMyGen/images/John_Wayne_(1907).jpg"
        },
        2: {
            "name": "John Huston (1906)",
            "link": "http://en.wikipedia.org/wiki/John_Huston",
            "sig": 85.81401906230755,
            "img": "/WhatsMyGen/images/John_Huston_(1906).jpg"
        },
        3: {
            "name": "Philip Johnson (1906)",
            "link": "http://en.wikipedia.org/wiki/Philip_Johnson",
            "sig": 85.31538609193665,
            "img": "/WhatsMyGen/images/Philip_Johnson_(1906).jpg"
        },
        4: {
            "name": "Willard Van Orman Quine (1908)",
            "link": "http://en.wikipedia.org/wiki/Willard_Van_Orman_Quine",
            "sig": 84.29391937658832,
            "img": "/WhatsMyGen/images/Willard_Van_Orman_Quine_(1908).jpg"
        },
        5: {
            "name": "Bette Davis (1908)",
            "link": "http://en.wikipedia.org/wiki/Bette_Davis",
            "sig": 81.66084903095116,
            "img": "/WhatsMyGen/images/Bette_Davis_(1908).jpg"
        },
        6: {
            "name": "Dr. Seuss (1904)",
            "link": "http://en.wikipedia.org/wiki/Dr._Seuss",
            "sig": 81.62763863718693,
            "img": "/WhatsMyGen/images/Dr._Seuss_(1904).jpg"
        },
        7: {
            "name": "Barry Goldwater (1909)",
            "link": "http://en.wikipedia.org/wiki/Barry_Goldwater",
            "sig": 81.5571626635231,
            "img": "/WhatsMyGen/images/Barry_Goldwater_(1909).jpg"
        },
        8: {
            "name": "Billy Wilder (1906)",
            "link": "http://en.wikipedia.org/wiki/Billy_Wilder",
            "sig": 81.3652417685281,
            "img": "/WhatsMyGen/images/Billy_Wilder_(1906).jpg"
        },
        9: {
            "name": "Howard Hughes (1905)",
            "link": "http://en.wikipedia.org/wiki/Howard_Hughes",
            "sig": 81.01559051139154,
            "img": "/WhatsMyGen/images/Howard_Hughes_(1905).jpg"
        },
    },
    "greatest-first": {
        0: {
            "name": "Ronald Reagan (1911)",
            "link": "http://en.wikipedia.org/wiki/Ronald_Reagan",
            "sig": 97.04892982960449,
            "img": "/WhatsMyGen/images/Ronald_Reagan_(1911).jpg"
        },
        1: {
            "name": "Richard Nixon (1913)",
            "link": "http://en.wikipedia.org/wiki/Richard_Nixon",
            "sig": 93.42487255033329,
            "img": "/WhatsMyGen/images/Richard_Nixon_(1913).jpg"
        },
        2: {
            "name": "Orson Welles (1915)",
            "link": "http://en.wikipedia.org/wiki/Orson_Welles",
            "sig": 88.95742516472266,
            "img": "/WhatsMyGen/images/Orson_Welles_(1915).jpg"
        },
        3: {
            "name": "Gerald Ford (1913)",
            "link": "http://en.wikipedia.org/wiki/Gerald_Ford",
            "sig": 88.45022791106499,
            "img": "/WhatsMyGen/images/Gerald_Ford_(1913).jpg"
        },
        4: {
            "name": "Milton Friedman (1912)",
            "link": "http://en.wikipedia.org/wiki/Milton_Friedman",
            "sig": 88.31609234660694,
            "img": "/WhatsMyGen/images/Milton_Friedman_(1912).jpg"
        },
        5: {
            "name": "Tennessee Williams (1911)",
            "link": "http://en.wikipedia.org/wiki/Tennessee_Williams",
            "sig": 87.4252019388083,
            "img": "/WhatsMyGen/images/Tennessee_Williams_(1911).jpg"
        },
        6: {
            "name": "Jackson Pollock (1912)",
            "link": "http://en.wikipedia.org/wiki/Jackson_Pollock",
            "sig": 86.82224632524017,
            "img": "/WhatsMyGen/images/Jackson_Pollock_(1912).jpg"
        },
        7: {
            "name": "Frank Sinatra (1915)",
            "link": "http://en.wikipedia.org/wiki/Frank_Sinatra",
            "sig": 86.41870971357513,
            "img": "/WhatsMyGen/images/Frank_Sinatra_(1915).jpg"
        },
        8: {
            "name": "John Cage (1912)",
            "link": "http://en.wikipedia.org/wiki/John_Cage",
            "sig": 86.37254713475731,
            "img": "/WhatsMyGen/images/John_Cage_(1912).jpg"
        },
        9: {
            "name": "Arthur Miller (1915)",
            "link": "http://en.wikipedia.org/wiki/Arthur_Miller",
            "sig": 81.49865330489838,
            "img": "/WhatsMyGen/images/Arthur_Miller_(1915).jpg"
        },
    },
    "greatest-middle": {
        0: {
            "name": "John F. Kennedy (1917)",
            "link": "http://en.wikipedia.org/wiki/John_F._Kennedy",
            "sig": 94.26194105967744,
            "img": "/WhatsMyGen/images/John_F._Kennedy_(1917).jpg"
        },
        1: {
            "name": "John Rawls (1921)",
            "link": "http://en.wikipedia.org/wiki/John_Rawls",
            "sig": 85.45252695892717,
            "img": "/WhatsMyGen/images/John_Rawls_(1921).jpg"
        },
        2: {
            "name": "James M. Buchanan (1919)",
            "link": "http://en.wikipedia.org/wiki/James_M._Buchanan",
            "sig": 84.05099666253636,
            "img": "/WhatsMyGen/images/James_M._Buchanan_(1919).jpg"
        },
        3: {
            "name": "Jerome Robbins (1918)",
            "link": "http://en.wikipedia.org/wiki/Jerome_Robbins",
            "sig": 84.01846113269447,
            "img": "/WhatsMyGen/images/Jerome_Robbins_(1918).jpg"
        },
        4: {
            "name": "Nancy Reagan (1921)",
            "link": "http://en.wikipedia.org/wiki/Nancy_Reagan",
            "sig": 83.90847203359047,
            "img": "/WhatsMyGen/images/Nancy_Reagan_(1921).jpg"
        },
        5: {
            "name": "Leonard Bernstein (1918)",
            "link": "http://en.wikipedia.org/wiki/Leonard_Bernstein",
            "sig": 83.35566729884351,
            "img": "/WhatsMyGen/images/Leonard_Bernstein_(1918).jpg"
        },
        6: {
            "name": "Isaac Asimov (1920)",
            "link": "http://en.wikipedia.org/wiki/Isaac_Asimov",
            "sig": 83.24549755001529,
            "img": "/WhatsMyGen/images/Isaac_Asimov_(1920).jpg"
        },
        7: {
            "name": "John L. Hess (1917)",
            "link": "http://en.wikipedia.org/wiki/John_L._Hess",
            "sig": 83.02230252902811,
        },
        8: {
            "name": "Billy Graham (1918)",
            "link": "http://en.wikipedia.org/wiki/Billy_Graham",
            "sig": 82.22689750568635,
            "img": "/WhatsMyGen/images/Billy_Graham_(1918).jpg"
        },
        9: {
            "name": "Robert McNamara (1916)",
            "link": "http://en.wikipedia.org/wiki/Robert_McNamara",
            "sig": 81.43703288361785,
            "img": "/WhatsMyGen/images/Robert_McNamara_(1916).jpg"
        },
    },
    "greatest-young": {
        0: {
            "name": "George H. W. Bush (1924)",
            "link": "http://en.wikipedia.org/wiki/George_H._W._Bush",
            "sig": 92.854436,
            "img": "/WhatsMyGen/images/George_H._W._Bush_(1924).jpg"
        },
        1: {
            "name": "Jimmy Carter (1924)",
            "link": "http://en.wikipedia.org/wiki/Jimmy_Carter",
            "sig": 92.302739,
            "img": "/WhatsMyGen/images/Jimmy_Carter_(1924).jpg"
        },
        2: {
            "name": "Marilyn Monroe (1926)",
            "link": "http://en.wikipedia.org/wiki/Marilyn_Monroe",
            "sig": 86.430574,
            "img": "/WhatsMyGen/images/Marilyn_Monroe_(1926).jpg"
        },
        3: {
            "name": "Chuck Berry (1926)",
            "link": "http://en.wikipedia.org/wiki/Chuck_Berry",
            "sig": 86.097153,
            "img": "/WhatsMyGen/images/Chuck_Berry_(1926).jpg"
        },
        4: {
            "name": "Roy Lichtenstein (1923)",
            "link": "http://en.wikipedia.org/wiki/Roy_Lichtenstein",
            "sig": 84.806145,
            "img": "/WhatsMyGen/images/Roy_Lichtenstein_(1923).jpg"
        },
        5: {
            "name": "Robert F. Kennedy (1925)",
            "link": "http://en.wikipedia.org/wiki/Robert_F._Kennedy",
            "sig": 83.983141,
            "img": "/WhatsMyGen/images/Robert_F._Kennedy_(1925).jpg"
        },
        6: {
            "name": "Miles Davis (1926)",
            "link": "http://en.wikipedia.org/wiki/Miles_Davis",
            "sig": 83.824890,
            "img": "/WhatsMyGen/images/Miles_Davis_(1926).jpg"
        },
        7: {
            "name": "Jack Kerouac (1922)",
            "link": "http://en.wikipedia.org/wiki/Jack_Kerouac",
            "sig": 83.206539,
            "img": "/WhatsMyGen/images/Jack_Kerouac_(1922).jpg"
        },
        8: {
            "name": "Marlon Brando (1924)",
            "link": "http://en.wikipedia.org/wiki/Marlon_Brando",
            "sig": 83.121150,
            "img": "/WhatsMyGen/images/Marlon_Brando_(1924).jpg"
        },
        9: {
            "name": "Judy Garland (1922)",
            "link": "http://en.wikipedia.org/wiki/Judy_Garland",
            "sig": 82.995605,
            "img": "/WhatsMyGen/images/Judy_Garland_(1922).jpg"
        },
    },
    "silent-first": {
        0: {
            "name": "Martin Luther King Jr. (1929)",
            "link": "http://en.wikipedia.org/wiki/Martin_Luther_King_Jr.",
            "sig": 90.871321,
            "img": "/WhatsMyGen/images/Martin_Luther_King_Jr._(1929).jpg"
        },
        1: {
            "name": "Andy Warhol (1928)",
            "link": "http://en.wikipedia.org/wiki/Andy_Warhol",
            "sig": 87.978190,
            "img": "/WhatsMyGen/images/Andy_Warhol_(1928).jpg"
        },
        2: {
            "name": "Buzz Aldrin (1930)",
            "link": "http://en.wikipedia.org/wiki/Buzz_Aldrin",
            "sig": 85.352881,
            "img": "/WhatsMyGen/images/Buzz_Aldrin_(1930).jpg"
        },
        3: {
            "name": "Noam Chomsky (1928)",
            "link": "http://en.wikipedia.org/wiki/Noam_Chomsky",
            "sig": 85.000573,
            "img": "/WhatsMyGen/images/Noam_Chomsky_(1928).jpg"
        },
        4: {
            "name": "Stanley Kubrick (1928)",
            "link": "http://en.wikipedia.org/wiki/Stanley_Kubrick",
            "sig": 84.313054,
            "img": "/WhatsMyGen/images/Stanley_Kubrick_(1928).jpg"
        },
        5: {
            "name": "Clint Eastwood (1930)",
            "link": "http://en.wikipedia.org/wiki/Clint_Eastwood",
            "sig": 83.372916,
            "img": "/WhatsMyGen/images/Clint_Eastwood_(1930).jpg"
        },
        6: {
            "name": "Donald Rumsfeld (1932)",
            "link": "http://en.wikipedia.org/wiki/Donald_Rumsfeld",
            "sig": 83.291306,
            "img": "/WhatsMyGen/images/Donald_Rumsfeld_(1932).jpg"
        },
        7: {
            "name": "John Barth (1930)",
            "link": "http://en.wikipedia.org/wiki/John_Barth",
            "sig": 83.149991,
            "img": "/WhatsMyGen/images/John_Barth_(1930).jpg"
        },
        8: {
            "name": "Jacqueline Kennedy Onassis (1929)",
            "link": "http://en.wikipedia.org/wiki/Jacqueline_Kennedy_Onassis",
            "sig": 82.877524,
            "img": "/WhatsMyGen/images/Jacqueline_Kennedy_Onassis_(1929).jpg"
        },
	9: {
            "name": "John Williams (1932)",
            "link": "http://en.wikipedia.org/wiki/John_Williams",
            "sig": 82.599972,
            "img": "/WhatsMyGen/images/John_Williams_(1932).jpg"
        },
    },
    "silent-middle": {
        0: {
            "name": "Elvis Presley (1935)",
            "link": "http://en.wikipedia.org/wiki/Elvis_Presley",
            "sig": 90.553613,
            "img": "/WhatsMyGen/images/Elvis_Presley_(1935).jpg"
        },
        1: {
            "name": "John McCain (1936)",
            "link": "http://en.wikipedia.org/wiki/John_McCain",
            "sig": 87.680141,
            "img": "/WhatsMyGen/images/John_McCain_(1936).jpg"
        },
        2: {
            "name": "Thomas Pynchon (1937)",
            "link": "http://en.wikipedia.org/wiki/Thomas_Pynchon",
            "sig": 85.090196,
            "img": "/WhatsMyGen/images/Thomas_Pynchon_(1937).jpg"
        },
        3: {
            "name": "Colin Powell (1937)",
            "link": "http://en.wikipedia.org/wiki/Colin_Powell",
            "sig": 84.949938,
            "img": "/WhatsMyGen/images/Colin_Powell_(1937).jpg"
        },
        4: {
            "name": "Woody Allen (1935)",
            "link": "http://en.wikipedia.org/wiki/Woody_Allen",
            "sig": 83.934641,
            "img": "/WhatsMyGen/images/Woody_Allen_(1935).jpg"
        },
        5: {
            "name": "Philip Glass (1937)",
            "link": "http://en.wikipedia.org/wiki/Philip_Glass",
            "sig": 83.622905,
            "img": "/WhatsMyGen/images/Philip_Glass_(1937).jpg"
        },
        6: {
            "name": "Don DeLillo (1936)",
            "link": "http://en.wikipedia.org/wiki/Don_DeLillo",
            "sig": 83.449908,
            "img": "/WhatsMyGen/images/Don_DeLillo_(1936).jpg"
        },
        7: {
            "name": "Francis Ford Coppola (1939)",
            "link": "http://en.wikipedia.org/wiki/Francis_Ford_Coppola",
            "sig": 82.827476,
            "img": "/WhatsMyGen/images/Francis_Ford_Coppola_(1939).jpg"
        },
        8: {
            "name": "Jerry Brown (1938)",
            "link": "http://en.wikipedia.org/wiki/Jerry_Brown",
            "sig": 82.015461,
            "img": "/WhatsMyGen/images/Jerry_Brown_(1938).jpg"
        },
        9: {
            "name": "Ron Paul (1935)",
            "link": "http://en.wikipedia.org/wiki/Ron_Paul",
            "sig": 81.420279,
            "img": "/WhatsMyGen/images/Ron_Paul_(1935).jpg"
        },
    },
    "silent-young": {
        0: {
            "name": "Joe Biden (1942)",
            "link": "http://en.wikipedia.org/wiki/Joe_Biden",
            "sig": 94.308206,
            "img": "/WhatsMyGen/images/Joe_Biden_(1942).jpg"
        },
        1: {
            "name": "Bob Dylan (1941)",
            "link": "http://en.wikipedia.org/wiki/Bob_Dylan",
            "sig": 91.339177,
            "img": "/WhatsMyGen/images/Bob_Dylan_(1941).jpg"
        },
        2: {
            "name": "John Kerry (1943)",
            "link": "http://en.wikipedia.org/wiki/John_Kerry",
            "sig": 90.920748,
            "img": "/WhatsMyGen/images/John_Kerry_(1943).jpg"
        },
        3: {
            "name": "Roger Ebert (1942)",
            "link": "http://en.wikipedia.org/wiki/Roger_Ebert",
            "sig": 86.140269,
            "img": "/WhatsMyGen/images/Roger_Ebert_(1942).jpg"
        },
        4: {
            "name": "Michael Bloomberg (1942)",
            "link": "http://en.wikipedia.org/wiki/Michael_Bloomberg",
            "sig": 84.870477,
            "img": "/WhatsMyGen/images/Michael_Bloomberg_(1942).jpg"
        },
        5: {
            "name": "Jimi Hendrix (1942)",
            "link": "http://en.wikipedia.org/wiki/Jimi_Hendrix",
            "sig": 84.553101,
            "img": "/WhatsMyGen/images/Jimi_Hendrix_(1942).jpg"
        },
        6: {
            "name": "Muhammad Ali (1942)",
            "link": "http://en.wikipedia.org/wiki/Muhammad_Ali",
            "sig": 84.450098,
            "img": "/WhatsMyGen/images/Muhammad_Ali_(1942).jpg"
        },
        7: {
            "name": "Bernie Sanders (1941)",
            "link": "http://en.wikipedia.org/wiki/Bernie_Sanders",
            "sig": 84.081908,
            "img": "/WhatsMyGen/images/Bernie_Sanders_(1941).jpg"
        },
        8: {
            "name": "Joseph Ellis (1943)",
            "link": "http://en.wikipedia.org/wiki/Joseph_Ellis",
            "sig": 84.038287,
            "img": "/WhatsMyGen/images/Joseph_Ellis_(1943).jpg"
        },
        9: {
            "name": "Martin Scorsese (1942)",
            "link": "http://en.wikipedia.org/wiki/Martin_Scorsese",
            "sig": 84.016114,
            "img": "/WhatsMyGen/images/Martin_Scorsese_(1942).jpg"
        },
    },
    "boomer-first": {
        0: {
            "name": "George W. Bush (1946)",
            "link": "http://en.wikipedia.org/wiki/George_W._Bush",
            "sig": 98.138808,
            "img": "/WhatsMyGen/images/George_W._Bush_(1946).jpg"
        },
        1: {
            "name": "Donald Trump (1946)",
            "link": "http://en.wikipedia.org/wiki/Donald_Trump",
            "sig": 97.539592,
            "img": "/WhatsMyGen/images/Donald_Trump_(1946).jpg"
        },
        2: {
            "name": "Bill Clinton (1946)",
            "link": "http://en.wikipedia.org/wiki/Bill_Clinton",
            "sig": 95.467523,
            "img": "/WhatsMyGen/images/Bill_Clinton_(1946).jpg"
        },
        3: {
            "name": "Hillary Clinton (1947)",
            "link": "http://en.wikipedia.org/wiki/Hillary_Clinton",
            "sig": 91.732123,
            "img": "/WhatsMyGen/images/Hillary_Clinton_(1947).jpg"
        },
        4: {
            "name": "Al Gore (1948)",
            "link": "http://en.wikipedia.org/wiki/Al_Gore",
            "sig": 88.926314,
            "img": "/WhatsMyGen/images/Al_Gore_(1948).jpg"
        },
        5: {
            "name": "Steven Spielberg (1946)",
            "link": "http://en.wikipedia.org/wiki/Steven_Spielberg",
            "sig": 87.125706,
            "img": "/WhatsMyGen/images/Steven_Spielberg_(1946).jpg"
        },
        6: {
            "name": "Mitt Romney (1947)",
            "link": "http://en.wikipedia.org/wiki/Mitt_Romney",
            "sig": 85.475257,
            "img": "/WhatsMyGen/images/Mitt_Romney_(1947).jpg"
        },
        7: {
            "name": "Bruce Springsteen (1949)",
            "link": "http://en.wikipedia.org/wiki/Bruce_Springsteen",
            "sig": 85.159833,
            "img": "/WhatsMyGen/images/Bruce_Springsteen_(1949).jpg"
        },
        8: {
            "name": "Stevie Wonder (1950)",
            "link": "http://en.wikipedia.org/wiki/Stevie_Wonder",
            "sig": 82.816103,
            "img": "/WhatsMyGen/images/Stevie_Wonder_(1950).jpg"
        },
        9: {
            "name": "Meryl Streep (1949)",
            "link": "http://en.wikipedia.org/wiki/Meryl_Streep",
            "sig": 82.670352,
            "img": "/WhatsMyGen/images/Meryl_Streep_(1949).jpg"
        },
    },
    "boomer-middle": {
        0: {
            "name": "Bill Gates (1955)",
            "link": "http://en.wikipedia.org/wiki/Bill_Gates",
            "sig": 86.476652,
            "img": "/WhatsMyGen/images/Bill_Gates_(1955).jpg"
        },
        1: {
            "name": "Condoleezza Rice (1954)",
            "link": "http://en.wikipedia.org/wiki/Condoleezza_Rice",
            "sig": 84.758060,
            "img": "/WhatsMyGen/images/Condoleezza_Rice_(1954).jpg"
        },
        2: {
            "name": "Oprah Winfrey (1954)",
            "link": "http://en.wikipedia.org/wiki/Oprah_Winfrey",
            "sig": 84.133356,
            "img": "/WhatsMyGen/images/Oprah_Winfrey_(1954).jpg"
        },
        3: {
            "name": "Tom Hanks (1956)",
            "link": "http://en.wikipedia.org/wiki/Tom_Hanks",
            "sig": 83.239239,
            "img": "/WhatsMyGen/images/Tom_Hanks_(1956).jpg"
        },
        4: {
            "name": "Steve Jobs (1955)",
            "link": "http://en.wikipedia.org/wiki/Steve_Jobs",
            "sig": 82.876836,
            "img": "/WhatsMyGen/images/Steve_Jobs_(1955).jpg"
        },
        5: {
            "name": "Paul Krugman (1953)",
            "link": "http://en.wikipedia.org/wiki/Paul_Krugman",
            "sig": 82.397301,
            "img": "/WhatsMyGen/images/Paul_Krugman_(1953).jpg"
        },
        6: {
            "name": "Ben Bernanke (1953)",
            "link": "http://en.wikipedia.org/wiki/Ben_Bernanke",
            "sig": 81.675209,
            "img": "/WhatsMyGen/images/Ben_Bernanke_(1953).jpg"
        },
        7: {
            "name": "Mel Gibson (1956)",
            "link": "http://en.wikipedia.org/wiki/Mel_Gibson",
            "sig": 81.607399,
            "img": "/WhatsMyGen/images/Mel_Gibson_(1956).jpg"
        },
        8: {
            "name": "Sonia Sotomayor (1954)",
            "link": "http://en.wikipedia.org/wiki/Sonia_Sotomayor",
            "sig": 81.548496,
            "img": "/WhatsMyGen/images/Sonia_Sotomayor_(1954).jpg"
        },
        9: {
            "name": "Jeffrey Sachs (1954)",
            "link": "http://en.wikipedia.org/wiki/Jeffrey_Sachs",
            "sig": 81.521753,
            "img": "/WhatsMyGen/images/Jeffrey_Sachs_(1954).jpg"
        },
    },
    "boomer-young": {
        0: {
            "name": "Barack Obama (1961)",
            "link": "http://en.wikipedia.org/wiki/Barack_Obama",
            "sig": 100.000000,
            "img": "/WhatsMyGen/images/Barack_Obama_(1961).jpg"
        },
        1: {
            "name": "Madonna (1958)",
            "link": "http://en.wikipedia.org/wiki/Madonna",
            "sig": 90.643442,
            "img": "/WhatsMyGen/images/Madonna_(1958).jpg"
        },
        2: {
            "name": "Michael Jackson (1958)",
            "link": "http://en.wikipedia.org/wiki/Michael_Jackson",
            "sig": 89.992865,
            "img": "/WhatsMyGen/images/Michael_Jackson_(1958).jpg"
        },
        3: {
            "name": "Prince (1958)",
            "link": "http://en.wikipedia.org/wiki/Prince_(musician)",
            "sig": 87.165659,
            "img": "/WhatsMyGen/images/Prince_(1958).jpg"
        },
        4: {
            "name": "Whitney Houston (1963)",
            "link": "http://en.wikipedia.org/wiki/Whitney_Houston",
            "sig": 86.356118,
            "img": "/WhatsMyGen/images/Whitney_Houston_(1963).jpg"
        },
        5: {
            "name": "Michael Jordan (1963)",
            "link": "http://en.wikipedia.org/wiki/Michael_Jordan",
            "sig": 84.470717,
            "img": "/WhatsMyGen/images/Michael_Jordan_(1963).jpg"
        },
        6: {
            "name": "Mike Pompeo (1963)",
            "link": "http://en.wikipedia.org/wiki/Mike_Pompeo",
            "sig": 83.223032,
            "img": "/WhatsMyGen/images/Mike_Pompeo_(1963).jpg"
        },
        7: {
            "name": "Tom Cruise (1962)",
            "link": "http://en.wikipedia.org/wiki/Tom_Cruise",
            "sig": 82.886050,
            "img": "/WhatsMyGen/images/Tom_Cruise_(1962).jpg"
        },
        8: {
            "name": "Brad Pitt (1963)",
            "link": "http://en.wikipedia.org/wiki/Brad_Pitt",
            "sig": 82.232000,
            "img": "/WhatsMyGen/images/Brad_Pitt_(1963).jpg"
        },
        9: {
            "name": "Bill de Blasio (1961)",
            "link": "http://en.wikipedia.org/wiki/Bill_de_Blasio",
            "sig": 82.056828,
            "img": "/WhatsMyGen/images/Bill_de_Blasio_(1961).jpg"
        },
    },
    "genx-first": {
        0: {
            "name": "Mariah Carey (1969)",
            "link": "http://en.wikipedia.org/wiki/Mariah_Carey",
            "sig": 86.517262,
            "img": "/WhatsMyGen/images/Mariah_Carey_(1969).jpg"
        },
        1: {
            "name": "Michelle Obama (1964)",
            "link": "http://en.wikipedia.org/wiki/Michelle_Obama",
            "sig": 85.533519,
            "img": "/WhatsMyGen/images/Michelle_Obama_(1964).jpg"
        },
        2: {
            "name": "Kamala Harris (1964)",
            "link": "http://en.wikipedia.org/wiki/Kamala_Harris",
            "sig": 83.454638,
            "img": "/WhatsMyGen/images/Kamala_Harris_(1964).jpg"
        },
        3: {
            "name": "Will Smith (1968)",
            "link": "http://en.wikipedia.org/wiki/Will_Smith",
            "sig": 83.303341,
            "img": "/WhatsMyGen/images/Will_Smith_(1968).jpg"
        },
        4: {
            "name": "Jay-Z (1969)",
            "link": "http://en.wikipedia.org/wiki/Jay-Z",
            "sig": 82.057525,
            "img": "/WhatsMyGen/images/Jay-Z_(1969).jpg"
        },
        5: {
            "name": "Jennifer Lopez (1969)",
            "link": "http://en.wikipedia.org/wiki/Jennifer_Lopez",
            "sig": 81.541219,
            "img": "/WhatsMyGen/images/Jennifer_Lopez_(1969).jpg"
        },
        6: {
            "name": "Janet Jackson (1966)",
            "link": "http://en.wikipedia.org/wiki/Janet_Jackson",
            "sig": 81.049829,
            "img": "/WhatsMyGen/images/Janet_Jackson_(1966).jpg"
        },
        7: {
            "name": "Sarah Palin (1964)",
            "link": "http://en.wikipedia.org/wiki/Sarah_Palin",
            "sig": 80.865488,
            "img": "/WhatsMyGen/images/Sarah_Palin_(1964).jpg"
        },
        8: {
            "name": "Gavin Newsom (1967)",
            "link": "http://en.wikipedia.org/wiki/Gavin_Newsom",
            "sig": 80.526694,
            "img": "/WhatsMyGen/images/Gavin_Newsom_(1967).jpg"
        },
        9: {
            "name": "Wes Anderson (1969)",
            "link": "http://en.wikipedia.org/wiki/Wes_Anderson",
            "sig": 80.502966,
            "img": "/WhatsMyGen/images/Wes_Anderson_(1969).jpg"
        },
    },
    "genx-middle": {
        0: {
            "name": "Eminem (1972)",
            "link": "http://en.wikipedia.org/wiki/Eminem",
            "sig": 83.550434,
            "img": "/WhatsMyGen/images/Eminem_(1972).jpg"
        },
        1: {
            "name": "Leonardo DiCaprio (1974)",
            "link": "http://en.wikipedia.org/wiki/Leonardo_DiCaprio",
            "sig": 82.223933,
            "img": "/WhatsMyGen/images/Leonardo_DiCaprio_(1974).jpg"
        },
        2: {
            "name": "Snoop Dogg (1971)",
            "link": "http://en.wikipedia.org/wiki/Snoop_Dogg",
            "sig": 81.963758,
            "img": "/WhatsMyGen/images/Snoop_Dogg_(1971).jpg"
        },
        3: {
            "name": "Ted Cruz (1970)",
            "link": "http://en.wikipedia.org/wiki/Ted_Cruz",
            "sig": 81.314088,
            "img": "/WhatsMyGen/images/Ted_Cruz_(1970).jpg"
        },
        4: {
            "name": "Angelina Jolie (1975)",
            "link": "http://en.wikipedia.org/wiki/Angelina_Jolie",
            "sig": 80.522251,
            "img": "/WhatsMyGen/images/Angelina_Jolie_(1975).jpg"
        },
        5: {
            "name": "Matt Damon (1970)",
            "link": "http://en.wikipedia.org/wiki/Matt_Damon",
            "sig": 80.434179,
            "img": "/WhatsMyGen/images/Matt_Damon_(1970).jpg"
        },
        6: {
            "name": "Pharrell Williams (1973)",
            "link": "http://en.wikipedia.org/wiki/Pharrell_Williams",
            "sig": 80.235699,
            "img": "/WhatsMyGen/images/Pharrell_Williams_(1973).jpg"
        },
        7: {
            "name": "Shaquille O'Neal (1972)",
            "link": "http://en.wikipedia.org/wiki/Shaquille_O'Neal",
            "sig": 80.046305,
            "img": "/WhatsMyGen/images/Shaquille_O'Neal_(1972).jpg"
        },
        8: {
            "name": "Tiger Woods (1975)",
            "link": "http://en.wikipedia.org/wiki/Tiger_Woods",
            "sig": 79.836338,
            "img": "/WhatsMyGen/images/Tiger_Woods_(1975).jpg"
        },
        9: {
            "name": "Akon (1973)",
            "link": "http://en.wikipedia.org/wiki/Akon",
            "sig": 78.943459,
            "img": "/WhatsMyGen/images/Akon_(1973).jpg"
        },
    },
    "genx-young": {
        0: {
            "name": "Beyoncé (1981)",
            "link": "http://en.wikipedia.org/wiki/Beyonc%C3%A9",
            "sig": 85.587642,
            "img": "/WhatsMyGen/images/Beyoncé_(1981).jpg"
        },
        1: {
            "name": "Kanye West (1977)",
            "link": "http://en.wikipedia.org/wiki/Kanye_West",
            "sig": 84.102596,
            "img": "/WhatsMyGen/images/Kanye_West_(1977).jpg"
        },
        2: {
            "name": "Britney Spears (1981)",
            "link": "http://en.wikipedia.org/wiki/Britney_Spears",
            "sig": 83.554630,
            "img": "/WhatsMyGen/images/Britney_Spears_(1981).jpg"
        },
        3: {
            "name": "Justin Timberlake (1981)",
            "link": "http://en.wikipedia.org/wiki/Justin_Timberlake",
            "sig": 82.055337,
            "img": "/WhatsMyGen/images/Justin_Timberlake_(1981).jpg"
        },
        4: {
            "name": "Pink (1979)",
            "link": "http://en.wikipedia.org/wiki/Pink_(singer)",
            "sig": 81.137626,
            "img": "/WhatsMyGen/images/Pink_(1979).jpg"
        },
        5: {
            "name": "Serena Williams (1981)",
            "link": "http://en.wikipedia.org/wiki/Serena_Williams",
            "sig": 80.936891,
            "img": "/WhatsMyGen/images/Serena_Williams_(1981).jpg"
        },
        6: {
            "name": "Christina Aguilera (1980)",
            "link": "http://en.wikipedia.org/wiki/Christina_Aguilera",
            "sig": 80.583319,
            "img": "/WhatsMyGen/images/Christina_Aguilera_(1980).jpg"
        },
        7: {
            "name": "Kobe Bryant (1978)",
            "link": "http://en.wikipedia.org/wiki/Kobe_Bryant",
            "sig": 80.270282,
            "img": "/WhatsMyGen/images/Kobe_Bryant_(1978).jpg"
        },
        8: {
            "name": "Ron DeSantis (1978)",
            "link": "http://en.wikipedia.org/wiki/Ron_DeSantis",
            "sig": 79.575263,
            "img": "/WhatsMyGen/images/Ron_DeSantis_(1978).jpg"
        },
        9: {
            "name": "John Legend (1978)",
            "link": "http://en.wikipedia.org/wiki/John_Legend",
            "sig": 79.551399,
            "img": "/WhatsMyGen/images/John_Legend_(1978).jpg"
        },

    },
    "millennial-first": {
        0: {
            "name": "Lady Gaga (1986)",
            "link": "http://en.wikipedia.org/wiki/Lady_Gaga",
            "sig": 85.347417,
            "img": "/WhatsMyGen/images/Lady_Gaga_(1986).jpg"
        },
        1: {
            "name": "Katy Perry (1984)",
            "link": "http://en.wikipedia.org/wiki/Katy_Perry",
            "sig": 82.693005,
            "img": "/WhatsMyGen/images/Katy_Perry_(1984).jpg"
        },
        2: {
            "name": "Edward Snowden (1983)",
            "link": "http://en.wikipedia.org/wiki/Edward_Snowden",
            "sig": 82.210681,
            "img": "/WhatsMyGen/images/Edward_Snowden_(1983).jpg"
        },
        3: {
            "name": "LeBron James (1984)",
            "link": "http://en.wikipedia.org/wiki/LeBron_James",
            "sig": 81.356505,
            "img": "/WhatsMyGen/images/LeBron_James_(1984).jpg"
        },
        4: {
            "name": "Michael Phelps (1985)",
            "link": "http://en.wikipedia.org/wiki/Michael_Phelps",
            "sig": 81.265283,
            "img": "/WhatsMyGen/images/Michael_Phelps_(1985).jpg"
        },
        5: {
            "name": "Scarlett Johansson (1984)",
            "link": "http://en.wikipedia.org/wiki/Scarlett_Johansson",
            "sig": 80.807151,
            "img": "/WhatsMyGen/images/Scarlett_Johansson_(1984).jpg"
        },
        6: {
            "name": "Mark Zuckerberg (1984)",
            "link": "http://en.wikipedia.org/wiki/Mark_Zuckerberg",
            "sig": 80.733221,
            "img": "/WhatsMyGen/images/Mark_Zuckerberg_(1984).jpg"
        },
        7: {
            "name": "Nicki Minaj (1982)",
            "link": "http://en.wikipedia.org/wiki/Nicki_Minaj",
            "sig": 80.345504,
            "img": "/WhatsMyGen/images/Nicki_Minaj_(1982).jpg"
        },
        8: {
            "name": "Kendrick Lamar (1987)",
            "link": "http://en.wikipedia.org/wiki/Kendrick_Lamar",
            "sig": 79.582506,
            "img": "/WhatsMyGen/images/Kendrick_Lamar_(1987).jpg"
        },
	9: {
            "name": "Bruno Mars (1985)",
            "link": "http://en.wikipedia.org/wiki/Bruno_Mars",
            "sig": 78.727236,
            "img": "/WhatsMyGen/images/Bruno_Mars_(1985).jpg"
        },
    },
    "millennial-middle": {
        0: {
            "name": "Taylor Swift (1989)",
            "link": "http://en.wikipedia.org/wiki/Taylor_Swift",
            "sig": 83.908543,
            "img": "/WhatsMyGen/images/Taylor_Swift_(1989).jpg"
        },
        1: {
            "name": "Ariana Grande (1993)",
            "link": "http://en.wikipedia.org/wiki/Ariana_Grande",
            "sig": 81.274757,
            "img": "/WhatsMyGen/images/Ariana_Grande_(1993).jpg"
        },
        2: {
            "name": "Miley Cyrus (1992)",
            "link": "http://en.wikipedia.org/wiki/Miley_Cyrus",
            "sig": 79.582588,
            "img": "/WhatsMyGen/images/Miley_Cyrus_(1992).jpg"
        },
        3: {
            "name": "Selena Gomez (1992)",
            "link": "http://en.wikipedia.org/wiki/Selena_Gomez",
            "sig": 79.490464,
            "img": "/WhatsMyGen/images/Selena_Gomez_(1992).jpg"
        },
        4: {
            "name": "Stephen Curry (1988)",
            "link": "http://en.wikipedia.org/wiki/Stephen_Curry",
            "sig": 77.943861,
            "img": "/WhatsMyGen/images/Stephen_Curry_(1988).jpg"
        },
        5: {
            "name": "Demi Lovato (1992)",
            "link": "http://en.wikipedia.org/wiki/Demi_Lovato",
            "sig": 77.767760,
            "img": "/WhatsMyGen/images/Demi_Lovato_(1992).jpg"
        },
        6: {
            "name": "Cardi B (1992)",
            "link": "http://en.wikipedia.org/wiki/Cardi_B",
            "sig": 77.455525,
            "img": "/WhatsMyGen/images/Cardi_B_(1992).jpg"
        },
        7: {
            "name": "Travis Scott (1991)",
            "link": "http://en.wikipedia.org/wiki/Travis_Scott",
            "sig": 76.919615,
            "img": "/WhatsMyGen/images/Travis_Scott_(1991).jpg"
        },
        8: {
            "name": "Alexandria Ocasio-Cortez (1989)",
            "link": "http://en.wikipedia.org/wiki/Alexandria_Ocasio-Cortez",
            "sig": 76.382795,
            "img": "/WhatsMyGen/images/Alexandria_Ocasio-Cortez_(1989).jpg"
        },
        9: {
            "name": "Big Sean (1988)",
            "link": "http://en.wikipedia.org/wiki/Big_Sean",
            "sig": 76.214209,
            "img": "/WhatsMyGen/images/Big_Sean_(1988).jpg"
        },
    },
    "millennial-young": {
        0: {
            "name": "Camila Cabello (1997)",
            "link": "http://en.wikipedia.org/wiki/Camila_Cabello",
            "sig": 76.556774,
            "img": "/WhatsMyGen/images/Camila_Cabello_(1997).jpg"
        },
        1: {
            "name": "Post Malone (1995)",
            "link": "http://en.wikipedia.org/wiki/Post_Malone",
            "sig": 76.208464,
            "img": "/WhatsMyGen/images/Post_Malone_(1995).jpg"
        },
        2: {
            "name": "Megan Thee Stallion (1995)",
            "link": "http://en.wikipedia.org/wiki/Megan_Thee_Stallion",
            "sig": 76.008076,
            "img": "/WhatsMyGen/images/Megan_Thee_Stallion_(1995).jpg"
        },
        3: {
            "name": "Halsey (1994)",
            "link": "http://en.wikipedia.org/wiki/Halsey_(singer)",
            "sig": 75.978577,
            "img": "/WhatsMyGen/images/Halsey_(1994).jpg"
        },
        4: {
            "name": "Lil Uzi Vert (1994)",
            "link": "http://en.wikipedia.org/wiki/Lil_Uzi_Vert",
            "sig": 75.758179,
            "img": "/WhatsMyGen/images/Lil_Uzi_Vert_(1994).jpg"
        },
        5: {
            "name": "Lil Nas X (1999)",
            "link": "http://en.wikipedia.org/wiki/Lil_Nas_X",
            "sig": 75.631711,
            "img": "/WhatsMyGen/images/Lil_Nas_X_(1999).jpg"
        },
        6: {
            "name": "Lil Baby (1994)",
            "link": "http://en.wikipedia.org/wiki/Lil_Baby",
            "sig": 75.236214,
            "img": "/WhatsMyGen/images/Lil_Baby_(1994).jpg"
        },
        7: {
            "name": "Becky G (1997)",
            "link": "http://en.wikipedia.org/wiki/Becky_G",
            "sig": 74.885485,
            "img": "/WhatsMyGen/images/Becky_G_(1997).jpg"
        },
        8: {
            "name": "Playboi Carti (1995)",
            "link": "http://en.wikipedia.org/wiki/Playboi_Carti",
            "sig": 74.660041,
            "img": "/WhatsMyGen/images/Playboi_Carti_(1995).jpg"
        },
        9: {
            "name": "Simone Biles (1997)",
            "link": "http://en.wikipedia.org/wiki/Simone_Biles",
            "sig": 74.445011,
            "img": "/WhatsMyGen/images/Simone_Biles_(1997).jpg"
        },
    },
    "genz-first": {
        0: {
            "name": "Billie Eilish (2001)",
            "link": "http://en.wikipedia.org/wiki/Billie_Eilish",
            "sig": 77.184097,
            "img": "/WhatsMyGen/images/Billie_Eilish_(2001).jpg",
        },
        1: {
            "name": "Willow Smith (2000)",
            "link": "http://en.wikipedia.org/wiki/Willow_Smith",
            "sig": 72.046082,
            "img": "/WhatsMyGen/images/Willow_Smith_(2000).jpg",
        },
        2: {
            "name": "Auliʻi Cravalho (2000)",
            "link": "http://en.wikipedia.org/wiki/Auli%CA%BBi_Cravalho",
            "sig": 71.723971,
            "img": "/WhatsMyGen/images/Aulii_Cravalho_(2000).jpg",
        },
        3: {
            "name": "Olivia Rodrigo (2003)",
            "link": "http://en.wikipedia.org/wiki/Olivia_Rodrigo",
            "sig": 71.640507,
            "img": "/WhatsMyGen/images/Olivia_Rodrigo_(2003).jpg",
        },
        4: {
            "name": "Jenna Ortega (2002)",
            "link": "http://en.wikipedia.org/wiki/Jenna_Ortega",
            "sig": 71.511564,
            "img": "/WhatsMyGen/images/Jenna_Ortega_(2002).jpg",
        },
        5: {
            "name": "Chloe Kim (2000)",
            "link": "http://en.wikipedia.org/wiki/Chloe_Kim",
            "sig": 71.412517,
            "img": "/WhatsMyGen/images/Chloe_Kim_(2000).jpg",
        },
        6: {
            "name": "Rachel Zegler (2001)",
            "link": "http://en.wikipedia.org/wiki/Rachel_Zegler",
            "sig": 71.248259,
            "img": "/WhatsMyGen/images/Rachel_Zegler_(2001).jpg",
        },
        7: {
            "name": "Lil Pump (2000)",
            "link": "http://en.wikipedia.org/wiki/Lil_Pump",
            "sig": 71.238022,
            "img": "/WhatsMyGen/images/Lil_Pump_(2000).jpg",
        },
        8: {
            "name": "Tay-K (2000)",
            "link": "http://en.wikipedia.org/wiki/Tay-K",
            "sig": 70.666379,
            "img": "",
        },
        9: {
            "name": "Paige Bueckers (2001)",
            "link": "http://en.wikipedia.org/wiki/Paige_Bueckers",
            "sig": 70.546881,
            "img": "/WhatsMyGen/images/Paige_Bueckers_(2001).jpg",
        },
    }
}
