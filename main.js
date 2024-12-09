const data = [
    {
        id: 1,
        code: 'MO231',
        name: 'Pomeranian Trắng',
        gender: 1,
        age: '02',
        price: '6.900.000'
    },
    {
        id: 2,
        code: 'MO502',
        name: 'Poodle Tiny Vàng',
        gender: 0,
        age: '02',
        price: '3.900.000'
    },
    {
        id: 3,
        code: 'MO102',
        name: 'Poodle Tiny Sepia',
        gender: 0,
        age: '02',
        price: '4.000.000'
    },
    {
        id: 4,
        code: 'MO512',
        name: 'Alaskan Malamute',
        gender: 1,
        age: '02',
        price: '8.900.000'
    },
    {
        id: 5,
        code: 'MO231',
        name: 'Pembroke Corgi',
        gender: 1,
        age: '03',
        price: '6.500.000'
    },
    {
        id: 6,
        code: 'MO502',
        name: 'Pembroke Corgi',
        gender: 1,
        age: '02',
        price: '5.900.000'
    },
    {
        id: 7,
        code: 'MO231',
        name: 'Pomeranian Trắng',
        gender: 0,
        age: '02',
        price: '6.900.000'
    },
    {
        id: 8,
        code: 'MO102',
        name: 'Poodle Tiny',
        gender: 1,
        age: '03',
        price: '7.900.000'
    }
];
const data2 = [
    {
        id: 1,
        title: "Pomeranian là gì? Cách nhận biết chó Pomeranian",
        info: "Pomeranian hay còn gọi là chó Pomeranian (chó Pom) luôn nằm trong top những thú cưng dễ thương nhất. Không chỉ vậy, giống chó xiế.."
    },
    {
        id: 2,
        title: "Chế độ ăn cho chó bạn cần biết",
        info: "Việc chia khẩu phần ăn cho chó thoạt nghe có vẻ đơn giản nhưng có một số quy tắc bạn nên biết để chó cưng dễ dàng hấp thụ các chất.."
    },
    {
        id: 3,
        title: "Tại sao chó cắn phá đồ đạc và cách phòng ngừa hiệu quả",
        info: "Chó cắn là hiện tượng phổ biến trong quá trình phát triển. Tuy nhiên, không ai muốn thấy đồ đạc, vật dụng quang trọng của mình bị chó cắn."
    }
];

const listItems = document.querySelector("[show-items]");
if(listItems){
    const htmls = [];
    for(let i = 0; i < data.length; i++){
        const item = data[i];
        let genderShow = (item.gender)? 'Đực' : 'Cái';
        const elementBox = `
        <li class="item">
            <img src="dogs/Dog${item.id}.png" alt="Dog1">
            <div class="item_content">
                <p class="item_name"><strong>${item.code} - ${item.name}</strong></p>
                <p class="item_gender">Giống: <strong>${genderShow}</strong></p>
                <p class="item_age">Tuổi: <strong>${item.age} tháng</strong></p>
                <p class="item_price"><strong>${item.price} VND</strong></p>
        </li>
        `;
        htmls.push(elementBox);
    }
    listItems.innerHTML = htmls.join('');
}