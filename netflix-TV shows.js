let playBox = document.getElementById('play-box');
let videos = Array.from(document.getElementsByClassName('v-cards'));

let vid = [
    {
        path: 'videos/1st.mp4',
        title: 'Money Heist: Season 1'
    },
    {
        path: 'videos/2nd.mp4',
        title: 'Unicorn Academy'
    },
    {
        path: 'videos/3rd.mp4',
        title: 'Berlin: Season 1'
    },
    {
        path: 'videos/4th.mp4',
        title: 'Kung Fu Panda'
    },
    {
        path: 'videos/5th.mp4',
        title: 'Young Sheldon: Limited Series'
    },
    {
        path: 'videos/6th.mp4',
        title: 'My Demon: New Season'
    },
    {
        path: 'videos/7th.mp4',
        title: 'Lucifer: Season 1'
    },
    {
        path: 'videos/8th.mp4',
        title: 'The Good Doctor'
    },
    {
        path: 'videos/9th.mp4',
        title: 'Naruto: New Season'
    },
    {
        path: 'videos/10th.mp4',
        title: 'Fool Me Once: Chapter 2'
    },
    {
        path: 'videos/11th.mp4',
        title: 'The Vikoings'
    },
    {
        path: 'videos/12th.mp4',
        title: 'Never Have I Ever'
    },
    {
        path: 'videos/13th.mp4',
        title: 'The Railway Men'
    },
    {
        path: 'videos/14th.mp4',
        title: 'Manifest: Season 1'
    },
    {
        path: 'videos/15th.mp4',
        title: 'Hidden Love Intervals'
    },
    {
        path: 'videos/16th.mp4',
        title: 'Kaala Paani: Season 3'
    },
    {
        path: 'videos/17th.mp4',
        title: 'New Amsterdam: Last Episode'
    },
    {
        path: 'videos/18th.mp4',
        title: 'The Alchemy of Souls'
    },
]


videos.forEach((el, index) => {
    let ep_title = el.querySelector('span');
    ep_title.innerText = vid[index].title;

    el.addEventListener('click', () => {
        playBox.style.height = 'auto';
        window.scrollTo(0, 0);
        playBox.querySelector('video').setAttribute('src', vid[index].path) 
    })
})