 import * as Yup from 'yup';

 const CategorySchema = Yup.object().shape({
	title: Yup.string().required('Title is required.').max(250),
	description: Yup.string().max(250, 'Description must be at most 250 characters')
 })

 export default CategorySchema