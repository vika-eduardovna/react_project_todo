import React from "react";

export default function User({ first_name, last_name, email, avatar }) {

    const superStyle = {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${avatar})`,
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        paddingBottom: "30px"
    }
    return (

        <div style={superStyle}>
            <p>name: {first_name}</p>
            <p>lastname: {last_name}</p>
            <p>email: {email}</p>
            <p>avatar: {avatar}</p>
        </div>
    )

}

//изменить компонент User таким образом, чтобы в карточке пользователя выводились его имя, фамилия, email и аватар (текстом)
