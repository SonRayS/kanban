import { AppRoutes } from "../AppRoutes/AppRoutes";

function SendFormReg() {
    fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((data) => AppRoutes.PAGE_MAIN({ data }))
        .catch((error) => console.error(error, `что то пошло не так :C`));
}

export default SendFormReg;
