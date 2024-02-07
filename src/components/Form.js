import React from 'react';
const Form = (props) => {
    // через пропс получаем функцию фетч-запроса getweather из компонента Data

    function handleGetCitySubmit(event) {
        event.preventDefault(); // отключаем поведение формы по умолчанию
        const city = event.currentTarget.city.value.trim(); //  ивент = объект, (console.log(event)) содержит информацию об элементах (и их свойствах), принимающих участие в действии ивента; в этой строке ты получаем value из инпута с имнем name="city", который лежит в форме, для которой мы указали действие onSubmit={handleGetCitySubmit}; делаем обрезку лишних пробелов trim() и помещаем это value в константу city.
        props.getWeather(city); // вызываем полученную через пропс функцию getWeather() и передаем в нее константу city, тем самым выполняем fetch запрос с городом, который пользователь указал в.
    }

    return (
        <form onSubmit={handleGetCitySubmit}>
            <input type="text" name="city" placeholder="City" />
            <button type="submit">Get weather</button>
        </form>
    )
}

export default Form;