const trairs = require("./../models/trairs");

const UserModel = require("./../models/trairs");





exports.getPost = async (req,res) =>{


try{

    const Savedata = await UserModel(req.body).save();
    res.json(Savedata);
}
  catch(err){

    res.json({err});
  }


}


exports.getAlldata = async(req, res)=>{

try{


    const users = await UserModel.find();
    res.json(users);
}

catch(err){

    res.json({err});
}
}






exports.getdata = async (req, res) =>{

try{

    const user = await UserModel.find({_id : req.params.trairsId});
    res.json(user)
}

catch(err){

  res.json({err});
}


}





exports.deleteData = async (req,res) =>{

 UserModel.findOneAndDelete({id : req.params.trairsId} , (err, data)=>{


    if(err){

        res.json(err);
    }

    else{

        res.json(data)
    }

 })

}


exports.Updatedata = async (req,res) =>{

UserModel.findOneAndUpdate({id : req.params.trairsId}, req.body,{new:true}, (err, data)=>{

if(err){

    res.json(err);
}

else{

    res.json(data);
}


})



}


















// exports.UpdateUser = async (req, res) =>{

  
//     UserModel.findOneAndUpdate({_id : req.params.userId}, req.body,{new:true},
//       (err, data)=>{
                        
//       if(err){
        
//         res.json({err})
//       }else{

//           res.json(data);
//       }


//     });

//   }
