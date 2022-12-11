import user from "../database/schemas/user";

class UserController {

    async create(request:Request,response:Response){
        const { name, email, password } = request.body;
        try {
            const User = await user.create({
                name,
                email,
                password
            });
        }catch(error){
            return response.status(500).send({
                error:"Registrtion Failed",
                message : error
            })
        }
    }
}
export default new UserController;