import{FullConfig} from "@playwright/test";
//import dotenv from 'dotenv';
import 'dotenv/config';
//dotenv.config();

async function globalsetup(config:FullConfig) {
    
    console.log("Environment:"+process.env.test_env);
    if(process.env.test_env)
    {
        require('dotenv').config({
            path:`.env.${process.env.test_env}`,
            override: true
        })
    }
    
}
export default globalsetup;