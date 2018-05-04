# Greenhouse App
Parser Library using JS, Ruby, and or Python

Convert some text inputs into a formatted string output.


Input:
```
Lead Chef, Chipotle, Denver, CO, 10, 15
Stunt Double, Equity, Los Angeles, CA, 15, 25
Manager of Fun, IBM, Albany, NY, 30, 40
Associate Tattoo Artist, Tit 4 Tat, Brooklyn, NY, 250, 275
Assistant to the Regional Manager, IBM, Scranton, PA, 10, 15
Lead Guitarist, Philharmonic, Woodstock, NY, 100, 200
```

Output:
```
All Opportunities
Title: Assistant to the Regional Manager, Organization: IBM, Location: Scranton, PA, Pay: 10-15
Title: Associate Tattoo Artist, Organization: Tit 4 Tat, Location: Brooklyn, NY, Pay: 250-275
Title: Lead Chef, Organization: Chipotle, Location: Denver, CO, Pay: 10-15
Title: Lead Guitarist, Organization: Philharmonic, Location: Woodstock, NY, Pay: 100-200
Title: Manager of Fun, Organization: IBM, Location: Albany, NY, Pay: 30-40
Title: Stunt Double, Organization: Equity, Location: Los Angeles, CA, Pay: 15-25
```

### How It Works
* Convert string to array of arrays
* Convert array of arrays to array of objects
* Convert array of objects into formatted string output

Check for correct input format
Convert to Arrays
Sort Arrays
Convert to Objects
Convert to Formatted Output

### Setup + Installation
#### Node
* Check if you have Node installed. `node -v`
* If not, install here. https://nodejs.org/en/download/
* Run the parser, `node scripts/parser.js`

#### Ruby
* Check if you have Ruby installed. `ruby -v`
* If not, install here. https://www.ruby-lang.org/en/documentation/installation/
* Run the parser, `ruby scripts/parser.rb`

#### Python
* Check if you have python installed. `python -V`
* In not, install here. https://edu.google.com/openonline/course-builder/docs/1.10/set-up-course-builder/check-for-python.html
* Run the parser, `python ./scripts/parser.py`

### Tools & Technologies
* Node
* NPM
* Javscript, Ruby, Python

### Resources
http://tryruby.org/
Brush up on string methods and regex

Composition over Inheritance
https://medium.com/humans-create-software/composition-over-inheritance-cb6f88070205