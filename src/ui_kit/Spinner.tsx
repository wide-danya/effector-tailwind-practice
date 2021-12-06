interface Props {
  width?: number
  height?: number
}

export default function Spinner({ width = 2, height = 2 }: Props) {
  return (
    <div
      className={`w-${width} h-${height} m-auto border-b-2 border-gray-900 rounded-full animate-spin`}
    />
  )
}
