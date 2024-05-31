const initialstate = {
    employees: JSON.parse(localStorage.getItem('employees')) || [],
    employee : null
}

const EmployeeReducer = (state = initialstate,action) => {
    let newState;
    switch (action.type) {
        case 'ADDEMPLO':
            newState = {
                ...state,
                employees: [...state.employees, action.payload]
            };
            localStorage.setItem('employees', JSON.stringify(newState.employees));
            return newState;

        case 'SINGLEEMPLO':
            // eslint-disable-next-line no-case-declarations
            let singleemplo = state.employees.find((emplo) => emplo.id === action.payload);
            newState = {
                ...state,
                employee: singleemplo || null
            };
            return newState;

        case 'DELETEEMPLO':
            // eslint-disable-next-line no-case-declarations
            let newData = state.employees.filter((data) => data.id !== action.payload);
            newState = {
                ...state,
                employees: newData
            };
            localStorage.setItem('employees', JSON.stringify(newState.employees));
            return newState;

        case 'UPDATEEMPLO':
            // eslint-disable-next-line no-case-declarations
            let updatedData = state.employees.map((dt) =>
                dt.id === action.payload.id ? { ...action.payload } : dt
            );
            newState = {
                ...state,
                employees: updatedData,
                employee: null
            };
            localStorage.setItem('employees', JSON.stringify(newState.employees));
            return newState;

        default:
            return state;
    }
}

export default EmployeeReducer;