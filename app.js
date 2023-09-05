
const fleches = document.querySelectorAll('svg')
const menuToggle = document.querySelectorAll('.toggled-icon ')
const listes = document.querySelectorAll('.list')
const header = document.getElementById('header')
const content = document.getElementById('content')
const img = document.getElementById('img')
const icon = document.getElementById('icon')
const ulList = document.getElementById('ulList')
const email = document.getElementById('email')
const btn = document.getElementById('btn')


fleches.forEach((fleche) => {
    fleche.addEventListener('click', function () {

        if (menuToggle[fleche.dataset.index - 1].style.display === 'block') {
            menuToggle[fleche.dataset.index - 1].style.display = 'none'
            fleche.style.transform = 'rotate(360deg)'


        } else {

            menuToggle.forEach((menu) => {
                menu.style.display = 'none'
            })


            menuToggle[fleche.dataset.index - 1].style.display = 'block'
            fleche.style.transform = 'rotate(180deg)'
            fleche.style.transition = '0.5s ease'





        }



    })
})

const addRedLine = (item) => {
    item.classList.remove('before:w-full')

    

    if (item.classList.contains('before:w-full')) {
        item.classList.remove('before:w-full')
    } else {
        item.classList.add('before:w-full')
    }
}




let listofItem = Array.from(listes)

let displayContent = (e, item) => {



    if (parseInt(e.srcElement.dataset.code) === 1) {
        console.log('yes')
        header.textContent = 'Bookmark in one click'
        content.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
        img.src = "./assets/images/illustration-features-tab-1.svg"


    } else if (parseInt(e.srcElement.dataset.code) === 2) {
        header.textContent = 'Intelligent search'
        content.textContent = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
        img.src = "./assets/images/illustration-features-tab-2.svg"



    } else if (parseInt(e.srcElement.dataset.code) === 3) {
        header.textContent = 'Share your bookmarks'

        content.textContent = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
        img.src = "./assets/images/illustration-features-tab-3.svg"


    } 

}




listofItem.forEach((item) => {
    item.addEventListener('click', displayContent)
})

icon.addEventListener('click', function () {
    ulList.classList.toggle('hidden')

    if (ulList.classList.contains('hidden')) {
        icon.src = "./assets/images/icon-hamburger.svg"

    } else {
        icon.src = "./assets/images/icon-humburger-x.svg"

    }
})


function verify() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    btn.addEventListener('click', function (event) {
        if (!emailPattern.test(email.value)) {
            event.preventDefault(); // Prevent form submission if email is not valid
            alert('Please enter a valid email address.');
        }
        else {
            console.log(email.value)
        }
    });
}

verify()