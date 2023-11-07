

const all = [];
const purchased = [];
const unpurchased = [];


function addItem(){
    let input = document.getElementsByTagName('input')[0].value;
    let item = document.createElement('p');
    item.innerHTML = `-${input}`;
    all.push(item.innerHTML);
    unpurchased.push(item.innerHTML);
    document.body.appendChild(item);
    item.setAttribute('onclick','crossOut(this)');
    item.setAttribute('class', 'marcus');
}



function crossOut(x){
    let y = x.innerHTML
    if (x.style.textDecoration != 'line-through'){
        x.style.textDecoration = 'line-through';
        x.innerHTML = '<s>' + x.innerHTML + '</s>'
        all.splice(all.indexOf(y), 1, x.innerHTML)
        unpurchased.splice(unpurchased.indexOf(y), 1)
        if (purchased.indexOf(y) !== -1){
            let b = '';
        }
        else{
            purchased.push(y);
        }
    }
    else if(x.style.textDecoration = 'line-through'){
        x.style.textDecoration = 'none';
        purchased.splice(purchased.indexOf(y), 1);
        unpurchased.push(y);
    }
}



function optionChange(x){
    let items = document.getElementsByClassName('marcus');
    if (x.value === 'all'){
        for (let i of items){
            i.innerHTML = '';
        }
        for (let i of all){
            let item = document.createElement('p');
            item.setAttribute('class', 'marcus');
            item.setAttribute('onclick','crossOut(this)');
            item.innerHTML = i;
            document.body.appendChild(item);
        }
    }
    if (x.value === 'unpurchased'){
        for (let i of items){
            i.innerHTML = '';
        }
        for (let i of unpurchased){
            let item = document.createElement('p');
            item.setAttribute('class', 'marcus');
            item.setAttribute('onclick','crossOut(this)');
            item.innerHTML = i;
            document.body.appendChild(item);
        }
    }
    if (x.value === 'purchased'){
        for (let i of items){
            i.innerHTML = '';
        }
        for (let i of purchased){
            let item = document.createElement('p');
            item.setAttribute('class', 'marcus');
            item.setAttribute('onclick','crossOut(this)');
            item.innerHTML = i;
            document.body.appendChild(item);
        }
    }
}





