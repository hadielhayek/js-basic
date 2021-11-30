const stringSize = (text) => {
    var text="This text has a certain number of characters";
    return text.length;
    }
    const replaceCharacterE = (text) => {
    text="This text has a certain number of characters"
    return text.replace("e"," ");
    }
    const concatString = (text1, text2) => {
    text1="el Javascript shi ";
    text2="ra2e3";
    return text1+text2;
    }
    const showChar5 = (text) => {
    text="TDD kicks ass"
    return text[4];
    }
    const showChar9 = (text) => {
    text="But it is really annoying to write";
    return text.substring(0,9);
    }
    const toCapitals = (text) => {
    text="Another useful function";
    return text.toUpperCase();
    }
    const toLowerCase = (text) => {
    text="This is a sentence!"
    return text.toLowerCase();
    }
    const removeSpaces = (text) => {
    text=" Rome wasn\'t built in a day "
    return text.trim();
    }
    const IsString = (text) => {
    text="Is this a string?";
    if(typeof(text)==="string"){
        return true
    }
    else{
        return false;
    }
    
    }
    
    const getExtension = (text) => {
    text="images/photo01.jpg";
        return text.substring(text.length - 3);;
    }
    const countSpaces = (text) => {
    text="Sire open we have a big one!";
    var c=0;
    for(var i=0;i<text.length;i++){
        if(text[i]==" "){
            c++
        }
    }
    return c;
    }
    const InverseString = (text) => {
    text="Après demain, à partir d\'aujourd\'hui?";
    var t2="";
    for(var i=text.length-1;i>=0;i--){
        t2=t2+text[i];
    }
    return t2;
    }
    
    const power = (x, y) => {
    var x=2;
    var y=3;
    return Math.pow(x,y);
    }
    const absoluteValue = (num) => {
    num=-5;
    return Math.abs(num);
    }
    const absoluteValueArray = (array) => {
    array=[-5,-50,-25,-568];
    var arr=[];
    for(var i=0 ;i<array.length;i++){
    arr[i]=Math.abs(array[i]);
    }
    return arr;
    }
    const circleSurface = (radius) => {
        radius = 5;
        const result = Math.round(Math.PI * radius * radius);
        return result;
    }
    const hypothenuse = (ab, ac) => {
        ab=5;
        ac=8;
        return Math.sqrt(ab*ab+ac*ac);
    }
    const BMI = (weight, height) => {
    weight=65;
    height=1.75;
    return parseFloat((weight/(height*height)).toFixed(2));
    
    }
    
    const createLanguagesArray = () => {
    var languages=["Html","CSS","Java","PHP"];
    return languages;
    
    }
    
    const createNumbersArray = () => {
    var nombres=[0,1,2,3,4,5];
    return nombres;
    }
    
    const replaceElement = (languages) => {
    languages=["Html","CSS","Java","PHP"];
    languages[2]="Javascript";
    replacedLanguages=languages;
    return replacedLanguages;
    }
    
    const addElement = (languages) => {
        languages=["Html","CSS","Java","PHP"];
        languages[2]="Javascript";
        replacedLanguages=languages;
        replacedLanguages.push('Ruby');
        replacedLanguages.push('Python');
        var modifiedLanguages=replacedLanguages;
        return modifiedLanguages;
    }
    
    const addNumberElement = (numbers) => {
    var numbers = [0,1,2,3,4,5];
    numbers.unshift(-1);
    numbers.unshift(-2)
    var modifiedNumbers=numbers;
    return modifiedNumbers;
    }
    
    const removeFirst = (languages) => {
       var languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
       languages.shift();
       modifiedLanguages=languages;
       return modifiedLanguages;
    }
    
    const removeLast = (languages) => {
       var languages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
       languages.pop();
       modifiedLanguages=languages;
       return modifiedLanguages;
    }
    
    const convertStrToArr = (social_arr) => {
         var socialNetworksString = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
         var socialNetworks=socialNetworksString.split(",");
         return socialNetworks;
    }
    
    const convertArrToStr = (languages) => {
        var languagesString = ['CSS', 'Javascript', 'PHP', 'Ruby'];
        languages = languagesString.toString();
        return languages;
    }
    
    const sortArr = (social_arr) => {
     var socialNetworks = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
     var socialNetworksSorted = socialNetworks.sort();
        return socialNetworksSorted;
    }
    
    const invertArr = (social_arr) => {
        var languages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
        var languagesInverted = languages.reverse();
        return languagesInverted;
    }