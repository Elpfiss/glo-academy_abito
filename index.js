console.dir(document)
const searchBtn = document.querySelector('.search-btn')
// вывод console.log(searchBtn.textContent) выдаст текст от кнопки
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main_list')

const cardArray = [
    {
        id: 0,
        title: 'Item_1',
        price: '170 p',
        address: 'hgfcfxc',
        dateOfPubl: '10.10 14:15',
        img: './images/product1.png'
    }
    {
        id: 1,
        title: 'Item_2',
        price: '171 p',
        address: 'hgfcfxc',
        dateOfPubl: '10.10 14:15',
        img: './images/product1.png'
    }
    {
        id: 2,
        title: 'Item_3',
        price: '172 p',
        address: 'hgfcfxc',
        dateOfPubl: '10.10 14:15',
        img: './images/product1.png'
    }
    {
        id: 3,
        title: 'Item_4',
        price: '173 p',
        address: 'hgfcfxc',
        dateOfPubl: '10.10 14:15',
        img: './images/product1.png'
    }
    {
        id: 4,
        title: 'Item_5',
        price: '174 p',
        address: 'hgfcfxc',
        dateOfPubl: '10.10 14:15',
        img: './images/product1.png'
    }
    {
        id: 5,
        title: 'Item_6',
        price: '175 p',
        address: 'hgfcfxc',
        dateOfPubl: '10.10 14:15',
        img: './images/product1.png'
    }
]

const render = (cardList) => {
    cardWrapper.innerHTML = ''

    cardList.forEach((item, idx) => {
       cardWrapper.insertAdjacentHTML('beforeend', `
        <a href="/product1.html" class="content-main_list-item">
            <div class="content-main_list-item--img">
                <img src="${item.img}" alt="photo of ${item.title}">
            </div> 
            <h5 class="content-main_list-item--title">${item.title}</h5>
            <strong class="content-main_list-item--price">${item.price}</strong>

            <div class="content-main_list-item--description">
                <span class = "content-main_list-item--adress">${item.adress}</span>                          
                <span class = "content-main_list-item--time">${item.dateOfPubl}</span>
            </div>
        </a>
        `) 
    })
}

const filteredArray = (array, value) => {      
    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value) || item.adress.includes(value) || item.dateOfPubl.includes(value)
    })
}

cardWrapper.style.justifyContent = 'flex-start'
//cardWrapper.style.rowGap = 'normal'
cardWrapper.style.gap = '30px'

render(cardArray)

searchBtn.addEventListener('click', () => {
    render(filteredArray(cardArray, searchInput.value));
})