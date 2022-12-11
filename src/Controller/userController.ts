import user from "../database/schemas/user";
import { Request ,  Response } from 'express';


class UserController {

    async update(request:Request,response:Response){
        const{name, email, password} = request.body;

        try {

           if(await user.findOneAndUpdate({ email })){
                return response.status(200).send({
                    message:"update with success"
                });
           } 
            
        } catch (error) {
            return response.status(500).send({
                message: "Not possisible make update"
            });
        }

    }



    async delete(request:Request,response:Response){
            
        const{email} = request.body;
        try {
            if(await user.findOneAndDelete({ email })){
                return response.status(200).send({
                    message:"Deleted with success"
                });
            }else{
                return response.status(500).send({
                    message:"User don't exists"
                });
            }
            
        } catch (error) {
            return response.status(500).send({
                error:"Something wrong happend, try again",
                message : error
            })
        }
    }

    async find(_request:Request,response:Response){
        
        try {
            
            const users = await user.find();

            return response.json(users);

        } catch(error){
            return response.status(500).send({
                error:"Something wrong happend, try again",
                message : error
            })
        }
    }
    async create(request:Request,response:Response){
        const { name, email, password } = request.body;
        try {
            const userExists = await user.findOne({ email });
            if(userExists){
                return response.status(400).json({
                    error:"Ooops",
                    message:"User already existes"  
                });
            }
            const User = await user.create({
                name,
                email,
                password
            });
            return response.json(User);
        }catch(error){
            return response.status(500).send({
                error:"Registration Failed",
                message : error
            })
        }
    }
}
export default new UserController;