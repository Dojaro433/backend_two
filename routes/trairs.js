 const express = require("express");

 const router = express.Router();




 router.post("/", require("./../controllers/trairs").getPost);

 router.get("/", require("./../controllers/trairs").getAlldata);


 router.get("/:trairsId", require("./../controllers/trairs").getdata);


 router.delete("/:trairsId",require("./../controllers/trairs").deleteData);



 router.put("/:trairsId", require("./../controllers/trairs").Updatedata);
 






    

     

     



    module.exports = router;