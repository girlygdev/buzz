import clsx from 'clsx';
import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from '@headlessui/react';
import { Fragment, useMemo } from 'react';
import { DynamicLucideIcon } from '../ui/DynamicLucideIcon';

const foodIcons = [
	{ value: 'amphora', label: 'Amphora' },
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana' },
	{ value: 'beer', label: 'Beer' },
	{ value: 'cake-slice', label: 'Cake Slice' },
	{ value: 'candy', label: 'Candy' },
	{ value: 'carrot', label: 'Carrot' },
	{ value: 'chef-hat', label: 'Chef Hat' },
	{ value: 'cherry', label: 'Cherry' },
	{ value: 'citrus', label: 'Citrus' },
	{ value: 'coffee', label: 'Coffee' },
	{ value: 'cookie', label: 'Cookie' },
	{ value: 'cooking-pot', label: 'Cooking Pot' },
	{ value: 'croissant', label: 'Croissant' },
	{ value: 'dessert', label: 'Dessert' },
	{ value: 'donut', label: 'Donut' },
	{ value: 'drumstick', label: 'Drumstick' },
	{ value: 'egg', label: 'Egg' },
	{ value: 'fish', label: 'Fish' },
	{ value: 'glass-water', label: 'Glass Water' },
	{ value: 'grape', label: 'Grape' },
	{ value: 'ham', label: 'Ham' },
	{ value: 'hop', label: 'Hop' },
	{ value: 'ice-cream-bowl', label: 'Ice Cream Bowl' },
	{ value: 'ice-cream-cone', label: 'Ice Cream Cone' },
	{ value: 'leafy-green', label: 'Leafy Green' },
	{ value: 'lollipop', label: 'Lollipop' },
	{ value: 'martini', label: 'Martini' },
	{ value: 'microwave', label: 'Microwave' },
	{ value: 'milk', label: 'Milk' },
	{ value: 'nut', label: 'Nut' },
	{ value: 'pizza', label: 'Pizza' },
	{ value: 'popcorn', label: 'Popcorn' },
	{ value: 'popsicle', label: 'Popsicle' },
	{ value: 'refrigerator', label: 'Refrigerator' },
	{ value: 'salad', label: 'Salad' },
	{ value: 'sandwich', label: 'Sandwich' },
	{ value: 'shell', label: 'Shell' },
	{ value: 'snail', label: 'Snail' },
	{ value: 'soup', label: 'Soup' },
	{ value: 'torus', label: 'Torus' },
	{ value: 'utensils', label: 'Utensils' },
	{ value: 'vegan', label: 'Vegan' },
	{ value: 'wheat', label: 'Wheat' },
	{ value: 'wine', label: 'Wine' },
];

type CategoryIconSelectProps = {
	name: string;
	value: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setFieldValue: (field: string, value: any) => void;
};

const CategoryIconSelect: React.FC<CategoryIconSelectProps> = ({
	name,
	value,
	setFieldValue,
}) => {
	const onChangeValue = (value: string) => {
		setFieldValue(name, value);
	};

	const selectedIcon = useMemo(
		() => foodIcons.find((icon) => icon.value === value),
		[value]
	);

	return (
		<div className=''>
			<Listbox value={value} onChange={onChangeValue}>
				<ListboxButton
					className={
						'border rounded-sm p-2 w-full text-left capitalize flex items-center gap-2'
					}
				>
					<DynamicLucideIcon
						color='white'
						iconName={selectedIcon?.value}
						size={22}
					/>
					<span className='text-xs'>{selectedIcon?.label}</span>
				</ListboxButton>

				<ListboxOptions
					anchor='bottom start'
					className='h-50 my-1 px-1 border bg-neutral-800 rounded-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1'
				>
					{foodIcons.map((icon) => (
						<ListboxOption
							key={icon.value}
							value={icon.value}
							as={Fragment}
						>
							{({ focus, selected }) => (
								<div
									className={clsx(
										'flex items-center gap-2 cursor-pointer p-1 rounded-sm  mx-1 w-40',
										focus &&
											'font-bold bg-cyan-900/50',
										selected &&
											'font-bold bg-cyan-900/50',
									)}
								>
									<DynamicLucideIcon
										iconName={icon.value}
										color={'white'}
										size={22}
									/>
									<span className='text-xs'>
										{icon.label}
									</span>
								</div>
							)}
						</ListboxOption>
					))}
				</ListboxOptions>
			</Listbox>
		</div>
	);
};

export default CategoryIconSelect;
