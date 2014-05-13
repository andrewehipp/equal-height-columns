Equal Height Columns
====================
Create groups of content (.match-height) that match the tallest height of the designated elements (.match).

You can use as many groups on a page as needed.

##Data Attributes##

####data-match-height####
Add the attribute 'data-mh-breakpoint' to the each '.match-height' element to set a different responsive breakpoint for that element's children. Default is '768'.

#####Example#####
class="match-height" data-mh-breakpoint="992"

####data-mh-scale####
Add the attribute 'data-mh-scale' to the each '.match' element to set have it's height set as a fraction of the largest '.match' element. Accepts a numerical string.

#####Example#####
class="match" data-mh-scale=".5"
