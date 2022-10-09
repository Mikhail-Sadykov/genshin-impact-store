import React, {useState} from 'react';
import './Form.css'

const Form = () => {
    const  [country, setCountry] = useState('')
    const  [street, setStreet] = useState('')
    const  [subject, setSubject] = useState('physical')

    const onChangeCountry = (e) => {
        setCountry(e.targer.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.targer.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.targer.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Страна'}
                onChange={onChangeCountry}/>
            <input
                className={'input'}
                type="text"
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}/>
            <select
                value={subject} onChange={onChangeSubject} className{'select'}>
                <option value={'physical'}>Физ.лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;