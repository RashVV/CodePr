/*
    Client -> Server -> DataBase -> Server -> Client
    1s = 1000 ms
 */

console.log('Client: #Хочу оримати Дохід в 10 Разів кращий$$$')
console.log("...!!!7887!!!...")

let count = 0

const interval = setInterval(function () {
    console.info('Time Count:', ++count)
}, 1000)

  let apasWeb03 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Server: Запитую список в DataBase')
        console.log("......")
        resolve()
    }, 1000)
  })

apasWeb03.then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('DataBase: Формую список виконавців відповідно завдання, Перевіряю їх плани, обираю найадекватніших і які знаходяться поруч. ' + 'Домовляюсь про виконання і передаю на Server')
            console.log("........")
            let makers = [
                {id: '1', name: 'Nick'},
                {id: '2', name: 'Max'},
                {id: '3', name: 'Sergey'}
            ]
            resolve(makers)
        }, 20*1000)
    })
})
    .then(function (dbLiders) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Server: Відбираю потрібні данні щоб надати звіт про процес виконнання Завдання for Client')
                console.log("............")
                let liders = dbLiders.map(function (best) {
                    return {
                        id: best.id,
                        firstName: best.name,
                        timeStamp: Date.now()
                    }
                })
                resolve(liders)
            }, 2022)
        })
    })
    .then(function (Winers) {
        return new Promise(function (resolve, reject) {
            setTimeout( function () {
                console.log('Client: Показую результат і звіт в медіа триДе гала формі!!')
                console.log("......")
                let messege = Winers.join(' ');
                resolve(console.log('Best makers is', messege))
                reject(function () {
                    console.info('Відмова в доступі із за відсутності інфи від Servera')
                })
            }, 1000)
        })
    })
    .catch(function (){
        console.error('Щось мало грошей надходить і нових клієнтів')
    })
    .finally(function () {
        console.log('Закінчилась Робота проміса Від APASWEB_3.0', countofmoney + 'Секунд відбувалось це дійство'+ 'Кращі робітники ')
    })
console.log('Хочу отримати список потенційних клієнтів з Сполучиних Штатів Америки, Канади, Великої Британії, Австралії і Північної Зеландії')
console.log('...Ready ....')

setTimeout(function () {
    console.log('Server: Запитую список в DataBase')
    console.log("...!!!7887!!!...")

    setTimeout(function () {
        console.log('DataBase: Формую список виконавців відповідно завдання, Перевіряю їх плани, обираю найадекватніших і які знаходяться поруч. ' + 'Домовляюсь про виконання і передаю на Server')
        console.log("...!!!7887!!!..113!!!04111!!!!.")

        setTimeout(function () {
            console.log('Server: Відбираю потрібні данні щоб надати звіт про процес виконнання Завдання for Client')
            console.log("...!!!7887!!!..113!!!04111!!!!.")

            setTimeout(function () {
                console.log('Client: Показую результат і звіт в медіа триДе гала формі!!')
                console.log("...!!!7887!!!..113!!!04111!!!!.")

            },1000)
        }, 20*1000)
    }, 20*1000)
},1000)

let transfers = 0
setTimeout(function () {
    let bankAcount = 0
    alert('Переказ доларів на ваш Рахунок отримано!!! Все тільки починається!!! Продовжити?Підтвардіть?')
    console.info(++bankAcount)
    return (
        `${++transfers}`
    )
}, 2*1000)

let countofmoney = 50 * transfers

let monyMeker = setInterval(function () {
    console.log('Задоволених клієнтів які переказали Гроші',++countofmoney)
    setTimeout(function () {

        alert('Ти вже отримав по 100$ з '+`${countofmoney}`+' Замовлень виходить '+ `${countofmoney}`+'00$   Продовжуймо?')
        setTimeout(function () {
            clearInterval(monyMeker)
        }, 100)
    }, 4*8*1982)
}, 2*1000)

setTimeout(function () {
    prompt('Продовжуймо')
}, 4*8*1982)

setTimeout(function () {
    console.info("За 60 секонд роботи Системи APASWEB-3.0 Було отримано Замовлень:", count)
    clearInterval(interval)
    console.info("За 60 секонд роботи Системи APASWEB-3.0 Став Таким:", apasWeb03)
    console.info('У Вас на Рахунку Долярів:', countofmoney+'000$')
    console.info('Кількість переказів за цей період:', monyMeker)
    console.info("Накували грошей", countofmoney+'000$')
    clearInterval(monyMeker)
}, 60*1000)
console.log('Переказів за цей час на який ви давали Добро', transfers )
console.log('Bank Account value', monyMeker++)


document.querySelector('#Yes').addEventListener('click', load)
const $block = document.querySelector('#playground')

async function load() {
    var url = 'https://apasltd.com/order'

    let clientEge = prompt('Enter your age', )
    let clientName = prompt('Enter your name', )
    let summuryAge = clientEge - 3
    alert('Hello '+ clientName+ ' It is Grete We start from '+ summuryAge )
    let response = await fetch(url)
    let data = response.json()
         let html = data.map(function (item) {
           return '<li>' + item.id + ''+ item.name +'</li>'
        }).join(' ')
    document.querySelector('#list').insertAdjacentHTML('afterbegin', html)


    // fetch(url, {
    //
    // })
    //     .then(function (response){
    //         console.log('You are start the cooperation in yuo Life', response)
    //         return response.json()
    //     })
    //     .then(function (data) {
    //         console.log('You are the Best', data.toString())
    //         let ul = document.querySelector('#list')
    //
    //         let html = data.map(function (item) {
    //             return '<li>' + item.id + ''+ item.name +'</li>'
    //
    //         })
    //         ul.insertAdjacentHTML('afterbegin', html.join(' '))
    //
    //
    //     })
}
