'use client';

import { Category } from '@/utils/definition';
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import React, { useMemo, useState, useEffect, useCallback } from 'react';

import { DynamicLucideIcon } from '@/components/ui/DynamicLucideIcon';
import RowActions from './table/rowActions';
import { ColorBadge } from './table/cells';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

type CategoryListProps = {
	data: Category[];
};

const CategoryList: React.FC<CategoryListProps> = ({ data }) => {
	const router = useRouter();

	const [categories, setCategories] = useState<Category[]>(data);

	useEffect(() => setCategories(data), [data]);

	const onDelete = useCallback((id: string | number) => {
		// delete record
	}, [])

	const columns: ColumnDef<Category>[] = useMemo(
		() => [
			{
				header: 'Title',
				accessorKey: 'name',
			},
			{
				header: 'Color',
				accessorKey: 'color',
				cell: ({ getValue }) => {
					const bg = String(getValue());
					return <ColorBadge bgClass={bg} />;
				},
			},
			{
				header: 'Icon',
				accessorKey: 'icon',
				cell: ({ getValue }) => {
					const name = String(getValue());
					return <DynamicLucideIcon iconName={name} color='white' />;
				},
			},
			{
				id: 'actions',
				header: () => <span className='block text-right'>Actions</span>,
				enableSorting: false,
				enableHiding: false,
				cell: ({ row }) => (
					<RowActions id={row.original.id} onDelete={onDelete} />
				),
			},
		],
		[onDelete]
	);

	const table = useReactTable({
		categories,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className='w-full'>
			<div className='flex justify-end my-5'>
				<Button
					className='w-40'
					onClick={() => router.push('/inventory/categories/add')}
				>
					Add Category
				</Button>
			</div>
			<div className='rounded-sm border border-neutral-800'>
				<table className='w-full text-sm'>
					<thead className=''>
						<tr>
							{table.getHeaderGroups().map((hg) =>
								hg.headers.map((h) => (
									<th
										key={h.id}
										className='px-3 py-2 text-left font-medium leading-none'
									>
										{h.isPlaceholder
											? null
											: flexRender(
													h.column.columnDef.header,
													h.getContext()
											  )}
									</th>
								))
							)}
						</tr>
					</thead>
					<tbody>
						{table.getRowModel().rows.map((r) => (
							<tr
								key={r.id}
								className='border-t border-neutral-800'
							>
								{r.getVisibleCells().map((c) => (
									<td key={c.id} className='px-3 py-2'>
										{flexRender(
											c.column.columnDef.cell,
											c.getContext()
										)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CategoryList;
