/*You must automate a search bar for your browser software. If the user's input contains a dot "." then it's a www site and you redirect it to http://input
Else, redirect to ftp://input

If the input already contains http://, ftp:// or https:// do not redirect to anything else.*/




const urlbar = readline();

const finalurl = checkurl(urlbar);

function checkurl(url){
    if(url.includes('http://') || url.includes('https://') || url.includes('ftp://') ){
        return url
    } else if(url.includes('.')){
        return 'http://'.concat(url);
    } else{
        return 'ftp://'.concat(url);
    }
}

console.log(finalurl);