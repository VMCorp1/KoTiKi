import axios from "axios";

const apiLogin = "VM";
export const API_URL = `http://sb-cats.herokuapp.com/api/2/${apiLogin}`;

export const catsGet = async () => {
    try {
        const res = await axios.get(`${API_URL}/show`);
        return res.data.data;
    } catch (e) {
        console.log('Ой, технические шоколадки', e);
    }
};

export const catGet = (id) => {
    axios
        .get(`${API_URL}/show/${id}`)
        .then((res) => console.log(res.data.data))
        .catch((e) => console.log(e));
};

export const catAdd = (body) => {
    axios.post(`${API_URL}/add`, body).then((res) => {
        if (res.data.message === "cat with this id already exist") {
            alert("Паспортные данные заняты или уже существуют, попробуйте использовать другой идентифиКОТор");
        } else {
            alert(
                "Требуется перезагрузить страничку для отображения котика"
            );
        }
    });
};

export const catUpdate = (id, body) => {
    axios.put(`${API_URL}/update/${id}`, body).then((res) => {
        if (res.data.message !== "ok") {
            alert("Произошли технические шоколадки");
        } else {
            alert(
                "Паспортные данные вашей изменены."
            );
        }
    });
};

export const catDelete = (id) => {
    axios
        .delete(`${API_URL}/delete/${id}`)
        .then((res) =>
            alert(
                "Профиль котика удален"
            )
        )
        .catch((e) => alert("Профиль котика не был удален, повторите попытку позже"));
};
