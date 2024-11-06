import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const MyForm = () => {
    const [formData, setFormData] = useState({
        num1: '',
        num2: '',
        checkboxes: [],
        string: '',
        time: '',
    });

    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    useEffect(() => {
        if (submittedData) {
            alert(JSON.stringify(submittedData, null, 2));
        }
    }, [submittedData]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'checkboxes') {
            const updatedCheckboxes = formData.checkboxes.includes(value) //Проверяет, включено ли текущее значение чекбокса в массив checkboxes в состоянии formData.
                ? formData.checkboxes.filter((item) => item !== value) //Создает новый массив, исключая значение, которое было снято с отметки.
                : [...formData.checkboxes, value];  //Создает новый массив, добавляя текущее значение к уже существующим чекбоксам.

            setFormData({ ...formData, checkboxes: updatedCheckboxes }); //Обновляет состояние formData, создавая новый объект, который содержит все предыдущие данные формы 
                                                                        //(...formData) и обновленный массив чекбоксов (checkboxes: updatedCheckboxes).
        } else {
            setFormData({ ...formData, [name]: value }); //Обновляет состояние formData, добавляя или изменяя значение для поля с именем name на новое значение value.
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (formData.num1.length < 5) newErrors.num1 = 'Первое число должно содержать не менее 5 цифр.';
        if (formData.num2.length > 8) newErrors.num2 = 'Второе число должно содержать не более 8 цифр.';
        if (!formData.string) newErrors.string = 'Это поле не может быть пустым.';
        if (!formData.time) newErrors.time = 'Выберите время.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSubmittedData(formData);
            setErrors({}); // Сбрасываем ошибки при успешной отправке
        }
    };
    const border_input = {
        margin:"10px",
        border:"2px black solid"
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                <h3>Форма ввода данных</h3>

                <Form.Group controlId="formNum1" className="mb-3" style={{border_input}} >
                    <Form.Label>Первое число</Form.Label>
                    <Form.Control
                        type="number"
                        name="num1"
                        placeholder='не менее 5 цифр'
                        value={formData.num1}
                        onChange={handleChange}
                        isInvalid={!!errors.num1}
                    />
                    <Form.Control.Feedback type="invalid">{errors.num1}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formNum2" className="mb-3" style={{border_input}}>
                    <Form.Label>Второе число</Form.Label>
                    <Form.Control
                        type="number"
                        name="num2"
                        placeholder='не более 8 цифр'
                        value={formData.num2}
                        onChange={handleChange}
                        isInvalid={!!errors.num2}
                    />
                    <Form.Control.Feedback type="invalid">{errors.num2}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formCheckboxes" className="mb-3" style={{border_input}}>
                    <Form.Label>Выберите опции:</Form.Label>
                    <Form.Check
                        type="checkbox"
                        label="Опция 1"
                        value="option1"
                        checked={formData.checkboxes.includes('option1')}
                        onChange={handleChange}
                        name="checkboxes"
                    />
                    <Form.Check
                        type="checkbox"
                        label="Опция 2"
                        value="option2"
                        checked={formData.checkboxes.includes('option2')}
                        onChange={handleChange}
                        name="checkboxes"
                    />
                    <Form.Check
                        type="checkbox"
                        label="Опция 3"
                        value="option3"
                        checked={formData.checkboxes.includes('option3')}
                        onChange={handleChange}
                        name="checkboxes"
                    />
                </Form.Group>
                <Form.Group controlId="formString" className="mb-3" style={{border_input}}>
                    <Form.Label>Строковое поле</Form.Label>
                    <Form.Control
                        type="text"
                        name="string"
                        value={formData.string}
                        onChange={handleChange}
                        isInvalid={!!errors.string}
                    />
                    <Form.Control.Feedback type="invalid">{errors.string}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formTime" className="mb-3" style={{border_input}}>
                    <Form.Label>Выберите время</Form.Label>
                    <Form.Control
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        isInvalid={!!errors.time}
                    />
                    <Form.Control.Feedback type="invalid">{errors.time}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="success" type="submit" style={{ display: 'block', margin: '0 auto' }}>
                    Отправить
                </Button>

                {Object.keys(errors).length === 0 && submittedData && (
                    <Alert variant="success" style={{ marginTop: '20px' }}>
                        Данные успешно отправлены: {JSON.stringify(submittedData, null, 2)}
                    </Alert>
                )}
            </Form>
        </Container>
    );
};

export default MyForm