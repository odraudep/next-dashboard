type FormControlProps = {
  label: string
  type?: 'text' | 'email' | 'password' | 'number' | 'textarea'
  defaultValue?: string
  onChange: (value: string) => any
}

export default function FormControl({
  label,
  type = 'text',
  defaultValue,
  onChange,
}: FormControlProps) {
  return (
    <label>
      <span className="block mb-1">{label}:</span>
      {type === 'textarea' ? (
        <textarea
          rows={5}
          defaultValue={defaultValue}
          onChange={(e) => onChange(e.target.value)}
        ></textarea>
      ) : (
        <input
          type={type}
          defaultValue={defaultValue}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  )
}
