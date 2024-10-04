import './Form.scss';
import React from 'react';


export function Form({ sendFormData }) {
    const [errors, setErrors] = React.useState({});
    const [surname, setSurname] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [birthday, setBirthday] = React.useState('');
    const [tel, setTel] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [job, setJob] = React.useState('');


    function submitForm(e) {
        e.preventDefault();

        if (changeError() && /^\S+@\S+\.\S+$/.test(email)) {
            sendFormData();
        } else {
            const inputs = Array.from(document.querySelectorAll('.form__input'));
            const errorMessages = {};
            inputs.forEach((item) => {
                errorMessages[item.name] = item.validationMessage;
            })
                errorMessages['email'] = 'Введен некорректный адрес электронной почты';
            setErrors(errorMessages);
        }
    }

    function changeError() {
        const formElement = document.querySelector('form');
        const isValid = formElement.checkValidity();
        return isValid;
    }

    return (
        <section className='forms'>
            <h1 className="title">Информация о сотруднике</h1>
            <form className="form" onSubmit={submitForm} noValidate>
                <input className={`form__input ${(errors.surname) ? 'form__input_invalid' : ''} `}
                    placeholder='Фамилия'
                    type='text'
                    name="surname"
                    required
                    onChange={e => {
                        setSurname(e.target.value);
                        setErrors({ ...errors, [e.target.name]: '' });
                    }}
                    value={surname}
                    id='surname' />
                <span className={`form__error ${(errors.surname) ? 'form__error_visible' : ''}`} id="error-surname">{errors.surname}</span>

                <input className={`form__input ${(errors.name) ? 'form__input_invalid' : ''} `}
                    placeholder='Имя'
                    type='text'
                    name="name"
                    required
                    onChange={e => {
                        setName(e.target.value);
                        setErrors({ ...errors, [e.target.name]: '' });
                    }}
                    value={name}
                    id='name' />
                <span className={`form__error ${errors.name ? 'form__error_visible' : ''}`} id='error-name'>{errors.name}</span>

                <input className='form__input'
                    placeholder='Отчество'
                    type='text'
                    name="lastname"
                    onChange={e => setLastname(e.target.value)}
                    value={lastname} />

                <div className='form__conteiner'>
                    <select className='form__input form__select' name="gender" id="gender" defaultValue={'men'} onChange={e => setGender(e.target.value)}>
                        <option value="men">Мужской</option>
                        <option value="women">Женский</option>
                    </select>
                    <div className='form__wrapper'>
                        <input className={`form__input ${(errors.birthday) ? 'form__input_invalid' : ''} `}
                            placeholder='День рождения'
                            type='date'
                            name='birthday'
                            required
                            onChange={e => {
                                setBirthday(e.target.value);
                                setErrors({ ...errors, [e.target.name]: '' });
                            }}
                            value={birthday}
                            id='birthday' />
                        <span className={`form__error ${errors.birthday ? 'form__error_visible' : ''}`} id='error-birthday'>{errors.birthday}</span>
                    </div>
                    <div className='form__wrapper'>
                        <input className={`form__input ${(errors.tel) ? 'form__input_invalid' : ''} `}
                            placeholder='Мобильный телефон'
                            type='tel' name='tel'
                            required
                            onChange={e => {
                                setTel(e.target.value);
                                setErrors({ ...errors, [e.target.name]: '' });
                            }}
                            value={tel}
                            id='tel' />
                        <span className={`form__error ${errors.tel ? 'form__error_visible' : ''}`} id='error-tel'>{errors.tel}</span>
                    </div>
                    <div className='form__wrapper'>
                        <input className={`form__input ${(errors.email) ? 'form__input_invalid' : ''} `}
                            placeholder='Email'
                            type='email' name='email'
                            required
                            onChange={e => {
                                setEmail(e.target.value);
                                setErrors({ ...errors, [e.target.name]: '' });
                            }}
                            value={email}
                            id='error-email' />
                        <span className={`form__error ${(errors.email !== null) ? 'form__error_visible' : ''}`} id='error-email'>{errors.email}</span>
                    </div>
                </div>
                <input className="form__input"
                    placeholder='Адрес постоянной регистрации'
                    type='text'
                    name='address'
                    onChange={e => setAddress(e.target.value)}
                    value={address} />
                <input className="form__input"
                    placeholder='Название работодателя'
                    type='text'
                    name="job"
                    onChange={e => setJob(e.target.value)}
                    value={job} />
                <button className="form__button" type='submit'>Сохранить</button>
            </form>
        </section>
    )
}
