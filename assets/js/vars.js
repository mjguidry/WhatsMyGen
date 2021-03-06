var gen_names =
    [
        "Lost",
        "Greatest",
        "Silent",
        "Boomer",
        "GenX",
        "Millennial"
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
            "sig": 93.38028979908796,
            "img": "/WhatsMyGen/images/George_H._W._Bush_(1924).jpg"
        },
        1: {
            "name": "Jimmy Carter (1924)",
            "link": "http://en.wikipedia.org/wiki/Jimmy_Carter",
            "sig": 91.73874433452309,
            "img": "/WhatsMyGen/images/Jimmy_Carter_(1924).jpg"
        },
        2: {
            "name": "Henry Kissinger (1923)",
            "link": "http://en.wikipedia.org/wiki/Henry_Kissinger",
            "sig": 87.12449103583769,
            "img": "/WhatsMyGen/images/Henry_Kissinger_(1923).jpg"
        },
        3: {
            "name": "Marilyn Monroe (1926)",
            "link": "http://en.wikipedia.org/wiki/Marilyn_Monroe",
            "sig": 87.0890568211012,
            "img": "/WhatsMyGen/images/Marilyn_Monroe_(1926).jpg"
        },
        4: {
            "name": "Chuck Berry (1926)",
            "link": "http://en.wikipedia.org/wiki/Chuck_Berry",
            "sig": 86.84274663888182,
            "img": "/WhatsMyGen/images/Chuck_Berry_(1926).jpg"
        },
        5: {
            "name": "Alan Greenspan (1926)",
            "link": "http://en.wikipedia.org/wiki/Alan_Greenspan",
            "sig": 86.45015877252811,
            "img": "/WhatsMyGen/images/Alan_Greenspan_(1926).jpg"
        },
        6: {
            "name": "Robert Altman (1925)",
            "link": "http://en.wikipedia.org/wiki/Robert_Altman",
            "sig": 85.6233810090251,
            "img": "/WhatsMyGen/images/Robert_Altman_(1925).jpg"
        },
        7: {
            "name": "Roy Lichtenstein (1923)",
            "link": "http://en.wikipedia.org/wiki/Roy_Lichtenstein",
            "sig": 85.29524993612517,
            "img": "/WhatsMyGen/images/Roy_Lichtenstein_(1923).jpg"
        },
        8: {
            "name": "Judy Garland (1922)",
            "link": "http://en.wikipedia.org/wiki/Judy_Garland",
            "sig": 84.36740694122442,
            "img": "/WhatsMyGen/images/Judy_Garland_(1922).jpg"
        },
        9: {
            "name": "Harper Lee (1926)",
            "link": "http://en.wikipedia.org/wiki/Harper_Lee",
            "sig": 83.9928277371736,
            "img": "/WhatsMyGen/images/Harper_Lee_(1926).jpg"
        },
    },
    "silent-first": {
        0: {
            "name": "Martin Luther King Jr. (1929)",
            "link": "http://en.wikipedia.org/wiki/Martin_Luther_King_Jr.",
            "sig": 91.26302243693013,
            "img": "/WhatsMyGen/images/Martin_Luther_King_Jr._(1929).jpg"
        },
        1: {
            "name": "Noam Chomsky (1928)",
            "link": "http://en.wikipedia.org/wiki/Noam_Chomsky",
            "sig": 89.55466430070409,
            "img": "/WhatsMyGen/images/Noam_Chomsky_(1928).jpg"
        },
        2: {
            "name": "Andy Warhol (1928)",
            "link": "http://en.wikipedia.org/wiki/Andy_Warhol",
            "sig": 88.46682367528743,
            "img": "/WhatsMyGen/images/Andy_Warhol_(1928).jpg"
        },
        3: {
            "name": "James Brown (1933)",
            "link": "http://en.wikipedia.org/wiki/James_Brown",
            "sig": 87.10864902687281,
            "img": "/WhatsMyGen/images/James_Brown_(1933).jpg"
        },
        4: {
            "name": "Stephen Sondheim (1930)",
            "link": "http://en.wikipedia.org/wiki/Stephen_Sondheim",
            "sig": 85.7673091033918,
            "img": "/WhatsMyGen/images/Stephen_Sondheim_(1930).jpg"
        },
        5: {
            "name": "Edward Albee (1928)",
            "link": "http://en.wikipedia.org/wiki/Edward_Albee",
            "sig": 85.16138420290078,
            "img": "/WhatsMyGen/images/Edward_Albee_(1928).jpg"
        },
        6: {
            "name": "Thomas Sowell (1930)",
            "link": "http://en.wikipedia.org/wiki/Thomas_Sowell",
            "sig": 84.6535089411009,
            "img": "/WhatsMyGen/images/Thomas_Sowell_(1930).jpg"
        },
        7: {
            "name": "Richard Rorty (1931)",
            "link": "http://en.wikipedia.org/wiki/Richard_Rorty",
            "sig": 84.35417377724848,
            "img": "/WhatsMyGen/images/Richard_Rorty_(1931).jpg"
        },
        8: {
            "name": "John Barth (1930)",
            "link": "http://en.wikipedia.org/wiki/John_Barth",
            "sig": 84.08181716335079,
            "img": "/WhatsMyGen/images/John_Barth_(1930).jpg"
        },
        9: {
            "name": "Chuck Grassley (1933)",
            "link": "http://en.wikipedia.org/wiki/Chuck_Grassley",
            "sig": 83.82579877348327,
            "img": "/WhatsMyGen/images/Chuck_Grassley_(1933).jpg"
        },
    },
    "silent-middle": {
        0: {
            "name": "Elvis Presley (1935)",
            "link": "http://en.wikipedia.org/wiki/Elvis_Presley",
            "sig": 91.2972472703641,
            "img": "/WhatsMyGen/images/Elvis_Presley_(1935).jpg"
        },
        1: {
            "name": "John McCain (1936)",
            "link": "http://en.wikipedia.org/wiki/John_McCain",
            "sig": 88.7119459140671,
            "img": "/WhatsMyGen/images/John_McCain_(1936).jpg"
        },
        2: {
            "name": "Francis Ford Coppola (1939)",
            "link": "http://en.wikipedia.org/wiki/Francis_Ford_Coppola",
            "sig": 87.06119102946292,
            "img": "/WhatsMyGen/images/Francis_Ford_Coppola_(1939).jpg"
        },
        3: {
            "name": "Thomas Pynchon (1937)",
            "link": "http://en.wikipedia.org/wiki/Thomas_Pynchon",
            "sig": 86.29763466683758,
        },
        4: {
            "name": "Robert Nozick (1938)",
            "link": "http://en.wikipedia.org/wiki/Robert_Nozick",
            "sig": 85.40837496580589,
            "img": "/WhatsMyGen/images/Robert_Nozick_(1938).jpg"
        },
        5: {
            "name": "Philip Glass (1937)",
            "link": "http://en.wikipedia.org/wiki/Philip_Glass",
            "sig": 85.34201477596979,
            "img": "/WhatsMyGen/images/Philip_Glass_(1937).jpg"
        },
        6: {
            "name": "Colin Powell (1937)",
            "link": "http://en.wikipedia.org/wiki/Colin_Powell",
            "sig": 84.6058980202694,
            "img": "/WhatsMyGen/images/Colin_Powell_(1937).jpg"
        },
        7: {
            "name": "Don DeLillo (1936)",
            "link": "http://en.wikipedia.org/wiki/Don_DeLillo",
            "sig": 84.2221031077395,
            "img": "/WhatsMyGen/images/Don_DeLillo_(1936).jpg"
        },
        8: {
            "name": "Steny Hoyer (1939)",
            "link": "http://en.wikipedia.org/wiki/Steny_Hoyer",
            "sig": 83.98593846557027,
            "img": "/WhatsMyGen/images/Steny_Hoyer_(1939).jpg"
        },
        9: {
            "name": "Woody Allen (1935)",
            "link": "http://en.wikipedia.org/wiki/Woody_Allen",
            "sig": 83.88497870845772,
            "img": "/WhatsMyGen/images/Woody_Allen_(1935).jpg"
        },
    },
    "silent-young": {
        0: {
            "name": "Bob Dylan (1941)",
            "link": "http://en.wikipedia.org/wiki/Bob_Dylan",
            "sig": 91.9548954454563,
            "img": "/WhatsMyGen/images/Bob_Dylan_(1941).jpg"
        },
        1: {
            "name": "John Kerry (1943)",
            "link": "http://en.wikipedia.org/wiki/John_Kerry",
            "sig": 91.47265329333908,
            "img": "/WhatsMyGen/images/John_Kerry_(1943).jpg"
        },
        2: {
            "name": "Martin Scorsese (1942)",
            "link": "http://en.wikipedia.org/wiki/Martin_Scorsese",
            "sig": 88.04477875619612,
            "img": "/WhatsMyGen/images/Martin_Scorsese_(1942).jpg"
        },
        3: {
            "name": "George Lucas (1944)",
            "link": "http://en.wikipedia.org/wiki/George_Lucas",
            "sig": 87.38176139689526,
            "img": "/WhatsMyGen/images/George_Lucas_(1944).jpg"
        },
        4: {
            "name": "Nancy Pelosi (1940)",
            "link": "http://en.wikipedia.org/wiki/Nancy_Pelosi",
            "sig": 86.82897952920202,
            "img": "/WhatsMyGen/images/Nancy_Pelosi_(1940).jpg"
        },
        5: {
            "name": "Roger Ebert (1942)",
            "link": "http://en.wikipedia.org/wiki/Roger_Ebert",
            "sig": 85.8940205930281,
            "img": "/WhatsMyGen/images/Roger_Ebert_(1942).jpg"
        },
        6: {
            "name": "Michael Bloomberg (1942)",
            "link": "http://en.wikipedia.org/wiki/Michael_Bloomberg",
            "sig": 85.18764386985484,
            "img": "/WhatsMyGen/images/Michael_Bloomberg_(1942).jpg"
        },
        7: {
            "name": "Muhammad Ali (1942)",
            "link": "http://en.wikipedia.org/wiki/Muhammad_Ali",
            "sig": 85.03589695815191,
            "img": "/WhatsMyGen/images/Muhammad_Ali_(1942).jpg"
        },
        8: {
            "name": "August Wilson (1945)",
            "link": "http://en.wikipedia.org/wiki/August_Wilson",
            "sig": 84.40878487489375,
            "img": "/WhatsMyGen/images/August_Wilson_(1945).jpg"
        },
        9: {
            "name": "Joe Biden (1942)",
            "link": "http://en.wikipedia.org/wiki/Joe_Biden",
            "sig": 84.22495491517401,
            "img": "/WhatsMyGen/images/Joe_Biden_(1942).jpg"
        },
    },
    "boomer-first": {
        0: {
            "name": "George W. Bush (1946)",
            "link": "http://en.wikipedia.org/wiki/George_W._Bush",
            "sig": 97.61173061103803,
            "img": "/WhatsMyGen/images/George_W._Bush_(1946).jpg"
        },
        1: {
            "name": "Donald Trump (1946)",
            "link": "http://en.wikipedia.org/wiki/Donald_Trump",
            "sig": 96.25927501275368,
            "img": "/WhatsMyGen/images/Donald_Trump_(1946).jpg"
        },
        2: {
            "name": "Bill Clinton (1946)",
            "link": "http://en.wikipedia.org/wiki/Bill_Clinton",
            "sig": 94.12767258046978,
            "img": "/WhatsMyGen/images/Bill_Clinton_(1946).jpg"
        },
        3: {
            "name": "Hillary Clinton (1947)",
            "link": "http://en.wikipedia.org/wiki/Hillary_Clinton",
            "sig": 92.02046014766184,
            "img": "/WhatsMyGen/images/Hillary_Clinton_(1947).jpg"
        },
        4: {
            "name": "Steven Spielberg (1946)",
            "link": "http://en.wikipedia.org/wiki/Steven_Spielberg",
            "sig": 89.67204031566756,
            "img": "/WhatsMyGen/images/Steven_Spielberg_(1946).jpg"
        },
        5: {
            "name": "Al Gore (1948)",
            "link": "http://en.wikipedia.org/wiki/Al_Gore",
            "sig": 89.22849979442232,
            "img": "/WhatsMyGen/images/Al_Gore_(1948).jpg"
        },
        6: {
            "name": "Martha Nussbaum (1947)",
            "link": "http://en.wikipedia.org/wiki/Martha_Nussbaum",
            "sig": 85.79965254998262,
            "img": "/WhatsMyGen/images/Martha_Nussbaum_(1947).jpg"
        },
        7: {
            "name": "Chuck Schumer (1950)",
            "link": "http://en.wikipedia.org/wiki/Chuck_Schumer",
            "sig": 85.38495052767242,
            "img": "/WhatsMyGen/images/Chuck_Schumer_(1950).jpg"
        },
        8: {
            "name": "Mitt Romney (1947)",
            "link": "http://en.wikipedia.org/wiki/Mitt_Romney",
            "sig": 85.17817576627054,
            "img": "/WhatsMyGen/images/Mitt_Romney_(1947).jpg"
        },
        9: {
            "name": "Bruce Springsteen (1949)",
            "link": "http://en.wikipedia.org/wiki/Bruce_Springsteen",
            "sig": 85.02053973072546,
            "img": "/WhatsMyGen/images/Bruce_Springsteen_(1949).jpg"
        },
    },
    "boomer-middle": {
        0: {
            "name": "Bill Gates (1955)",
            "link": "http://en.wikipedia.org/wiki/Bill_Gates",
            "sig": 85.73357533993605,
            "img": "/WhatsMyGen/images/Bill_Gates_(1955).jpg"
        },
        1: {
            "name": "Cornel West (1953)",
            "link": "http://en.wikipedia.org/wiki/Cornel_West",
            "sig": 85.05631780878197,
            "img": "/WhatsMyGen/images/Cornel_West_(1953).jpg"
        },
        2: {
            "name": "Condoleezza Rice (1954)",
            "link": "http://en.wikipedia.org/wiki/Condoleezza_Rice",
            "sig": 84.87299721268337,
            "img": "/WhatsMyGen/images/Condoleezza_Rice_(1954).jpg"
        },
        3: {
            "name": "Judith Butler (1956)",
            "link": "http://en.wikipedia.org/wiki/Judith_Butler",
            "sig": 84.39925017101555,
            "img": "/WhatsMyGen/images/Judith_Butler_(1956).jpg"
        },
        4: {
            "name": "Oprah Winfrey (1954)",
            "link": "http://en.wikipedia.org/wiki/Oprah_Winfrey",
            "sig": 83.70155606813199,
            "img": "/WhatsMyGen/images/Oprah_Winfrey_(1954).jpg"
        },
        5: {
            "name": "Paul Krugman (1953)",
            "link": "http://en.wikipedia.org/wiki/Paul_Krugman",
            "sig": 82.50639264207271,
            "img": "/WhatsMyGen/images/Paul_Krugman_(1953).jpg"
        },
        6: {
            "name": "Tom Hanks (1956)",
            "link": "http://en.wikipedia.org/wiki/Tom_Hanks",
            "sig": 81.42777830114747,
            "img": "/WhatsMyGen/images/Tom_Hanks_(1956).jpg"
        },
        7: {
            "name": "Ben Bernanke (1953)",
            "link": "http://en.wikipedia.org/wiki/Ben_Bernanke",
            "sig": 80.9859876811866,
            "img": "/WhatsMyGen/images/Ben_Bernanke_(1953).jpg"
        },
        8: {
            "name": "Lawrence Summers (1954)",
            "link": "http://en.wikipedia.org/wiki/Lawrence_Summers",
            "sig": 80.5416408104603,
            "img": "/WhatsMyGen/images/Lawrence_Summers_(1954).jpg"
        },
        9: {
            "name": "Steve Jobs (1955)",
            "link": "http://en.wikipedia.org/wiki/Steve_Jobs",
            "sig": 80.38874225676543,
            "img": "/WhatsMyGen/images/Steve_Jobs_(1955).jpg"
        },
    },
    "boomer-young": {
        0: {
            "name": "Barack Obama (1961)",
            "link": "http://en.wikipedia.org/wiki/Barack_Obama",
            "sig": 100.0,
            "img": "/WhatsMyGen/images/Barack_Obama_(1961).jpg"
        },
        1: {
            "name": "Michael Jackson (1958)",
            "link": "http://en.wikipedia.org/wiki/Michael_Jackson",
            "sig": 90.54642299740048,
            "img": "/WhatsMyGen/images/Michael_Jackson_(1958).jpg"
        },
        2: {
            "name": "Madonna (1958)",
            "link": "http://en.wikipedia.org/wiki/Madonna_(entertainer)",
            "sig": 90.48387903298865,
            "img": "/WhatsMyGen/images/Madonna_(1958).jpg"
        },
        3: {
            "name": "Mike Pence (1959)",
            "link": "http://en.wikipedia.org/wiki/Mike_Pence",
            "sig": 85.59580648648331,
            "img": "/WhatsMyGen/images/Mike_Pence_(1959).jpg"
        },
        4: {
            "name": "Michael Jordan (1963)",
            "link": "http://en.wikipedia.org/wiki/Michael_Jordan",
            "sig": 84.27134930874868,
            "img": "/WhatsMyGen/images/Michael_Jordan_(1963).jpg"
        },
        5: {
            "name": "Prince (1958)",
            "link": "http://en.wikipedia.org/wiki/Prince_(musician)",
            "sig": 82.92528733867871,
            "img": "/WhatsMyGen/images/Prince_(1958).jpg"
        },
        6: {
            "name": "Tom Cruise (1962)",
            "link": "http://en.wikipedia.org/wiki/Tom_Cruise",
            "sig": 81.70953127324847,
            "img": "/WhatsMyGen/images/Tom_Cruise_(1962).jpg"
        },
        7: {
            "name": "Quentin Tarantino (1963)",
            "link": "http://en.wikipedia.org/wiki/Quentin_Tarantino",
            "sig": 81.31116690329208,
            "img": "/WhatsMyGen/images/Quentin_Tarantino_(1963).jpg"
        },
        8: {
            "name": "Whitney Houston (1963)",
            "link": "http://en.wikipedia.org/wiki/Whitney_Houston",
            "sig": 81.30399751028092,
            "img": "/WhatsMyGen/images/Whitney_Houston_(1963).jpg"
        },
        9: {
            "name": "Magic Johnson (1959)",
            "link": "http://en.wikipedia.org/wiki/Magic_Johnson",
            "sig": 80.87918482017746,
            "img": "/WhatsMyGen/images/Magic_Johnson_(1959).jpg"
        },
    },
    "genx-first": {
        0: {
            "name": "Jay-Z (1969)",
            "link": "http://en.wikipedia.org/wiki/Jay-Z",
            "sig": 87.61337863959817,
            "img": "/WhatsMyGen/images/Jay-Z_(1969).jpg"
        },
        1: {
            "name": "Michelle Obama (1964)",
            "link": "http://en.wikipedia.org/wiki/Michelle_Obama",
            "sig": 84.49015871467446,
            "img": "/WhatsMyGen/images/Michelle_Obama_(1964).jpg"
        },
        2: {
            "name": "Kevin McCarthy (1965)",
            "link": "http://en.wikipedia.org/wiki/Kevin_McCarthy_(California_politician)",
            "sig": 84.36746410885866,
            "img": "/WhatsMyGen/images/Kevin_McCarthy_(1965).jpg"
        },
        3: {
            "name": "Jennifer Lopez (1969)",
            "link": "http://en.wikipedia.org/wiki/Jennifer_Lopez",
            "sig": 82.45683830751493,
            "img": "/WhatsMyGen/images/Jennifer_Lopez_(1969).jpg"
        },
        4: {
            "name": "Will Smith (1968)",
            "link": "http://en.wikipedia.org/wiki/Will_Smith",
            "sig": 82.1074806061802,
            "img": "/WhatsMyGen/images/Will_Smith_(1968).jpg"
        },
        5: {
            "name": "Janet Jackson (1966)",
            "link": "http://en.wikipedia.org/wiki/Janet_Jackson",
            "sig": 81.15481256610687,
            "img": "/WhatsMyGen/images/Janet_Jackson_(1966).jpg"
        },
        6: {
            "name": "Mariah Carey (1969)",
            "link": "http://en.wikipedia.org/wiki/Mariah_Carey",
            "sig": 81.14505948186583,
            "img": "/WhatsMyGen/images/Mariah_Carey_(1969).jpg"
        },
        7: {
            "name": "Sarah Palin (1964)",
            "link": "http://en.wikipedia.org/wiki/Sarah_Palin",
            "sig": 80.24810616061694,
            "img": "/WhatsMyGen/images/Sarah_Palin_(1964).jpg"
        },
        8: {
            "name": "Stephen Colbert (1964)",
            "link": "http://en.wikipedia.org/wiki/Stephen_Colbert",
            "sig": 79.5083675494487,
            "img": "/WhatsMyGen/images/Stephen_Colbert_(1964).jpg"
        },
        9: {
            "name": "Mike Tyson (1966)",
            "link": "http://en.wikipedia.org/wiki/Mike_Tyson",
            "sig": 79.44558176594401,
            "img": "/WhatsMyGen/images/Mike_Tyson_(1966).jpg"
        },
    },
    "genx-middle": {
        0: {
            "name": "Eminem (1972)",
            "link": "http://en.wikipedia.org/wiki/Eminem",
            "sig": 88.00825235380731,
            "img": "/WhatsMyGen/images/Eminem_(1972).jpg"
        },
        1: {
            "name": "Christopher Nolan (1970)",
            "link": "http://en.wikipedia.org/wiki/Christopher_Nolan",
            "sig": 86.24757611374572,
            "img": "/WhatsMyGen/images/Christopher_Nolan_(1970).jpg"
        },
        2: {
            "name": "Snoop Dogg (1971)",
            "link": "http://en.wikipedia.org/wiki/Snoop_Dogg",
            "sig": 81.99674461193476,
            "img": "/WhatsMyGen/images/Snoop_Dogg_(1971).jpg"
        },
        3: {
            "name": "Angelina Jolie (1975)",
            "link": "http://en.wikipedia.org/wiki/Angelina_Jolie",
            "sig": 80.59784031082317,
            "img": "/WhatsMyGen/images/Angelina_Jolie_(1975).jpg"
        },
        4: {
            "name": "Leonardo DiCaprio (1974)",
            "link": "http://en.wikipedia.org/wiki/Leonardo_DiCaprio",
            "sig": 80.51642902624202,
            "img": "/WhatsMyGen/images/Leonardo_DiCaprio_(1974).jpg"
        },
        5: {
            "name": "Pharrell Williams (1973)",
            "link": "http://en.wikipedia.org/wiki/Pharrell_Williams",
            "sig": 80.18021559321198,
            "img": "/WhatsMyGen/images/Pharrell_Williams_(1973).jpg"
        },
        6: {
            "name": "Shaquille O'Neal (1972)",
            "link": "http://en.wikipedia.org/wiki/Shaquille_O'Neal",
            "sig": 80.00054657975106,
            "img": "/WhatsMyGen/images/Shaquille_O'Neal_(1972).jpg"
        },
        7: {
            "name": "Thomas Woods (1972)",
            "link": "http://en.wikipedia.org/wiki/Thomas_Woods",
            "sig": 79.7834247623883,
            "img": "/WhatsMyGen/images/Thomas_Woods_(1972).jpg"
        },
        8: {
            "name": "Tiger Woods (1975)",
            "link": "http://en.wikipedia.org/wiki/Tiger_Woods",
            "sig": 79.34027869781939,
            "img": "/WhatsMyGen/images/Tiger_Woods_(1975).jpg"
        },
        9: {
            "name": "Marco Rubio (1971)",
            "link": "http://en.wikipedia.org/wiki/Marco_Rubio",
            "sig": 79.33184018332791,
            "img": "/WhatsMyGen/images/Marco_Rubio_(1971).jpg"
        },
    },
    "genx-young": {
        0: {
            "name": "Beyoncé (1981)",
            "link": "http://en.wikipedia.org/wiki/Beyonc%C3%A9",
            "sig": 90.31030380350047,
            "img": "/WhatsMyGen/images/Beyoncé_(1981).jpg"
        },
        1: {
            "name": "Britney Spears (1981)",
            "link": "http://en.wikipedia.org/wiki/Britney_Spears",
            "sig": 88.18262049838252,
            "img": "/WhatsMyGen/images/Britney_Spears_(1981).jpg"
        },
        2: {
            "name": "Kanye West (1977)",
            "link": "http://en.wikipedia.org/wiki/Kanye_West",
            "sig": 87.99340420416385,
            "img": "/WhatsMyGen/images/Kanye_West_(1977).jpg"
        },
        3: {
            "name": "Pink (1979)",
            "link": "http://en.wikipedia.org/wiki/Pink_(singer)",
            "sig": 82.62077278716336,
            "img": "/WhatsMyGen/images/Pink_(1979).jpg"
        },
        4: {
            "name": "Justin Timberlake (1981)",
            "link": "http://en.wikipedia.org/wiki/Justin_Timberlake",
            "sig": 81.27692406205334,
            "img": "/WhatsMyGen/images/Justin_Timberlake_(1981).jpg"
        },
        5: {
            "name": "Christina Aguilera (1980)",
            "link": "http://en.wikipedia.org/wiki/Christina_Aguilera",
            "sig": 80.56359289617369,
            "img": "/WhatsMyGen/images/Christina_Aguilera_(1980).jpg"
        },
        6: {
            "name": "Serena Williams (1981)",
            "link": "http://en.wikipedia.org/wiki/Serena_Williams",
            "sig": 80.15406082886679,
            "img": "/WhatsMyGen/images/Serena_Williams_(1981).jpg"
        },
        7: {
            "name": "Kobe Bryant (1978)",
            "link": "http://en.wikipedia.org/wiki/Kobe_Bryant",
            "sig": 79.85325359843246,
            "img": "/WhatsMyGen/images/Kobe_Bryant_(1978).jpg"
        },
        8: {
            "name": "Usher (1978)",
            "link": "http://en.wikipedia.org/wiki/Usher_(musician)",
            "sig": 79.56007224456876,
            "img": "/WhatsMyGen/images/Usher_(1978).jpg"
        },
        9: {
            "name": "Alicia Keys (1981)",
            "link": "http://en.wikipedia.org/wiki/Alicia_Keys",
            "sig": 78.16702533926232,
            "img": "/WhatsMyGen/images/Alicia_Keys_(1981).jpg"
        },
    },
    "millennial-first": {
        0: {
            "name": "Katy Perry (1984)",
            "link": "http://en.wikipedia.org/wiki/Katy_Perry",
            "sig": 87.49216867724378,
            "img": "/WhatsMyGen/images/Katy_Perry_(1984).jpg"
        },
        1: {
            "name": "Lady Gaga (1986)",
            "link": "http://en.wikipedia.org/wiki/Lady_Gaga",
            "sig": 85.2191100790981,
            "img": "/WhatsMyGen/images/Lady_Gaga_(1986).jpg"
        },
        2: {
            "name": "Janelle Monáe (1985)",
            "link": "http://en.wikipedia.org/wiki/Janelle_Mon%C3%A1e",
            "sig": 82.72527922430471,
            "img": "/WhatsMyGen/images/Janelle_Monáe_(1985).jpg"
        },
        3: {
            "name": "Michael Phelps (1985)",
            "link": "http://en.wikipedia.org/wiki/Michael_Phelps",
            "sig": 82.42920976155878,
            "img": "/WhatsMyGen/images/Michael_Phelps_(1985).jpg"
        },
        4: {
            "name": "Edward Snowden (1983)",
            "link": "http://en.wikipedia.org/wiki/Edward_Snowden",
            "sig": 81.5016291660992,
            "img": "/WhatsMyGen/images/Edward_Snowden_(1983).jpg"
        },
        5: {
            "name": "LeBron James (1984)",
            "link": "http://en.wikipedia.org/wiki/LeBron_James",
            "sig": 80.5320146383673,
            "img": "/WhatsMyGen/images/LeBron_James_(1984).jpg"
        },
        6: {
            "name": "Scarlett Johansson (1984)",
            "link": "http://en.wikipedia.org/wiki/Scarlett_Johansson",
            "sig": 79.88674782950072,
            "img": "/WhatsMyGen/images/Scarlett_Johansson_(1984).jpg"
        },
        7: {
            "name": "Kelly Clarkson (1982)",
            "link": "http://en.wikipedia.org/wiki/Kelly_Clarkson",
            "sig": 79.75415493365287,
            "img": "/WhatsMyGen/images/Kelly_Clarkson_(1982).jpg"
        },
        8: {
            "name": "Nicki Minaj (1982)",
            "link": "http://en.wikipedia.org/wiki/Nicki_Minaj",
            "sig": 79.18476215231411,
            "img": "/WhatsMyGen/images/Nicki_Minaj_(1982).jpg"
        },
        9: {
            "name": "Mark Zuckerberg (1984)",
            "link": "http://en.wikipedia.org/wiki/Mark_Zuckerberg",
            "sig": 78.18596240394544,
            "img": "/WhatsMyGen/images/Mark_Zuckerberg_(1984).jpg"
        },
    },
    "millennial-middle": {
        0: {
            "name": "Taylor Swift (1989)",
            "link": "http://en.wikipedia.org/wiki/Taylor_Swift",
            "sig": 87.49678667873842,
            "img": "/WhatsMyGen/images/Taylor_Swift_(1989).jpg"
        },
        1: {
            "name": "Chance the Rapper (1993)",
            "link": "http://en.wikipedia.org/wiki/Chance_the_Rapper",
            "sig": 82.09596818799517,
            "img": "/WhatsMyGen/images/Chance_the_Rapper_(1993).jpg"
        },
        2: {
            "name": "ASAP Rocky (1988)",
            "link": "http://en.wikipedia.org/wiki/ASAP_Rocky",
            "sig": 81.63404541395721,
            "img": "/WhatsMyGen/images/ASAP_Rocky_(1988).jpg"
        },
        3: {
            "name": "SZA (1990)",
            "link": "http://en.wikipedia.org/wiki/SZA_(singer)",
            "sig": 81.56161545055473,
            "img": "/WhatsMyGen/images/SZA_(1990).jpg"
        },
        4: {
            "name": "Ariana Grande (1993)",
            "link": "http://en.wikipedia.org/wiki/Ariana_Grande",
            "sig": 79.93163442672207,
            "img": "/WhatsMyGen/images/Ariana_Grande_(1993).jpg"
        },
        5: {
            "name": "Demi Lovato (1992)",
            "link": "http://en.wikipedia.org/wiki/Demi_Lovato",
            "sig": 79.8494062166475,
            "img": "/WhatsMyGen/images/Demi_Lovato_(1992).jpg"
        },
        6: {
            "name": "Selena Gomez (1992)",
            "link": "http://en.wikipedia.org/wiki/Selena_Gomez",
            "sig": 78.348873868779,
            "img": "/WhatsMyGen/images/Selena_Gomez_(1992).jpg"
        },
        7: {
            "name": "Kevin Durant (1988)",
            "link": "http://en.wikipedia.org/wiki/Kevin_Durant",
            "sig": 78.19169117257353,
            "img": "/WhatsMyGen/images/Kevin_Durant_(1988).jpg"
        },
        8: {
            "name": "Miley Cyrus (1992)",
            "link": "http://en.wikipedia.org/wiki/Miley_Cyrus",
            "sig": 77.71757311295941,
            "img": "/WhatsMyGen/images/Miley_Cyrus_(1992).jpg"
        },
        9: {
            "name": "Emma Stone (1988)",
            "link": "http://en.wikipedia.org/wiki/Emma_Stone",
            "sig": 76.85951036161369,
            "img": "/WhatsMyGen/images/Emma_Stone_(1988).jpg"
        },
    },
    "millennial-young": {
        0: {
            "name": "Lil Uzi Vert (1994)",
            "link": "http://en.wikipedia.org/wiki/Lil_Uzi_Vert",
            "sig": 81.52216120777787,
            "img": "/WhatsMyGen/images/Lil_Uzi_Vert_(1994).jpg"
        },
        1: {
            "name": "Lil Skies (1998)",
            "link": "http://en.wikipedia.org/wiki/Lil_Skies",
            "sig": 80.93884038986886,
            "img": "/WhatsMyGen/images/Lil_Skies_(1998).jpg"
        },
        2: {
            "name": "Post Malone (1995)",
            "link": "http://en.wikipedia.org/wiki/Post_Malone",
            "sig": 74.11611334199229,
            "img": "/WhatsMyGen/images/Post_Malone_(1995).jpg"
        },
        3: {
            "name": "Camila Cabello (1997)",
            "link": "http://en.wikipedia.org/wiki/Camila_Cabello",
            "sig": 73.61068857083447,
            "img": "/WhatsMyGen/images/Camila_Cabello_(1997).jpg"
        },
        4: {
            "name": "Halsey (1994)",
            "link": "http://en.wikipedia.org/wiki/Halsey_(singer)",
            "sig": 72.85792145582091,
            "img": "/WhatsMyGen/images/Halsey_(1994).jpg"
        },
        5: {
            "name": "Chief Keef (1995)",
            "link": "http://en.wikipedia.org/wiki/Chief_Keef",
            "sig": 72.707039204586,
            "img": "/WhatsMyGen/images/Chief_Keef_(1995).jpg"
        },
        6: {
            "name": "Becky G (1997)",
            "link": "http://en.wikipedia.org/wiki/Becky_G",
            "sig": 72.7063403302573,
            "img": "/WhatsMyGen/images/Becky_G_(1997).jpg"
        },
        7: {
            "name": "Dakota Fanning (1994)",
            "link": "http://en.wikipedia.org/wiki/Dakota_Fanning",
            "sig": 72.33347015263237,
            "img": "/WhatsMyGen/images/Dakota_Fanning_(1994).jpg"
        },
        8: {
            "name": "Zendaya (1996)",
            "link": "http://en.wikipedia.org/wiki/Zendaya",
            "sig": 71.9219397906703,
            "img": "/WhatsMyGen/images/Zendaya_(1996).jpg"
        },
        9: {
            "name": "Jordyn Wieber (1995)",
            "link": "http://en.wikipedia.org/wiki/Jordyn_Wieber",
            "sig": 71.89959725001498,
            "img": "/WhatsMyGen/images/Jordyn_Wieber_(1995).jpg"
        },
    },
}
