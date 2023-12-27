import React from 'react';
import { useFormik } from 'formik';
import Input from './Input';
import style from "./Form.module.scss"

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      color: '',
      price: '',
      id: '',
      wheelSize: '',
      description: '',
    },
    onSubmit: (values) => {
      // Ваша логіка для обробки поданих даних
      console.log(values);
    },
    validate: (values) => {
      let errors = {};

      // Приклад валідації для ціни (перевірка, чи введено лише цифри)
      if (!/^\d+$/.test(values.price)) {
        errors.price = 'Ціна повинна містити лише цифри';
      }

      // Додайте інші правила валідації для інших полів

      return errors;
    },
  });

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <form onSubmit={formik.handleSubmit} className={style.form}>
      <Input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        placeholder='Name'
        error={formik.errors.name}
        touched={formik.touched.name}
      />      
      <Input
        id="type"
        name="type"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.type}
        placeholder='Type'
        error={formik.errors.type}
        touched={formik.touched.type}
      />      
      
      <Input
        id="color"
        name="color"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.color}
        placeholder='Color'
        error={formik.errors.color}
        touched={formik.touched.color}
      />      
      <Input
        id="wheelSize"
        name="wheelSize"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.wheelSize}
        placeholder='Wheel size'
        error={formik.errors.wheelSize}
        touched={formik.touched.wheelSize}
      />      
      <Input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.price}
        placeholder='Price $'
        error={formik.errors.price}
        touched={formik.touched.price}
      />      
      <Input
        id="id"
        name="id"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.id}
        placeholder='ID'
        error={formik.errors.id}
        touched={formik.touched.id}
      />  
      <div className={style.textareaField}>
        <textarea
          style={{resize: "none"}}
        className={style.input}
      id="description"
        name="description"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
        placeholder='Description'
        error={formik.errors.description}
        touched={formik.touched.description}>

      </textarea>
      </div>

      <div className={style.btnBox}>
        <button className={style.button} type="submit">Save</button>
      <button className={style.button} type="button" onClick={handleReset}>
        Clear
      </button>
      </div>
    </form>
  );
};

export default Form;