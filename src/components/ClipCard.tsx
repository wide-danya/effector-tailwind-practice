interface Props {
  broadcasterName: string
  thumbnailUrl: string
  title: string
  url: string
}

export default function ClipCard({
  broadcasterName,
  thumbnailUrl,
  title,
  url,
}: Props) {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="container flex justify-center">
        <div className="py-4 max-w-sm">
          <a
            className="relative bg-white rounded-lg shadow-lg hover:shadow-xl"
            href={url}
          >
            <img className="rounded-t-lg" src={thumbnailUrl} alt="" />
            <div className="px-8 py-6 bg-white rounded-lg">
              <h1 className="mb-3 text-gray-700 hover:text-gray-900 text-2xl font-bold">
                {broadcasterName}
              </h1>
              <p className="text-gray-700 tracking-wide">{title}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
