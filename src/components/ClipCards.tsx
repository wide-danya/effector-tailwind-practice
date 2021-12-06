import { ClipCard } from 'components'
import { useList, useStore } from 'effector-react'
import { $clips } from 'models/clips'
import { getPaginatedClipsFx } from 'models/search'
import { Spinner } from 'ui_kit'

export default function ClipCards() {
  const clipCards = useList($clips, (clipData) => (
    <ClipCard
      broadcasterName={clipData.broadcaster_name}
      thumbnailUrl={clipData.thumbnail_url}
      title={clipData.title}
      url={clipData.url}
    />
  ))
  const pending = useStore(getPaginatedClipsFx.pending)

  return (
    <>
      {clipCards}
      <div className={`my-4 ${pending ? 'visible' : 'invisible'} `}>
        <Spinner />
      </div>
    </>
  )
}
