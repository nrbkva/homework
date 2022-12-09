let show = {
    name: 'Люцифер',
    country: 'США',
    releaseDate: '25 января 2016г',
    genre: 'фэнтези, драма, криминал',
    mainActors: 'Том Эллис, Лоурен Герман',
    seasons: 6,
    episodes: 93,
    reviews: {
         about: '\n\tЗаскучавший и несчастный повелитель преисподней Люцифер Морнингстар \nоставил свой престол и отправился в современный Лос-Анджелес, \nгде основал ночной клуб «Lux». \n\tОчаровательный, харизматичный и дьявольски привлекательный Люцифер \nнаслаждается отдыхом — вином, женщинами и музыкой, \nпока красивая поп-звезда не оказывается убитой на пороге его клуба.',
         first: '\n\tВесь каст сериала очень теплый, поэтому химия между персонажами огромная.',
         second: '\n\tЮмор - комедия всегда вызывала во мне море положительных чувств. \nА в этом сериале это реализовано очень гармонично и хорошо.',
         third: '\n\tЛюбовь - этот сериал показывает двух партнеров, которые равноправны и равносильны. \nТакая позиция говорит нам о том, что любовь-это не только поцелуи и обнимашки, \nно и эмоциональная близость и забота друг о друге. \nИ это касается, не только романтических отношений, но и семейных.',
         fourth: '\tБоль - безусловно, тоска и боль за персонажей в определенные моменты может поразить вас.'},
};

console.log(show.name)
console.log(show.country)
console.log(show.releaseDate)
console.log(show.genre)
console.log(show.mainActors)
console.log(show.seasons)
console.log(show.episodes)
console.log(show.reviews.about)
console.log(show.reviews.first)
console.log(show.reviews.second)
console.log(show.reviews.third)
console.log(show.reviews.fourth)

var day = 'Tuesday'

switch (day){
    case "Sunday":
    case "sunday":
        console.log('день недели - воскресенье')
        break
    case "Monday":
    case "monday":
        console.log('день недели - понедельник')
        break
    case "Tuesday":
    case "tuesday":
        console.log('день недели - вторник')
        break
    case "Wednesday":
    case "wednesday":
        console.log('день недели - среда')
        break
    case "Thursday":
    case "thursday":
        console.log('день недели - четверг')
        break
    case "Friday":
    case "friday":
        console.log('день недели - пятница')
        break
    case "Saturday":
    case "saturday":
        console.log('день недели - суббота')
        break
    default:
        console.log('unknow day')


}