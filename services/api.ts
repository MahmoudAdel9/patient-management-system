import { supabase } from '@/lib/supabase'

export const getDoctors = async () => {
  const { data: doctors, error } = await supabase.from('doctors').select('*')

  return doctors
}
