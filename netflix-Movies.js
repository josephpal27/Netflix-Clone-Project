let playBox = document.getElementById('play-box');
let videos = Array.from(document.getElementsByClassName('v-cards'));

let vid = [
    {
        path: 'videos/1st.mp4',
        title: 'Animal'
    },
    {
        path: 'videos/2nd.mp4',
        title: 'Salaar (English)'
    },
    {
        path: 'videos/3rd.mp4',
        title: 'Extraction 2'
    },
    {
        path: 'videos/4th.mp4',
        title: 'The Equalizer 3'
    },
    {
        path: 'videos/5th.mp4',
        title: 'Lucy'
    },
    {
        path: 'videos/6th.mp4',
        title: 'All Quiet on the Western Front'
    },
    {
        path: 'videos/7th.mp4',
        title: 'The Boss Baby'
    },
    {
        path: 'videos/8th.mp4',
        title: 'Orion and the Dark'
    },
    {
        path: 'videos/9th.mp4',
        title: 'DC League of Super-Pets'
    },
    {
        path: 'videos/10th.mp4',
        title: 'Leo'
    },
    {
        path: 'videos/11th.mp4',
        title: 'Minions: The Rise of Gru'
    },
    {
        path: 'videos/12th.mp4',
        title: 'The Monkey King'
    },
    {
        path: 'videos/13th.mp4',
        title: 'Black'
    },
    {
        path: 'videos/14th.mp4',
        title: 'Evolution'
    },
    {
        path: 'videos/15th.mp4',
        title: 'Miss Shetty Mr. Polishetty'
    },
    {
        path: 'videos/16th.mp4',
        title: 'Godse'
    },
    {
        path: 'videos/17th.mp4',
        title: 'WILL'
    },
    {
        path: 'videos/18th.mp4',
        title: 'Pihu'
    },
]


videos.forEach((el, index) => {
    let ep_title = el.querySelector('span');
    ep_title.innerText = vid[index].title;

    el.addEventListener('click', () => {
        playBox.style.height = 'auto';
        window.scrollTo(0, 0);
        playBox.querySelector('video').setAttribute('src', vid[index].path);
    })
})