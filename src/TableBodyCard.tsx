import avatarPlaceholderUrl from './assets/Avatar-Placeholder-400x400-1.jpg'

interface Props {
  studentName: string,
  studentNumber: number
}

function TableBodyCard({ studentName, studentNumber }: Props) {
  return (
    <div className='ds-table-body-card p-2'>
      <div className='ds-table-body-col-avatar'>
        <div className='ds-avatar'>
          <img
            src={avatarPlaceholderUrl}
            alt='avatar'
            className='ds-avatar-img'
          />
        </div>
      </div>
      <div className='ds-table-body-col-name flex items-center pl-2'>
        {studentName}
      </div>
      {Array.from({ length: 4 }, (_, i) => i + 1).map((_, i) => (
        <div key={i} className='ds-table-body-col-aspect'>
          <select name={`student_${studentNumber}.aspect_${i + 1}`} className='ds-input' defaultValue={0}>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}

export default TableBodyCard
