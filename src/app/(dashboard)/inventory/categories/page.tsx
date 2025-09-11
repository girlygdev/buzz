import { createClient } from '@/lib/supabase';

const CategoriesPage = async () => {
	const supabase = await createClient();
	const { data: categories } = await supabase.from('categories').select();

	return <pre>{JSON.stringify(categories, null, 2)}</pre>;
};

export default CategoriesPage;
