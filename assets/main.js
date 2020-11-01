$(document).ready(function () {

    // creo un oggetto che rappresenta uno studente

    var student;

    student = {
        'name' : 'Tizio',
        'surname' : 'Tizii',
        'age' : '25'
    }

    // ciclo for che riporta in console i dati dell'oggetto

    var key;

    for (key in student) {
        console.log(student);
        console.log(student[key]);
    }

    // array di oggetti student

    var studentDatabase[];

    studentDatabase = [

    ];



}
);
