import supabase from "../../lib/subabase";

export const fetchSongs = async () => {
  try {
    const { data, error } = await supabase.from("songs").select("*");
    console.log(data + "dataa songs");
    return { data, error };
  } catch (error) {
    console.error("Unexpected error fetching songs:", error);
    return { data: [], error };
  }
};
