function formatLanguagesObjectToString(langObj){
    let languageString = "";

    for (const item of langObj){
        languageString += `${item.name} `;
    }

    return `${languageString}`;
}


module.exports = formatLanguagesObjectToString;