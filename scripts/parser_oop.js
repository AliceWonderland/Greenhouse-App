// Javascript ES6
const args = process.argv;
let input = args[2] ||
  "Lead Chef, Chipotle, Denver, CO, 10, 15\n" +
  "Stunt Double, Equity, Los Angeles, CA, 15, 25\n" +
  "Manager of Fun, IBM, Albany, NY, 30, 40\n" +
  "Associate Tattoo Artist, Tit 4 Tat, Brooklyn, NY, 250, 275\n" +
  "Assistant to the Regional Manager, IBM, Scranton, PA, 10, 15\n" +
  "Lead Guitarist, Philharmonic, Woodstock, NY, 100, 200";

function loadInput(input){

    // accepts str, returns str
    // validates, if passed, then returns input

    if(!checkInput(input)){
        console.log('Check your inputs!');
        return '';
    }
    return input;

}

function cleanInput(input){

    // accepts a str, returns arr
    // convert str to arr, trim whitespace      => "Lead Chef, Chipotle, Denver, CO, 10, 15\n"
    // split into arr by \n                     => [ "Lead Chef, Chipotle, Denver, CO, 10, 15"]
    // split arr ele into sub-arr  by ','       => [ 'Lead Chef', ' Chipotle', ' Denver', ' CO', ' 10', ' 15' ]
    // trim whitespace from each ele in sub-arr => [ 'Lead Chef', 'Chipotle', 'Denver', 'CO', '10', '15' ]

    return input.split('\n').map(ele => ele.split(',').map(ele => ele.trim()));

}

function sortInput(input){

    // accepts an arr, returns arr
    // sort Asc by first ele
    // [ ['Lead Chef', ...], ['Manager', ...] ]

    return input.sort((a,b) => a[0] > b[0]);

}

function convertToObj(input){

    // accepts arr of arrs, returns arr of objs
    // convert arr to obj
    // [ ['Lead Chef', ...] ] => [ {Title: 'Lead Chef', ...} ]

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

    // acceps arr of objs, returns formatted str
    // convert obj to final result str
    // [ {Title: 'Lead Chef', ...} ] => "Title: Lead Chef, ...\n"

    let result = '';
    for(let job of list){
        result += Object.entries(job).map(ele => ele.join(': ')).join(', ');
        result += '\n';
    }
    return result;

}

function checkInput(input){

    // accepts str, returns bool
    // confirm correct input format

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

const getInput = (state) => ({
    printInput: () => state.input
});

const getArr = (state) => ({
    printArrs: () => state.arrs
});

const getObj = (state) => ({
    printObjs: () => state.objs
});

const getResult = (state) => ({
    printResult: () => state.result
});

const Parser = (input) => {
    let state = {
        input: loadInput(input),
        arrs: [],
        objs: [],
        result: 'All Opportunities\n'
    };

    state.arrs = cleanInput(state.input);
    state.arrs = sortInput(state.arrs);
    state.objs = convertToObj(state.arrs);
    state.result += convertToFinal(state.objs);

    return Object.assign(
        {},
        getInput(state),
        getArr(state),
        getObj(state),
        getResult(state)
    );
};

const myParser = Parser(input);
console.log(myParser.printInput());
console.log(myParser.printArrs());
console.log(myParser.printObjs());
console.log(myParser.printResult());
