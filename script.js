const formulaOneTeams = {
    teamPrincipals: ['Christian Horner', 'Toto Wolff', 'Mike Krack', 'Franz Tost', 'Frederic Vasseur', 'Andrea Stella'],
    drivers: ['Lewis Hamilton', 'Max Vestappen', 'Fernando Alonso', 'Valteri Bottas', 'Sergio Perez', 'Ayrton Senna', 'Michael Schumaher', 'Jenson Button', 'George Russel', 'Charles Leclerc', 'Carlos Sainz'],
    fOneTeams: ['Ferrari', 'Mercedes', 'Aston Martin', 'Alpine', 'Williams', 'Alfa Romeo', 'Red Bull', 'AlphaTauri', 'McLaren', 'Haas']
};

// For picking a random item in an array
const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

const findDrivers = (array) => {
    let fOneDrivers = [];
    let driver = '';

    
    while (fOneDrivers.length < 2) {
        driver = randomItem(array);
        checkIfAssigned(fOneDrivers, driver) == true ? fOneDrivers.push(driver) : console.log(driver);
    }
    //console.log(`Your drivers are ${fOneDrivers[0]} and ${fOneDrivers[1]}`);
    return fOneDrivers;
};

const checkIfAssigned = (driverOne, driverTwo) => driverOne[0] !== driverTwo ? true : false;

console.log(findDrivers(formulaOneTeams.drivers));