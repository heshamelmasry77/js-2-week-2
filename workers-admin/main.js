import './style.css'

// Make an API call to
// https://dummy.restapiexample.com/api/v1/employees

// use map()

// use the destructing syntax
const myListContainer = document.querySelector("#my-list-container");
const API_URL = "https://dummy.restapiexample.com/api/v1/employees"

let someData;

function getEmployees() {
    fetch(API_URL)
        .then(data => {
            return data.json();
        })
        .then(({data: employeesData}) => {
            const newEmployeesData = employeesData.map(({employee_name, employee_age}) => {
                return `<li class="flex py-4">
                            <div class="ml-3">
                              <p class="text-sm font-medium text-gray-900">${employee_name}</p>
                              <p class="text-sm text-gray-500">${employee_age}</p>
                            </div>
                          </li>`
            }).join('');
            myListContainer.innerHTML = newEmployeesData;
            return employeesData;
        })
        .finally((employeesData) => {

            console.log("someData: ", employeesData);
            someData = "hesh";
            console.log(someData);
        })
}

getEmployees();
