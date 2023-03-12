import { adminPagesMap } from '@/data/static'
import MenuItem from './MenuItem'

type MenuCategoryProps = {
  category: string
}

export default function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <li className="pb-2 border-b border-b-gray-400 mb-4">
      <h4 className="font-normal text-blue-400">{category}</h4>

      <ul className="flex flex-col gap-2">
        {adminPagesMap.pages
          .filter((page) => page.category === category)
          .map((page) => (
            <MenuItem
              key={page.label}
              icon={page.icon}
              label={page.label}
              path={page.path}
            />
          ))}
      </ul>
    </li>
  )
}
