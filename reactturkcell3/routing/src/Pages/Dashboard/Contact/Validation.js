import { object, string } from 'yup';

const contaxtSchema = object({
    firstName: string().required(),
    lastName: string().required(),
    email: string().email().required(),
    message:string().min(5).required()
  });


export default contaxtSchema  