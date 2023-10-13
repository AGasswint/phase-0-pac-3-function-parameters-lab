function introduction(name) {
    return(`Hi, my name is ${name}.`)
}

introduction("tony")


function introductionWithLanguage(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

introductionWithLanguage("tony","Java")



function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

introductionWithLanguageOptional("tony","python")