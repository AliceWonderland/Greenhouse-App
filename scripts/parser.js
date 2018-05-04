// Javascript ES6
const args = process.argv;
let input = args[2] ||
  "Lead Chef, Chipotle, Denver, CO, 10, 15\n" +
  "Stunt Double, Equity, Los Angeles, CA, 15, 25\n" +
  "Manager of Fun, IBM, Albany, NY, 30, 40\n" +
  "Associate Tattoo Artist, Tit 4 Tat, Brooklyn, NY, 250, 275\n" +
  "Assistant to the Regional Manager, IBM, Scranton, PA, 10, 15\n" +
  "Lead Guitarist, Philharmonic, Woodstock, NY, 100, 200";

function parseInput(input){

    // return parsed input
    // accepts str, returns formatted str

    if(!checkInput(input)) return 'Check your inputs!';

    let result = 'All Opportunities\n';
    let list = cleanInput(input);
    list = sortInput(list);
    list = convertToObj(list);

    return result + convertToFinal(list);

}

function cleanInput(input){

    // convert str to arr, trim whitespace      => "Lead Chef, Chipotle, Denver, CO, 10, 15\n"
    // split into arr by \n                     => [ "Lead Chef, Chipotle, Denver, CO, 10, 15"]
    // split arr ele into sub-arr  by ','       => [ 'Lead Chef', ' Chipotle', ' Denver', ' CO', ' 10', ' 15' ]
    // trim whitespace from each ele in sub-arr => [ 'Lead Chef', 'Chipotle', 'Denver', 'CO', '10', '15' ]
    // accepts a str, returns arr

    return input.split('\n').map(ele => ele.split(',').map(ele => ele.trim()));

}

function sortInput(input){

    // sort Asc by first ele
    // [ ['Lead Chef', ...], ['Manager', ...] ]
    // accepts an arr, returns arr

    return input.sort((a,b) => a[0] > b[0]);

}

function convertToObj(input){

    // convert arr to obj
    // [ ['Lead Chef', ...] ] => [ {Title: 'Lead Chef', ...} ]
    // accepts arr of arrs, returns arr of objs

    return input.map(ele => {
        let obj = {};
        obj['Title'] = ele[0];
        obj['Organization'] = ele[1];
        obj['Location'] = `${ ele[2] }, ${ ele[3] }`;
        obj['Pay'] = `${ ele[4] }-${ ele[5] }`;
        return obj;
    });

}

function convertToFinal(list){

    // convert obj to final result str
    // [ {Title: 'Lead Chef', ...} ] => "Title: Lead Chef, ...\n"
    // acceps arr of objs, returns formatted str

    let result = '';
    for(let job of list){
        result += Object.entries(job).map(ele => ele.join(': ')).join(', ');
        result += '\n';
    }
    return result;

}

function checkInput(input){

    // confirm correct input format
    // accepts str, returns bool

    // basic check for undefined, empty str, \n exists, comma exists
    if(!input || !input.length || input.indexOf('\n') < 0 || input.indexOf(',') < 0){
        return false;
    }

    // must have 5 commas for every new line
    // assumes minimum 1 line, 1 line still includes \n
    // does not check for alpha-numerics
    let commas = 0;
    for(let i = 0; i < input.length; i++){
        // count commas
        if(input[i] === ','){
            commas++;
            continue;
        }
        // check num commas for every \n occur
        if(input[i] === '\n'){
            if(commas === 5){
                commas = 0;
            }else{
                return false;
            }
        }
    }

    return true;

}

// let test=",,,,,\n" + "Lead Chef, Chipotle, Denver, CO, 10, 15\n" + "Stunt Double, Equity, Los Angeles, CA, 15, 25\n";

console.log(parseInput(input));