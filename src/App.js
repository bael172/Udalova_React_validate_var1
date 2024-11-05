import logo from './logo.svg';
import './App.css';
import {Form,Button} from 'react-bootstrap'
import React , {useState} from 'react'


function App() {
  //document.body.style.backgroundColor = "0F1A19"
  const [pole1,setPole1] = useState('asd')
  const [pole2,setPole2] = useState('asd')

  const skills = ["Поддержка серверного оборудования","Анализ деятельности предприятия","Составление ТЗ","Диаграммы и анализ","Числовые методы","Linux",
    "Backend разработка","Frontend разработка","Программирование контроллеров","Архитектура ЭРМ и электронных устройств"
  ]
  let skills_check = skills.map((elem)=><Form.Check className="CheckBox" type='checkbox' label={elem}/>)
  return (
    <>
    <Form className="container_center">
      <Form.Group className="mb-3 FormGroup">
        <Form.Label>Числовое поле</Form.Label>
        <Form.Control type="text" placeholder="Введите не менее 5 цифр" required value={pole1} onChange={(e)=>setPole1(e.target.value)}></Form.Control>
        <Form.Feedback type="invalid">Не менее 5 цифр</Form.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 FormGroup">
        <Form.Label>Числовое поле</Form.Label>
        <Form.Control type="text" placeholder="Введите не более 8 цифр" required value={pole2} onChange={(e)=>setPole2(e.target.value)}></Form.Control>
        <Form.Feedback type="invalid">Не более 8 цифр</Form.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Выберите ваши навыки:</Form.Label>
          {skills_check}
      </Form.Group>
      <Form.Group className="mb-3 FormGroup">
        <Form.Control type="text" required></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3 FormGroup">
        <Form.Control type="text" placeholder="Введите имя"></Form.Control>
        <Form.Feedback type="invalid">Введите Имя</Form.Feedback>
      </Form.Group>
      <Button type="submit">Отправить</Button>
    </Form>
    <div>Лох</div>
    </>
  )
}

export default App();
