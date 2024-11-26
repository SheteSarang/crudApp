import User from "../model/userModel.js";
//FIRST API TO CREATE A RECORD
export const create = async(req,res)=>{
    try{

        const userData = new User(req.body);
        if(!userData){
            return res.status(404).json({msg:"user data not found"});
        }
        const savedData =  await userData.save();
        res.status(200).json(savedData);

    } catch(error){
        res.status(500).json({error: error});
        

    }
}
//2nd API to fetch all he records
export const getAll = async(req, res) => {
    try{

        const userData =  await User.find();
        if(!userData){
            return res.status(404).json({msg:"user data not found"});
        }
        res.status(200).json(userData);

    } catch(error){
        res.status(500).json({error: error}); 
    }
}
//3rd API to fetch single record with its ID
export const getOne = async(req, res) => {
    try{
        const id = req.params.id; // fetching ID from URL
     
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"user not found"});
        }
        res.status(200).json(userExist);

    }catch(error){
        res.status(500).json({error: error}); 
    }}
//4TH api TO UPDATE RECORD BY ID
 export const update = async(req, res) => {
        try{
            const id = req.params.id; // fetching ID from URL
         
            const userExist = await User.findById(id);
            if(!userExist){
                return res.status(401).json({msg:"user not found"});
            }
            
            const updatedData = await User.findByIdAndUpdate(id, req.body);
            res.status(200).json(req.body);
            
    
        }catch(error){
            res.status(500).json({error: error}); 
        }}
export const deleteUser = async(req, res) =>{
    try{

        const id = req.params.id;
        console.log(id);
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"user not exist"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg: "user deleted successfully"});

    } catch(error){
        res.status(500).json({error: error}); 
    }}