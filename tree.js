

var data = [
    { "name": "Psi Chapter",          "class": "1929 Ψ",  "active": "n", "parent": "null" },

    // Alpha Sigma
    {"name": "Steve Chen",            "class": "1991 AΣ", "active": "n", "parent": "Psi Chapter" },

    // Alpha Tau
    {"name": "Matt Perry",            "class": "1992 AT", "active": "n", "parent": "Steve Chen" },

    // Alpha Upsilon
    {"name": "Brian LaCaille",        "class": "1993 AY", "active": "n", "parent": "Psi Chapter" },

    // Alpha Phi
    {"name": "Greg Teal",             "class": "1994 AΦ", "active": "n", "parent": "Bryan LaCaille" },

    // Alpha Chi
    {"name": "Kenny Phillips",        "class": "1995 AX", "active": "n", "parent": "Psi Chapter" },
    {"name": "Jeff Panos",            "class": "1995 AX", "active": "n", "parent": "Matt Perry" },
    {"name": "Don Solum",             "class": "1995 AX", "active": "n", "parent": "Psi Chapter" },

    // Alpha Psi
    {"name": "Dave Douglas",          "class": "1996 AΨ", "active": "n", "parent": "Psi Chapter" },
    {"name": "Mike Jewett",           "class": "1996 AΨ", "active": "n", "parent": "Kenny Phillips" },
    {"name": "Ryan Wysocki",          "class": "1996 AΨ", "active": "n", "parent": "Jeff Panos" },
    {"name": "Anton Sipos",           "class": "1996 AΨ", "active": "n", "parent": "Psi Chapter" },
    {"name": "Vince Villanueva",      "class": "1996 AΨ", "active": "n", "parent": "Don Solum" },

    // Alpha Omega
    {"name": "Jake Ballon",           "class": "1997 AΩ", "active": "n", "parent": "Mike Jewett" },
    {"name": "Erik Lima",             "class": "1997 AΩ", "active": "n", "parent": "Vince Villanueva" },
    {"name": "Ryan Peller",           "class": "1997 AΩ", "active": "n", "parent": "Dave Douglas" },

    // Zeta Rho (Modesto Junior College)
    {"name": "Jason Lewis",           "class": "1997 AΩ (ZP Chapter)", "active": "n", "parent": "Don Solum" },

    // Beta Alpha
    {"name": "Matt Brundage",         "class": "1998 BA", "active": "n", "parent": "Erik Lima" },
    {"name": "Jay Fahlen",            "class": "1998 BA", "active": "n", "parent": "Jason Lewis" },
    {"name": "Lucio Hernandez",       "class": "1998 BA", "active": "n", "parent": "Ryan Peller" },
    {"name": "Stephen Kaufman",       "class": "1998 BA", "active": "n", "parent": "Kenny Phillips" },
    {"name": "Pat Lynch",             "class": "1998 BA", "active": "n", "parent": "Anton Sipos" },
    {"name": "Jeff Schinske",         "class": "1998 BA", "active": "n", "parent": "Jake Ballon" },
    {"name": "RJ Victoria",           "class": "1998 BA", "active": "n", "parent": "Ryan Wysocki" },

    // Beta Beta
    {"name": "Sem Avena",             "class": "1999 BB", "active": "n", "parent": "Erik Lima" },
    {"name": "Eric Hallinan",         "class": "1999 BB", "active": "n", "parent": "Pat Lynch" },
    {"name": "Robert Milford",        "class": "1999 BB", "active": "n", "parent": "Lucio Hernandez" },

    // Beta Gamma
    {"name": "Paul Kubit",            "class": "2000 BΓ", "active": "n", "parent": "Robert Milford" },
    {"name": "Eric May",              "class": "2000 BΓ", "active": "n", "parent": "Jason Lewis" },
    {"name": "Anthony Salazar",       "class": "2000 BΓ", "active": "n", "parent": "Sem Avena" },
    {"name": "Phil Snowberger",       "class": "2000 BΓ", "active": "n", "parent": "Psi Chapter" },
    {"name": "Garret Viste",          "class": "2000 BΓ", "active": "n", "parent": "Jake Ballon" },
    {"name": "Jose Vitela",           "class": "2000 BΓ", "active": "n", "parent": "Erik Lima" },

    // Lambda Alpha (UC Irvine)
    {"name": "Lambda Alpha",          "class": "ΛA Chapter", "active": "n", "parent": "Anthony Salazar" },

    // Beta Delta
    {"name": "Eric Burlingham",       "class": "2001 BΔ", "active": "n", "parent": "Psi Chapter" },
    {"name": "Jay Dillon",            "class": "2001 BΔ", "active": "n", "parent": "Psi Chapter" },
    {"name": "Bryan Dutton",          "class": "2001 BΔ", "active": "n", "parent": "Psi Chapter" },
    {"name": "Justin Harvey",         "class": "2001 BΔ", "active": "n", "parent": "Phil Snowberger" },
    {"name": "David Ifergan",         "class": "2001 BΔ", "active": "n", "parent": "Psi Chapter" },
    {"name": "John Jordon",           "class": "2001 BΔ", "active": "n", "parent": "Robert Milford" },
    {"name": "Dan O'neal",            "class": "2001 BΔ", "active": "n", "parent": "Eric Hallinan" },
    {"name": "Mark Painter",          "class": "2001 BΔ", "active": "n", "parent": "RJ Victoria" },
    {"name": "Gordon Spates",         "class": "2001 BΔ", "active": "n", "parent": "Stephen Kaufman" },
    {"name": "Kurt Star",             "class": "2001 BΔ", "active": "n", "parent": "Garret Viste" },

    // Beta Epsilon
    {"name": "Kian Boloori",          "class": "2002 BE", "active": "n", "parent": "Justin Harvey" },
    {"name": "Greg Bowser",           "class": "2002 BE", "active": "n", "parent": "Robert Milford" },
    {"name": "Kevin Cayton",          "class": "2002 BE", "active": "n", "parent": "David Ifergan" },
    {"name": "Mark Chen",             "class": "2002 BE", "active": "n", "parent": "Eric Burlingham" },
    {"name": "Evan Geiger",           "class": "2002 BE", "active": "n", "parent": "Mark Painter" },
    {"name": "Ryan Hunt",             "class": "2002 BE", "active": "n", "parent": "Eric May" },
    {"name": "John Lonacker",         "class": "2002 BE", "active": "n", "parent": "Dan O'neal" },
    {"name": "Brian Mathiyakom",      "class": "2002 BE", "active": "n", "parent": "Kurt Star" },
    {"name": "Brian Netter",          "class": "2002 BE", "active": "n", "parent": "Gordon Spates" },
    {"name": "Blake Tierny",          "class": "2002 BE", "active": "n", "parent": "Psi Chapter" },

    // Beta Zeta
    {"name": "Brian Clayton",         "class": "2003 BZ", "active": "n", "parent": "Phil Snowberger" },
    {"name": "Robbie Contreras",      "class": "2003 BZ", "active": "n", "parent": "John Jordon" },
    {"name": "Dan Fingal",            "class": "2003 BZ", "active": "n", "parent": "Kevin Cayton" },
    {"name": "Thomas Gamboa",         "class": "2003 BZ", "active": "n", "parent": "Kian Boloori" },
    {"name": "Art Kerdmanee",         "class": "2003 BZ", "active": "n", "parent": "Garret Viste" },
    {"name": "William Kim",           "class": "2003 BZ", "active": "n", "parent": "Greg Bowser" },
    {"name": "Ryan LaBounty",         "class": "2003 BZ", "active": "n", "parent": "Psi Chapter" },
    {"name": "Piyapong Phongpatanakhun","class":"2003 BZ","active": "n", "parent": "Brian Mathiyakom" },
    {"name": "Adam Schell",           "class": "2003 BZ", "active": "n", "parent": "John Lonacker" },
    {"name": "Matthew Silverman",     "class": "2003 BZ", "active": "n", "parent": "Dan O'neal" },
    {"name": "Clayton Tom",           "class": "2003 BZ", "active": "n", "parent": "Bryan Dutton" },

    // Beta Eta
    {"name": "Joel Brothers",         "class": "2004 BH", "active": "n", "parent": "Thomas Gamboa" },
    {"name": "Lenny Burdette",        "class": "2004 BH", "active": "n", "parent": "Mark Chen" },
    {"name": "Gabe Cardenas",         "class": "2004 BH", "active": "n", "parent": "Piyapong Phongpatanakhun" },
    {"name": "Gerard Convento",       "class": "2004 BH", "active": "n", "parent": "Brian Netter" },
    {"name": "Cody Drabble",          "class": "2004 BH", "active": "n", "parent": "John Lonacker" },
    {"name": "Michelle Kim",          "class": "2004 BH", "active": "n", "parent": "Mark Painter" },
    {"name": "James Llamas",          "class": "2004 BH", "active": "n", "parent": "Blake Tierny" },
    {"name": "Nate Owen",             "class": "2004 BH", "active": "n", "parent": "Gordon Spates" },
    {"name": "Daniel Pannetta",       "class": "2004 BH", "active": "n", "parent": "Matthew Silverman" },
    {"name": "Sean Pawling",          "class": "2004 BH", "active": "n", "parent": "Robbie Contreras" },
    {"name": "Brian Rosenbaum",       "class": "2004 BH", "active": "n", "parent": "Justin Harvey" },
    {"name": "Christian Tanja",       "class": "2004 BH", "active": "n", "parent": "William Kim" },
    {"name": "Andrew Vega",           "class": "2004 BH", "active": "n", "parent": "John Jordon" },
    {"name": "Ryan Wu",               "class": "2004 BH", "active": "n", "parent": "Clayton Tom" },

    // Beta Theta
    {"name": "Ben Azar",              "class": "2005 BΘ", "active": "n", "parent": "Gabe Cardenas" },
    {"name": "Alex Brown",            "class": "2005 BΘ", "active": "n", "parent": "Andrew Vega" },
    {"name": "Philip Catbagon",       "class": "2005 BΘ", "active": "n", "parent": "Joel Brothers" },
    {"name": "Ben Cox",               "class": "2005 BΘ", "active": "n", "parent": "Brian Rosenbaum" },
    {"name": "Sean Davis",            "class": "2005 BΘ", "active": "n", "parent": "Nate Owen" },
    {"name": "Patrick Fitzgerald",    "class": "2005 BΘ", "active": "n", "parent": "Mark Painter" },
    {"name": "Patrick Green",         "class": "2005 BΘ", "active": "n", "parent": "Michelle Kim" },
    {"name": "Jason Hyde",            "class": "2005 BΘ", "active": "n", "parent": "Christian Tanja" },
    {"name": "Ryan Lazarony",         "class": "2005 BΘ", "active": "n", "parent": "Matthew Silverman" },
    {"name": "David Levy",            "class": "2005 BΘ", "active": "n", "parent": "James Llamas" },
    {"name": "Nick Moreno",           "class": "2005 BΘ", "active": "n", "parent": "Sean Pawling" },
    {"name": "Emily McCollister",     "class": "2005 BΘ", "active": "n", "parent": "Lenny Burdette" },
    {"name": "Evan Parzych",          "class": "2005 BΘ", "active": "n", "parent": "Thomas Gamboa" },
    {"name": "Bethany Porter",        "class": "2005 BΘ", "active": "n", "parent": "Justin Harvey" },
    {"name": "Scott Sia",             "class": "2005 BΘ", "active": "n", "parent": "Kurt Star" },
    {"name": "Stuart Sia",            "class": "2005 BΘ", "active": "n", "parent": "Clayton Tom" },
    {"name": "Denond Stevens",        "class": "2005 BΘ", "active": "n", "parent": "Cody Drabble" },
    {"name": "Chris Smith",           "class": "2005 BΘ", "active": "n", "parent": "Art Kerdmanee" },
 
    // Beta Iota 
    {"name": "Dustin Abelin",         "class": "2006 BI", "active": "n", "parent": "Ryan Lazarony" },
    {"name": "Barbie Charaewa",       "class": "2006 BI", "active": "n", "parent": "Patrick Fitzgerald" },
    {"name": "Hilary Cobett",         "class": "2006 BI", "active": "n", "parent": "Lenny Burdette" },
    {"name": "Ashley Kees",           "class": "2006 BI", "active": "n", "parent": "James Llamas" },
    {"name": "Michelle Kunihiro",     "class": "2006 BI", "active": "n", "parent": "Art Kerdmanee" },
    {"name": "Esther Lee",            "class": "2006 BI", "active": "n", "parent": "Evan Parzych" },
    {"name": "Benjamin Llewellyn",    "class": "2006 BI", "active": "n", "parent": "Bethany Porter" },
    {"name": "Ethan Mathews",         "class": "2006 BI", "active": "n", "parent": "Nate Owen" },
    {"name": "Michael Miller",        "class": "2006 BI", "active": "n", "parent": "Christian Tanja" },
    {"name": "Gabrielle Mocilnikar",  "class": "2006 BI", "active": "n", "parent": "Michelle Kim" },
    {"name": "Zahra Nankani",         "class": "2006 BI", "active": "n", "parent": "Alex Brown" },
    {"name": "Calvin Pnam",           "class": "2006 BI", "active": "n", "parent": "Ben Cox" },
    {"name": "Bobby Scofield",        "class": "2006 BI", "active": "n", "parent": "Emily McCollister" },

    // Beta Kappa check brick hansen?
    { "name": "Chris Ah San",         "class": "2007 BK", "active": "n", "parent": "Ashley Kees" },
    { "name": "Jason Barbato",        "class": "2007 BK", "active": "n", "parent": "Gabrielle Mocilnikar" },
    { "name": "Alex Bergman",         "class": "2007 BK", "active": "n", "parent": "Michael Miller" },
    { "name": "Michael Branson",      "class": "2007 BK", "active": "n", "parent": "Bethany Porter" },
    { "name": "Sarah Diringer",       "class": "2007 BK", "active": "n", "parent": "Michelle Kunihiro" },
    { "name": "Kent Heberer",         "class": "2007 BK", "active": "n", "parent": "Barbie Charaewa" },
    { "name": "Keith Kupper",         "class": "2007 BK", "active": "n", "parent": "Ethan Mathews" },
    { "name": "Thomas Long",          "class": "2007 BK", "active": "n", "parent": "Michelle Kim" },
    { "name": "Kendra Madding",       "class": "2007 BK", "active": "n", "parent": "Clayton Tom" },
    { "name": "Andrew Murphy",        "class": "2007 BK", "active": "n", "parent": "Bobby Scofield" },
    { "name": "Drew Otto",            "class": "2007 BK", "active": "n", "parent": "Hilary Cobett" },
    { "name": "Elena Plummer-Raphael","class": "2007 BK", "active": "n", "parent": "Lenny Burdette" },
    { "name": "Ran Schwartz",         "class": "2007 BK", "active": "n", "parent": "Christian Tanja" },
    { "name": "Manuel Urrutia II",    "class": "2007 BK", "active": "n", "parent": "Esther Lee" },
    { "name": "Ryan Walters",         "class": "2007 BK", "active": "n", "parent": "Jason Hyde" },
    { "name": "Jeremy Whitt",         "class": "2007 BK", "active": "n", "parent": "Dustin Abelin" },

    // Beta Lambda
    { "name": "Daniel Brenner",       "class": "2008 BΛ", "active": "n", "parent": "Psi Chapter" },//psi candidate?
    { "name": "Michael Bright",       "class": "2008 BΛ", "active": "n", "parent": "Sarah Diringer" },
    { "name": "David Cho",            "class": "2008 BΛ", "active": "n", "parent": "Drew Otto" },
    { "name": "Marco DeLeón",         "class": "2008 BΛ", "active": "n", "parent": "Keith Kupper" },
    { "name": "Heather Dennis",       "class": "2008 BΛ", "active": "n", "parent": "David Levy" },
    { "name": "Alexis Fischer",       "class": "2008 BΛ", "active": "n", "parent": "Calvin Pnam" },
    { "name": "Andrew Ge",            "class": "2008 BΛ", "active": "n", "parent": "Jason Barbato" },
    { "name": "Eric Kveton",          "class": "2008 BΛ", "active": "n", "parent": "Alex Bergman" },
    { "name": "Alan McFarlane",       "class": "2008 BΛ", "active": "n", "parent": "Elena Plummer-Raphael" },
    { "name": "Katie Meschke",        "class": "2008 BΛ", "active": "n", "parent": "Manuel Urrutia II" },
    { "name": "Courtney Milender",    "class": "2008 BΛ", "active": "n", "parent": "Michael Branson" },
    { "name": "James Montminy",       "class": "2008 BΛ", "active": "n", "parent": "Psi Chapter" },//psi candidate?
    { "name": "Jason Scapa",          "class": "2008 BΛ", "active": "n", "parent": "Chris Ah San" },
    { "name": "Jessica Schlosser",    "class": "2008 BΛ", "active": "n", "parent": "Kendra Madding" },
    { "name": "Matthew Shaffer",      "class": "2008 BΛ", "active": "n", "parent": "Nick Moreno" },
    { "name": "Jorge Sincuir",        "class": "2008 BΛ", "active": "n", "parent": "Jeremy Whitt" },
    { "name": "Charlie Underhill",    "class": "2008 BΛ", "active": "n", "parent": "Patrick Green" },

    // Beta Mu
    { "name": "Alexander Akashian",   "class": "2009 BΜ", "active": "n", "parent": "Sarah Diringer" },
    { "name": "Brian Bauman",         "class": "2009 BΜ", "active": "n", "parent": "Alex Bergman" },
    { "name": "Joe Dwyer",            "class": "2009 BΜ", "active": "n", "parent": "Ran Schwartz" },
    { "name": "Alejandro Garcia",     "class": "2009 BΜ", "active": "n", "parent": "Matthew Shaffer" },
    { "name": "Ritesh Gupta",         "class": "2009 BΜ", "active": "n", "parent": "Charlie Underhill" },
    { "name": "Trevor Hershberger",   "class": "2009 BΜ", "active": "n", "parent": "Jessica Schlosser" },
    { "name": "Brendan Homnick",      "class": "2009 BΜ", "active": "n", "parent": "Michael Bright" },
    { "name": "Zachary Johnson",      "class": "2009 BΜ", "active": "n", "parent": "Jason Barbato" },
    { "name": "Derek Lee",            "class": "2009 BΜ", "active": "n", "parent": "Heather Dennis" },
    { "name": "Kevin Longa",          "class": "2009 BΜ", "active": "n", "parent": "Jorge Sincuir" },
    { "name": "Katrina Madlansacay",  "class": "2009 BΜ", "active": "n", "parent": "Eric Kveton" },
    { "name": "Lisa Miyamoto",        "class": "2009 BΜ", "active": "n", "parent": "Andrew Ge" },
    { "name": "José Morales",         "class": "2009 BΜ", "active": "n", "parent": "Alexis Fischer" },
    { "name": "Kimberly Pike",        "class": "2009 BΜ", "active": "n", "parent": "David Cho" },
    { "name": "Amy Poliner",          "class": "2009 BΜ", "active": "n", "parent": "Kent Heberer" },
    { "name": "Amanda Selnick",       "class": "2009 BΜ", "active": "n", "parent": "Jason Scapa" },
    { "name": "Belinda Sumali",       "class": "2009 BΜ", "active": "n", "parent": "Courtney Milender" },

    // Beta Nu
    { "name": "Joe Alonso",           "class": "2010 ΒN", "active": "n", "parent": "Keith Kupper" },
    { "name": "Chris Carandang",      "class": "2010 ΒN", "active": "n", "parent": "Amy Poliner" },
    { "name": "Allison Cardoso",      "class": "2010 ΒN", "active": "n", "parent": "Trevor Hershberger" },
    { "name": "Jowliyn Estrada",      "class": "2010 ΒN", "active": "n", "parent": "Amanda Selnick" },
    { "name": "Kasia Johnson",        "class": "2010 ΒN", "active": "n", "parent": "Jason Scapa" },
    { "name": "Rekha King",           "class": "2010 ΒN", "active": "n", "parent": "Alan McFarlane" },
    { "name": "Dakota LaFee",         "class": "2010 ΒN", "active": "n", "parent": "Derek Lee" },
    { "name": "Alfonso Landeros",     "class": "2010 ΒN", "active": "n", "parent": "Brendan Homnick" },
    { "name": "Anne Lum",             "class": "2010 ΒN", "active": "n", "parent": "Katrina Madlansacay" },
    { "name": "Robyn Monroe",         "class": "2010 ΒN", "active": "n", "parent": "Alexander Akashian" },
    { "name": "Alanah Nowotarski",    "class": "2010 ΒN", "active": "n", "parent": "Elena Plummer-Raphael" },
    { "name": "Helen Papadopoulos",   "class": "2010 ΒN", "active": "n", "parent": "Jorge Sincuir" },
    { "name": "Laura Porter",         "class": "2010 ΒN", "active": "n", "parent": "José Morales" },
    { "name": "Kyle Priske",          "class": "2010 ΒN", "active": "n", "parent": "Kimberly Pike" },
    { "name": "Sean Sabino",          "class": "2010 ΒN", "active": "n", "parent": "Jason Barbato" },
    { "name": "James Simonelli",      "class": "2010 ΛA", "active": "n", "parent": "Lambda Alpha" },
    { "name": "Katherine Starzyk",    "class": "2010 ΒN", "active": "n", "parent": "Alejandro Garcia" },
    { "name": "Amanda Young",         "class": "2010 ΒN", "active": "n", "parent": "Belinda Sumali" },

    // Beta Xi
    { "name": "Kim Bowen",            "class": "2011 ΒΞ", "active": "n", "parent": "Allison Cardoso" },
    { "name": "Kelsey Chesnut",       "class": "2011 ΒΞ", "active": "n", "parent": "Kasia Johnson" },
    { "name": "Eric Crose",           "class": "2011 ΒΞ", "active": "n", "parent": "Katrina Madlansacay" },
    { "name": "Noah DeMoss",          "class": "2011 ΒΞ", "active": "n", "parent": "Helen Papadopoulos" },
    { "name": "Josh Epport",          "class": "2011 ΒΞ", "active": "n", "parent": "Rekha King" },
    { "name": "William Faught",       "class": "2011 ΒΞ", "active": "n", "parent": "Anne Lum" },
    { "name": "Jacob Ferrin",         "class": "2011 ΒΞ", "active": "n", "parent": "Katherine Starzyk" },
    { "name": "Kevin Hudson",         "class": "2011 ΒΞ", "active": "n", "parent": "James Simonelli" },
    { "name": "Timothy Jewell",       "class": "2011 ΒΞ", "active": "n", "parent": "Kyle Priske" },
    { "name": "August Johannsen",     "class": "2011 ΒΞ", "active": "n", "parent": "Heather Dennis" },
    { "name": "Cameron Lundy",        "class": "2011 ΒΞ", "active": "n", "parent": "Alanah Nowotarski" },
    { "name": "Michelle Monroe",      "class": "2011 ΒΞ", "active": "n", "parent": "Alejandro Garcia" },
    { "name": "Jason Moore",          "class": "2011 ΒΞ", "active": "n", "parent": "Robyn Monroe" },
    { "name": "Briana Popeny",        "class": "2011 ΒΞ", "active": "n", "parent": "Jowliyn Estrada" },
    { "name": "Freesia Quezada",      "class": "2011 ΒΞ", "active": "n", "parent": "Chris Carandang" },
    { "name": "David Ross",           "class": "2011 ΒΞ", "active": "n", "parent": "Jessica Schlosser" },
    { "name": "Anthony Sanchez",      "class": "2011 ΒΞ", "active": "n", "parent": "Joe Alonso" },
    { "name": "Bradley Scott",        "class": "2011 ΒΞ", "active": "n", "parent": "Amanda Young" },
    { "name": "Derek Wun",            "class": "2011 ΒΞ", "active": "n", "parent": "Dakota LaFee" },

    // Beta Omicron
    { "name": "Nick Ambrosio",        "class": "2012 BO", "active": "n", "parent": "Eric Crose" },
    { "name": "Keenan Burt",          "class": "2012 BO", "active": "n", "parent": "Kasia Johnson" },
    { "name": "Douglas Carbajal",     "class": "2012 BO", "active": "n", "parent": "Alfonso Landeros" },
    { "name": "Andrea Chaikovsky",    "class": "2012 BO", "active": "n", "parent": "Bradley Scott" },
    { "name": "Brittany Chiapa",      "class": "2012 BO", "active": "n", "parent": "Cameron Lundy" },
    { "name": "Darin Chun",           "class": "2012 BO", "active": "n", "parent": "Derek Wun" },
    { "name": "Adam Fletcher",        "class": "2012 BO", "active": "n", "parent": "Kelsey Chesnut" },
    { "name": "Joshua Garcia",        "class": "2012 BO", "active": "n", "parent": "Jacob Ferrin" },
    { "name": "Charlie Hall",         "class": "2012 BO", "active": "n", "parent": "Amanda Selnick" },
    { "name": "Christina Kosters",    "class": "2012 BO", "active": "n", "parent": "Briana Popeny" },
    { "name": "Mark Lee",             "class": "2012 BO", "active": "n", "parent": "Freesia Quezada" },
    { "name": "Kimberlie Liang",      "class": "2012 BO", "active": "n", "parent": "August Johannsen" },
    { "name": "Thomas Lindblom",      "class": "2012 BO", "active": "n", "parent": "Jason Moore" },
    { "name": "Jorge Parra, Jr.",     "class": "2012 BO", "active": "n", "parent": "Josh Epport" },
    { "name": "Justin Yee",           "class": "2012 BO", "active": "n", "parent": "Kim Bowen" },
    { "name": "Laura Yraceburu",      "class": "2012 BO", "active": "n", "parent": "Kevin Hudson" },

    // Beta Pi
    { "name": "Andy Ascencio",        "class": "2013 BΠ", "active": "n", "parent": "Joshua Garcia" },
    { "name": "Malú Alegria",         "class": "2013 BΠ", "active": "n", "parent": "Jowliyn Estrada" },
    { "name": "Nathaniel Clark",      "class": "2013 BΠ", "active": "n", "parent": "Timothy Jewell" },
    { "name": "Joey Curti",           "class": "2013 BΠ", "active": "n", "parent": "Christina Kosters" },
    { "name": "Ryan Dall",            "class": "2013 BΠ", "active": "n", "parent": "Thomas Lindblom" },
    { "name": "Mack Dimler",          "class": "2013 BΠ", "active": "n", "parent": "Charlie Hall" },
    { "name": "Saketh Kasibatla",     "class": "2013 BΠ", "active": "n", "parent": "Anthony Sanchez" },
    { "name": "Willa Kang",           "class": "2013 BΠ", "active": "n", "parent": "Anne Lum" }, 
    { "name": "Guillan Leonardo",     "class": "2013 BΠ", "active": "n", "parent": "Darin Chun" },
    { "name": "Allen Lipson",         "class": "2013 BΠ", "active": "n", "parent": "Andrea Chaikovsky" },
    { "name": "David Merriott",       "class": "2013 BΠ", "active": "n", "parent": "Noah DeMoss" },
    { "name": "Tim Myer",             "class": "2013 BΠ", "active": "n", "parent": "Kim Bowen" },
    { "name": "Jim Nelson",           "class": "2013 BΠ", "active": "n", "parent": "Michelle Monroe" },
    { "name": "Lauren Payne",         "class": "2013 BΠ", "active": "n", "parent": "Justin Yee" },
    { "name": "Tommy Reyes",          "class": "2013 BΠ", "active": "n", "parent": "Jacob Ferrin" },
    { "name": "Frank She",            "class": "2013 BΠ", "active": "n", "parent": "Douglas Carbajal" },
    { "name": "Justin Sun",           "class": "2013 BΠ", "active": "n", "parent": "Nick Ambrosio" },
    { "name": "Ben Thompson",         "class": "2013 BΠ", "active": "n", "parent": "Adam Fletcher" },
    { "name": "Nick Thompson",        "class": "2013 BΠ", "active": "n", "parent": "Brittany Chiapa" },
    { "name": "Nicole Wells",         "class": "2013 BΠ", "active": "n", "parent": "Kimberlie Liang" },
    { "name": "Christian Youngers",   "class": "2013 BΠ", "active": "n", "parent": "Laura Yraceburu" },

    // Beta Rho
    { "name": "Annie Cheng",          "class": "2014 BP", "active": "n", "parent": "Jim Nelson" },
    { "name": "Vincent Chou",         "class": "2014 BP", "active": "n", "parent": "Nathaniel Clark" },
    { "name": "Erick Corona",         "class": "2014 BP", "active": "n", "parent": "Nick Thompson" },
    { "name": "Mark Cunningham",      "class": "2014 BP", "active": "n", "parent": "Ben Thompson" },
    { "name": "Nick DiNiro",          "class": "2014 BP", "active": "n", "parent": "Mack Dimler" },
    { "name": "Bill Greenwald",       "class": "2014 BP", "active": "n", "parent": "Derek Wun" },
    { "name": "Justin Hang",          "class": "2014 BP", "active": "n", "parent": "David Merriott" },
    { "name": "Eric Hernandez",       "class": "2014 BP", "active": "n", "parent": "Mark Lee" },
    { "name": "April Johnson",        "class": "2014 BP", "active": "n", "parent": "Christian Youngers" },
    { "name": "Zack Jones",           "class": "2014 BP", "active": "n", "parent": "Anthony Sanchez" },
    { "name": "Julia Karstens",       "class": "2014 BP", "active": "n", "parent": "Malú Alegria" },
    { "name": "Herman Lu",            "class": "2014 BP", "active": "n", "parent": "Frank She" },
    { "name": "Bailee Murphy",        "class": "2014 BP", "active": "n", "parent": "Nicole Wells" },
    { "name": "Riley Scott",          "class": "2014 BP", "active": "n", "parent": "Noah DeMoss" },
    { "name": "Zach Thoennes",        "class": "2014 BP", "active": "n", "parent": "Lauren Payne" },
    { "name": "Caitlin Thompson",     "class": "2014 BP", "active": "n", "parent": "Keenan Burt" },
    { "name": "Jason Tom",            "class": "2014 BP", "active": "n", "parent": "Justin Sun" },
    { "name": "Joe Yi",               "class": "2014 BP", "active": "n", "parent": "Ryan Dall" },

    // Beta Sigma
    { "name": "Noah Ashman",          "class": "2015 BΣ", "active": "n", "parent": "Bailee Murphy" },
    { "name": "Melodie Butz",         "class": "2015 BΣ", "active": "n", "parent": "Joe Yi" },
    { "name": "Patrick Chesnut",      "class": "2015 BΣ", "active": "n", "parent": "Erick Corona" },
    { "name": "Annemarie Duckworth",  "class": "2015 BΣ", "active": "n", "parent": "Derek Wun" },
    { "name": "David Egen",           "class": "2015 BΣ", "active": "n", "parent": "Zack Jones" },
    { "name": "Jessica Flohn",        "class": "2015 BΣ", "active": "n", "parent": "Christina Kosters" },
    { "name": "Christine Hirata",     "class": "2015 BΣ", "active": "n", "parent": "Eric Hernandez" },
    { "name": "Steven King",          "class": "2015 BΣ", "active": "n", "parent": "Mark Cunningham" },
    { "name": "Alexis Korb",          "class": "2015 BΣ", "active": "n", "parent": "Laura Yraceburu" },
    { "name": "Western Kramer",       "class": "2015 BΣ", "active": "n", "parent": "Andrea Chaikovsky" },
    { "name": "Lily Krol",            "class": "2015 BΣ", "active": "n", "parent": "Justin Hang" },
    { "name": "Nathan Lam",           "class": "2015 BΣ", "active": "n", "parent": "Jason Tom" },
    { "name": "Ivan Lam",             "class": "2015 BΣ", "active": "n", "parent": "Mack Dimler" },
    { "name": "John Malchar",         "class": "2015 BΣ", "active": "n", "parent": "Vincent Chou" },
    { "name": "Christina Martin",     "class": "2015 BΣ", "active": "n", "parent": "Kimberlie Liang" },
    { "name": "Joy McCreary",         "class": "2015 BΣ", "active": "n", "parent": "April Johnson" },
    { "name": "Chris O'Connor",       "class": "2015 BΣ", "active": "n", "parent": "Annie Cheng" },
    { "name": "Tony Rescigno",        "class": "2015 BΣ", "active": "n", "parent": "Riley Scott" },
    { "name": "Alberto Reyes",        "class": "2015 BΣ", "active": "n", "parent": "Tommy Reyes" },
    { "name": "Jeremy Rotman",        "class": "2015 BΣ", "active": "n", "parent": "Guillan Leonardo" },
    { "name": "Austin Sugai",         "class": "2015 BΣ", "active": "n", "parent": "Willa Kang" },
    { "name": "Jordan Tinker",        "class": "2015 BΣ", "active": "n", "parent": "Caitlin Thompson" },
    { "name": "Wyatt Watkins",        "class": "2015 BΣ", "active": "n", "parent": "Jim Nelson" },
    { "name": "Matt Wu",              "class": "2015 BΣ", "active": "n", "parent": "Bill Greenwald" },

    { "name": "Theta",                "class": "Θ Chapter", "active": "n", "parent": "Caitlin Thompson" },

    // Beta Tau
    { "name": "Amanda Albini",        "class": "2016 BT", "active": "n", "parent": "Alexis Korb" },
    { "name": "Joey Auer",            "class": "2016 BT", "active": "n", "parent": "Joy McCreary" },
    { "name": "Sukhi Bassi",          "class": "2016 BT", "active": "n", "parent": "Jeremy Rotman" },
    { "name": "Josh Briggs",          "class": "2016 BT", "active": "n", "parent": "Mack Dimler" },
    { "name": "Nathan Cai",           "class": "2016 BT", "active": "n", "parent": "Lily Krol" },
    { "name": "Sean Ezenwugo",        "class": "2016 BT", "active": "n", "parent": "Christina Martin" },
    { "name": "Zach Freeman",         "class": "2016 BT", "active": "n", "parent": "Nick DiNiro" },
    { "name": "Vy Giap",              "class": "2016 BT", "active": "n", "parent": "Patrick Chesnut" },
    { "name": "Andrew Hall",          "class": "2016 BT", "active": "n", "parent": "Melodie Butz" },
    { "name": "Jacob Hambalek",       "class": "2016 BT", "active": "n", "parent": "Annemarie Duckworth" },
    { "name": "Andy Hsu",             "class": "2016 BT", "active": "n", "parent": "Jordan Tinker" },
    { "name": "Sophia Inaba",         "class": "2016 BT", "active": "n", "parent": "Noah Ashman" },
    { "name": "Nishi Intwala",        "class": "2016 BT", "active": "n", "parent": "David Egen" },
    { "name": "Brendan James",        "class": "2016 BT", "active": "n", "parent": "Steven King" },
    { "name": "Kevin King",           "class": "2016 BT", "active": "n", "parent": "Western Kramer" },
    { "name": "Tracy Lahey",          "class": "2016 BT", "active": "n", "parent": "Julia Karstens" },
    { "name": "Michelle Leccese",     "class": "2016 BT", "active": "n", "parent": "Tony Rescigno" },
    { "name": "Tia Liu",              "class": "2016 BT", "active": "n", "parent": "Austin Sugai" },
    { "name": "Clare McCreary",       "class": "2016 BT", "active": "n", "parent": "Alberto Reyes" },
    { "name": "Samantha Ono",         "class": "2016 BT", "active": "n", "parent": "Nathan Lam" },
	
	// Beta Upsilon
    { "name": "Sofia Alemania",        "class": "2017 BY", "active": "y", "parent": "Tia Liu" },
    { "name": "Casey Armstrong",       "class": "2017 BY", "active": "y", "parent": "Jacob Hambalek" },
    { "name": "Jared Brock",           "class": "2017 BY", "active": "n", "parent": "Christine Hirata" },
    { "name": "Matthew Chin",          "class": "2017 BY", "active": "y", "parent": "Nishi Intwala" },
    { "name": "Megan Clark",           "class": "2017 BY", "active": "n", "parent": "Nathan Cai" },
    { "name": "Adam Cobb",             "class": "2017 BY", "active": "n", "parent": "Andrew Hall" },
    { "name": "Vito Emanuel",          "class": "2017 BY", "active": "y", "parent": "John Malchar" },
    { "name": "Daniel Fernandez",      "class": "2017 BY", "active": "y", "parent": "David Egen" },
    { "name": "Keegan Fowler",         "class": "2017 BY", "active": "y", "parent": "Michelle Leccese" },
    { "name": "Eduardo Gordiano",      "class": "2017 BY", "active": "y", "parent": "Vy Giap" },
    { "name": "Sidney Kantono",        "class": "2017 BY", "active": "n", "parent": "Matt Wu" },
    { "name": "Justin Klotzle",        "class": "2017 BY", "active": "n", "parent": "Justin Hang" },
    { "name": "John Lasseter",         "class": "2017 BY", "active": "n", "parent": "Chris O'Connor" },
    { "name": "Omer Lavian",           "class": "2017 BY", "active": "y", "parent": "Annie Cheng" },
    { "name": "Abby McCallum",         "class": "2017 BY", "active": "n", "parent": "Tracy Lahey" },
    { "name": "Jade McVay",            "class": "2017 BY", "active": "y", "parent": "Sophia Inaba" },
    { "name": "Harry Mitchell",        "class": "2017 BY", "active": "n", "parent": "Sean Ezenwugo" },
    { "name": "Haley Nelson",          "class": "2017 BY", "active": "y", "parent": "Amanda Albini" },
    { "name": "Justin Nguyen",         "class": "2017 BY", "active": "y", "parent": "Andy Hsu" },
    { "name": "Jacob Re",              "class": "2017 BY", "active": "y", "parent": "Joey Auer" },
    { "name": "Chris Routh",           "class": "2017 BY", "active": "n", "parent": "Melodie Butz" },
    { "name": "William Shu",           "class": "2017 BY", "active": "y", "parent": "Sukhi Bassi" },
    { "name": "Michael Stranieri",     "class": "2017 BY", "active": "y", "parent": "Kevin King" },
    { "name": "Justin Wolfman",        "class": "2017 BY", "active": "y", "parent": "Brendan James" },

    //Beta Phi
    { "name": "Sara Acosta", 			"class": "2018 BΦ", "active": "y", "parent": "Jade McVay"},
    { "name": "Daniel Adea", 			"class": "2018 BΦ", "active": "y", "parent": "Matthew Chin"},
    { "name": "Emma Boone", 			"class": "2018 BΦ", "active": "y", "parent": "Chris Routh"},
    { "name": "Ethan Cai", 			"class": "2018 BΦ", "active": "y", "parent": "Justin Nguyen"},
    { "name": "Ronnie Chase", 			"class": "2018 BΦ", "active": "y", "parent": "Harry Mitchell"},
    { "name": "Renu Chepuru", 			"class": "2018 BΦ", "active": "y", "parent": "Joey Auer"},
    { "name": "Emily Davis", 			"class": "2018 BΦ", "active": "y", "parent": "Sofia Alemania"},
    { "name": "Brandon Free", 			"class": "2018 BΦ", "active": "y", "parent": "Jared Brock"},
    { "name": "Patrick Gardner", 		"class": "2018 BΦ", "active": "n", "parent": "Christine Hirata"},
    { "name": "Christiana Gutierrez", 		"class": "2018 BΦ", "active": "n", "parent": "Daniel Fernandez"},
    { "name": "Spencer Hart", 			"class": "2018 BΦ", "active": "n", "parent": "Eduardo Gordiano"},
    { "name": "Garrett Henkle", 		"class": "2018 BΦ", "active": "y", "parent": "Justin Wolfman"},
    { "name": "Joshua Horita", 			"class": "2018 BΦ", "active": "n", "parent": "Megan Clark"},
    { "name": "Trey Knudson", 			"class": "2018 BΦ", "active": "y", "parent": "Sidney Kantono"},
    { "name": "Jeffrey Lin", 			"class": "2018 BΦ", "active": "y", "parent": "John Lasseter"},
    { "name": "Emily Liu", 			"class": "2018 BΦ", "active": "y", "parent": "Samantha Ono"},
    { "name": "David Matter", 			"class": "2018 BΦ", "active": "y", "parent": "Keegan Fowler"},
    { "name": "Katie Osborn", 			"class": "2018 BΦ", "active": "y", "parent": "Abby McCallum"},
    { "name": "Christopher Qiu", 		"class": "2018 BΦ", "active": "n", "parent": "Vito Emanuel"},
    { "name": "David Thorne", 			"class": "2018 BΦ", "active": "y", "parent": "Michael Stranieri"},
    { "name": "Chelsy Torres", 			"class": "2018 BΦ", "active": "y", "parent": "Michelle Leccese"},
    { "name": "Erica Vellanoweth", 		"class": "2018 BΦ", "active": "y", "parent": "Casey Armstrong"},
    { "name": "Eric Wong", 			"class": "2018 BΦ", "active": "y", "parent": "Jacob Re"},

    //Beta Chi
    { "name": "Carrie Appel", 			"class": "2019 BX", "active": "y", "parent": "William Shu"},
    { "name": "Chris Badroos", 			"class": "2019 BX", "active": "y", "parent": "David Thorne"},
    { "name": "Gus Billing", 			"class": "2019 BX", "active": "y", "parent": "Sara Acosta"},
    { "name": "Evelyn Coffey", 			"class": "2019 BX", "active": "y", "parent": "Erica Vellanoweth"},
    { "name": "Matthew Espinoza", 		"class": "2019 BX", "active": "y", "parent": "Katie Osborn"},
    { "name": "Ivy Kwok", 			"class": "2019 BX", "active": "y", "parent": "Ronnie Chase"},
    { "name": "Ryan Lee", 			"class": "2019 BX", "active": "y", "parent": "Emily Davis"},
    { "name": "Adam Pingatore", 		"class": "2019 BX", "active": "y", "parent": "Daniel Adea"},
    { "name": "Gabriel Ramirez", 		"class": "2019 BX", "active": "y", "parent": "Emily Liu"},
    { "name": "Kevin Reidy", 			"class": "2019 BX", "active": "y", "parent": "Christopher Qiu"},
    { "name": "Randall Reza", 			"class": "2019 BX", "active": "y", "parent": "Garrett Henkle"},
    { "name": "Alexis Toledo", 			"class": "2019 BX", "active": "y", "parent": "Ethan Cai"},
    { "name": "Liam Wallace", 			"class": "2019 BX", "active": "y", "parent": "Brandon Free"},
    { "name": "Justin Ward", 			"class": "2019 BX", "active": "y", "parent": "Renu Chepuru"},
    { "name": "Meigan Wu", 			"class": "2019 BX", "active": "y", "parent": "Haley Nelson"},
    { "name": "Naveed Zaman", 			"class": "2019 BX", "active": "y", "parent": "Jeffrey Lin"}
];


