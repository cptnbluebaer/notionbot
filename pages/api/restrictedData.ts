import { NextApiResponse, NextApiRequest } from "next";
import { supabase } from "@/lib/SupabaseConnection";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  // Get Authorization token from request headers
  const auth = req.headers.authorization
  const token = req.headers.authorization?.split(" ")[1];
  if (!token || !auth?.startsWith("Bearer") || token === undefined) {
    return res.status(401).json({ error: "Unauthorized. No token provided." });
  }

  // Validate token with Supabase
  const { data, error } = await supabase.auth.getUser(token);
  if(!data || !data.user) res.status(401).json({
    message: "Not correct data"
  })
  res.status(200).json({ message: "You are logged in!", user: data.user });

    
       
}