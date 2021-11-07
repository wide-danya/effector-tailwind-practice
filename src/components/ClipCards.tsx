import { ClipCard } from 'components'
import { useList } from 'effector-react'
import { $clips } from 'models/search'

export default function ClipCards() {
  return useList($clips, (clipData) => (
    <ClipCard
      broadcasterName={clipData.broadcaster_name}
      thumbnailUrl={clipData.thumbnail_url}
      title={clipData.title}
      url={clipData.url}
    />
  ))
}
