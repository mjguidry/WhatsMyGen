---
layout: default
title: MikeGen
---
### FAQ
#### 1. General
<a href="#Q1.1">1.1 Why did you make this site?</a><br>
<a href="#Q1.2">1.2 Are you serious?</a><br>
#### 2. Generations
<a href="#Q2.1">2.1 Where do the names of the generations come from?</a><br>
<a href="#Q2.2">2.2 Why do the generations start and end where they do?</a><br>
<a href="#Q2.3">2.3 Why are there no generations before "Lost" or after "Millennial"?</a><br>
#### 3. Significance
<a href="#Q3.1">3.1 What do you mean by "significance"?</a><br>
<a href="#Q3.2">3.2 I'm pretty sure person X is significant, why aren't they here?</a><br>
<a href="#Q3.3">3.3 Why does there seem to be a bias as to who is considered significant?</a><br>
<br>
<a id="General">**General**</a><br>
<a id="Q1.1">**1.1 Why did you make this site?**</a><br>
This site is my attempt to respond to some of the issues with how social generations have been commonly defined. 

One is that, while we have become familiar with terms like "Baby Boomer" and "Millennial", there is no universally agreed definition for each generation. Consider just a few sources:

**Generation** | **Pew Research Center** | **Nielsen Ratings** | **Strauss and Howe**
---------- | ------------------- | ----------------| ----------- 
Greatest   | 1901 to 1927        | 1917 to 1946    | 1901 to 1924
Silent     | 1928 to 1945        | -               | 1925 to 1942
Boomer     | 1946 to 1964        | 1947 to 1964    | 1943 to 1960
Gen X      | 1965 to 1980        | 1965 to 1979    | 1961 to 1981
Millennial | 1981 to 1996        | 1980 to 1996    | 1982 to 2004 

With no common definition, the person born in 1981 is left to wonder, "Am I Gen X? Or a Millennial?" With each of the boundaries uncertain, those near those boundaries are never quite sure how to self-identify. 

Another issue arises with the uneven length of each generational definition. For example, when evaluating a claim such as "there are more voters in Generation A than in Generation B", the claim loses some of its impact if Generation A is defined to cover a 20 year span and Generation B, a 15 year span. At present, Pew Research defines the Boomer generation as a 19 year span and Gen X as 16 years; it would be amazing if the Boomer generation **weren't** larger, by that definition. By fixing each generation to 18 years, then the comparison between them should be more meaningful.

Finally, there has been some feeling that the generational category itself is too wide, that no matter how a generation is defined, those at the beginning of the generation may not feel very connected to those at the end of it. A Baby Boomer born in 1946 had the possibility of being drafted for the Vietnam War; one born in 1960 would have reached adulthood after the war, and with no draft requirement in place. I came up with the "tier" idea to define a subset of a generation, one that would have all been in grade school together, and thus would have had more things in common than with the whole generation. The tier should be a more cohesive group than the whole generation.
  
<a id="Q1.2">**1.2 Are you serious?**</a><br>
No, not really. I have no training in any kind of social science, and I am not trying to override anyone's serious work. This is meant to be fun, just something to help answer the questions above, in a personal way. 
  
<a id="Significance">**Significance**</a><br>
<a id="Q3.1">**3.1 What do you mean by "significance"?**</a><br>
The significance ratings are based off of the [The Open Wikipedia Ranking](http://wikirank-2019.di.unimi.it/index.html) project at the [Laboratory for Web Algorithmics](http://law.di.unimi.it/) of the [Università degli Studi di Milano](http://www.unimi.it/). This project builds a "link graph" from the Wikipedia weekly data dump, and then ranks pages based on a few different criteria. The default criterion is called "harmonic centrality", which starts with the number of links which point to that page, then then pages that point to those links, etc., with some scaling as the distance moves from the original page. The best analogy may be that harmonic centrality is a measure of how much the page "ripples" within the Wikipedia network.

For each tier, those **Americans** with the ten highest harmonic centrality scores are listed. The actual ratings are the raw harmonic centrality score, divided by the highest scoring American (which, as of this writing, is Barack Obama).

<a id="Q3.2">**3.2 I'm pretty sure person X is significant, why aren't they here?**</a><br>
The first obvious reason would be that the harmonic centrality score for that person is not as high as one might expect.

The other reason may be that the person may not be considered American. For immigrants, the guideline I have used is if they spent some part of their childhood in the U.S., then I have considered them "American", but not so if they immigrated as adults. This may get a little fuzzy if they moved back and forth during their childhood.

<a id="Q3.3">**3.3 Why does there seem to be a bias as to who is considered significant?**</a><br>
I think there are at least two kinds of bias that we could discuss in regards to Wikipedia articles. One of those is [political bias](https://en.wikipedia.org/wiki/Ideological_bias_on_Wikipedia), and I think there has been much discussion on this. One could argue that the fact that Barack Obama has the most significant article on Wikipedia could be an example of a political bias.

There is another kind of bias which I think could be considered, which is a "recency" bias. However favorably one may consider Barack Obama, it may still be a stretch to consider his a more significant presidency then, say, Abraham Lincoln. While the Obama article may benefit from a political bias, it may benefit more in that this was a very recent president, and current Wikipedia editors may be able to contribute with more expertise than on an article about Abraham Lincoln.

This recency bias may make it hard to compare "significancy" scores across tiers, since articles about people who are currently famous may get more attention than articles about those who have passed on. So it may be better to just consider the significancy within a tier, and not across tiers. By that measure, Ronald Reagan is the most significant person of the First Greatest tier, Barack Obama is the most significant of the Young Boomer tier, and that may be the most we can say based on significancy.
