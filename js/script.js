const arrStr = [
    'cat', 'act',
    'rome', 'more',
    'hello',
    'limes', 'slime', 'smile',
];

const checkSubStr = (arr) => {
    let arrBank = {}; // Объект/переменная/коробочка))) куда будем складывать результаты.

    let collection = new Map(); // Это будет наша коллекция 

    // Тут мы перебераем массив и оставляем "уникальные" слова после сортировки
    for(let key of arr){
        let sorted = key.split('').sort().join(''); // подготавливаем иетерируемые слова для проверки на повторение

        collection.set(sorted, key);
    };

    // Делаем массив из коллекции
    collection = Array.from(collection.values());

    // Перебераем массив который получили из коллекции и сравниваем его с основным массивом
    // для получения количеств повторений
    for(let i = 0; i < collection.length; i++){
        let count = 0; // Счетчик для подсчета повторений

        let sortedCollection = collection[i].split('').sort().join(''); // подготавливаем иетерируемые слова для проверки на повторение

        for(let k = 0; k < arr.length; k++){

            let sortedArr = arr[k].split('').sort().join(''); // подготавливаем иетерируемые слова для проверки на повторение

            // Сравниваем слова и если есть совпадение увеличиваем счетчик на 1
            if(sortedCollection === sortedArr) count++;

        }
        // Добавляем результаты проверки и сложений в объект
        arrBank[collection[i]] = count - 1;
    };

    // Выводим в консоль полученные результаты
    for (const key in arrBank) console.log(`${key} = ${arrBank[key]}`);

    // Спасибо, отличная задача, заставила подумать, но вот одно не получилось сделать
    // Ожидаемый результат
    // 'cat': 1,
    // 'rome': 1,
    // 'hello': 0,
    // 'limes': 2,
    // Мой результат
    // act = 1
    // more = 1
    // hello = 0
    // smile = 2
    // Не в том порядке записаны проверяемые слова в массив

}

checkSubStr(arrStr);