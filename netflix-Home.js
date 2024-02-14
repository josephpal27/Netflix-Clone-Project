
//-------- Initialize the Variables -------//
let banner = document.querySelector('.banner');
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
        title: 'Breaking Bad: Season 1'
    },
    {
        path: 'videos/2nd.mp4',
        title: 'The Yellowstone'
    },
    {
        path: 'videos/3rd.mp4',
        title: 'Peaky Blinders: Intervals'
    },
    {
        path: 'videos/4th.mp4',
        title: 'King The Land: Part 1'
    },
    {
        path: 'videos/5th.mp4',
        title: 'Lost in Space: Limited Series'
    },
    {
        path: 'videos/6th.mp4',
        title: 'Squid Game'
    },
    {
        path: 'videos/7th.mp4',
        title: 'BlackList: Season 1'
    },
    {
        path: 'videos/8th.mp4',
        title: 'The Narcos'
    },
    {
        path: 'videos/9th.mp4',
        title: 'The Witcher: Season 1'
    },
    {
        path: 'videos/10th.mp4',
        title: 'Wednesday: Chapter 2'
    },
    {
        path: 'videos/11th.mp4',
        title: 'A Killer Paradox'
    },
    {
        path: 'videos/12th.mp4',
        title: 'Woman: Season 2'
    },
    {
        path: 'videos/13th.mp4',
        title: 'The Railway Men'
    },
    {
        path: 'videos/14th.mp4',
        title: 'Griselda: Season 1'
    },
    {
        path: 'videos/15th.mp4',
        title: 'The Brothers Sun'
    },
    {
        path: 'videos/16th.mp4',
        title: 'Alexander: Season 3'
    },
    {
        path: 'videos/17th.mp4',
        title: 'MF Ghost: Last Episode'
    },
    {
        path: 'videos/19th.mp4',
        title: 'Money Heist: Part 2'
    },
]



function banner_play() {
    playbox.querySelector('video').setAttribute('src', vid[16].path);
    playbox.style.height = 'auto';
    banner.style.display = 'none';
}



vcards.forEach((el, index) => {
   
let ep_title = el.querySelector('p');
ep_title.innerText = vid[index].title;


    el.addEventListener('click', () => {
        banner.style.display = 'none';
        playbox.style.height = 'auto';
        window.scrollTo(0, 0);
        playbox.querySelector('video').setAttribute('src', vid[index].path);
    })
})