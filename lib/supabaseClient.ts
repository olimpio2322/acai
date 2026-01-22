import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase
// Para produção, substitua estas strings pelas suas chaves reais do Painel do Supabase
// ou use variáveis de ambiente (process.env.REACT_APP_SUPABASE_URL)
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'https://sua-url-do-projeto.supabase.co';
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || 'sua-chave-anonima-publica';

// Cria o cliente apenas se as chaves estiverem presentes (evita erro no template vazio)
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
