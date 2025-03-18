import { supabase } from "./SupabaseConnection";

export const apiFetch = async (url: string, options = {}) => {
  const { data } = await supabase.auth.getSession();
  const token = data?.session?.access_token;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...options,
  };

  return fetch(url, { ...options, headers }).then((res) => res.json());
};