var data; // a global

$.getJSON("test.json", function(json) {
    console.log(json[0].name); // this will show the info it in firebug console
});


var dataMap = data.reduce(function(map, node) {
    map[node.name] = node;
    return map;
}, {});


var treeData = [];
data.forEach(function(node) {
    // add to parent
    var parent = dataMap[node.parent];
    if (parent) {
	// create child array if it doesn't exist
	(parent.children || (parent.children = []))
	// add node to child array
	    .push(node);
    } else {
	// parent is null or missing
	treeData.push(node);
    }
});

// ************** Generate the tree diagram  *****************
var margin = {top: 20, right: 120, bottom: 20, left: 120},
width = 5000 - margin.right - margin.left,
height = 3000 - margin.top - margin.bottom;

var i = 0,
duration = 750,
root;

var tree = d3.layout.tree()
    .size([height, width]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
root.x0 = height / 2;
root.y0 = 0;

update(root);

d3.select(self.frameElement).style("height", "500px");


function update(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) { d.y = d.depth * 180; });

    // Update the nodes…
    var node = svg.selectAll("g.node")
	.data(nodes, function(d) { return d.id || (d.id = ++i); });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
	.attr("class", "node")
	.attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
	.on("click", click);

    nodeEnter.append("circle")
	.attr("r", 1e-6)
	.style("fill", function(d) { return d._children ? "royalblue" : "#fff"; });

    nodeEnter.append("text")
	.attr("x", function(d) { return d.children || d._children ? -13 : -13; })
	.attr("y", -10)
	.attr("dy", ".35em")
	.attr("text-anchor", function(d) { return d.children || d._children ? "end" : "end"; })
	.text(function(d) { return d.name; })
	.style("fill-opacity", 1);

    nodeEnter.append("text")
	.attr("x", function(d) { return d.children || d._children ? -13 : -13; })
	.attr("y", 10)
	.attr("dy", ".35em")
	.attr("text-anchor", function(d) { return d.children || d._children ? "end" : "end"; })
	.text(function(d) { return d.class; })
	.style("fill-opacity", 1);



    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
	.duration(duration)
	.attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

    nodeUpdate.select("circle")
	.attr("r", 11)
	.style("fill", function(d) { 
	    if ( d._children )
		return "royalblue";
	    if ( d.class === "2019 BΨ" )               //Change this for color of candidate class
		return "#C2E0FF";
	    if ( d.active === "y" )
		return "gold";
	    return "#fff"; });

    nodeUpdate.select("text")
	.style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
	.duration(duration)
	.attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
	.remove();

    nodeExit.select("circle")
	.attr("r", 1e-6);

    nodeExit.select("text")
	.style("fill-opacity", 1e-6);

    // Update the links…
    var link = svg.selectAll("path.link")
	.data(links, function(d) { return d.target.id; });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
	.attr("class", "link")
	.attr("d", function(d) {
	    var o = {x: source.x0, y: source.y0};
	    return diagonal({source: o, target: o});
	});

    // Transition links to their new position.
    link.transition()
	.duration(duration)
	.attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
	.duration(duration)
	.attr("d", function(d) {
	    var o = {x: source.x, y: source.y};
	    return diagonal({source: o, target: o});
	})
	.remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
	d.x0 = d.x;
	d.y0 = d.y;
    });
}



function click(d) {
    if (d.children) {
	d._children = d.children;
	d.children = null;
    } else {
	d.children = d._children;
	d._children = null;
    }
    update(d);
}
