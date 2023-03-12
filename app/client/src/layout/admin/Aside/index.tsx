import { GrNotification } from 'react-icons/gr'
import Dropdown from '@/components/Dropdown'
import { useAppSelector } from '@/hook'

export default function Aside() {
  const user = useAppSelector((state) => state.user.data)

  return (
    <header className="h-screen relative bg-gray-900 shadow-xl overflow-auto z-10 md:min-w-[16rem]">
      <nav>
        <div className="flex items-center gap-4 mb-8 px-4 pt-4">
          <Dropdown
            icon={<GrNotification size={18} className="stroke-white" />}
            menuItems={[
              { label: 'Notification 1', path: '/' },
              { label: 'Notification 2', path: '/' },
            ]}
          />

          <Dropdown label={user.firstName} />
        </div>

        <div className="px-4 py-2 rounded-tl-3xl bg-gray-700">
          <ul className="flex flex-col gap-8">
            <li>
              <h4>Topic 1</h4>

              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </li>

            <li>
              <h4>Topic 2</h4>

              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </li>

            <li>
              <h4>Topic 3</h4>

              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </li>

            <li>
              <h4>Topic 4</h4>

              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
