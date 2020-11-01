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

    var studentDatabase;

    studentDatabase = [

        {
            'name' : 'Tizio',
            'surname' : 'Tizii',
            'age' : '25'
        },

        {
            'name' : 'Caio',
            'surname' : 'Caii',
            'age' : '28'
        },

        {
            'name' : 'Sempronio',
            'surname' : 'Sempronii',
            'age' : '30'
        }

    ];

    // visualizzazione in console

    for (var i = 0; i < studentDatabase.length; i++) {
        console.log(studentDatabase[i]);
    }

    // richiesta all'utente di inserire un nuovo oggetto student nell'array

    var inputStudent;
    var inputName;
    var inputSurname;
    var inputAge;

    inputStudent = {
        'name': inputName,
        'surname': inputSurname,
        'age': inputAge
    };

    inputName = prompt('inserire nome: ');
    inputStudent.name = inputName;
    inputSurname = prompt('inserire cognome: ');
    inputStudent.surname = inputSurname;
    inputAge = prompt('inserire età : ');
    inputStudent.age = inputAge;



}
);
