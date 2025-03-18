import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/SupabaseConnection";

export default async function handler (
    req: NextApiRequest, res: NextApiResponse
){
    if(req.method === "POST"){
        try {
            let { data, error } = await supabase.auth.signUp({
                email: 'lujo.hoffmann29@gmail.com',
                password: 'VEoPGEnKbOUPmhStdzQu'
              })
    
              res.status(200).json({
                message: data, error
              })
    
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    }

}