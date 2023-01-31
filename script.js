const formulaOneTeams = {
    teamPrincipals: ['Christian Horner', 'Toto Wolff', 'Mike Krack', 'Franz Tost', 'Frederic Vasseur', 'Andrea Stella'],
    drivers: ['Lewis Hamilton', 'Lando Norris', 'Max Vestappen', 'Kevin Magnussen', 'Fernando Alonso', 'Esteban Ocon', 'Valtteri Bottas', 'Sergio Perez', 'Oscar Piastri', 'Pierre Gasly', 'Zhou Guanyu', 'George Russel', 'Charles Leclerc', 'Carlos Sainz', 'Nico Hulkenberg', 'Lance Stroll', 'Nyck de Vries', 'Logan Sargeant', 'Yuki Tsunoda'],
    fOneTeams: ['Ferrari', 'Mercedes', 'Aston Martin', 'Alpine', 'Williams', 'Alfa Romeo', 'Red Bull', 'AlphaTauri', 'McLaren', 'Haas']
};

// For picking a random item in an array
const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

const checkIfPicked = (driverOne, driverTwo) => driverOne[0] !== driverTwo ? true : false;

const findTeam = (array) => {
    let team = randomItem(array);

    return team.toUpperCase();
};

const findTeamPrincipal = (array) => randomItem(array);

const findDrivers = (array) => {
    let fOneDrivers = [];
    let driver = '';
    
    while (fOneDrivers.length < 2) {
        driver = randomItem(array);
        checkIfPicked(fOneDrivers, driver) == true ? fOneDrivers.push(driver) : console.log(driver);
    }
    return fOneDrivers;
};

const assembleTheTeam = () => {
    let drivers = findDrivers(formulaOneTeams.drivers);
    let completeTeamIs = `Congradulations, you are now the new owner of ${findTeam(formulaOneTeams.fOneTeams)} Formula 1 team!\nThe team principal is ${findTeamPrincipal(formulaOneTeams.teamPrincipals)}.\nDriver one is: ${drivers[0]}\nDriver two is: ${drivers[1]}`;

    return completeTeamIs;
}

console.log(assembleTheTeam());
