
console.log("this is tutorial 38 Exercise 5");

const objdata = [{
    "word": "example",
    "results": [
        {
            "definition": "a representative form or pattern",
            "partOfSpeech": "noun",
            "synonyms": [
                "model"
            ],
            "typeOf": [
                "representation",
                "internal representation",
                "mental representation"
            ],
            "hasTypes": [
                "prefiguration",
                "archetype",
                "epitome",
                "guide",
                "holotype",
                "image",
                "loadstar",
                "lodestar",
                "microcosm",
                "original",
                "paradigm",
                "pilot",
                "prototype",
                "template",
                "templet",
                "type specimen"
            ],
            "derivation": [
                "exemplify"
            ],
            "examples": [
                "I profited from his example"
            ]
        },
        {
            "definition": "something to be imitated",
            "partOfSpeech": "noun",
            "synonyms": [
                "exemplar",
                "good example",
                "model"
            ],
            "typeOf": [
                "ideal"
            ],
            "hasTypes": [
                "pacemaker",
                "pattern",
                "beauty",
                "prodigy",
                "beaut",
                "pacesetter"
            ],
            "derivation": [
                "exemplify",
                "exemplary"
            ]
        },
        {
            "definition": "an occurrence of something",
            "partOfSpeech": "noun",
            "synonyms": [
                "case",
                "instance"
            ],
            "typeOf": [
                "happening",
                "natural event",
                "occurrence",
                "occurrent"
            ],
            "hasTypes": [
                "clip",
                "mortification",
                "piece",
                "time",
                "humiliation",
                "bit"
            ],
            "derivation": [
                "exemplify"
            ],
            "examples": [
                "but there is always the famous example of the Smiths"
            ]
        },
        {
            "definition": "an item of information that is typical of a class or group",
            "partOfSpeech": "noun",
            "synonyms": [
                "illustration",
                "instance",
                "representative"
            ],
            "typeOf": [
                "information"
            ],
            "hasTypes": [
                "excuse",
                "apology",
                "specimen",
                "case in point",
                "sample",
                "exception",
                "quintessence",
                "precedent"
            ],
            "derivation": [
                "exemplify",
                "exemplary"
            ],
            "examples": [
                "this patient provides a typical example of the syndrome",
                "there is an example on page 10"
            ]
        },
        {
            "definition": "punishment intended as a warning to others",
            "partOfSpeech": "noun",
            "synonyms": [
                "deterrent example",
                "lesson",
                "object lesson"
            ],
            "typeOf": [
                "monition",
                "admonition",
                "word of advice",
                "warning"
            ],
            "derivation": [
                "exemplary"
            ],
            "examples": [
                "they decided to make an example of him"
            ]
        },
        {
            "definition": "a task performed or problem solved in order to develop skill or understanding",
            "partOfSpeech": "noun",
            "synonyms": [
                "exercise"
            ],
            "typeOf": [
                "lesson"
            ],
            "examples": [
                "you must work the examples at the end of each chapter in the textbook"
            ]
        }
    ],
    "syllables": {
        "count": 3,
        "list": [
            "ex",
            "am",
            "ple"
        ]
    },
    "pronunciation": {
        "all": "ɪɡ'zæmpəl"
    },
    "frequency": 4.67
}]




document.getElementById("btnajax").addEventListener(`click`, makerequest);


let data = document.getElementById(`data`);

function makerequest() {

    console.log("btn click")


    let str = "";

    Array.from(objdata).forEach(function (def) {
        console.log("inside foreach");

        //    console.log(def.results[0].definition);

        //    console.log(def.results.length);  


        let x = def.results.length;
        for (i = 0; i < x; i++) {
            str += `
            <li style="list-style-type: none;">${[i]} => ${def.results[i].definition}</li><br>`

            data.innerHTML = str;

        }
    })
}



