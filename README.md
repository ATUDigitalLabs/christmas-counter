# christmas-counter
A small NodeJs Christmas counter demonstrating an API implementation

Created by Tobias Wassermann, <tobias.wassermann@de.atu.eu>

# Routes

There are two routes available:

* / - will count the days until December 24th of the 
  current year. If the current date is between 24th and 31st December the 
  remaining days to next years christmas will be counted.
* /<year> - here you can specify a year. The number of days to christmas
  within this year will be calculated.