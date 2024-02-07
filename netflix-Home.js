
//-------- Initialize the Variables -------//
let playbox = document.getElementById('play-box');
let vcards = Array.from(document.getElementsByClassName('v-cards'));



// ---------- Nav Control --------- //
// function toggleMenu() {

//     let menu = document.querySelector('nav ul');
//     let up_div = document.querySelector('nav .upper-div');

//     if (menu.style.height == 'auto') {
//         up_div.style.display = 'none';
//         menu.style.height = '0';
//         menu.style.padding = '0';
//     }

//     else {
//         up_div.style.display = 'block';
//         menu.style.height = 'auto';
//         menu.style.padding = '0.5rem 1.4rem';
//     }

// }

// function removeUl() {

//     let menu = document.querySelector('nav ul');
//     let up_div = document.querySelector('nav .upper-div');

//     menu.style.height = '0';
//     menu.style.padding = '0';
//     up_div.style.display = 'none';
// }


// -------------------------------------------------------------------------------------- //


// --------- Video Array --------- //
let vid = [
    {
        path: 'videos/1st.mp4',
        title: 'The Teaser: Season 1'
    },
    {
        path: 'videos/2nd.mp4',
        title: 'The Peaky Blinders'
    },
    {
        path: 'videos/3rd.mp4',
        title: 'Killer Soup: Season 1'
    },
    {
        path: 'videos/4th.mp4',
        title: 'Berlin: Season 1'
    },
    {
        path: 'videos/5th.mp4',
        title: 'Fool Me Once: Limited Series'
    },
    {
        path: 'videos/6th.mp4',
        title: 'Aar Ya Paar'
    },
    {
        path: 'videos/7th.mp4',
        title: 'Hollywood: Season 1'
    },
    {
        path: 'videos/8th.mp4',
        title: 'The Elite'
    },
    {
        path: 'videos/9th.mp4',
        title: 'The Brothers Sun: Season 1'
    },
    {
        path: 'videos/10th.mp4',
        title: 'Khakee: Chapter 2'
    },
    {
        path: 'videos/11th.mp4',
        title: 'My Demon: Season 1'
    },
    {
        path: 'videos/12th.mp4',
        title: 'Gyeongseong Creature: Season 1'
    },
    {
        path: 'videos/13th.mp4',
        title: 'Jeffrey Epstein: Filthy Rich'
    },
    {
        path: 'videos/14th.mp4',
        title: 'Alone: Season 1'
    },
    {
        path: 'videos/15th.mp4',
        title: 'Rana Naidu Intervals'
    },
    {
        path: 'videos/16th.mp4',
        title: 'Single Inferno: Season 3'
    },
    {
        path: 'videos/17th.mp4',
        title: 'The Crown: Last Episode'
    },
]



vcards.forEach((el, index) => {
   
let ep_title = el.querySelector('p');
ep_title.innerText = vid[index].title;


    el.addEventListener('click', () => {
        playbox.style.height = 'auto';
        window.scrollTo(0, 0);
        playbox.querySelector('video').setAttribute('src', vid[index].path);
    })
})