function translateType(type){
    const types = {"movie": "Фильм", "series": "Сериал", "episode": "Эпизод"}
    return types[type] ? types[type] : "Неизвестный тип";
}

export {translateType};