import  express from "express";
import router from "./src/routes/router.js";
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json()); 

app.use("/api", router);

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
});