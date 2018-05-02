# Seeking: Remote Phone Interview

Purpose: to test object-oriented design and general programming skills.

To help job seekers track their progress in finding the right opportunity, we'll be building a small library to parse, store, and query job opportunities. Choose the language you are most comfortable in.

A few quick guidelines:

* Please treat this as **production code**. You should be reasonably proud of the code quality that you produce. With that said, we won't be writing tests.
* Keep in mind that we are building a **library**. Imagine this is in a larger code base that is going to be worked on and reused by your teammates. While we do want you to achieve the expected output, we care more about the design and readability of your code.

## Summary
* In part 1 we are going to process the input and print out the opportunities formatted and sorted.

## Part 1: Input/Output
Make a library to:

1. read input from a string literal
2. print out in the format (See full output below):
  * `Title: <Title>, Organization: <Organization>, Location: <City>, <State>, Pay: <Min>-<Max>`
3. always print out sorted by Title

You should copy the 'Input' section to as a multi-line string literal in your code. 
When run, the output of your program should match the 'Output' section exactly.

Feel free to use your IDE/Editor of choice.
Once you have it working, please copy it to the provided remote coding tool and get it running there.

Input:
```
Lead Chef, Chipotle, Denver, CO, 10, 15
Stunt Double, Equity, Los Angeles, CA, 15, 25
Manager of Fun, IBM, Albany, NY, 30, 40
Associate Tattoo Artist, Tit 4 Tat, Brooklyn, NY, 250, 275
Assistant to the Regional Manager, IBM, Scranton, PA, 10, 15
Lead Guitarist, Philharmonic, Woodstock, NY, 100, 200
```

Expected Output:
```
All Opportunities
Title: Assistant to the Regional Manager, Organization: IBM, Location: Scranton, PA, Pay: 10-15
Title: Associate Tattoo Artist, Organization: Tit 4 Tat, Location: Brooklyn, NY, Pay: 250-275
Title: Lead Chef, Organization: Chipotle, Location: Denver, CO, Pay: 10-15
Title: Lead Guitarist, Organization: Philharmonic, Location: Woodstock, NY, Pay: 100-200
Title: Manager of Fun, Organization: IBM, Location: Albany, NY, Pay: 30-40
Title: Stunt Double, Organization: Equity, Location: Los Angeles, CA, Pay: 15-25
```