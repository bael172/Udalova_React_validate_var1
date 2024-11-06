import React, { useState } from 'react';
import { Form,  Button } from 'react-bootstrap';

const Validate = () => {
 const [formData, setFormData] = useState({
 num1: '',
 num2: '',
 checkbox:[],
 string: '',
 time: '',
 });

 const handleChange = (e) => {
 setFormData({
...formData,
 [e.target.name]: e.target.value,
 });
 };

 const handleCheckboxChange = (e) => {
 setFormData({
...formData,
 checkbox: e.target.checked
 ? [...formData.checkbox, e.target.value]
 : formData.checkbox.filter((value) => value !== e.target.value),
 });
 };

 const handleSubmit = (e) => {
 e.preventDefault();

 const isValid = validateFormData(formData);

 if (isValid) {
 alert('Данные успешно записаны!');
 } else {
 alert('Пожалуйста, заполните все поля корректно!');
 }
 };

 const validateFormData = (formData) => {
  if (!formData.num1 || formData.num1.length < 5) {
  return 'Поле должно содержать не менее 5 цифр';
  }
 
  if (!formData.num2 || formData.num2.length > 8) {
  return 'Поле должно содержать не более 8 цифр';
  }
 
  if (!formData.checkbox.length) {
  return 'Необходимо выбрать хотя бы один чекбокс';
  }
 
  if (!formData.string) {
  return 'Строковое поле должно быть заполнено';
  }
 
  if (!formData.time) {
  return 'Поле времени должно быть заполнено';
  }
 
  return '';
  };

 return (
 <Form onSubmit={handleSubmit}>
 <Form.Group>
 <Form.Label htmlFor="num1">Числовое поле (не менее 5 цифр):</Form.Label>
 <Form.Control
 type="text"
 name="num1"
 value={formData.num1}
 onChange={handleChange}
 required
 />
<Form.Feedback type="invalid">{validateFormData(formData)}</Form.Feedback>
 </Form.Group>

 <Form.Group>
 <Form.Label htmlFor="num2">Числовое поле (не более 8 цифр):</Form.Label>
 <Form.Control
 type="text"
 name="num2"
 value={formData.num2}
 onChange={handleChange}
 required
 />
 <Form.Feedback type="invalid">{validateFormData(formData)}</Form.Feedback>
 </Form.Group>

 <Form.Group>
 <Form.Label htmlFor="checkbox">Поле с мультивыбором (checkbox):</Form.Label>
 <div>
 {formData.checkbox.map((value) => (
 <Form.Label>
 <Form.Control
 type="checkbox"
 name="checkbox"
 value={value}
 checked={formData.checkbox.includes(value)}
 onChange={handleCheckboxChange}
 />
 {value}
 </Form.Label>
 ))}
 </div>
 <Form.Feedback type="invalid">{validateFormData(formData)}</Form.Feedback>
 </Form.Group>

 <Form.Group>
 <Form.Label htmlFor="string">Строковое поле:</Form.Label>
 <Form.Control
 type="text"
 name="string"
 value={formData.string}
 onChange={handleChange}
 required
 />
<Form.Feedback type="invalid">{validateFormData(formData)}</Form.Feedback>
 </Form.Group>

 <Form.Group>
 <Form.Label htmlFor="time">Поле времени:</Form.Label>
 <Form.Control
 type="time"
 name="time"
 value={formData.time}
 onChange={handleChange}
 required
 />
<Form.Feedback type="invalid">{validateFormData(formData)}</Form.Feedback>
 </Form.Group>

 <Form.Group>
 <Button type="submit" className="btn btn-green">Отправить</Button>
 </Form.Group>
 </Form>
 );
};

export default Validate;