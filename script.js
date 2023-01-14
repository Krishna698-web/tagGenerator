
const addTag = () => {
    let tag_container = document.getElementById('tag-container');
    let warn = document.getElementById("warn");
    let tag = document.createElement('div');
    
    let value = document.getElementById('value');
    let val = value.value;
    tag.setAttribute('class', 'tag');
    
    let text = document.createElement('span');
    text.setAttribute('class', 'txt')
    text.innerHTML = val;

    let cross = document.createElement('span');
    cross.setAttribute('class', 'crs');
    cross.innerHTML = 'x';

    // To check the input value and add the tags to the Tag container
    if (val === '') {
        value.style.border = '2px solid red';
    } else {
        value.style.border = 'none';
        value.value = '';
        tag.appendChild(text);
        tag.appendChild(cross);
        tag_container.appendChild(tag);
    }

    // To check the duplicate tags 
    // let tagVal = document.querySelectorAll('.txt');
    // for (let i = 0; i < tagVal.length; i++) {
    //     if (val === tagVal[i].innerHTML) {
    //         warn.style.display = "block";
    //     }

    //     console.log(tagVal[i].innerHTML);
    // }
    
    // To remove/delete the Tag from the Tag container
    cross.onclick = () => {
        tag.style.display = 'none';
    };


    // To clear all the Elements from the Tag container
    document.getElementById('clr').onclick = () => {
        let tags = document.querySelectorAll(".tag");
        for (let i = 0; i < tags.length; i++) {
            tags[i].style.display = 'none';
        }
        warn.style.display = 'none';
    }
}
