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
    // accepts mixed str of csv and/or json
    // returns arr of arrs csv
    // can split this function into cleanCsv, cleanJson

    let csv = '',
        json = '';
    let result = [];

    // check formats, csv vs. json
    if(input.indexOf('--JSON-INPUT-BELOW--') >= 0){
        [ csv, json ] = input.split('\n--JSON-INPUT-BELOW--');
    }else{
        csv = input;
    }

    // convert to arr of csv
    if(csv.length){
        result = result.concat( csvToArr(csv) );
    }
    if(json.length){
        result = result.concat( convertToCsv( jsonToArr(json) ) );
    }

    return result;

}

function sortInput(input){

    // sort Asc by first ele
    // [ ['Lead Chef', ...], ['Manager', ...] ]
    // accepts an arr, returns arr

    return input.sort((a,b) => a[0] > b[0]);

}

function csvToArr(input){
    // accepts csv str, returns arr of csvs
    // convert str to arr, trim whitespace      => "Lead Chef, Chipotle, Denver, CO, 10, 15\n"
    // split into arr by \n                     => [ "Lead Chef, Chipotle, Denver, CO, 10, 15"]
    // split arr ele into sub-arr  by ','       => [ 'Lead Chef', ' Chipotle', ' Denver', ' CO', ' 10', ' 15' ]
    // trim whitespace from each ele in sub-arr => [ 'Lead Chef', 'Chipotle', 'Denver', 'CO', '10', '15' ]

    return input.split('\n').map(ele => ele.split(',').map(ele => ele.trim()));
}

function jsonToArr(input){
    // accepts json str, returns arr of json    => "{name: 'Dog Walker', ... pay: {"min": 10, "max": 15}}"
    // trim whitespace
    // split into arr by \n                     => ["{name: 'Dog Walker', ... pay: {"min": 10, "max": 15}}", ...]
    // convert json str to json obj             =>[{"name": 'Dog Walker', ... "pay": {"min": 10, "max": 15}}]

    return input.trim().split('\n').map(ele => JSON.parse(ele));
}

function convertToCsv(input){
    //accepts arr of json, return arr of csv

    let result = [];
    return input.map(ele => {
        let output=[];
        for(var key in ele){
            if(typeof ele[key] === 'object'){
                for(var i in ele[key]){
                    output.push(ele[key][i]);
                }
                continue;
            }
            output.push(ele[key]);
        }
        return output;
    });

}

function convertToJson(input){
    // accepts arr of csv, return arr of json
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

    // check for null or undefined input
    if(!input || !input.length) return false;

    // check formats, csv vs. json
    let csv = '',
        json = '';

    if(input.indexOf('--JSON-INPUT-BELOW--') >= 0){
        [ csv, json ] = input.split('\n--JSON-INPUT-BELOW--');
    }else{
        csv = input;
    }

    // check csv format
    if(csv.length){
        // basic check for \n exists, comma exists
        if(csv.indexOf('\n') < 0 || csv.indexOf(',') < 0){
            return false;
        }

        // must have 5 commas for every new line
        // assumes minimum 1 line, 1 line still includes \n
        // does not check for alpha-numerics
        let commas = 0;
        for(let i = 0; i < csv.length; i++){
            // count commas
            if(csv[i] === ','){
                commas++;
                continue;
            }
            // check num commas for every \n occur
            if(csv[i] === '\n'){
                if(commas === 5){
                    commas = 0;
                }else{
                    return false;
                }
            }
        }
    }

    // check json format
    if(json.length){
        // check malformed json
        // check for matching braces, pairs (not implemented)
        // check if it contains name, org, city, state, pay, and pay[min], pay[max]
        let tmpJson = jsonToArr(json);
        return tmpJson.every(ele =>
            ele['name'] &&
            ele['organization'] &&
            ele['city'] &&
            ele['state'] &&
            ele['pay'] &&
            ele['pay']['min'] &&
            ele['pay']['max']
        );
    }

    return true;

}

// let test=",,,,,\n" + "Lead Chef, Chipotle, Denver, CO, 10, 15\n" + "Stunt Double, Equity, Los Angeles, CA, 15, 25\n";

let input1 = "Lead Chef, Chipotle, Denver, CO, 10, 15\n" +
  "Stunt Double, Equity, Los Angeles, CA, 15, 25\n" +
  "Manager of Fun, IBM, Albany, NY, 30, 40\n" +
  "Associate Tattoo Artist, Tit 4 Tat, Brooklyn, NY, 250, 275\n" +
  "Assistant to the Regional Manager, IBM, Scranton, PA, 10, 15\n" +
  "Lead Guitarist, Philharmonic, Woodstock, NY, 100, 200";

let alternate = "Stunt Double, Equity, Los Angeles, CA, 15, 25\n" +
  "Manager of Fun, IBM, Albany, NY, 30, 40\n" +
  "Associate Tattoo Artist, Tit 4 Tat, Brooklyn, NY, 250, 275\n" +
  "Assistant to the Regional Manager, IBM, Scranton, PA, 10, 15\n" +
  "Lead Guitarist, Philharmonic, Woodstock, NY, 100, 200\n" +
  "--JSON-INPUT-BELOW--\n" +
  "{\"name\": \"Dog Walker\", \"organization\": \"Wag\", \"city\": \"Flushing\", \"state\": \"NY\", \"pay\": {\"min\":10, \"max\":15}}\n" +
  "{\"name\": \"Cat Walker\", \"organization\": \"Rover\", \"city\": \"Forest Hills\", \"state\": \"NY\", \"pay\": {\"min\":10, \"max\":15}}";

let json = [
    { name: 'Dog Walker',
        organization: 'Wag',
        city: 'Flushing',
        state: 'NY',
        pay: {"min": 10, "max": 15}},
    { name: 'Cat Walker',
        organization: 'Rover',
        city: 'Corona',
        state: 'NY',
        pay: {"min": 10, "max": 15}}
];

// console.log(parseInput(input));
console.log(parseInput(alternate));

// console.log(cleanInput(alternate));
// console.log(convertToCsv(json));